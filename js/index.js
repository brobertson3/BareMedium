$(document).ready(function () {

	// Initially check browser width for sizing of contact links
	checkBrowserWidth();

	/* On hover - remove the hidden class and blurred_image to show the 'The Real Me' 
	   text and clear profile picture. */
	$('.main_image_div').hover(function () {
		$('.main_image').removeClass('blurred_image');
		$('.real_me').removeClass('hidden');
	}, function () {
		$('.main_image').addClass('blurred_image');
		$('.real_me').addClass('hidden');
	});

	/* onClick of a nav item change the active tag to that item */
	$('.my_nav li a').click(function () {
		$('.my_nav li.active').removeClass('active');
		$('.my_nav li.active .sr-only').remove();
		$(this).parent().addClass('active');
		$(this).append('<span class="sr-only">(current)</span>');
	});

	/*	1. On hover give the thumbnail a red/blue overlay.
		2. Show the skills used in the picture with either a red/blue border. */
	$('div.thumbnail, div.project_skill').hover(function (event) {
		// $(this).children().removeClass('hidden');
		/* Kind of repetitive but ensures that it's the target that triggered
		   event. */
		/* This shows the skills on top of the div. */
		$(this).parent().children('.project_skill').removeClass('hidden');

		/* Find the index of the chosen element based on the grandparent (outermost div). */
		var index = $(this).parent().parent().index();
		/* If the index is even, then make the background red.
		 * If odd then make the background blue.
		 * If upcoming work don't change the background color. */
		if ($(this).parent().hasClass('dashed_border')) { 
			// Do nothing for upcoming work
		} else if(index % 2 === 0) { //even
			$(this).parent().children('.thumbnail').css('backgroundColor', 'rgb(196, 0, 16)');
		} else { //odd
			$(this).parent().children('.thumbnail').css('backgroundColor', 'rgb(32, 72, 149)');
		}
	}, function () {
		/* Add the hidden class back so that the skills are hidden when not hovering. */
		$(this).parent().children('.project_skill').addClass('hidden');
		$(this).parent().children('.thumbnail').css('backgroundColor', 'transparent');
	});

	/* Change the size and color of the icons on hover. */
	$('.fa.fa-fw').hover(function () {
		// $(this).removeClass('fa-2x');
		// $(this).addClass('fa-4x');
		$(this).css("color", "rgb(196, 0, 16)");
	}, function () {
		// $(this).removeClass('fa-4x');
		// $(this).addClass('fa-2x');
		$(this).css("color", "inherit");

	});

	function checkBrowserWidth() {
		if ($(window).width() >= 768) {
			$('.fa.fa-fw').addClass('fa-3x');
		} else {
			$('.fa.fa-fw').removeClass('fa-3x');
		}
	}

	window.addEventListener("resize", checkBrowserWidth);

	/* On hover, show the pulsing arrows, else hide the arrows */
	$('.thumbnail_container').hover(function(event) {
		if ($(this).hasClass("rethree_image")) {
			$('.thumbnail_title.rethree').siblings().removeClass("hidden");
		} else if ($(this).hasClass("baremedium_image")) {
			$('.thumbnail_title.baremedium').siblings().removeClass("hidden");
		}
	}, function (event) {
		if($(this).hasClass("rethree_image")) {
			$('.thumbnail_title.rethree').siblings().addClass("hidden");
		} else if ($(this).hasClass("baremedium_image")) {
			$('.thumbnail_title.baremedium').siblings().addClass("hidden");
		}
	});

	/* Change the text to reflect that the user submitted a message */
	$('#contact_form').submit(function () {
		$('#contact_greeting').replaceWith('<p id="contact_thanks">Thanks for your request. Make another one!</p>');
		$(this)[0].reset();
		$(this)[1].reset();
		$(this)[2].reset();
	});

	$(window).on('scroll', function () {
    	var scrollTop        = $(window).scrollTop(),     // Number of pixels hidden from view above scrollable area
        	skillsOffset     = $('#skills').offset().top, // Current coordinates of element from top of document
        	homeOffset       = $('#home').offset().top,
        	aboutOffset      = $('#about_me').offset().top,
        	portfolioOffset  = $('#portfolio').offset().top,
        	contactOffset    = $('#contact_me').offset().top,
        	windowHeight     = $(window).height(),        // Height of the current viewable window
        	skillsHeight     = $('.inner_skills_container').height(),  // Height of the element
        	skillsDistanceBottom  = windowHeight - (skillsOffset - scrollTop) - skillsHeight, // Distance of bottom of elment from bottom of window
        	skillsDistanceTop     = skillsOffset - scrollTop - 20,
        	homeDistanceTop       = homeOffset - scrollTop - 20,
        	aboutDistanceTop      = aboutOffset - scrollTop - 20,
        	portfolioDistanceTop  = portfolioOffset - scrollTop - 20,
        	contactDistanceTop    = contactOffset - scrollTop - 20;

        
        //console.log(distance);

        var navItems = $('#nav_home, #nav_about, #nav_blog, #nav_skills, #nav_portfolio, #nav_contact');
        
        if (skillsDistanceBottom >= 0) {
        	$('.inner_skills_container').addClass('fade_in').css('opacity', '1');
        } 

        if (homeDistanceTop <= 0 && aboutDistanceTop >= 0) {
        	navItems.removeClass('active');
        	$('#nav_home').addClass('active');
        } else if (aboutDistanceTop <= 0 && skillsDistanceTop >= 0) {
        	navItems.removeClass('active');
        	$('#nav_about').addClass('active');
        } else if (skillsDistanceTop <= 0 && portfolioDistanceTop >= 0) {
        	navItems.removeClass('active');
        	$('#nav_skills').addClass('active');
        } else if (portfolioDistanceTop <= 0 && contactDistanceTop >= 0) {
        	navItems.removeClass('active');
        	$('#nav_portfolio').addClass('active');
        } else if (contactDistanceTop <= 0) {
        	navItems.removeClass('active');
        	$('#nav_contact').addClass('active');
        }
	});

	var skillsList = {
		first: "html",
		second: "css",
		third: "javascript",
		fourth: "bootstrap",
		fifth: "flexbox",
		sixth: "wordpress"
	}

	$('.skill_shell').hover(function(event) {
		// var x;
		// for (x in skillList) {
		// 	if ("#" + skillsList.x === $(this).find('.skill_banner').('#html')
		// }
		if ($(this).find('.skill_banner').is('#' + skillsList.first)) {
			
			console.log("html");
			setTimeout(function() {
				$('#' + skillsList.first).text("I");
			}, 0);
			setTimeout(function() {
				$('#' + skillsList.first).text("Will");
			}, 1000);
			setTimeout(function() {
				$('#' + skillsList.first).text("Change");
			}, 2000);
			setTimeout(function() {
				$('#' + skillsList.first).text("The");
			}, 3000);
			setTimeout(function() {
				$('#' + skillsList.first).text("World!");
			}, 4000);

		} else if ($(this).find('.skill_banner').is('#' + skillsList.second)) {
			console.log("css");
			$("#blackout").addClass('blackout');
			$(this).find('.skill_banner').addClass('css_trick');
		} else if ($(this).find('.skill_banner').is('#' + skillsList.third)) {
			console.log("javascript");
		} else if ($(this).find('.skill_banner').is('#' + skillsList.fourth)) {
			console.log("bootstrap");
		} else if ($(this).find('.skill_banner').is('#' + skillsList.fifth)) {
			console.log("flexbox");
		} else if ($(this).find('.skill_banner').is('#' + skillsList.sixth)) {
			console.log("wordpress");
		}
	}, function(event) {
		// DO something to bring back to normal
	});

});	











