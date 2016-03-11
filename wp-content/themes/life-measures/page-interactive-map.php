<?php
/*
	template name: interactive-map-connext
*/
get_header(); ?>
	<div class="interactive-map-container clearfix">
		<div class="interactive-map-sidebar-container">
			<section class="interactive-map-sidebar">
				<div class="sidebar-header">
					<p>Select Foundations or the Components of each Foundation</p>
				</div>
				<div class="sidebar-toggle">
					<div class="toggle-dark coach-idle" data-intro="Here, you select foundations or components from the same foundation to compare." data-position="top">
						<a class="btn-toggle left-side active" id="toggle_dimensions">FOUNDATIONS</a>
						<a class="btn-toggle right-side" id="toggle_components">COMPONENTS</a>
					</div>
				</div>
				<div class="sidebar-body">
					<!-- US DIMENSIONS -->
					<div id="us_dimensions" class="dimension-toggle-us">
						<ul>
							<li>
								<div id="us_dimension_community_and_relationships" class="dimension community_and_relationships active">
									<div class="dimension-title-container community_and_relationships">
										<img src="<?php echo get_template_directory_uri(); ?>/images/dimensions_symbol/white/Symbol-CommunityRelationships.png" id="image-container">
										<p>Community & Relationships</p>
										<i class="entypo circled-info" name="tooltip_us_dimension_community_and_relationships"></i>
									</div>
									<div class="selectedbox">
										<span class="check"></span>
									</div>
								</div>
							</li>
							<li>
								<div id="us_dimension_freedom_and_opportunity" class="dimension freedom_and_opportunity active">
									<div class="dimension-title-container freedom_and_opportunity">
										<img src="<?php echo get_template_directory_uri(); ?>/images/dimensions_symbol/white/Symbol-Opportunity.png" id="image-container">
										<p>Freedom & Opportunity</p>
										<i class="entypo circled-info" name="tooltip_us_dimension_freedom_and_opportunity"></i>
									</div>
									<div class="selectedbox">
										<span class="check"></span>
									</div>
								</div>
							</li>
							<li>
								<div id="us_dimension_health_and_environment" class="dimension health_and_environment active">
									<div class="dimension-title-container health_and_environment">
										<img src="<?php echo get_template_directory_uri(); ?>/images/dimensions_symbol/white/Symbol-HealthEnvironment.png" id="image-container">
										<p>Health & Environment</p>
										<i class="entypo circled-info" name="tooltip_us_dimension_health_and_environment"></i>
									</div>
									<div class="selectedbox">
										<span class="check"></span>
									</div>
								</div>
							</li>
							<li>
								<div id="us_dimension_living_standard" class="dimension living_standard active">
									<div class="dimension-title-container living_standard">
										<img src="<?php echo get_template_directory_uri(); ?>/images/dimensions_symbol/white/Symbol-LivingStandard.png" id="image-container">
										<p>Living Standard</p>
										<i class="entypo circled-info" name="tooltip_us_dimension_living_standard"></i>
									</div>
									<div class="selectedbox">
										<span class="check"></span>
									</div>
								</div>
							</li>
							<li>
								<div id="us_dimension_peace_and_security" class="dimension peace_and_security active">
									<div class="dimension-title-container peace_and_security">
										<img src="<?php echo get_template_directory_uri(); ?>/images/dimensions_symbol/white/Symbol-PeaceSecurity.png" id="image-container">
										<p>Peace & Security</p>
										<i class="entypo circled-info" name="tooltip_us_dimension_peace_and_security"></i>
									</div>
									<div class="selectedbox">
										<span class="check"></span>
									</div>
								</div>
							</li>
						</ul>
					</div>
					<!-- WORLD DIMENSIONS -->
					<div id="world_dimensions" class="dimension-toggle-world" style="display: none;">
						<ul>
							<li>
								<div id="world_dimension_community_and_relationships" class="dimension community_and_relationships active">
									<div class="dimension-title-container community_and_relationships">
										<img src="<?php echo get_template_directory_uri(); ?>/images/dimensions_symbol/white/Symbol-CommunityRelationships.png" id="image-container">
										<p>Community & Relationships</p>
										<i class="entypo circled-info" name="tooltip_world_dimension_community_and_relationships"></i>
									</div>
									<div class="selectedbox">
										<span class="check"></span>
									</div>
								</div>
							</li>
							<li>
								<div id="world_dimension_freedom_and_opportunity" class="dimension freedom_and_opportunity active">
									<div class="dimension-title-container freedom_and_opportunity">
										<img src="<?php echo get_template_directory_uri(); ?>/images/dimensions_symbol/white/Symbol-Opportunity.png" id="image-container">
										<p>Freedom & Opportunity</p>
										<i class="entypo circled-info" name="tooltip_world_dimension_freedom_and_opportunity"></i>
									</div>
									<div class="selectedbox">
										<span class="check"></span>
									</div>
								</div>
							</li>
							<li>
								<div id="world_dimension_health_and_environment" class="dimension health_and_environment active">
									<div class="dimension-title-container health_and_environment">
										<img src="<?php echo get_template_directory_uri(); ?>/images/dimensions_symbol/white/Symbol-HealthEnvironment.png" id="image-container">
										<p>Health & Environment</p>
										<i class="entypo circled-info" name="tooltip_world_dimension_health_and_environment"></i>
									</div>
									<div class="selectedbox">
										<span class="check"></span>
									</div>
								</div>
							</li>
							<li>
								<div id="world_dimension_living_standard" class="dimension living_standard active">
									<div class="dimension-title-container living_standard">
										<img src="<?php echo get_template_directory_uri(); ?>/images/dimensions_symbol/white/Symbol-LivingStandard.png" id="image-container">
										<p>Living Standard</p>
										<i class="entypo circled-info" name="tooltip_world_dimension_living_standard"></i>
									</div>
									<div class="selectedbox">
										<span class="check"></span>
									</div>
								</div>
							</li>
							<li>
								<div id="world_dimension_peace_and_security" class="dimension peace_and_security active">
									<div class="dimension-title-container peace_and_security">
										<img src="<?php echo get_template_directory_uri(); ?>/images/dimensions_symbol/white/Symbol-PeaceSecurity.png" id="image-container">
										<p>Peace & Security</p>
										<i class="entypo circled-info" name="tooltip_world_dimension_peace_and_security"></i>
									</div>
									<div class="selectedbox">
										<span class="check"></span>
									</div>
								</div>
							</li>
						</ul>
					</div>
					<!-- US COMPONENTS -->
					<div id="us_components" class="components-toggle-us" style="display: none;">
						<ul>
							<li id="us_component_container_community_and_relationships" class="us_community_and_relationships">
								<div class="dimension community_and_relationships active">
									<div class="dimension-title-container community_and_relationships">
										<img src="<?php echo get_template_directory_uri(); ?>/images/dimensions_symbol/white/Symbol-CommunityRelationships.png" id="image-container">
										<p>Community & Relationships</p>
										<i class="entypo circled-info" name="tooltip_us_dimension_community_and_relationships"></i>
									</div>
									<div class="selectedbox">
										<span class="check"></span>
									</div>
								</div>
								<ul>
									<li>
										<div id="us_component_community_life" class="components-us us_community_life active">
											<div class="components-title-container">
												<p>Community Life</p>
											</div>
											<div class="selectedbox">
												<span class="check"></span>
											</div>
										</div>
									</li>
									<li>
										<div id="us_component_family_life" class="components-us us_family_life active">
											<div class="components-title-container">
												<p>Family Life</p>
											</div>
											<div class="selectedbox">
												<span class="check"></span>
											</div>
										</div>
									</li>
								</ul>
							</li>
							<li id="us_component_container_freedom_and_opportunity" class="us_opportunity">
								<div class="dimension freedom_and_opportunity active">
									<div class="dimension-title-container freedom_and_opportunity">
										<img src="<?php echo get_template_directory_uri(); ?>/images/dimensions_symbol/white/Symbol-Opportunity.png" id="image-container">
										<p>Freedom & Opportunity</p>
										<i class="entypo circled-info" name="tooltip_us_dimension_freedom_and_opportunity"></i>
									</div>
									<div class="selectedbox">
										<span class="check"></span>
									</div>
								</div>
								<ul id="us_freedom_and_opportunity_components">
									<li>
										<div id="us_component_personal_freedom" class="components-us us_personal_freedom active">
											<div class="components-title-container">
												<p>Personal Freedom</p>
											</div>
											<div class="selectedbox">
												<span class="check"></span>
											</div>
										</div>
									</li>
									<li>
										<div id="us_component_economic_freedom" class="components-us us_economic_freedom active">
											<div class="components-title-container">
												<p>Economic Freedom</p>
											</div>
											<div class="selectedbox">
												<span class="check"></span>
											</div>
										</div>
									</li>
									<li>
										<div id="us_component_work" class="components-us us_work active">
											<div class="components-title-container">
												<p>Work</p>
											</div>
											<div class="selectedbox">
												<span class="check"></span>
											</div>
										</div>
									</li>
									<li>
										<div id="us_component_local_opportunity" class="components-us us_local_opportunity active">
											<div class="components-title-container">
												<p>Local Opportunity</p>
											</div>
											<div class="selectedbox">
												<span class="check"></span>
											</div>
										</div>
									</li>
									<li>
										<div id="us_component_education" class="components-us us_education active">
											<div class="components-title-container">
												<p>Education</p>
											</div>
											<div class="selectedbox">
												<span class="check"></span>
											</div>
										</div>
									</li>
								</ul>
							</li>
							<li id="us_component_container_health_and_environment" class="us_health_and_environment">
								<div class="dimension health_and_environment active">
									<div class="dimension-title-container health_and_environment">
										<img src="<?php echo get_template_directory_uri(); ?>/images/dimensions_symbol/white/Symbol-HealthEnvironment.png" id="image-container">
										<p>Health & Environment</p>
										<i class="entypo circled-info" name="tooltip_us_dimension_health_and_environment"></i>
									</div>
									<div class="selectedbox">
										<span class="check"></span>
									</div>
								</div>
								<ul id="us_health_and_environment_components">
									<li>
										<div id="us_component_physical_health" class="components-us us_physical_health active">
											<div class="components-title-container">
												<p>Physical Health</p>
											</div>
											<div class="selectedbox">
												<span class="check"></span>
											</div>
										</div>
									</li>
									<li>
										<div id="us_component_mental_health" class="components-us us_mental_health active">
											<div class="components-title-container">
												<p>Mental Health</p>
											</div>
											<div class="selectedbox">
												<span class="check"></span>
											</div>
										</div>
									</li>
									<li>
										<div id="us_component_environmental_health" class="components-us us_environmental_health active">
											<div class="components-title-container">
												<p>Environmental Health</p>
											</div>
											<div class="selectedbox">
												<span class="check"></span>
											</div>
										</div>
									</li>
								</ul>
							</li>
							<li id="us_component_container_living_standard" class="us_living_standard">
								<div class="dimension living_standard active">
									<div class="dimension-title-container living_standard">
										<img src="<?php echo get_template_directory_uri(); ?>/images/dimensions_symbol/white/Symbol-LivingStandard.png" id="image-container">
										<p>Living Standard</p>
										<i class="entypo circled-info" name="tooltip_us_dimension_living_standard"></i>
									</div>
									<div class="selectedbox">
										<span class="check"></span>
									</div>
								</div>
								<ul>
									<li>
										<div id="us_component_income" class="components-us us_income active">
											<div class="components-title-container">
												<p>Income</p>
											</div>
											<div class="selectedbox">
												<span class="check"></span>
											</div>
										</div>
									</li>
									<li>
										<div id="us_component_poverty" class="components-us us_poverty active">
											<div class="components-title-container">
												<p>Poverty</p>
											</div>
											<div class="selectedbox">
												<span class="check"></span>
											</div>
										</div>
									</li>
									<li>
										<div id="us_component_living_standard_perceptions" class="components-us us_living_standard_perceptions active">
											<div class="components-title-container">
												<p>Living Standard Perceptions</p>
											</div>
											<div class="selectedbox">
												<span class="check"></span>
											</div>
										</div>
									</li>
								</ul>
							</li>
							<li id="us_component_container_peace_and_security" class="us_peace_and_security">
								<div class="dimension peace_and_security active">
									<div class="dimension-title-container peace_and_security">
										<img src="<?php echo get_template_directory_uri(); ?>/images/dimensions_symbol/white/Symbol-PeaceSecurity.png" id="image-container">
										<p>Peace & Security</p>
										<i class="entypo circled-info" name="tooltip_us_dimension_peace_and_security"></i>
									</div>
									<div class="selectedbox">
										<span class="check"></span>
									</div>
								</div>
								<ul>
									<li>
										<div id="us_component_crime" class="components-us us_crime active">
											<div class="components-title-container">
												<p>Crime</p>
											</div>
											<div class="selectedbox">
												<span class="check"></span>
											</div>
										</div>
									</li>
									<li>
										<div id="us_component_peace_and_security_perceptions" class="components-us us_peace_and_security_perceptions active">
											<div class="components-title-container">
												<p>Peace and Security Perceptions</p>
											</div>
											<div class="selectedbox">
												<span class="check"></span>
											</div>
										</div>
									</li>
								</ul>
							</li>
						</ul>
					</div>
					<!-- WORLD COMPONENTS -->
					<div id="world_components" class="components-toggle-world" style="display: none;">
						<ul>
							<li id="world_component_container_community_and_relationships" class="world_community_and_relationships">
								<div class="dimension community_and_relationships active" id="world_community_and_relationships">
									<div class="dimension-title-container community_and_relationships">
										<img src="<?php echo get_template_directory_uri(); ?>/images/dimensions_symbol/white/Symbol-CommunityRelationships.png" id="image-container">
										<p>Community & Relationships</p>
										<i class="entypo circled-info" name="tooltip_world_dimension_community_and_relationships"></i>
									</div>
									<div class="selectedbox">
										<span class="check"></span>
									</div>
								</div>
								<ul>
									<li>
										<div id="world_component_community_life" class="components-world world_community_life active">
											<div class="components-title-container">
												<p>Community Life</p>
											</div>
											<div class="selectedbox">
												<span class="check"></span>
											</div>
										</div>
									</li>
									<li>
										<div id="world_component_family_life" class="components-world world_family_life active">
											<div class="components-title-container">
												<p>Family Life</p>
											</div>
											<div class="selectedbox">
												<span class="check"></span>
											</div>
										</div>
									</li>
								</ul>
							</li>
							<li id="world_component_container_freedom_and_opportunity" class="world_opportunity">
								<div class="dimension freedom_and_opportunity active" id="world_opportunity">
									<div class="dimension-title-container freedom_and_opportunity">
										<img src="<?php echo get_template_directory_uri(); ?>/images/dimensions_symbol/white/Symbol-Opportunity.png" id="image-container">
										<p>Freedom & Opportunity</p>
										<i class="entypo circled-info" name="tooltip_world_dimension_freedom_and_opportunity"></i>
									</div>
									<div class="selectedbox">
										<span class="check"></span>
									</div>
								</div>
								<ul>
									<li>
										<div id="world_component_political_freedom" class="components-world world_political_freedom active">
											<div class="components-title-container">
												<p>Political Freedom</p>
											</div>
											<div class="selectedbox">
												<span class="check"></span>
											</div>
										</div>
									</li>
									<li>
										<div id="world_component_civil_liberties" class="components-world world_civil_liberties active">
											<div class="components-title-container">
												<p>Civil Liberties</p>
											</div>
											<div class="selectedbox">
												<span class="check"></span>
											</div>
										</div>
									</li>
									<li>
										<div id="world_component_religious_freedom" class="components-world world_religious_freedom active">
											<div class="components-title-container">
												<p>Religious Freedom</p>
											</div>
											<div class="selectedbox">
												<span class="check"></span>
											</div>
										</div>
									</li>
									<li>
										<div id="world_component_economic_freedom" class="components-world world_economic_freedom active">
											<div class="components-title-container">
												<p>Economic Freedom</p>
											</div>
											<div class="selectedbox">
												<span class="check"></span>
											</div>
										</div>
									</li>
									<li>
										<div id="world_component_perceived_opportunities" class="components-world world_perceived_opportunities active">
											<div class="components-title-container">
												<p>Perceived Opportunities</p>
											</div>
											<div class="selectedbox">
												<span class="check"></span>
											</div>
										</div>
									</li>
									<li>
										<div id="world_component_entrepreneurship" class="components-world world_entrepreneurship active">
											<div class="components-title-container">
												<p>Entrepreneurship</p>
											</div>
											<div class="selectedbox">
												<span class="check"></span>
											</div>
										</div>
									</li>
									<li>
										<div id="world_component_employment" class="components-world world_employment active">
											<div class="components-title-container">
												<p>Employment</p>
											</div>
											<div class="selectedbox">
												<span class="check"></span>
											</div>
										</div>
									</li>
								</ul>
							</li>
							<li id="world_component_container_health_and_environment" class="world_health_and_environment">
								<div class="dimension health_and_environment active" id="world_health_and_environment">
									<div class="dimension-title-container health_and_environment">
										<img src="<?php echo get_template_directory_uri(); ?>/images/dimensions_symbol/white/Symbol-HealthEnvironment.png" id="image-container">
										<p>Health & Environment</p>
										<i class="entypo circled-info" name="tooltip_world_dimension_health_and_environment"></i>
									</div>
									<div class="selectedbox">
										<span class="check"></span>
									</div>
								</div>
								<ul>
									<li>
										<div id="world_component_physical_health" class="components-world world_physical_health active">
											<div class="components-title-container">
												<p>Poverty</p>
											</div>
											<div class="selectedbox">
												<span class="check"></span>
											</div>
										</div>
									</li>
									<li>
										<div id="world_component_mental_health" class="components-world world_mental_health active">
											<div class="components-title-container">
												<p>Employment</p>
											</div>
											<div class="selectedbox">
												<span class="check"></span>
											</div>
										</div>
									</li>
									<li>
										<div id="world_component_environmental_health" class="components-world world_environmental_health active">
											<div class="components-title-container">
												<p>Community Basics</p>
											</div>
											<div class="selectedbox">
												<span class="check"></span>
											</div>
										</div>
									</li>
								</ul>
							</li>
							<li id="world_component_container_living_standard" class="living_standard">
								<div class="dimension living_standard active" id="world_living_standard">
									<div class="dimension-title-container living_standard">
										<img src="<?php echo get_template_directory_uri(); ?>/images/dimensions_symbol/white/Symbol-LivingStandard.png" id="image-container">
										<p>Living Standard</p>
										<i class="entypo circled-info" name="tooltip_world_dimension_living_standard"></i>
									</div>
									<div class="selectedbox">
										<span class="check"></span>
									</div>
								</div>
								<ul>
									<li>
										<div id="world_component_income" class="components-world world_income active">
											<div class="components-title-container">
												<p>Income</p>
											</div>
											<div class="selectedbox">
												<span class="check"></span>
											</div>
										</div>
									</li>
									<li>
										<div id="world_component_poverty" class="components-world world_poverty active">
											<div class="components-title-container">
												<p>Poverty</p>
											</div>
											<div class="selectedbox">
												<span class="check"></span>
											</div>
										</div>
									</li>
									<li>
										<div id="world_component_resources" class="components-world world_resources active">
											<div class="components-title-container">
												<p>Resources</p>
											</div>
											<div class="selectedbox">
												<span class="check"></span>
											</div>
										</div>
									</li>
								</ul>
							</li>
							<li id="world_component_container_peace_and_security" class="peace_and_security">
								<div class="dimension peace_and_security active" id="world_peace_and_security">
									<div class="dimension-title-container peace_and_security">
										<img src="<?php echo get_template_directory_uri(); ?>/images/dimensions_symbol/white/Symbol-PeaceSecurity.png" id="image-container">
										<p>Peace & Security</p>
										<i class="entypo circled-info" name="tooltip_world_dimension_peace_and_security"></i>
									</div>
									<div class="selectedbox">
										<span class="check"></span>
									</div>
								</div>
								<ul>
									<li>
										<div id="world_component_violence_and_ethnic_warfare" class="components-world world_violence_and_ethnic_warfare active">
											<div class="components-title-container">
												<p>Violence & Ethnic Warfare</p>
											</div>
											<div class="selectedbox">
												<span class="check"></span>
											</div>
										</div>
									</li>
									<li>
										<div id="world_component_human_rights_violations" class="components-world world_human_rights_violations active">
											<div class="components-title-container">
												<p>Human Rights Violations</p>
											</div>
											<div class="selectedbox">
												<span class="check"></span>
											</div>
										</div>
									</li>
									<li>
										<div id="world_component_law_and_order" class="components-world world_law_and_order active">
											<div class="components-title-container">
												<p>Law & Order</p>
											</div>
											<div class="selectedbox">
												<span class="check"></span>
											</div>
										</div>
									</li>
									<li>
										<div id="world_component_trust_in_national_institutions" class="components-world world_trust_in_national_institutions active">
											<div class="components-title-container">
												<p>Trust in National Institutions</p>
											</div>
											<div class="selectedbox">
												<span class="check"></span>
											</div>
										</div>
									</li>
									<li>
										<div id="world_component_corruption_in_business_and_government" class="components-world world_corruption_in_business_and_government active">
											<div class="components-title-container">
												<p>Corruptions in Business & Government</p>
											</div>
											<div class="selectedbox">
												<span class="check"></span>
											</div>
										</div>
									</li>
									<li>
										<div id="world_component_bureaucracy_quality" class="components-world world_bureaucracy_quality active">
											<div class="components-title-container">
												<p>Bureaucracy Quality</p>
											</div>
											<div class="selectedbox">
												<span class="check"></span>
											</div>
										</div>
									</li>
								</ul>
							</li>
						</ul>
					</div>
					<div class="sidebar-years-list" data-intro="By toggling years on and off, you can select all years you want to compare." data-position="top">
						<div class="years-list-header">
							<p>Compare across time</p>
						</div>
						<div class="years-list-body">
							<ul id="us_years" class="years-select coach-idle"></ul>
							<ul id="world_years" class="years-select coach-idle" style="display: none;"></ul>
						</div>
					</div>
					<div id="us_selected_regions_container" class="sidebar-selected-states-list">
						<div class="selected-states-list-header">
							<p>Selected States</p>
						</div>
						<div class="selected-states-list-body">
							<table id="us_selected_regions">
								<thead>
									<tr>
										<th style="width: 40%;"><h3>State</h3></th>
										<th style="width: 25%;"><h3>Ranking</h3></th>
										<th style="width: 25%;"><h3>Score</h3></th>
										<th style="width: 15%;"></th>
									</tr>
								</thead>
								<tbody>

								</tbody>
							</table>
							<!-- <a class="how info" href="#" data-tooltip="howDoWeCalculateData">How do we calculate this data?</a> -->
						</div>
					</div>
					<div id="world_selected_regions_container" class="sidebar-selected-states-list" style="display: none;">
						<div class="selected-states-list-header">
							<p>Selected Countries</p>
						</div>
						<div class="selected-states-list-body">
							<table id="world_selected_regions">
								<thead>
									<tr>
										<th style="width: 40%;"><h3>Countries</h3></th>
										<th style="width: 25%;"><h3>Ranking</h3></th>
										<th style="width: 25%;"><h3>Score</h3></th>
										<th style="width: 15%;"></th>
									</tr>
								</thead>
								<tbody>

								</tbody>
							</table>
							<!-- <a class="how info" href="#" data-tooltip="howDoWeCalculateData">How do we calculate this data?</a> -->
						</div>
					</div>
				</div>
				<div class="sidebar-footer" id="side_bar_footer_us">
					<div class="sidebar-footer-container" data-intro="Once you've selected all of the places and foundations you'd like to compare, click this button. The map will update to display the data you selected" data-position="right">
						<a id="btn_update_map" class="btn btn-rank blue coach-idle">Update Map</a>
						<a id="btn_reset" class="btn-reset">Reset</a>
					</div>
				</div>
			</section>
		</div>
		<div class="interactive-map-maps-container">
			<div class="interactive-map-header clearfix">
				<div class="map-search">
					<i class="fi-mgnifying-glass"></i>
					<input id="input_us_search_region" placeholder="Find State" type="search" data-intro="You can select up to twenty states or countries whose Quality of Life you want to compare" data-position="bottom">
					<input id="input_world_search_region" placeholder="Find Country" type="search" style="display: none;" data-intro="You can select up to twenty states or countries whose Quality of Life you want to compare" data-position="bottom">
				</div>
				<div class="map-buttons clearfix">
					<div class="addthis_toolbox hover">
						<a href="https://api.addthis.com/oexchange/0.8/forward/facebook/offer?url=http%3A%2F%2Fwww.life-measures.wdoitsolutions.com&amp;pubid=ra-54d974cc43473017&amp;ct=1&amp;title=Quality%20of%20Life%20Measures&amp;pco=tbxnj-1.0" target="_blank"><img src="https://cache.addthiscdn.com/icons/v2/thumbs/32x32/facebook.png" alt="Facebook" border="0">
							<span class="at16nc at300bs at15nc at15t_facebook at16t_facebook"><span class="at_a11y">Share on facebook</span></span>
						</a>
						<a href="https://api.addthis.com/oexchange/0.8/forward/twitter/offer?url=http%3A%2F%2Fwww.life-measures.wdoitsolutions.com&amp;pubid=ra-54d974cc43473017&amp;ct=1&amp;title=Quality%20of%20Life%20Measures&amp;pco=tbxnj-1.0" target="_blank"><img src="https://cache.addthiscdn.com/icons/v2/thumbs/32x32/twitter.png" alt="Twitter" border="0">
							<span class="at16nc at300bs at15nc at15t_twitter at16t_twitter"><span class="at_a11y">Share on twitter</span></span>
						</a>
						<a href="https://api.addthis.com/oexchange/0.8/forward/google_plusone_share/offer?url=http%3A%2F%2Fwww.life-measures.wdoitsolutions.com&amp;pubid=ra-54d974cc43473017&amp;ct=1&amp;title=Quality%20of%20Life%20Measures&amp;pco=tbxnj-1.0" target="_blank"><img src="https://cache.addthiscdn.com/icons/v2/thumbs/32x32/google_plusone_share.png" alt="Google+" border="0"><span class="at16nc at300bs at15nc at15t_google_plusone_share at16t_google_plusone_share">
							<span class="at_a11y">Share on google_plusone_share</span></span>
						</a>
						<div class="atclear"></div>
					</div>
					<div class="toggle-dark coach-idle" data-intro="Compare Quality of Life nationally or internationally by selecting the proper index." data-position="bottom">
						<a class="btn-toggle left-side active" id="us_toggle">U.S Measurement</a>
						<a class="btn-toggle right-side" id="world_toggle">World Measurement</a>
					</div>
					<a id="show_coach" class="showcoach">How do I use this map?</a>
				</div>
			</div>
			<div class="interactive-map-body">
				<div id="pre_loader">
					<img src="<?php echo get_template_directory_uri();?>/images/interactive-map-pre-loader.gif">
				</div>
				<div id="us_map"></div>
				<div id="world_map"></div>
				<div id="dummy_map" style="position: absolute;"></div>
				<div class="btn-show-result">
					<a id="btn_show_results" class="btn blue btn-show-results-interactive-map" data-intro="Generate a set of custom charts to further explore the data you’ve selected." data-position="top">Show Results</a>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="overlay centered-text">
	<hr><h1>Interactive Map</h1>
	<p>Using this interactive map, you can compare historical&nbsp;Quality of Life data from across the United&nbsp;States and across the world. You can&nbsp;also create custom charts to display the data you select.</p>
	<p><a id="btn_close_coach" class="btn yellow close-overlay">Let's Start</a></p>
