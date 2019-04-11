
			var owl_behind = function(owl_in){
				$('.owl').css({'transform' : 'rotate(180deg)', 'width' : '44%' , 'z-index' : '0','left': '25%'}).delay(500).show().animate({
					'bottom': '-125.5%',
					},{duration : 1000,easing : 'swing',
					start : function(){
						$('.owl .owl_flap').hide();
						$('.owl .owl_open').hide();
						$('.owl .owl_back').show();
					},
					complete : function(){
						$('.owl .owl_back').hide();
						owl_in();
					}
				});
			}
			var owl_in_one =function(){
				$('.owl > img').hide();
				$('.owl').show().animate({
					'bottom': '28.5%',
					},{duration : 1000,easing : 'swing',
						start : function(){
							$('.owl_flying_up').show();
						},
						complete : function(){
							$('.owl_flying_up').hide();
							$('.owl_hover').show();
						}
				});
			}
			var owl_in_two =function(){
				$('.owl').stop().css({'transform' : 'rotate(0deg)', 'bottom': '-53.5%', 'left': '0%' , 'z-index' : '9999','width' : '54%',}).animate({
					 'bottom': '-15.5%'
				},{ duration : 1000, easing : 'swing',
					start : function(){
						$('.owl .owl_open').show();
						$('.owl .owl_back').hide();
						flap(1, 500);
					},
					complete : function(){
						hover(-15.5, "bottom");
					}
				});
			}
			var owl_in_three =function(){
				$('.owl_flyin').show().animate({
				  'bottom': '10%',
				},{
					duration : 1000,
					easing : 'swing',
					start : function(){
					},
					complete : function(){
					}
				});
			}
			var owl_out_one = function(owl_in){
				$('.owl').animate({
					'bottom': '125.5%',},{duration : 500,easing : 'swing',
						start : function(){

						},
						complete : function(){

						}
				}).hide();
			}
			var owl_out =function(){
				$('.owl_flyin, .owl').animate({
				  'bottom': '110%',
				},{
					duration : 1000,
					easing : 'swing',
					start : function (){
						$('.owl_flying_up').show();
						$('.seven .graph img.owl_up ').hide();
						$('.seven .graph img.owl_up_fast ').show();
					},
					complete : function(){
						$('.owl > img').hide();
						$('.owl_flyin').hide();
					}
				}).hide();
			}

					jQuery(window).on("load resize",function(e){

			var ratio = get_ratio();
				width = getWidth(),
				sign_pos_six_y = Math.floor((((78 - ratio)/4.076) + 16))+ '%',
				sign_pos_six_x = Math.floor(((78 - ratio)/13.25)) + '%',
				frame_one_roots = Math.floor((((78 - ratio)/2.208) + 17)),
				three_x_shift = Math.floor((((width - 1280)/-49.2) - 13)) + '%',
				four_zoom = Math.floor((((78 - ratio)/.913) + 160)) + '%',
				four_x_shift = Math.floor((((78 - ratio)/3.3125))) + '%',
				six_zoom = Math.floor((((78 - ratio)/.716) + 160)) + '%',
				six_x_shift = Math.floor((((78 - get_ratio())/-1.6) + 127)) + '%';
				nine_zoom = Math.floor((((78 - get_ratio())/.616) + 160)) + '%';
				nine_x_shift = Math.floor((((78 - get_ratio())/-1.43) + 115)) + '%';

			if ($('.roots_con').is(':visible')) {
				$(".roots_con").css({'top': frame_one_roots+ '%'});
			}

			// $('.tree.four').css({'background-size': four_zoom ,'background-position-x': four_x_shift});

			if ($('.tree').attr('data-frame') == 6) {
				$('.six img.text_2, .six img.text_3').css({'bottom' : sign_pos_six_y});
				$('.tree').css({'background-size': six_zoom, 'background-position-x': six_x_shift});
			}
			if ($('.tree').attr('data-frame') == 9) {
				$(".tree").css({'background-size': nine_zoom, 'background-position-x': nine_x_shift});
			}
			$(".roots_con").css({'top': frame_one_roots+ '%'});
			$('.six img.text_2, .six img.text_3').css({'bottom' : sign_pos_six_y});


			var ImageMap = function (map) {
            	var n,
            	    areas = map.getElementsByTagName('area'),
            	    len = areas.length,
            	    coords = [],
            	    previousWidth = 2058;
            	for (n = 0; n < len; n++) {
            	    coords[n] = areas[n].coords.split(',');
            	}
            	this.resize = function () {
            	    var n, m, clen,
            	        x = $('.owl_flyin').width() / previousWidth;
            	    for (n = 0; n < len; n++) {
            	        clen = coords[n].length;
            	        for (m = 0; m < clen; m++) {
            	            coords[n][m] *= x;
            	        }
            	        areas[n].coords = coords[n].join(',');
            	    }
            	    previousWidth = $('.owl_flyin').width();
            	    return true;
            	};
            	window.onresize = this.resize;
        	},
        	imageMap = new ImageMap(document.getElementById('map'));
    		imageMap.resize();
		});

			function reduce(numerator,denominator){
  				var gcd = function gcd(a,b){
  				  return b ? gcd(b, a%b) : a;
  				};
  				gcd = gcd(numerator,denominator);
  				return [numerator/gcd, denominator/gcd];
			}

			function flap(flaps, time){
				var flap_count = 0;
				var my_timer = setInterval(function() {
					if (flap_count < flaps) {
						if ($(".owl .owl_open").is(":hidden")) {
								$(".owl .owl_flap").hide();
								$(".owl .owl_open").show();
							}else{
								$(".owl .owl_flap").show();
								$(".owl .owl_open").hide();
							}
					} else {
						clearInterval(my_timer);
					}
					flap_count++;
				}, Math.floor(time / flaps));
			}
			function rotate($selc, angle, time) {
			    var $elem = $selc;
			    $({deg: 0}).animate({deg: angle}, {
			        duration: time,
			        step: function(now) {
			            $elem.css({
			                transform: 'rotate(' + now + 'deg)'
			            });
			        }
			    });
			}
			function hill_animate(attrubutes){
					$('.hill').animate(attrubutes, 1000, 'swing');
			}


			function clear_frame(frame,sub_frame, frame_state) {
				button_disabler = true;
				setTimeout(function(){button_disabler = false;}, 1300);
				$('.frame img:not(.transition)').fadeOut('slow');

				if ($('.tree').attr('data-frame') != frame_state.toString()) {
					console.log($('.tree').attr('data-frame'));
					console.log(frame_state.toString());
					if ($('.owl').is(':visible') || $('.owl_flyin').is(':visible') ) {
						owl_out();
					}
					$('.frame img').fadeOut('slow');
					frame(sub_frame, 0);
				}else{
					sub_frame(0)
				}
			}
			function frame_phase(sub_frame, direction) {
				button_disabler = true;
			  	setTimeout(function(){button_disabler = false;}, 1300);
				$('.frame img:not(.transition)').fadeOut('slow');
				sub_frame(direction);
			}
			function frame_zero(sub_frame, direction) {
					$('.tree').animate({
					  'background-position-x': '0%',
					  'background-size': '159.7%',
					  'background-position-y': '100%',
					},{
						duration : 1000,
						easing : 'swing',
						start: function(){
							$('.hill').animate({'background-position-x': '0%', 'top':'15%'}, 1000, 'swing');
						},
						complete : function(){
							$('.zero img.owl_1, .zero img.text_1').fadeIn('slow');
							button_disabler = false;
						}
					}).attr('data-frame', '0');
			}
			function frame_zero_a() {
				$('.zero img.owl_1, .zero img.text_1').fadeIn('slow');

			}
			function frame_one(sub_frame, direction) {
				$('.tree').animate({
				  'background-position-x': '11%',
				  'background-size': '160%',
				  'background-position-y': '100%',
				},{duration : 1000,easing : 'swing',
					start: function(){
						hill_animate({'top': '-0%',});
						$('.zero img.owl_2').fadeIn('slow').animate({
					 		'bottom':'10%',
							'left': '0%',
							'width': '37%'
						}, 1000, 'swing');
					},
					complete : function(){
						sub_frame(direction);
					}
				}).attr('data-frame', '1');;
			}
			function frame_one_a(direction) {
				$('.roots_con').fadeOut('slow');
				$('.zero img.owl_1').css({'left': '16%', 'top':'76%'}).fadeIn('slow').addClass('transition');
				$('.one img.text_1,.one img.roots,.one img.text_2').fadeIn('slow');
			}
			function frame_one_b(direction) {
				$('.roots_con').show();
				if (direction == 0) {
					$('.roots_con .root:hidden:first').fadeIn('slow');
				}else{
					$('.roots_con .root:visible:last').fadeOut('slow');
				}
			}
			function frame_two(sub_frame, direction) {
					$('.three img.owl_1').hide().css({'top': '74%','right':'34%','width': '100%',});
					$('.tree').animate({
					  'background-position-x': '0%',
					  'background-size': '159.5%',
					  'background-position-y': '93.5%',
					},{ duration : 1000, easing : 'swing',
						start: function(){
							hill_animate({'top': '33%',});
							$('.zero img.owl_2').fadeIn('slow').animate({
						 		'bottom':'-10%',
								'left': '0%',
								'width': '37%'
							}, 1000, 'swing');
						},
						complete : function(){
							$('.two img.owl_1, .two img.text_1, .two img.text_2').fadeIn('slow');
						}
					}).attr('data-frame', '2');;
			}
			function frame_three(sub_frame, direction) {
				$('.zero img.owl_1').fadeOut('slow');
				$(".tree").animate({
					'background-position-x': three_x_shift,
				  	'background-size': '159.5%',
					'background-position-y': '81%',
				},{
					duration : 1000,
					start: function(){
						hill_animate({'top': '50%',});
					},
					complete : function(){
						sub_frame(direction);
					}
				}).attr('data-frame', '3');;
			}
			function frame_three_a(direction) {
				owl_in_one();
				$('.three img.text_1').fadeIn('slow');
			}
			function frame_three_b(direction) {
				$('.three img.text_2').fadeIn('slow');
			}
			function frame_four(sub_frame, direction) {
				let ratio = get_ratio(),
					zoom = Math.floor((((78 - ratio)/.913) + 160)) + '%';
					x_shift = Math.floor((((78 - ratio)/3.3125))) + '%';

					$(".tree").animate({
					 	'background-position-y': '43%',
					 	'background-size': zoom,
					 	'background-position-x': x_shift,
					},{
						duration : 1000,
						start: function(){
							hill_animate({'top': '60%','left': '0%',});
						},
						complete : function(){
							$('.four img.text_1').fadeIn('slow');
						}
					}).attr('data-frame', '4');;
			}
			function frame_six(sub_frame, direction) {
				$('.tree').animate({
					'background-position-y': '42.5%',
					'background-size': six_zoom,
					'background-position-x': six_x_shift,
				},{
						duration : 1000,
						easing : 'swing',
						start : function (){
							hill_animate({'top': '80%','left': '-10%',});
						},
						complete : function(){
							sub_frame();
						}
				}).attr('data-frame', '6');;
			}
			function frame_six_a() {
				$('.six img.text_3, .six .text_con, .six img.text_4').fadeOut('slow');
				$('.six img.text_1, .six img.text_2').fadeIn('slow');
			}
			function frame_six_b() {
				$('.six img.text_3, .six .text_con, .six img.text_4').fadeIn('slow');
			}
			function frame_six_c(direction) {
				if (direction == 0) {
					$('.six .text_con .check:hidden:first').fadeIn('slow');
				}else{
					$('.six .text_con .check:visible:last').fadeOut('slow');
				}
				if ($('.six .text_con').is(':hidden')) {
					$('.six .text_con .check').show();
					frame_six_b();
				}
			}
			function frame_seven(sub_frame, direction) {
				$('.six img.text_3, .six .text_con, .six img.text_4').fadeOut('slow');

				$('.tree').animate({
				  'background-position-x': '144%',
				  'background-position-y': '42.5%',
				  // 'background-size': '177.5%',
				},{
					duration : 1000,
					easing : 'swing',
					start : function (){
						$('.hill').animate({'left': '0%','top': '80%',}, 1000, 'swing');
					},
					complete : function(){
						sub_frame(direction);
					}
				}).attr('data-frame', '7');
			}
			function frame_seven_a() {
				if ($('.seven .graph').is(':visible')) {
					owl_out_three();
				}
				$('.seven img.text_1').fadeIn('slow');
			}
			function frame_seven_b() {
				owl_in_three();
			}
			function frame_eight(sub_frame, direction) {
				$(".tree").animate({
					'background-position-y': '24.5%',
				 	'background-position-x': '125%',
				 	'background-size': '160%'
				},{
					duration : 1000,
					easing : 'swing',
					start: function(){
						$('.hill').animate({
							 'top': '50%',}, 1000, 'swing');
					},
					complete : function(){
						$('.eight .text_1').fadeIn('slow');
						$('.eight .owl_1').fadeIn('slow');
					}
				}).attr('data-frame', '8');
			}
			function frame_nine(sub_frame, direction) {
				$(".tree").animate({
					'background-position-y': '2.5%',
					'background-position-x': nine_x_shift,
					'background-size': nine_zoom,
				},{
					duration : 1000,
					easing : 'swing',
					start: function(){
						$('.hill').animate({'top': '75%',}, 1000, 'swing');
					},
					complete : function(){
						$('.nine img.text_1,.nine img.text_2').fadeIn('slow');
					}
				}).attr('data-frame', '9');;
			}

					jQuery(window).on("load resize",function(e){

			var ratio = get_ratio(),
				root_y = ratio - 37 + "%" ,
				transitionEvent = whichTransitionEvent();

			console.log(ratio);
			$(".roots_con.responsive").css({'top': root_y});
			// $(".roots_con").css({'top': root_y}).find('img').css({'width': roots_img});

			var ImageMap = function (map) {
            	var n,
            	    areas = map.getElementsByTagName('area'),
            	    len = areas.length,
            	    coords = [],
            	    previousWidth = 2000;
            	for (n = 0; n < len; n++) {
            	    coords[n] = areas[n].coords.split(',');
            	}
            	this.resize = function () {
            	    var n, m, clen,
            	        x = $('.owl_flyin').width() / previousWidth;
            	    for (n = 0; n < len; n++) {
            	        clen = coords[n].length;
            	        for (m = 0; m < clen; m++) {
            	            coords[n][m] *= x;
            	        }
            	        areas[n].coords = coords[n].join(',');
            	    }
            	    previousWidth = $('.owl_flyin').width();
            	    return true;
            	};
            	window.onresize = this.resize;
        	},
        	imageMap = new ImageMap(document.getElementById('map'));
    		imageMap.resize();
    		window.scrollTo(0,1);
		});