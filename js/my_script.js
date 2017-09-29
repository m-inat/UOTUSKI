// JavaScript Document
$(function(){
	
	var hamIn = $('#ham_menu_inner'); 
	var hamBtn = $('.ham_btn');
	var mmNav = $('#mobile_move_nav');
	var hamClose = $('.ham_close');
	var pmNav = $('#pc_move_nav');
	var pageTop = $('#page_top');
	
	$(window).load(function(){
		hamIn.show();
		pageTop.show();
	});
	
	hamIn.css('margin-left','-100%');
	hamBtn.on('click',function(){
		$(this).addClass('on');
		mmNav.addClass('on');
		hamClose.addClass('on');
		if($(this).hasClass('on')){
			hamIn.animate({'margin-left':'0'},'slow','swing');
		}
	});
	hamIn.on('click',function(){
		hamIn.animate({'margin-left':'-100%'});
		mmNav.removeClass('on');
		hamBtn.removeClass('on');
		hamClose.removeClass('on');
	});
	
	$('.down').on('click',function(){
		$(this).toggleClass('stop');
		$('body,html').animate({
			scrollTop: $('#header').height() 
        }, 1000);
        return false;
	});
	
//	mobile navigation
	
	var flag = "up";
	
	$(window).on("scroll",function(){
    if($(this).scrollTop() > $('#top #concept').
	   height()+650){
      if(flag === "up"){
		  mmNav.stop().animate({
			  top: 0
		  },500);
		  pmNav.stop().
		  animate({
			  top: 0
		  },500);
        flag = "down";
      }
    }else{
      if(flag === "down"){
		  mmNav.stop().animate({
			  top:"-100px"
        },500);
		  pmNav.stop().
		  animate({
			  top: '-100px'
		  },500);
        flag = "up";
      }
    }
  });
	
//	top button
		
    var showFlag = false;
	
    pageTop.css('margin-right','-100px');
    $(window).scroll(function(){
        if($(this).scrollTop() > $('main').height()){
            if(showFlag === false){
                showFlag = true;
                pageTop.stop().animate({
					'margin-right':'0px'
				},500); 
            }
        }else{
            if(showFlag){
                showFlag = false;
                pageTop.stop().animate({
					'margin-right':'-100px'
				},500); 
            }
        }
    });
    pageTop.click(function(){
        $('body,html').animate({
            scrollTop: 0
        },1500);
        return false;
    });
	
	$('#logo_link_top').on('click',function(){
		$('body,html').animate({
		scrollTop: 0
		},1500);
		return false;
	});
	
	$('#logo_link_top_pc').on('click',function(){
		$('body,html').animate({
		scrollTop: 0
		},1500);
		return false;
	});
	
//	carousel
	
	$('#slide1').slick({
		autoplay: true,
		dots: true,
		speed: 1000,
	});
	$('#slide2').slick({
		autoplay: true,
		dots: true,
		speed: 1000,
	});
	$('#slide3').slick({
		autoplay: true,
		dots: true,
		speed: 1000,
	});
	
//	animation move
	
	var windowWidth = window.innerWidth;
	
	$('a[href^=#]').click(function(){
		var speed = 1000;
		var href = $(this).attr('href');
		var target = $(href === '#' || href === "" ? 'html':href);
		if(windowWidth > 768){
		var position = target.offset().top;
		$('html,body').animate({
		scrollTop:position
		},speed);
		
		hamIn.animate({'margin-left':'-100%'});
		
		mmNav.removeClass('on');
		hamBtn.removeClass('on');
		hamClose.removeClass('on');
		
		return false;
		}
	});
	
//pc_move_nav
	
	var menu1 = $('#concept').offset().top-50;
	var menu2 = $('#food_menu').offset().top-50;
	var menu3 = $('#drink_menu').offset().top-50;
	var menu4 = $('#our_pride').offset().top-50;
	var menu5 = $('#our_restaurant').offset().top-50;
	var menu6 = $('#access').offset().top-50;
 
   $(window).scroll(function(){
      if($(this).scrollTop() > menu1) {
         $('.pm1 a').addClass('hover');
      } else {
         $('.pm1 a').removeClass('hover');
      }
      if($(window).scrollTop() > menu2) {
         $('.pm2 a').addClass('hover');
         $('.pm1 a').removeClass('hover');
      } else {
         $('.pm2 a').removeClass('hover');
      }
      if($(window).scrollTop() > menu3) {
         $('.pm3 a').addClass('hover');
         $('.pm2 a').removeClass('hover');
      } else {
         $('.pm3 a').removeClass('hover');
      }
      if($(window).scrollTop() > menu4) {
         $('.pm4 a').addClass('hover');
         $('.pm3 a').removeClass('hover');
      } else {
         $('.pm4 a').removeClass('hover');
      }
      if($(window).scrollTop() > menu5) {
         $('.pm5 a').addClass('hover');
         $('.pm4 a').removeClass('hover');
      } else {
         $('.pm5 a').removeClass('hover');
      }
      if($(window).scrollTop() > menu6) {
         $('.pm6 a').addClass('hover');
         $('.pm5 a').removeClass('hover');
      } else {
         $('.pm6 a').removeClass('hover');
      }
   });
	
//fadeIn_animation
	
	if(windowWidth > 768){
		var fadeIn = $('.fadeIn');
		var fadeIn2 = $('.fadeIn_h2');
		var fadeIn3 = $('.fadeIn_late');
		fadeIn.css('visibility','hidden');
		fadeIn2.css('visibility','hidden');
		fadeIn3.css('visibility','hidden');
		$(window).scroll(function(){
			var windowHeight = $(window).height(),
			topWindow = $(window).scrollTop();
			fadeIn.each(function(){
				var targetPosition = $(this).offset().top;
				if(topWindow > targetPosition - windowHeight +300){
					$(this).addClass("fadeInUp");
				}
			});
			fadeIn2.each(function(){
				var targetPosition = $(this).offset().top;
				if(topWindow > targetPosition - windowHeight +500){
					$(this).addClass("fadeInUp");
				}
			});
			fadeIn3.each(function(){
				var targetPosition = $(this).offset().top;
				if(topWindow > targetPosition - windowHeight +550){
					$(this).addClass("fadeInUpLate");
				}
			});
		});
	}
	
//fadeIn animation header
	
	if(windowWidth > 768){
		
		var fadeInDown1 = $('#fadeInDown1');
		var fadeInDown2 = $('#fadeInDown2');
		var fadeInDown3 = $('#fadeInDown3');
		var fadeInDown4 = $('#fadeInDown4');
		
		fadeInDown1.css('visibility','hidden');
		fadeInDown2.css('visibility','hidden');
		fadeInDown3.css('visibility','hidden');
		fadeInDown4.css('visibility','hidden');
		
		$(window).load(function(){
			fadeInDown1.addClass('fadeInDown1');
			fadeInDown2.addClass('fadeInDown2');
			fadeInDown3.addClass('fadeInDown3');
			fadeInDown4.addClass('fadeInDown4');
		});
	}
});


