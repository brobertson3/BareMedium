$(document).ready(function () {
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
			$(this).parent().children('.thumbnail').css('backgroundColor', '#ff0000');
		} else { //odd
			$(this).parent().children('.thumbnail').css('backgroundColor', '#0000ff');
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
		$(this).css("color", "red");
	}, function () {
		// $(this).removeClass('fa-4x');
		// $(this).addClass('fa-2x');
		$(this).css("color", "inherit");
	});

	/* On hover, show the pulsing arrows, else hide the arrows */
	$('.thumbnail_container').hover(function (event) {
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

	/* TODO On click of #read_more we need to pop up a dialog box of some sort
	   to display the rest of the contents of the description. */
});	