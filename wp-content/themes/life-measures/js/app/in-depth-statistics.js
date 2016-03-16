// var Graph = (function() {
// 	var obj = {};
// 	var initialize = function () {
// 		obj = {
// 			$circularCommunityAndRelationship: jQuery("#community_and_relationship_circular"),
// 			$circularFreedom: jQuery("#freedom_circular"),
// 			$circularHealthAndEnvironment: jQuery("#health_and_environment_circular"),
// 			$circularOpportunity: jQuery("#opportunity_circular"),
// 			$circularLivingStandard: jQuery("#living_standard_circular"),
// 			$circularPeaceAndSecurity: jQuery("#peace_and_security_circular"),
// 			$doughnutOverAllWellBeing: jQuery("#doughnut_chart"),
// 			$selectCountry: jQuery("#populate_country"),
// 			$selectChart: jQuery("#select_chart"),
// 			$components: jQuery("#components"),
// 			$btnIndexModifier: jQuery(".index-modifier"),
// 			$btnUsIndex: jQuery("#btn_us_index"),
// 			$btnWorldIndex: jQuery("#btn_world_index"),
// 			usIndex: "us",
// 			worldIndex: "world",
// 			getLocations: function(index) {
// 				return jQuery.post(BASE_URL + "/controllers/graph-controller.php", {
// 					action: "getLocations",
// 					index: index
// 				});
// 			},
// 			getDimensionsData: function(index, locationAbbr) {
// 				return jQuery.post(BASE_URL + "/controllers/graph-controller.php", {
// 					action: "getDimensionsData",
// 					index: index,
// 					locationAbbr: locationAbbr
// 				});
// 			},
// 			getComponents: function(index, dimension) {
// 				return jQuery.post(BASE_URL + "/controllers/graph-controller.php", {
// 					action: "getComponents",
// 					index: index,
// 					dimension: dimension
// 				});
// 			},
// 			getComponentsData: function(index, locationAbbr, dimension) {
// 				return jQuery.post(BASE_URL + "/controllers/graph-controller.php", {
// 					action: "getComponentsData",
// 					index: index,
// 					locationAbbr: locationAbbr,
// 					dimension: dimension
// 				});
// 			},
// 			loadComponentsData: function (index, locationAbbr, dimension) {
// 				obj.getComponentsData(index, locationAbbr, dimension).always(function (data) {
// 					var componentsData = JSON.parse(data);

// 					obj.getComponents(index, dimension).always(function (data) {
// 						var components = JSON.parse(data);

// 						obj.$components.empty();
// 						for(var i = 0; i < components.length; i++) {
// 							obj.$components.append("<div id='" + components[i] + "_bar_chart' class='subcomponents-bar-chart'></div>");
// 							obj.$components.append("<div id='" + components[i] + "_line_chart' class='subcomponents-line-chart'></div>");

// 							var dataPoints = [];
// 							for(var j = 0; j < componentsData.length; j++) {
// 								dataPoints[dataPoints.length] = { label: componentsData[j]['year'], y: Number(componentsData[j]["components"][components[i]]) };
// 							}

// 							opportunityBarColor = "#3D4780";
// 							healthAndEnvironmentBarColor = "#CC4E00";
// 							freedomBarColor = "#008BCC";
// 							communityAndRelationshipsBarColor = "#B11E2B";
// 							livingStandardBarColor = "#006538";
// 							peaceAndSecurityBarColor = "#501050";

// 							CanvasJS.addColorSet("opportunity", ["#3D4780"]);
// 							CanvasJS.addColorSet("health_and_environment", ["#CC4E00"]);
// 							CanvasJS.addColorSet("freedom", ["#008BCC"]);
// 							CanvasJS.addColorSet("community_and_relationships", ["#B11E2B"]);
// 							CanvasJS.addColorSet("living_standard", ["#006538"]);
// 							CanvasJS.addColorSet("peace_and_security", ["#501050"]);

// 							jQuery("#" + components[i] + "_bar_chart").CanvasJSChart({
// 								colorSet: dimension,
// 								theme: "theme1",
// 								animationEnabled: true,
// 								backgroundColor: "#f0f0f0",
// 								data: [{
// 									type: "bar",
// 									dataPoints: dataPoints
// 								}]
// 							});

