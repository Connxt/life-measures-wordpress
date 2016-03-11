<!doctype.com html>
<html>
	<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="<?php bloginfo('description'); ?>">
	<title><?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' :'; } ?> <?php bloginfo('name'); ?></title>
    <link href="<?php echo get_template_directory_uri(); ?>/images/favicon/cki-favicons-64x64.png" rel="shortcut icon">
   	<?php wp_head(); ?>
   	<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/jquery/jquery.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/js/jquery_ui/jquery-ui-1.11.4.min.js"></script>
	</head>
	<body id="<?php global $post; echo $post->post_name; ?>" <?php body_class( $class ); ?> >
		<div id="nav__mobile" style="display:none;">
    		<div class="menu-main-container">
		        <ul id="menu-main" class="menu">
		            <li id="menu-item-88" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-13 current_page_item menu-item-has-children menu-item-88 has-dropdown">
		                <a href="<?php echo home_url(); ?>/about">About</a>
		                <ul class="dropdown">
		                    <li id="menu-item-150" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-150">
		                        <a href="<?php echo home_url(); ?>/the-concepts">The Concepts</a></li>
		                    <li id="menu-item-153" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-153">
		                       <a href="<?php echo home_url(); ?>/faqs">Faqs</a>
		                    </li>
		                    <li id="menu-item-153" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-153">
		                       <a href="<?php echo home_url(); ?>/contributors">Contributers</a>
		                    </li>
		                </ul>
		            </li>
		            <li id="menu-item-100" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-100 has-dropdown">
		                <a href="<?php echo home_url(); ?>/constructing-the-measures">Quality of life Measures</a>
		                <ul class="dropdown">
		                    <li id="menu-item-149" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-149">
		                        <a href="<?php echo home_url(); ?>/constructing-the-measures">Constructing The Measures</a>
		                    </li>
		                    <li id="menu-item-149" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-149">
		                        <a href="<?php echo home_url(); ?>/interactive-map">Interactive Map</a>
		                    </li>
		                    <li id="menu-item-149" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-149">
		                        <a href="<?php echo home_url(); ?>/in-depth-statistics">In-Depth Statistics</a>
		                    </li>
		                    <li id="menu-item-149" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-149">
		                        <a href="<?php echo home_url(); ?>/your-perfect-place">Your Perfect Place</a>
		                    </li>
		                    <li id="menu-item-149" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-149">
		                        <a href="<?php echo home_url(); ?>/your-quality-of-life-measures">Measure Your Own Wellbeing</a>
		                    </li>
		                </ul>
		            </li>
		            <li id="menu-item-90" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-90">
		            	<a href="<?php echo home_url(); ?>/interactive-map">Interactive Map</a>
		            </li>
		            <li id="menu-item-100" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-100 has-dropdown">
		                <a href="<?php echo home_url(); ?>/learn-about-the-research">Research</a>
		                <ul class="dropdown">
		                    <li id="menu-item-149" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-149">
		                        <a href="<?php echo home_url(); ?>/learn-about-the-research">Learn About The Research</a>
		                    </li>
		                    <li id="menu-item-90" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-90">
		            			<a href="<?php echo home_url(); ?>/get-the-data">Get the Data</a>
		            		</li>
		                </ul>
		            </li>
		            <li id="menu-item-91" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-91">
		            	<a href="<?php echo home_url(); ?>/updates">Updates</a>
		            </li>
		            <li id="menu-item-513" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-513">
		            	<a href="<?php echo home_url(); ?>pdf/Well-Being_Report_Book.docx" target="_blank">The Report</a>
		            </li>
		        </ul>
		    </div>
		</div>
		<!-- container -->
		<div id="container">
			<header class="nav clearfix">
			    <div class="row">
			        <div class="nav__logo large-4 medium-4 left">
			            <a class="logo" href="<?php echo home_url();?>">
			                <img src="<?php echo get_template_directory_uri();?>/images/logo-qolm.png" id="header_logo">
			            </a>
			        </div>
			        <nav class="nav__menu right clearfix">
			            <div class="menu-main-container">
			                <ul id="menu-main-1" class="menu">
			                    <li id="about_id" class="menu-item menu-item-type-post_type menu-item-object-page page_item page-item-13 current_page_item menu-item-has-children menu-item-88 has-dropdown">
			                        <a href="<?php echo home_url(); ?>/about">About</a>
			                        <ul class="dropdown">
			                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-150">
			                                <a href="<?php echo home_url(); ?>/the-concepts">The Concepts</a>
			                            </li>
			                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-153">
			                                <a href="<?php echo home_url(); ?>/faqs">Faqs</a>
			                            </li>
			                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-153">
			                                <a href="<?php echo home_url(); ?>/contributors">Contributors</a>
			                            </li>
			                        </ul>
			                    </li>
			                    <li id="quality_of_life_measures_id" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-100 has-dropdown">
			                    	<a href="<?php echo home_url(); ?>/constructing-the-measures">Quality of life Measures</a>
			                        <ul class="dropdown">
			                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-149">
			                                <a href="<?php echo home_url(); ?>/constructing-the-measures">Constructing The Measures</a>
			                            </li>
			                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-149">
			                                <a href="<?php echo home_url(); ?>/interactive-map">Interactive Map</a>
			                            </li>
			                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-149">
			                                <a href="<?php echo home_url(); ?>/in-depth-statistics">In-Depth Statistics</a>
			                            </li>
			                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-149">
			                                <a href="<?php echo home_url(); ?>/your-perfect-place">Your Perfect Place</a>
			                            </li>
			                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-149">
			                                <a href="<?php echo home_url(); ?>/your-quality-of-life-measures">Measure Your Own Wellbeing</a>
			                            </li>
			                        </ul>
			                    </li>
			                    <li id="interactive_map_id" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-90">
			                        <a href="<?php echo home_url(); ?>/interactive-map">Interactive Map</a>
			                    </li>
			                    <li id="research_id" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-100 has-dropdown">
			                    	<a href="<?php echo home_url(); ?>/learn-about-the-research">Research</a>
			                        <ul class="dropdown">
			                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-149">
			                                <a href="<?php echo home_url(); ?>/learn-about-the-research">Learn About The Research</a>
			                            </li>
			                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-149">
			                                <a href="<?php echo home_url(); ?>/get-the-data">Get The Data</a>
			                            </li>
			                        </ul>
			                    </li>
			                    <li id="updates_id" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-91">
			                        <a href="<?php echo home_url(); ?>/updates">Updates</a>
			                    </li>
			                    <li id="report_id" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-513">
			                        <a href="<?php echo get_template_directory_uri(); ?>/pdf/Well-Being_Report_Book.docx" target="_blank" style="background-image: url(&#39;<?php echo get_template_directory_uri(); ?>/images/download_arrow.png&#39;);">The Report</a>
			                    </li>
			                </ul>
			            </div>
			             <?php get_search_form(); //for search form ?> 
			        </nav>
			        <a id="nav__mobile--trigger" href="#"><i class="fi-list"></i></a>
			    </div>
			</header>

			
