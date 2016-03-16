<?php
/* template name: In-Depth Statistics template */
get_header(); ?>
<div class="in-depth-statistics-container">
    <div class="row">
        <div class="content clearfix">
            <div class="large-6 medium-6 small-12 margin-on-bottom columns-no-padding">
                <div class="introduction-text-container">
                    <div class="text-title">
                        <h2>QUALITY OF LIFE MEASURES</h2>
                    </div>
                    <div class="content-container with-line">
                        <div class="text-subhead">
                            <h3>SUBHEAD STYLE</h3>
                        </div>
                        <div class="text-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div class="buttons-container clearfix">
                            <button class="btn flat blue border index-modifier" id="btn_us_index">U.S MEASUREMENTS</button>
                            <button class="btn flat blue index-modifier" id="btn_world_index">WORLD MEASUREMENTS</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="large-6 medium-6 small-12 margin-on-bottom columns-no-padding">
                <div class="select-country-container clearfix">
                    <div class="select-country">
                        <h3 class="choose-location">Choose a location:</h3>
                        <select data-placeholder="Choose a Country..." class="chosen-select" tabindex="2">
                            <option value="United States">United States</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Aland Islands">Aland Islands</option>
                            <option value="United States">United States</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Aland Islands">Aland Islands</option>
                            <option value="United States">United States</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Aland Islands">Aland Islands</option>
                            <option value="United States">United States</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Aland Islands">Aland Islands</option>
                        </select>
                    </div>
                </div>
                <div class="country-map-container">
                    <div class="country-map">
                        <div class="trivia-score">
                            <h2>12%</h2>
                            <h4>DECLINE IN OPPORTUNITY IN 2012</h4>
                        </div>
                        <img src="<?php echo get_template_directory_uri(); ?>/images/svg_in_depth_map/int/PH.svg" class="svg" />
                    </div>
                </div>
            </div>
        </div>
        <div class="content clearfix">
            <div class="large-6 medium-6 small-12 margin-on-bottom columns-no-padding">
                <div class="charts-container">
                    <div class="text-title">
                        <h2>CHARTS</h2>
                    </div>
                    <div class="content-container with-line">
                        <!-- <div class="select-foundations">
                            <h3 class="choose-foundation">Choose a Foundation:</h3>
                        </div> -->
                        <div class="circular-progressbar">
                            <div class="large-6 medium-6 small-12 column"> 
                                <div class="pie-progress-container">
                                    <div class="pie_progress active" id="community_and_relationship_circular" role="progressbar">
                                        <div class="pie_progress__number">0</div>
                                    </div>
                                    <div class="pie-progress-title"><h4>COMMUNITY & RELATIONSHIP</h4></div>
                                </div>
                                <div class="pie-progress-container">
                                    <div class="pie_progress" id="freedom_and_opportunity_circular" role="progressbar">
                                        <div class="pie_progress__number">0</div>
                                    </div>
                                    <div class="pie-progress-title"><h4>FREEDOM & OPPORTUNITY</h4></div>
                                </div>
                                <div class="pie-progress-container">
                                    <div class="pie_progress" id="health_and_environment_circular" role="progressbar">
                                        <div class="pie_progress__number">0</div>
                                    </div>
                                    <div class="pie-progress-title"><h4>HEALTH & ENVIRONMENT</h4></div>
                                </div>
                                <div class="pie-progress-container">
                                    <div class="pie_progress" id="living_standard_circular" role="progressbar">
                                        <div class="pie_progress__number">0</div>
                                    </div>
                                    <div class="pie-progress-title"><h4>LIVING STANDARD</h4></div>
                                </div>
                                <div class="pie-progress-container">
                                    <div class="pie_progress" id="peace_and_security_circular" role="progressbar">
                                        <div class="pie_progress__number">0</div>
                                    </div>
                                    <div class="pie-progress-title"><h4>PEACE & SECURITY</h4></div>
                                </div>
                            </div>
                            <div class="large-6 medium-6 small-12 column">
                                <div class="doughnut-chart-container">
                                    <div id="over_all_value" class="doughnut-chart"></div>
                                    <div class="doughnut-title">Overall Well-Being</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="large-6 medium-6 small-12 margin-on-bottom columns-no-padding">
                <div class="select-components-container clearfix">
                    <div class="select-components">
                        <h3 class="choose-component">Choose a component:</h3>
                        <select data-placeholder="Choose a Country..." class="chosen-select" tabindex="2">
                            <option value="United States">United States</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Aland Islands">Aland Islands</option>
                        </select>
                    </div>
                </div>
                <div class="components-graph-container">
                    <div id="components" class="component-graph"></div>
                </div>
            </div>
        </div>
        <div class="content clearfix">
            <div class="subcomponents-graph-container">
                <div id="subcomponents" class="subcomponent-graph"></div>
            </div>
        </div>
    </div>
</div>
<?php get_footer(); ?>