// 							jQuery("#" + components[i] + "_line_chart").CanvasJSChart({
// 								colorSet: dimension,
// 								theme: "theme1",
// 								backgroundColor: "#f0f0f0",
// 								animationEnabled: true,
// 								data: [{
// 									type: "splineArea",
// 									dataPoints: dataPoints
// 								}]
// 							});

// 							obj.$selectChart.empty();
// 							for(var k = 0; k < components.length; k++) {
// 								obj.$selectChart.append("<option value='" + components[k] + "'>" + components[k].replace(/(?:_| |\b)(\w)/gi, function(str, p1) { return " " + p1.toUpperCase() }) + "</option>");
// 							}
// 							obj.$selectChart.selectric();
// 							$("#select_chart option").each(function(i){
// 						        $("#" + $(this).val() + "_bar_chart").hide();
// 						        $("#" + $(this).val() + "_line_chart").hide();
// 						    });

// 						    $("#" + components[0] + "_bar_chart").show("slow");
// 					        $("#" + components[0] + "_line_chart").show("slow");
// 						}
// 					});
// 				});
// 			},
// 			loadDimensionsData: function (index, locationAbbr) {
// 				var folderName = (index == "us") ? "us" : "int";
// 				// $("#img_map").css({
// 				// 	"width": "55%",
// 				// 	"height": "280px",
// 				// 	"margin-top": "10px",
// 				// 	"fill": "#d0e6f4"
// 				// });
// 				// $("#img_map").attr("src", TEMPLATE_DIRECTORY_URL + "/images/svg/" + folderName + "/" + locationAbbr.toUpperCase() + ".svg");
				
// 				obj.getDimensionsData(index, locationAbbr).always(function (data) {
// 					var dimensionsData = JSON.parse(data);
// 					var opportunity = 0,
// 						healthAndEnvironment = 0,
// 						freedom = 0,
// 						communityAndRelationships = 0,
// 						livingStandard = 0,
// 						peaceAndSecurity = 0;

// 					for(var i = 0; i < dimensionsData.length; i++) {
// 						opportunity += Number(dimensionsData[i].dimensions.opportunity);
// 						healthAndEnvironment += Number(dimensionsData[i].dimensions.health_and_environment);
// 						freedom += Number(dimensionsData[i].dimensions.freedom);
// 						communityAndRelationships += Number(dimensionsData[i].dimensions.community_and_relationships);
// 						livingStandard += Number(dimensionsData[i].dimensions.living_standard);
// 						peaceAndSecurity += Number(dimensionsData[i].dimensions.peace_and_security);
// 					}

// 					opportunity = opportunity / dimensionsData.length;
// 					healthAndEnvironment = healthAndEnvironment / dimensionsData.length;
// 					freedom = freedom / dimensionsData.length;
// 					communityAndRelationships = communityAndRelationships / dimensionsData.length;
// 					livingStandard = livingStandard / dimensionsData.length;
// 					peaceAndSecurity = peaceAndSecurity / dimensionsData.length;

// 					opportunityBarColor = "#3D4780";
// 					healthAndEnvironmentBarColor = "#CC4E00";
// 					freedomBarColor = "#008BCC";
// 					communityAndRelationshipsBarColor = "#B11E2B";
// 					livingStandardBarColor = "#006538";
// 					peaceAndSecurityBarColor = "#501050";

// 					pieOptions = {
// 						namespace: "asPieProgress",
// 						min: 0,
// 						max: 100,
// 						step: 1,
// 						speed: 50, // refresh speed
// 						delay: 0,
// 						barsize: "15",
// 						easing: "ease",
// 						numberCallback: function (n) {
// 							var progress = (this.now / 10);
// 							return progress;
// 						}
// 					};

// 					obj.$circularCommunityAndRelationship.asPieProgress("reset");
// 					obj.$circularFreedom.asPieProgress("reset");
// 					obj.$circularHealthAndEnvironment.asPieProgress("reset");
// 					obj.$circularOpportunity.asPieProgress("reset");
// 					obj.$circularLivingStandard.asPieProgress("reset");
// 					obj.$circularPeaceAndSecurity.asPieProgress("reset");
// 					obj.$doughnutOverAllWellBeing.empty();

