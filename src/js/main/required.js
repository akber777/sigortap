$(document).ready(function(){


	let myinp=$(".search_top input");


	myinp.click(function(event){


		// ---------------end


		let myform=$(this).parents('form');


		myform.find('input.required').each(function(){


			if($(this).val()=="")
			{
				$(this).addClass('invalidInputs');

				event.preventDefault();
			}
			else{
				$(this).removeClass('invalidInputs')
			}


		})

		


		// 	end ------------------


		myform.find('select.required').each(function(){


			if($(this).find('option:selected').val()=="")
			{
				$(this).addClass('invalidInputs');


				event.preventDefault();

			}else{

				$(this).removeClass('invalidInputs')
			}

		})


	})













})