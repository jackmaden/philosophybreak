$(document).ready(function() {
	//MOBILE NAV
	var $mobileMenu = $('ul#mobile-menu'),
			$mobileTrigger = $('#mobile-trigger'),
			documentHeight = $(document).height();
	//make menu height of document
	$mobileMenu.css('height', documentHeight - 40);
	//on click, toggle trigger change & menu slide
	$mobileTrigger.on('click', function() {
		$(this).toggleClass('change');
		if ($mobileMenu.hasClass('slideInRight')) {
			$mobileMenu.removeClass('slideInRight').addClass('slideOutRight');
		} else {
			$mobileMenu.removeClass('slideOutRight').addClass('slideInRight');
		}
	});
	//FEATURED IMAGE FULL
	//center title vertically
	$('.featured-image-full div').css({'top' : '40%', 'margin-top' : -$('.featured-image-full div').outerHeight()/2});
	
	//on scroll
	$(window).scroll(function () {
		//slide menu out if open on scroll & reset mobile trigger
		if ($mobileTrigger.hasClass('change')) {
			$mobileTrigger.removeClass('change');
		}
		if ($mobileMenu.hasClass('slideInRight')) {
			$mobileMenu.removeClass('slideInRight').addClass('slideOutRight');
		}
		//BLOCKQUOTE
		//when fade-right divs -mostly blockquote atm- 20px from bottom of viewport, add fade in animation
		$('.fade-right').each(function(i) {
			var objectBottom = $(this).position().top + $(this).outerHeight();
	    var windowBottom = $(window).scrollTop() + $(window).height();
	    var offset = 100;
			if (windowBottom > (objectBottom - offset)) {
				$(this).addClass('fadeInRight');
			}
		});
	});//end window scroll

});//end document ready
