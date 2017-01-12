$(function(){
	/*var href=getParamValue("href");
	if(href=='ys'){
		$("html,body").animate({
            scrollTop: 1400
        },
        "slow")	
	}else if(href=="ds"){
		$("html,body").animate({
            scrollTop: 700
        },
        "slow")
	}else if(href=="pm"){
		$("html,body").animate({
            scrollTop: 2000
        },
        "slow")
	}*/
	
	
	var num = 0;
	t = setInterval(autoChange, 2000);
	function autoChange() {
		num = (num == 2) ? 0 : ++num;
		$('#banner .banner_inner .bannerList .ListUl').animate({ marginLeft: -1000 * num + 'px' }, 500);//自动播放时图片滚动效果
		//自动播放时导航效果
		$('ul.bannerUl li:first').addClass('Lightbanner');//导航效果初始化
		$('ul.bannerUl li').removeClass('Lightbanner');
		$('ul.bannerUl li:eq(' + num + ')').addClass('Lightbanner');
	}
	$('.bannerUl li').hover(function () {
		clearInterval(t);
	}, function () {
		t = setInterval(autoChange, 2000);
	}).click(function () {
		num = $(this).index();
		$('#banner .banner_inner .bannerList .ListUl').animate({ marginLeft: -1000 * num + 'px' }, 500);
		$('ul.bannerUl li').removeClass('Lightbanner');
		$(this).addClass('Lightbanner');
	})
	$("#banner .banner_inner .bannerList li").hover(function(){
		clearInterval(t);
	},function(){
		t = setInterval(autoChange, 2000);	
	});
})

