// 					pieOptions.barcolor = communityAndRelationshipsBarColor;
// 					obj.$circularCommunityAndRelationship.asPieProgress(pieOptions).asPieProgress("go", parseFloat(communityAndRelationships).toFixed(1) * 10);

// 					pieOptions.barcolor = freedomBarColor;
// 					obj.$circularFreedom.asPieProgress(pieOptions).asPieProgress("go", parseFloat(freedom).toFixed(1) * 10);

// 					pieOptions.barcolor = healthAndEnvironmentBarColor;
// 					obj.$circularHealthAndEnvironment.asPieProgress(pieOptions).asPieProgress("go", parseFloat(healthAndEnvironment).toFixed(1) * 10);

// 					pieOptions.barcolor = opportunityBarColor;
// 					obj.$circularOpportunity.asPieProgress(pieOptions).asPieProgress("go", parseFloat(opportunity).toFixed(1) * 10);

// 					pieOptions.barcolor = livingStandardBarColor;
// 					obj.$circularLivingStandard.asPieProgress(pieOptions).asPieProgress("go", parseFloat(livingStandard).toFixed(1) * 10);

// 					pieOptions.barcolor = peaceAndSecurityBarColor;
// 					obj.$circularPeaceAndSecurity.asPieProgress(pieOptions).asPieProgress("go", parseFloat(peaceAndSecurity).toFixed(1) * 10);

// 					obj.$doughnutOverAllWellBeing.drawDoughnutChart([
// 						{ title: "Community and Relationship", value: communityAndRelationships / 6, color: communityAndRelationshipsBarColor },
// 						{ title: "Freedom", value: freedom / 6, color: freedomBarColor },
// 						{ title: "Health and Environment", value: healthAndEnvironment / 6, color: healthAndEnvironmentBarColor },
// 						{ title: "Opportunity", value: opportunity / 6, color: opportunityBarColor },
// 						{ title: "Living Standard", value: livingStandard / 6, color: livingStandardBarColor },
// 						{ title: "Peace and Security", value: peaceAndSecurity / 6, color: peaceAndSecurityBarColor }
// 					]);
// 				});

// 				var optionSelected = obj.$selectCountry.find("option:selected");
// 				var data = JSON.parse(optionSelected.attr("data-value"));
// 				obj.loadComponentsData(data.index, data.abbr, "community_and_relationships");
// 			},
// 			changeIndex: function(index) {
// 				obj.getLocations(index).always(function (data) {
// 					data = data.replace(/ /g, "&nbsp;");
// 					var locations = JSON.parse(data);

// 					obj.$selectCountry.empty();
// 					for(var i = 0; i < locations.length; i++) {
// 						obj.$selectCountry.append("<option data-value=" + JSON.stringify(locations[i]) + ">" + locations[i].name + "</option>");
// 					}
// 					obj.$selectCountry.selectric();

// 					obj.loadDimensionsData(locations[0].index, locations[0].abbr);
// 				});
// 			}
// 		}
// 	};

// 	var bindEvents = function() {
// 		obj.changeIndex(obj.usIndex);
// 		obj.$btnUsIndex.attr("disabled","disabled");
		
// 		obj.$btnWorldIndex.click(function(){
// 			obj.$btnWorldIndex.attr("disabled","disabled");
// 			obj.$btnUsIndex.removeAttr("disabled");
// 		});
// 		obj.$btnUsIndex.click(function (){
// 			obj.$btnUsIndex.attr("disabled","disabled");
// 			obj.$btnWorldIndex.removeAttr("disabled");
// 		})
// 		obj.$btnIndexModifier.click(function() {
// 			if($(this).attr("id") == "btn_us_index")
// 				obj.changeIndex(obj.usIndex);
// 			else if($(this).attr("id") == "btn_world_index")
// 				obj.changeIndex(obj.worldIndex);
// 		});

// 		obj.$selectChart.on("change", function () {
// 			var optionSelected = $(this).find("option:selected");
// 			var chartToShow = optionSelected.attr("value");

