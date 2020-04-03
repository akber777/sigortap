$(document).ready(function(){


	let x=0




	$('.dataAges').parents('li').find('.ageBtnUp').click(function(){


		x++


		$('.dataAges').val(x)




	})







	$('.dataAges').parents('li').find('.ageBtnDown').click(function(){


		x--


		$('.dataAges').val(x)


		if(x<=0)
		{	
			$('.dataAges').val('0')

			x=0

		}


	})



// end


let y=0





$('.dataAges2').parents('li').find('.ageBtnUp').click(function(){


	y++


	$('.dataAges2').val(y)




})







$('.dataAges2').parents('li').find('.ageBtnDown').click(function(){


	y--


	$('.dataAges2').val(y)


	if(y<=0)
	{	
		$('.dataAges2').val('0')

		y=0

	}


})



// end






// end


let z=0





$('.datanew').parents('li').find('.ageBtnUp').click(function(){


	z++


	$('.datanew').val(z)




})







$('.datanew').parents('li').find('.ageBtnDown').click(function(){


	z--


	$('.datanew').val(z)


	if(z<=0)
	{	
		$('.datanew').val('0')

		z=0

	}


})



// end








})