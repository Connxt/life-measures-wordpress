<?php
// Load any external files you have here
if (!isset($content_width)) {
    $content_width = 900;
}

if (function_exists('add_theme_support')) {
    // Add Menu Support
    add_theme_support('menus');
    // Add Thumbnail Theme Support
    add_theme_support('post-thumbnails');
    add_image_size('large', 700, '', true); // Large Thumbnail
    add_image_size('medium', 250, '', true); // Medium Thumbnail
    add_image_size('small', 120, '', true); // Small Thumbnail
    add_image_size('custom-size', 700, 200, true); // Custom Thumbnail Size call using the_post_thumbnail('custom-size');
    // Enables post and comment RSS feed links to head
    add_theme_support('automatic-feed-links');

    // Localisation Support
    load_theme_textdomain('html5blank', get_template_directory() . '/languages');
}

/*------------------------------------*\
	Functions
\*------------------------------------*/

// HTML5 Blank navigation
function html5blank_nav() {
	wp_nav_menu(
	array(
		'theme_location'  => 'header-menu',
		'menu'            => '',
		'container'       => 'div',
		'container_class' => 'menu-item menu-item-type-post_type menu-item-object-page',
		'container_id'    => '',
		'menu_class'      => 'menu-item menu-item-type-post_type menu-item-object-page',
		'menu_id'         => '',
		'echo'            => true,
		'fallback_cb'     => 'wp_page_menu',
		'before'          => '',
		'after'           => '',
		'link_before'     => '',
		'link_after'      => '',
		'items_wrap'      => '<ul>%3$s</ul>',
		'depth'           => 0,
		'walker'          => ''
		)
	);
}

// Load QOL scripts in footer GLOBAL 
function qol_footer_scripts(){
    wp_register_script('conditionizr', get_template_directory_uri() . '/js/lib/conditionizr-4.3.0.min.js', array(), '4.3.0');
    wp_enqueue_script('conditionizr'); // Enqueue it!

    wp_register_script('modernizr', get_template_directory_uri() . '/js/lib/modernizr-2.7.1.min.js', array(), '2.7.1');
    wp_enqueue_script('modernizr'); // Enqueue it!

    wp_register_script('nprogress', get_template_directory_uri() . '/js/nprogress-master/nprogress.js', array(), '2.7.1');
    wp_enqueue_script('nprogress'); // Enqueue it!

    wp_register_script('basejs', get_template_directory_uri() . '/js/app/base.min.js', array(), '2.7.1');
    wp_enqueue_script('basejs'); // Enqueue it!

    wp_register_script('plugins', get_template_directory_uri() . '/js/plugins/plugins.min.js', array(), '2.7.1');
    wp_enqueue_script('plugins'); // Enqueue it!

    wp_register_script('app', get_template_directory_uri() . '/js/app/app.js', array(), '2.7.1');
    wp_enqueue_script('app'); // Enqueue it!

    wp_register_script('mainjs', get_template_directory_uri() . '/js/app/main.min.js', array(), '2.7.1');
    wp_enqueue_script('mainjs'); // Enqueue it!

    wp_register_script('appshared', get_template_directory_uri() . '/js/app/app_shared.js', array(), '2.7.1');
    wp_enqueue_script('appshared'); // Enqueue it!

}

