jQuery(function ($) {
	$('body').on('click', '.home-bottom-button', function () {
		$('.scene-home').fadeOut(3000);
		$('.scene-finger').fadeIn(3000);
	})
	.on('touchstart', '.finger', function () {
		window.fingerTimeout = setTimeout(fingerPressed, 2000);
	})
	.on('touchend', '.finger', function () {
		clearTimeout(window.fingerTimeout);
		console.log('Finger timeout canceled.')
	});
});

function fingerPressed () {
	console.log('Finger timeout fullfilled.');
	$('.scene-finger').fadeOut(1000);
	$('.scene-working').fadeIn(3000, function () {
		setTimeout(showResult, 3000);
	});
};

function showResult () {
	var resultIndex;

	if (!localStorage.sequence) {
		localStorage.sequence = 0;
	}

	resultIndex = localStorage.sequence % 5;

	$('.home').hide();
	$('.result').show();
}
