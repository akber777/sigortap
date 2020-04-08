$(document).ready(function(){



	$('.register__popup .close_login').click(function(){



		$(this).parents('.register__popup').fadeOut();



	})



	$('.registrTOSign').click(function(){


		$(this).parents('.register__popup').fadeOut();

		$('.back_login_color').fadeIn();


	})


	$('.sign').on('click',function(){

		$('.register__popup').fadeIn();

	})


	$('.sign_up_btn').click(function(){


		$(this).parents('.back_login_color').fadeOut();

		$('.register__popup').show();





	})

















})