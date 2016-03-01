<?php

/*
 * main API class
 * details to follow
 *
 * */

class getMapData {

	function getSpecificMapScores($local, $args=array()) {
		$out='';
		if($local == 'int') {
			$wchLocale = 'api_countries';
			$objQueryEnder = '';
			$tablePref = 'int';
			$tableField = 'country';
		} else {
			$wchLocale = 'api_state';
			$objQueryEnder = '';
			$tablePref = 'state';
			$tableField = 'state';
		}

		$objQuery = 'SELECT abbr AS thisAbbr, name AS thisName, region AS thisRegion, latitude, longitude FROM '.$wchLocale;

		$where='';
		$tmm = array();
		$defArgs = array(
			//'years' => '2012',
			'wch' => 'map',
			'queryArgs' => array()
		);
		$options = array_merge($defArgs, $args);

		if($options['locations']) {
			//$where .= ' WHERE ';
			$locationsArray = explode('|', $options['locations']);
			$locationsArrayUpper = array_map("strtoupper", $locationsArray);
			if(count($locationsArray) > 1) {
				$where .= " WHERE abbr IN ('".implode("','", $locationsArrayUpper)."') ";
			} else {
				$where .= " WHERE abbr = '".strtoupper($locationsArray[0])."'";;
			}
		}
		if($options['years']) {
			$yearsArray = explode('|', $options['years']);

			if(count($yearsArray) > 1) {
				$year .= " AND year IN (".implode(',', $yearsArray).") ";
			} else {
				$year .= " AND year = '".$yearsArray[0]."'";
			}
		}

		if($options['dimensions']) {
			$dimensionsArray = explode('|', $options['dimensions']);
		}
		if($options['components']) {
			$componentsArray = explode('|', $options['components']);
		}

		$finalQuery = $objQuery.$where.$objQueryEnder;
		$loopStates = array();

		//echo '{';
		$obj = mysql_query($finalQuery);
		$numResults = mysql_num_rows($obj);
		$rowCount = 0;
		while ($row = mysql_fetch_assoc($obj)) {
			$allScoresRes = array();

			$finalScore = array();
			$dimensionScore = array();
			$componentScore = array();

			if($dimensionsArray) {

				$dimension_scores = mysql_query('SELECT * FROM api_dimensions_'.$tablePref.' WHERE '.$tableField.' = "'.$row['thisAbbr'].'"'.$year.' ');

				$dimensionArray = array();
				while ($dimension = mysql_fetch_assoc($dimension_scores)) {
					unset($dimension[$tableField]);
					unset($dimension['region']);
					foreach($dimension as $key => $val) {
						if($key == 'year') {
							continue;
						}
						if(!in_array($key, $dimensionsArray))
							continue;

						$finalScore[] = $val;
						$dimensionScore[$dimension['year']][$key] = $val;
						$tmp[$key] = array('score' => $val);
					}
					$dimensionArray[$dimension['year']] = $tmp;
					unset($tmp);
				}
				$loopStates['dimensions'] = $dimensionArray;


			} else if($componentsArray) {
				$component_scores = mysql_query('SELECT * FROM api_components_'.$tablePref.' WHERE '.$tableField.' = "'.$row['thisAbbr'].'"'.$year.' ');

				$componentArray = array();
				while ($component = mysql_fetch_assoc($component_scores)) {
					unset($component[$tableField]);
					unset($component['region']);
					foreach($component as $key => $val) {
						if($key == 'year') {
							continue;
						}
						if(!in_array($key, $componentsArray))
							continue;

						$componentScore[$dimension['year']][$key] = $val;
						$finalScore[] = $val;
						$tmp[$key] = array('score' => $val);
					}
					$componentArray[$component['year']] = $tmp;
					unset($tmp);
				}
				$loopStates['components'] = $componentArray;
			} else {
				$dimension_scores = mysql_query('SELECT * FROM api_dimensions_'.$tablePref.' WHERE '.$tableField.' = "'.$row['thisAbbr'].'"'.$year.' ');

				$dimensionArray = array();
				while ($dimension = mysql_fetch_assoc($dimension_scores)) {
					unset($dimension[$tableField]);
					unset($dimension['region']);

					$dArray = array();

					foreach($dimension as $key => $val) {
						if($key == 'year') {
							$thisDimYear = $val;
							continue;
						}

						$comp_list = mysql_query('SELECT name FROM api_components_'.$tablePref.'_list WHERE dimension = "'.$key.'" ');
						$cArray = array();

						while ($cList = mysql_fetch_assoc($comp_list)) {
							$compScores = mysql_query('SELECT '.implode(',', $cList).' FROM api_components_'.$tablePref.' WHERE '.$tableField.' = "'.$row['thisAbbr'].'" AND year = '.$thisDimYear);
							while ($cScore = mysql_fetch_assoc($compScores)) {
								foreach($cScore as $sckey => $scval) {
									if($componentsArray) {
										if(!in_array($sckey, $componentsArray)) {
											continue;
										}
									}
									$compScore[] = $val;
									$cArray[$sckey] = $scval;
								}
							}
						}
						$finalCompScore = array_sum($compScore)/count($compScore);
						$dimensionScore[$dimension['year']][$key] = $val;
						$finalScore[] = $finalCompScore;

						$dArray[$key] = array('score' => $finalCompScore, 'components' => $cArray);
					}
					$dimensionArray[$dimension['year']] = $dArray;
				}
				$loopStates['dimensions'] = $dimensionArray;
			}

			$finalScore = array_sum($finalScore)/count($finalScore);
			$tmpSortScore[$row['thisAbbr']] = $finalScore;

			$loopStates = array_merge(
				array("name" => $row['thisName']),
				array("region" => $row['thisRegion']),
				array("latitude" => $row['latitude']),
				array("longitude" => $row['longitude']),
				//array("score" => $finalScore),
				$loopStates);
			$allScoresRes[$row['thisAbbr']] = $loopStates;
			$objCap = (++$rowCount == $numResults)?"}":",";

			$tmm = array_merge($tmm, $allScoresRes);
			$ret = json_encode($allScoresRes);
			$ret = json_indent($ret);
			$ret= ltrim($ret,'{');
			$ret= rtrim($ret,'}');
			$out .= $ret.$objCap;
			//$outPut[] = $allScoresRes;
			unset($loopStates);
			//unset($allScoresRes);
			unset($finalScore);
		}

		arsort($tmpSortScore);

		$writeFinal = array_merge_recursive($tmpSortScore, $tmm);
		$avgScores = array();
		$dsCount = count($dimensionScore);
		foreach($dimensionScore as $dScore) {
			foreach($dScore as $dkey => $dval) {
				$avgScores[$dkey] = $avgScores[$dkey] + $dval;
			}
		}

		$finalAvgs = array();
		foreach($avgScores as $avgKey => $avgVal) {
			$finalAvgs[$avgKey] = $avgVal/$dsCount;
		}
//print_r($finalAvgs);

		$n=0;
		foreach($writeFinal as $wkey => $wval) {
			$n++;
			$writeFinal[$wkey]['score'] = $wval[0];
			$writeFinal[$wkey]['rank'] = $n;
			unset($writeFinal[$wkey][0]);
		}

		$results = json_encode($writeFinal);
		$results = json_indent($results);
		echo $results;
	}

