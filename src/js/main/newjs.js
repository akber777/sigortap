$(document).ready(function(){


$('.back_center_in .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    arrow:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$('.section_logo .owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    arrows:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:7
        }
    }
})


// $('.rating input').change(function () {
//   var $radio = $(this);
//   $('.rating .selected').removeClass('selected');
//   $radio.closest('label').addClass('selected');
// });


	
$('#input-3').rating({});




// $('.section1_inputs_in .all_inputs_section1').hide();

// $('.section1_inputs_in .all_inputs_section1:first').show();


// $('.section1_inputs ul li').on('click',function(e){

	

// 	e.preventDefault();

// 	var index=$(this).index();

// 	$(this).parents('.tab_header_new ').find('.section1_inputs_in .all_inputs_section1').hide();

// 	$(this).parents('.tab_header_new ').find('.section1_inputs_in .all_inputs_section1').eq(index).fadeIn();

// })


// // new header tab

// $('.all_header_tab .tab_header_new').hide();

// $('.all_header_tab .tab_header_new:first').show();


// $('.main_btn_top ul li').on('click',function(e){




// 	e.preventDefault();

// 	var index=$(this).index();

// 	$('.all_header_tab .tab_header_new').hide();

// 	$('.all_header_tab .tab_header_new').hide().eq(index).fadeIn();

// })


// // new header tab end

	
// // add active start



// $('.tab_header_new .section1_inputs ul li a').eq(0).addClass('active_color');

// $('.tab_header_new .section1_inputs ul li').on('click',function(){

// 	$('.tab_header_new .section1_inputs ul li a').removeClass('active_color');

// 	$(this).find('a').addClass('active_color');


// 	$('.section1_inputs_in').hide();

// 	$(this).parents('.tab_header_new').find('.section1_inputs_in').show();

// })

// // add active end


// $('.background_img_main > img').hide();

// $('.background_img_main > img:first').show();

// $('.main_btn_top ul li:first').find('button').addClass('active_color');

// $('.main_btn_top ul li').on('click',function(){

// $('.main_btn_top ul li').find('button').removeClass('active_color');

// $(this).find('button').addClass('active_color');


// var new_index=$(this).index();

// $('.background_img_main > img').fadeOut();

// $('.background_img_main > img').eq(new_index).fadeIn();


// })


// login popup 


$('.sign_in, .sign').on('click',function(){

	$('.back_login_color').fadeIn();


})


$('.open_firend_').on('click',function(){
    
    $('.back_login_profile').fadeOut();
    
	$('.back_login_color2').fadeIn();
	


})



$('.close_login button').on('click',function(){

	$('.back_login_color').fadeOut();

})

$('.close_login button').on('click',function(){

	$('.back_login_color2').fadeOut();

})


// search input popup

	$(document).on('click','.header_button',function(){

		$('.back_input_color').fadeIn();


	})


	$(document).on('click','.close_input_search',function(){

		$('.back_input_color').fadeOut();


	})


// search input end



$(document).on('click','.center_top_ul li:last-child',function(){

	$('.back_login_color').fadeIn();

})



$('.close_login2 button').on('click',function(){

	$('.back_login_color').fadeOut();

})



$(document).on('click','.fafa_font,.fafa_font2',function(){

	$('.back_color_police').fadeIn();

	console.log('ok')

})



$('.close_police button').on('click',function(){

	$('.back_color_police').fadeOut();

})




$('.faq_ul li  button').removeClass('color_back_btn');

$('.faq_ul li:first button').addClass('color_back_btn');


$('.faq_ul li').on("click",function(){

	$('.faq_ul li button').removeClass('color_back_btn');

	$(this).find('button').addClass('color_back_btn')


})



$('.content_middle').hide();




$('.middle_ul2 > p').removeClass('color_back_btn');

	$('.middle_ul2 > p').addClass('after_p')



var x=0

$('.middle_ul2 > p').on("click",function(){


	if(x==0)
	{


	$('.middle_ul2 > p').removeClass('new_after_p');

	$('.middle_ul2 > p').removeClass('color_back_btn');

	$(this).addClass('new_after_p')

	$(this).addClass('color_back_btn');

	$(this).parent().parent().find('.content_middle').stop().slideDown();


	x=1

	}
	else{

		$('.middle_ul2 > p').removeClass('color_back_btn');

		$('.middle_ul2 > p').removeClass('new_after_p');

		$(this).removeClass('new_after_p')

		$(this).removeClass('color_back_btn');

		$('.middle_ul2').find('.content_middle').stop().slideUp();
		x=0
	}


})



// slide end


$('.faq_middle_all .faq_middle').hide();

$('.faq_middle_all .faq_middle:first').show();

$('.faq_ul li').on('click',function(){


	var index=$(this).index();

	$('.faq_middle_all .faq_middle').hide();

	$('.faq_middle_all .faq_middle').eq(index).fadeIn();

})



// index tab



$('.middle_ul2 li').click(function(){
    
    
        var offset_this=$(this).offset().top;
        
        console.log(offset_this)
      
        setTimeout(offset_interval,500)
          
        function offset_interval(){
        
          $('html,body').animate({
        
          scrollTop:(offset_this - 20)
        
        })

    }

 })


// second tab


$('.content_filter').hide();


var z=0

$('.li_button_end button').on("click",function(){


	if(z==0)
	{


	$(this).parent().next().stop().slideDown();

	$(this).text('bağla');

	$(this).addClass('add_new_img')

	z=1

	}
	else{

		$(this).text('ətraflı');

		$(this).parent().next().stop().slideUp();
		z=0
	}


})


$('.li_button_end button').click(function(){
    
    
        var offset_this=$(this).parents('.filter_ul li').offset().top;
        
        console.log(offset_this)
      
        setTimeout(offset_interval,500)
          
        function offset_interval(){
        
          $('html,body').animate({
        
          scrollTop:(offset_this - 20)
        
        })

    }

 })
 
 
 
 
//  mobile menu

$(document).on('click','.mobile_menu',function(){
    
    
    $('.mobile_menu_card').addClass('mobile_menu_card_enable');
    
    
    
})



$(document).on('click','.mobile_close',function(){
    
    
    $('.mobile_menu_card').removeClass('mobile_menu_card_enable');
    
    
    
})


// radio checked

$('.ceheckbox_div_ul input[type="radio"]').removeClass('radio_input');

$('.ceheckbox_div_ul input[type="radio"]').click(function(){

	$('.ceheckbox_div_ul input[type="radio"]').removeClass('radio_input');

	$(this).addClass('radio_input');


})




// jquery end

});