// Load QOL styles in header GLOBAL
function qol_header_styles() {
    // wp_register_script('fonts', 'http://fast.fonts.net/jsapi/6f53c4ef-71a1-4f73-ab54-7625d6f8af79.js', array(), '2.7.1');
    // wp_enqueue_script('fonts'); // Enqueue it!

    wp_register_style('qol_styles', get_template_directory_uri() . '/style.css', array(), '1.0');
    wp_enqueue_style('qol_styles'); // Enqueue it!

    wp_register_style('normalize', get_template_directory_uri() . '/css/lib/normalize.css', array(), '1.0');
    wp_enqueue_style('normalize'); // Enqueue it!

    wp_register_style('nprogress', get_template_directory_uri() . '/css/nprogress-master/nprogress.css', array(), '1.0');
    wp_enqueue_style('nprogress'); // Enqueue it!

    wp_register_style('foundation_icons', get_template_directory_uri() . '/css/foundation-icons/foundation-icons.css', array(), '1.0');
    wp_enqueue_style('foundation_icons'); // Enqueue it!

    wp_register_style('entypo', get_template_directory_uri() . '/css/entypo/entypo.css', array(), '1.0');
    wp_enqueue_style('entypo'); // Enqueue it!
}

// Load QOL in-depth page scripts
function qol_page_in_depth_results_scripts() {
    if (is_page('in-depth-results')) {
        wp_register_script('globalize', get_template_directory_uri() . '/js/globalize/globalize.min.js', array(), '1.0.0');
        wp_enqueue_script('globalize'); // Enqueue it!

        wp_register_script('dxchart', get_template_directory_uri() . '/js/dx_chartjs/dx.chartjs.js', array(), '1.0.0');
        wp_enqueue_script('dxchart'); // Enqueue it!

        wp_register_script('jquery_bock_ui', get_template_directory_uri() . '/js/blockUI/jquery.blockUI.js', array(), '1.0.0');
        wp_enqueue_script('jquery_bock_ui'); // Enqueue it!
        
        wp_register_script('doughnut', get_template_directory_uri() . '/js/doughnut/doughnut.js', array(), '1.0.0');
        wp_enqueue_script('doughnut'); // Enqueue it!

        wp_register_script('as_pie_progress', get_template_directory_uri() . '/js/as_pie_progress/jquery-asPieProgress.js', array(), '1.0.0');
        wp_enqueue_script('as_pie_progress'); // Enqueue it!

        wp_register_script('chosen', get_template_directory_uri() . '/js/choosen/chosen.jquery.js', array(), '1.0.0');
        wp_enqueue_script('chosen'); // Enqueue it!
        
        wp_register_script('in-depth-results', get_template_directory_uri() . '/js/app/in-depth-results.js', array(), '1.0.0');
        wp_enqueue_script('in-depth-results'); // Enqueue it!
    }
}

// Load QOL in-depth page styles
function qol_page_in_depth_results_styles(){
    if (is_page('in-depth-results')) {
        wp_register_style('ass_pie_progress', get_template_directory_uri() . '/css/as_pie_progress/progress.css', array(), '1.0');
        wp_enqueue_style('ass_pie_progress'); // Enqueue it!

        wp_register_style('doughnut', get_template_directory_uri() . '/css/doughnut/doughnut.css', array(), '1.0');
        wp_enqueue_style('doughnut'); // Enqueue it!

        wp_register_style('chosen', get_template_directory_uri() . '/css/choosen/chosen.css', array(), '1.0');
        wp_enqueue_style('chosen'); // Enqueue it!

        wp_register_style('in-depth-results', get_template_directory_uri() . '/css/app/in-depth-results.css', array(), '1.0');
        wp_enqueue_style('in-depth-results'); // Enqueue it!

    }
}

function qol_page_your_perfect_place_styles(){
    if (is_page('your-perfect-place')) {
        wp_register_style('jvectormap', get_template_directory_uri() . '/css/jvectormap/jquery-jvectormap-2.0.2.css', array(), '1.0');
        wp_enqueue_style('jvectormap'); // Enqueue it!

        wp_register_style('fresh_range_slider', get_template_directory_uri() . '/css/fresh_range_slider/freshstyle.css', array(), '1.0');
        wp_enqueue_style('fresh_range_slider'); // Enqueue it!

        wp_register_style('chardinjs', get_template_directory_uri() . '/css/chardinjs/chardinjs.css', array(), '1.0');
        wp_enqueue_style('chardinjs'); // Enqueue it!

        wp_register_style('interactive_app', get_template_directory_uri() . '/css/app/interactive-app.css', array(), '1.0');
        wp_enqueue_style('interactive_app'); // Enqueue it!
    }

}

