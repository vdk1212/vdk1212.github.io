$(document).ready(function(){

	/*STUDIO, GALERIA*/
	$('.visual-content').click(function(){
		$('body').removeClass('bg-non')
		$('.gallery').removeClass('text-page')
		$('#usun-tatuaz').addClass('non')
		$('#regulamin').addClass('non')
		$('#studio').removeClass('non')
		$('#galeria').removeClass('non');
	})

	/*USUŃ TATUAŻ*/
	$('#text-content-1').click(function(){
		$('body').addClass('bg-non')
		$('.gallery').addClass('text-page')
		$('#regulamin').addClass('non')
		$('#usun-tatuaz').removeClass('non')
		$('#studio').addClass('non')
		$('#galeria').addClass('non');
	})

	//REGULAMIN
	$('#text-content-2').click(function(){
		$('body').addClass('bg-non')
		$('.gallery').addClass('text-page')
		$('#usun-tatuaz').addClass('non')
		$('#regulamin').removeClass('non')
		$('#studio').addClass('non')
		$('#galeria').addClass('non');
	})
	//MENU
	$('#menu-button').click(function(){
		$('.navigation').slideToggle(100);
	});
	$(window).resize(function(){
		if($(window).width() > 425 ){			
			$('.navigation').removeAttr('style');
		}
	});

	//SLIDER-1
	$('#hex-1')
	.click(function(){
		$(this).toggleClass('active-hex-1-2')
		$('#slider-1').slideToggle()
		$('#hex-2, #hex-3, #hex-4, #hex-5, #hex-6, #hex-7, #hex-8, #hex-9, #hex-10, #hex-11, .zest').toggleClass('non')
		$('.hex-wrap').toggleClass('hex-wrap-active')
		$('.hidden-content').toggleClass('up-1-3');
	})

	//SLIDER-2
	$('#hex-2').click(function(){
		$(this).toggleClass('active-hex-1-2')
		$('#slider-2').slideToggle()
		$('#hex-1, #hex-3, #hex-4, #hex-5, #hex-6, #hex-7, #hex-8, #hex-9, #hex-10, #hex-11, .zest').toggleClass('non')
		$('.hex-wrap').toggleClass('hex-wrap-active')
		$('.hidden-content').toggleClass('up-1-3');
	})

	//SLIDER-3
	$('#hex-3').click(function(){
		$(this).toggleClass('active-hex-3')
		$('#slider-3').slideToggle()
		$('#hex-1, #hex-2, #hex-4, #hex-5, #hex-6, #hex-7, #hex-8, #hex-9, #hex-10, #hex-11, .zest').toggleClass('non')
		$('.hex-wrap').toggleClass('hex-wrap-active')
		$('.hidden-content').toggleClass('up-1-3');
	})

	//SLIDER-4
	$('#hex-4').click(function(){
		$(this).toggleClass('active-hex-4-5')
		$('#slider-4').slideToggle()
		$('#hex-1, #hex-2, #hex-3, #hex-5, #hex-6, #hex-7, #hex-8, #hex-9, #hex-10, #hex-11, .zest').toggleClass('non')
		$('.hex-wrap').toggleClass('hex-wrap-active')
		$('.hidden-content').toggleClass('up-4-8');
	})

	//SLIDER-5
	$('#hex-5').click(function(){
		$(this).toggleClass('active-hex-4-5')
		$('#slider-5').slideToggle()
		$('#hex-1, #hex-2, #hex-3, #hex-4, #hex-6, #hex-7, #hex-8, #hex-9, #hex-10, #hex-11, .zest').toggleClass('non')
		$('.hex-wrap').toggleClass('hex-wrap-active')
		$('.hidden-content').toggleClass('up-4-8');
	})

	//SLIDER-6
	$('#hex-6').click(function(){
		$(this).toggleClass('active-hex-6-8')
		$('#slider-6').slideToggle()
		$('#hex-1, #hex-2, #hex-3, #hex-4, #hex-5, #hex-7, #hex-8, #hex-9, #hex-10, #hex-11, .zest').toggleClass('non')
		$('.hex-wrap').toggleClass('hex-wrap-active')
		$('.hidden-content').toggleClass('up-4-8');
	})

	//SLIDER-7
	$('#hex-7').click(function(){
		$(this).toggleClass('active-hex-6-8')
		$('#slider-7').slideToggle()
		$('#hex-1, #hex-2, #hex-3, #hex-4, #hex-5, #hex-6, #hex-8, #hex-9, #hex-10, #hex-11, .zest').toggleClass('non')
		$('.hex-wrap').toggleClass('hex-wrap-active')
		$('.hidden-content').toggleClass('up-4-8');
	})

	//SLIDER-8
	$('#hex-8').click(function(){
		$(this).toggleClass('active-hex-6-8')
		$('#slider-8').slideToggle()
		$('#hex-1, #hex-2, #hex-3, #hex-4, #hex-5, #hex-6, #hex-7, #hex-9, #hex-10, #hex-11, .zest').toggleClass('non')
		$('.hex-wrap').toggleClass('hex-wrap-active')
		$('.hidden-content').toggleClass('up-4-8');
	})

	//SLIDER-9
	$('#hex-9').click(function(){
		$(this).toggleClass('active-hex-9-11')
		$('#slider-9').slideToggle()
		$('#hex-1, #hex-2, #hex-3, #hex-4, #hex-5, #hex-6, #hex-7, #hex-8, #hex-10, #hex-11, .zest').toggleClass('non')
		$('.hex-wrap').toggleClass('hex-wrap-active')
		$('.hidden-content').toggleClass('up-9-11');
	})

	//SLIDER-10
	$('#hex-10').click(function(){
		$(this).toggleClass('active-hex-9-11')
		$('#slider-10').slideToggle()
		$('#hex-1, #hex-2, #hex-3, #hex-4, #hex-5, #hex-6, #hex-7, #hex-8, #hex-9, #hex-11, .zest').toggleClass('non')
		$('.hex-wrap').toggleClass('hex-wrap-active')
		$('.hidden-content').toggleClass('up-9-11');
	})

	//SLIDER-11
	$('#hex-11').click(function(){
		$(this).toggleClass('active-hex-9-11')
		$('#slider-11').slideToggle()
		$('#hex-1, #hex-2, #hex-3, #hex-4, #hex-5, #hex-6, #hex-7, #hex-8, #hex-9, #hex-10, .zest').toggleClass('non')
		$('.hex-wrap').toggleClass('hex-wrap-active')
		$('.hidden-content').toggleClass('up-9-11');
	})

});

//MAP
function initMap() {
	var endorfine = {lat: 50.038725, lng: 22.003184};

	/*50.038716, 22.003185*/

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: endorfine
	});
	var marker = new google.maps.Marker({
		position: endorfine,
		map: map
	});
}