$('.Header__button').click(function() { 
	
	$('.Vmodel').fadeIn();
	$('.Vmodel').addClass('disabled');
});

$('.Modal__close').click(function() { 
	$('.Vmodel').fadeOut();
	
});