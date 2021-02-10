 $('.Header__button').click(function() {

 	$('.Vmodel').fadeIn();
	$('.Vmodel').addClass('disabled');
});
$(document).ready(function() {

    // Основные переменные приложения.
    var arrayAds = Array(); // Массив объявлений.



    $('#close').click(function() {
        $('#modal').hide();
    });


    // Добавляем новое обявление.
    $('#btnSubmit').click(function() {
        var ad = {
            text: $('textarea[name="text"]').val(),
            contactName: $('input[name="name"]').val(),
            contactPhone: $('input[name="phone"]').val()
        }

        arrayAds.push(ad);

        console.log(arrayAds);

        // Отрисовка новых объявлений.
        renderAds();

        // Скрыть модальное окно.
        $('.Vmodel').hide();
        $('textarea[name="text"]').val('');
        $('input[name="name"]').val('');
        $('input[name="phone"]').val('');
    });




    // Функция отрисовки новых объявлений.
    function renderAds() {

        // Очищаем блок контента.
        $('#content').html('');

        // Отрисовываем новые объявления.
        arrayAds.map(ad => {
            var adHTML =
            "<div class='Content__box'>" +
                "<div class='Box__info'>" + ad.text + "</div>" +
                "<div class='Box__name'>" + ad.contactName + "</div>" +
                "<div class='Box__phone'>" + ad.contactPhone + "</div>" +
            "</div>";

            $('#content').append(adHTML);
        });
    }

});




// $('.Content__box').ready(function(){
// 	$('.Content__box').fadeOut();
// })
//
//
// $('.Header__button').click(function() {
//
// 	$('.Vmodel').fadeIn();
// 	$('.Vmodel').addClass('disabled');
// });
//
// $('.Modal__close').click(function() {
// 	$('.Vmodel').fadeOut();
//
// });
//
// $('.Model__bot__button').click(function(){
// 	$('.Content__box').fadeIn();
// 	$('.Alert').fadeIn();
// 	$('.Alert').addClass('anabled')
// 	$('.Vmodel').addClass('disabled');
// })
//
// $(window).on('load', function () {
// 	setTimeout(function(){
// 		if($('.Vmodel').hasClass('disabled')) {
// 			return false;
// 		} else {
//
// 			$(".Vmodel").fadeOut(1);
// 		}
// 	}, );
// });
//
// $(window).on('load', function () {
// 	setTimeout(function(){
// 		if($('.Alert').hasClass('disabled')) {
// 			return false;
// 		} else {
//
// 			$(".Alert").fadeOut(1);
// 		}
// 	}, );
//
// });
// $('.Modal__close1').click(function() {
// 	$('.Alert').fadeOut();
//
// 	});
//
// $('#new').click(function(){
// 	var ad = {
// 		text = $('input [name="TA"]').val(),
// 		contactName = $('input [name="NA"]').val(),
// 		contactNumber = $('input [name="NUA"]').val(),
//
// 	}
// 	arrayAds.push(ad);
// 	console.log(arreyAds);
//
// 	$('.Vmodel').hide();
// });
//
// function renderAds() {
// 	var adHTML =
// 	""
// }
