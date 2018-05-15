jQuery(function ($) {
	$('body').on('click', '.home-bottom-button', function () {
		// console.log('home-bottom-button');
		$('.scene-home').cssHide();
		$('.scene-finger').cssShow();
	})
	.on('contextmenu', '.finger', function (e) {
		e.preventDefault();
	})
	.on('touchstart mousedown', '.finger', function () {
		window.fingerTimeout = setTimeout(fingerPressed, 1000);
	})
	.on('touchend mouseup', '.finger', function () {
		clearTimeout(window.fingerTimeout);
		console.log('Finger timeout canceled.')
	})
	.on('click', '.result-next-button', function () {
		showSubResult();
	})
	.on('click', '.back-to-home', function () {
		$('.result').cssHide();
		$('.result-sub').cssHide();
		$('.home').cssShow();
		$('.scene-home').cssShow();
	});
});

jQuery.fn.cssFadeIn = function (callback) {
	var self = $(this);
	self.addClass('fade-in');
	self.cssShow();
	setTimeout(function () {
		self.removeClass('fade-in');
		callback && callback();
	}, 500);
}

jQuery.fn.cssFadeOut = function (callback) {
	var self = $(this);
	self.addClass('fade-out');
	setTimeout(function () {
		self.removeClass('fade-out');
		self.cssHide();
		callback && callback();
	}, 500);
}

jQuery.fn.cssHide = function () {
	$(this).addClass('hide');
}

jQuery.fn.cssShow = function () {
	$(this).removeClass('hide');
}

function fingerPressed () {
	console.log('Finger timeout fullfilled.');
	$('.scene-finger').cssHide();
	$('.scene-working').cssShow();
	setTimeout(showResult, 1500);
};

function showResult () {
	var resultIndex;
	var resultText = $('.result-text');

	$('.scene-working').cssHide();

	if (!localStorage.sequence) {
		localStorage.sequence = 0;
	} else {
		localStorage.sequence++;
	}

	resultIndex = localStorage.sequence % 5;

	$('.home').cssHide();
	resultText.each(function () {
		$(this).attr('src', $(this).data('src').replace('{{sequence}}', resultIndex));
	});
	$('.result').cssShow();
}

function showSubResult () {
	$('.result').cssFadeOut();
	$('.result-sub').cssFadeIn();
}
