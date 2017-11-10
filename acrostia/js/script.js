$(document).ready(function(){

	/*PRELOADER*/
	$(window).on('load', function () {
		var $preload = $('#preloader'),
		$icon = $preload.find('.preloader_icon');
		$icon.fadeOut();
		$preload.delay(500).fadeOut('slow');
	});
	
	/*NAV-BUTTON*/
	$('.navbar-toggler').click(function(){
		$(this).toggleClass('active_button');
		$('#header').toggleClass('header_active');
		$('section, footer').toggleClass('blur');
	})

	$('.menu li').click(function(){
		if($(window).width()<768)
		{
			$('#header').removeClass('header_active');
			$('.menu').removeClass('show');
			$('.navbar-toggler').removeClass('active_button');
			$('section, footer').removeClass('blur');
		}
	})

	/*PORTFOLIO MENU*/
	$('#Container').mixItUp();

	$('.portfolio_nav li').click(function(){
		$('.portfolio_nav li').removeClass('active');
		$(this).addClass('active');
	})

	/*POPUP*/
	$('.open-popup-link').magnificPopup({
		type: 'inline',
		midClick: true,
		closeOnContentClick: true
	});

	$(".mix").each(function(i){
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".item").attr("id", "work_" + i);
	});

	/*FORM VALIDATION*/
	var $form = $("#form"),
	$successMsg = $(".alert");
	$.validator.addMethod("letters", function(value, element) {
		return this.optional(element) || value == value.match(/^[a-zA-Z ]*$/);
	});
	$form.validate({
		rules: {
			name: {
				required: true,
				minlength: 3,
				letters: true
			},
			email: {
				required: true,
				email: true
			},
			text: {
				required: true,
				minlength: 20,
				letters: true
			}
		},
		messages: {
			name: "*please specify your name (only letters and spaces are allowed)",
			email: "*please specify a valid email address",
			text: "*please specify your message (min length is 30 letters)"
		},
		submitHandler: function() {
			$successMsg.show();
		}
	});

});

//MAP
function initMap() {
	var location = {lat: -25.363, lng: 131.044};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: location
	});
	var marker = new google.maps.Marker({
		position: location,
		map: map
	});
}