<?php
function import_scripts() {
  wp_enqueue_style( 'childstyle' );
  wp_enqueue_style('sass-style',	get_stylesheet_directory_uri().'/css/sass.css','v.1.0.0' ,true);
  wp_register_style( 'childstyle', get_stylesheet_directory_uri() . '/style.css'  );
  wp_enqueue_script("jquery");
  wp_enqueue_script('light',get_stylesheet_directory_uri().'/js/light.js', array("jquery"), '5.0',true);
}
add_action( 'wp_enqueue_scripts', 'import_scripts',0);

function import_para(){
  wp_enqueue_script('TweenMax',get_stylesheet_directory_uri().'/js/TweenMax.min.js', array("jquery"));
  wp_enqueue_script('timelineMax',get_stylesheet_directory_uri().'/js/TimelineMax.min.js', array("jquery"));
  wp_enqueue_script('ScrollMagic',get_stylesheet_directory_uri().'/js/ScrollMagic.js', array("jquery"));
  wp_enqueue_script('addIndicators',get_stylesheet_directory_uri().'/js/debug.addIndicators.js', array("jquery"));
  wp_enqueue_script('animation-gsap',get_stylesheet_directory_uri().'/js/animation.gsap.js', array("jquery"));
}

add_action( 'wp_enqueue_scripts', 'import_para',999);



//..........
?>