// 			$("#select_chart option").each(function(i){
// 		        $("#" + $(this).val() + "_bar_chart").hide();
// 		        $("#" + $(this).val() + "_line_chart").hide();
// 		    });

// 		    $("#" + chartToShow + "_bar_chart").show("slow");
// 	        $("#" + chartToShow + "_line_chart").show("slow");
// 		});

// 		obj.$selectCountry.on("change", function () {
// 			var optionSelected = $(this).find("option:selected");
// 			var data = JSON.parse(optionSelected.attr("data-value"));

// 			obj.loadDimensionsData(data.index, data.abbr);
// 		});

// 		obj.$circularCommunityAndRelationship.click(function () {
// 			var optionSelected = obj.$selectCountry.find("option:selected");
// 			var data = JSON.parse(optionSelected.attr("data-value"));

// 			obj.loadComponentsData(data.index, data.abbr, "community_and_relationships");
// 		});

// 		obj.$circularFreedom.click(function () {
// 			var optionSelected = obj.$selectCountry.find("option:selected");
// 			var data = JSON.parse(optionSelected.attr("data-value"));

// 			obj.loadComponentsData(data.index, data.abbr, "freedom");
// 		});

// 		obj.$circularHealthAndEnvironment.click(function () {
// 			var optionSelected = obj.$selectCountry.find("option:selected");
// 			var data = JSON.parse(optionSelected.attr("data-value"));

// 			obj.loadComponentsData(data.index, data.abbr, "health_and_environment");
// 		});

// 		obj.$circularOpportunity.click(function () {
// 			var optionSelected = obj.$selectCountry.find("option:selected");
// 			var data = JSON.parse(optionSelected.attr("data-value"));

// 			obj.loadComponentsData(data.index, data.abbr, "opportunity");
// 		});

// 		obj.$circularLivingStandard.click(function () {
// 			var optionSelected = obj.$selectCountry.find("option:selected");
// 			var data = JSON.parse(optionSelected.attr("data-value"));

// 			obj.loadComponentsData(data.index, data.abbr, "living_standard");
// 		});

// 		obj.$circularPeaceAndSecurity.click(function () {
// 			var optionSelected = obj.$selectCountry.find("option:selected");
// 			var data = JSON.parse(optionSelected.attr("data-value"));

// 			obj.loadComponentsData(data.index, data.abbr, "peace_and_security");
// 		});
// 	};
// 	return {
// 		run: function () {
// 			initialize();
// 			bindEvents();
// 		}
// 	};
// })();

// Graph.run();
 $(".chosen-select").chosen({disable_search_threshold: 10});


var dataSource = [{
    day: "Monday",
    oranges: 3
}, {
    day: "Tuesday",
    oranges: 2
}, {
    day: "Wednesday",
    oranges: 3
}, {
    day: "Thursday",
    oranges: 4
}, {
    day: "Friday",
    oranges: 6
}, {
    day: "Saturday",
    oranges: 11
}, {
    day: "Sunday",
    oranges: 4
}];

 $("#components").dxChart({

    dataSource: dataSource, 

    series: {

        argumentField: "day",

        valueField: "oranges",

        name: "My oranges",

        type: "bar",

        color: '#ffa500'

    },
    legend: {
                visible: false
            },

});


