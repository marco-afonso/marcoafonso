$(document).ready(
	function(){
		$("header").find("ul").addClass("closed");
	}
);

function toggleMenu(){
	var ul = $("header").find("ul");
	if(ul.hasClass("closed")){
		ul.removeClass("closed");
	}else{
		ul.addClass("closed");
	}
}