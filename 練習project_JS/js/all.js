$(document).ready(function() {
	$('.button1').click(function(event) {
		// 開關效果(開啟show關閉hide)
		$('h1,p').toggle(); 
	});
	//--------------------------------//
	$('.button2').click(function(event) {
		// 滑動效果:slideDown(打開)、slideUp(關閉)
		// 中斷動畫:stop
		$('.text1').stop().slideToggle(1000);
	});
	//--------------------------------//
	$('.button3').click(function(event) {
		// 淡入淡出效果:fadeIn(打開)、fadeOut(關閉)
		$('.text2').fadeToggle(1000);
	});
	//--------------------------------//
	$('.button4').click(function(event) {
		// 切換class:addClass(加入)、removeClass(移除)
		$('.text3').toggleClass('active');
	});
	//--------------------------------//
	$('.start').click(function(event) {
		// 鍊式寫法
		$('.box2').slideUp(2000).slideDown(1000).slideUp(2000).slideDown(1000);
	});
	//--------------------------------//
	$('.open').click(function(event) {
		// delay延遲動畫效果
		$('.box4').delay(0).fadeIn();
		$('.box5').delay(1000).slideDown();
		$('.box6').delay(2000).show(0);
	});
	//--------------------------------//
	$('.close').click(function(event) {
		// 取消默認行為
		event.preventDefault();
		$('.box3').slideToggle(1000);
	});
	// css style設定
	$('.box3').css('height','300px')
	//--------------------------------//
	// 使用html、text載入內容
	$('.box7').html('哈哈妳看不到我');
	$('.box8 h1').text('哈哈妳看不到我!!!');
	//--------------------------------//
	$('.flower-button').click(function(event) {
		// .attr動態增加HTML標籤屬性(href.width.title...)
		event.preventDefault();
		$('img.flower').attr('width', '50');
	});
	$('.remove').click(function(event) {
		// .remove移除網頁標籤(.hide只是隱藏)
		$(this).parent().parent().remove();
	});
});


////// togglemenu //////
$(document).ready(function() {
	$('.dropdown').click(function(event) {
		// 停止向下傳遞
		event.stopPropagation();
		event.preventDefault();
		// .parent父元素層。至父元素層中不包含此層，找到ul關閉
		$(this).parent().siblings().find('ul').slideUp();
		// .parent父元素層。至父元素層中不包含此層，找到a移除.active
		$(this).parent().siblings().find('a').removeClass('active');
		$(this).toggleClass('active');
		// .siblings同層東西但不包含this(可解點dropdown不會同時打開dropdown-open)
		$(this).siblings().slideToggle();
		// this的下一個元素(可解點dropdown不會同時打開dropdown-open)
		// $(this).next('.dropdown-open').slideToggle();
	});
	$('html').click(function(event) {
		$('.dropdown-open').slideUp();
		$('.dropdown').removeClass('active');
	});
	//-----------放大縮小字型-------------//
	$('.font-b').click(function(event) {
		event.preventDefault();
		$('.content p').css('font-size','20px');
	});
	$('.font-m').click(function(event) {
		event.preventDefault();
		$('.content p').css('font-size','16px');
	});
	$('.font-s').click(function(event) {
		event.preventDefault();
		$('.content p').css('font-size','13px');
	});
	//-----------設定h1 animate-------------//
	// 方法一
	// .one當(事件)觸發後，執行一次{內容}
	$('.title').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
		function(){
			$('.title').removeClass("rubberBand");
		// mouseenter滑鼠移進
		$('.title').mouseenter(function() {
			$(this).addClass('rubberBand');
		});
		// mouseenter滑鼠移出
		$('.title').mouseleave(function() {
			$(this).removeClass('rubberBand');
		});
	}); 
	// 方法二
	// setTimeout時間限制多久之後做裡面動作
	// setTimeout(function(){
	// 	$('.title').removeClass("rubberBand");
	// 	// mouseenter滑鼠移進
	// 	$('.title').mouseenter(function() {
	// 		$(this).addClass('rubberBand');
	// 	});
	// 	// mouseenter滑鼠移出
	// 	$('.title').mouseleave(function() {
	// 		$(this).removeClass('rubberBand');
	// 	});
	// }, 1000);

	//-----------example選單列-------------//
	$('.example li').click(function(event) {
		$(this).toggleClass('active');
		$(this).siblings().removeClass('active');
	});
	//-----------cart購物車列-------------//
	$('.addCart').click(function(event) {
		$(this).parent().toggleClass('active')
	});
	//-----------cart-fold購物車列-------------//
	$('.cart-fold ul>li>a').click(function(event) {
		event.preventDefault();
		$(this).parent().siblings().find('ul').slideUp();
		$(this).siblings().slideToggle();
	});
	//-----------question_list-------------//
	$('.question h3').click(function(event) {
		$(this).toggleClass('active');
		$(this).parent().find('p').slideToggle();
		$(this).parent().siblings().find('p').slideUp();
		$(this).parent().siblings().find('h3').removeClass('active');
	});
	//-----------example2(click & on)-------------//
	$('.example2').on('click', 'h1', function(event) {
		// .on監聽整個網頁
		event.preventDefault();
		alert('有效!');
	});
	$('.example-box01').html('<h1>用jQuery動態產生的</h1>');
	//-----------download(載入fontAwesome)-------------//
	$("div.download a[href$='.jpg']").addClass('far fa-file-image');
	$("div.download a[href$='.txt']").addClass('far fa-file-alt');
	$("div.download a[href$='.doc']").addClass('far fa-file-word');
	//-----------設定offcanvas左右選單切換-------------//
	$('.aside-open').click(function(event) {
		event.preventDefault();
		$('body').toggleClass('open');
	});
	$('.aside-close').click(function(event) {
		event.preventDefault();
		$('body').removeClass('open');
	});
	//-----------fixed固定網頁內容-------------//
	$('.ad-close').click(function(event) {
		event.preventDefault();
		$('.ad').fadeOut();
	});
	//-----------TOP-------------//
	$('.top a').click(function(event) {
		event.preventDefault();
		// .animate製作動畫效果(滑動)
		$('html,body').animate({
			scrollTop: 0,
		},1000);
	});
	//-----------lightbox效果-------------//
	lightbox.option({
		'imageFadeDuration': 100,
		'showImageNumberLabel':false,
		'wrapAround': true,
	});
	//--initialize swiper when document ready--//
	var mySwiper = new Swiper ('.swiper-container', {
      // 上下或左右跑
      direction: 'horizontal',
      // 輪播
      loop: true,
      // 分頁圓點
      pagination: {
      	el: '.swiper-pagination',
      	type: 'bullets',
      },
      // 左右button
      navigation: {
      	nextEl: '.swiper-button-next',
      	prevEl: '.swiper-button-prev',
      },
      // 左右button
      autoplay: {
      	delay: 5000,
      },
  	});
});  