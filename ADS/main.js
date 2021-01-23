

$('.Header__button').click(function() { 
	
	$('.Vmodel').fadeIn();
	$('.Vmodel').addClass('disabled');
});

$('.Modal__close').click(function() { 
	$('.Vmodel').fadeOut();
	
});

$('.Model__bot__button').click(function(){
	$('.Vmodel').fadeOut();
})

$('.Model__bot__button').click(function(){
	$('.Alert').fadeIn();
	$('.Alert').addClass('anabled')
	$('.Vmodel').addClass('disabled');
	console.log(1);
}) 

$(window).on('load', function () { 
	setTimeout(function(){
		if($('.Vmodel').hasClass('disabled')) {
			return false;
		} else {
			
			$(".Vmodel").fadeOut(1);
		}
	}, );
});

$(window).on('load', function () { 
	setTimeout(function(){
		if($('.Alert').hasClass('disabled')) {
			return false;
		} else {
			
			$(".Alert").fadeOut(1);
		}
	}, );

});
$('.Modal__close1').click(function() { 
	$('.Alert').fadeOut();
		
	});
$(window).on('load', function() {
	$('.preloader').fadeOut(1500);
	});
