var $ = jQuery.noConflict();
    $(window).load(function() {
    $('.flexslider').flexslider({
          animation: "fade"
    });
	
	$(function() {
		$('.show_menu').click(function(){
				$('.menu').fadeIn();
				$('.show_menu').fadeOut();
				$('.hide_menu').fadeIn();
		});
		$('.hide_menu').click(function(){
				$('.menu').fadeOut();
				$('.show_menu').fadeIn();
				$('.hide_menu').fadeOut();
		});
	});
  });

  $(".testimonial-carousel").owlCarousel({
	autoplay: true,
	smartSpeed: 1000,
	items: 1,
	dots: false,
	loop: true,
	nav : true,
	navText : [
		'<i class="bi bi-arrow-left"></i>',
		'<i class="bi bi-arrow-right"></i>'
	],
});