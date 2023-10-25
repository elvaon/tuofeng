
function videoAppend(){
	var strVar = "";
    strVar += "<!--\n";
    strVar += "		video_open\n";
    strVar += "	-->\n";
    strVar += "<div class=\"video_window_mask\">\n";
    strVar += "<\/div>\n";
    strVar += "<div class=\"video_window\">\n";
    strVar += "	<div class=\"video_window_rela\">\n";
    strVar += "		<iframe class=\"video_window_ifeame\" width=\"100%\" height=\"100%\" src=\"\">\n";
    strVar += "		<\/iframe>\n";
    strVar += "		<div class=\"video_window_close\">\n";
    strVar += "			x\n";
    strVar += "		<\/div>\n";
    strVar += "	<\/div>\n";
    strVar += "<\/div>\n";
    $("body").append(strVar);
}

function videoOpen(obj) {
	$(obj).click(function(){
		var videoUrl = $(this).find("a").attr("rel");
		$(".video_window").find("iframe").attr("src",videoUrl);
		$(".video_window,.video_window_mask").fadeIn();
	})
	
	$(".video_window_close,.video_window_mask").click(function(){
		$(".video_window,.video_window_mask").fadeOut();
	})
}

$(function() {
	$('table').wrap("<div class='pro_table'></div>");
	//pc serch
	$('.h_serch_icon').click(function(){
		var w = $(window).width();
		if(w<991){
			if($(this).hasClass('show')){
				$(this).removeClass('show');
				$('.search_box').stop().slideUp()
			}else{
				$(this).addClass('show');
				$('.search_box').stop().slideDown();
				$('.lan_t').removeClass('show');
				$('.lan_b').stop().slideUp();
				$(".menu").stop().slideUp().removeClass('show');
			}
		}else{
			$(this).siblings('.search_box').addClass('show')
		}
		
	})
	$('.serch_close').click(function(){
		$(this).parent('.search_box').removeClass('show')
	})
	//pc lang
	$('.lan_t').click(function(){
		var w = $(window).width();
		if(w<991){
			if($(this).hasClass('show')){
				$(this).removeClass('show');
				$('.lan_b').stop().slideUp()
			}else{
				$(this).addClass('show');
				$('.lan_b').stop().slideDown();
				$('.h_serch_icon').removeClass('show');
				$('.search_box').stop().slideUp();
				$(".menu").stop().slideUp().removeClass('show');
			}
		}else{
			$(this).siblings('.lan_b').stop().slideToggle()
		}
		
	})
	//手机端导航下拉
	$(".menu_btn").click(function() {
		var w = $(window).width();
		if($(".menu").hasClass('show')){
				$(".menu").stop().slideUp().removeClass('show');
		}else{
			$(".menu").stop().slideDown().addClass('show');
			$(".h_serch_icon").removeClass('show');
			$('.search_box').stop().slideUp();
			$('.lan_t').removeClass('show');
			$('.lan_b').stop().slideUp();
		}
		
	})
	$('.menu_tt i').click(function(){
		$(this).parent('.menu_tt').siblings('.menu_second_box').stop().slideToggle();
	})
	// var banners = $('.banners');
	// banners.owlCarousel({
		// autoplay: true,
		// loop: true,
		// items: 1,
		// autoplayTimeout:3000
	// })
	$('.footer_t .item.show').find('.foot_wrap').show();
	$('.foot_title').click(function(){
		var item = $(this).parents('.item');
		if(item.hasClass('show')){
			item.removeClass('show').find('.foot_wrap').stop().slideUp();
		}else{
			item.addClass('show').find('.foot_wrap').stop().slideDown();
		}
	})
	// var about_scroll = $('.about_scroll');
	// about_scroll.owlCarousel({
		// autoplay: false,
		// loop: false,
		// dots: true,
		// responsive:{
			// 991:{
            	// items:3,
            	// margin:15,
            // },
            // 768:{
            	// items:2,
            	// margin:15,
            // },
            // 0:{
            	// items:1
            // }
            
        // }
	// })
	
	// var ind_news_scroll = $('.ind_news_scroll');
	// ind_news_scroll.owlCarousel({
		// autoplay: false,
		// loop: false,
		// dots: true,
		// responsive:{
			// 991:{
            	// items:3,
            	// margin:15,
            // },
            // 768:{
            	// items:2,
            	// margin:15,
            // },
            // 0:{
            	// items:1
            // }
            
        // }
	// })
	
	
	
	// var pro_det_scroll = $('.pro_det_scroll');
		// pro_det_scroll.owlCarousel({
		// autoplay:false,
		// autoplayTimeout:3000,
		// loop: false,
		// items:1,
		// dots:true,
		// dotsSpeed:1000,
		// dotsContainer: '.pro_det_dot',
		// mouseDrag:false,
	// })
	
	// var pro_wrap_det_scroll = $('.pro_wrap_det_scroll');
	// pro_wrap_det_scroll.owlCarousel({
		// autoplay: false,
		// loop: false,
		// dots: true,
		// items: 1,
	// })
	
	
	$('.pro_det_box_wrap a').click(function(){
		var index = $(this).index();
		var h = $('.pro_des').eq(index).offset().top;
		$(this).addClass('active').siblings('a').removeClass('active');
		var w = $(window).width();
		if(w<991){
			$("html,body").finish().animate({"scrollTop":h-170},900);
		}else{
			$("html,body").finish().animate({"scrollTop":h-200},900);
		}
		
	})
	
	
	// var sub_scroll = $('.sub_scroll');
	// sub_scroll.owlCarousel({
		// autoplay: true,
		// autoplayTimeout:3500,
		// loop: true,
		// dots: true,
		// items: 1,
	// })
	

	// var about_quality_scroll1 = $('.about_quality_scroll1');
	// about_quality_scroll1.owlCarousel({
		// autoplay: true,
		// loop: true,
		// dots: true,
		// items:3,
        // margin:10,
		
	// })


	$(".service_faq_list dd:first-child").addClass("hover").find(".service_faq_list_text").slideDown();

	$(".service_faq_list dd").click(function(){
		$(this).addClass("hover").siblings("dd").stop(true,true).removeClass("hover");
		$(this).find(".service_faq_list_text").stop(true,true).slideDown();
		$(this).siblings("dd").find(".service_faq_list_text").stop(true,true).slideUp();
	})
	
	
	$(".back_top").click(function(){
		$("html,body").animate({"scrollTop":"0"},600);
	})
	
	
	$(".news_det .content a").attr("target","blank");
	
	
})
$(window).scroll(function() {
	var scrollT = $(window).scrollTop();
	var w = $(window).width();
	var h = $(window).height();
	if(w > 991){
		if(scrollT > 50){
			$('.header_box').addClass('fixed')
		}else{
			$('.header_box').removeClass('fixed')
		}
	}
})
$(window).load(function(){
	var w = $(window).width();
	var h = $(window).height();
	if(w<991){
		
	}else{
		$(".menu_dl dd").hover(function(){
			$(".menu_dl dd.hover").addClass("active").removeClass('hover')
			$(this).find(".menu_second_box").stop().slideDown();
			$(this).addClass("hover").prev('dd').find('.menu_tt').find('a').addClass('none');
			
		},function(){
			$(this).removeClass("hover").prev('dd').find('.menu_tt').find('a').removeClass('none');
			$(".menu_dl dd.active").addClass("hover").removeClass("active");
			$(this).find(".menu_second_box").stop().slideUp();
		})
		
		$(".menu_two").hover(function(){
			$(this).siblings(".menu_two.hover").addClass('active');
			$(this).addClass('hover');
			$(this).siblings('.menu_two').removeClass('hover');
		},function(){
			$(".menu_two.active").addClass('hover').siblings('.menu_two').removeClass('hover');
//			$(this).find(".menu_three").stop().hide();
		})
		
	}
	
	
})

$(window).resize(function(){
	var w = $(window).width();
	if(w>991){
//		$('.mobile_head').hide();
		$('.header_box .menu').show()
	}else{
//		$('.mobile_head').show();
	}
	
})
