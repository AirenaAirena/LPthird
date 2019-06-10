$(document).ready(function() {

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});

	$( function() {
		$( "#tabs" ).tabs();
	} );

	$(".owl-carousel").owlCarousel({
		items: 1,
		dots: false,
		nav:true,
		loop:true,
		navText:["",""],
		navSpeed:2000,
	});

	var map;
	function initMap() {
		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 50.4346375, lng: 30.5550618},
			zoom: 17
		});
	}
	// Custom JS
	$('.popup').magnificPopup({
		type:'inline',
		fixedContentPos:false,
		showCloseBtn:true,
		tLoading: ''
	});

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			// form.reset();
			setTimeout(function(){
				$.magnificPopup.close();
				$(".forms").trigger("reset");
			}, 1000);
		});
		return false;
	});

// scroll ankor

// 	var zTop = 1;
// 	$('a').on('click',function(e){
// 		e.preventDefault();
//  // Animate up or down based on DOM index
//  var index = $($(this).attr('href')).index();
//  var wh = $(window).height();
//  $('section').each(function(){
//  	var $tgt = $(this);
//  	var idx = $tgt.index();
//  	$tgt.removeClass();
//  	if(index == idx){ $tgt.stop(true,true).animate({top:0},1000,'linear').addClass('active').css({'z-index':zTop}); }
//  	if(index < idx) { $tgt.stop(true,true).animate({top:wh},1000,'linear').addClass('below'); }
//  	if(index > idx ){ $tgt.stop(true,true).animate({top:-wh},1000,'linear').addClass('above'); }
//  });
//  zTop++;
// })

// // Trigger first section animation
// $('a[href="#a"]').trigger('click');

// // Set height
// $(window).on('resize',function(){
// 	var wh = $(window).height();
// 	$('article, section').height(wh);
// 	$('.active').css({top:0});
// 	$('.above').css({top:-wh});
// 	$('.below').css({top:wh});
// }).trigger('resize');
});


// scroll mein
$(document).ready(function(){
	// плавное перемещение страницы к нужному блоку
	$("#nav").on("click", "li a", function ( event ) {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("html,body").animate({scrollTop: destination} , 3000);
	});
});

// scroll section
// $(document).ready(function(){
	// плавное перемещение страницы к нужному блоку
	// $("a").click(function () {
		// elementClick = $(this).attr("href");
		// destination = $(elementClick).offset().top;
		// $("body,html").animate({scrollTop: destination }, 3000);
	// });
// });