//import '../../node_modules/fullpage.js/dist/jquery.fullpage.min.js';
import '../../node_modules/fullpage.js/vendors/scrolloverflow.min.js';
import {TimelineMax} from 'gsap';
import Parallax from 'parallax-js';
import '../../node_modules/magnific-popup/dist/jquery.magnific-popup.min.js';
import sayHello from './lib/sayHello.js';
import firstScreenGSAP from './lib/firstScreenGSAP.js';
import secondScreenGSAP from './lib/secondScreenGSAP.js';
import thirdScreenGSAP from './lib/thirdScreenGSAP.js';
import fourScreenGSAP from './lib/fourScreenGSAP.js';
import fiveScreenGSAP from './lib/fiveScreenGSAP.js';
import modals from './lib/modal.js';
import footerGSAP from './lib/footerGSAP.js';
import '../../node_modules/jquery.animate-number/jquery.animateNumber.min.js';
import Splitter from 'split-html-to-chars';
import '../../node_modules/particles.js/particles.js';
import fullpage from 'fullpage.js';


$( document ).ready(function() {

	$(".js_scroll_city").click(function() {
    $('html, body').animate({
        scrollTop: $(".vlist").offset().top
    }, 500);
});

	/* >>>>>>>>>> jobs page city tabs <<<<<<<<<<<< */
  $('.vlist__top li').click(function() {

  	$('.vlist__top li').removeClass('active');
  	$(this).addClass('active');

  	$('.vlist__vacancys').hide(300);
  	$('.vlist__contacts ul').hide(300).removeClass('active');

    var tab_id = $(this).attr('data-jobcitys');

    $('.' + tab_id).show(300).addClass('active');
  });

  /* start accordion vacncy */
  var acc = $('.js_show_job');
  var i;
	  for (i = 0; i < acc.length; i++) {
			acc[i].onclick = function() {
				$(this).text(function(i, text){
	        return text === "подробнее" ? "свернуть" : "подробнее";
	      });
	      $(this).parent().next().slideToggle(200);
		};
  };
  /* end accordion vacncy */

var els = document.querySelectorAll(".js-splitme");
		[].forEach.call(els, function(el) {
    el.outerHTML = Splitter(el.outerHTML, '<span class="letter">$</span>');
});

sayHello();
firstScreenGSAP();
modals();

/* >>>>>>>>>>>>>>>>>>>>>>start function to animate numbers<<<<<<<<<<<<<<<<<<<< */
	var elementAnimated = $('.js_animate_vacancy');
	function animateNumbers(){
		var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
		elementAnimated.each(function() {
			var tcount = $(this).data("count");
			$(this).animateNumber({ number: tcount,
				easing: 'easeInQuad',
				numberStep: comma_separator_number_step},
				1000);
		});
	};
/* >>>>>>>>>>>>>>>>>>>>>>end function to animate numbers<<<<<<<<<<<<<<<<<<<< */


/* >>>>>>>>>>>>>>>>>>>>>>start fullpage settings<<<<<<<<<<<<<<<<<<<< */
	$('#fullpage').fullpage({
	        //Navigation
	        menu: '.js_nav-menu',
	        lockAnchors: false,
	        anchors:['main', 'vacancy', 'people', 'steps', 'train', 'photo', 'maps', 'contact'],
	        navigation: true,
	        navigationPosition: 'right',
	        navigationTooltips: false,
	        showActiveTooltip: false,
	        slidesNavigation: false,
	 
	        //Scrolling
	        css3: true,
	        scrollingSpeed: 700,
	        autoScrolling: true,
	        fitToSection: true,
	        fitToSectionDelay: 1000,
	        scrollBar: false,
	        easing: 'easeInOutCubic',
	        easingcss3: 'ease',
	        loopBottom: false,
	        loopTop: false,
	        continuousVertical: false,
	        normalScrollElements: '#element1, .element2',
	        scrollOverflow: true,
	        scrollOverflowReset: false,
	        scrollOverflowOptions: null,
	        touchSensitivity: 17,
	        normalScrollElementTouchThreshold: 5,
	        bigSectionsDestination: null,
	        fixedElements: '.fix_nav',
	 
	        //Accessibility
	        keyboardScrolling: true,
	        animateAnchor: true,
	        recordHistory: true,
	 
	        //Design
	        controlArrows: false,
	        verticalCentered: true,
	        paddingTop: '0',
	        paddingBottom: '0',
	        responsiveWidth: 0,
	        responsiveHeight: 0,
	        responsiveSlides: false,
	        parallax: false,

				  afterLoad: function(anchorLink, index){
				  	if(index == 1){
				  		$('.fix_nav').removeClass('active');
						}
						if(index == 2){
							animateNumbers(elementAnimated);
							secondScreenGSAP();
						}
						if(index == 3){
							thirdScreenGSAP();
						}
						if(index == 4){
							fourScreenGSAP();
						}
						if(index == 5){
							fiveScreenGSAP();
						}
						if(anchorLink == 'contact'){
							footerGSAP();
						}						
						if(index >= 2){
							$('.fix_nav').addClass('active');
						}
				},
				onLeave: function(index, nextIndex, direction){
					if(index == 2 && direction =='up'){
						$('.fix_nav').removeClass('active');
					}
				}
	    });

	

	$('.js_scroll-top').click(function(){
		$.fn.fullpage.moveTo(1);
	});

	$('.head__map').click(function(){
		$.fn.fullpage.moveTo(7);
	});

	$('.photo__slide-right').click(function(){
		$.fn.fullpage.moveSlideRight();
	});	

	$('.photo__slide-left').click(function(){
		$.fn.fullpage.moveSlideLeft();
	});
/* >>>>>>>>>>>>>>>>>>>>>>end fullpage settings<<<<<<<<<<<<<<<<<<<< */


/* >>>>>>>>>>>>>> map <<<<<<<<<<<<<<<<< */
  $('.js_map_city li').click(function() {

  	$('.js_map_city li').removeClass('active');

  	$('.filial__contacts ul').hide();

    var tab_id = $(this).attr('data-map');

    $(this).addClass('active');

    $('.' + tab_id).show();

  });

  $("#js_map_city1").on('click', function () {
	  newLocation(50.4512059,30.473671);
	});
	 $("#js_map_city2").on('click', function () {
	  newLocation(49.9872133,36.2083199);
	});
   $("#js_map_city3").on('click', function () {
	  newLocation(46.482926,30.746955);
	});
   $("#js_map_city4").on('click', function () {
	  newLocation(46.6746937,32.6755875);
	});


   /* >>>>>>>>>>>>>>>> FORM <<<<<<<<<<<<<<<<< */
    	//E-mail Ajax Send
				$(".js_send_mail").submit(function() { //Change
					var th = $(this);
					$.ajax({
						type: "POST",
						url: "mail.php", //Change
						data: th.serialize()
					}).done(function() {
						window.location.replace("http://esco.team/thanks.html");
						setTimeout(function() {
							// Done Functions
							th.trigger("reset");
						}, 1000);
					});
					return false;
				});

    /* push value from button to opened form */
    $('a.js_value').click(function() {
    	$('.form_id').val($(this).data('form'));
 		});


 	$(window).scroll(function() {
   var fixNav = $('.fix_nav');
   var heightFixNav = fixNav.height();

    if ($(window).scrollTop() >= heightFixNav+50) {
    	fixNav.addClass('active');
    }
    else {
      fixNav.removeClass('active');
    }
  });


/* >>>>>>>>>>>>>>>start parallax settings<<<<<<<<<<<<<<<<<< */

	//train people parallax
	var train_scene = $('#train_js_parallax').get(0);
	var parallaxInstance = new Parallax(train_scene, {
		frictionY: 0,
	});

	
	//city houses parallax
	var city_scene = $('#city_js_parallax').get(0);
	var parallaxInstance = new Parallax(city_scene, {
		frictionY: 0,
	});


	//vacancy buttons parallax
	var scene1 = $('.par_1').get(0);
	var parallaxInstance = new Parallax(scene1);
	var scene2 = $('.par_2').get(0);
	var parallaxInstance = new Parallax(scene2);
	var scene3 = $('.par_3').get(0);
	var parallaxInstance = new Parallax(scene3);
	var scene4 = $('.par_4').get(0);
	var parallaxInstance = new Parallax(scene4);
/* >>>>>>>>>>>>>>end parallax settings <<<<<<<<<<<<<<<<<<<<<<< */


/* particles in vacancy list main page */
particlesJS.load('particles-js', '../lib/particles.json', function() {
  console.log('callback - particles.js config loaded');
});








});//end ready doc