	function getAllMapScores($searchType) {
		$loopStates = array();

		if($searchType == 'int') {
			$wchLocale = 'api_countries';
			$tablePref = 'int';
			$tableField = 'country';
		} else {
			$wchLocale = 'api_state';
			$tablePref = 'state';
			$tableField = 'state';
		}

		$objQuery = 'SELECT abbr AS thisAbbr,
						name AS thisName,
						latitude AS thisLat,
						longitude AS thisLong,
						region AS thisRegion
						FROM '.$wchLocale;

		echo '{';
		$obj = mysql_query($objQuery);
		$numResults = mysql_num_rows($obj);
		$rowCount = 0;
		while ($row = mysql_fetch_assoc($obj)) {
			$allScoresRes = array();
			$loopStates['name'] = $row['thisName'];
			$loopStates['region'] = $row['thisRegion'];

			$summary_scores = mysql_query('SELECT * FROM api_'.$tablePref.'_summary_score WHERE '.$tableField.' = "'.$row['thisAbbr'].'" ORDER BY year DESC LIMIT  1 ');

			while ($summary = mysql_fetch_assoc($summary_scores)) {
				$loopStates['year'] = $summary['year'];
				$loopStates['summary_score'] = $summary['score'];
				$loopStates['rank'] = $summary['rank'];
				$loopStates['coords'] = $row['thisLat'].','.$row['thisLong'];
			}

			$allScoresRes[$row['thisAbbr']] = $loopStates;
			$objCap = (++$rowCount == $numResults)?"}":",";

			$ret = json_encode($allScoresRes);
			$ret = json_indent($ret);
			$ret= ltrim($ret,'{');
			$ret= rtrim($ret,'}');
			echo $ret.$objCap;
			unset($allScoresRes);
		}
	}

