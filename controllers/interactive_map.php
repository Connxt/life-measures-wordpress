<?php
require_once("db_parameters.php");

abstract class Index {
	const US_INDEX = 'us';
	const WORLD_INDEX = 'world';
}

abstract class Search_Type {
	const US_SEARCH_TYPE = 'state';
	const WORLD_SEARCH_TYPE = 'int';
}

abstract class Location_Type {
	const US_LOCATION_TYPE = 'state';
	const WORLD_LOCATION_TYPE = 'countries';
}

class Interactive_Map {
	private $con;

	public function __construct($username, $password) {
		$this->con = new mysqli('localhost', $username, $password, 'quality_of_life');
	}

	private function get_index($search_type) {
		if($search_type == Search_Type::US_SEARCH_TYPE) {
			return Index::US_INDEX;
		}
		else {
			return Index::WORLD_INDEX;
		}
	}

	public function run() {
		$search_types = array(Search_Type::US_SEARCH_TYPE, Search_Type::WORLD_SEARCH_TYPE);
		$years = array();
		$locations = array();
		$dimensions = array();
		$dimensions_data = array();
		$components_data = array();

		foreach($search_types as $search_type) {
			// years
			$result = $this->con->query('SELECT DISTINCT year FROM api_' . $search_type . '_summary_score ORDER BY year ASC');
			$years[$this->get_index($search_type)] = array();

			foreach($result as $row) {
				array_push($years[$this->get_index($search_type)], $row['year']);
			}

			// locations
			$location_type = ($search_type == Search_Type::US_SEARCH_TYPE) ? Location_Type::US_LOCATION_TYPE : Location_Type::WORLD_LOCATION_TYPE;
			$result = $this->con->query('SELECT name, abbr, latitude, longitude FROM api_' . $location_type);
			$locations[$this->get_index($search_type)] = array();

			foreach($result as $row) {
				array_push($locations[$this->get_index($search_type)], array(
					'name' => $row['name'],
					'abbr' => $row['abbr'],
					'coords' => array($row['latitude'], $row['longitude'])
				));
			}

			// dimensions
			$result = $this->con->query('SELECT name FROM api_dimensions_list ORDER BY weight ASC');
			$temp_dimensions = array();
			$dimensions[$this->get_index($search_type)] = array();

			foreach($result as $row) {
				array_push($temp_dimensions, $row['name']);
			}

			foreach($temp_dimensions as $temp_dimension) {
				$components = $this->con->query('SELECT name FROM api_components_' . $search_type . '_list WHERE dimension="' . $temp_dimension . '" ORDER BY weight ASC');

				foreach($components as $component) {
					$dimensions[$this->get_index($search_type)][$temp_dimension][] = $component['name'];
				}
			}

			// dimensions data
			$result = $this->con->query('SELECT * FROM api_dimensions_' . $search_type);
			$dimensions_data[$this->get_index($search_type)] = array();

			foreach($result as $row) {
				$dimensions_data[$this->get_index($search_type)][] = $row;
			}

			// components data
			$result = $this->con->query('SELECT * FROM api_components_' . $search_type);
			$components_data[$this->get_index($search_type)] = array();

			foreach($result as $row) {
				$components_data[$this->get_index($search_type)][] = $row;
			}
		}

		$data['years'] = $years;
		$data['locations'] = $locations;
		$data['dimensions'] = $dimensions;
		$data['dimensions_data'] = $dimensions_data;
		$data['components_data'] = $components_data;

		ob_start('ob_gzhandler');
		echo json_encode($data);
		// echo json_encode($data, JSON_UNESCAPED_UNICODE);
		// echo $data;
	}
}

$interactive_map = new Interactive_Map($username, $password);
$interactive_map->run();