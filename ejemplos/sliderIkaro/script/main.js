	$(document).ready(main);

		/*
		=
		 	Variables Slider
		=
		*/
		var clickSlider = 0;
		var positionLeft = 0
		/*
		/
		 	Variables Slider
		/
		*/

		function main(){
			/*
			==========
			Slider
			==========
			*/
			window.addEventListener('load',init);

			function init(){


				var pauseSlider = 0;

				/*
				=
					Botones de Posición		
				=
				*/
				$('.indicatorPosition').click(function(){

					clickSlider =  $(this).attr('positionIndicator') - 1;

					positionLeft = ( -25 * (clickSlider));

					pauseSlider = 1 ;

					$('.sliderImage').animate({

						left: positionLeft + '%'

					});

					clearInterval(timeSlider);

					$('.indicatorPosition').css({
						'color' : '#333'
					});

					$(this).css({
						'color' : 'red'
					});

					console.log(clickSlider);

				});
				/*
				/
					Botones de Posición		
				/
				*/


				/*
				=
					Botones flechas izqueirda y derecha		
				=
				*/
				$('.sliderArrowRight').click(function(){

					clickSlider ++;

					if ( clickSlider > 0 && clickSlider < 4 ) {

						positionLeft = ( -25 * clickSlider );

					} else if ( clickSlider >= 4 ) {

						clickSlider = 3;

					};

					$('.sliderImage').animate({

						left: positionLeft + '%'

					});

					$('.indicatorPosition').css({
						'color' : '#333'
					});
					$('.positionSlider li:nth-child(' + (clickSlider+1) + ')').css({
						'color' : 'red'
					});

					console.log(clickSlider);

					clearInterval(timeSlider);

				});


				$('.sliderArrowLeft').click(function(){
		
					clickSlider --;

					if ( clickSlider >= 0 && clickSlider < 4 ) {

						positionLeft = ( -25 * clickSlider );

					} else if ( clickSlider <= 0 ) {

						clickSlider = 0;

					};

					$('.sliderImage').animate({

						left: positionLeft + '%'

					});

					$('.indicatorPosition').css({
						'color' : '#333'
					});
					$('.positionSlider li:nth-child(' + (clickSlider+1) + ')').css({
						'color' : 'red'
					});


					pauseSlider = 1 ;

					console.log(clickSlider);

					clearInterval(timeSlider);

				});
				/*
				/
					Botones flechas izqueirda y derecha		
				/
				*/


				var timeSlider = window.setInterval( function() { 

					clickSlider++; 

					if( clickSlider > 0 && clickSlider < 4){

						positionLeft = ( -25 * (clickSlider));

						$('.sliderImage').animate({

							left: positionLeft + '%'
						
						})

					} else if ( clickSlider >=4) {

						clickSlider = 0 ;

						positionLeft = ( -25 * (clickSlider));

						$('.sliderImage').animate({

							left: '0' + '%'
						
						})

					}

					$('.indicatorPosition').css({
						'opacity' : '0.5'
					});
					$('.positionSlider li:nth-child(' + (clickSlider+1) + ')').css({
						'opacity' : '1'
					});

					console.log(clickSlider)} , 5000 

				);
				
			};
			/*
			//////////
			Slider
			//////////
			*/
		};