function qol_page_your_perfect_place_scripts(){
    if (is_page('your-perfect-place')) {
        wp_register_script('fresh_range_slider', get_template_directory_uri() . '/js/fresh_range_slider/freshslider.1.0.0.js', array(), '1.0.0');
        wp_enqueue_script('fresh_range_slider'); // Enqueue it!

        wp_register_script('jvectormap', get_template_directory_uri() . '/js/jvectormap/jquery-jvectormap-2.0.2.min.js', array(), '1.0.0');
        wp_enqueue_script('jvectormap'); // Enqueue it!

        wp_register_script('jvectormap_us', get_template_directory_uri() . '/js/jvectormap/jquery-jvectormap-us-aea-en.js', array(), '1.0.0');
        wp_enqueue_script('jvectormap_us'); // Enqueue it!

        wp_register_script('jvectormap_world', get_template_directory_uri() . '/js/jvectormap/jquery-jvectormap-world-mill-en.js', array(), '1.0.0');
        wp_enqueue_script('jvectormap_world'); // Enqueue it!

        wp_register_script('chardinjs', get_template_directory_uri() . '/js/chardinjs/chardinjs.js', array(), '1.0.0');
        wp_enqueue_script('chardinjs'); // Enqueue it!
        
        wp_register_script('Rainbow', get_template_directory_uri() . '/js/RainbowVis-JS-master/rainbowvis.js', array(), '1.0.0');
        wp_enqueue_script('Rainbow'); // Enqueue it!

        wp_register_script('interactive_app', get_template_directory_uri() . '/js/app/interactive_app.js', array(), '1.0.0');
        wp_enqueue_script('interactive_app'); // Enqueue it!
    }
}

function qol_page_interactive_map_styles(){
    if(is_page('interactive-map')){

        wp_register_style('jquery_ui_css', get_template_directory_uri() . '/css/jquery_ui/jquery-ui.css', array(), '1.0');
        wp_enqueue_style('jquery_ui_css'); // Enqueue it!

        wp_register_style('jvectormap', get_template_directory_uri() . '/css/jvectormap/jquery-jvectormap-2.0.2.css', array(), '1.0');
        wp_enqueue_style('jvectormap'); // Enqueue it!

        wp_register_style('chardinjs', get_template_directory_uri() . '/css/chardinjs/chardinjs.css', array(), '1.0');
        wp_enqueue_style('chardinjs'); // Enqueue it!

        wp_register_style('tooltipster', get_template_directory_uri() . '/css/tooltipster/tooltipster.css', array(), '1.0');
        wp_enqueue_style('tooltipster'); // Enqueue it!

        wp_register_style('sweet_alert', get_template_directory_uri() . '/css/sweet_alert/sweet-alert.css', array(), '1.0');
        wp_enqueue_style('sweet_alert'); // Enqueue it!

        wp_register_style('interactive-map', get_template_directory_uri() . '/css/app/interactive-map.css', array(), '1.0');
        wp_enqueue_style('interactive-map'); // Enqueue it!
    }
}

