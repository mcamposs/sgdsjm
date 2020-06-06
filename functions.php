<?php
function sgdsjm_theme_support() {

	// Custom background color.
	add_theme_support(
		'custom-background',
		array(
			'default-color' => 'f5efe0',
		)
	);

	// Enable support for Post Thumbnails on posts and pages.
	add_theme_support( 'post-thumbnails' );

	// Set post thumbnail size.
	set_post_thumbnail_size( 1200, 9999 );

	// Add custom image size used in Cover Template.
	add_image_size( 'sgdsjm-fullscreen', 1980, 9999 );

	// Custom logo.
	$logo_width  = 350;
	$logo_height = 200;

	// If the retina setting is active, double the recommended width and height.
	if ( get_theme_mod( 'retina_logo', false ) ) {
		$logo_width  = floor( $logo_width * 2 );
		$logo_height = floor( $logo_height * 2 );
	}

	add_theme_support(
		'custom-logo',
		array(
			'height'      => $logo_height,
			'width'       => $logo_width,
			'flex-height' => true,
			'flex-width'  => true,
		)
	);

	//Let WordPress manage the document title.
	add_theme_support( 'title-tag' );

	//Switch default core markup for search form, comment form, and comments
	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'script',
			'style',
		)
	);

	//Make theme available for translation.
	load_theme_textdomain( 'sgdsjm' );

	// Add support for full and wide align images.
	add_theme_support( 'align-wide' );

	// Add support for responsive embeds.
	add_theme_support( 'responsive-embeds' );

	// Add default posts and comments RSS feed links to head.
    add_theme_support( 'automatic-feed-links' );

    // Register Navigation Menus
    register_nav_menus(array(
        'header-menu' => 'Menu Superior',
        'sidebar-menu' => 'Menu Lateral',
        'footer-menu' => 'Menu Inferior',
    ));

}
add_action( 'after_setup_theme', 'sgdsjm_theme_support' );

// Removes some links from the header
function my_theme_remove_headlinks() {
    remove_action( 'wp_head', 'wp_generator' );
    remove_action( 'wp_head', 'rsd_link' );
    remove_action( 'wp_head', 'wlwmanifest_link' );
    remove_action( 'wp_head', 'start_post_rel_link' );
    remove_action( 'wp_head', 'index_rel_link' );
    remove_action( 'wp_head', 'wp_shortlink_wp_head' );
    remove_action( 'wp_head', 'adjacent_posts_rel_link' );
    remove_action( 'wp_head', 'parent_post_rel_link' );
    remove_action( 'wp_head', 'feed_links_extra', 3 );
    remove_action( 'wp_head', 'feed_links', 2 );
    remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
    remove_action( 'wp_print_styles', 'print_emoji_styles' );
}
add_action( 'init', 'my_theme_remove_headlinks' );
 
// Longitud del resúmen
function sgdsjm_excerpt($length) {
    return 25;
}
add_filter('excerpt_length', 'sgdsjm_excerpt');

//Hojas de estilo y JS
function sgdsjm_styles() {
    wp_enqueue_style( 'bootstrap-css', get_template_directory_uri() . '/assets/css/bootstrap.min.css' );
	wp_enqueue_style( 'carousel', get_template_directory_uri() . '/assets/css/owl.carousel.min.css' );
	//wp_enqueue_style( 'animate', get_template_directory_uri() . '/assets/css/animate.min.css' );
	//wp_enqueue_style( 'magnific-popup', get_template_directory_uri() . '/assets/css/magnific-popup.css' );
	wp_enqueue_style( 'fontawesome-all', get_template_directory_uri() . '/assets/css/fontawesome-all.min.css' );
	//wp_enqueue_style( 'themify-icons', get_template_directory_uri() . '/assets/css/themify-icons.css' );
	//wp_enqueue_style( 'slick', get_template_directory_uri() . '/assets/css/slick.css' );*/
	wp_enqueue_style( 'style', get_stylesheet_uri(), array() );
	wp_enqueue_style( 'responsive', get_template_directory_uri() . '/assets/css/responsive.css' );

    wp_enqueue_script( 'modernizr', get_template_directory_uri() . '/assets/js/vendor/modernizr-3.5.0.min.js', array('jquery'), '3.5', true );
    wp_enqueue_script( 'propper', get_template_directory_uri() . '/assets/js/popper.min.js', array('jquery'), '1.0', true );
    wp_enqueue_script( 'bootstrap-js', get_template_directory_uri() . '/assets/js/bootstrap.min.js', array('jquery'), '4.13', true );
    wp_enqueue_script( 'carousel', get_template_directory_uri() . '/assets/js/owl.carousel.min.js', array('jquery'), '1.0', true );
    //wp_enqueue_script( 'isotope', get_template_directory_uri() . '/assets/js/isotope.pkgd.min.js', array('carousel'), '1.0', true );
    //wp_enqueue_script( 'slick', get_template_directory_uri() . '/assets/js/slick.min.js', array('isotope'), '1.0', true );
    //wp_enqueue_script( 'ajax', get_template_directory_uri() . '/assets/js/ajax-form.js', array('slick'), '1.0', true );
    //wp_enqueue_script( 'wow', get_template_directory_uri() . '/assets/js/wow.min.js', array('ajax'), '1.0', true );
    //wp_enqueue_script( 'scroll', get_template_directory_uri() . '/assets/js/jquery.scrollUp.min.js', array('wow'), '1.0', true );
    //wp_enqueue_script( 'counter', get_template_directory_uri() . '/assets/js/jquery.counterup.min.js', array(), '1.0', true );
    //wp_enqueue_script( 'way', get_template_directory_uri() . '/assets/js/waypoints.min.js', array('counter'), '1.0', true );
    //wp_enqueue_script( 'images', get_template_directory_uri() . '/assets/js/imagesloaded.pkgd.min.js', array('way'), '1.0', true );
    //wp_enqueue_script( 'magnific', get_template_directory_uri() . '/assets/js/jquery.magnific-popup.min.js', array('images'), '1.0', true );
    //wp_enqueue_script( 'plugins', get_template_directory_uri() . '/assets/js/plugins.js', array('plugins'), '1.0', true );
    wp_enqueue_script( 'main', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), '1.0', true );
}
add_action( 'wp_enqueue_scripts', 'sgdsjm_styles' );


?>