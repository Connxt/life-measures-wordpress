<?php
require_once("db_parameters.php");

abstract class Index {
	const WORLD = "world";
	const US = "us";
}

abstract class Action {
	const GET_INITIAL_DATA = "getInitialData";
	const GET_LOCATIONS = "getLocations";
	const GET_DATA_STRUCTURE = "getDataStructure";
	const GET_FOUNDATIONS = "getDimensionsList";
	const GET_LOCATION_SCORES = "getLocationScores";
}

class Data {
	private $con;

	public function __construct($username, $password) {
		$this->con = new mysqli(
			"localhost",
			$username,
			$password,
			"quality_of_life"
		);
	}

	public function get_initial_data() {
		$locations = $this->get_locations();
		$data_structure = $this->get_data_structure();

		return array(
			"locations" => $locations,
			"data_structure" => $data_structure
		);
	}

	public function get_data_structure() {
		$foundations = array();
		$indexes = array(Index::WORLD, Index::US);

		foreach($indexes as $index) {
			$table_suffix = ($index == Index::WORLD) ? "int" : "state";

			foreach($this->con->query("SELECT * FROM api_dimensions_list") as $foundation) {
				$foundations[$index]["foundations"][$foundation["name"]] = array(
					"display_name" => $foundation["display_name"],
					"weight" => $foundation["weight"],
					"components" => array()
				);

				foreach($this->con->query("SELECT * FROM api_components_" . $table_suffix . "_list WHERE dimension='" . $foundation["name"] . "'") as $component) {
					$foundations[$index]["foundations"][$foundation["name"]]["components"][$component["name"]] = array(
						"display_name" => $component["display_name"],
						"subcomponents" => array()
					);

					foreach($this->con->query("SELECT * FROM api_subcomponents_" . $table_suffix . "_list WHERE component='" . $component["name"] . "'") as $subcomponent) {
						$foundations[$index]["foundations"][$foundation["name"]]["components"][$component["name"]]["subcomponents"][$subcomponent["name"]] = array(
							"display_name" => $subcomponent["display_name"]
						);
					}
				}
			}
		}

		return $foundations;
	}

	public function get_locations() {
		$locations = array(
			"world" => array(),
			"us" => array()
		);

		$sql = "SELECT * FROM ";

		foreach($this->con->query($sql . "api_countries") as $location) {
			array_push($locations["world"], $location);
		}

		foreach($this->con->query($sql . "api_state") as $location) {
			array_push($locations["us"], $location);
		}

		return $locations;
	}

	public function get_foundations() {
		$foundations = array();

		foreach($this->con->query("SELECT * FROM api_dimensions_list") as $foundation) {
			array_push($foundations, $foundation);
		}

		return $foundations;
	}

	public function get_location_scores($index, $abbr) {
		$data = array();
		$location_field = ($index == Index::WORLD) ? "country" : "state";
		$table_suffix = ($index == Index::WORLD) ? "int" : "state";
		$locations_table = ($index == Index::WORLD) ? "api_countries" : "api_state";

		$data = mysqli_fetch_assoc($this->con->query("SELECT * FROM " . $locations_table . " WHERE abbr='" . $abbr . "'"));
		$data["overall_foundation_scores"] = array();
		$data["summary_scores"] = array();
		$data["foundations"] = array();
		$data["components"] = array();
		$data["subcomponents"] = array();

		// overall_foundation_scores
		$foundation_names = array();
		foreach($this->con->query("SELECT * FROM api_dimensions_list") as $foundation) {
			array_push($foundation_names, $foundation["name"]);
			$data["overall_foundation_scores"][$foundation["name"]] = 0;
		}

		$num_of_years = 0;
		foreach($this->con->query("SELECT * FROM api_dimensions_" . $table_suffix . " WHERE " . $location_field . "='" . $abbr . "'") as $foundation) {
			foreach($foundation_names as $foundation_name) {
				$data["overall_foundation_scores"][$foundation_name] = $data["overall_foundation_scores"][$foundation_name] + $foundation[$foundation_name];
			}
			$num_of_years++;
		}

		$overall_well_being = 0;
		foreach($foundation_names as $foundation_name) {
			$data["overall_foundation_scores"][$foundation_name] = $data["overall_foundation_scores"][$foundation_name] / $num_of_years;
			$overall_well_being = $overall_well_being + $data["overall_foundation_scores"][$foundation_name];
		}

		$data["overall_foundation_scores"]["overall_well_being"] = $overall_well_being / count($foundation_names);

		// summary_scores
		foreach($this->con->query("SELECT * FROM api_" . $table_suffix . "_summary_score WHERE " . $location_field . "='" . $abbr . "'") as $summary_score) {
			array_push($data["summary_scores"], $summary_score);
		}

		// foundations
		foreach($this->con->query("SELECT * FROM api_dimensions_" . $table_suffix . " WHERE " . $location_field . "='" . $abbr . "'") as $foundation) {
			array_push($data["foundations"], $foundation);
		}

		// components
		foreach($this->con->query("SELECT * FROM api_components_" . $table_suffix . " WHERE " . $location_field . "='" . $abbr . "'") as $component) {
			array_push($data["components"], $component);
		}

		// subcomponents
		foreach($this->con->query("SELECT * FROM api_subcomponents_" . $table_suffix . " WHERE " . $location_field . "='" . $abbr . "'") as $subcomponent) {
			array_push($data["subcomponents"], $subcomponent);
		}

		return $data;
	}
}

if(isset($_POST["action"])) {
	$action = $_POST["action"];
	$data = new Data($username, $password);

	if($action == Action::GET_INITIAL_DATA) {
		echo json_encode($data->get_initial_data());
	}
	else if($action == Action::GET_LOCATIONS) {
		echo json_encode($data->get_locations());
	}
	else if($action == Action::GET_DATA_STRUCTURE) {
		echo json_encode($data->get_data_structure());
	}
	else if($action == Action::GET_FOUNDATIONS) {
		echo json_encode($data->get_foundations());
	}
	else if($action == Action::GET_LOCATION_SCORES) {
		$index = $_POST["index"];
		$abbr = $_POST["abbr"];

		echo json_encode($data->get_location_scores($index, $abbr));
	}
}