<?php
require_once("db_parameters.php");

abstract class Action {
	const GET_MAP_DATA = 'getMapData';
	const GET_COMPONENTS = 'getComponents';
}

class Interactive_App {
	const US_INDEX = 'us';
	const WORLD_INDEX = 'world';

	private $con;

	public function __construct($username, $password) {
		$this->con = new mysqli('localhost', $username, $password, 'quality_of_life');
	}

	private function get_max_year() {
		$result = $this->con->query('SELECT MAX(year) AS max_year FROM api_components_state');
		$row = mysqli_fetch_array($result, MYSQLI_ASSOC);

		return $row['max_year'];
	}

	public function run($index, $action) {
		$search_type = ($index == self::US_INDEX) ? 'state' : 'int';

		if($action == Action::GET_COMPONENTS) {
			$result = $this->con->query('SELECT name FROM api_components_' . $search_type . '_list');
			
			$components = array();
			foreach($result as $component) {
				array_push($components, $component['name']);
			}
			echo json_encode($components);
		}
		else if($action == Action::GET_MAP_DATA) {
			$max_year = $this->get_max_year();
			$sql = 
				'SELECT * ' . 
				'FROM api_components_' . $search_type . ' ' .
				'	INNER JOIN api_' . (($search_type == 'state') ? 'state' : 'countries') . ' ' .
				'	ON api_components_' . $search_type . '.' . (($search_type == 'state') ? 'state' : 'country') . '=api_' . (($search_type == 'state') ? 'state' : 'countries') . '.abbr ' .
				'WHERE year=' . $max_year;
			
			$result = $this->con->query($sql);

			$map_data = array();
			foreach($result as $rows ) {
				array_push($map_data, $rows);
			}

			echo json_encode($map_data);
		}
	}
}

$app = new Interactive_App($username, $password);
$app->run($_POST['index'], $_POST['action']);