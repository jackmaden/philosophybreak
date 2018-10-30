/*when blockquote 20px from bottom of viewport, add fade in animation*/
$(window).scroll(function () {
	$('.fade-right').each(function(i) {
		var objectBottom = $(this).position().top + $(this).outerHeight();
    var windowBottom = $(window).scrollTop() + $(window).height();
    var offset = 100;
		if (windowBottom > (objectBottom - offset)) {
			$(this).addClass('fadeInRight');
		}
	});
});
