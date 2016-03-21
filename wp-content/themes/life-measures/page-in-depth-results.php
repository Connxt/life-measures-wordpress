<?php
/* template name: In-Depth Results template */
get_header(); ?>
<div class="in-depth-results-container">
	<div class="row">
		<div class="content clearfix">
			<div class="large-6 medium-12 small-12 margin-on-bottom columns-no-padding">
				<div class="introduction-text-container">
					<div class="text-title">
						<h2>QUALITY OF LIFE MEASURES</h2>
					</div>
					<div class="content-container with-line">
						<div class="text-subhead">
							<h3>SUBHEAD STYLE</h3>
						</div>
						<div class="text-content">
							<p>This statistics lets you  take a closer look at the scores of the different QOL foundations, their underlying components, and compare how they affect overall quality of life across U.S. states and the world's nations.</p>
						</div>
						<div class="buttons-container clearfix">
							<button class="btn flat blue border index-modifier" id="btn_select_us">U.S MEASUREMENTS</button>
							<button class="btn flat blue index-modifier" id="btn_select_world">WORLD MEASUREMENTS</button>
						</div>
					</div>
				</div>
			</div>
			<div class="large-6 medium-12 small-12 margin-on-bottom columns-no-padding">
				<div class="select-country-container clearfix">
					<div class="select-country">
						<h3 class="choose-location">Choose a location:</h3>
						<select id="location_selection" data-placeholder="Choose a location..." class="chosen-select" tabindex="2"></select>
					</div>
				</div>
				<div class="location-map-container">
					<div class="location-map">
						<div class="trivia-score">
							<h2>12%</h2>
							<h4>DECLINE IN OPPORTUNITY IN 2012</h4>
						</div>
						<!-- <img src="<?php //echo get_template_directory_uri(); ?>/images/svg_in_depth_map/int/PH.svg" class="svg" /> -->
						<div id="location_map_svg" class="svg replaced-svg image-block"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="content clearfix">
			<div class="large-6 medium-12 small-12 margin-on-bottom columns-no-padding">
				<div class="charts-container">
					<div class="text-title">
						<h2>FOUNDATIONS</h2>
					</div>
					<div class="content-container with-line">
						<!-- <div class="select-foundations">
							<h3 class="choose-foundation">Choose a Foundation:</h3>
						</div> -->
						<div class="circular-progressbar">
							<div class="large-6 medium-6 small-12 column"> 
								<div class="pie-progress-container">
									<div class="pie_progress active" id="community_and_relationships_chart" role="progressbar">
										<div class="pie_progress__number">0</div>
									</div>
									<div class="pie-progress-title"><h4>COMMUNITY & RELATIONSHIPS</h4></div>
								</div>
								<div class="pie-progress-container">
									<div class="pie_progress" id="freedom_and_opportunity_chart" role="progressbar">
										<div class="pie_progress__number">0</div>
									</div>
									<div class="pie-progress-title"><h4>FREEDOM & OPPORTUNITY</h4></div>
								</div>
								<div class="pie-progress-container">
									<div class="pie_progress" id="health_and_environment_chart" role="progressbar">
										<div class="pie_progress__number">0</div>
									</div>
									<div class="pie-progress-title"><h4>HEALTH & ENVIRONMENT</h4></div>
								</div>
								<div class="pie-progress-container">
									<div class="pie_progress" id="living_standard_chart" role="progressbar">
										<div class="pie_progress__number">0</div>
									</div>
									<div class="pie-progress-title"><h4>LIVING STANDARD</h4></div>
								</div>
								<div class="pie-progress-container">
									<div class="pie_progress" id="peace_and_security_chart" role="progressbar">
										<div class="pie_progress__number">0</div>
									</div>
									<div class="pie-progress-title"><h4>PEACE & SECURITY</h4></div>
								</div>
							</div>
							<div class="large-6 medium-6 small-12 column">
								<div class="doughnut-chart-container">
									<div id="overall_chart" class="doughnut-chart"></div>
									<div class="doughnut-title">Overall Well-Being</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="large-6 medium-12 small-12 margin-on-bottom columns-no-padding">
				<div class="select-components-container clearfix">
					<div class="select-components">
						<h3 class="choose-component">Choose a component:</h3>
						<select id="component_selection" data-placeholder="Choose a component..." class="chosen-select" tabindex="2"></select>
					</div>
				</div>
				<div class="components-graph-container">
					<div id="components_chart" class="component-graph"></div>
				</div>
			</div>
		</div>
		<div class="content clearfix">
			<div class="subcomponents-graph-container">
				<div id="subcomponents_chart" class="subcomponent-graph"></div>
			</div>
		</div>
	</div>
</div>
<?php get_footer(); ?>