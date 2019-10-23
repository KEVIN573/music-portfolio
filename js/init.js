/*
 * Copyright (c) 2019 K&O Technologies
 * Author: K&O Technologies
*/


jQuery(document).ready(function(){

	"use strict";
	
	// here all ready functions
	
	arlo_tm_hamburger();
	arlo_tm_imgtosvg();
	arlo_tm_magnific_popup();
	arlo_tm_jarallax();
	arlo_tm_list_height();
	arlo_tm_portfolio();
	arlo_tm_anchor();
	arlo_tm_contact_form();
	arlo_tm_owl_carousel();
	arlo_tm_animate_text();
	arlo_tm_projects();
	arlo_tm_miniboxes();
	arlo_tm_isotope();
	arlo_tm_totop();
	arlo_tm_totop_myhide();
	arlo_tm_animate_text();
	arlo_tm_popup_blog();
	arlo_tm_popupscroll();
	arlo_tm_about_animation();
	arlo_tm_kenburn_slider();
	arlo_tm_ripple();
	arlo_tm_switcher();
	arlo_tm_data_images();
	
	
	jQuery(window).on('scroll',function(){
		//e.preventDefault();
		arlo_tm_totop_myhide();
		
	});
	
	jQuery(window).on('resize',function(){
		arlo_tm_miniboxes();
		arlo_tm_isotope();
		
	});
	
	jQuery(window).load('body', function(){
		setTimeout(function(){
        jQuery('.preloader').addClass('loaded');
    }, 1000);
	});
	
});

// -----------------------------------------------------
// --------------------  FUNCTIONS  --------------------
// -----------------------------------------------------


// -----------------------------------------------------
// ---------------  HAMBURGER  -------------------------
// -----------------------------------------------------

function arlo_tm_hamburger(){
	
	"use strict";
	
	let hamburger 		= jQuery('.hamburger');
	let mobileMenu		= jQuery('.mobile-menu-wrap');
	
	hamburger.on('click',function(){
		let element 	= jQuery(this);
		
		if(element.hasClass('is-active')){
			element.removeClass('is-active');
			mobileMenu.slideUp();
		}else{
			element.addClass('is-active');
			mobileMenu.slideDown();
		}
		return false;
	});
}

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function arlo_tm_imgtosvg(){
	
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		let jQueryimg = jQuery(this);
		let imgClass = jQueryimg.attr('class');
		let imgURL	 = jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			let jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// --------------    MAGNIFIC POPUP    -----------------
// -----------------------------------------------------

function arlo_tm_magnific_popup(){
	
	"use strict";
	
	jQuery('.open-popup-link').magnificPopup({
		type:'inline',
		midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});
	
	jQuery('.gallery').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			}
		});
	});
	jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
		
	});
	jQuery('.popup-youtube').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			//type: 'iframe',
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	});
}

// -----------------------------------------------------
// --------------------    JARALLAX    -----------------
// -----------------------------------------------------

function arlo_tm_jarallax(){
	
	"use strict";
	
	jQuery('.jarallax').each(function(){
		let element			= jQuery(this);
		let	customSpeed		= element.data('speed');
		
		if(customSpeed !== "undefined" && customSpeed !== ""){
			customSpeed = customSpeed;
		}else{
			customSpeed 	= 0.5;
		}
		
		element.jarallax({
			speed: customSpeed,
			automaticResize: true
		});
	});
}

// -------------------------------------------------
// ---------    PERSONAL LIST HEIGHT    ------------
// -------------------------------------------------

function arlo_tm_list_height(){
	
	"use strict";
	
	let div			= jQuery('.about_short_contact_wrap');
	let list		= div.find('li:nth-of-type(2n)');
	
	list.after("<div class='clearfix'></div>");
}


// -------------------------------------------------
// -----------------    PORTFOLIO    ---------------
// -------------------------------------------------

// filterable 

function arlo_tm_portfolio(){

	"use strict";

	if(jQuery().isotope) {

		// Needed letiables
		let list  = jQuery('.arlo_tm_portfolio_list');
		let filter = jQuery('.arlo_tm_portfolio_filter');

		if(filter.length){
			// Isotope Filter 
			filter.find('a').on('click', function(){
				let selector = jQuery(this).attr('data-filter');
				list.isotope({ 
					filter				: selector,
					animationOptions	: {
						duration			: 750,
						easing				: 'linear',
						queue				: false
					}
				});
				return false;
			});	

			// Change active element class
			filter.find('a').on('click', function() {
				filter.find('a').removeClass('current');
				jQuery(this).addClass('current');
				return false;
			});	
		}
	}
}

