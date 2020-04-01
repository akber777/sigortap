$(document).ready(function(){







	let date = new Date();
	date.setDate(date.getDate());

	$( "#datepickerStart" ).datepicker({

		startDate: date
	});





	let date2 = new Date();
	date2.setDate(date2.getDate());

	$( "#datepickerEnd" ).datepicker({

		startDate: date2
	});




	let date3 = new Date();
	
	let newdates=date3.toString().split(" ");


	let mymap=new Map();

	mymap.set(newdates,'maps');

	for(key of mymap)
	{
		
		let parseDate=parseInt(key[0][3] - '70');

		let addString=key[0]

		let index = addString.indexOf(key[0][3]);

		if (index !== -1) {


			console.log()

			let myoldkeys=key[0][index] = parseDate;
			
			let thisMonth=new Date();

			let montIndex='0'+thisMonth.getMonth()

			
			let mydates=new Date(key[0][3],montIndex,key[0][2]);



			$( "#datepickerBirthday" ).datepicker({
				dateFormat:'dd-M-yy',
				startDate: mydates
			});


		}

	}


// end




let date4 = new Date();

let newdates2=date4.toString().split(" ");


let mymap2=new Map();

mymap2.set(newdates2,'mapsnew');

for(key of mymap2)
{

	let parseDate=parseInt(key[0][3] - '65');

	let addString=key[0]

	let index = addString.indexOf(key[0][3]);

	if (index !== -1) {


		console.log()

		let myoldkeys=key[0][index] = parseDate;

		let thisMonth=new Date();

		let montIndex='0'+thisMonth.getMonth()


		let mydates=new Date(key[0][3],montIndex,key[0][2]);



		$( "#tkBirthday" ).datepicker({
			dateFormat:'dd-M-yy',
			startDate: mydates
		});	


	}

}

// end




})