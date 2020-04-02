$(document).ready(function(){





	
	let submitInputs=document.querySelectorAll('.search_top input')[0];


	let myinp=$(".search_top input");


	submitInputs.onclick=function(event){


		let myinput=document.querySelectorAll('input.required');


		for(let i=0;i<myinput.length;i++)
		{

			let myinpVal=myinput[i].value;


			if(myinpVal.trim()=="")
			{

				let myInputsChange=myinput[i];


				myInputsChange.classList.add('invalidInputs')
				

				event.preventDefault();

			}
			else{

				let myInputsChange=myinput[i];

				myInputsChange.classList.remove('invalidInputs')
			}

			
		}


		// end


	}







	myinp.click(function(event){


		let myform=$(this).parents('form');

		myform.find('select').each(function(){


			


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