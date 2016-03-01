var app = (function () {
	var config = (function () {
		var US = "us",
			WORLD = "world",
			MIN_WEIGHT = 0,
			MAX_WEIGHT = 4;

		return {
			indexes: {
				US: US,
				WORLD: WORLD
			},
			DEFAULT_INDEX: US,
			DEFAULT_WEIGHT: 1,
			MIN_WEIGHT: MIN_WEIGHT,
			MAX_WEIGHT: MAX_WEIGHT,
			PERCENTAGE_PER_WEIGHT: (1 / MAX_WEIGHT),
			NUM_OF_REGIONS_PER_CATEGORY: 15
		};
	})();

	var usMap,
		worldMap,
		$dummyMap = jQuery("#dummy_map"),
		$usContainer = jQuery("#us_container"),
		$worldContainer = jQuery("#world_container"),
		$usMap = jQuery("#us_map"),
		$worldMap = jQuery("#world_map"),
		$usResults = jQuery("#us_results"),
		$worldResults = jQuery("#world_results"),
		$worldUlContainer = $(".world-toggle ul"),
		$usUlContainer = $(".us-toggle ul"),
		$worldScrollContainer = $(".scroll-world"),
		$usScrollContainer = $(".scroll-us"),
		$usComponents = [],
		$worldComponents = [],
		usComponents = [],
		worldComponents = [],
		usData = [],
		worldData = [];

	var $toggleUs = jQuery("#toggle_us"),
		$toggleWorld = jQuery("#toggle_world"),
		$toggleContainerUs = jQuery("#toggle_container_us"),
		$toggleContainerWorld = jQuery("#toggle_container_world"),
		$sideBarFooterWorld = jQuery("#side_bar_footer_world"),
		$sideBarFooterUs = jQuery("#side_bar_footer_us"),
		$btnRankUs = jQuery("#rank_us"),
		$btnRankWorld = jQuery("#rank_world"),
		$btnResetUs = jQuery("#reset_us"),
		$btnResetWorld = jQuery("#reset_world"),
		$btnShowHideMapUs = jQuery("#btn_show_hide_map_us"),
		$btnShowHideMapWorld = jQuery("#btn_show_hide_map_world");

	var funcs = {
		getComponents: function (index) {
			return $.post(BASE_URL + "/controllers/interactive_app.php", {
				index: index,
				action: "getComponents"
			}, function (data) {
				if(index == config.indexes.US) {
					usComponents = JSON.parse(data);

					for(var i = 0; i < usComponents.length; i++) {
						$usComponents.push(
							$("#us_" + usComponents[i]).freshslider({ 
								step: 1, 
								max: 4, 
								value: config.DEFAULT_WEIGHT,
								onchange: function (low, high) {
									funcs.generateRankings(config.indexes.US);
								}
							}));
					}
				}
				else {
					worldComponents = JSON.parse(data);

					for(var i = 0; i < worldComponents.length; i++) {
						$worldComponents.push(
							$("#world_" + worldComponents[i]).freshslider({ 
								step: 1, 
								max: 4, 
								value: config.DEFAULT_WEIGHT,
								onchange: function (low, high) {
									funcs.generateRankings(config.indexes.WORLD);
								}
							}));
					}
				}
			});
		},
		getMapData: function (index) {
			return $.post(BASE_URL + "/controllers/interactive_app.php", {
				index: index,
				action: "getMapData"
			}, function (data) {
				if(index == config.indexes.US)
					usData = JSON.parse(data);
				else
					worldData = JSON.parse(data);
			});
		},
		generateRankings: function (index) {
			var usMapType = "us_aea_en",
				worldMapType = "world_mill_en";
			var rankedData = [];
			var mapData = {};
			var initialColor = "#463B47",
				bgColor = "#f0f0f0",
				zeroWeightColor = "#323841";
			var regionColors = [
				"#008291",
				"#009cad",
				"#2caaba",
				"#6cbbc8",
				"#9bced6",
				"#c9a9c4",
				"#b785ab",
				"#a66897",
				"#974a85",
				"#78246b"
			];

			var getRegionsToColor = function (mapData) {
				var dummyMap = function (index) {
					var map = new jvm.Map({
						map: (index == config.indexes.US) ? usMapType : worldMapType,
						container: $dummyMap,
						series: {
							regions: [{
								attribute: "fill"
							}]
						}
					});

					return map;
				}

				var obj = {};
				var regionsToColor = {};

				for(var key in dummyMap(index).series.regions[0].elements) {
					var countryExists = false;
					for(var key2 in mapData) {
						if(key == key2)
							countryExists = true;
					}

					if(!countryExists)
						regionsToColor[key] = "bgEmptyRegion";
				}

				obj.scale = { bgEmptyRegion: BASE_URL + "/wp-content/themes/life-measures/images/bg-empty-region.png" };
				obj.values = regionsToColor;
				obj.attribute = "fill";

				return obj;
			};

			var displayRankedData = function (rankedData) {
				var $top, $bottom;
				var allComponentsHaveZeroWeight = true;
				var rainbow = new Rainbow();

				if(index == config.indexes.US) {
					$top = $("#top_us");
					$bottom = $("#bottom_us");

					for(var i = 0; i < $usComponents.length; i++) {
						if($usComponents[i].getValue() > 0)
							allComponentsHaveZeroWeight = false;
					}
				}
				else {
					$top = $("#top_world");
					$bottom = $("#bottom_world");

					for(var i = 0; i < $worldComponents.length; i++) {
						if($worldComponents[i].getValue() > 0)
							allComponentsHaveZeroWeight = false;
					}
				}

				if(allComponentsHaveZeroWeight) {
					rainbow.setNumberRange(0, 28);
					rainbow.setSpectrum(regionColors[0], "#FFFFFF");
					$top.empty();
					for(var i = 0; i < config.NUM_OF_REGIONS_PER_CATEGORY; i++) {
						$top.append("<li><b style='color: #" + rainbow.colourAt(i) + "'>" + (i + 1) + "</b>. </li>");
					}

					rainbow.setSpectrum(regionColors[regionColors.length - 1], "#FFFFFF");
					$bottom.empty();
					var colorCounter = 0;
					for(var i = rankedData.length; i > (rankedData.length - config.NUM_OF_REGIONS_PER_CATEGORY); i--) {
						$bottom.append("<li><b style='color: #" + rainbow.colourAt(colorCounter) + "'>" + (i) + "</b>. </li>");
						colorCounter++;
					}
				}
				else {
					rainbow.setNumberRange(0, 28);
					rainbow.setSpectrum(regionColors[0], "#FFFFFF");
					$top.empty();
					for(var i = 0; i < config.NUM_OF_REGIONS_PER_CATEGORY; i++) {
						$top.append("<li><b style='color: #" + rainbow.colourAt(i) + "'>" + (i + 1) + "</b>. " + rankedData[i]["location"] + " - <b>" + parseFloat(rankedData[i]["score"]).toFixed(2) + "</b></li>");
					}

					rainbow.setSpectrum(regionColors[regionColors.length - 1], "#FFFFFF");
					$bottom.empty();
					var colorCounter = 0;
					for(var i = rankedData.length; i > (rankedData.length - config.NUM_OF_REGIONS_PER_CATEGORY); i--) {
						$bottom.append("<li><b style='color: #" + rainbow.colourAt(colorCounter) + "'>" + (i) + "</b>. " + rankedData[i - 1]["location"] + " - <b>" + parseFloat(rankedData[i - 1]["score"]).toFixed(2) + "</b></li>");
						colorCounter++;
					}
				}
			}

			var setMapData = function (rankedData) {
				// for(var i = 0; i < rankedData.length; i++) {
				// 	var rankedScore = parseFloat(rankedData[i]["score"]).toFixed(2);
				// 	var rankedAbbr = (index == config.indexes.US) ? "US-" + rankedData[i]["abbr"] : rankedData[i]["abbr"];

				// 	if(rankedScore >= 10 && rankedScore >= 9.1)
				// 		mapData[rankedAbbr] = regionColors[0];
				// 	else if(rankedScore >= 8.1 && rankedScore <= 9)
				// 		mapData[rankedAbbr] = regionColors[1];
				// 	else if(rankedScore >= 7.1 && rankedScore <= 8)
				// 		mapData[rankedAbbr] = regionColors[2];
				// 	else if(rankedScore >= 6.1 && rankedScore <= 7)
				// 		mapData[rankedAbbr] = regionColors[3];
				// 	else if(rankedScore >= 5.1 && rankedScore <= 6)
				// 		mapData[rankedAbbr] = regionColors[4];
				// 	else if(rankedScore >= 4.1 && rankedScore <= 5)
				// 		mapData[rankedAbbr] = regionColors[5];
				// 	else if(rankedScore >= 3.1 && rankedScore <= 4)
				// 		mapData[rankedAbbr] = regionColors[6];
				// 	else if(rankedScore >= 2.1 && rankedScore <= 3)
				// 		mapData[rankedAbbr] = regionColors[7];
				// 	else if(rankedScore >= 1.1 && rankedScore <= 2)
				// 		mapData[rankedAbbr] = regionColors[8];
				// 	else if(rankedScore >= 0.1 && rankedScore <= 1)
				// 		mapData[rankedAbbr] = regionColors[9];
				// }
				
				var allComponentsHaveZeroWeight = true;

				if(index == config.indexes.US) {
					for(var i = 0; i < $usComponents.length; i++) {
						if($usComponents[i].getValue() > 0)
							allComponentsHaveZeroWeight = false;
					}
				}
				else {
					for(var i = 0; i < $worldComponents.length; i++) {
						if($worldComponents[i].getValue() > 0)
							allComponentsHaveZeroWeight = false;
					}
				}

				if(allComponentsHaveZeroWeight) {
					for(var i = 0; i < rankedData.length; i++) {
						var rankedAbbr = (index == config.indexes.US) ? "US-" + rankedData[i]["abbr"] : rankedData[i]["abbr"];
					    mapData[rankedAbbr] = zeroWeightColor;
					}
				}
				else {
					var rainbow = new Rainbow();
					var maxNumberRange = (index == config.indexes.US) ? 40 : 100;
					rainbow.setNumberRange(0, maxNumberRange);
					rainbow.setSpectrum(regionColors[0], regionColors[1], regionColors[2], regionColors[3], regionColors[4], regionColors[5], regionColors[6], regionColors[7], regionColors[8], regionColors[9]);
					for(var i = 0; i < rankedData.length; i++) {
						var rankedAbbr = (index == config.indexes.US) ? "US-" + rankedData[i]["abbr"] : rankedData[i]["abbr"];
					    mapData[rankedAbbr] = "#" + rainbow.colourAt(i);
					}
				}
			}

			if(index == config.indexes.US) {
				if(usComponents.length >= 1 && usData.length >= 1) {
					for(var i = 0; i < usData.length; i++) {
						var data = {};
						var score = 0;
						var sumOfWeights = 0;

						for(var j = 0; j < usComponents.length; j++) {
							var weight = $usComponents[j].getValue() * config.PERCENTAGE_PER_WEIGHT;
							data[usComponents[j]] = usData[i][usComponents[j]] * weight;
							score += data[usComponents[j]];
							sumOfWeights += weight;
						}
						score = score / sumOfWeights;

						data["location"] = usData[i]['name'];
						data["abbr"] = usData[i]['abbr'];
						data["score"] = score;

						rankedData.push(data);
					}

					rankedData.sort(function (a, b) {
						return b.score - a.score;
					});

					displayRankedData(rankedData);

					setMapData(rankedData);

					if(usMap == undefined) {
						$usMap.vectorMap({
							map: usMapType,
							regionStyle: {
								initial: {
									fill: "#747F77"
								}
							},
							series: {
								regions: [{
									values: mapData,
									attribute: "fill"
								}]
							},
							backgroundColor: bgColor,
							onRegionTipShow: function (e, e1, code) {
								if(mapData[code] == undefined)
									e1.html(e1.html() + " (No data available)");
							}
						});

						usMap = $usMap.vectorMap("get", "mapObject");
					}
					else {
						usMap.series.regions[0].setValues(mapData);
					}
				}
			}
			else {
				if(worldComponents.length >= 1 && worldData.length >= 1) {
					for(var i = 0; i < worldData.length; i++) {
						var data = {};
						var score = 0;
						var sumOfWeights = 0

						for(var j = 0; j < worldComponents.length; j++) {
							var weight = $worldComponents[j].getValue() * config.PERCENTAGE_PER_WEIGHT;
							data[worldComponents[j]] = worldData[i][worldComponents[j]] * weight;
							score += data[worldComponents[j]];
							sumOfWeights += weight;
						}
						score = score / sumOfWeights;

						data["location"] = worldData[i]['name'];
						data["abbr"] = worldData[i]['abbr'];
						data["score"] = score;

						rankedData.push(data);
					}

					rankedData.sort(function (a, b) {
						return b.score - a.score;
					});

					displayRankedData(rankedData);
					
					setMapData(rankedData);

					if(worldMap == undefined) {
						$worldMap.vectorMap({
							map: worldMapType,
							series: {
								regions: [{
									values: mapData,
									attribute: "fill"
								}, getRegionsToColor(mapData)]
							},
							backgroundColor: bgColor,
							onRegionTipShow: function (e, e1, code) {
								if(mapData[code] == undefined)
									e1.html(e1.html() + " (No data available)");
							}
						});

						worldMap = $worldMap.vectorMap("get", "mapObject");
					}
					else {
						worldMap.series.regions[0].setValues(mapData);
					}
				}
			}
		},
		rank: function (index) {
			if(index == config.indexes.US) {
				funcs.generateRankings(config.indexes.US);
				$worldContainer.hide();
				$usContainer.fadeIn("slow");

				usMap.updateSize();
			}
			else {
				funcs.generateRankings(config.indexes.WORLD);
				$usContainer.hide();
				$worldContainer.fadeIn("show");

				worldMap.updateSize();
			}
		}
	};

	var events = (function () {
		$toggleUs.click(function () {
			$toggleUs.addClass("active");
			$toggleWorld.removeClass("active");

			$toggleContainerWorld.hide();
			$toggleContainerUs.show();

			$sideBarFooterWorld.hide();
			$sideBarFooterUs.show();

			funcs.rank(config.indexes.US);

			if($worldMap.css("display") == "none") {
				$usMap.hide();
				$usResults.fadeIn("slow");
				$btnShowHideMapUs.text("Show Map");
			}
			else {
				$usResults.hide();
				$usMap.fadeIn("slow");
				usMap.updateSize();
				$btnShowHideMapUs.text("List Results");
			}
		});

		$toggleWorld.click(function () {
			$toggleWorld.addClass("active");
			$toggleUs.removeClass("active");

			$toggleContainerUs.hide();
			$toggleContainerWorld.show();

			$sideBarFooterUs.hide();
			$sideBarFooterWorld.show();

			funcs.rank(config.indexes.WORLD);

			if($usMap.css("display") == "none") {
				$worldMap.hide();
				$btnShowHideMapWorld.text("Show Map");
				$worldResults.fadeIn("slow");
			}
			else {
				$worldResults.hide();
				$worldMap.fadeIn("slow");
				$btnShowHideMapWorld.text("List Results");
				worldMap.updateSize();
			}
		});

		// $usScrollContainer.each(function(){
		// 	$(this).jScrollPane({showArrows: false });
		// 	var api = $(this).data('jsp');
		// 	var throttleTimeout;
		// 	$(window).bind('resize', function(){
		// 		if (!throttleTimeout) {
		// 			throttleTimeout = setTimeout( function(){
		// 				api.reinitialise();
		// 				throttleTimeout = null;
		// 			},50);
		// 		}
		// 	});
		// });

		// $worldScrollContainer.each(function(){
		// 	$(this).jScrollPane({showArrows: false });
		// 	var api = $(this).data('jsp');
		// 	var throttleTimeout;
		// 	$(window).bind('resize', function(){
		// 		if (!throttleTimeout) {
		// 			throttleTimeout = setTimeout( function(){
		// 				api.reinitialise();
		// 				throttleTimeout = null;
		// 			},50);
		// 		}
		// 	});
		// });

		// jQuery(window).resize(function(){
		// 	$usScrollContainer.jScrollPane({autoReinitialise: true, autoReinitialiseDelay: 1,});
		// 	$worldScrollContainer.jScrollPane({autoReinitialise: true, autoReinitialiseDelay: 1,});
		// });

		funcs.getComponents(config.indexes.WORLD).always(function () {
			funcs.getMapData(config.indexes.WORLD).always(function () {
				$worldContainer.show();
				$worldMap.css("visibility", "hidden");
				$worldMap.fadeIn("slow");
				funcs.generateRankings(config.indexes.WORLD);
				$worldMap.css("visibility", "visible");
				$worldContainer.hide();
			});
		});

		funcs.getComponents(config.indexes.US).always(function () {
			funcs.getMapData(config.DEFAULT_INDEX).always(function () {
				$usContainer.show();
				$usMap.fadeIn("slow");
				funcs.generateRankings(config.DEFAULT_INDEX);

				$toggleUs.addClass("active");
				$toggleWorld.removeClass("active");

				$toggleContainerWorld.hide();
				$toggleContainerUs.show();

				$sideBarFooterWorld.hide();
				$sideBarFooterUs.show();
			});
		});

		$btnRankUs.click(function () {
			funcs.rank(config.indexes.US);
		});

		$btnRankWorld.click(function () {
			funcs.rank(config.indexes.WORLD);
		});

		$btnResetUs.click(function () {
			if($usComponents.length >= 1) {
				for(var i = 0; i < $usComponents.length; i++) {
					$usComponents[i].setValue(0);
				}

				funcs.rank(config.indexes.US);
			}
		});

		$btnResetWorld.click(function () {
			if($worldComponents.length >= 1) {
				for(var i = 0; i < $worldComponents.length; i++) {
					$worldComponents[i].setValue(0);
				}

				funcs.rank(config.indexes.WORLD);
			}
		});

		$btnShowHideMapUs.click(function(){
			if($(this).text() == "List Results"){
				$usMap.hide();
				$usResults.fadeIn("slow");
				$(this).text("Show Map");
			}
			else if($(this).text() == "Show Map"){
				$usResults.hide();
				$usMap.fadeIn("slow");
				usMap.updateSize();
				$(this).text("List Results");
			}
		});
		
		$btnShowHideMapWorld.click(function (){
			if($(this).text() == "List Results"){
				$worldMap.hide();
				$worldResults.fadeIn("slow");
				$(this).text("Show Map");
			}
			else if($(this).text() == "Show Map"){
				$worldResults.hide();
				$worldMap.fadeIn("slow");
				worldMap.updateSize();
				$(this).text("List Results");
			}
		});
	})();
})();