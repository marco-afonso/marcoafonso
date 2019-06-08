---
---
'use strict'

{% include js/anime.min.js %}
{% include js/echo.min.js %}

//helper functions
function c(className){
	return document.getElementsByClassName(className);
}
function fC(className, obj){
	return obj.getElementsByClassName(className);
}
function t(tagName){
	return document.getElementsByTagName(tagName);
}
function fT(tagName, obj){
	return obj.getElementsByTagName(tagName);
}
function forEach(arr, func){
	for (var i = 0, len = arr.length; i < len; i++) {
	  func(arr[i]);
	}
}




document.addEventListener("DOMContentLoaded", function() {
		var header = t('header')[0];
		var pageFrame = c("page-frame")[0];
		var pageContent = fC("page-body-content", pageFrame)[0];
		var headerLogo = fC('header-logo', header);
		var headerMenuItem = fT('li', header);
		var openMenuButton = fC('open-menu-button', header)[0];

		var coverPageFrame = c('cover-page-frame');
		var startTime = 100;
		if(coverPageFrame.length > 0){
			startTime = 1000;
		}

		anime({
			targets: pageFrame,
			opacity: [0, 1],
			duration: 200,
			delay: 0,
			easing: 'easeOutQuad'
		});
		anime({
			targets: [headerLogo, headerMenuItem, openMenuButton],
			translateY: [-20, 0],
			opacity: [0, 1],
			duration: 600,
			easing: 'easeOutBack',
			delay: anime.stagger(60, {start: startTime})
		});
		anime({
			targets: pageContent,
			translateY: [40, 0],
			opacity: [0, 1],
			duration: 600,
			easing: 'easeOutCubic'
		});
		anime({
			targets: '.anim-appear',
			translateY: [60,0],
			opacity: [0, 1],
			easing: 'easeOutQuad',
			duration: 500,
			delay: anime.stagger(200, {start: startTime})
		});
		anime({
			targets: '.triangle-wrapper',
			scaleY: [0,1],
			easing: 'easeInOutQuint',
			duration: 1500
		});


		echo.init({offset: 100, debounce: false}); // init lazy loading img
	});

function toggleMenu(){
	var ul = c("header-menu")[0];
	var li = fC('li', ul);
	if(!ul.classList.contains("opened")){
		ul.classList.add("opened");
		anime({
			targets: ul,
			translateY: [-100, 0],
			easing: 'easeOutBack',
			opacity: [0, 1],
			duration: 200
		});
		anime({
			targets: li,
			scale: [0.5,1],
			duration: 250,
			easing: 'easeOutBack',
			delay: anime.stagger(40, {start: 5})

		});
	}else{
		anime({
			targets: ul,
			translateY: [0, -100],
			easing: 'easeInBack',
			opacity: [1, 0],
			duration: 80,
			changeComplete: function(anim){
				ul.classList.remove("opened");
				anime.set(ul, {opacity: 1});
				anime.set(ul, {translateY: 0});
				
			}

		});
	}
}

// Set to the same value as the web property used on the site
var gaProperty = 'UA-XXXX-Y';

// Disable tracking if the opt-out cookie exists.
var disableStr = 'ga-disable-' + gaProperty;
if (document.cookie.indexOf(disableStr + '=true') > -1) {
  window[disableStr] = true;
}

// Opt-out function
function gaOptout() {
  document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
  window[disableStr] = true;
  alert("You have successfully opted out of Google Analytics on the website.");
}
function gaOptin() {
  document.cookie = disableStr + '=false; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
  window[disableStr] = true;
  alert("You have successfully opted in again of Google Analytics on the website.");
}

