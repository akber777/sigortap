$(document).ready(function(){

	// image uploader scripts

	var $dropzone = $('.image_picker'),
	$droptarget = $('.drop_target'),
	$dropinput = $('#inputFile'),
	$dropimg = $('.image_preview'),
	$remover = $('[data-action="remove_current_image"]');

	$dropzone.on('dragover', function() {
		$droptarget.addClass('dropping');
		return false;
	});

	$dropzone.on('dragend dragleave', function() {
		$droptarget.removeClass('dropping');
		return false;
	});

	$dropzone.on('drop', function(e) {
		$droptarget.removeClass('dropping');
		$droptarget.addClass('dropped');
		$remover.removeClass('disabled');
		e.preventDefault();

		var file = e.originalEvent.dataTransfer.files[0],
		reader = new FileReader();

		reader.onload = function(event) {
			$dropimg.css('background-image', 'url(' + event.target.result + ')');
		};

		console.log(file);
		reader.readAsDataURL(file);

		return false;
	});

	$dropinput.change(function(e) {
		$droptarget.addClass('dropped');
		$remover.removeClass('disabled');
		$('.image_title input').val('');

		var file = $dropinput.get(0).files[0],
		reader = new FileReader();

		reader.onload = function(event) {
			$dropimg.css('background-image', 'url(' + event.target.result + ')');
		}

		reader.readAsDataURL(file);
	});

	$remover.on('click', function() {
		$dropimg.css('background-image', '');
		$droptarget.removeClass('dropped');
		$remover.addClass('disabled');
		$('.image_title input').val('');
	});

	$('.image_title input').blur(function() {
		if ($(this).val() != '') {
			$droptarget.removeClass('dropped');
		}
	});

	// image uploader scripts



})
