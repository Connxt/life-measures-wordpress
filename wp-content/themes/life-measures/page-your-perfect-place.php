<?php
/*
	template name: QOL Your Perfect Place template
*/
 get_header(); ?>
<div class="interactive-app-container">
	<div class="interactive-app-left-body">
		<!-- maps -->
		<!-- <a id="show_coach" class="showcoach">How do I use this map?</a> -->
		<div id="dummy_map" style="position: absolute;"></div>
		<div id="us_container">
			<div class="us-map" id="us_map">
				<div class="map-legend">
					<div class="legend-title-header"><h3>High</h3></div>
					<div class="legend-container">
						<div class="legend-ten">
							<div class="color-ten circle">
								<div class="legend-rank"><h3>10</h3></div>
							</div>
						</div>
						<div class="legend-nine">
							<div class="color-nine circle">
								<div class="legend-rank"><h3>9</h3></div>
							</div>
						</div>
						<div class="legend-eight">
							<div class="color-eight circle">
								<div class="legend-rank"><h3>8</h3></div>
							</div>
						</div>
						<div class="legend-seven">
							<div class="color-seven circle">
								<div class="legend-rank"><h3>7</h3></div>
							</div>
						</div>
						<div class="legend-six">
							<div class="color-six circle">
								<div class="legend-rank"><h3>6</h3></div>
							</div>
						</div>
						<div class="legend-five">
							<div class="color-five circle">
								<div class="legend-rank"><h3>5</h3></div>
							</div>
						</div>
						<div class="legend-four">
							<div class="color-four circle">
								<div class="legend-rank"><h3>4</h3></div>
							</div>
						</div>
						<div class="legend-three">
							<div class="color-three circle">
								<div class="legend-rank"><h3>3</h3></div>
							</div>
						</div>
						<div class="legend-two">
							<div class="color-two circle">
								<div class="legend-rank"><h3>2</h3></div>
							</div>
						</div>
						<div class="legend-one">
							<div class="color-one circle">
								<div class="legend-rank"><h3>1</h3></div>
							</div>
						</div>
					</div>
					<div class="legend-title-footer"><h3>Low</h3></div>
					<div class="legend-no-data">
						<div class="color-no-data">
							<h3>Insufficient Data</h3>
						</div>
					</div>
				</div>
			</div>
			<div class="list-results-us" id="us_results">
				<div class="top-ranking-us">
					<h3>TOP</h3>
					<div class="top-ranking-content-us">
						<ul id="top_us"></ul>
					</div>
				</div>
				<div class="bottom-ranking-us">
					<h3>BOTTOM</h3>
					<div class="bottom-ranking-content-us">
						<ul id="bottom_us"></ul>
					</div>
				</div>
			</div>
		</div>
		<div id="world_container">
			<div class="world-map" id="world_map">
				<div class="map-legend">
					<div class="legend-title-header"><h3>High</h3></div>
					<div class="legend-container">
						<div class="legend-ten">
							<div class="color-ten circle">
								<div class="legend-rank"><h3>10</h3></div>
							</div>
						</div>
						<div class="legend-nine">
							<div class="color-nine circle">
								<div class="legend-rank"><h3>9</h3></div>
							</div>
						</div>
						<div class="legend-eight">
							<div class="color-eight circle">
								<div class="legend-rank"><h3>8</h3></div>
							</div>
						</div>
						<div class="legend-seven">
							<div class="color-seven circle">
								<div class="legend-rank"><h3>7</h3></div>
							</div>
						</div>
						<div class="legend-six">
							<div class="color-six circle">
								<div class="legend-rank"><h3>6</h3></div>
							</div>
						</div>
						<div class="legend-five">
							<div class="color-five circle">
								<div class="legend-rank"><h3>5</h3></div>
							</div>
						</div>
						<div class="legend-four">
							<div class="color-four circle">
								<div class="legend-rank"><h3>4</h3></div>
							</div>
						</div>
						<div class="legend-three">
							<div class="color-three circle">
								<div class="legend-rank"><h3>3</h3></div>
							</div>
						</div>
						<div class="legend-two">
							<div class="color-two circle">
								<div class="legend-rank"><h3>2</h3></div>
							</div>
						</div>
						<div class="legend-one">
							<div class="color-one circle">
								<div class="legend-rank"><h3>1</h3></div>
							</div>
						</div>
					</div>
					<div class="legend-title-footer"><h3>Low</h3></div>
					<div class="legend-no-data">
						<div class="color-no-data">
							<h3>Insufficient Data</h3>
						</div>
					</div>
				</div>
			</div>

			<div class="list-results-world" id="world_results">
				<div class="top-ranking-world">
					<h3>TOP</h3>
					<div class="top-ranking-content-world">
						<ul id="top_world"></ul>
					</div>
				</div>
				<div class="bottom-ranking-world">
					<h3>BOTTOM</h3>
					<div class="bottom-ranking-content-world">
						<ul id="bottom_world"></ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="interactive-app-sidebar-container">
		<section class="interactive-app-sidebar">
			<div class="sidebar-header">
				<p>Rate the components according to their importance to you</p>
			</div>
			<div class="sidebar-toggle">
				<div class="toggle-dark coach-idle">
		            <a class="btn-toggle left-side active" id="toggle_us">U.S INDEX</a>
		            <a class="btn-toggle right-side" id="toggle_world">WORLD INDEX</a>
		        </div>
			</div>
			<div class="sidebar-body">
				<!-- US COMPONENTS -->
				<div class="us-toggle" id="toggle_container_us">
					<ul class="scroll-us">
						<li>
							<div class="community-and-relationships-header dimensions">
								<img src="<?php echo get_template_directory_uri(); ?>/images/dimensions_symbol/Symbol-CommunityRelationships.png" id="image-container">
								<p>Community & Relationships</p>
							</div>
							<div class="community-life components clearfix">
								<div class="component-title-container">
									<h3>Community Life</h3>
								</div>
								<div class="range-slider-container">
									<div id="us_community_life" class="weight-slider"></div>
								</div>
							</div>
							<div class="family-life components clearfix">
								<div class="component-title-container">
									<h3>Family Life</h3>
								</div>
								<div class="range-slider-container">
									<div id="us_family_life" class="weight-slider"></div>
								</div>
							</div>
						</li>
						<li>
							<div class="freedom-and-opportunity-header dimensions">
								<img src="<?php echo get_template_directory_uri(); ?>/images/dimensions_symbol/Symbol_Opportunity.png" id="image-container">
								<p>Freedom & Opportunity</p>
							</div>
							<div class="personal-freedom components clearfix">
								<div class="component-title-container">
									<h3>Personal Freedom</h3>
								</div>
								<div class="range-slider-container">
									<div id="us_personal_freedom" class="weight-slider"></div>
								</div>
							</div>
							<div class="economic-freedom components clearfix">
								<div class="component-title-container">
									<h3>Economic Freedom</h3>
								</div>
								<div class="range-slider-container">
									<div id="us_economic_freedom" class="weight-slider"></div>
								</div>
							</div>
							<div class="work components clearfix">
								<div class="component-title-container">
									<h3>Work</h3>
								</div>
								<div class="range-slider-container">
									<div id="us_work" class="weight-slider"></div>
								</div>
							</div>
							<div class="local-opportunity components clearfix">
								<div class="component-title-container">
									<h3>Local Opportunity</h3>
								</div>
								<div class="range-slider-container">
									<div id="us_local_opportunity" class="weight-slider"></div>
								</div>
							</div>
							<div class="education components clearfix">
								<div class="component-title-container">
									<h3>Education</h3>
								</div>
								<div class="range-slider-container">
									<div id="us_education" class="weight-slider"></div>
								</div>
							</div>
						</li>
						<li>
							<div class="health-and-environment-header dimensions">
								<img src="<?php echo get_template_directory_uri(); ?>/images/dimensions_symbol/Symbol-HealthEnvironment.png" id="image-container">
								<p>Health & Environment</p>
							</div>
							<div class="physical-health components clearfix">
								<div class="component-title-container">
									<h3>Physical Health</h3>
								</div>
								<div class="range-slider-container">
									<div id="us_physical_health" class="weight-slider"></div>
								</div>
							</div>
							<div class="mental-health components clearfix">
								<div class="component-title-container">
									<h3>Mental Health</h3>
								</div>
								<div class="range-slider-container">
									<div id="us_mental_health" class="weight-slider"></div>
								</div>
							</div>
							<div class="environmental-health components clearfix">
								<div class="component-title-container">
									<h3>Environmental Health</h3>
								</div>
								<div class="range-slider-container">
									<div id="us_environmental_health" class="weight-slider"></div>
								</div>
							</div>
						</li>
						<li>
							<div class="living-standard-header dimensions">
								<img src="<?php echo get_template_directory_uri(); ?>/images/dimensions_symbol/Symbol-LivingStandard.png" id="image-container">
								<p>Living Standard</p>
							</div>
							<div class="income components clearfix">
								<div class="component-title-container">
									<h3>Income</h3>
								</div>
								<div class="range-slider-container">
									<div id="us_income" class="weight-slider"></div>
								</div>
							</div>
							<div class="poverty components clearfix">
								<div class="component-title-container">
									<h3>Poverty</h3>
								</div>
								<div class="range-slider-container">
									<div id="us_poverty" class="weight-slider"></div>
								</div>
							</div>
							<div class="living-standard-perceptions components clearfix">
								<div class="component-title-container">
									<h3>Living Standard Perceptions</h3>
								</div>
								<div class="range-slider-container">
									<div id="us_living_standard_perceptions" class="weight-slider"></div>
								</div>
							</div>
						</li>
						<li>
							<div class="peace-and-security-header dimensions">
								<img src="<?php echo get_template_directory_uri(); ?>/images/dimensions_symbol/Symbol-PeaceSecurity.png" id="image-container">
								<p>Peace & Security</p>
							</div>
							<div class="crime components clearfix">
								<div class="component-title-container">
									<h3>Crime</h3>
								</div>
								<div class="range-slider-container">
									<div id="us_crime" class="weight-slider"></div>
								</div>
							</div>
							<div class="peace-and-security-perceptions components clearfix">
								<div class="component-title-container">
									<h3>Peace and Security Perceptions</h3>
								</div>
								<div class="range-slider-container">
									<div id="us_peace_and_security_perceptions" class="weight-slider"></div>
								</div>
							</div>
						</li>
					</ul>
				</div>
				<!-- WORLD COMPONENTS -->
				<div class="world-toggle" id="toggle_container_world">
					<ul class="scroll-world simplebar vertical">
						<li>
							<div class="community-and-relationships-header dimensions">
								<img src="<?php echo get_template_directory_uri(); ?>/images/dimensions_symbol/Symbol-CommunityRelationships.png" id="image-container">
								<p>Community & Relationships</p>
							</div>
							<div class="community-life components">
								<div class="component-title-container">
									<h3>Community Life</h3>
								</div>
								<div class="range-slider-container">
									<div id="world_community_life" class="weight-slider"></div>
								</div>
							</div>
							<div class="family-life components">
								<div class="component-title-container">
									<h3>Family Life</h3>
								</div>
								<div class="range-slider-container">
									<div id="world_family_life" class="weight-slider"></div>
								</div>
							</div>
						</li>
						<li>
							<div class="freedom-and-opportunity-header dimensions">
								<img src="<?php echo get_template_directory_uri(); ?>/images/dimensions_symbol/Symbol_Opportunity.png" id="image-container">
								<p>Freedom & Opportunity</p>
							</div>
							<div class="political-freedom components">
								<div class="component-title-container">
									<h3>Political Freedom</h3>
								</div>
								<div class="range-slider-container">
									<div id="world_political_freedom" class="weight-slider"></div>
								</div>
							</div>
							<div class="civil-liberties components">
								<div class="component-title-container">
									<h3>Civil Liberties</h3>
								</div>
								<div class="range-slider-container">
									<div id="world_civil_liberties" class="weight-slider"></div>
								</div>
							</div>
							<div class="religious-freedom components">
								<div class="component-title-container">
									<h3>Religious Freedom</h3>
								</div>
								<div class="range-slider-container">
									<div id="world_religious_freedom" class="weight-slider"></div>
								</div>
							</div>
							<div class="economic-freedom components">
								<div class="component-title-container">
									<h3>Economic Freedom</h3>
								</div>
								<div class="range-slider-container">
									<div id="world_economic_freedom" class="weight-slider"></div>
								</div>
							</div>
							<div class="perceived-opportunities components">
								<div class="component-title-container">
									<h3>Perceived Opportunities</h3>
								</div>
								<div class="range-slider-container">
									<div id="world_perceived_opportunities" class="weight-slider"></div>
								</div>
							</div>
							<div class="entrepreneurship components">
								<div class="component-title-container">
									<h3>Entrepreneurship</h3>
								</div>
								<div class="range-slider-container">
									<div id="world_entrepreneurship" class="weight-slider"></div>
								</div>
							</div>
							<div class="employment components">
								<div class="component-title-container">
									<h3>Employment</h3>
								</div>
								<div class="range-slider-container">
									<div id="world_employment" class="weight-slider"></div>
								</div>
							</div>

						</li>
						<li>
							<div class="health-and-environment-header dimensions">
								<img src="<?php echo get_template_directory_uri(); ?>/images/dimensions_symbol/Symbol-HealthEnvironment.png" id="image-container">
								<p>Health & Environment</p>
							</div>
							<div class="physical-health components">
								<div class="component-title-container">
									<h3>Physical Health</h3>
								</div>
								<div class="range-slider-container">
									<div id="world_physical_health" class="weight-slider"></div>
								</div>
							</div>
							<div class="mental-health components">
								<div class="component-title-container">
									<h3>Mental Health</h3>
								</div>
								<div class="range-slider-container">
									<div id="world_mental_health" class="weight-slider"></div>
								</div>
							</div>
							<div class="environmental-health components">
								<div class="component-title-container">
									<h3>Environmental Health</h3>
								</div>
								<div class="range-slider-container">
									<div id="world_environmental_health" class="weight-slider"></div>
								</div>
							</div>
						</li>
						<li>
							<div class="living-standard-header dimensions">
								<img src="<?php echo get_template_directory_uri(); ?>/images/dimensions_symbol/Symbol-LivingStandard.png" id="image-container">
								<p>Living Standard</p>
							</div>
							<div class="income components">
								<div class="component-title-container">
									<h3>Income</h3>
								</div>
								<div class="range-slider-container">
									<div id="world_income" class="weight-slider"></div>
								</div>
							</div>
							<div class="poverty components">
								<div class="component-title-container">
									<h3>Poverty</h3>
								</div>
								<div class="range-slider-container">
									<div id="world_poverty" class="weight-slider"></div>
								</div>
							</div>
							<div class="resources components">
								<div class="component-title-container">
									<h3>Resources</h3>
								</div>
								<div class="range-slider-container">
									<div id="world_resources" class="weight-slider"></div>
								</div>
							</div>
						</li>
						<li>
							<div class="peace-and-security-header dimensions">
								<img src="<?php echo get_template_directory_uri(); ?>/images/dimensions_symbol/Symbol-PeaceSecurity.png" id="image-container">
								<p>Peace & Security</p>
							</div>
							<div class="violence-and-ethnic-warfare components">
								<div class="component-title-container">
									<h3>Violence & Ethnic Warfare</h3>
								</div>
								<div class="range-slider-container">
									<div id="world_violence_and_ethnic_warfare" class="weight-slider"></div>
								</div>
							</div>
							<div class="human-rights-violation components">
								<div class="component-title-container">
									<h3>Human Rights Violation</h3>
								</div>
								<div class="range-slider-container">
									<div id="world_human_rights_violations" class="weight-slider"></div>
								</div>
							</div>
							<div class="law-and-order components">
								<div class="component-title-container">
									<h3>Law & Order</h3>
								</div>
								<div class="range-slider-container">
									<div id="world_law_and_order" class="weight-slider"></div>
								</div>
							</div>
							<div class="trust-in-national-institutions components">
								<div class="component-title-container">
									<h3>Trust in National Institution</h3>
								</div>
								<div class="range-slider-container">
									<div id="world_trust_in_national_institutions" class="weight-slider"></div>
								</div>
							</div>
							<div class="corruption-in-business-and-goverment components">
								<div class="component-title-container">
									<h3>Corruption in Business and Goverment</h3>
								</div>
								<div class="range-slider-container">
									<div id="world_corruption_in_business_and_government" class="weight-slider"></div>
								</div>
							</div>
							<div class="bureaucracy-quality components">
								<div class="component-title-container">
									<h3>Bureaucracy Quality</h3>
								</div>
								<div class="range-slider-container">
									<div id="world_bureaucracy_quality" class="weight-slider"></div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="sidebar-footer" id="side_bar_footer_us">
				<a class="btn btn-rank blue coach-idle" id="btn_show_hide_map_us">List Results</a>
				<a class="btn-reset" id="reset_us">Reset</a>
			</div>
			<div class="sidebar-footer" id="side_bar_footer_world">
				<a class="btn btn-rank blue coach-idle" id="btn_show_hide_map_world">List Results</a>
				<a class="btn-reset" id="reset_world">Reset</a>
			</div>
		</section>
	</div>
</div>
<?php get_footer(); ?>
