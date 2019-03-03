---
---
$(document).ready(function() {
	//NAV
	var $menu = $('ul#menu'),
			$logo = $('a.logo img'),
			$trigger = $('#menu-trigger'),
			$menuHeader = $('ul#menu h3');
					
	//on click
	$trigger.on('click', function() {
	var	documentWidth = $(document).width(),
		triggerXCoords = $trigger.offset().left + ($trigger[0].getBoundingClientRect().width / 2),
		triggerXCenter = documentWidth - triggerXCoords,
		triggerYCoords = $trigger.position().top + ($trigger[0].getBoundingClientRect().height / 2),
		triggerYCenter = triggerYCoords - ($menuHeader.height() / 2);
		//toggle trigger change
		$(this).toggleClass('change');
		//make menu width of trigger's centre & show
		$menu.css('width', triggerXCenter).toggleClass('show');
		$menuHeader.css('margin-top', triggerYCenter); //header vertical align
	});


	//FEATURED IMAGE FULL
	//center title vertically
	$('.featured-image-full div').css({'top' : '40%', 'opacity' : '1', 'margin-top' : -$('.featured-image-full div').outerHeight()/2});

	//FORM VALIDATION
	$('[type="submit"]').on('click', function () {
    // this adds 'required' class to all the required inputs under the same <form> as the submit button
    $(this).closest('form').find('[required]').addClass('required');
	});

	//on scroll
	$(window).scroll(function () {
		//reduce nav size when not at top
		if ($(this).scrollTop() > 50) {
			$logo.addClass('reduce-size');
			$trigger.addClass('reduce-size');
		} else {
			$logo.removeClass('reduce-size');
			$trigger.removeClass('reduce-size');
		}
		//slide menu out if open on scroll & reset mobile trigger
		if ($trigger.hasClass('change')) {
			$trigger.removeClass('change');
		}
		if ($menu.hasClass('show')) {
			$menu.removeClass('show');
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

	//LAZYLOAD
	var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
	});

});//end document ready