function qol_page_interactive_map_scripts(){
    if(is_page('interactive-map')){
        wp_register_script('jquery_ui', get_template_directory_uri() . '/js/jquery_ui/jquery-ui-1.11.4.min.js', array(), '1.0.0');
        wp_enqueue_script('jquery_ui'); // Enqueue it!

        wp_register_script('jvectormap', get_template_directory_uri() . '/js/jvectormap/jquery-jvectormap-2.0.2.min.js', array(), '1.0.0');
        wp_enqueue_script('jvectormap'); // Enqueue it!

        wp_register_script('jvectormap_us', get_template_directory_uri() . '/js/jvectormap/jquery-jvectormap-us-aea-en.js', array(), '1.0.0');
        wp_enqueue_script('jvectormap_us'); // Enqueue it!

        wp_register_script('jvectormap_world', get_template_directory_uri() . '/js/jvectormap/jquery-jvectormap-world-mill-en.js', array(), '1.0.0');
        wp_enqueue_script('jvectormap_world'); // Enqueue it!

        wp_register_script('Rainbow', get_template_directory_uri() . '/js/RainbowVis-JS-master/rainbowvis.js', array(), '1.0.0');
        wp_enqueue_script('Rainbow'); // Enqueue it!
        
        wp_register_script('chardinjs', get_template_directory_uri() . '/js/chardinjs/chardinjs.js', array(), '1.0.0');
        wp_enqueue_script('chardinjs'); // Enqueue it!

        wp_register_script('tooltipster', get_template_directory_uri() . '/js/tooltipster/jquery.tooltipster.js', array(), '1.0.0');
        wp_enqueue_script('tooltipster'); // Enqueue it!
        
        wp_register_script('sweet_alert', get_template_directory_uri() . '/js/sweet_alert/sweet-alert.min.js', array(), '1.0.0');
        wp_enqueue_script('sweet_alert'); // Enqueue it!
        
        wp_register_script('interactive_map', get_template_directory_uri() . '/js/app/interactive_map.js', array(), '1.0.0');
        wp_enqueue_script('interactive_map'); // Enqueue it!
    }
}

function qol_page_your_quality_of_life_measures_styles(){
    if(is_page('your-quality-of-life-measures')){
        wp_register_style('jquery_ui_css', get_template_directory_uri() . '/css/jquery_ui/jquery-ui.css', array(), '1.0');
        wp_enqueue_style('jquery_ui_css'); // Enqueue it!

        wp_register_style('font_awesome', get_template_directory_uri() . '/css/font-awesome/css/font-awesome.min.css', array(), '1.0');
        wp_enqueue_style('font_awesome'); // Enqueue it!
    }
}

function qol_page_your_quality_of_life_measures_scripts(){
    if(is_page('your-quality-of-life-measures')){
        wp_register_script('jquery_bock_ui', get_template_directory_uri() . '/js/blockUI/jquery.blockUI.js', array(), '1.0.0');
        wp_enqueue_script('jquery_bock_ui'); // Enqueue it!
    }
}

function qol_results_page_styles(){
    if(is_page('results')){
        wp_register_style('jquery_ui_css', get_template_directory_uri() . '/css/app/results.css', array(), '1.0');
        wp_enqueue_style('jquery_ui_css'); // Enqueue it!

        // wp_register_script('globalize', get_template_directory_uri() . '/js/globalize/globalize.min.js', array(), '1.0.0');
        // wp_enqueue_script('jquery_ui_js'); // Enqueue it!

        // wp_register_script('jquery_ui_js', get_template_directory_uri() . '/js/dx_chartjs/dx.chartjs.js', array(), '1.0.0');
        // wp_enqueue_script('jquery_ui_js'); // Enqueue it!
    }
}


// Register HTML5 Blank Navigation
function register_html5_menu() {
    register_nav_menus(array( // Using array to specify more menus if needed
        'header-menu' => __('Header Menu', 'html5blank'), // Main Navigation
        'sidebar-menu' => __('Sidebar Menu', 'html5blank'), // Sidebar Navigation
        'extra-menu' => __('Extra Menu', 'html5blank') // Extra Navigation if needed (duplicate as many as you need!)
    ));
}

// Remove the <div> surrounding the dynamic navigation to cleanup markup
function my_wp_nav_menu_args($args = '') {
    $args['container'] = false;
    return $args;
}

// Remove Injected classes, ID's and Page ID's from Navigation <li> items
function my_css_attributes_filter($var) {
    return is_array($var) ? array() : '';
}

