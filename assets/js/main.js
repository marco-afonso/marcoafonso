$(document).ready(
	function(){
		var header = $("header");
		header.find("ul").addClass("header-menu");
		header.find("li").addClass("header-menu-item");
		var pageFrame = $(".page-frame").toArray();
		var headerLogo = header.find(".header-logo").toArray();
		var headerMenuItem = header.find(".header-menu-item").toArray();
		var openMenuButton = header.find(".open-menu-button").toArray();
		anime({
			targets: pageFrame,
			opacity: [0.3, 1],
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
			delay: anime.stagger(60, {start: 50})
		});
		anime({
			targets: ".page-body-content",
			translateY: [40, 0],
			opacity: [0, 1],
			duration: 600,
			easing: 'easeOutCubic'
		});
		anime({
			targets: '.triangle-wrapper',
			scaleY: [0,1],
			easing: 'easeInOutQuint',
			duration: 1500
		});
		setTimeout(function(){
			$(pageFrame).removeAttr('style');
			$(headerLogo).removeAttr('style');
			$(headerMenuItem).removeAttr('style');
			$(openMenuButton).removeAttr('style');

		}, 2000);
		anime({
			targets: '.anim-appear',
			translateY: [60,0],
			opacity: [0, 1],
			easing: 'easeOutQuad',
			duration: 500,
			delay: anime.stagger(200, {start: 100})
		});

		echo.init({offset: 100, debounce: false}); // init lazy loading img
	});

function toggleMenu(){
	var ul = $(".header-menu");
	var li = $(ul).find("li");
	if(!ul.hasClass("opened")){
		ul.addClass("opened");
		anime({
			targets: ul.toArray(),
			translateY: [-100, 0],
			easing: 'easeOutBack',
			opacity: [0, 1],
			duration: 200
		});
		anime({
			targets: li.toArray(),
			scale: [0.5,1],
			duration: 250,
			easing: 'easeOutBack',
			delay: anime.stagger(40, {start: 5})

		});
	}else{
		anime({
			targets: ul.toArray(),
			translateY: [0, -100],
			easing: 'easeInBack',
			opacity: [1, 0],
			duration: 80,
			changeComplete: function(anim){
				ul.removeClass("opened");
				ul.css({opacity: 1});
				anime.set(ul.toArray(), {translateY: 0});
				
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
}ß

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