	function getAllScores($searchType) {
		//$allScoresRes = array();
		$loopStates = array();

		if($searchType == 'int') {
			$wchLocale = 'api_countries';
			$tablePref = 'int';
			$tableField = 'country';
		} else {
			$wchLocale = 'api_state';
			$tablePref = 'state';
			$tableField = 'state';
		}

		$objQuery = 'SELECT abbr AS thisAbbr,
						name AS thisName,
						latitude AS thisLat,
						longitude AS thisLong,
						region AS thisRegion FROM '.$wchLocale;

		echo '{';
		$obj = mysql_query($objQuery);
		$numResults = mysql_num_rows($obj);
		$rowCount = 0;
		while ($row = mysql_fetch_assoc($obj)) {
			$allScoresRes = array();
			$loopStates['name'] = $row['thisName'];
			$loopStates['region'] = $row['thisRegion'];

			$summary_scores = mysql_query('SELECT year, score FROM api_'.$tablePref.'_summary_score WHERE '.$tableField.' = "'.$row['thisAbbr'].'" ');

			$summaryArray = array();
			while ($summary = mysql_fetch_assoc($summary_scores)) {
				$summaryArray[$summary['year']] = $summary['score'];
			}
			$loopStates['summary_scores'] = $summaryArray;

			$dimension_scores = mysql_query('SELECT * FROM api_dimensions_'.$tablePref.' WHERE '.$tableField.' = "'.$row['thisAbbr'].'" ');

			$dimensionArray = array();
			while ($dimension = mysql_fetch_assoc($dimension_scores)) {
				unset($dimension[$tableField]);
				unset($dimension['region']);

				$dArray = array();

				foreach($dimension as $key => $val) {
					if($key == 'year') {
						$thisDimYear = $val;
						continue;
					}

					$comp_list = mysql_query('SELECT name FROM api_components_'.$tablePref.'_list WHERE dimension = "'.$key.'" ');
					$cArray = array();

					while ($cList = mysql_fetch_assoc($comp_list)) {
						$compScores = mysql_query('SELECT '.implode(',', $cList).' FROM api_components_'.$tablePref.' WHERE '.$tableField.' = "'.$row['thisAbbr'].'" AND year = '.$thisDimYear);
						while ($cScore = mysql_fetch_assoc($compScores)) {
							foreach($cScore as $sckey => $scval) {
								$subcomp_list = mysql_query('SELECT name FROM api_subcomponents_'.$tablePref.'_list WHERE component = "'.$sckey.'" ');
								$scArray = array();
								while ($scList = mysql_fetch_assoc($subcomp_list)) {
									$subcompScores = mysql_query('SELECT '.$scList['name'].' FROM api_subcomponents_'.$tablePref.' WHERE '.$tableField.' = "'.$row['thisAbbr'].'" AND year = '.$thisDimYear);

									$sscArray = array();
									while ($scScore = mysql_fetch_assoc($subcompScores)) {
										foreach($scScore as $subckey => $subcval) {
											$subsub_list = mysql_query('SELECT name FROM api_subsubcomponents_'.$tablePref.'_list WHERE subcomponent = "'.$subckey.'" ');
											if($subsub_list) {
												while ($subScore = mysql_fetch_assoc($subsub_list)) {
													$subsub_score = mysql_query('SELECT '.$subScore['name'].' FROM api_subsubcomponents_'.$tablePref.' WHERE '.$tableField.' = "'.$row['thisAbbr'].'" AND year = '.$thisDimYear);
													while ($s_score = mysql_fetch_assoc($subsub_score)) {
														$sscArray[$subScore['name']] = $s_score[$subScore['name']];
													}
												}
											} else {
												$sscArray[] = array($subckey => $subcval);
											}
											if(!empty($sscArray)) {
												$scArray[$subckey] = array('score' =>$subcval, 'subsubcomponents' => $sscArray);
											} else {
												$scArray[$subckey] = array('score' =>$subcval);
											}
										}
									}
								}
								if(!empty($scArray)) {
									$cArray[$sckey] = array('score' => $scval, 'subcomponents' => $scArray);
								} else {
									$cArray[$sckey] = array('score' => $scval);
								}
							}
						}
					}
					$dArray[$key] = array('score' => $val, 'components' => $cArray);
				}
				$dimensionArray[$dimension['year']] = $dArray;
			}
			$loopStates['dimensions'] = $dimensionArray;
			$allScoresRes[$row['thisAbbr']] = $loopStates;
			$objCap = (++$rowCount == $numResults)?"}":",";

			$ret = json_encode($allScoresRes);
			$ret = json_indent($ret);
			$ret= ltrim($ret,'{');
			$ret= rtrim($ret,'}');
			echo $ret.$objCap;
			unset($allScoresRes);
		}
	}