// Remove invalid rel attribute values in the categorylist
function remove_category_rel_from_category_list($thelist) {
    return str_replace('rel="category tag"', 'rel="tag"', $thelist);
}

// Add page slug to body class, love this - Credit: Starkers Wordpress Theme
function add_slug_to_body_class($classes) {
    global $post;
    if (is_home()) {
        $key = array_search('blog', $classes);
        if ($key > -1) {
            unset($classes[$key]);
        }
    } elseif (is_page()) {
        $classes[] = sanitize_html_class($post->post_name);
    } elseif (is_singular()) {
        $classes[] = sanitize_html_class($post->post_name);
    }

    return $classes;
}

// If Dynamic Sidebar Exists
if (function_exists('register_sidebar')) {
    // Define Sidebar Widget Area 1
    register_sidebar(array(
        'name' => __('Widget Area 1', 'html5blank'),
        'description' => __('Description for this widget-area...', 'html5blank'),
        'id' => 'widget-area-1',
        'before_widget' => '<div id="%1$s" class="%2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3>',
        'after_title' => '</h3>'
    ));

    // Define Sidebar Widget Area 2
    register_sidebar(array(
        'name' => __('Widget Area 2', 'html5blank'),
        'description' => __('Description for this widget-area...', 'html5blank'),
        'id' => 'widget-area-2',
        'before_widget' => '<div id="%1$s" class="%2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3>',
        'after_title' => '</h3>'
    ));
}

// Remove wp_head() injected Recent Comment styles
function my_remove_recent_comments_style() {
    global $wp_widget_factory;
    remove_action('wp_head', array(
        $wp_widget_factory->widgets['WP_Widget_Recent_Comments'],
        'recent_comments_style'
    ));
}

// Pagination for paged posts, Page 1, Page 2, Page 3, with Next and Previous Links, No plugin
function html5wp_pagination() {
    global $wp_query;
    $big = 999999999;
    echo paginate_links(array(
        'base' => str_replace($big, '%#%', get_pagenum_link($big)),
        'format' => '?paged=%#%',
        'current' => max(1, get_query_var('paged')),
        'total' => $wp_query->max_num_pages
    ));
}

// Custom Excerpts
function html5wp_index($length) {
// Create 20 Word Callback for Index page Excerpts, call using html5wp_excerpt('html5wp_index');
    return 50;
}

// Create 40 Word Callback for Custom Post Excerpts, call using html5wp_excerpt('html5wp_custom_post');
function html5wp_custom_post($length) {
    return 40;
}

// Create the Custom Excerpts callback
function html5wp_excerpt($length_callback = '', $more_callback = '') {
    global $post;
    if (function_exists($length_callback)) {
        add_filter('excerpt_length', $length_callback);
    }
    if (function_exists($more_callback)) {
        add_filter('excerpt_more', $more_callback);
    }
    $output = get_the_excerpt();
    $output = apply_filters('wptexturize', $output);
    $output = apply_filters('convert_chars', $output);
    $output = '<p>' . $output . '</p>';
    echo $output;
}

// Custom View Article link to Post
function html5_blank_view_article($more) {
    global $post;
    return '... <a class="view-article" href="' . get_permalink($post->ID) . '">' . __('View Article', 'html5blank') . '</a>';
}

// Remove Admin bar
function remove_admin_bar() {
    return false;
}

// Remove 'text/css' from our enqueued stylesheet
function html5_style_remove($tag) {
    return preg_replace('~\s+type=["\'][^"\']++["\']~', '', $tag);
}

// Remove thumbnail width and height dimensions that prevent fluid images in the_thumbnail
function remove_thumbnail_dimensions( $html ) {
    $html = preg_replace('/(width|height)=\"\d*\"\s/', "", $html);
    return $html;
}