function arlo_tm_projects() {
	
	"use strict";
	
	jQuery('.arlo_tm_portfolio_animation_wrap').each(function() {
		jQuery(this).on('mouseenter', function() {
			if (jQuery(this).data('title')) {
				jQuery('.arlo_tm_portfolio_titles').html(jQuery(this).data('title') + '<span class="work__cat">' + jQuery(this).data('category') + '</span>');
				jQuery('.arlo_tm_portfolio_titles').addClass('visible');
			}

			jQuery(document).on('mousemove', function(e) {
				jQuery('.arlo_tm_portfolio_titles').css({
					left: e.clientX - 10,
					top: e.clientY + 25
				});
			});
		}).on('mouseleave', function() {
			jQuery('.arlo_tm_portfolio_titles').removeClass('visible');
		});
	});
}


// -----------------------------------------------------
// ------------    ANCHOR NAVIGATION    ----------------
// -----------------------------------------------------

function arlo_tm_anchor(){
	
	"use strict";
	
	jQuery('.nav-list').onePageNav();
	
	let scrollOffset = 0;
	
	jQuery(".anchor a").on('click', function(evn){
		evn.preventDefault();
		jQuery('html,body').scrollTo(this.hash, this.hash, {
			gap: { y: -scrollOffset-85 },
			animation:{
				duration: 1500,
				easing: "easeInOutExpo"
			}
		});
		return false;	
	});
}

// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------

function arlo_tm_contact_form(){
	
	"use strict";
	
	jQuery(".contact_form #send_message").on('click', function(){
		
		let name = jQuery(".contact_form #name").val();
		let email = jQuery(".contact_form #email").val();
		let message = jQuery(".contact_form #message").val();
		let subject = jQuery(".contact_form #subject").val();
		let success = jQuery(".contact_form .returnmessage").data('success');
	
		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if(name===''||email===''||message===''){
			
			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else{
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contact.php",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_subject: subject}, function(data) {
				
				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
				
				
				if(jQuery(".contact_form .returnmessage span.contact_error").length){
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
				}else{
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}
				
				if(data===""){
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}
				
			});
		}
		return false; 
	});
}

// -----------------------------------------------------
// --------------------    OWL CAROUSEL    -------------
// -----------------------------------------------------

function arlo_tm_owl_carousel(){
	
	"use strict";
	
	let carousel = jQuery('.arlo_tm_services_wrap .owl-carousel');
  	carousel.owlCarousel({
			loop: true,
			items: 3,
			lazyLoad: true,
			margin: 30,
			autoplay: false,
			autoplayTimeout: 6000,
			smartSpeed: 2000,
			dots: true,
			nav: false,
			navSpeed: true,
			responsive:{
			0:{items:1},
			480:{items:2},
			768:{items:3},
			1040:{items:3},
			1200:{items:3},
			1600:{items:3},
			1920:{items:3}
		}
	});
	
	jQuery('.arlo_tm_services_wrap .custom_nav > a.prev').on('click', function(){
		carousel.trigger('prev.owl.carousel');
		return false;
	});
	
	jQuery('.arlo_tm_services_wrap .custom_nav > a.next').on('click', function(){
		carousel.trigger('next.owl.carousel');
		return false;
	});
	arlo_tm_imgtosvg();
	
	let carusel2 = jQuery('.arlo_tm_testimonial_wrap .owl-carousel');
  	carusel2.owlCarousel({
		loop:true,
		autoplay:false,
		autoWidth: false,
		nav: false,
		items:1,
	});
}

// -----------------------------------------------------
// --------------------    WOW JS    -------------------
// -----------------------------------------------------

 new WOW().init();

// -----------------------------------------------------
// -----------------    PROGRESS BAR    ----------------
// -----------------------------------------------------

