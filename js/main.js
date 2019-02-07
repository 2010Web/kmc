		function get_ratio() {
			  if (self.innerWidth) {
			  	return((self.innerHeight/self.innerWidth).toFixed(2)*100);
			  }
			  if (document.documentElement && document.documentElement.clientWidth) {
			    return ((document.documentElement.clientHeight/document.documentElement.clientWidth).toFixed(2)*100);
			  }
			  if (document.body) {
			  	 return((document.body.clientHeight/document.body.clientWidth).toFixed(2)*100);
			  }
		}
		function whichTransitionEvent(){
		  var t,
		      el = document.createElement("fakeelement");
		
		  var transitions = {
		    "transition"      : "transitionend",
		    "OTransition"     : "oTransitionEnd",
		    "MozTransition"   : "transitionend",
		    "WebkitTransition": "webkitTransitionEnd"
		  }
		
		  for (t in transitions){
		    if (el.style[t] !== undefined){
		      return transitions[t];
		    }
		  }
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
		jQuery(document).ready(function() {
			var slide = 0,
				button_disabler = true,
				last_slide = 0,
				last_frame = '';
				tree = $('.tree'),
				hill = $('.hill'),
				frame = tree.find('.frame'),
				subframe = '',
				yammer_page = false , 
				transitionEvent = whichTransitionEvent();
				
			function start() {
				slide = 0;
				last_slide = 0;
				last_frame = '';
				hill.attr('class','hill zero');
				tree.attr('class','tree zero').one(transitionEvent,   
  					function(e) {
  						console.log("Start");
  						frame.attr('class','frame zero a')
  					  	button_disabler = false;
  					}
  				);
			}
			start();

			document.onkeydown = checkKey;
			function checkKey(e) {
				e.preventDefault();
   				e = e || window.event;
   				if (!button_disabler) {
					if ((e.keyCode == '38' || e.keyCode == '39' || e.keyCode == 13) && 12 > (slide + 1)) {
						button_disabler = true;
   						core(++slide);
   					}
   					else if ((e.keyCode == '40'|| e.keyCode == '37' || e.keyCode == 8) && 0 < (slide)) {
   						button_disabler = true;
			   			core(--slide);
   					}
   				}
   			}
			function core(slide){
				state = '';
				subframe = '';
				hill_state = '';
				switch(slide) {

					case 13: state = 'yammer '.concat(state);   subframe += 'yammer a ';
					case 12: state = 'nine '.concat(state); 	subframe += 'nine a ';
					case 11: state = 'eight '.concat(state); 	subframe += 'eight a ';
					case 10:                  					subframe += 'seven b ';
					case  9: state = 'seven '.concat(state); 	subframe += 'seven a ';
					case  8:                   					subframe += 'six b ';  
					case  7: state = 'six '.concat(state);   	subframe += 'six a ';  
					case  6: state = 'four '.concat(state);  	subframe += 'four a '; 
					case  5:                   					subframe += 'three b ';
					case  4: state = 'three '.concat(state); 	subframe += 'three a ';
					case  3: state = 'two '.concat(state);   	subframe += 'two a ';  
					case  2: state = 'one '.concat(state);   	subframe += 'one a ';  
					case  1: 									subframe += 'zero b ';
					case  0: state = 'zero '.concat(state);  	subframe += 'zero a ';
    				default:
    				 hill_state = 'hill '.concat(state).trim();
    				 state = 'tree '.concat(state).trim();
    				 subframe = subframe.split(' ');
    				 change = (state == tree.attr('class') ? false : true);
					 subframe = subframe[0] + " " + subframe[1];
					 $('.dots > .dot').removeClass('active');
					 $("[data-slide='"+slide+"']").addClass('active');				 
				}
				frame.attr('class', 'frame').find('img, .owl, .dot ,.arrow').one(transitionEvent,function(e){e.stopPropagation();window.event.cancelBubble = true;});;
				if (change) {
					hill.attr('class' , hill_state);
					tree.attr('class' , state).one(transitionEvent,function(e){
  						console.log("Frame");
  						frame.addClass(subframe);
  						button_disabler = false;
  					});
				}else{
					frame.addClass(subframe);
					button_disabler = false;
				}
			}
   			$( "area:not(#video)" ).click(function(circle) {
  				script = $("[data-hover='"+circle.target.id+"']");
            	coords = this.coords.split(',');
            	offset_x = (Math.floor($('.owl_flyin').position()['left']) + Math.floor(coords[2]));
            	offset_y = (Math.floor($('.owl_flyin').position()['top']) + Math.floor(coords[1]));
  				css = {
  					"top" : offset_y+"px",
  					"left" : offset_x+"px",
  					"display" : "block",
  				}
				script.css(css);
				$('.script_overlay').css({'z-index': '99999'});
				button_disabler = true;
  			});
  			$('.script_overlay').click(function() {
  				$(this).css({'z-index': '0'});
				$(".script").css({"display" : "none",});
				button_disabler = false;
			});
			$('.arrow').click(function() {
				if (!button_disabler) {
					core(++slide);
				}
			});
			$('.dots > .dot, #talk, #team, #home').on('click', function(){
				if (!button_disabler) {
					button_disabler = true;
					slide = parseInt($(this).attr('data-slide'));
					core(slide);
				}				
			});
			
		});
	jQuery(function () {
		$('.our_team_button').on('click', function(e){	
	    	$('.our_team_button').removeClass('on');
	    	$("#member_info").removeClass($('#member_info').attr('class').split(' ').pop()).addClass($(this).attr('class').split(' ').pop());
	    	$(this).addClass('on');
		});
		// $('#jill').on('click', function(){	    
	 //    $(this).addClass('member_jill_on');
		// 	$('#linda').removeClass('member_linda_on');
		// 	$('#joanna').removeClass('member_joanna_on');
		// 	$('#peter').removeClass('member_peter_on');
		// 	$("#member_info").css('background-image', 'url("images/ipad-info-jill.png")');
		// });
		
		// $('#linda').on('click', function(){	    
	 //    $(this).addClass('member_linda_on');
		// 	$('#jill').removeClass('member_jill_on');
		// 	$('#joanna').removeClass('member_joanna_on');
		// 	$('#peter').removeClass('member_peter_on');
		// 	$("#member_info").css('background-image', 'url("images/ipad-info-linda.png")');
		// });
		
		// $('#joanna').on('click', function(){	    
	 //    $(this).addClass('member_joanna_on');
		// 	$('#jill').removeClass('member_jill_on');
		// 	$('#linda').removeClass('member_linda_on');
		// 	$('#peter').removeClass('member_peter_on');
		// 	$("#member_info").css('background-image', 'url("images/ipad-info-joanna.png")');
		// });
		
		// $('#peter').on('click', function(){	    
	 //    $(this).addClass('member_peter_on');
		// 	$('#jill').removeClass('member_jill_on');
		// 	$('#linda').removeClass('member_linda_on');
		// 	$('#joanna').removeClass('member_joanna_on');
		// 	$("#member_info").css('background-image', 'url("images/ipad-info-peter6.png")');
		// });
        	
    });
	yam.connect.embedFeed({
		container: "#embedded-feed",
		network: "its.jnj.com",
		feedType: "group",
		feedId: "15055970",
		config: {
             header: "false"      // specify no header 
        }
	});

	jQuery('#video').magnificPopup({
        type: 'iframe',
        items: {
	     		src:'https://player.vimeo.com/video/301213705'
     		},
    		iframe: {
    		    patterns: {
    		        vimeo: {
    		            index: 'vimeo.com/', 
    		            id: function(url) {        
    		                var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
    		                if ( !m || !m[5] ) return null;
    		                return m[5];
    		            },
    		            src: 'https://player.vimeo.com/video/%id%?autoplay=1&title=0&byline=0'
    		        }
    		    }
    		},
    		enableEscapeKey: false,
		});