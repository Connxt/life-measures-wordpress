<?php

header('Content-Type: application/json; charset=utf8');

/** Set up WordPress environment */
// Was commented because we're not using Wordpress
// require_once($_SERVER["DOCUMENT_ROOT"] . '/wp-load.php');

//Was uncommented because it is needed for database processes.
require_once('db.php');

require 'funcs.php';

// Was commented because $pathArray[1] should be $pathArray[0]; $pathArray[2] should be $pathArray[1]
// $pathArray = (!empty($_GET['path'])) ? array_filter(explode('/', $_GET['path'])) : array_filter(explode('/', $_SERVER['PATH_INFO']));

$tmpPathArray = (!empty($_GET['path'])) ? array_filter(explode('/', $_GET['path'])) : array_filter(explode('/', $_SERVER['PATH_INFO']));

foreach($tmpPathArray as $indx => $v)
{
	$pathArray[$indx-1] = $v;
}


//Was added because $_GET['path'] always return null. It is needed for completing getEncodedString() function.
$_GET['path'] = $_SERVER['PATH_INFO'];

$srchArgs = array();

$srchArgs['queryArgs'] = $_GET;
foreach($pathArray as $terms) {
	$termsTest = explode(':', urldecode($terms));
	if(count($termsTest) > 1) {
		$srchArgs['queryArgs'][$termsTest[0]] = $termsTest[1];
	} else {
		switch ($terms) {
			case 'map':
				$srchArgs['source'] = $terms;
				break;
			case 'summary':
				$srchArgs['searchType'] = $terms;
				break;
			case 'scores':
			case 'locations':
			case 'dimensionlist':
			case 'componentlist':
			case 'subcomponentlist':
			case 'subsubcomponentlist':
			case 'dimensions':
			case 'components':
			case 'subcomponents':
			case 'subsubcomponents':
				$srchArgs['searchType'] = $terms;
				break;
			default:
				break;
		}
	}
}

$encodedPath = getEncodedString($_GET);

if($pathArray[0] == 'us' || $pathArray[0] == 'int') {
	$srchArgs['locale'] = $pathArray[0];
} else {
	killIt('invalid search.. please try again.');
}

/*
 * Check to make sure that a key exists
 * if not, redirect to homepage
 * chris' key: 925e0310abb4dc3b5fcfbc9e6242d64e5f7ecfad
 */

@$key = $srchArgs['queryArgs']['key'];

if(empty($key)) {
	foreach($pathArray as $pathArgs) {
		$blown = explode(':', $pathArgs);
		if($blown[0] == 'key')
			$key = $blown[1];
	}
}

if (!keyCheck($key)) {
	killIt('key missing, or invalid...');
}

/*
 * Check to see if query already cached in DB
 * If yes, then write out results and go no further.. if not, then keep going
 */


$cacheObjQuery = mysql_query('SELECT results FROM api_results_cache WHERE path = "'.$encodedPath.'" LIMIT 0,1 ');
if($cacheObjQuery) {
	while ($res = mysql_fetch_assoc($cacheObjQuery)) {
		echo $res['results'];
		die();
	}
}



//passed all of the checks, let's pull some data
require 'classes/apiclass.php';

/*
 * create mapData object
 */
$data = new getMapData;


if(!empty($srchArgs['searchType'])) {
	switch($srchArgs['searchType']) {
		case 'scores':
			if(count($srchArgs['queryArgs']) > 1) {
				$data->getSpecificMapScores($srchArgs['locale'], $srchArgs['queryArgs'], $encodedPath);
			} else {
				$data->getSpecificMapScores($srchArgs['locale'], $encodedPath);
			}
			break;
		case 'locations':
			$data->getLocations($srchArgs['locale'], true, $encodedPath);
			break;

		case 'summary':
			$data->getAllMapScores($srchArgs['locale']);
			break;
		case 'dimensionlist':
		case 'componentlist':
		case 'subcomponentlist':
		case 'subsubcomponentlist':
			$data->getComponentsList($srchArgs['locale'], $srchArgs['searchType']);
			break;
		case 'dimensions':
		case 'components':
		case 'subcomponents':
		case 'subsubcomponents':
			$data->getSpecificObjects($srchArgs['locale'], $srchArgs['searchType']);
			break;
		default: break;
	}
}
?>
