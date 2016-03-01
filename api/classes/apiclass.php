<?php

/*
 * main API class
 * details to follow
 *
 * */

/*
 * 	Added isset() on the following:
 *	$options['locations']
 *	$options['years']
 *	$options['dimensions']
 *	$options['components']
 *	$options['subcomponents']
 *	$options['subsubcomponents']
 *	$dimensionsArray
 *	$componentsArray
 *
 */

class getMapData {

	function getSpecificMapScores($local, $args=array()) {
		global $encodedPath;
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
		// var_dump($options); exit;
		if(isset($options['locations'])) {
			//$where .= ' WHERE ';
			$locationsArray = explode('|', $options['locations']);
			$locationsArrayUpper = array_map("strtoupper", $locationsArray);
			if(count($locationsArray) > 1) {
				$where .= " WHERE abbr IN ('".implode("','", $locationsArrayUpper)."') ";
			} else {
				$where .= " WHERE abbr = '".strtoupper($locationsArray[0])."'";
			}
		}
		$year = '';
		if(isset($options['years'])) {
			$yearsArray = explode('|', $options['years']);

			if(count($yearsArray) > 1) {
				$year .= " AND year IN (".implode(',', $yearsArray).") ";
			} else {
				$year .= " AND year = '".$yearsArray[0]."'";
			}
		}
		$whatDimensions = '*';
		if(isset($options['dimensions'])) {
			$dimensionsArray = explode('|', $options['dimensions']);

			if(count($dimensionsArray) > 1) {
				$dimensionWeights = mysql_query('SELECT name FROM api_dimensions_list WHERE name IN ("'.implode('","', $dimensionsArray).'") ORDER BY weight Asc ');
				while ($row = mysql_fetch_assoc($dimensionWeights)) {
					$whatDimensionsTmp[] = $row['name'];
				}
				$whatDimensions = implode(', ', $whatDimensionsTmp);
			} else {
				$whatDimensions = $dimensionsArray[0];
			}
		}
		$whatComponents = '*';
		if(isset($options['components'])) {
			$componentsArray = explode('|', $options['components']);

			if(count($componentsArray) > 1) {
				$compWeights = mysql_query('SELECT name FROM api_components_'.$tablePref.'_list WHERE name IN ("'.implode('","', $componentsArray).'") ORDER BY weight Asc ');
				while ($row = mysql_fetch_assoc($compWeights)) {
					$whatComponentsTmp[] = $row['name'];
				}

				$whatComponents = implode(', ', $whatComponentsTmp);
			} else {
				$whatComponents = $componentsArray[0];
			}
		}
		$whatSubComponents = '*';
		if(isset($options['subcomponents'])) {
			$subcomponentsArray = explode('|', $options['subcomponents']);

			if(count($subcomponentsArray) > 1) {
				$subcompWeights = mysql_query('SELECT name FROM api_subcomponents_'.$tablePref.'_list WHERE name IN ("'.implode('","', $subcomponentsArray).'") ');
				while ($row = mysql_fetch_assoc($subcompWeights)) {
					$whatSubComponentsTmp[] = $row['name'];
				}

				$whatSubComponents = implode(', ', $whatSubComponentsTmp);
			} else {
				$whatSubComponents = $subcomponentsArray[0];
			}
		}

		$whatSubSubComponents = '*';
		if(isset($options['subsubcomponents'])) {
			$subSubcomponentsArray = explode('|', $options['subsubcomponents']);

			if(count($subSubcomponentsArray) > 1) {
				$subsubcompWeights = mysql_query('SELECT name FROM api_subsubcomponents_'.$tablePref.'_list WHERE name IN ("'.implode('","', $subSubcomponentsArray).'") ');
				while ($row = mysql_fetch_assoc($subsubcompWeights)) {
					$whatSubSubComponentsTmp[] = $row['name'];
				}

				$whatSubSubComponents = implode(', ', $whatSubSubComponentsTmp);
			} else {
				$whatSubSubComponents = $subSubcomponentsArray[0];
			}
		}

		$finalQuery = $objQuery.$where.$objQueryEnder;

		$loopStates = array();

		$obj = mysql_query($finalQuery);
		$numResults = mysql_num_rows($obj);
		$rowCount = 0;
		while ($row = mysql_fetch_assoc($obj)) {
			$allScoresRes = array();

			$finalScore = array();

			if(isset($dimensionsArray)) {

				$objArgs = array(
					'obj' => 'dimensions',
					'tablePref' => $tablePref,
					'tableField' => $tableField,
					'thisAbbr' => $row['thisAbbr'],
					'year' => $year,
					'wch' => $options['wch']

				);
				$getObjs = $this->getScoresObject($whatDimensions, $objArgs);

				$loopStates['dimensions'] = $getObjs['objs'];
				foreach($getObjs['scores'] as $tmpScore) {
					$finalScore[] = $tmpScore;
				}

			} else if(isset($componentsArray)) {

				$objArgs = array(
					'obj' => 'components',
					'tablePref' => $tablePref,
					'tableField' => $tableField,
					'thisAbbr' => $row['thisAbbr'],
					'year' => $year,
					'wch' => $options['wch']

				);
				$getObjs = $this->getScoresObject($whatComponents, $objArgs);

				$loopStates['components'] = $getObjs['objs'];
				foreach($getObjs['scores'] as $tmpScore) {
					$finalScore[] = $tmpScore;
				}

			} else if($subcomponentsArray) {

				$objArgs = array(
					'obj' => 'subcomponents',
					'tablePref' => $tablePref,
					'tableField' => $tableField,
					'thisAbbr' => $row['thisAbbr'],
					'year' => $year,
					'wch' => $options['wch']

				);
				$getObjs = $this->getScoresObject($whatSubComponents, $objArgs);

				$loopStates['subcomponents'] = $getObjs['objs'];
				foreach($getObjs['scores'] as $tmpScore) {
					$finalScore[] = $tmpScore;
				}

			} else if($subSubcomponentsArray) {

				$objArgs = array(
					'obj' => 'subsubcomponents',
					'tablePref' => $tablePref,
					'tableField' => $tableField,
					'thisAbbr' => $row['thisAbbr'],
					'year' => $year,
					'wch' => $options['wch']

				);
				$getObjs = $this->getScoresObject($whatSubSubComponents, $objArgs);

				$loopStates['subsubcomponents'] = $getObjs['objs'];
				foreach($getObjs['scores'] as $tmpScore) {
					$finalScore[] = $tmpScore;
				}

			} else {

				$args = array(
					'year' => $yearsArray,
					'locations' => $where
				);

				$this->getAllScores($local, $args);
				die();

			}

			$finalScore = array_sum($finalScore)/count($finalScore);
			$tmpSortScore[$row['thisAbbr']] = $finalScore;

			$loopStates = array_merge(
				array("name" => $row['thisName']),
				array("region" => $row['thisRegion']),
				array("latitude" => $row['latitude']),
				array("longitude" => $row['longitude']),
				$loopStates);
			$allScoresRes[$row['thisAbbr']] = $loopStates;

			$tmm = array_merge($tmm, $allScoresRes);
			unset($loopStates);
			unset($finalScore);
		}

		arsort($tmpSortScore);

		$writeFinal = array_merge_recursive($tmpSortScore, $tmm);

		$n=0;
		$prevValue = null;
		$tmpNullArray = array();
		foreach($writeFinal as $wkey => $wval) {
			$n++;

			if(!is_numeric($wval[0])) {
				$writeFinal[$wkey]['score'] = null;

				$tmpNullArray[$wkey] = $writeFinal[$wkey];
				unset($tmpNullArray[$wkey][0]);
				unset($writeFinal[$wkey]);

			} else {
				$writeFinal[$wkey]['score'] = $wval[0];
				$writeFinal[$wkey]['rank'] = $n;
			}

			if($prevValue !== null) {
				if($wval[0] == $prevValue) {
					$writeFinal[$wkey]['rank'] = $prevRank;
				}
			}
			$prevValue = $wval[0];
			$prevRank = $writeFinal[$wkey]['rank'];

			unset($writeFinal[$wkey][0]);
		}
		$superFinalRes = array_merge($writeFinal, $tmpNullArray);

		$results = json_encode($superFinalRes);
		$insert = mysql_query('INSERT INTO api_results_cache set path = "'.$encodedPath.'", results = "'.mysql_real_escape_string($results).'" ');
		//$results = json_indent($results);
		echo $results;
	}