// Custom Gravatar in Settings > Discussion
function html5blankgravatar ($avatar_defaults) {
    $myavatar = get_template_directory_uri() . '/img/gravatar.jpg';
    $avatar_defaults[$myavatar] = "Custom Gravatar";
    return $avatar_defaults;
}

// Threaded Comments
function enable_threaded_comments() {
    if (!is_admin()) {
        if (is_singular() AND comments_open() AND (get_option('thread_comments') == 1)) {
            wp_enqueue_script('comment-reply');
        }
    }
}

// Custom Comments Callback
function html5blankcomments($comment, $args, $depth) {
	$GLOBALS['comment'] = $comment;
	extract($args, EXTR_SKIP);

	if ( 'div' == $args['style'] ) {
		$tag = 'div';
		$add_below = 'comment';
	} else {
		$tag = 'li';
		$add_below = 'div-comment';
	}
?>
    <!-- heads up: starting < for the html tag (li or div) in the next line: -->
    <?php echo $tag ?> <?php comment_class(empty( $args['has_children'] ) ? '' : 'parent') ?> id="comment-<?php comment_ID() ?>">
	<?php if ( 'div' != $args['style'] ) : ?>
	<div id="div-comment-<?php comment_ID() ?>" class="comment-body">
	<?php endif; ?>
	<div class="comment-author vcard">
	<?php if ($args['avatar_size'] != 0) echo get_avatar( $comment, $args['180'] ); ?>
	<?php printf(__('<cite class="fn">%s</cite> <span class="says">says:</span>'), get_comment_author_link()) ?>
	</div>
<?php if ($comment->comment_approved == '0') : ?>
	<em class="comment-awaiting-moderation"><?php _e('Your comment is awaiting moderation.') ?></em>
	<br />
<?php endif; ?>

	<div class="comment-meta commentmetadata"><a href="<?php echo htmlspecialchars( get_comment_link( $comment->comment_ID ) ) ?>">
		<?php
			printf( __('%1$s at %2$s'), get_comment_date(),  get_comment_time()) ?></a><?php edit_comment_link(__('(Edit)'),'  ','' );
		?>
	</div>

	<?php comment_text() ?>

	<div class="reply">
	<?php comment_reply_link(array_merge( $args, array('add_below' => $add_below, 'depth' => $depth, 'max_depth' => $args['max_depth']))) ?>
	</div>
	<?php if ( 'div' != $args['style'] ) : ?>
	</div>
	<?php endif; ?>
<?php }

/*------------------------------------*\
	Actions + Filters + ShortCodes
\*------------------------------------*/


// QOL ADD ACTIONS
add_action('get_header', 'qol_header_styles'); // Add Theme Stylesheet
add_action('get_footer', 'qol_footer_scripts'); // Add Theme Stylesheet

// QOL ADD ACTIONS FOR PAGES
add_action('get_header', 'qol_page_in_depth_results_styles'); // Add Conditional Page Styles 
add_action('get_header', 'qol_page_your_perfect_place_styles');// Add Conditional Page Styles
add_action('get_header', 'qol_page_interactive_map_styles');// Add Conditional Page Styles
add_action('get_header', 'qol_page_your_quality_of_life_measures_styles');// Add Conditional Page Styles
add_action('get_header', 'qol_results_page_styles');// Add Conditional Page Styles

//

add_action('get_footer', 'qol_page_your_quality_of_life_measures_scripts', 1);// Add Conditional Page Styles  
add_action('get_footer', 'qol_page_in_depth_results_scripts'); // Add Conditional Page Scripts
add_action('get_footer', 'qol_page_your_perfect_place_scripts'); // Add Conditional Page Scripts
add_action('get_footer', 'qol_page_interactive_map_scripts'); // Add Conditional Page Scripts


// Add Actions
add_action('get_header', 'enable_threaded_comments'); // Enable Threaded Comments

