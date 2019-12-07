$(function(){
	//轮播图
	$(window).on('resize',()=>{
		//1.窗口的宽度
		let clientW = $(window).width();
		//2.设置窗口临界点
		let isShowBigImage = clientW >=900;
		//3.获取所有Item
		let $allItems = $('#l_carousel .carousel-item');
		// console.log($allItems);
		// 4.遍历
		$allItems.each((indax,item)=>{
			//4.1 去出图片路径
			let src = isShowBigImage ? $(item).data('lg-img') : $(item).data('sm-img');
			// console.log(src);
			let imgUrl = `url(${src})`;
			// 4.2设置背景
			$(item).css({
				backgroundImage:imgUrl
			})
			//4.3创建img标签
			if(!isShowBigImage){ //大屏幕
				let imgEle = `<img src="${src}">`;
				$(item).empty().append(imgEle);
			}else{ //小屏幕
				$(item).empty();

			}
		});
	});
	$(window).trigger('resize');

	//轮播图滑动
	let startX=0,endX=0;
	let carouselInner=$('#l_carousel .carousel-inner')[0];
	let carousel = $('#l_carousel');

	carouselInner.addEventListener('touchstart',(e)=>{
		startX =e.targetTouches[0].clientX;
	});

	carouselInner.addEventListener('touchmove',(e)=>{
		endX =e.targetTouches[0].clientX;

		if(endX - startX > 0){
			carousel.carousel('prev');
		}else if(endX - startX < 0){
			carousel.carousel('next');
		}
	});

	//尾部提示
	$('[data-toggle="tooltip"]').tooltip();
});