$(document).ready(function() {

//add need items
	$('.needbutton').click(function() {
		//get text input and put in variable
		var text = document.getElementById('text');
		var text_val = text.value;

		//append only if text exists
		if($('#text').val()) {
			$('.need ul').append( $('<li class="items"></li>').html('<div class="box"></div>' + text_val + '<img class="delete" src="images/delete.png" />') );
		}

		//reset text box to no input
		document.getElementById('text').value = '';
	});

//add want items
	$('.wantbutton').click(function() {
		//get text input and put in variable
		var text = document.getElementById('text');
		var text_val = text.value;

		//append only if text exists
		if($('#text').val()) {
			$('.want ul').append( $('<li class="items"></li>').html('<div class="box"></div>' + text_val + '<img class="delete" src="images/delete.png" />') );
		}

		//reset text box to no input
		document.getElementById('text').value = '';
	});

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