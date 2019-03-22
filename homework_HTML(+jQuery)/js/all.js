$(document).ready(function() {
	$('.dropdown').click(function(event) {
		// 停止向下傳遞
		event.stopPropagation();
		event.preventDefault();
		$(this).toggleClass('active');
		// .siblings同層東西但不包含this(可解點dropdown不會同時打開dropdown-open)
		$(this).siblings().slideToggle();
	});
	$('html').click(function(event) {
		$('.dropdown-open').slideUp();
		$('.dropdown').removeClass('active');
	});
	lightbox.option({
		'imageFadeDuration': 100,
		'showImageNumberLabel':false,
		'wrapAround': true,
	})
	$('.top a').click(function(event) {
		event.preventDefault();
		// .animate製作動畫效果(滑動)
		$('html,body').animate({
			scrollTop: 0,
		},1000);
	});
});  