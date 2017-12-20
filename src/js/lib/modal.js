function modals() {

	var nav_items = $('.nav li');
	var tl = new TimelineMax();

	$('.js_modal').magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: false,
		preloader: false,
		midClick: true,
		removalDelay: 200,
		mainClass: 'my-mfp-zoom-in',
		 callbacks: {
		    open: function() {
		    	tl
		    		.staggerFromTo(nav_items, 0.2, { opacity:0, scale:0 }, { opacity: 1, scale:1,  ease: Power0.easeNone }, 0.1)
		    }
		  }
	});

	$('.js_main_modal').magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: false,
		preloader: false,
		midClick: true,
		removalDelay: 150,
		mainClass: 'my-mfp-zoom-in',
		 callbacks: {
		    open: function() {
		    tl
		    	.fromTo('.modal__form', 0.4, { width: '100%' }, { width: 300, ease: Elastic.easeOut.config(1, 0.5), delay: 0.2 })
		    }
		  }
	});

};

module.exports = modals;//export function