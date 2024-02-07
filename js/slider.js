var $ = jQuery.noConflict();
    $(window).load(function() {
    $('.flexslider').flexslider({
          animation: "fade",
		  start: function (slider) {
			// lazy load
			$(slider).find("img.lazy").slice(0,5).each(function () {
			var src = $(this).attr("data-src");
			   $(this).attr("src", src).removeAttr("data-src").removeClass("lazy");
			});
		  },
		 before: function (slider) {
			 // lazy load
			var slide = $(slider).find('.slides').children().eq(slider.animatingTo+1).find('img');
			var src = slide.attr("data-src");
			slide.attr("src", src).removeAttr("data-src").removeClass("lazy");
		 }
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