	function getAllMapScores($searchType) {
		global $encodedPath;

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

		$tmm = array();
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
				$loopStates['score'] = $summary['score'];
				$loopStates['rank'] = $summary['rank'];
				$loopStates['latitude'] = $row['thisLat'];
				$loopStates['longitude'] = $row['thisLong'];
			}

			$allScoresRes[$row['thisAbbr']] = $loopStates;

			$tmm = array_merge($tmm, $allScoresRes);
			unset($allScoresRes);
		}
		$results = json_encode($tmm);

		$insert = mysql_query('INSERT INTO api_results_cache set path = "'.$encodedPath.'", results = "'.mysql_real_escape_string($results).'" ');
		//$results = json_indent($results);
		echo $results;
	}

	function getAllScores($searchType, $args) {
		global $encodedPath;
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
		$year='';
		if(!empty($args['year'])) {
			$yearsArray = $args['year'];

			if(count($yearsArray) > 1) {
				$year .= " AND dims.year IN (".implode(',', $yearsArray).") ";
			} else {
				$year .= " AND dims.year = '".$yearsArray[0]."'";
			}
		}

		$where = (!empty($args['locations']))?$args['locations']:'';
		$objQuery = 'SELECT abbr AS thisAbbr, name, latitude, longitude, region FROM '.$wchLocale.$where;

		$superFinalRes = array();
		$obj = mysql_query($objQuery);
		$numResults = mysql_num_rows($obj);
		$rowCount = 0;
		while ($row = mysql_fetch_assoc($obj)) {
			$allScoresRes = array();
			$loopStates['name'] = $row['name'];
			$loopStates['region'] = $row['region'];
			$loopStates['latitude'] = $row['latitude'];
			$loopStates['longitude'] = $row['longitude'];

			$dimension_scores = mysql_query(
				'SELECT dims.*, sums.score, sums.rank
				FROM api_dimensions_'.$tablePref.' AS dims
				LEFT JOIN api_'.$tablePref.'_summary_score AS sums
				ON dims.'.$tableField.' = sums.'.$tableField.'
				AND dims.year = sums.year
				WHERE dims.'.$tableField.' = "'.$row['thisAbbr'].'" '.$year.' '
			);

			$dimensionArray = array();
			while ($dimension = mysql_fetch_assoc($dimension_scores)) {
				unset($dimension[$tableField]);
				unset($dimension['region']);

				$dArray = array();

				foreach($dimension as $key => $val) {
					if($key == 'year' || $key == 'score' || $key == 'rank') {
						$thisDimYear = $val;
						continue;
					}

					$comp_list = mysql_query('SELECT name FROM api_components_'.$tablePref.'_list WHERE dimension = "'.$key.'" ORDER BY weight Asc');
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
									unset($sscArray);
								}
								if(!empty($scArray)) {
									$cArray[$sckey] = array('score' => $scval, 'subcomponents' => $scArray);
								} else {
									$cArray[$sckey] = array('score' => $scval);
								}
							}
						}
						unset($scArray);
					}
					$dArray[$key] = array('score' => $val, 'components' => $cArray);
				}
				unset($cArray);
				$dimensionArray[$dimension['year']] = array(
					'score' => $dimension['score'],
					'rank' => $dimension['rank'],
					'dimensions' => $dArray
				);
			}
			unset($dArray);
			$loopStates['years'] = $dimensionArray;

			$allScoresRes[$row['thisAbbr']] = $loopStates;
			$superFinalRes = array_merge($superFinalRes, $allScoresRes);

			unset($allScoresRes);
			unset($dimensionArray);
			unset($loopStates);
		}


		$results = json_encode($superFinalRes);
		$insert = mysql_query('INSERT INTO api_results_cache set path = "'.$encodedPath.'", results = "'.mysql_real_escape_string($results).'" ');
		//$results = json_indent($results);
		echo $results;
	}

	function getScoresObject($whatObjs, $args) {
		$finalScore = array();
		$obj_scores = mysql_query('SELECT year, '.$whatObjs.' FROM api_'.$args['obj'].'_'.$args['tablePref'].' WHERE '.$args['tableField'].' = "'.$args['thisAbbr'].'"'.$args['year'].' ');
		$num_rows = mysql_num_rows($obj_scores);
		$dimensionArray = array();
		if($args['wch']=='results') {
			while ($dimension = mysql_fetch_assoc($obj_scores)) {
				$countTmp = array_filter($dimension, 'strlen');
				$dimCount = count($countTmp)-1;
				$dimScore=0;
				foreach($dimension as $key => $val) {
					if($key == 'year') {
						continue;
					}
					$finalScore[] = $val;
					if(is_numeric($val)) {
						$dimScore = $dimScore + $val;
					} else {
						$dimScore = null;
					}
					$tmp[$key] = array('score' => $val);
				}

				if(!is_numeric($dimScore)) {
					$aggScore = null;
				} else {
					$aggScore = $dimScore/$dimCount;
				}

				$tmp['score'] = $aggScore;

				unset($dimScore);
				$dimensionArray[$dimension['year']] = $tmp;
				unset($tmp);
			}
			$out = $dimensionArray;

		} else {
			while ($dimension = mysql_fetch_assoc($obj_scores)) {
				foreach($dimension as $key => $val) {
					if($key == 'year')
						continue;

					$finalScore[] = $val;
					$tmp[$key][$dimension['year']] = array('score' => $val);
				}
			}
			$tmpDimArray = array();
			foreach($tmp as $tmpKey => $tmpVal) {
				$k=0;
				// Added because of error
				// Error: Undefined index: HTTP_X_REQUESTED_WITH
				$tmpDimScore = 0;
				foreach($tmpVal as $tVal) {
					if($tVal['score'] != '') {
						$k++;
						$tmpDimScore = $tmpDimScore + $tVal['score'];
					}
				}

				if(($num_rows/2) <= $k) {
					$ttt = $tmpDimScore/$k;
				} else {
					$ttt = NULL;
				}

				unset($tmpDimScore);

				$tmpDimArray[$tmpKey] = array('score'=>$ttt);
				$tmp = array_merge_recursive($tmp, $tmpDimArray);
				unset($tmpDimArray);
			}

			$out = $tmp;
			unset($tmp);
		}
		$finalScore = array_filter($finalScore);
		$retObj = array('objs' => $out, 'scores' => $finalScore);

		return $retObj;
	}

	function getLocations($wch, $isOject) {
		global $encodedPath;
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
			$insert = mysql_query('INSERT INTO api_results_cache set path = "'.$encodedPath.'", results = "'.mysql_real_escape_string($ret).'" ');
			//$ret = json_indent($ret);
			echo $ret;
		} else {
			return $locationArray;
		}
	}

	function getComponentsList($wchLocale, $wchObj, $isOject=true) {
		global $encodedPath;

		if($wchLocale == 'int') {
			$tablePref = 'int';
		} else {
			$tablePref = 'state';
		}
		switch($wchObj) {
			case 'dimensionlist':
				$thisObjName = 'dimensions';
				$thisObj = 'api_'.$thisObjName.'_list';
				break;
			case 'componentlist':
				$thisObjName = 'components';
				$thisObj = 'api_'.$thisObjName.'_'.$tablePref.'_list';
				break;
			case 'subcomponentlist':
				$thisObjName = 'subcomponents';
				$thisObj = 'api_'.$thisObjName.'_'.$tablePref.'_list';
				break;
			case 'subsubcomponentlist':
				$thisObjName = 'subsubcomponents';
				$thisObj = 'api_'.$thisObjName.'_'.$tablePref.'_list';
				break;
			default: return;
		}

		$dQuery = 'SELECT * FROM '.$thisObj;

		$dSql = mysql_query($dQuery);
		$dArray = array();
		while ($ds = mysql_fetch_array($dSql)) {

			if($wchObj == 'dimensionlist') {
				$dArray[] = array('name'=> $ds[1]);
			} else {
				$dArray[] = array(
					'name'=> $ds[1],
					'parent'=> $ds[2]);
			}
		}
		$finalArray = array($thisObjName => $dArray);

		if($isOject) {
			$ret = json_encode($finalArray);
			$insert = mysql_query('INSERT INTO api_results_cache set path = "'.$encodedPath.'", results = "'.mysql_real_escape_string($ret).'" ');
			//$ret = json_indent($ret);
			echo $ret;
		} else {
			return $finalArray;
		}
	}

	function getSpecificObjects($wchLocale, $wchObject) {
		global $encodedPath;
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

		$obj = mysql_query($objQuery);
		$numResults = mysql_num_rows($obj);
		$rowCount = 0;
		$allScoresRes = array();
		while ($row = mysql_fetch_assoc($obj)) {
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
		}
		$ret = json_encode($allScoresRes);
		$insert = mysql_query('INSERT INTO api_results_cache set path = "'.$encodedPath.'", results = "'.mysql_real_escape_string($ret).'" ');
		//$ret = json_indent($ret);
		echo $ret;
		unset($allScoresRes);
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