<?php
/*
	template name: QOL Graph template
*/
 get_header();

 ?>
 <body id="interactive-survey-graph" class="page page-id-41 page-child parent-pageid-23 page-template-default win8 chrome chrome-0 interactive-survey-graph">
    <div class="interactive-survey-graph-container" id="interactive-graph-body-container">
     	<div id="content" class="row-large">
     		<section class="post standard">
                <div class="graph-container">
                	<div class="graph-container-left">
                		<section class="qol-index">
                			<div class="qol-index-title"><h2>QUALITY OF LIFE MEASURES</h2></div>
            			    <div class="qol-index-content">
                				<h3 class="subhead">SUBHEAD STYLE</h3>
                				<div class="content-paragraph">
                					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                				</div>
                				<button class="btn flat blue index-modifier" id="btn_us_index">U.S INDEX</button>
                				<button class="btn flat blue index-modifier" id="btn_world_index">WORLD INDEX</button>
            			    </div>
                		</section>
                		<section class="qol-charts">
                			<div class="qol-charts-title"><h2>CHARTS</h2></div>
            			    <div class="qol-charts-content">
                                <div class="qol-charts-container">
                                    <div class="qol-charts-dimensions">
                                        <ul class="qol-circular-graph-content">
                                            <li>
                                                <div class="pie_progress" id="community_and_relationship_circular"role="progressbar">
                                                    <div class="pie_progress__number">0%</div>
                                                </div>
                                                <div class="description-circular"><h3>COMMUNITY & RELATIONSHIP</h3></div>
                                            </li>
                                            <li>
                                                <div class="pie_progress" id="freedom_circular" role="progressbar">
                                                    <div class="pie_progress__number">0%</div>
                                                </div>
                                                <div class="description-circular"><h3>FREEDOM</h3></div>
                                            </li>
                                            <li>
                                                <div class="pie_progress" id="health_and_environment_circular" role="progressbar">
                                                    <div class="pie_progress__number">0%</div>
                                                </div>
                                                <div class="description-circular"><h3>HEALTH & ENVIRONMENT</h3></div>
                                            </li>
                                            <li>
                                                <div class="pie_progress" id="opportunity_circular" role="progressbar">
                                                    <div class="pie_progress__number">0%</div>
                                                </div>
                                                <div class="description-circular"><h3>OPPORTUNITY</h3></div>
                                            </li>
                                            <li>
                                                <div class="pie_progress" id="living_standard_circular" role="progressbar">
                                                    <div class="pie_progress__number">0%</div>
                                                </div>
                                                <div class="description-circular"><h3>LIVING STANDARD</h3></div>
                                            </li>
                                            <li>
                                                <div class="pie_progress" id="peace_and_security_circular" role="progressbar">
                                                    <div class="pie_progress__number">0%</div>
                                                </div>
                                                <div class="description-circular"><h3>PEACE & SECURITY</h3></div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="qol-charts-dimensions-equevalent">
                                        <div id="doughnut_chart" class="doughnut-chart"></div>
                                        <div class="description-circular"><h3>OVERALL WELL-BEING</h3></div>
                                    </div>
                			    </div>
                            </div>
                		</section>
                	</div>
                	<div class="graph-container-right">
                        <div class="random-trivia">
                            <div class="graph-right-content">
                                <div class="select-country-container">
                                    <div class="select-country">
                                        <h3 class="choose-location">Choose location:</h3>
                                        <select id="populate_country"></select>
                                    </div>
                                </div>
                            </div>
                            <div class="country-map">
                                <div class="trivia-score">
                                    <h2 class="trivia-percentage">12%</h2>
                                    <h2>DECLINE IN OPPORTUNITY IN 2012</h2>
                                </div>
                                <img id="img_map" src="<?php echo get_template_directory_uri(); ?>/images/svg/int/PH.svg" class="svg">
                            </div>
                        </div>
                        <div class="select-chart-container">
                            <div class="select-chart">
                                <h3 class="choose-component">Choose component:</h3>
                                <select id="select_chart"></select>
                            </div>
                        </div>
                        <div id="components" class="subcomponents-chart clearfix"></div>
                    </div>
                </div>
            </section>
    	</div>
    </div>
<?php get_footer(); ?>
