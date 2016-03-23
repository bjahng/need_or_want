$(document).ready(function() {

//mark items as done
	$('.list ul').on('click', 'li', function() {
		$(this).toggleClass('linethrough');
		$(this).children('.box').toggleClass('done');
	});

//delete items
	$('.list ul').on('click', '.delete', function() {
		$(this).parent().remove();
	});

});