function tdProgress(container){

	"use strict";

	container.find('.arlo_tm_progress').each(function(i) {
		let progress = jQuery(this);
		let pValue 	= parseInt(progress.data('value'), 10);
		let pColor	= progress.data('color');
		let pBarWrap = progress.find('.arlo_tm_bar_wrap');
		let pBar = progress.find('.arlo_tm_bar');
		pBar.css({width:pValue+'%', backgroundColor:pColor});
		setTimeout(function(){pBarWrap.addClass('open');},(i*500));
	});
}
jQuery('.arlo_tm_progress_wrap').each(function() {
	"use strict";
	let pWrap 			= jQuery(this);
	pWrap.waypoint({handler: function(){tdProgress(pWrap);},offset:'90%'});	
});

// -----------------------------------------------------
// -----------------    MINI BOXES    ------------------
// -----------------------------------------------------

 function arlo_tm_miniboxes(){
	 
  "use strict";
	 
  let el = jQuery('.arlo_tm_miniboxes');
	 
  if(el.length){
   el.each(function(index, element) {
         
    let child		= jQuery(element).find('.arlo_tm_minibox');
    
    child.css({height:'auto'});
    // Get an array of all element heights
    
    let W 		= jQuery(window).width();
    if(W > 480){
     let elementHeights = child.map(function() {return jQuery(this).outerHeight();}).get();
    
     // Math.max takes a letiable number of arguments
     // `apply` is equivalent to passing each height as an argument
     let maxHeight 		= Math.max.apply(null, elementHeights);
     
     // Set each height to the max height
     child.css({height:maxHeight+'px'}); 
    }
   });  
  }
 }

// -----------------------------------------------------
// --------------    ISOTOPE MASONRY    ----------------
// -----------------------------------------------------

function arlo_tm_isotope(){
	
	"use strict";
	
	jQuery('.masonry').isotope({
		itemSelector: '.masonry_item',
		masonry: {
			
		}
	});
}

// -----------------------------------------------------
// --------------------    TOTOP    --------------------
// -----------------------------------------------------

function arlo_tm_totop(){
	
	"use strict";
	
	jQuery(".arlo_tm_totop").on('click', function(e) {
		e.preventDefault();		
		jQuery("html, body").animate({ scrollTop: 0 }, 'slow');
		return false;
	});
}

function arlo_tm_totop_myhide(){
	
	"use strict";
	
	let toTop = jQuery(".arlo_tm_totop");
	if(toTop.length){
		let topOffSet 	=toTop.offset().top;
		
		if(topOffSet > 1000){
			toTop.addClass('opened');	
		}else{
			toTop.removeClass('opened');
		}
	}
}
// -------------------------------------------------
// -------------   ANIMATE TEXT  -------------------
// -------------------------------------------------

function arlo_tm_animate_text(){
	
	"use strict";
	
	let animateSpan = jQuery('.arlo_tm_animation_text_word');
	
		animateSpan.typed({
			strings: ["Music artist", "Producer", "Song Writer"],
			loop: true,
			startDelay: 1e3,
			backDelay: 2e3
		});
}

// -----------------------------------------------------
// -------------------    POPUP BLOG    ----------------
// -----------------------------------------------------

function arlo_tm_popup_blog(){
	"use strict";
	let li				= jQuery('.arlo_tm_list_wrap.blog_list .inner_list');
	let popupBox		= jQuery('#arlo_tm_popup_blog');
	let popupInner		= popupBox.find('.inner_popup');
	let closePopup		= popupBox.find('.close');
	
	li.each(function(){
		let element		= jQuery(this);
		let button		= element.find('.read_more a,.title_holder a,.link_news');
		let html		= element.html();
		let mainImage	= element.find('.news_image');
		let imgData		= mainImage.data('url');
		let title		= element.find('.title_holder h3');
		let titleHref	= element.find('.title_holder h3 a').html();
		
		mainImage.css({backgroundImage: 'url('+imgData+')'});
		button.on('click',function(){
			popupBox.addClass('opened');
			popupInner.html(html);
			mainImage = popupInner.find('.news_image');
			mainImage.css({backgroundImage: 'url('+imgData+')'});
			title = popupInner.find('.title_holder h3');
			title.html(titleHref);
			return false;
		});
	});
	closePopup.on('click',function(){
		popupBox.removeClass('opened');
		popupInner.html('');
		return false;
	});
}

