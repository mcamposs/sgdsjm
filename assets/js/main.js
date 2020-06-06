(function ($) {
	"use strict";

/*
	// meanmenu
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "992"
	});

	$('.info-bar').on('click', function () {
		$('.extra-info').addClass('info-open');
	})

	$('.close-icon').on('click', function () {
		$('.extra-info').removeClass('info-open');
	})


	// sticky
	var wind = $(window);
	var sticky = $('#sticky-header');
	wind.on('scroll', function () {
		var scroll = wind.scrollTop();
		if (scroll < 100) {
			sticky.removeClass('sticky');
		} else {
			sticky.addClass('sticky');
		}
	});
*/


/*
	// mainSlider
	function mainSlider() {
		var BasicSlider = $('.slider-active');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			autoplay: false,
			autoplaySpeed: 10000,
			dots: false,
			fade: true,
			arrows: false,
			responsive: [
				{ breakpoint: 767, settings: { dots: false, arrows: false } }
			]
		});

		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function () {
					$this.removeClass($animationType);
				});
			});
		}
	}
	mainSlider();

*/

/* breaking-active */
$('.breaking-active').owlCarousel({
	loop: true,
	nav: false,
	dots: false,
	margin:0,
	autoplay: true,
	navText: ['<i class="far fa-long-arrow-left"></i>', '<i class="far fa-long-arrow-right"></i>'],
	responsive: {
		0: {
			items: 1,
			nav: false,
		},
		576: {
			items: 1,
			nav: false,
		},
		768: {
			items: 1
		},
		992: {
			items: 1
		},
		1200: {
			items: 1
		}
	}
})
/* breaking-active */
$('.breaking-2-active').owlCarousel({
	loop: true,
	nav: true,
	dots: false,
	margin:0,
	autoplay: true,
	navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
	responsive: {
		0: {
			items: 1,
			nav: false,
		},
		576: {
			items: 1,
			nav: false,
		},
		768: {
			items: 1,
			nav: false,
		},
		992: {
			items: 1,
			nav: false,
		},
		1200: {
			items: 1
		}
	}
})
/* arrow-active */
$('.arrow-active').owlCarousel({
	loop: true,
	nav: true,
	dots: false,
	margin:0,
	autoplay: false,
	navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
	responsive: {
		0: {
			items: 1,
			nav: false,
		},
		576: {
			items: 1,
			nav: false,
		},
		768: {
			items: 1
		},
		992: {
			items: 1
		},
		1200: {
			items: 1
		}
	}
})
/* news-active */
$('.news-active').owlCarousel({
	loop: true,
	nav: true,
	dots: false,
	margin:0,
	autoplay: false,
	navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
	responsive: {
		0: {
			items: 1,
			nav: false,
		},
		576: {
			items: 1,
			nav: false,
		},
		768: {
			items: 2
		},
		992: {
			items: 2
		},
		1200: {
			items: 3
		}
	}
})

/* news-active */
$('.news-02-active').owlCarousel({
	loop: true,
	nav: true,
	dots: false,
	margin:0,
	autoplay: false,
	navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
	responsive: {
		0: {
			items: 1,
			nav: false,
		},
		576: {
			items: 1,
			nav: false,
		},
		768: {
			items: 2
		},
		992: {
			items: 2
		},
		1200: {
			items: 2
		}
	}
})
/* news-active */
$('.news-03-active').owlCarousel({
	loop: true,
	nav: true,
	dots: false,
	margin:0,
	autoplay: false,
	navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
	responsive: {
		0: {
			items: 1,
			nav: false,
		},
		576: {
			items: 1,
			nav: false,
		},
		768: {
			items: 2
		},
		992: {
			items: 3
		},
		1200: {
			items: 4
		}
	}
})
/* news-active */
$('.news-04-active').owlCarousel({
	loop: true,
	nav: true,
	dots: false,
	margin:0,
	autoplay: false,
	navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
	responsive: {
		0: {
			items: 1,
			nav: false,
		},
		576: {
			items: 1,
			nav: false,
		},
		768: {
			items: 2
		},
		992: {
			items: 3
		},
		1200: {
			items: 5
		}
	}
})

/*
	// client-03-active
	$('.client-03-active').slick({
		dots: false,
		arrows: false,
		infinite: true,
		centerMode: true,
		autoplay: true,
		centerPadding: '0',
		speed: 300,
		prevArrow: '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				}
			}
		]
	});
*/
/*

	/* counter *
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
*/

	/* magnificPopup img view *
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
		  enabled: true
		}
	});
	*/

	/* magnificPopup video view *
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});
*/
/*
	// isotop
	$('.grid').imagesLoaded( function() {
		// init Isotope
		var $grid = $('.grid').isotope({
		  itemSelector: '.grid-item',
		  percentPosition: true,
		  masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: '.grid-item',
		  }
		});
	});
*/
/*
	// filter items on button click
	$('.portfolio-menu').on( 'click', 'button', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});

/*
	//for menu active class
	$('.portfolio-menu button').on('click', function(event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});

*/
/*

	// scrollToTop
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="fas fa-angle-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});
*/
/*
	// WOW active
	new WOW().init();
*/
/*
	// map
function basicmap() {
	// Basic options for a simple Google Map
	// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
	var mapOptions = {
		// How zoomed in you want the map to start at (always required)
		zoom: 11,
		scrollwheel: false,
		// The latitude and longitude to center the map (always required)
		center: new google.maps.LatLng(40.6700, -73.9400), // New York
		// This is where you would paste any style found on Snazzy Maps.
		styles: [{ "featureType": "all", "elementType": "geometry.fill", "stylers": [{ "weight": "2.00" }] }, { "featureType": "all", "elementType": "geometry.stroke", "stylers": [{ "color": "#9c9c9c" }] }, { "featureType": "all", "elementType": "labels.text", "stylers": [{ "visibility": "on" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] }, { "featureType": "landscape", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "landscape.man_made", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "color": "#eeeeee" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#7b7b7b" }] }, { "featureType": "road", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#46bcec" }, { "visibility": "on" }] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "color": "#c8d7d4" }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#070707" }] }, { "featureType": "water", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ffffff" }] }]
	};
	// Get the HTML DOM element that will contain your map
	// We are using a div with id="map" seen below in the <body>
	var mapElement = document.getElementById('contact-map');

	// Create the Google Map using our element and options defined above
	var map = new google.maps.Map(mapElement, mapOptions);

	// Let's also add a marker while we're at it
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(40.6700, -73.9400),
		map: map,
		title: 'Cryptox'
	});
}
if ($('#contact-map').length != 0) {
	google.maps.event.addDomListener(window, 'load', basicmap);
}
if (typeof ($.fn.knob) != 'undefined') {
    $('.knob').each(function () {
      var $this = $(this),
        knobVal = $this.attr('data-rel');

      $this.knob({
        'draw': function () {
          $(this.i).val(this.cv + '%')
        }
      });

      $this.appear(function () {
        $({
          value: 0
        }).animate({
          value: knobVal
        }, {
          duration: 2000,
          easing: 'swing',
          step: function () {
            $this.val(Math.ceil(this.value)).trigger('change');
          }
        });
      }, {
        accX: 0,
        accY: -150
      });
    });
  }
 */

	})(jQuery);