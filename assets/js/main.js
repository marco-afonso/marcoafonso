$(document).ready(
	function(){
		$("header").find("ul").addClass("header-menu");
		$("header").find("li").addClass("header-menu-item");
		anime({
			targets: ".header-menu-item, .header-logo",
			translateY: [-20, 0],
			opacity: [0, 1],
			duration: 800,
			delay: anime.stagger(100)
		});
		anime({
			targets: ".page-body",
			translateY: [100, 0],
			opacity: [0, 1],
			duration: 600,
			easing: 'easeOutCubic',
			delay: anime.stagger(100)
		});
	}
);

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