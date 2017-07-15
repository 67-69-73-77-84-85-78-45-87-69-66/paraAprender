	$(document).ready(function(){

		$(window).scroll(function(){

			var valueScroll = $(window).scrollTop();
			var position = (valueScroll * 0.02);

			$('body').css({
				'background-position' :'0 -' + position + 'px' 
			});

		});

	});