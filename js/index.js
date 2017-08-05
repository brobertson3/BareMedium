$(document).ready(function () {

	// Initially check browser width for sizing of contact links
	checkBrowserWidth();
	contactSlideEffect();
	/* On hover - remove the hidden class and blurred_image to show the 'The Real Me' 
	   text and clear profile picture. */
	$('.main_image_div').hover(function () {
		// $('.main_image').removeClass('blurred_image');
		$('.main_image').addClass('clear_image');
		setTimeout(function() {
			$('.real_me').removeClass('hidden');
		}, 700);
	}, function () {
		// $('.main_image').addClass('blurred_image');
		$('.main_image').removeClass('clear_image');
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

	// /* Change the size and color of the icons on hover. */
	// $('.fa.fa-fw').hover(function () {
	// 	// $(this).removeClass('fa-2x');
	// 	// $(this).addClass('fa-4x');
	// 	$(this).css("color", "rgb(196, 0, 16)");
	// }, function () {
	// 	// $(this).removeClass('fa-4x');
	// 	// $(this).addClass('fa-2x');
	// 	$(this).css("color", "inherit");

	// });

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

	function contactSlideEffect() {
		$('.contact_links ul a').css('opacity', 0);
		$('#facebook').css({right: 1000 + "px"});
		$('#linkedin').css({right: 1000 + "px"});
		$('#twitter').css({right: 1000 + "px"});
		$('#tumblr').css({right: 1000 + "px"});
		$('#github').css({right: 1000 + "px"});
	}

	$(window).on('scroll', function () {
    	var scrollTop        = $(window).scrollTop(),     // Number of pixels hidden from view above scrollable area
        	skillsOffset     = $('#skills').offset().top, // Current coordinates of element from top of document
        	homeOffset       = $('#home').offset().top,
        	aboutOffset      = $('#about_me').offset().top,
        	portfolioOffset  = $('#portfolio').offset().top,
        	contactOffset    = $('#contact_me').offset().top,
        	windowHeight     = $(window).height(),        // Height of the current viewable window
        	documentHeight   = $(document).height(), // Height of the entire document
        	skillsHeight     = $('.inner_skills_container').height(),  // Height of the element
        	aboutHeight      = $('.inner_about_container').height(),
        	portfolioHeight  = $('.inner_portfolio_container').height(),
        	contactHeight    = $('.inner_contact_container').height(),
        	skillsDistanceBottom    = windowHeight - (skillsOffset - scrollTop) - skillsHeight, // Distance of bottom of elment from bottom of window
        	aboutDistanceBottom     = windowHeight - (aboutOffset - scrollTop) - skillsHeight, // Distance of bottom of elment from bottom of window
        	portfolioDistanceBottom = windowHeight - (portfolioOffset - scrollTop) - skillsHeight, // Distance of bottom of elment from bottom of window
        	contactDistanceBottom   = windowHeight - (contactOffset - scrollTop) - skillsHeight, // Distance of bottom of elment from bottom of window
        	skillsDistanceTop       = skillsOffset - scrollTop - 20,
        	homeDistanceTop         = homeOffset - scrollTop - 20,
        	aboutDistanceTop        = aboutOffset - scrollTop - 20,
        	portfolioDistanceTop    = portfolioOffset - scrollTop - 20,
        	contactDistanceTop      = contactOffset - scrollTop - 20,
        	isBottom                = function() {
        		if ((windowHeight + scrollTop) >= documentHeight - 70)
        			return true;
        		else 
        			false;
        	};
        
        // console.log(contactOffset);
        // console.log(contactDistanceTop);
        // console.log(skillsDistanceBottom);
        // console.log(contactHeight);

        var navItems = $('#nav_home, #nav_about, #nav_blog, #nav_skills, #nav_portfolio, #nav_contact');
        
        if (aboutDistanceBottom >= 0) {
        	$('.inner_about_container').addClass('fade_in');
        }

        if (skillsDistanceBottom >= 0) {
        	$('.inner_skills_container').addClass('fade_in');
        }

        if (portfolioDistanceBottom >= 0) {
        	$('.inner_portfolio_container').addClass('fade_in');
        }

        if (contactDistanceBottom >= 0) {
        	$('.inner_contact_container').addClass('fade_in');
        }

        if (isBottom()) {
        	$('.contact_links ul a').css('opacity', 1);
        	$('#facebook').animate({right: 0 + "px"});

        	setTimeout(function() {
        		$('#linkedin').animate({right: 0 + "px"});	
        	}, 175);

        	setTimeout(function() {
        		$('#twitter').animate({right: 0 + "px"});	
        	}, 350);

        	setTimeout(function() {
        		$('#tumblr').animate({right: 0 + "px"});	
        	}, 525);

        	setTimeout(function() {
        		$('#github').animate({right: 0 + "px"});	
        	}, 700);
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
	// Used to make the CSS skill animation only run once
	var runOnce = false;
	// Used to halt all other animations in the skill section from running
	var youShallNotRun = false;

	$('.border_skill').hover(function(event) {
		if(!youShallNotRun) {
			// var original = $(this).find('.skill_banner').text();
			$(this).css('cursor', 'pointer');
			// $(this).css({backgroundColor: "red"});
			// console.log("this is the original:" + original);
			// $(this).data('original', original);
			// setTimeout(function() {
				// $(this).find('.skill_banner').text("Click!");
			// }, 1000);
			// $(this).find('.skill_banner').text("Click!");
		} else {
			$(this).css('cursor', 'not-allowed');
		}
		
	}, function(event) {
		if(!youShallNotRun) {	
			// $(this).find('.skill_banner').text($(this).data('original'));
			$(this).css({backgroundColor: "inherit"});
		}
	});
var animation_target;
	$('.border_skill').click(function(event) {
		// var x;
		// for (x in skillList) {
		// 	if ("#" + skillsList.x === $(this).find('.skill_banner').('#html')
		// }
		if ($(this).find('.skill_banner').is('#' + skillsList.first) && (!youShallNotRun)) {
			
			console.log("html");
			youShallNotRun = true;

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
			setTimeout(function() {
				$('#' + skillsList.first).text("HTML5");
				youShallNotRun = false;
			}, 5000);

		} else if ($(this).find('.skill_banner').is('#' + skillsList.second) && (!youShallNotRun)) {
			console.log("css");

			if (!runOnce) {
				$('#' + skillsList.second).text("CSS3");
				youShallNotRun = true;
				runOnce = true;
				$(this).find('.skill_banner').addClass('css_trick');
				setTimeout(function() {
					$(this).find('.skill_banner').removeClass('css_trick');
					youShallNotRun = false;
				}, 2000);
			} else {
				$('#css').popover({
					content: "Sorry, I only have enough chakra do that trick once.",
					placement: "bottom",
				});
				setTimeout(function() {
					$('#css').popover("show");
				}, 200);

				setTimeout(function() {
					$('#css').popover("destroy");
				}, 2200);
			}
			

		} else if ($(this).find('.skill_banner').is('#' + skillsList.third) && (!youShallNotRun)) {
			
			console.log("javascript");
			youShallNotRun = true;
			$(this).find('#javascript').html('<span id="java">Java</span><span id="script">Script</span>');
			
			// console.log($(this).find("#javascript").html());
			var banner = $(this).children('.skill_banner');
			var i = 0;
			// var rect = banner.getBoundingClientRect();
			$(this).css('border', 'none');
			// var banner = $(this).children('.skill_banner');
			// banner.text("JavaScript");
			// var move;
			var js_banner_y = banner.offset().top;
			var wordpress_banner_y = $('#popover_wordpress').parent().offset().top;
			var circle_height = $('.skill_banner').css('line-height');
			circle_height = parseInt(circle_height, 10);
			console.log("banner: " + js_banner_y + " wordpress: " + wordpress_banner_y + " circle: " + circle_height);
			move = wordpress_banner_y - js_banner_y - (circle_height/2) - 10;
			console.log(move);

			$(this).animate({top: move + 'px'}, "slow", function() {
				
				$(this).find('#javascript').addClass('spin');
				setTimeout(function() {
					if ($(window).width() >= 590) {
						animation_target = "#wordpress";
					} else {
						animation_target = "#flexbox";
					}
					wordpress_animation(animation_target);
				}, 700);
				// $(this).find('#javascript').animate({opacity: "1"}, 0);
			});

			// $(this).find('#javascript').animate({opacity: "0"}, 2000);
			// console.log($(this).find('#java').attr('id'));
			// $(this).find('#javascript').css("display","none");
			// $('#java').css({'position': 'absolute'});
			// console.log($('#java').css("position"));

			// $(this).find('#javascript').addClass('spin');
			// setTimeout(function() {
				// $(this).find('#javascript').animate({opacity: "0"});
			// }, 1000);
			
			// $('#java').css({"transform": "rotate(120deg)"});
			// $(this).find('#java').css({"transform": "rotate(120deg)"});

		} else if ($(this).find('.skill_banner').is('#' + skillsList.fourth)) {
			console.log("bootstrap");
		} else if ($(this).find('.skill_banner').is('#' + skillsList.fifth)) {
			console.log("flexbox");
		} else if ($(this).find('.skill_banner').is('#' + skillsList.sixth)) {
			console.log("wordpress");
		}
	});
	// }, function(event) {
	// 	// DO something to bring back to normal
	// 	if ($(this).find('.skill_banner').is('#' + skillsList.first)) {
			
	// 		console.log("html");
			
	// 	} else if ($(this).find('.skill_banner').is('#' + skillsList.second)) {
	// 		console.log("css");
			
	// 	} else if ($(this).find('.skill_banner').is('#' + skillsList.third)) {
	// 		console.log("javascript");
	// 	} else if ($(this).find('.skill_banner').is('#' + skillsList.fourth)) {
	// 		console.log("bootstrap");
	// 	} else if ($(this).find('.skill_banner').is('#' + skillsList.fifth)) {
	// 		console.log("flexbox");
	// 	} else if ($(this).find('.skill_banner').is('#' + skillsList.sixth)) {
	// 		console.log("wordpress");
	// 	}
	// });
var move;
	function javascript_animation() {
		// 1. Remove popover from the screen.
		$(animation_target).popover("destroy");
		var animation_size = $('#popover_wordpress').height() - 40;
		// 2. Move the JavaScript circle back to it's original place on the page (still hidden)
		// $('#javascript').parent().animate({top: 0, width: 100 + "px"}, 1000, function() {
			// This will be changed..right now just showing that the circle is where it should be
			// setTimeout(function() {
			// 	$('#javascript').parent().css('border', '2px solid rgb(32, 72, 149)');	
			// }, 500);

			// // 3. Put image of Extra Life where the JavaScript should be
			// $('#javascript').html('<img src="img/ExtraLife.svg" height="10" width="10">');
			// $('#javascript').removeClass('spin');

			// // 4. Blink in the Javascript along with the border
			// setTimeout(function() {
			// 	$('#javascript').parent().html('<span class="skill_banner" id="javascript"><span id="java">Java</span><span id="script">Script</span></span>');
			// 	$('#javascript').parent().addClass('skill_blink');	
			// 	$('#javascript').parent().css('border', '2px solid rgb(32, 72, 149)');				
			// }, 1500);

			// // 5. Make sure that youShallNotRun is set back to false
			// setTimeout(function() {
			// 	$('#javascript').parent().removeClass('skill_blink');
			// 	youShallNotRun = false;
			// }, 2200);
			

		// });

		// 3. Put image of Extra Life where the JavaScript should be
		$('#javascript').html('<img id="extra_life_image" src="img/ExtraLife.svg" height="10" width="10">');

		$('#javascript').parent().animate({top: 0}, 1000);
		$('#extra_life_image').animate({width: animation_size + "px", height: animation_size + "px"}, 1000);
		
		
			$('#javascript').removeClass('spin');

			// 4. Blink in the Javascript along with the border
			setTimeout(function() {
				$('#javascript').parent().html('<span class="skill_banner" id="javascript"><span id="java">Java</span><span id="script">Script</span></span>');
				$('#javascript').parent().addClass('skill_blink');	
				$('#javascript').parent().css('border', '2px solid rgb(32, 72, 149)');				
			}, 1500);

			// 5. Make sure that youShallNotRun is set back to false
			setTimeout(function() {
				$('#javascript').parent().removeClass('skill_blink');
				youShallNotRun = false;
			}, 2200);
	}



	function wordpress_animation() {
		$(animation_target).popover({
			content: "Hey, looks like your code broke!",
			placement: "top"
		});
		setTimeout(function() {
			$(animation_target).popover("show");
		}, 500);

		setTimeout(function() {
			$(animation_target).popover("destroy");
		}, 2500);
	
		// setTimeout(function() {
		// 	// $('#popover_wordpress').popover("destroy");
		// 	$('#wordpress').popover({
		// 		content: "Luckily, I can fix it!",
		// 		placement: "top"
		// 	});
		// 	$('#wordpress').popover("show");
		// }, 3000);

		// setTimeout(function() {
		// 	$('#wordpress').popover("destroy");
		// }, 5000);
	
		setTimeout(function() {
			// $('#popover_wordpress').popover("destroy");
			$(animation_target).popover({
				content: "Do you want me to bring it back?",
				placement: "top",
				template: '<div class="popover"><div class="arrow"></div>' + 
				      '<div class="popover-content"></div>' +
				      '<div class="popover-footer"><button type="button" id="confirm_wordpress" class="btn btn-primary wordpress_button">' +
				      '<i class="fa fa-check"></i></button>&nbsp;'+
				      '<button type="button" id="deny_wordpress" class="btn btn-danger wordpress_button">' +
				      '<i class="fa fa-fw fa-times"></i></button>&nbsp;'+
				      '</div>',
			});
			$(animation_target).popover("show");
		}, 3000);
	}

	$('body').on("click", "#confirm_wordpress", javascript_animation);

	$('body').on("click", "#deny_wordpress", function(event) {
		// console.log("Denied Wordpress");

		/*
		 *  TODO: 1. Popover that says "Well, I'll do it anyway"
		 */
		$(animation_target).popover("destroy");
		
		setTimeout(function() {
			$(animation_target).popover({
				content: "Sorry, I can't let a good skill go to waste.",
				placement: "top",	
			});

			$(animation_target).popover("show");
		}, 500);
		

		setTimeout(function() {
			$(animation_target).popover("destroy");
			javascript_animation(animation_target);
		}, 2500);

	});

});	











