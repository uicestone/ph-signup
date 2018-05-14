jQuery(function ($) {
	$('body').on('click', '.home-bottom-button', function () {
		// console.log('home-bottom-button');
		$('.scene-home').fadeOut(1000, function () {
			$('.scene-finger').fadeIn(1000);
		});
	})
	.on('contextmenu', '.finger', function (e) {
		e.preventDefault();
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
	})
	.on('click', '.back-to-home', function () {
		$('.result').hide();
		$('.result-sub').hide();
		$('.home').show();
		$('.scene-home').show();
	});
});

function fingerPressed () {
	console.log('Finger timeout fullfilled.');
	$('.scene-finger').fadeOut(1000, function () {
		$('.scene-working').fadeIn(function () {
			setTimeout(showResult, 3000);
		});
	});
	
};

function showResult () {
	var resultIndex;
	var resultText = $('.result-text');

	$('.scene-working').fadeOut();

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
