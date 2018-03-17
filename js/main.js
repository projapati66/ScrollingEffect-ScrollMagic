/**
 * main.js
 * http://www.designtheway.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2018, DesignTheWay
 * http://www.designtheway.com
 */

$(document).ready(function(){

	TweenMax.set(['.anim-00 img, .phone-screen_anim-02'], {autoAlpha: 1});
	

	function getMobileSlide01Tl(){
		var mobileSlide01Tl = new TimelineMax();

		mobileSlide01Tl
			.fromTo('.anim-02_trees-left', 1, {x: '-=50', autoAlpha: 0}, {x:'0', autoAlpha: 1, ease:Linear.easeNone}, '0')
			.fromTo('.anim-02_trees-right', 1, {x: '+=50', autoAlpha: 0}, {x:'0', autoAlpha: 1, ease:Linear.easeNone}, '0')
			.fromTo('.anim-02_person-right2', 1, {x: '+=50', autoAlpha: 0}, {x:'0', autoAlpha: 1, ease:Linear.easeNone}, '0')
			.fromTo('.anim-02_icon', 1, {y: '-=100', autoAlpha: 0}, {y:'0', autoAlpha: 1, ease:Linear.easeNone}, '0')
			.fromTo('.anim-02_cloud', 1, {x: '-=100', autoAlpha: 0}, {x:'0', autoAlpha: 1, ease:Linear.easeNone}, '0');

		return mobileSlide01Tl;

	}

	function getMobileSlide02Tl(){
		var mobileSlide02Tl = new TimelineMax();

		mobileSlide02Tl
			.fromTo('.phone-screen_anim-03', 2, {y: '+=38', autoAlpha: 0}, {y:'0', autoAlpha: 1, ease:Linear.easeNone})
			.add('screen2-in')
			.fromTo('.anim-03_ground-left', 1, {x: '-=50', autoAlpha: 0}, {x:'0', autoAlpha: 1, ease:Linear.easeNone}, 'screen2-in-=1')
			.fromTo('.anim-03_ground-right', 1, {x: '+=50', autoAlpha: 0}, {x:'0', autoAlpha: 1, ease:Linear.easeNone}, 'screen2-in-=1')
			.fromTo('.anim-03_icon-left', 1, {y: '-=50', autoAlpha: 0}, {y:'0', autoAlpha: 1, ease:Linear.easeNone}, 'screen2-in-=1')
			.fromTo('.anim-03_window-left', 1, {autoAlpha: 0}, {autoAlpha: 1, ease:Linear.easeNone}, 'screen2-in-=1')
			.fromTo('.anim-03_window-right', 1, {autoAlpha: 0}, {autoAlpha: 1, ease:Linear.easeNone}, 'screen2-in-=1')
			.fromTo('.anim-03_plant', 1, {y: '-=50', autoAlpha: 0}, {y:'0', autoAlpha: 1, ease:Linear.easeNone}, 'screen2-in-=1');

		return mobileSlide02Tl;

	}	
	

	function getMobileSlide03Tl(){
		var mobileSlide03Tl = new TimelineMax();

		mobileSlide03Tl
			
			.fromTo('.phone-screen_anim-04', 1, {y: '+=38', autoAlpha: 0}, {y:'0', autoAlpha: 1, ease:Linear.easeNone})
			.add('screen3-in')
			.fromTo('.anim-04_city-right', 1, {x: '+=50', autoAlpha: 0}, {x:'0', autoAlpha: 1, ease:Linear.easeNone}, 'screen3-in-=1')
			.fromTo('.anim-04_city-left', 1, {x: '-=50', autoAlpha: 0}, {x:'0', autoAlpha: 1, ease:Linear.easeNone}, 'screen3-in-=1')
			.fromTo('.anim-04_icon', 1, {y: '-=60', autoAlpha: 0}, {x:'0', autoAlpha: 1, ease:Linear.easeNone}, 'screen3-in-=1')
			.fromTo('.anim-04_icon2', 1, {y: '-=60', autoAlpha: 0}, {y:'0', autoAlpha: 1, ease:Linear.easeNone}, 'screen3-in-=1')
			.fromTo('.anim-04_plant', 1, {y: '-=50', autoAlpha: 0}, {y:'0', autoAlpha: 1, ease:Linear.easeNone}, 'screen3-in-=1',);

		return mobileSlide03Tl;

	}	
	
	enquire.register("screen and (min-width: 769px)", {

		match: function(){

			initScrollMagic();

		},
		unmatch: function(){

			controller.destroy(true);
			$('*').removeAttr('style');

		}

	})

	function initScrollMagic(){

		// Init ScrollMagic
		controller = new ScrollMagic.Controller();


		// Pin Mobile Screen
		var pinMobile = new ScrollMagic.Scene({
			triggerElement: '#phone-floater-container',
			triggerHook: 0,
			duration: '1600'
		})
		.setPin('#phone-floater-container .pin-wrapper', {pushFollowers: false})
		// .addIndicators()
		.addTo(controller);

		// Pin Mobile Scene 1
		var pinScene01 = new ScrollMagic.Scene({
			triggerElement: '#phone-floater-container',
			triggerHook: 0.4,
			duration: '150'
		})
		.setTween(getMobileSlide01Tl())
		// .addIndicators()
		.addTo(controller);

		// Pin Mobile Scene 2
		var pinScene02 = new ScrollMagic.Scene({
			triggerElement: '#phone-floater-container',
			triggerHook: 0,
			offset: 450,
			duration: '200'
		})
		.setTween(getMobileSlide02Tl())
		// .addIndicators()
		.addTo(controller);


		// Pin Mobile Scene 3
		var pinScene03 = new ScrollMagic.Scene({
			triggerElement: '#phone-floater-container',
			triggerHook: 0,
			offset: 1250,
			duration: '200'
		})
		.setTween(getMobileSlide03Tl())
		// .addIndicators()
		.addTo(controller);

	}


});