add_action('init', 'register_html5_menu'); // Add HTML5 Blank Menu
add_action('init', 'create_post_type_html5'); // Add our HTML5 Blank Custom Post Type
add_action('widgets_init', 'my_remove_recent_comments_style'); // Remove inline Recent Comment Styles from wp_head()
add_action('init', 'html5wp_pagination'); // Add our HTML5 Pagination

// Remove Actions
remove_action('wp_head', 'feed_links_extra', 3); // Display the links to the extra feeds such as category feeds
remove_action('wp_head', 'feed_links', 2); // Display the links to the general feeds: Post and Comment Feed
remove_action('wp_head', 'rsd_link'); // Display the link to the Really Simple Discovery service endpoint, EditURI link
remove_action('wp_head', 'wlwmanifest_link'); // Display the link to the Windows Live Writer manifest file.
remove_action('wp_head', 'index_rel_link'); // Index link
remove_action('wp_head', 'parent_post_rel_link', 10, 0); // Prev link
remove_action('wp_head', 'start_post_rel_link', 10, 0); // Start link
remove_action('wp_head', 'adjacent_posts_rel_link', 10, 0); // Display relational links for the posts adjacent to the current post.
remove_action('wp_head', 'wp_generator'); // Display the XHTML generator that is generated on the wp_head hook, WP version
remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0);
remove_action('wp_head', 'rel_canonical');
remove_action('wp_head', 'wp_shortlink_wp_head', 10, 0);

// Add Filters
add_filter('avatar_defaults', 'html5blankgravatar'); // Custom Gravatar in Settings > Discussion
add_filter('body_class', 'add_slug_to_body_class'); // Add slug to body class (Starkers build)
add_filter('widget_text', 'do_shortcode'); // Allow shortcodes in Dynamic Sidebar
add_filter('widget_text', 'shortcode_unautop'); // Remove <p> tags in Dynamic Sidebars (better!)
add_filter('wp_nav_menu_args', 'my_wp_nav_menu_args'); // Remove surrounding <div> from WP Navigation
// add_filter('nav_menu_css_class', 'my_css_attributes_filter', 100, 1); // Remove Navigation <li> injected classes (Commented out by default)
// add_filter('nav_menu_item_id', 'my_css_attributes_filter', 100, 1); // Remove Navigation <li> injected ID (Commented out by default)
// add_filter('page_css_class', 'my_css_attributes_filter', 100, 1); // Remove Navigation <li> Page ID's (Commented out by default)
add_filter('the_category', 'remove_category_rel_from_category_list'); // Remove invalid rel attribute
add_filter('the_excerpt', 'shortcode_unautop'); // Remove auto <p> tags in Excerpt (Manual Excerpts only)
add_filter('the_excerpt', 'do_shortcode'); // Allows Shortcodes to be executed in Excerpt (Manual Excerpts only)
add_filter('excerpt_more', 'html5_blank_view_article'); // Add 'View Article' button instead of [...] for Excerpts
add_filter('show_admin_bar', 'remove_admin_bar'); // Remove Admin bar
add_filter('style_loader_tag', 'html5_style_remove'); // Remove 'text/css' from enqueued stylesheet
add_filter('post_thumbnail_html', 'remove_thumbnail_dimensions', 10); // Remove width and height dynamic attributes to thumbnails
add_filter('image_send_to_editor', 'remove_thumbnail_dimensions', 10); // Remove width and height dynamic attributes to post images

// Remove Filters
remove_filter('the_excerpt', 'wpautop'); // Remove <p> tags from Excerpt altogether

// Shortcodes
add_shortcode('html5_shortcode_demo', 'html5_shortcode_demo'); // You can place [html5_shortcode_demo] in Pages, Posts now.
add_shortcode('html5_shortcode_demo_2', 'html5_shortcode_demo_2'); // Place [html5_shortcode_demo_2] in Pages, Posts now.

