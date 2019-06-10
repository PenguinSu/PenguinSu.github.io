$(function(){
	var screenHeight = $(window).height(); // current viewpoint height
	// Cover full view
	$("#home").css("height", screenHeight);

	// Set each section same height as window view
	$("section").css("min-height", screenHeight);

	// Change nav text color when not in home section
	$(document).scroll(() => {
		var topAbout = $("#about").offset().top; // offset from top to about section
		var topIntroH1 = $(".intro-text h1").offset().top; // offset from top to home section h1 element
		var topIntroH2 = $(".intro-text h2").offset().top; // offset from top to home section h2 element
		var topNav = $("nav").offset().top; // offset from top to nav element
		var scrollPos = $(document).scrollTop();
		
		// Change nav bar
		if(scrollPos >= topAbout) {
			// Change color
			$("nav a").css("color","hsl(266, 90%, 60%)");
			// Change nav bar style
			$("nav").addClass("nav-banner");
		} else {
			// Reset nav bar style
			$("nav").removeClass("nav-banner");
			// Reset color
			$("nav a").css("color", "hsl(60, 90%, 85%)");
		}

		// Hide intro text
		if((topIntroH1 - topNav) < 30) {
			$(".intro-text h1").stop().animate({opacity: '0'}, 10);
		} else {
			$(".intro-text h1").stop().animate({opacity: '1'}, 50);
		}

		if((topIntroH2 - topNav) < 50) {
			$(".intro-text h2").stop().animate({opacity: '0'}, 10);
		} else {
			$(".intro-text h2").stop().animate({opacity: '1'}, 50);
		}
	});

	// Change active nav element
	$("nav a").click((e) => {
		// check if has active class
		if($(e.target).hasClass("active") == false) {
			// add class active
			$(e.target).addClass("active");
			// remove the former active class
			$(e.target).siblings().removeClass("active");
		}
	});
});

