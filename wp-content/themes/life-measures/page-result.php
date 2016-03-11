<?php /* Template Name: Result Page Template */ get_header(); ?>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/globalize/globalize.min.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/dx_chartjs/dx.chartjs.js"></script>
<main role="main">
	<?php if (have_posts()): while (have_posts()) : the_post(); ?>
	<?php
		require_once("api/db.php");

		global $wp_query;

		if (isset($wp_query->query_vars['map_type'])){
			$search_type = "";

			$map_type = $wp_query->query_vars['map_type'];
			$map = $wp_query->query_vars['map'];
			$scores = $wp_query->query_vars['scores'];
			$years = urldecode($wp_query->query_vars['years']);
			$locations = urldecode($wp_query->query_vars['locations']);

			if(substr($wp_query->query_vars['search_type'], 0, 6) == "dimens") {
				$search = urldecode($wp_query->query_vars['search_type']);
				$search_type = "foundations";
			}
			else {
				$search = urldecode($wp_query->query_vars['search_type']);
				$search_type = "components";
			}

			$years = (isset($years)) ? (explode("|", substr($years, 6))) : json_encode(array());
			$locations = (isset($locations)) ? (explode("|", substr($locations, 10))) : json_encode(array());
			$search = ($search_type == "foundations") ? explode("|", substr($search, 7)) : explode("|", substr($search, 11));

			// = to mapType sa code ni ryan.
			$map_category = ($map_type == "us") ? "state" : "int";
			$location_type = ($map_type == "us") ? "state" : "country";
			$search_category = ($search_type == "foundations") ? "dimensions" : "components";

			$sql = "SELECT
					   api_" . $map_category . "_summary_score.*,
					   api_" . (($map_category == "int") ? "countries" : "state") . ".*,
					   api_" . $search_category . "_" . $map_category . ".*
					FROM api_" . $map_category . "_summary_score
					LEFT JOIN api_" . (($map_category == "int") ? "countries" : "state") . " ON api_" . $map_category . "_summary_score." . $location_type. "=api_" . (($map_category == "int") ? "countries" : "state") . ".abbr
					LEFT JOIN api_" . $search_category . "_" . $map_category . " ON (api_" . $map_category . "_summary_score." . $location_type. "=api_" . $search_category . "_" . $map_category . "." . $location_type. "
					AND api_" . $map_category . "_summary_score.year=api_" . $search_category . "_" . $map_category . ".year)WHERE (";


			foreach($years as $year) {
				$sql .= " api_" . $map_category . "_summary_score.year='$year' OR";
			}

			$sql = rtrim($sql, ' OR');
			$sql .= ') AND (';

			foreach($locations as $location) {
				$sql .= " api_" . $map_category . "_summary_score." . $location_type . "='$location' OR";
			}

			$sql = rtrim($sql, ' OR');
			$sql .= ')';

			$data = array();
			$res = mysql_query($sql);

			while ($row = mysql_fetch_assoc($res)) {
				foreach($row as $k => $r) {
					if( in_array($k, $search) ) {
						$data[ $row[$location_type] ][$search_type][$row['year']][$k] = $r * 1.0;
					}
				}

				$data[ $row[$location_type] ]['ranks'][$row['year']] = $row['rank'];
				$data[ $row[$location_type] ]['name'] = $row['name'];
			}

			function display_years($years) {
				$printed_years = "";
				foreach($years as $year) {

					$printed_years .= $year . ", ";
				}
				return substr($printed_years, 0, count($printed_years) - 3);
			}

			function get_svg_file_name($data_array, $location_array, $location_name) {
				foreach($location_array as $location) {
					if($data_array[$location]['name'] == $location_name) {
						return $location . '.svg';
					}
				}
			}

			function ordinal_suffix($number) {
				$ends = array('th','st','nd','rd','th','th','th','th','th','th');
				if (($number %100) >= 11 && ($number%100) <= 13)
				   $abbreviation = $number . '<sup>' . 'th' . '</sup>';
				else
				   $abbreviation = $number . '<sup>' . $ends[$number % 10] . '</sup>';

				return $abbreviation;
			}

			function get_search_type($search_type) {
				return ($search_type == "foundations") ? "foundation" : "component";
			}

			function get_search_criteria($search_criteria) {
				$str = str_replace("_and_", " & ", $search_criteria);
				$str = str_replace("_", " ", $str);
				return ucwords($str);
			}
		}
	?>
	<section class="intro-image" style="background-image: url('<?php echo get_template_directory_uri(); ?>/images/cki-template11-headers-charts.jpg');">
		<header>
			<h1>Customized Quality of Life Measures Report</h1>
			<hr>
		</header>
	</section>

	<div class="header-bar clearfix">
		<div class="row">
			<div class="return">
				<a id="return_to_map" href="<?php echo home_url() . '/interactive-map/' . $wp_query->query_vars['map_type'] . '/map/scores/' . $wp_query->query_vars['years'] . '/' . $wp_query->query_vars['locations'] . '/' . $wp_query->query_vars['search_type'] . '/'; ?>"><i class="entypo chevron-left"></i> Return to Map</a>
			</div>
			<div class="social">
				Start a Conversation, Share Your Results:
				<div class="addthis_toolbox" addthis:url="<?php //echo home_url() . 'interactive-map'?>">
					<a href="https://api.addthis.com/oexchange/0.8/forward/facebook/offer?url=http%3A%2F%2Fwww.life-measures.wdoitsolutions.com&pubid=ra-54d974cc43473017&ct=1&title=Quality%20of%20Life%20Measures&pco=tbxnj-1.0" target="_blank"><img src="https://cache.addthiscdn.com/icons/v2/thumbs/32x32/facebook.png" border="0" alt="Facebook"/></a>
					<a href="https://api.addthis.com/oexchange/0.8/forward/twitter/offer?url=http%3A%2F%2Fwww.life-measures.wdoitsolutions.com&pubid=ra-54d974cc43473017&ct=1&title=Quality%20of%20Life%20Measures&pco=tbxnj-1.0" target="_blank"><img src="https://cache.addthiscdn.com/icons/v2/thumbs/32x32/twitter.png" border="0" alt="Twitter"/></a>
					<a href="https://api.addthis.com/oexchange/0.8/forward/google_plusone_share/offer?url=http%3A%2F%2Fwww.life-measures.wdoitsolutions.com&pubid=ra-54d974cc43473017&ct=1&title=Quality%20of%20Life%20Measures&pco=tbxnj-1.0" target="_blank"><img src="https://cache.addthiscdn.com/icons/v2/thumbs/32x32/google_plusone_share.png" border="0" alt="Google+"/></a>
				<div class="atclear"></div></div>
			</div>
		</div>
	</div>
	<?php if (isset($wp_query->query_vars['map_type'])) { ?>
	<div class="report-years">
		<?php echo display_years($years); ?>
	</div>
	<div id="content">
		<section class="cards carousel" role="main-content">
			<div class="row">
				<div class="cards-container clearfix" id="cards_carousel">
					<?php
					foreach($data as $d) {
					?>

					<div class="card cards_container">
						<div class="face front">
							<a class="information circle" href="#"><i class="entypo info"></i></a>
							<div class="info-tooltip">
								This card displays the average score for each location based upon the foundations/components and years selected.
							</div>
							<h3>
								Average Ranking<br>
								of Selected <?php echo $search_type; ?>
							</h3>
							<hr>
							<h2><?php echo $d['name']; ?></h2>
							<div class="image-block">
								<img src="<?php echo get_template_directory_uri(); ?>/images/svg/<?php echo $map_type; ?>/<?php echo get_svg_file_name($data, $locations, $d['name']); ?>" class="svg replaced-svg" />
							</div>
							<div class="ranking">
								<?php
								$rank_container = 0;
								foreach($years as $year) {
									$rank_container += $d['ranks'][$year];
								}

								$rank_container = $rank_container / count($years);
								echo ordinal_suffix(round($rank_container));
								unset($rank_container);
								?>
							</div>
							<div class="dimension-container">
								<?php foreach($search as $s) { ?>
									<div class="dimension <?php echo $s; ?>"></div>
								<?php } ?>
							</div>
						</div>
						<div class="face back">
							<h2><?php echo $d['name']; ?></h2>
							<h3>Average <?php echo get_search_type($search_type); ?> Scores<br></h3>
							<div class="dimension-container clearfix">
								<?php
								$search_container = array();
								foreach($d[$search_type] as $search_data) {
									foreach($search as $s) {
										if(empty($search_container[$s])) {
											$search_container[$s] = $search_data[$s];
										}
										else {
											$search_container[$s] += $search_data[$s];
										}
									}
								}
								foreach($search as $s) {
									$search_container[$s] = $search_container[$s] / count($years);
								?>
								<div class="dimension <?php echo $s; ?>">
									<div class="name"><?php echo get_search_criteria($s); ?></div>
									<div class="score"><?php echo number_format(round($search_container[$s], 1), 1); ?></div>
								</div>
							<?php
							}
							unset($search_container);
							?>
							</div>
						</div>
					</div>
					<?php } //end for "foreach statement" ?>
				</div>
				<div class="turn-cards-button">
					<a class="btn flat blue" id="flip-cards" href="#">Turn Cards for Score Details</a>
				</div>
			</div>
		</section>

		<section class="trends" role="main-content">
			<div class="row">
				<h2>Trends</h2>
				<hr>
				<h3><?php display_years($years); ?></h3>

				<div class="chart" id="trends-chart" style="-webkit-user-select: none; width: 100%;"></div>
				<script type="text/javascript">
					var dataSource = [<?php
						$trends_chart_data_source = array();
						foreach($years as $year) {
							$trends_chart_data_source['year'] = $year;
							foreach($locations as $location) {
								$score = 0;
								foreach($data[$location][$search_type][$year] as $d) {
									$score += $d;
								}
								$score = $score / count($search);
								$trends_chart_data_source[$location] = $score;
							}
							echo json_encode($trends_chart_data_source) . ', ';
						}
					?>];

					var $trendsChart = $("#trends-chart").dxChart({
						dataSource: dataSource,
						argumentAxis: {
							label: {
								customizeText: function () {
									return this.value.toUpperCase();
								}
							}
						},
						commonAxisSettings: {
							color: "#ccc",
							grid: {
								color: "#ccc",
								visible: true
							},
							label: {
								font: {
									color: "#333",
									family: "AlternateGothicW01-No3_691802,sans-serif",
									size: 15,
									weight: 300
								},
								format: "fixedPoint"
							},
							visible: true
						},
						commonSeriesSettings: {
							argumentField: "year",
							type: "spline"
						},
						series: [<?php ;
							foreach($locations as $location) {
								$trends_chart_series = array();
								$trends_chart_series['valueField'] = $location;
								$trends_chart_series['name'] = $data[$location]['name'];
								echo json_encode($trends_chart_series) . ', ';
							}
							?>
						],
						scrollBar: { visible: true },
						scrollingMode: "all", 
						zoomingMode: "all",
						legend: {
							customizeText: function () { return this.seriesName.toUpperCase(); },
							border:{
								color: "#ccc",
								visible: true
							},
							font: {
								color: "#333",
								family: "AlternateGothicW01-No3_691802,sans-serif",
								size: 15
							},
							margin: {
								left: 20
							},
							markerSize: 15,
							orientation: "vertical",
							paddingLeftRight: 15,
							verticalAlignment: "top",
							horizontalAlignment: "right"
						},
						tooltip: {
							color: "#454e59",
							enabled: true,
							font: {
								color: "#fff",
								family: "AlternateGothicW01-No3_691802,sans-serif",
								size: 15
							},
							customizeText: function () {
								return this.seriesName.toUpperCase() + ": " + Number(this.valueText).toFixed(1);
							}
						},
						valueAxis: {
							grid: {
								color: "#ccc",
								visible: true
							},
							max: 10,
							min: 0,
							valueMarginsEnabled: false
						}
					}).dxChart("instance");

					$trendsChart.zoomArgument(300, 500);
					
					// jQuery("#trends-chart").dxChart({
					// 	argumentAxis: {
					// 		label: {
					// 			customizeText: function () {
					// 				return this.value.toUpperCase();
					// 			}
					// 		}
					// 	},
					// 	commonAxisSettings: {
					// 		color: "#ccc",
					// 		grid: {
					// 			color: "#ccc",
					// 			visible: true
					// 		},
					// 		label: {
					// 			font: {
					// 				color: "#333",
					// 				family: "AlternateGothicW01-No3_691802,sans-serif",
					// 				size: 15,
					// 				weight: 300
					// 			},
					// 			format: "fixedPoint",
					// 			precision: 0
					// 		},
					// 		visible: true
					// 	},
					// 	commonSeriesSettings: {
					// 		argumentField: "year",
					// 		type: "spline"
					// 	},
					// 	commonPaneSettings: {
					// 		border: {
					// 			visible: false
					// 		}
					// 	},
					// 	dataSource: dataSource,
					// 	legend: {
					// 		customizeText: function () {
					// 			return this.seriesName.toUpperCase();
					// 		},
					// 		border:{
					// 			color: "#ccc",
					// 			visible: true
					// 		},
					// 		font: {
					// 			color: "#333",
					// 			family: "AlternateGothicW01-No3_691802,sans-serif",
					// 			size: 15
					// 		},
					// 		horizontalAlignment: "right",
					// 		margin: {
					// 			left: 20
					// 		},
					// 		markerSize: 15,
					// 		orientation: "vertical",
					// 		paddingLeftRight: 15,
					// 		verticalAlignment: "top"
					// 	},
					// 	<?php
					// 		echo 'series: [';
					// 		foreach($locations as $location) {
					// 			$trends_chart_series = array();
					// 			$trends_chart_series['valueField'] = $location;
					// 			$trends_chart_series['name'] = $data[$location]['name'];
					// 			echo json_encode($trends_chart_series) . ', ';
					// 		}
					// 		echo '],';
					// 	?>
					// 	tooltip: {
					// 		color: "#454e59",
					// 		enabled: true,
					// 		font: {
					// 			color: "#fff",
					// 			family: "AlternateGothicW01-No3_691802,sans-serif",
					// 			size: 15
					// 		},
					// 		customizeText: function () {
					// 			return this.seriesName.toUpperCase() + ": " + Number(this.valueText).toFixed(1);
					// 		}
					// 	},
					// 	valueAxis: {
					// 		max: 10,
					// 		min: 0,
					// 		valueMarginsEnabled: false
					// 	}
					// });
				</script>
			</div>
		</section>
		<section class="<?php echo ($search_type == 'foundations') ? 'foundations-by-year' : 'components' ?>" role="main-content">
			<div class="row">
				<h2><?php echo $search_type; ?></h2>
				<hr>
				<?php foreach($years as $year) { ?>
				<h3><?php echo $year; ?></h3>
					<div class="chart" id="<?php echo $search_type . '-by-' . $year . '-chart' ?>" style="-webkit-user-select: none; width: 100%;"></div>
					<script type="text/javascript">
						var dataSource_<?php echo $year; ?> = [<?php
							foreach($locations as $location) {
								$chart_by_year_data_source = array();
								$chart_by_year_data_source = $data[$location][$search_type][$year];
								$chart_by_year_data_source['state'] = $data[$location]['name'];
								echo json_encode($chart_by_year_data_source) .', ';
							}
						?>];

						var $<?php echo $search_type . '_by_' . $year . '_chart'; ?> = $("<?php echo '#' . $search_type . '-by-' . $year . '-chart'; ?>").dxChart({
							commonSeriesSettings: {
								argumentField: "state",
								hoverMode: "onlyPoint",
								selectionMode: "allArgumentPoints",
								type: "bar"
							},
							dataSource: dataSource_<?php echo $year; ?>,
							series: [<?php
								foreach($search as $s) {
									$chart_by_year_series = array();
									$chart_by_year_series['valueField'] = $s;
									$chart_by_year_series['name'] = get_search_criteria($s);
									echo json_encode($chart_by_year_series) . ', ';
								}
							?>],
							scrollBar: { visible: true },
							scrollingMode: "all", 
							zoomingMode: "all",
							legend: {
								customizeText: function () {
									return this.seriesName.toUpperCase();
								},
								border: {
									color: "#ccc",
									visible: true
								},
								font: {
									color: "#333",
									family: "AlternateGothicW01-No3_691802,sans-serif",
									size: 15
								},
								horizontalAlignment: "right",
								margin: {
									left: 20,
									top: 10
								},
								markerSize: 15,
								orientation: "vertical",
								paddingLeftRight: 15,
								verticalAlignment: "top"
							},
							tooltip: {
								color: "#454e59",
								enabled: true,
								font: {
									color: "#fff",
									family: "alternate-gothic-no-3-d, sans-serif",
									size: 15
								},
								customizeText: function () {
									return this.seriesName.toUpperCase() + ": " + Number(this.valueText).toFixed(1);
								}
							},
							valueAxis: {
								grid: {
									color: "#ccc",
									visible: true
								},
								max: 10,
								min: 0,
								valueMarginsEnabled: false
							}
						});
					</script>
					<?php
					}
					?>
					</script>
			</div>
		</section>
	</div>
<?php } ?>
<?php endwhile; ?>
<?php else: ?>
	<!-- article -->
	<article>
		<h2><?php _e( 'Sorry, nothing to display.', 'html5blank' ); ?></h2>
	</article>
	<!-- /article -->
<?php endif; ?>
</main>

<?php //get_sidebar(); ?>
<script type="text/javascript">
	$("#return_to_map").click(function () {
		var url = "<?php echo home_url() . '/interactive-map-connxt/' . $wp_query->query_vars['map_type'] . '/map/scores/' . $wp_query->query_vars['years'] . '/' . $wp_query->query_vars['locations'] . '/' . $wp_query->query_vars['search_type']; ?>";
		// window.open(url, "_self");
	});
</script>
<?php get_footer(); ?>