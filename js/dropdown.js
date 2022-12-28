$(document).ready(function() {

	/* MAIN MENU */
	$('#main-menu > li:has(ul.sub-menu)').addClass('parent');
	$('ul.sub-menu > li:has(ul.sub-menu) > a').addClass('parent');

	$('#menu-toggle').click(function() {
		$('#main-menu').slideToggle(300);
		return false;
	});

});

var panel_test = $('.panel-heading a');
panel_test.on('click', function() {
  panel_test.removeClass('active');
  $(this).addClass('active');
});