$(document).ready(function () {


    $('.name_a_head').click(function () {


        $('.back_login_color').fadeIn();




    })



    $('.middle_ul li').click(function () {


        if( $(this).find('.content_middle').hasClass('openContent')==false)
        {
           $(this).find('.content_middle').addClass('openContent')
        }
        else{
            $(this).find('.content_middle').removeClass('openContent')
        }



    })







})