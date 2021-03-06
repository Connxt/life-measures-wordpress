(function () {
	var model = {
		indexes: {
			WORLD: "world",
			US: "us"
		},
		actions: {
			GET_INITIAL_DATA: "getInitialData",
			GET_FOUNDATIONS: "getFoundations",
			GET_LOCATION_SCORES: "getLocationScores"
		},
		getInitialData: function () {
			var deferred = $.Deferred();

			$.post(BASE_URL + "/controllers/in-depth-results-api.php", {
				action: this.actions.GET_INITIAL_DATA
			}, function (data) {
				deferred.resolve(JSON.parse(data));
			});

			return deferred.promise();
		},
		getLocationScores: function (index, abbr) {
			var deferred = $.Deferred();

			$.post(BASE_URL + "/controllers/in-depth-results-api.php", {
				action: this.actions.GET_LOCATION_SCORES,
				index: index,
				abbr: abbr
			}, function (data) {
				deferred.resolve(JSON.parse(data));
			});

			return deferred.promise();
		},
	};

	var controller = {
		init: function () {
			var self = this;

			self.currentIndex = self.getIndexes().US;

			overlayView.init().show();
			model.getInitialData().done(function (initialData) {
				self.locations = initialData.locations;
				self.dataStructure = initialData.data_structure;

				foundationsView.init();

				indexSelectionView.init().render();
				locationSelectionView.init((self.currentIndex === self.getIndexes().WORLD) ? self.locations.world : self.locations.us).render();
			});
		},
		getIndexes: function () {
			return model.indexes;
		},
		getLocationScores: function (index, abbr) {
			return model.getLocationScores(index, abbr)
		}
	};

	var indexSelectionView = {
		init: function () {
			this.selectWorld = $("#btn_select_world");
			this.selectUs = $("#btn_select_us");

			if(controller.currentIndex === controller.getIndexes().WORLD) {
				this.selectWorld.attr("disabled", true);
			}
			else {
				this.selectUs.attr("disabled", true);
			}

			this.selectWorld.unbind("click");
			this.selectUs.unbind("click");

			return this;
		},
		render: function () {
			var self = this;

			this.selectWorld.click(function () {
				if(controller.currentIndex != controller.getIndexes().WORLD) {
					controller.currentIndex = controller.getIndexes().WORLD;

					locationSelectionView
						.init((controller.currentIndex === controller.getIndexes().WORLD) ? controller.locations.world : controller.locations.us)
						.render();

					self.selectWorld.attr("disabled", true);
					self.selectUs.removeAttr("disabled");
				}
			});

			this.selectUs.click(function () {
				if(controller.currentIndex != controller.getIndexes().US) {
					controller.currentIndex = controller.getIndexes().US;

					locationSelectionView
						.init((controller.currentIndex === controller.getIndexes().WORLD) ? controller.locations.world : controller.locations.us)
						.render();

					self.selectUs.attr("disabled", true);
					self.selectWorld.removeAttr("disabled");
				}
			});

			return this;
		}
	};

	var locationSelectionView = {
		init: function (locations) {
			this.locations = locations;
			this.view = $("#location_selection").chosen({});
			this.view.unbind("change");

			return this;
		},
		render: function () {
			var locationsLength = this.locations.length;

			this.view.empty();
			for(var i = 0; i < locationsLength; i++) {
				this.view.append("<option value=" + this.locations[i].abbr + ">" + this.locations[i].name + "</option>");
			}

			this.view.on("change", this.onChange);
			this.view.trigger("change");

			this.view.chosen({}).trigger("chosen:updated");

			return this;
		},
		onChange: function (event, params) {
			if(! overlayView.isBlocking()) {
				overlayView.show();
			}

			var locationAbbr = (params === undefined) ? event.target[0].value : params.selected;

			controller.getLocationScores(controller.currentIndex, locationAbbr).done(function (data) {
				controller.locationScores = data;

				locationMapSVGView.init().render();
				foundationsView.init().render();
				overlayView.hide();
			});
		}
	};

	var foundationsView = {
		init: function () {
			this.data = (controller.locationScores === undefined) ? {} : controller.locationScores.overall_foundation_scores;
			this.dataStructure = (controller.currentIndex === controller.getIndexes().WORLD) ? controller.dataStructure.world : controller.dataStructure.us;
			this.colors = {
				community_and_relationships: "#B11E2B",
				freedom_and_opportunity: "#3D4780",
				health_and_environment: "#CC4E00",
				living_standard: "#006538",
				peace_and_security: "#501050"
			};

			for(var foundation in this.dataStructure.foundations) {
				var id = foundation + "_chart";

				this[id] = $("#" + id).asPieProgress({
					namespace: "asPieProgress",
					min: 0,
					max: 100,
					step: 1,
					speed: 30,
					delay: 0,
					barsize: "17",
					barcolor: this.colors[foundation],
					easing: "ease",
					numberCallback: function (n) {
						return (this.now / 10);
					}
				}).unbind("click");
			}

			this.overallChart = $("#overall_chart").empty().drawDoughnutChart([]);

			return this;
		},
		render: function () {
			var overallData = [];

			for(var foundation in this.dataStructure.foundations) {
				var id = foundation + "_chart",
					foundationScore = parseFloat(this.data[foundation]).toFixed(1),
					numOfFoundations = Object.keys(this.dataStructure.foundations).length,
					foundationWeight = parseFloat(this.dataStructure.foundations[foundation].weight);

				this[id]
					.asPieProgress("go", foundationScore * 10)
					.on("click", this.onFoundationClick);

				if(this[id].hasClass("active")) {
					this[id].click();
				}
				overallData.push({
					title: foundation.display_name,
					value: foundationScore * foundationWeight,
					color: this.colors[foundation]
				});
			}

			this.overallChart.empty().drawDoughnutChart(overallData);

			return this;
		},
		onFoundationClick: function () {
			for(var foundation in foundationsView.dataStructure.foundations) {
				var id = foundation + "_chart";

				if($(this).attr("id") != (foundation + "_chart")) {
					$("#" + id).removeClass("active");
				}
				else {
					$(this).addClass("active");

					componentSelectionView.init(foundation).render();
				}
			}
		}
	};

	var componentSelectionView = {
		init: function (foundation) {
			this.foundation = foundation;
			this.dataStructure = (controller.currentIndex === controller.getIndexes().WORLD) ? controller.dataStructure.world : controller.dataStructure.us;
			this.view = $("#component_selection").chosen({});
			this.view.unbind("change");

			this.components = [];
			for(var component in this.dataStructure.foundations[foundation].components) {
				this.components.push({
					value: component,
					displayName: this.dataStructure.foundations[foundation].components[component].display_name
				});
			}

			return this;
		},
		render: function () {
			var componentsLength = this.components.length;

			this.view.empty();
			for(var i = 0; i < componentsLength; i++) {
				this.view.append("<option value=" + this.components[i].value + ">" + this.components[i].displayName + "</option>");
			}

			this.view.on("change", this.onChange.bind(this));
			this.view.trigger("change");

			this.view.chosen({}).trigger("chosen:updated");

			return this;
		},
		onChange: function (event, params) {
			var component = (params === undefined) ? event.target[0].value : params.selected;
			componentsView.init(this.foundation, component).render();
			subcomponentsView.init(this.foundation, component).render();
		}
	}

	var componentsView = {
		init: function (foundation, component) {
			this.foundation = foundation;
			this.component = component;
			this.dataStructure = (controller.currentIndex === controller.getIndexes().WORLD) ? controller.dataStructure.world : controller.dataStructure.us;
			this.colors = {
				community_and_relationships: "#B11E2B",
				freedom_and_opportunity: "#3D4780",
				health_and_environment: "#CC4E00",
				living_standard: "#006538",
				peace_and_security: "#501050"
			};
			this.view = $("#components_chart");

			var dataSourceLength = controller.locationScores.components.length;
			this.dataSource = [];

			for(var i = 0; i < dataSourceLength; i++) {
				this.dataSource.push({
					year: controller.locationScores.components[i].year,
					value: Number(parseFloat(controller.locationScores.components[i][component]).toFixed(2)),
				});
			}

			return this;
		},
		render: function () {
			this.view.dxChart({
				dataSource: this.dataSource,
				series: {
					argumentField: "year",
					valueField: "value",
					type: "bar",
					color: this.colors[this.foundation]
				},
				legend: { visible: false },
				valueAxis: {
					valueMarginsEnabled: false,
					min: 0,
					max: 10
				},
				scrollBar: { visible: false },
				scrollingMode: "all",
				zoomingMode: "all"
			});

			return this;
		}
	};

	var subcomponentsView = {
		init: function (foundation, component) {
			this.foundation = foundation;
			this.component = component;
			this.dataStructure = (controller.currentIndex === controller.getIndexes().WORLD) ? controller.dataStructure.world : controller.dataStructure.us;
			this.view = $("#subcomponents_chart");

			this.subcomponents = this.dataStructure.foundations[this.foundation].components[this.component].subcomponents;
			var subcomponentsLength = Object.keys(this.subcomponents).length;

			var dataSourceLength = controller.locationScores.subcomponents.length;
			this.dataSource = [];
			this.series = [];

			for(var i = 0; i < dataSourceLength; i++) {
				var data = {};
				for(var key in this.subcomponents) {
					data["year"] = controller.locationScores.subcomponents[i].year;
					data[key] = Number(parseFloat(controller.locationScores.subcomponents[i][key]).toFixed(2));
				}

				this.dataSource.push(data);
			}

			for(var key in this.subcomponents) {
				this.series.push({
					valueField: key,
					name: this.subcomponents[key].display_name
				});
			}

			return this;
		},
		render: function () {
			var chartOptions = {
				dataSource: this.dataSource,
				series: this.series,
				commonSeriesSettings: {
					argumentField: "year",
					type: "line"
				},
				margin: {
					bottom: 20
				},
				argumentAxis: {
					valueMarginsEnabled: false,
					discreteAxisDivisionMode: "crossLabels",
					grid: {
						visible: true
					}
				},
				valueAxis: {
					min: 0,
					max: 10,
					tickInterval: 1
				},
				legend: {
					verticalAlignment: "bottom",
					horizontalAlignment: "center",
					itemTextPosition: "bottom"
				},
				title: {
					text: this.dataStructure.foundations[this.foundation].components[this.component].display_name,
					subtitle: {
						text: (this.series.length >= 1) ? "(Subcomponents)" : "(No Subcomponents)"
					}
				},
				tooltip: {
					enabled: true,
					customizeTooltip: function (arg) {
						return {
							text: arg.valueText
						};
					}
				},
				scrollBar: { visible: false },
				scrollingMode: "all",
				zoomingMode: "all"
			};

			this.view.dxChart(chartOptions);

			return this;
		}
	};

	var locationMapSVGView = {
		init: function (abbr) {
			var index = (controller.currentIndex === controller.getIndexes().WORLD) ? "int" : "us";

			this.path = TEMPLATE_DIRECTORY_URL + "/images/svg_in_depth_map/" + index + "/" + controller.locationScores.abbr + ".svg";
			this.view = $("#location_map_svg");

			return this;
		},
		render: function () {
			this.view.load(this.path);

			return this;
		}
	};

	var overlayView = {
		init: function () {
			this.view = $("body");
			this.viewOptions = {
				message: "<h1><img src='" + TEMPLATE_DIRECTORY_URL + "/images/pre-loader.gif' /></h1>",
				overlayCSS: { backgroundColor: "#fff" }
			};

			return this;
		},
		show: function () {
			this.view.block(this.viewOptions);
		},
		hide: function () {
			this.view.unblock();
		},
		isBlocking: function () {
			if($(".blockUI").length) {
				return true;
			}
			else {
				return false;
			}
		}
	};

	controller.init();
})();