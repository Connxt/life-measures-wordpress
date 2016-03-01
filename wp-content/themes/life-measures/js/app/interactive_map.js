var InteractiveMap = (function () {
	var defaults = (function () {
		var US = "us",
			WORLD = "world",
			map = {
				types: {
					US: "us_aea_en",
					WORLD: "world_mill_en"
				},
				regions: {
					INITIAL_COLOR: "#BEC8BC",
					HOVER_COLOR: "#CFCE85",
					SELECTED_COLOR: "#CFCE6A",
					US_COLOR: { "US-AK": "#a8c4d1", "US-AL": "#78246b", "US-AR": "#78246b", "US-AZ": "#78246b", "US-CA": "#863577", "US-CO": "#73beca", "US-CT": "#7ec2cd", "US-DE": "#a05b8f", "US-FL": "#8d3e7d", "US-GA": "#944682", "US-HI": "#bcb3c9", "US-IA": "#0fa1b2", "US-ID": "#19a4b4", "US-IL": "#ae76a1", "US-IN": "#c7abc5", "US-KS": "#4ab2c1", "US-KY": "#a36293", "US-LA": "#78246b", "US-MA": "#67bac7", "US-MD": "#c29bba", "US-ME": "#88c6d0", "US-MI": "#9c558b", "US-MN": "#008897", "US-MO": "#c6a3c0", "US-MS": "#78246b", "US-MT": "#93cbd4", "US-NC": "#994e87", "US-ND": "#008291", "US-NE": "#0094a4", "US-NH": "#059eaf", "US-NJ": "#9dccd5", "US-NM": "#78246b", "US-NV": "#78246b", "US-NY": "#7f2d71", "US-OH": "#b27ca5", "US-OK": "#a66998", "US-OR": "#ba8aaf", "US-PA": "#b2bccd", "US-RI": "#aa6f9c", "US-SC": "#78246b", "US-SD": "#008e9e", "US-TN": "#78246b", "US-TX": "#b683aa", "US-UT": "#0099aa", "US-VA": "#2eaaba", "US-VT": "#23a7b7", "US-WA": "#be93b4", "US-WI": "#59b6c4", "US-WV": "#78246b", "US-WY": "#3caebe"},
					WORLD_COLOR: { AF: "#78246b", AL: "#c39ebc", AM: "#78246b", AO: "#78246b", AR: "#7cc1cd", AT: "#0097a8", AU: "#008494", AZ: "#78246b", BA: "#863577", BD: "#9c548b", BE: "#13a2b3", BF: "#8c3c7b", BG: "#c7a4c1", BI: "#78246b", BJ: "#ac729e", BO: "#bf94b6", BR: "#95ccd4", BW: "#73beca", BY: "#78246b", BZ: "#ba8aaf", CA: "#008999", CD: "#78246b", CF: "#78246b", CG: "#78246b", CH: "#009cad", CI: "#78246b", CL: "#1fa6b6", CM: "#833274", CN: "#78246b", CO: "#b07aa3", CR: "#6abac8", CY: "#91cad3", CZ: "#48b1c0", DE: "#0095a5", DJ: "#78246b", DK: "#008796", DO: "#bab5ca", DZ: "#7b276d", EC: "#b6b8cb", EE: "#5fb7c5", EG: "#78246b", ES: "#59b6c4", ET: "#78246b", FI: "#049dae", FR: "#42b0bf", GE: "#9f5a8f", GH: "#a1c9d3", GN: "#78246b", GR: "#b37fa7", GT: "#c097b8", GY: "#c3aec7", HN: "#aa6f9c", HR: "#80c3ce", HT: "#78246b", HU: "#8cc8d2", ID: "#b582a9", IE: "#0ba0b0", IL: "#84c5cf", IN: "#78246b", IQ: "#78246b", IR: "#78246b", IS: "#30abbb", IT: "#4db3c1", JM: "#aac2d0", JO: "#a66797", JP: "#27a8b9", KE: "#78246b", KG: "#78246b", KH: "#a25f92", KM: "#78246b", KR: "#53b4c3", KW: "#99cdd5", KZ: "#78246b", LA: "#893979", LB: "#78246b", LK: "#c29bba", LR: "#78246b", LT: "#aebfcf", LU: "#0090a0", LV: "#a6c5d2", MA: "#974a85", MD: "#78246b", ME: "#bb8eb1", MG: "#78246b", MK: "#a46595", ML: "#914380", MN: "#a76a98", MR: "#78246b", MT: "#6fbcc9", MW: "#9e578d", MX: "#ad74a0", MY: "#88c6d0", MZ: "#78246b", NA: "#9dccd5", NE: "#b27ca5", NG: "#78246b", NI: "#9b528a", NL: "#008e9e", NO: "#008291", NP: "#802e72", NZ: "#0092a3", PA: "#3caebe", PE: "#c8a8c3", PH: "#b684aa", PK: "#78246b", PL: "#23a7b7", PT: "#2baaba", PY: "#b2bccd", QA: "#36adbc", RO: "#b887ac", RS: "#a05d90", RU: "#78246b", RW: "#a96d9a", SD: "#78246b", SE: "#008b9b", SG: "#0099aa", SI: "#17a3b4", SK: "#77c0cb", SL: "#944682", SN: "#bd91b3", SV: "#c7abc5", SY: "#78246b", TD: "#78246b", TG: "#78246b", TH: "#beb2c8", TJ: "#78246b", TN: "#9a4f88", TR: "#a36293", TT: "#64b9c6", TZ: "#78246b", UA: "#af77a1", UG: "#78246b", UK: "#079eaf", US: "#0fa1b2", UY: "#1ba5b5", UZ: "#78246b", VE: "#984c86", VN: "#7e2b70", YE: "#78246b", ZA: "#c5a1bf", ZM: "#8e3f7e", ZW: "#78246b" },
					COLOR_RANGE: ["#008291", "#009cad", "#2caaba", "#6cbbc8", "#9bced6", "#c9a9c4", "#b785ab", "#a66897", "#974a85", "#78246b"],
					LIMIT: 20
				},
				markers: {
					PATH: BASE_URL + "/wp-content/themes/life-measures/images/map/markers_plain/",
					FORMAT: ".png"
				},
				bgEmptyRegion: {
					PATH: BASE_URL + "/wp-content/themes/life-measures/images/bg-empty-region.png"
				},
				categories: {
					US: "us",
					WORLD: "int"
				},
				BACKGROUND_COLOR: "#f0f0f0"
			}
			htmlIdPrefixes = {
				US_DIMENSION: "us_dimension_",
				US_COMPONENT: "us_component_",
				US_COMPONENT_CONTAINER: "us_component_container_",
				WORLD_DIMENSION: "world_dimension_",
				WORLD_COMPONENT: "world_component_",
				WORLD_COMPONENT_CONTAINER: "world_component_container_",
				US_YEAR: "us_year_",
				WORLD_YEAR: "world_year_"
			},
			updateTypes = {
				BY_DIMENSION: "by_dimension",
				BY_COMPONENT: "by_component"
			};
			tooltipMessages = {
				opportunity: {
					US: "The Opportunity dimension is concerned with people’s possibilities for employment and entrepreneurship and education quality and choice. It pays particular attention to the underprivileged, assessing the levels of poverty and inequality in a state.",
					WORLD: "The Opportunity dimension is concerned with people’s access to community basics, education, and possibilities for employment and entrepreneurship. It pays particular attention to the underprivileged, assessing the levels of poverty and inequality in a society."
				},
				health_and_environment: {
					US: "The Health & Environment dimension deals with the prevailing physical, mental, and environmental conditions in a state. It looks at such factors as life expectancy, obesity, suicide rates, and access to safe water, fruit and vegetables, medicine, and a safe place to exercise.",
					WORLD: "The Health & Environment dimension deals with the prevailing physical, mental, and environmental conditions in a society. It looks at such factors as life expectancy, undernourishment, suicide rates, positive experiences, suffering, and air, water, and sanitation quality."
				},
				freedom: {
					US: "The Freedom dimension concerns itself with the extent to which individuals in a state are able to take control of their own lives. It measures the degree to which a state respects the personal and economic freedoms of its residents.",
					WORLD: "The Freedom dimension concerns itself with the extent to which individuals in a society are able to take control of their own lives. It measures the degree to which a society respects the political, civil, religious, and economic freedoms of its people as well as people’s perceptions of their freedom."
				},
				community_and_relationships: {
					US: "The Community & Relationships dimension measures the quality of the community and family lives of a state’s residents. It is concerned with people’s charitable, civic, and religious engagement and their relationships with friends and loved ones.",
					WORLD: "The Community & Relationships dimension measures the quality of the community and family lives of people in a society. It is concerned with people’s charitable, civic, and religious engagement and their relationships with friends and loved ones."
				},
				living_standard: {
					US: "The Living Standard dimension looks at the average level of economic and financial resources available to a state’s residents. It concerns itself with current standard of living, improvements in standard of living, and people’s perceptions of their standard of living.",
					WORLD: "The Living Standard dimension looks at the average level of economic and financial resources available to people in a society. It concerns itself with current standard of living, improvements in standard of living, and people’s perceptions of their own and their society’s standard of living."
				},
				peace_and_security: {
					US: "The Peace & Security Dimension measures the degree to which a state minimizes violence and crime. It also looks at how safe people feel where they live and whether they trust their neighbors.",
					WORLD: "The Peace & Security Dimension measures the degree to which a society minimizes violence, crime, and other sources of instability while respecting human rights and upholding the rule of law. It also looks at trust, transparency, corruption, and bureaucratic quality."
				}
			}
		return {
			indexes: {
				US: US,
				WORLD: WORLD,
				DEFAULT_INDEX: US
			},
			map: map,
			htmlIdPrefixes: htmlIdPrefixes,
			updateTypes: updateTypes,
			tooltipMessages: tooltipMessages
		};
	})();

	var usYears = [],
		worldYears = [],
		usLocations = [],
		worldLocations = [],
		usDimensions = [],
		worldDimensions = [],
		usDimensionsData = [],
		worldDimensionsData = [],
		usComponentsData = [],
		worldComponentsData = [],
		usScale = {},
		worldScale = {},
		usEmptyLocations = {},
		worldEmptyLocations = {};

	var usMap,
		worldMap;

	var $usMap = $("#us_map"),
		$worldMap = $("#world_map"),
		$dummyMap = $("#dummy_map");

	var	$toggleDimensions = $("#toggle_dimensions"),
		$toggleComponents = $("#toggle_components"),
		$usYears = $("#us_years"),
		$worldYears = $("#world_years"),
		$usDimensions = $("#us_dimensions"),
		$usComponents = $("#us_components"),
		$worldDimensions = $("#world_dimensions"),
		$worldComponents = $("#world_components"),
		$usSelectedRegions = $("#us_selected_regions"),
		$worldSelectedRegions = $("#world_selected_regions"),
		$usSelectedRegionsContainer = $("#us_selected_regions_container"),
		$worldSelectedRegionsContainer = $("#world_selected_regions_container"),
		$btnUpdateMap = $("#btn_update_map"),
		$btnReset = $("#btn_reset"),
		$btnShowResults = $("#btn_show_results");

	var $usToggle = $("#us_toggle"),
		$worldToggle = $("#world_toggle"),
		$showCoach = $("#show_coach"),
		$btnCloseCoach = $("#btn_close_coach"),
		$inputUsSearchRegion = $("#input_us_search_region"),
		$inputWorldSearchRegion = $("#input_world_search_region"),
		$preLoader = $("#pre_loader");

	var getData = function () {
		return $.post(BASE_URL + "/controllers/interactive_map.php", {}, function (data) {
			data = JSON.parse(data);

			// years
			usYears = data["years"]["us"];
			worldYears = data["years"]["world"];

			// locations
			usLocations = data["locations"]["us"];
			worldLocations = data["locations"]["world"];

			// dimensions
			usDimensions = data["dimensions"]["us"];
			worldDimensions = data["dimensions"]["world"];

			// dimensions data
			usDimensionsData = data["dimensions_data"]["us"];
			worldDimensionsData = data["dimensions_data"]["world"];

			// components data
			usComponentsData = data["components_data"]["us"];
			worldComponentsData = data["components_data"]["world"];

			// marker scales
			for(var i = 0; i < usLocations.length; i++) {
				usScale[i + 1] = defaults.map.markers.PATH + (i + 1) + defaults.map.markers.FORMAT;
			}

			for(var i = 0; i < worldLocations.length; i++) {
				worldScale[i + 1] = defaults.map.markers.PATH + (i + 1) + defaults.map.markers.FORMAT;
			}
		});
	};

	var getEmptyLocations = function (index) {
		var dummyMap = function (index) {
			var map = new jvm.Map({
				map: (index == defaults.indexes.US) ? defaults.map.types.US : defaults.map.types.WORLD,
				container: $dummyMap,
				series: {
					regions: [{
						attribute: "fill"
					}]
				}
			});

			return map;
		}

		var emptyLocations = [];
		var locations = (index == defaults.indexes.US) ? usLocations : worldLocations;

		for(var key in dummyMap(index).series.regions[0].elements) {
			var locationExists = false;

			for(var i = 0; i < locations.length; i++) {
				var locationAbbr = (index == defaults.indexes.US) ? "US-" + locations[i]["abbr"] : locations[i]["abbr"];

				if(key == locationAbbr) {
					locationExists = true;
				}
			}

			if(!locationExists) {
				emptyLocations.push(key);
			}
		}

		return emptyLocations;
	};

	var generateYears = function (index) {
		var years = (index == defaults.indexes.US) ? usYears : worldYears,
			yearIdPrefix = (index == defaults.indexes.US) ? defaults.htmlIdPrefixes.US_YEAR : defaults.htmlIdPrefixes.WORLD_YEAR,
			yearsContainerId = (index == defaults.indexes.US) ? "us_years" : "world_years";

		for(var i = 0; i < years.length; i++) {
			$("#" + yearsContainerId).append("<li><a id='" + yearIdPrefix + years[i] + "'class='btn year' href='#'>" + years[i] + "</a></li>");

			$("#" + yearIdPrefix + years[i]).click(function () {
				if($(this).hasClass("active")) {
					$(this).removeClass("active");
				}
				else {
					$(this).addClass("active");
				}
			});

			if(i == (years.length - 1)) {
				$("#" + yearIdPrefix + years[i]).addClass("active");
			}
		}
	};

	var selectRegion = function (index, regionName) {
		var selectedRegions = (index == defaults.indexes.US) ? usMap.getSelectedRegions() : worldMap.getSelectedRegions();
		var regions = (index == defaults.indexes.US) ? usLocations : worldLocations;

		if(selectedRegions.length < defaults.map.regions.LIMIT) {
			for(var i = 0; i < regions.length; i++) {
				if(regions[i].name == regionName) {
					selectedRegions.push((index == defaults.indexes.US) ? "US-" + regions[i].abbr : regions[i].abbr);
					break;
				}
			}

			if(index == defaults.indexes.US) {
				usMap.clearSelectedRegions();
				usMap.setSelectedRegions(selectedRegions);
			}
			else {
				worldMap.clearSelectedRegions();
				worldMap.setSelectedRegions(selectedRegions);
			}
		}
		else {
			swal("You can only select " + defaults.map.regions.LIMIT + ((index == defaults.indexes) ? " states" : " countries") + " at once", "", "info");
		}
	};

	var updateMap = function (index, updateType) {
		var years = (index == defaults.indexes.US) ? usYears : worldYears,
			locations = (index == defaults.indexes.US) ? usLocations : worldLocations,
			dimensions = (index == defaults.indexes.US) ? usDimensions : worldDimensions,
			selectedYears = [],
			usResultData = [],
			worldResultData = [],
			usColorRange = {},
			worldColorRange = {},
			mapData = {},
			yearIdPrefix = (index == defaults.indexes.US) ? defaults.htmlIdPrefixes.US_YEAR : defaults.htmlIdPrefixes.WORLD_YEAR,
			isUpdateValid = false;

		for(var i = 0; i < years.length; i++) {
			if($("#" + yearIdPrefix + years[i]).hasClass("active")) {
				selectedYears.push(years[i]);
			}
		}

		if(selectedYears.length >= 1) {
			// update by dimension
			if(updateType == defaults.updateTypes.BY_DIMENSION) {
				var dimensionsData = (index == defaults.indexes.US) ? usDimensionsData : worldDimensionsData,
					dimensionIdPrefix = (index == defaults.indexes.US) ? defaults.htmlIdPrefixes.US_DIMENSION : defaults.htmlIdPrefixes.WORLD_DIMENSION,
					selectedDimensions = [];

				for(var dimension in dimensions) {
					if($("#" + dimensionIdPrefix + dimension).hasClass("active")) {
						selectedDimensions.push(dimension);
					}
				}

				if(selectedDimensions.length >= 1) {
					// loops through all the locations in the us map
					for(var i = 0; i < locations.length; i++) {
						var location = {};

						location["name"] = locations[i]["name"];
						location["abbr"] = locations[i]["abbr"];
						location["coords"] = [parseFloat(locations[i]["coords"][0]), parseFloat(locations[i]["coords"][1])];
						location["dimensions"] = {};
						location["score"] = 0;

						for(var j = 0; j < dimensionsData.length; j++) {
							if(locations[i]["abbr"] == dimensionsData[j][(index == defaults.indexes.US) ? "state" : "country"]) {
								if(selectedYears.indexOf(dimensionsData[j]["year"]) >= 0) {
									for(var k = 0; k < selectedDimensions.length; k++) {
										if(location["dimensions"][selectedDimensions[k]] == undefined) {
											location["dimensions"][selectedDimensions[k]] = (isNaN(parseFloat(dimensionsData[j][selectedDimensions[k]])) ? 0 : parseFloat(dimensionsData[j][selectedDimensions[k]]));
										}
										else {
											location["dimensions"][selectedDimensions[k]] += (isNaN(parseFloat(dimensionsData[j][selectedDimensions[k]])) ? 0 : parseFloat(dimensionsData[j][selectedDimensions[k]]));
										}
									}
								}
							}
						}

						for(var key in location["dimensions"]) {
							location["dimensions"][key] = location["dimensions"][key] / selectedYears.length;
							location["score"] += location["dimensions"][key];
						}

						location["score"] = location["score"] / selectedDimensions.length;

						if(index == defaults.indexes.US) {
							usResultData.push(location);
						}
						else {
							worldResultData.push(location);
						}
					}

					isUpdateValid = true;
				}
				else {
					swal("Please select a dimension.", "", "info")
				}
			}

			// update by component
			else {
				var componentsData = (index == defaults.indexes.US) ? usComponentsData : worldComponentsData,
					componentIdPrefix = (index == defaults.indexes.US) ? defaults.htmlIdPrefixes.US_COMPONENT : defaults.htmlIdPrefixes.WORLD_COMPONENT,
					componentContainerIdPrefix = (index == defaults.indexes.US) ? defaults.htmlIdPrefixes.US_COMPONENT_CONTAINER : defaults.htmlIdPrefixes.WORLD_COMPONENT_CONTAINER,
					selectedComponents = [];

				for(var dimension in dimensions) {
					if($("#" + componentContainerIdPrefix + dimension).hasClass("opened")) {
						for(var i = 0; i < dimensions[dimension].length; i++) {
							if($("#" + componentIdPrefix + dimensions[dimension][i]).hasClass("active")) {
								selectedComponents.push(dimensions[dimension][i]);
							}
						}

						break;
					}
				}

				if(selectedComponents.length >= 1) {
					// loops through all the locations in the us map
					for(var i = 0; i < locations.length; i++) {
						var location = {};

						location["name"] = locations[i]["name"];
						location["abbr"] = locations[i]["abbr"];
						location["coords"] = [parseFloat(locations[i]["coords"][0]), parseFloat(locations[i]["coords"][1])];
						location["components"] = {};
						location["score"] = 0;

						for(var j = 0; j < componentsData.length; j++) {
							if(locations[i]["abbr"] == componentsData[j][(index == defaults.indexes.US) ? "state" : "country"]) {
								if(selectedYears.indexOf(componentsData[j]["year"]) >= 0) {
									for(var k = 0; k < selectedComponents.length; k++) {
										if(location["components"][selectedComponents[k]] == undefined) {
											location["components"][selectedComponents[k]] = (isNaN(parseFloat(componentsData[j][selectedComponents[k]])) ? 0 : parseFloat(componentsData[j][selectedComponents[k]]));
										}
										else {
											location["components"][selectedComponents[k]] += (isNaN(parseFloat(componentsData[j][selectedComponents[k]])) ? 0 : parseFloat(componentsData[j][selectedComponents[k]]));
										}
									}
								}
							}
						}

						for(var key in location["components"]) {
							location["components"][key] = location["components"][key] / selectedYears.length;
							location["score"] += location["components"][key];
						}

						location["score"] = location["score"] / selectedComponents.length;

						if(index == defaults.indexes.US) {
							usResultData.push(location);
						}
						else {
							worldResultData.push(location);
						}
					}

					isUpdateValid = true;
				}
				else {
					swal("Please select a component.", "", "info");
				}
			}

			if(isUpdateValid) {
				var rainbow = new Rainbow();
				var maxNumberRange = (index == defaults.indexes.US) ? 40 : 100;
				rainbow.setNumberRange(0, maxNumberRange);
				rainbow.setSpectrum(defaults.map.regions.COLOR_RANGE[0], defaults.map.regions.COLOR_RANGE[1], defaults.map.regions.COLOR_RANGE[2], defaults.map.regions.COLOR_RANGE[3], defaults.map.regions.COLOR_RANGE[4], defaults.map.regions.COLOR_RANGE[5], defaults.map.regions.COLOR_RANGE[6], defaults.map.regions.COLOR_RANGE[7], defaults.map.regions.COLOR_RANGE[8], defaults.map.regions.COLOR_RANGE[9]);

				if(index == defaults.indexes.US) {
					usResultData.sort(function (a, b) {
						return b.score - a.score;
					});

					for(var i = 0; i < usResultData.length; i++) {
						usResultData[i]["rank"] = i + 1;
						usColorRange["US-" + usResultData[i]["abbr"]] = "#" + rainbow.colourAt(i);
					}
				}
				else {
					worldResultData.sort(function (a, b) {
						return b.score - a.score;
					});

					for(var i = 0; i < worldResultData.length; i++) {
						worldResultData[i]["rank"] = i + 1;
						worldColorRange[worldResultData[i]["abbr"]] = "#" + rainbow.colourAt(i);
					}
				}

				var getTip = function (index, rank, regionCode) {
					var resultData = (index == defaults.indexes.US) ? usResultData : worldResultData;

					if(regionCode != undefined) {
						for(var i = 0; i < resultData.length; i++) {
							if(((index == defaults.indexes.US) ? "US-" + resultData[i].abbr : resultData[i].abbr) == regionCode) {
								rank = i;
								break;
							}
						}
					}

					if(rank == undefined) { // if place is not on the map
						return "";
					}
					else {
						var tip = "<div id='content' class='row' style='margin-top: 0px;'>" +
							"<section class='cards' role='main-content' style='margin-top: 0px;'>" +
								"<div class='cards-container clearfix' style='display: inline-block;'>" +
									"<div class='card flipped' style='height: 0px; width:250px; display: inline-block;'>" +
										"<div class='face back'>" +
											"<h2>" + resultData[rank].name + "</h2>" +
											"<h3>Average " + ((updateType == defaults.updateTypes.BY_DIMENSION) ? "dimension" : "component") + " Scores</h3>" +
											"<div class='dimension-container clearfix' style='width: 241px;'>";

						tip += "<div class='dimension average_score'>" +
									"<div class='name'>Average Score</div>" +
									"<div class='score'>" + parseFloat(resultData[rank]["score"]).toFixed(2) + "</div>" +
								"</div>";

						for(var key in resultData[rank][(updateType == defaults.updateTypes.BY_DIMENSION) ? "dimensions" : "components"]) {
							var score = resultData[rank][(updateType == defaults.updateTypes.BY_DIMENSION) ? "dimensions" : "components"][key];

							tip +=
								"<div class='dimension " + key + "'>" +
								"	<div class='name'>" + key.split("_").join(" ").split("and").join("&") + "</div>" +
								"	<div class='score'>" + ((score >= 10) ? parseFloat(score).toFixed(1) : parseFloat(score).toFixed(2)) + "</div>" +
								"</div>";
						}

						tip += "</div></div></div></div></section></div>";

						return tip;
					}
				};

				var ordinalSuffixOf = function (i) {
					var j = i % 10,
						k = i % 100;

					if(j == 1 && k != 11) {
						return "st";
					}
					else if(j == 2 && k != 12) {
						return "nd";
					}
					else if(j == 3 && k != 13) {
						return "rd";
					}

					return "th";
				}

				if(index == defaults.indexes.US) {
					var selectedRegions = [];
					if(usMap != undefined) {
						selectedRegions = usMap.getSelectedRegions();

						for(var i = 0; i < selectedRegions.length; i++) {
							$("#btn_remove_" + selectedRegions[i]).unbind();
							$("#" + selectedRegions[i]).remove();
						}

						usMap.remove();
					}

					$usMap.vectorMap({
						map: defaults.map.types.US,
						regionsSelectable: true,
						regionStyle: {
							initial: { fill: defaults.map.regions.INITIAL_COLOR },
							hover: { fill: defaults.map.regions.HOVER_COLOR },
							selected: { fill: defaults.map.regions.SELECTED_COLOR }
						},
						markers: usResultData.map(function (h) {
							return { abbr: "US-" + h.abbr, name: h.name, latLng: h.coords }
						}),
						series: {
							markers: [{
								attribute: "image",
								scale: usScale,
								values: usResultData.reduce(function (p, c, i) {
									p[i] = c.rank;
									return p;
								}, {})
							}],
							// regions: [{
							// 	attribute: "fill",
							// 	scale: { emptyRegion: "#6A6F73" },
							// 	values: (function () {
							// 		var obj = {};

							// 		for(var i = 0; i < usEmptyLocations.length; i++) {
							// 			obj[usEmptyLocations[i]] = "emptyRegion";
							// 		}

							// 		return obj;
							// 	})()
							// }]
							regions: [{
								attribute: "fill",
								values: (function () {
									// var obj = defaults.map.regions.US_COLOR;
									var obj = usColorRange;

									for(var i = 0; i < usEmptyLocations.length; i++) {
										obj[usEmptyLocations[i]] = "#6A6F73";
									}

									return obj;
								})()
							}]
						},
						backgroundColor: defaults.map.BACKGROUND_COLOR,
						onMarkerTipShow: function (event, tip, code) {
							tip.html(getTip(defaults.indexes.US, code));
						},
						onMarkerClick: function (event, code) {
							var selectedRegions = usMap.getSelectedRegions(),
								selectedMarker = usMap.series.markers[0].elements[code].config.abbr;

							if(selectedRegions.length < defaults.map.regions.LIMIT) {
								if(selectedRegions.indexOf(selectedMarker) >= 0) {
									selectedRegions.splice(selectedRegions.indexOf(selectedMarker), 1);
									usMap.clearSelectedRegions();
									usMap.setSelectedRegions(selectedRegions);
								}
								else {
									selectedRegions.push(selectedMarker);
									usMap.setSelectedRegions(selectedRegions);
								}
							}
							else {
								swal("You can only select " + defaults.map.regions.LIMIT + " states at once.", "", "info");
							}
						},
						onRegionTipShow: function (event, tip, code) {
							tip.html(getTip(defaults.indexes.US, undefined, code));
						},
						onRegionOver: function (event, code) {
							var codeExists = false;

							for(var i = 0; i < usEmptyLocations.length; i++) {
								if(code == usEmptyLocations[i]) {
									codeExists = true;
									break;
								}
							}

							if(codeExists) {
								event.preventDefault();
							}
						},
						onRegionClick: function (event, code) {
							if(usMap.getSelectedRegions().length < defaults.map.regions.LIMIT) {
								var codeExists = false;

								for(var i = 0; i < usEmptyLocations.length; i++) {
									if(code == usEmptyLocations[i]) {
										codeExists = true;
										break;
									}
								}

								if(codeExists) {
									event.preventDefault();
								}
							}
							else {
								event.preventDefault();
								swal("You can only select " + defaults.map.regions.LIMIT + " states at once.", "", "info");
							}
						},
						onRegionSelected: function (event, code, isSelected, selectedRegions) {
							for(var i = 0; i < usResultData.length; i++) {
								if("US-" + usResultData[i].abbr == code) {
									if(isSelected) {
										$("#us_selected_regions tbody").append(
											"<tr id='" + code + "'>" +
											"	<td><h3>" + usResultData[i].name + "</h3></td>" +
											"	<td><h3>" + (i + 1) + "<sup>" + ordinalSuffixOf(i + 1) + "</sup></h3></td>" +
											"	<td><h3>" + parseFloat(usResultData[i].score).toFixed(2) + "</h3></td>" +
											"	<td><a data-region='" + code + "' id='btn_remove_" + code + "'><span></span></a></td>" +
											"</tr>");

										$("#btn_remove_" + code).click(function () {
											$(this).unbind();

											var selectedRegions = usMap.getSelectedRegions();

											selectedRegions.splice(selectedRegions.indexOf($(this).attr("data-region")), 1);
											usMap.clearSelectedRegions();
											usMap.setSelectedRegions(selectedRegions);

											$("#" + $(this).attr("data-region")).remove();
										});
									}
									else {
										selectedRegions.splice(selectedRegions.indexOf(code), 1);
										usMap.setSelectedRegions(selectedRegions);
										$("#" + code).remove();
									}

									break;
								}
							}
						}
					});

					usMap = $usMap.vectorMap("get", "mapObject");
					usMap.setSelectedRegions(selectedRegions);
				}
				else {
					var selectedRegions = [];

					if(worldMap != undefined) {
						selectedRegions = worldMap.getSelectedRegions();

						for(var i = 0; i < selectedRegions.length; i++) {
							$("#btn_remove_" + selectedRegions[i]).unbind();
							$("#" + selectedRegions[i]).remove();
						}

						worldMap.remove();
					}

					$worldMap.vectorMap({
						map: defaults.map.types.WORLD,
						regionsSelectable: true,
						regionStyle: {
							initial: { fill: defaults.map.regions.INITIAL_COLOR },
							hover: { fill: defaults.map.regions.HOVER_COLOR },
							selected: { fill: defaults.map.regions.SELECTED_COLOR }
						},
						markers: worldResultData.map(function (h) {
							return { abbr: h.abbr, name: h.name, latLng: h.coords }
						}),
						series: {
							markers: [{
								attribute: "image",
								scale: worldScale,
								values: worldResultData.reduce(function (p, c, i) {
									p[i] = c.rank;
									return p;
								}, {})
							}],
							// regions: [{
							// 	attribute: "fill",
							// 	scale: { emptyRegion: "#6A6F73" },
							// 	values: (function () {
							// 		var obj = {};

							// 		for(var i = 0; i < worldEmptyLocations.length; i++) {
							// 			obj[worldEmptyLocations[i]] = "emptyRegion";
							// 		}

							// 		return obj;
							// 	})()
							// }]
							regions: [{
								attribute: "fill",
								values: (function () {
									// var obj = defaults.map.regions.WORLD_COLOR;
									var obj = worldColorRange;

									for(var i = 0; i < worldEmptyLocations.length; i++) {
										obj[worldEmptyLocations[i]] = "#6A6F73";
									}

									return obj;
								})()
							}]
						},
						backgroundColor: defaults.map.BACKGROUND_COLOR,
						onMarkerTipShow: function (event, tip, code) {
							tip.html(getTip(defaults.indexes.WORLD, code));
						},
						onMarkerClick: function (event, code) {
							var selectedRegions = worldMap.getSelectedRegions(),
								selectedMarker = worldMap.series.markers[0].elements[code].config.abbr;

							if(selectedRegions.length < defaults.map.regions.LIMIT) {
								if(selectedRegions.indexOf(selectedMarker) >= 0) {
									selectedRegions.splice(selectedRegions.indexOf(selectedMarker), 1);
									worldMap.clearSelectedRegions();
									worldMap.setSelectedRegions(selectedRegions);
								}
								else {
									selectedRegions.push(selectedMarker);
									worldMap.setSelectedRegions(selectedRegions);
								}
							}
							else {
								swal("You can only select " + defaults.map.regions.LIMIT + " countries at once.", "", "info");
							}
						},
						onRegionTipShow: function (event, tip, code) {
							tip.html(getTip(defaults.indexes.WORLD, undefined, code));
						},
						onRegionOver: function (event, code) {
							var codeExists = false;

							for(var i = 0; i < worldEmptyLocations.length; i++) {
								if(code == worldEmptyLocations[i]) {
									codeExists = true;
									break;
								}
							}

							if(codeExists) {
								event.preventDefault();
							}
						},
						onRegionClick: function (event, code) {
							if(worldMap.getSelectedRegions().length < defaults.map.regions.LIMIT) {
								var codeExists = false;

								for(var i = 0; i < worldEmptyLocations.length; i++) {
									if(code == worldEmptyLocations[i]) {
										codeExists = true;
										break;
									}
								}

								if(codeExists) {
									event.preventDefault();
								}
							}
							else {
								event.preventDefault();
								swal("You can only select " + defaults.map.regions.LIMIT + " countries at once.", "", "info");
							}
						},
						onRegionSelected: function (event, code, isSelected, selectedRegions) {
							for(var i = 0; i < worldResultData.length; i++) {
								if(worldResultData[i].abbr == code) {
									if(isSelected) {
										$("#world_selected_regions tbody").append(
											"<tr id='" + code + "'>" +
											"	<td><h3>" + worldResultData[i].name + "</h3></td>" +
											"	<td><h3>" + (i + 1) + "<sup>" + ordinalSuffixOf(i + 1) + "</sup></h3></td>" +
											"	<td><h3>" + parseFloat(worldResultData[i].score).toFixed(2) + "</h3></td>" +
											"	<td><a data-region='" + code + "' id='btn_remove_" + code + "'><span></span></a></td>" +
											"</tr>");

										$("#btn_remove_" + code).click(function () {
											$(this).unbind();

											var selectedRegions = worldMap.getSelectedRegions();

											selectedRegions.splice(selectedRegions.indexOf($(this).attr("data-region")), 1);
											worldMap.clearSelectedRegions();
											worldMap.setSelectedRegions(selectedRegions);

											$("#" + $(this).attr("data-region")).remove();
										});
									}
									else {
										selectedRegions.splice(selectedRegions.indexOf(code), 1);
										worldMap.setSelectedRegions(selectedRegions);
										$("#" + code).remove();
									}

									break;
								}
							}
						}
					});

					worldMap = $worldMap.vectorMap("get", "mapObject");
					worldMap.setFocus({ scale: 2, x: 0.5, y: 0.5});
					worldMap.setSelectedRegions(selectedRegions);
				}
			}
		}
		else {
			swal("Please select a year.", "", "info");
		}
	};

	var showResults = function (index, updateType) {
		var years = (index == defaults.indexes.US) ? usYears : worldYears,
			dimensions = (index == defaults.indexes.US) ? usDimensions : worldDimensions,
			selectedYears = [],
			selectedRegions = (index == defaults.indexes.US) ? usMap.getSelectedRegions() : worldMap.getSelectedRegions(),
			yearIdPrefix = (index == defaults.indexes.US) ? defaults.htmlIdPrefixes.US_YEAR : defaults.htmlIdPrefixes.WORLD_YEAR,
			urlParams = ((index == defaults.indexes.US) ? "us" : "int") + "/map/scores/",
			isParamsValid = false;

		if(selectedRegions.length >= 1) {
			if(index == defaults.indexes.US) {
				for(var i = 0; i < selectedRegions.length; i++) {
					selectedRegions[i] = selectedRegions[i].substring(3, selectedRegions[i].length);
				}
			}

			for(var i = 0; i < years.length; i++) {
				if($("#" + yearIdPrefix + years[i]).hasClass("active")) {
					selectedYears.push(years[i]);
				}
			}

			if(selectedYears.length >= 1) {
				// by dimension
				if(updateType == defaults.updateTypes.BY_DIMENSION) {
					var dimensionIdPrefix = (index == defaults.indexes.US) ? defaults.htmlIdPrefixes.US_DIMENSION : defaults.htmlIdPrefixes.WORLD_DIMENSION,
						selectedDimensions = [];

					for(var dimension in dimensions) {
						if($("#" + dimensionIdPrefix + dimension).hasClass("active")) {
							selectedDimensions.push(dimension);
						}
					}

					if(selectedDimensions.length >= 1) {
						isParamsValid = true;
					}
					else {
						swal("Please select a dimension.", "", "info");
					}
				}

				// by component
				else {
					var componentsData = (index == defaults.indexes.US) ? usComponentsData : worldComponentsData,
					componentIdPrefix = (index == defaults.indexes.US) ? defaults.htmlIdPrefixes.US_COMPONENT : defaults.htmlIdPrefixes.WORLD_COMPONENT,
					componentContainerIdPrefix = (index == defaults.indexes.US) ? defaults.htmlIdPrefixes.US_COMPONENT_CONTAINER : defaults.htmlIdPrefixes.WORLD_COMPONENT_CONTAINER,
					selectedComponents = [];

					for(var dimension in dimensions) {
						if($("#" + componentContainerIdPrefix + dimension).hasClass("opened")) {
							for(var i = 0; i < dimensions[dimension].length; i++) {
								if($("#" + componentIdPrefix + dimensions[dimension][i]).hasClass("active")) {
									selectedComponents.push(dimensions[dimension][i]);
								}
							}

							break;
						}
					}

					if(selectedComponents.length >= 1) {
						isParamsValid = true;
					}
					else {
						swal("Please select a component.", "", "info");
					}
				}
			}
			else {
				swal("Please select a year.", "", "info");
			}
		}
		else {
			swal("Please select a " + ((index == defaults.indexes.US) ? "state" : "country") + ".", "", "info");
		}

		if(isParamsValid) {
			urlParams += "years:";
			for(var i = 0; i < selectedYears.length; i++) {
				urlParams += selectedYears[i];

				if(i < (selectedYears.length - 1)) {
					urlParams += "|";
				}
			}

			urlParams += "/locations:";
			for(var i = 0; i < selectedRegions.length; i++) {
				urlParams += selectedRegions[i];

				if(i < (selectedRegions.length - 1)) {
					urlParams += "|";
				}
			}

			if(updateType == defaults.updateTypes.BY_DIMENSION) {
				urlParams += "/dimens:";
				for(var i = 0; i < selectedDimensions.length; i++) {
					urlParams += selectedDimensions[i];

					if(i < (selectedDimensions.length - 1)) {
						urlParams += "|";
					}
				}
			}
			else {
				urlParams += "/components:";
				for(var i = 0; i < selectedComponents.length; i++) {
					urlParams += selectedComponents[i];

					if(i < (selectedComponents.length - 1)) {
						urlParams += "|";
					}
				}
			}

			urlParams += "/";
			window.open(BASE_URL + "/results/" + urlParams, "_self");
		}
	};

	var getCookie = function(cookieName){
		var name = cookieName + "=";
	    var cookie = document.cookie.split(';');
	    for(var i=0; i<cookie.length; i++) {
	        var c = cookie[i];
	        while (c.charAt(0)==' ') c = c.substring(1);
	        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
	    }
	    return "";
	};

	var setCookie = function(cookieName, cookieValue, cookieExpireDate){
		var date = new Date();
	    date.setTime(date.getTime() + (cookieExpireDate*24*60*60*1000));
	    var expires = "expires=" + date.toUTCString();
	    document.cookie = cookieName + "=" + cookieValue + "; " + expires;
	};

	var showUs = function () {
		$usToggle.addClass("active");
		$worldToggle.removeClass("active");

		$worldYears.hide();
		$usYears.show();

		$worldSelectedRegionsContainer.hide();
		$usSelectedRegionsContainer.show();

		$inputWorldSearchRegion.hide();
		$inputUsSearchRegion.show();

		$worldMap.hide();
		$usMap.fadeIn("slow");
		$usMap.show();
		usMap.updateSize();
	};

	var showWorld = function () {
		$worldToggle.addClass("active");
		$usToggle.removeClass("active");

		$usYears.hide();
		$worldYears.show();

		$usSelectedRegionsContainer.hide();
		$worldSelectedRegionsContainer.show();

		$inputUsSearchRegion.hide();
		$inputWorldSearchRegion.show();

		$usMap.hide();
		$worldMap.fadeIn("slow");
		$worldMap.show();
		worldMap.updateSize();
	};

	var events = (function () {
		getData().done(function () {
			isReady = true;

			// generation of years
			generateYears(defaults.indexes.US);
			generateYears(defaults.indexes.WORLD);
			// end

			// gets the locations on the map that were not used in the data
			usEmptyLocations = getEmptyLocations(defaults.indexes.US);
			worldEmptyLocations = getEmptyLocations(defaults.indexes.WORLD);
			// end

			// updates maps of us and world
			updateMap(defaults.indexes.US, defaults.updateTypes.BY_DIMENSION);
			updateMap(defaults.indexes.WORLD, defaults.updateTypes.BY_DIMENSION);
			// end

			// attaches events on the components in the sidebar
			for(var component in usDimensions) {
				var dimension = usDimensions[component];

				for(i = 0; i < dimension.length; i++) {
					$("#us_component_" + dimension[i]).click(function () {
						if($(this).hasClass("active")) {
							$(this).removeClass("active");
						}
						else {
							$(this).addClass("active");
						}
					});
				}
			}

			for(var component in worldDimensions) {
				var dimension = worldDimensions[component];

				for(i = 0; i < dimension.length; i++) {
					$("#world_component_" + dimension[i]).click(function () {
						if($(this).hasClass("active")) {
							$(this).removeClass("active");
						}
						else {
							$(this).addClass("active");
						}
					});
				}
			}
			// end
			
			// attaches all the tooltips for the sidebar
			for(var usDimension in usDimensions) {
				$("[name='tooltip_us_dimension_" + usDimension + "']").tooltipster({
					content: $("<span>" + defaults.tooltipMessages[usDimension][defaults.indexes.US.toUpperCase()] + "</span>")
				});			
			}

			for(var worldDimension in worldDimensions) {
				$("[name='tooltip_world_dimension_" + worldDimension + "']").tooltipster({
					content: $("<span>" + defaults.tooltipMessages[worldDimension][defaults.indexes.WORLD.toUpperCase()] + "</span>")
				});			
			}
			// end

			// attaches events on the search input
			$inputUsSearchRegion.autocomplete({
				source: usLocations.map(function (h) {
					return h.name;
				}),
				select: function (event, ui) {
					selectRegion(defaults.indexes.US, ui.item.label);
				}
			});

			$inputWorldSearchRegion.autocomplete({
				source: worldLocations.map(function (h) {
					return h.name;
				}),
				select: function (event, ui) {
					selectRegion(defaults.indexes.WORLD, ui.item.label);
				}
			});
			// end

			// for the url parameters
			if(urlParameters.MAP == defaults.map.categories.US) {
				showUs();

				var selectedRegions = [];
				if(urlParameters.LOCATIONS.length >= 1) {
					for(var i = 0; i < urlParameters.LOCATIONS.length; i++) {
						selectedRegions.push("US-" + urlParameters.LOCATIONS[i]);
					}
				}
				usMap.setSelectedRegions(selectedRegions);

				for(var i = 0; i < urlParameters.YEARS.length; i++) {
					$("#" + defaults.htmlIdPrefixes.US_YEAR + urlParameters.YEARS[i]).addClass("active");
				}

				// by dimensions
				if(urlParameters.DIMENSIONS.length >= 1) {
					$toggleComponents.removeClass("active");
					$toggleDimensions.addClass("active");
					$worldComponents.hide();
					$worldDimensions.hide();
					$usComponents.hide();
					$usDimensions.show();

					for(var dimension in usDimensions) {
						if(urlParameters.DIMENSIONS.indexOf(dimension) < 0) {
							$("#" + defaults.htmlIdPrefixes.US_DIMENSION + dimension).removeClass("active");
						}
					}

					updateMap(defaults.indexes.US, defaults.updateTypes.BY_DIMENSION);
				}

				// by components
				else {
					$toggleDimensions.removeClass("active");
					$toggleComponents.addClass("active");
					$worldDimensions.hide();
					$worldComponents.hide();
					$usDimensions.hide();
					$usComponents.show();

					for(var dimension in usDimensions) {
						if(usDimensions[dimension].indexOf(urlParameters.COMPONENTS[0]) >= 0) {
							$("#" + defaults.htmlIdPrefixes.US_COMPONENT_CONTAINER + dimension).addClass("opened");
							$("#" + defaults.htmlIdPrefixes.US_COMPONENT_CONTAINER + dimension).find("ul").slideDown();

							for(var i = 0; i < usDimensions[dimension].length; i++) {
								if(urlParameters.COMPONENTS.indexOf(usDimensions[dimension][i]) < 0) {
									$("#" + defaults.htmlIdPrefixes.US_COMPONENT + usDimensions[dimension][i]).removeClass("active");
								}
							}

							break;
						}
					}

					updateMap(defaults.indexes.US, defaults.updateTypes.BY_COMPONENT);
				}
			}
			else if(urlParameters.MAP == defaults.map.categories.WORLD) {
				showWorld();

				worldMap.setSelectedRegions(urlParameters.LOCATIONS);

				for(var i = 0; i < urlParameters.YEARS.length; i++) {
					$("#" + defaults.htmlIdPrefixes.WORLD_YEAR + urlParameters.YEARS[i]).addClass("active");
				}

				// by dimensions
				if(urlParameters.DIMENSIONS.length >= 1) {
					$toggleComponents.removeClass("active");
					$toggleDimensions.addClass("active");
					$usComponents.hide();
					$usDimensions.hide();
					$worldComponents.hide();
					$worldDimensions.show();

					for(var dimension in worldDimensions) {
						if(urlParameters.DIMENSIONS.indexOf(dimension) < 0) {
							$("#" + defaults.htmlIdPrefixes.WORLD_DIMENSION + dimension).removeClass("active");
						}
					}

					updateMap(defaults.indexes.WORLD, defaults.updateTypes.BY_DIMENSION);
				}

				// by components
				else {
					$toggleDimensions.removeClass("active");
					$toggleComponents.addClass("active");
					$usDimensions.hide();
					$usComponents.hide();
					$worldDimensions.hide();
					$worldComponents.show();

					for(var dimension in worldDimensions) {
						if(worldDimensions[dimension].indexOf(urlParameters.COMPONENTS[0]) >= 0) {
							$("#" + defaults.htmlIdPrefixes.WORLD_COMPONENT_CONTAINER + dimension).addClass("opened");
							$("#" + defaults.htmlIdPrefixes.WORLD_COMPONENT_CONTAINER + dimension).find("ul").slideDown();

							for(var i = 0; i < worldDimensions[dimension].length; i++) {
								if(urlParameters.COMPONENTS.indexOf(worldDimensions[dimension][i]) < 0) {
									$("#" + defaults.htmlIdPrefixes.WORLD_COMPONENT + worldDimensions[dimension][i]).removeClass("active");
								}
							}

							break;
						}
					}

					updateMap(defaults.indexes.WORLD, defaults.updateTypes.BY_COMPONENT);
				}
			}
			// end

			// for the loading indicator in the map
			$preLoader.fadeOut();
			// end
		});

		$btnUpdateMap.click(function () {
			if(isReady) {
				if($usToggle.hasClass("active")) {
					if($usDimensions.css("display") == "block") {
						updateMap(defaults.indexes.US, defaults.updateTypes.BY_DIMENSION);
					}
					else {
						updateMap(defaults.indexes.US, defaults.updateTypes.BY_COMPONENT);
					}
				}
				else {
					if($worldDimensions.css("display") == "block") {
						updateMap(defaults.indexes.WORLD, defaults.updateTypes.BY_DIMENSION);
					}
					else {
						updateMap(defaults.indexes.WORLD, defaults.updateTypes.BY_COMPONENT);
					}
				}
			}
		});

		$btnReset.click(function () {
			if(isReady) {
				var index = ($usToggle.hasClass("active")) ? defaults.indexes.US : defaults.indexes.WORLD,
					selectedRegions = (index == defaults.indexes.US) ? usMap.getSelectedRegions() : worldMap.getSelectedRegions();

				for(var i = 0; i < selectedRegions.length; i++) {
					$("#btn_remove_" + selectedRegions[i]).unbind();
					$("#" + selectedRegions[i]).remove();
				}

				if(index == defaults.indexes.US) {
					usMap.clearSelectedRegions();
				}
				else {
					worldMap.clearSelectedRegions();
				}
			}
		});

		$btnShowResults.click(function () {
			if(isReady) {
				if($usToggle.hasClass("active")) {
					if($usDimensions.css("display") == "block") {
						showResults(defaults.indexes.US, defaults.updateTypes.BY_DIMENSION);
					}
					else {
						showResults(defaults.indexes.US, defaults.updateTypes.BY_COMPONENT);
					}
				}
				else {
					if($worldDimensions.css("display") == "block") {
						showResults(defaults.indexes.WORLD, defaults.updateTypes.BY_DIMENSION);
					}
					else {
						showResults(defaults.indexes.WORLD, defaults.updateTypes.BY_COMPONENT);
					}
				}
			}
		});

		// us dimension toggle
		$(".dimension-toggle-us ul").find("li").click(function () {
			$(this).find(".dimension").each(function (index) {
				if($(this).hasClass("active")) {
					$(this).removeClass("active");
				}
				else {
					$(this).addClass("active");
				}
			});
		});

		// world dimension toggle
		$(".dimension-toggle-world ul").find("li").click(function () {
			$(this).find(".dimension").each(function (index) {
				if($(this).hasClass("active")) {
					$(this).removeClass("active");
				}
				else {
					$(this).addClass("active");
				}
			});
		});

		// us component toggle
		$(".components-toggle-us ul li").find(".dimension").click(function () {
			$(".components-toggle-us ul li").find("ul").each(function (index) {
				if($(this).parent("li").hasClass("opened")) {
					$(this).parent("li.opened").removeClass("opened").find("ul").slideUp();
				}
			});

			if($(this).parent("li").find("ul").css("display") == "block") {
				$(this).parent("li").removeClass("opened");
				$(this).parent("li").find("ul").slideUp();
			}
			else {
				$(this).parent("li").addClass("opened");
				$(this).parent("li").find("ul").slideDown();
			}
		});

		// world component toggle
		$(".components-toggle-world ul li").find(".dimension").click(function () {
			$(".components-toggle-world ul li").find("ul").each(function (index) {
				if($(this).parent("li").hasClass("opened")) {
					$(this).parent("li.opened").removeClass("opened").find("ul").slideUp();
				}
			});

			if($(this).parent("li").find("ul").css("display") == "block") {
				$(this).parent("li").removeClass("opened");
				$(this).parent("li").find("ul").slideUp();
			}
			else {
				$(this).parent("li").addClass("opened");
				$(this).parent("li").find("ul").slideDown();
			}
		});

		// toggle world to us
		$usToggle.click(function () {
			if(! $(this).hasClass("active")) {
				showUs();

				if($toggleComponents.hasClass("active")) {
					$worldComponents.hide();
					$usComponents.show();
				}
				else {
					$usDimensions.show();
					$worldDimensions.hide();
				}
			}
		});

		// toggle us to world
		$worldToggle.click(function () {
			if(! $(this).hasClass("active")) {
				showWorld();

				if($toggleComponents.hasClass("active")) {
					$usComponents.hide();
					$worldComponents.show();
				}
				else {
					$worldDimensions.show();
					$usDimensions.hide();
				}
			}
		});

		// toggle sidebar
		$toggleComponents.click(function () {
			if($(this).hasClass("active")) {
				$(this).addClass("active");
			}
			else {
				$(this).addClass("active");
				$toggleDimensions.removeClass("active");
				$usComponents.show();
				$usDimensions.hide();
				$worldDimensions.hide();

				if($usToggle.hasClass("active")) {
					$worldComponents.hide();
					$usComponents.show();
				}
				else {
					$usComponents.hide();
					$worldComponents.show();
				}
			}
		});

		$toggleDimensions.click(function () {
			if($(this).hasClass("active")) {
				$(this).addClass("active");
			}
			else {
				$(this).addClass("active");
				$worldComponents.hide();
				$usComponents.hide();
				$toggleComponents.removeClass("active");

				if($usToggle.hasClass("active")){
					 $usDimensions.show();
					 $worldDimensions.hide();
				}
				else {
					$worldDimensions.show();
					$usDimensions.hide();
				}
			}
		});

		$(window).load(function(){
			if(getCookie("instructions") != ""){
				$("body").chardinJs("stop");
			}
			else{
				$("body").chardinJs("start");
				$(".overlay").css({
					display: "block"
				});
				setCookie("instructions", "true", 356);
			}
		});
		
		$showCoach.on("click", function() {
			$("body").chardinJs("start");
		 	$(".overlay").css({
				display: "block"
			});
		});

		$("body").on("chardinJs:stop", function() {
			$(".overlay").css({
				display: "none"
			});
		});

		$btnCloseCoach.click(function(){
			$("body").chardinJs("stop");
		});
	})();
})();