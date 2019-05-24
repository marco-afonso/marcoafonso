$(document).ready(
	function(){

		var anim = anime({
			targets: '.page-frame',
			opacity: [0, 1],
			duration: 600,
			delay: 0,
			easing: 'easeOutQuad'


		});

		$("header").find("ul").addClass("header-menu");
		$("header").find("li").addClass("header-menu-item");
		anime({
			targets: ".header-menu-item, .header-logo, .open-menu-button",
			translateY: [-20, 0],
			opacity: [0, 1],
			duration: 800,
			delay: anime.stagger(100)
		});
		anime({
			targets: ".page-body-content",
			translateY: [100, 0],
			opacity: [0, 1],
			duration: 600,
			easing: 'easeOutCubic',
			delay: anime.stagger(100)
		});

		anime({
			targets: '.triangle-wrapper',
			scaleY: [0,1],
			easing: 'easeOutCubic',
			duration: 500
		});
		setTimeout(function(){
			anime.remove('.page-frame, .header-menu-item, .header-logo, .open-menu-button');
			$('.page-frame').removeAttr('style');
			$('.header-logo').removeAttr('style');
			$('.header-menu-item').removeAttr('style');
			$('.open-menu-button').removeAttr('style');

		}, 1000);
	});

function toggleMenu(){
	var ul = $(".header-menu");
	if(!ul.hasClass("opened")){

		ul.addClass("opened");
		anime({
			targets: ul[0],
			translateY: [-100, 0],
			easing: 'easeOutElastic',
			opacity: [0, 1],
			duration: 300

		});
	}else{
		anime({
			targets: ul[0],
			translateY: [0, -100],
			easing: 'easeInQuad',
			opacity: [1, 0],
			duration: 100,
			changeComplete: function(anim){
				ul.removeClass("opened");
				ul.css({opacity: 1});
				anime.set(ul[0], {translateY: 0});
				
			}

		});
	}
}