// Shortcodes above would be nested like this -
// [html5_shortcode_demo] [html5_shortcode_demo_2] Here's the page title! [/html5_shortcode_demo_2] [/html5_shortcode_demo]

/*------------------------------------*\
	Custom Post Types
\*------------------------------------*/




function add_query_vars_filter($vars) {

  $vars[] = "map_type";
  $vars[] = "map";
  $vars[] = "scores";
  $vars[] = "years";
  $vars[] = "locations";
  $vars[] = "search_type";

  return $vars;

}

add_filter( 'query_vars', 'add_query_vars_filter' );

function add_rewrite_rules($aRules) {

    $aNewRules = array(

        'results/([^/]+)/([^/]+)/([^/]+)/([^/]+)/([^/]+)/([^/]+)/?$' => 'life-measures/index.php?pagename=results&map_type=$matches[1]&map=$matches[2]&scores=$matches[3]&years=$matches[4]&locations=$matches[5]&search_type=$matches[6]',

        'interactive-map/([^/]+)/([^/]+)/([^/]+)/([^/]+)/([^/]+)/([^/]+)/?$' => 'life-measures/index.php?pagename=interactive-map&map_type=$matches[1]&map=$matches[2]&scores=$matches[3]&years=$matches[4]&locations=$matches[5]&search_type=$matches[6]',
        );

    $aRules = $aNewRules + $aRules;
    return $aRules;

}
 
// // // hook add_rewrite_rules function into rewrite_rules_array
add_filter('rewrite_rules_array', 'add_rewrite_rules');

//Create 1 Custom Post type for a Demo, called HTML5-Blank

function create_post_type_html5() {
    register_taxonomy_for_object_type('category', 'html5-blank'); // Register Taxonomies for Category
    register_taxonomy_for_object_type('post_tag', 'html5-blank');
    register_post_type('html5-blank', // Register Custom Post Type
        array(
        'labels' => array(
            'name' => __('HTML5 Blank Custom Post', 'html5blank'), // Rename these to suit
            'singular_name' => __('HTML5 Blank Custom Post', 'html5blank'),
            'add_new' => __('Add New', 'html5blank'),
            'add_new_item' => __('Add New HTML5 Blank Custom Post', 'html5blank'),
            'edit' => __('Edit', 'html5blank'),
            'edit_item' => __('Edit HTML5 Blank Custom Post', 'html5blank'),
            'new_item' => __('New HTML5 Blank Custom Post', 'html5blank'),
            'view' => __('View HTML5 Blank Custom Post', 'html5blank'),
            'view_item' => __('View HTML5 Blank Custom Post', 'html5blank'),
            'search_items' => __('Search HTML5 Blank Custom Post', 'html5blank'),
            'not_found' => __('No HTML5 Blank Custom Posts found', 'html5blank'),
            'not_found_in_trash' => __('No HTML5 Blank Custom Posts found in Trash', 'html5blank')
        ),
        'public' => true,
        'hierarchical' => true, // Allows your posts to behave like Hierarchy Pages
        'has_archive' => true,
        'supports' => array(
            'title',
            'editor',
            'excerpt',
            'thumbnail'
        ), // Go to Dashboard Custom HTML5 Blank post for supports
        'can_export' => true, // Allows export in Tools > Export
        'taxonomies' => array(
            'post_tag',
            'category'
        ) // Add Category and Post Tags support
    ));
}

/*------------------------------------*\
	ShortCode Functions
\*------------------------------------*/

// Shortcode Demo with Nested Capability
function html5_shortcode_demo($atts, $content = null) {
    return '<div class="shortcode-demo">' . do_shortcode($content) . '</div>'; // do_shortcode allows for nested Shortcodes
}

// Shortcode Demo with simple <h2> tag
function html5_shortcode_demo_2($atts, $content = null) {
// Demo Heading H2 shortcode, allows for nesting within above element. Fully expandable.
    return '<h2>' . $content . '</h2>';
}

?>
