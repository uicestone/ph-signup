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
	})
	.on('click', '.result-next-button', function () {
		showSubResult();
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
	var resultText = $('.result-text');

	if (!localStorage.sequence) {
		localStorage.sequence = 0;
	} else {
		localStorage.sequence++;
	}

	resultIndex = localStorage.sequence % 5;

	$('.home').hide();
	resultText.each(function () {
		$(this).attr('src', $(this).data('src').replace('{{sequence}}', resultIndex));
	});
	$('.result').show();
}

function showSubResult () {
	$('.result').fadeOut(3000);
	$('.result-sub').fadeIn(3000);
}
