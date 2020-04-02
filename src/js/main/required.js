$(document).ready(function(){





	
	let submitInputs=$('.search_top input')





	$(document).on('submit',submitInputs,function(e){


		$('form input[class="required"]').each(function(){


			let inpval=$(this).val();


			if(inpval.trim()=="")
			{	
				$(this).addClass('invalidInputs');

				e.preventDefault();
			}
			if(inpval.trim()!="")
			{
				$(this).removeClass('invalidInputs');
			}


		})



		$( '#travel_form select[class="required"] option:selected' ).each(function(){


			let selectVal=$(this).val();


			if(selectVal.trim()=="")
			{	
				$(this).parent('select').addClass('invalidInputs');

				e.preventDefault();
			}
			if(selectVal.trim()!="")
			{
				$(this).parent('select').removeClass('invalidInputs');
			}


		})



	})











})