</div>
<?php
	global $wp_query;

	if(isset($wp_query->query_vars['map_type'])) {
		$map_type = $wp_query->query_vars['map_type'];
		$map = $wp_query->query_vars['map'];
		$scores = $wp_query->query_vars['scores'];
		$years = urldecode($wp_query->query_vars['years']);
		$locations = urldecode($wp_query->query_vars['locations']);

		if (substr($wp_query->query_vars['search_type'], 0, 6) == "dimens") {
			$dimens = urldecode($wp_query->query_vars['search_type']);
		}
		else {
			$components= urldecode($wp_query->query_vars['search_type']);
		}

		$years = (isset($years)) ? json_encode(explode("|", substr($years, 6))) : json_encode(array());
		$locations = (isset($locations)) ? json_encode(explode("|", substr($locations, 10))) : json_encode(array());
		$dimens = (isset($dimens)) ? json_encode(explode("|", substr($dimens, 7))) : json_encode(array());
		$components = (isset($components)) ? json_encode(explode("|", substr($components, 11))) : json_encode(array());
	}
?>
<script type="text/javascript">
	var urlParameters = {
		DIMENSIONS: <?php echo ($dimens == '') ? json_encode(array()) : $dimens; ?>,
		COMPONENTS: <?php echo ($components == '') ? json_encode(array()) : $components; ?>,
		LOCATIONS: <?php echo ($locations == '') ? json_encode(array()) : $locations; ?>,
		YEARS: <?php echo ($years == '') ? json_encode(array()) : $years; ?>,
		MAP: "<?php echo $map_type; ?>"
	};
</script>
<?php get_footer(); ?>