$(document).ready(function(){





	
	// let submitInputs=document.querySelectorAll('.search_top input')[0];


	// submitInputs.onclick=function(event){


	// 	let myinput=document.querySelectorAll('input.required');


	// 	for(let i=0;i<myinput.length;i++)
	// 	{

	// 		let myinpVal=myinput[i].value;


	// 		if(myinpVal.trim()=="")
	// 		{

	// 			let myInputsChange=myinput[i];


	// 			myInputsChange.classList.add('invalidInputs')


	// 			event.preventDefault();

	// 		}
	// 		else{

	// 			let myInputsChange=myinput[i];

	// 			myInputsChange.classList.remove('invalidInputs')
	// 		}


	// 	}


	// 	// end


	// }





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