// -----------------------------------------------------
// -------------    WIDGET MENU SCROLL -----------------
// -----------------------------------------------------

function arlo_tm_popupscroll(){
	
	"use strict";
	
	let H				= jQuery(window).height();
	let scrollable		= jQuery('.scrollable');
	
	let popupBox		= jQuery('.arlo_tm_popup_blog .inner_popup');
	
	popupBox.css({height:H-100});
	
	scrollable.each(function(){
		let element		= jQuery(this);
		let wH			= jQuery(window).height();
		
		element.css({height: wH-100});
		
		element.niceScroll({
			touchbehavior:false,
			cursorwidth:0,
			autohidemode:true,
			cursorborder:"0px solid #fff"
		});
	});
}

// -------------------------------------------------
// -------------  SLIDER KENBURN  ------------------
// -------------------------------------------------

function arlo_tm_kenburn_slider(){
	
	"use strict";
	
		jQuery(function() {
			jQuery('.arlo_tm_hero_header_wrap .overlay_slider').vegas({
			timer:false,	
			animation: [ 'kenburnsUp',  'kenburnsLeft', 'kenburnsRight'],
			delay:7000,

			slides: [
				{ src: 'img/hero/1.jpg' },
				{ src: 'img/hero/2.jpg' },
				{ src: 'img/hero/3.jpg' },
			]

		});
	});
}

// -------------------------------------------------
// -------------  RIPPLE  --------------------------
// -------------------------------------------------

function arlo_tm_ripple(){
	
	"use strict";
	
	jQuery('#ripple').ripples({
			resolution: 500,
			dropRadius: 20,
			perturbance: 0.04
		});
	jQuery('#ripple_testimonial').ripples({
			resolution: 500,
			dropRadius: 20,
			perturbance: 0.04
		});
}


// -----------------------------------------------------
// -----------------    SWITCHER    --------------------
// -----------------------------------------------------

function arlo_tm_switcher(){
	
	"use strict";
	
	let switcherOpener	= jQuery('.arlo_tm_resize');
	let switcherIcon = jQuery('.arlo_tm_leftpart_wrap .arlo_tm_resize i');
	let leftPart = jQuery('.arlo_tm_leftpart_wrap');
	let rightPart = jQuery('.arlo_tm_rightpart');
	
	switcherOpener.on('click',function(){
		if(switcherOpener.hasClass('opened')){
			switcherOpener.removeClass('opened');
			switcherIcon.removeClass('opened');
			leftPart.removeClass('opened');
			rightPart.removeClass('opened');
		}else{
			switcherOpener.addClass('opened');
			switcherIcon.addClass('opened');
			leftPart.addClass('opened');
			rightPart.addClass('opened');
		}
		setTimeout(function(){jQuery('#ripple').ripples('updateSize');},101);
		setTimeout(function(){jQuery('#ripple').ripples('updateSize');},201);
		setTimeout(function(){jQuery('#ripple').ripples('updateSize');},301);
		
		if(jQuery('.jarallax').length){
			jQuery('.jarallax').jarallax('destroy');
			setTimeout(function(){arlo_tm_jarallax();},300);
		
		}
		return false;
		
	});
	

}

// -----------------------------------------------------
// -------------------    COUNTER    -------------------
// -----------------------------------------------------

jQuery('.arlo_tm_counter').each(function() {

	"use strict";

	let el	= jQuery(this);
	el.waypoint({
		handler: function(){

			if(!el.hasClass('stop')){
				el.addClass('stop').countTo({
					refreshInterval: 50,
					formatter: function (value, options) {
						return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
					},	
				});
			}
		},offset:'80%'	
	});
});

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function arlo_tm_data_images(){
	
	"use strict";
	
	let data = jQuery('*[data-img-url]');
	
	data.each(function(){
		let element	= jQuery(this);
		let url	= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}

// -----------------------------------------------------
// -------------    PARALLAX ANIMATION    --------------
// -----------------------------------------------------

	function arlo_tm_about_animation(){
		
		"use strict";
		
		if ($('.parallax').length > 0) { 
		  let scene = $('.parallax').get(0);
		  let parallax = new Parallax(scene, { 
			relativeInput: true,
			onReady: function() { console.log('ready!');
		  } });
		}
	}

