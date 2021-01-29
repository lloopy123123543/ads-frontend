
$('.Content__box').ready(function(){
	$('.Content__box').fadeOut();
})


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
	$('.Content__box').fadeIn();
	$('.Alert').fadeIn();
	$('.Alert').addClass('anabled')
	$('.Vmodel').addClass('disabled');
	var chack = 1+1;
console.log(++chack);
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





	$(document).ready(function () {
	    var result = '';
	    $('input').change(function () {
	        if (result == '') {
	            result += $(this).val();
	        }
	        else {
	            result += ', ' + $(this).val();
	        }

	        $('#divResult').html(result);
	    });
	});

	$(document).ready(function () {
    var result = '';
    $('.inputRequiredName').change(function () {
        if (result == '') {
            result += $(this).val();
        }
        else {
            result += ', ' + $(this).val();
        }

        $('#divResultName').html(result);
    });
});


$(document).ready(function () {
	var result = '';
	$('.inputRequiredNumber').change(function () {
			if (result == '') {
					result += $(this).val();
			}
			else {
					result += ', ' + $(this).val();
			}

			$('#divResultNumber').html(result);
	});
});



$(document).ready(function () {
	var result = '';
	$('.inputRequiredText').change(function () {
			if (result == '') {
					result += $(this).val();
			}
			else {
					result += '\n ' + $(this).val();
			}

			$('#divResultText').html(result);
	});
});
