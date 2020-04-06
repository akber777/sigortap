$(document).ready(function(){
	

	let myindex=0

	$('.checked_label').click(function(){

		$('.myPopup_filter').removeClass('myPopup_filterShow');

		let myCheckVal=$(this).find('input:checked').val();


		if(myCheckVal=='on')
		{	
			myindex++


			console.log(myindex)

			$(this).attr('data-checked',true);

			if(myindex<2)
			{	
				$(this).next('.myPopup_filter').find('button').hide();
				$(this).next('.myPopup_filter').find('span').text('');
				$(this).next('.myPopup_filter').find('span').text('karsilastirmaq ucun 2 den cox olmalidir');
				$(this).next('.myPopup_filter').addClass('myPopup_filterShow');
			}
			else{
				$(this).next('.myPopup_filter').find('span').text('');
				$(this).next('.myPopup_filter').find('span').text('karsilastir');
				$(this).next('.myPopup_filter').find('button').show();
				$(this).next('.myPopup_filter').addClass('myPopup_filterShow');
			}

			
		}
		if(myCheckVal!='on'){

			myindex--


			$(this).attr('data-checked',false);

			$(this).next('.myPopup_filter').removeClass('myPopup_filterShow');


			if(myindex<=1)
			{	


				$('.checked_label').each(function(){


					let mydata=$(this).attr('data-checked');


					if(mydata=='true')
					{
						$(this).next('.myPopup_filter').find('button').hide();
						$(this).next('.myPopup_filter').find('span').text('');
						$(this).next('.myPopup_filter').find('span').text('karsilastirmaq ucun 2 den cox olmalidir');
						$(this).next('.myPopup_filter').addClass('myPopup_filterShow');
					}

				})
			}else{
				$(this).next('.myPopup_filter').find('span').text('');
				$(this).next('.myPopup_filter').find('span').text('karsilastir');
				$(this).next('.myPopup_filter').find('button').show();
				$(this).next('.myPopup_filter').addClass('myPopup_filterShow');
			}
		}




	})



	$('.closemyPopup').click(function(){

			$(this).parents('.myPopup_filter').removeClass('myPopup_filterShow');

			console.log('ok')

	});






	
})