var dataSource = [{
    total1: 9.5,
    total2: 168.8,
    total3: 127.2,
    older1: 2.4,
    older2: 8.8,
    older3: 40.1,
    perc1: 25.4,
    perc2: 5.3,
    perc3: 31.6,
    tag1: 'Sweden',
    tag2: 'Nigeria',
    tag3: 'Japan'
}, {
    total1: 82.8,
    total2: 91.7,
    total3: 90.8,
    older1: 21.9,
    older2: 4.6,
    older3: 8.0,
    perc1: 26.7,
    perc2: 5.4,
    perc3: 8.9,
    tag1: 'Germany',
    tag2: 'Ethiopia',
    tag3: 'Viet Nam'
}, {
    total1: 16.7,
    total2: 80.7,
    total3: 21.1,
    older1: 3.8,
    older2: 7.0,
    older3: 2.7,
    perc1: 22.8,
    perc2: 8.4,
    perc3: 12.9,
    tag1: 'Netherlands',
    tag2: 'Egypt',
    tag3: 'Sri Lanka'
}, {
    total1: 62.8,
    total2: 52.4,
    total3: 96.7,
    older1: 14.4,
    older2: 4.0,
    older3: 5.9,
    perc1: 23.0,
    perc2: 7.8,
    perc3: 6.1,
    tag1: 'United Kingdom',
    tag2: 'South Africa',
    tag3: 'Philippines'
}, {
    total1: 38.2,
    total2: 43.2,
    total3: 66.8,
    older1: 7.8,
    older2: 1.8,
    older3: 9.6,
    perc1: 20.4,
    perc2: 4.3,
    perc3: 13.7,
    tag1: 'Poland',
    tag2: 'Kenya',
    tag3: 'Thailand'
}, {
    total1: 45.5,
    total3: 154.7,
    total4: 34.8,
    older1: 9.5,
    older3: 10.3,
    older4: 7.2,
    perc1: 21.1,
    perc3: 6.8,
    perc4: 20.8,
    tag1: 'Ukraine',
    tag3: 'Bangladesh',
    tag4: 'Canada'
}, {
    total1: 143.2,
    total4: 120.8,
    older1: 26.5,
    older4: 11.0,
    perc1: 18.6,
    perc4: 9.5,
    tag1: 'Russian Federation',
    tag4: 'Mexico'
}];

$("#subcomponents").dxChart({
    dataSource: dataSource,
    commonSeriesSettings: {
        type: 'bubble'
    },
    title: 'Sub Components',
    tooltip: {
        enabled: true,
        location: "edge",
        customizeTooltip: function (arg) {
            return {
                text: arg.point.tag + '<br/>Total Population: ' + arg.argumentText + 'M <br/>Population with Age over 60: ' + arg.valueText + 'M (' + arg.size + '%)'
            };
        }
    },
    argumentAxis: {
        label: {
            customizeText: function () {
                return this.value + 'M';
            }
        },
        title: 'Total Population'
    },
    valueAxis: {
        label: {
            customizeText: function () {
                return this.value + 'M';
            }
        }
    },
    legend: {
        position: 'inside',
        horizontalAlignment: 'left',
        border: {
            visible: true
        }
    },
    palette: ["#00ced1", "#008000", "#ffd700", "#ff7f50"],
    onSeriesClick: function(e) {
        var series = e.target;
        series.isVisible() ? series.hide() : series.show(); 
    },
    series: [{
        name: 'Europe',
        argumentField: 'total1',
        valueField: 'older1',
        sizeField: 'perc1',
        tagField:'tag1'
    }, {
        name: 'Africa',
        argumentField: 'total2',
        valueField: 'older2',
        sizeField: 'perc2',
        tagField: 'tag2'
    }, {
        name: 'Asia',
        argumentField: 'total3',
        valueField: 'older3',
        sizeField: 'perc3',
        tagField: 'tag3'
    }, {
        name: 'North America',
        argumentField: 'total4',
        valueField: 'older4',
        sizeField: 'perc4',
        tagField: 'tag4'
    }]
});



 $('#community_and_relationship_circular, #freedom_and_opportunity_circular, #health_and_environment_circular,#living_standard_circular, #peace_and_security_circular').asPieProgress({
    namespace: "asPieProgress",
    min: 0,
    max: 100,
    step: 1,
    speed: 50, // refresh speed
    delay: 0,
    barsize: "17",
    easing: "ease",
    numberCallback: function (n) {
     var progress = (this.now / 10);
     return progress;
    }
});

$('#community_and_relationship_circular, #freedom_and_opportunity_circular, #health_and_environment_circular,#living_standard_circular, #peace_and_security_circular').asPieProgress('go','24%');


$("#over_all_value").drawDoughnutChart([
  { 
    title: "Nope, It's all just the web",
    value : 5,  
    color: "#da2834" 
  },
  { 
    title: "Yep. They are different things with different concerns",
    value:  0.7,   
    color: "#4e5aa2" 
  }
]);