	function getLocations($wch, $isOject) {
		$lTable = ($wch == 'us')?'api_state':'api_countries';
		$locationQuery = 'SELECT * FROM '.$lTable;
		$locations = mysql_query($locationQuery);
		$locationArray = array();
		while ($location = mysql_fetch_assoc($locations)) {
			$locationArray[$location['abbr']] = array(
				'name' => $location['name'],
				'region' => $location['region'],
				'latitude' => $location['latitude'],
				'longitude' => $location['longitude']
			);
		}
		if($isOject) {
			$ret = json_encode($locationArray);
			$ret = json_indent($ret);
			echo $ret;
		} else {
			return $locationArray;
		}
	}

	function getDimensions($isOject) {
		$dQuery = 'SELECT * FROM api_dimensions_list';
		$dSql = mysql_query($dQuery);
		$dArray = array();
		while ($ds = mysql_fetch_assoc($dSql)) {
			$dArray[] = $ds['name'];
		}
		if($isOject) {
			$ret = json_encode($dArray);
			$ret = json_indent($ret);
			echo $ret;
		} else {
			return $dArray;
		}
	}

	function getComponents($isOject) {

		$lTable = ($wch == 'us')?'api_components_state_list':'api_components_int_list';
		$dQuery = 'SELECT * FROM '.$lTable;
		$dSql = mysql_query($dQuery);
		$dArray = array();
		while ($ds = mysql_fetch_assoc($dSql)) {
			$dArray[] = array(
				'name'=> $ds['name'],
				'parent'=> $ds['dimension']);
		}
		if($isOject) {
			$ret = json_encode($dArray);
			$ret = json_indent($ret);
			echo $ret;
		} else {
			return $dArray;
		}
	}

	function getSpecificObjects($wchLocale, $wchObject) {
		$loopStates = array();

		if($wchLocale == 'int') {
			$wchLocale = 'api_countries';
			$tablePref = 'int';
			$tableField = 'country';
		} else {
			$wchLocale = 'api_state';
			$tablePref = 'state';
			$tableField = 'state';
		}

		$objQuery = 'SELECT abbr, name FROM '.$wchLocale;

		echo '{';
		$obj = mysql_query($objQuery);
		$numResults = mysql_num_rows($obj);
		$rowCount = 0;
		while ($row = mysql_fetch_assoc($obj)) {
			$allScoresRes = array();
			$loopStates['name'] = $row['name'];

			$dimensionQuery = 'SELECT * FROM api_'.$wchObject.'_'.$tablePref.' WHERE '.$tableField.' = "'.$row['abbr'].'"';
			$dimensions = mysql_query($dimensionQuery);
			while ($dimension = mysql_fetch_assoc($dimensions)) {
				$year = $dimension['year'];
				unset($dimension['year']);
				unset($dimension['region']);
				unset($dimension[$tableField]);

				$tmp[$year] = $dimension;
			}

			$allScoresRes[$row['abbr']] = $tmp;
			$objCap = (++$rowCount == $numResults)?"}":",";

			$ret = json_encode($allScoresRes);
			$ret = json_indent($ret);
			$ret= ltrim($ret,'{');
			$ret= rtrim($ret,'}');
			echo $ret.$objCap;
			unset($allScoresRes);
		}

	}

	function getResByYear($year) {

	}

	private function getRanking($args=array()) {
		$defArgs = array(
			'scores' => array('all'),
			'locale' => 'int',
			'year' => '2012'
		);
		$options = array_merge($defArgs, $args);
		if($options['scores'][0] == 'all') {
			$ranking = mysql_fetch_assoc(mysql_query('SELECT rank FROM api_'.$options['locale'].'_summary_score WHERE year = "'.$options['year'].'"'));
			echo $ranking['rank']."\n";
		}
	}

	/*
	 *
	 * function for updating the state/country rankings in the summary_score tables
	 * for use when adding new years going forward
	 * $wch value is either 'state' or 'int'
	 *
	 */

	function updateSummaryRankings($wch, $date) {
		$field = ($wch == 'state')?'state':'country';
		$query = "SELECT * FROM api_".$wch."_summary_score WHERE year = '".$date."' ORDER BY score DESC";

		$obj = mysql_query($query);
		$i = 0;
		while ($row = mysql_fetch_assoc($obj)) {
			$i++;
			echo $i.', '.$row['state'].', '.$row['year']."\n";
			mysql_query('UPDATE '.$wch.'_summary_score SET rank = "'.$i.'" WHERE '.$field.' = "'.$row[$field].'" and year = "'.$row['year'].'"');
		}
	}

}
?>