$(document).ready(function () {
	/* On hover - remove the hidden class and blurred_image to show the 'The Real Me' 
	   text and clear profile picture*/
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

	/* TODO
		1. On hover give the thumbnail a red/blue overlay.
		2. Show the skills used in it in a circle around the picture 
		with either a red/blue border.*/
});