$(document).ready(function(){

	/*STUDIO, GALERIA*/
	$('.visual-content').click(function(){
		$('body').removeClass('bg-non')
		$('.gallery').removeClass('text-page')
		$('#studio, #galeria, .hidden-content').removeClass('non')
		$('#usun-tatuaz, #regulamin').addClass('non')
	})

	/*USUŃ TATUAŻ*/
	$('#text-content-1').click(function(){
		$('#usun-tatuaz').removeClass('non')
		$('body').addClass('bg-non')
		$('.gallery').addClass('text-page')
		$('#studio, #galeria, #regulamin, .hidden-content').addClass('non')
	})

	//REGULAMIN
	$('#text-content-2').click(function(){
		$('#regulamin').removeClass('non')
		$('body').addClass('bg-non')
		$('.gallery').addClass('text-page')
		$('#studio, #galeria, #usun-tatuaz, .hidden-content').addClass('non')
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
		$('#hex-2, #hex-3, #hex-4, #hex-5, #hex-6, #hex-7, #hex-8, #hex-9, #hex-10, #hex-11, .zest').toggleClass('non')
		$('.hex-wrap').toggleClass('hex-wrap-active')
		$('.hidden-content').toggleClass('up-1-3')
		$('#slider-1').slideToggle();
	})

	//SLIDER-2
	$('#hex-2').click(function(){
		$(this).toggleClass('active-hex-1-2')
		$('#hex-1, #hex-3, #hex-4, #hex-5, #hex-6, #hex-7, #hex-8, #hex-9, #hex-10, #hex-11, .zest').toggleClass('non')
		$('.hex-wrap').toggleClass('hex-wrap-active')
		$('.hidden-content').toggleClass('up-1-3')
		$('#slider-2').slideToggle();
	})

	//SLIDER-3
	$('#hex-3').click(function(){
		$(this).toggleClass('active-hex-3')
		$('#hex-1, #hex-2, #hex-4, #hex-5, #hex-6, #hex-7, #hex-8, #hex-9, #hex-10, #hex-11, .zest').toggleClass('non')
		$('.hex-wrap').toggleClass('hex-wrap-active')
		$('.hidden-content').toggleClass('up-1-3')
		$('#slider-3').slideToggle();
	})

	//SLIDER-4
	$('#hex-4').click(function(){
		$(this).toggleClass('active-hex-4-5')
		$('#hex-1, #hex-2, #hex-3, #hex-5, #hex-6, #hex-7, #hex-8, #hex-9, #hex-10, #hex-11, .zest').toggleClass('non')
		$('.hex-wrap').toggleClass('hex-wrap-active')
		$('.hidden-content').toggleClass('up-4-8')
		$('#slider-4').slideToggle();
	})

	//SLIDER-5
	$('#hex-5').click(function(){
		$(this).toggleClass('active-hex-4-5')
		$('#hex-1, #hex-2, #hex-3, #hex-4, #hex-6, #hex-7, #hex-8, #hex-9, #hex-10, #hex-11, .zest').toggleClass('non')
		$('.hex-wrap').toggleClass('hex-wrap-active')
		$('.hidden-content').toggleClass('up-4-8')
		$('#slider-5').slideToggle();
	})

	//SLIDER-6
	$('#hex-6').click(function(){
		$(this).toggleClass('active-hex-6-8')
		$('#hex-1, #hex-2, #hex-3, #hex-4, #hex-5, #hex-7, #hex-8, #hex-9, #hex-10, #hex-11, .zest').toggleClass('non')
		$('.hex-wrap').toggleClass('hex-wrap-active')
		$('.hidden-content').toggleClass('up-4-8')
		$('#slider-6').slideToggle();
	})

	//SLIDER-7
	$('#hex-7').click(function(){
		$(this).toggleClass('active-hex-6-8')
		$('#hex-1, #hex-2, #hex-3, #hex-4, #hex-5, #hex-6, #hex-8, #hex-9, #hex-10, #hex-11, .zest').toggleClass('non')
		$('.hex-wrap').toggleClass('hex-wrap-active')
		$('.hidden-content').toggleClass('up-4-8')
		$('#slider-7').slideToggle();
	})

	//SLIDER-8
	$('#hex-8').click(function(){
		$(this).toggleClass('active-hex-6-8')
		$('#hex-1, #hex-2, #hex-3, #hex-4, #hex-5, #hex-6, #hex-7, #hex-9, #hex-10, #hex-11, .zest').toggleClass('non')
		$('.hex-wrap').toggleClass('hex-wrap-active')
		$('.hidden-content').toggleClass('up-4-8')
		$('#slider-8').slideToggle();
	})

	//SLIDER-9
	$('#hex-9').click(function(){
		$(this).toggleClass('active-hex-9-11')
		$('#hex-1, #hex-2, #hex-3, #hex-4, #hex-5, #hex-6, #hex-7, #hex-8, #hex-10, #hex-11, .zest').toggleClass('non')
		$('.hex-wrap').toggleClass('hex-wrap-active')
		$('.hidden-content').toggleClass('up-9-11')
		$('#slider-9').slideToggle();
	})

	//SLIDER-10
	$('#hex-10').click(function(){
		$(this).toggleClass('active-hex-9-11')
		$('#hex-1, #hex-2, #hex-3, #hex-4, #hex-5, #hex-6, #hex-7, #hex-8, #hex-9, #hex-11, .zest').toggleClass('non')
		$('.hex-wrap').toggleClass('hex-wrap-active')
		$('.hidden-content').toggleClass('up-9-11')
		$('#slider-10').slideToggle();
	})

	//SLIDER-11
	$('#hex-11').click(function(){
		$(this).toggleClass('active-hex-9-11')
		$('#hex-1, #hex-2, #hex-3, #hex-4, #hex-5, #hex-6, #hex-7, #hex-8, #hex-9, #hex-10, .zest').toggleClass('non')
		$('.hex-wrap').toggleClass('hex-wrap-active')
		$('.hidden-content').toggleClass('up-9-11')
		$('#slider-11').slideToggle();
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