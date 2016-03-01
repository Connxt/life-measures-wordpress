<?php
require_once("db_parameters.php");
$con = new mysqli('localhost', $username, $password, 'quality_of_life');

$us_index = 'us';
$world_index = 'world';

$action = $_POST['action'];
$index = $_POST['index'];

if($action == 'getLocations') {
	$locations = array();

	if($index == $us_index) {
		foreach($con->query('SELECT * FROM api_state') as $location) {
			array_push($locations, array(
				'id' => $location['id'],
				'name' => $location['name'],
				'abbr' => $location['abbr'],
				'index' => 'us'
			));
		}
	}
	else {
		foreach($con->query('SELECT * FROM api_countries') as $location) {
			array_push($locations, array(
				'id' => $location['id'],
				'name' => $location['name'],
				'abbr' => $location['abbr'],
				'index' => 'world'
			));
		}
	}

	echo json_encode($locations);
}
else if($action == 'getDimensionsData') {
	$location_abbr = $_POST['locationAbbr'];
	$location_index = ($index == $us_index) ? 'state' : 'int';
	$location_type = ($index == $us_index) ? 'state' : 'country';
	$data = array();

	foreach($con->query('SELECT * FROM api_dimensions_' . $location_index . ' WHERE ' . $location_type . '="' . $location_abbr . '"') as $yearly_dimensions) {
		array_push($data, array(
			'year' => $yearly_dimensions['year'],
			'dimensions' => array(
				'opportunity' => $yearly_dimensions['opportunity'],
				'health_and_environment' => $yearly_dimensions['health_and_environment'],
				'freedom' => $yearly_dimensions['freedom'],
				'community_and_relationships' => $yearly_dimensions['community_and_relationships'],
				'living_standard' => $yearly_dimensions['living_standard'],
				'peace_and_security' => $yearly_dimensions['peace_and_security']
			)
		));
	}

	echo json_encode($data);
}
else if($action == 'getComponents') {
	$dimension = $_POST['dimension'];
	$location_index = ($index == $us_index) ? 'state' : 'int';
	$location_type = ($index == $us_index) ? 'state' : 'country';
	$data = array();

	foreach($con->query('SELECT name FROM api_components_' . $location_index . '_list WHERE dimension="' . $dimension . '"') as $component) {
		array_push($data, $component['name']);
	}

	echo json_encode($data);
}
else if($action == 'getComponentsData') {
	$location_abbr = $_POST['locationAbbr'];
	$dimension = $_POST['dimension'];
	$location_index = ($index == $us_index) ? 'state' : 'int';
	$location_type = ($index == $us_index) ? 'state' : 'country';
	$data = array();
	$components = array();

	foreach($con->query('SELECT name FROM api_components_' . $location_index . '_list WHERE dimension="' . $dimension . '"') as $component) {
		array_push($components, $component['name']);
	}

	foreach($con->query('SELECT year, ' . implode(",", $components) . ' FROM api_components_' . $location_index . ' WHERE ' . $location_type . '="' . $location_abbr . '"') as $yearly_components) {
		$year = $yearly_components['year'];
		unset($yearly_components['year']);
		array_push($data, array(
			'year' => $year,
			'components' => $yearly_components
			)
		);
	}

	echo json_encode($data);
}