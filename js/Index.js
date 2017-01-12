$(function(){
	DIvS($(".Dynamic a"), "3");
	
	$("#Business .Business_inner .BusinessUl li").hover(function(){
		var m=$(this).index();
		$(this).addClass("BusinessLi").siblings().removeClass("BusinessLi");
		$("#Business .Business_inner .BusinessList a:eq("+m+")").css("display","block").siblings().css("display","none");
	});	
	
	$("#Cases .Cases_inner .CaseList li").hover(function(){
		
		var src = $(this).find("img").attr("src");
		var img = "<img src='" + src +"' id='bigPic'/>";
		$("body").append(img); 
		},function(){
		$("#bigPic").remove();
		});
		$("#Cases .Cases_inner .CaseList li img").mousemove(function(event){
		var top = event.pageY;
		var left = event.pageX;
		$("#bigPic").css({
			"top":top+1,    //加个数就跟着，不加不跟着
			"left":left+1	
		});		
	});
    //名赫资讯
		$("#minghedongtai ul li").click(function () {
		    if ($(this).attr("class") != "active") {
		        $(this)[0].className = "active";
		        var str = $(this).attr("data");
		        if (str == 0) {
		            $(".Dynamic").css("display", "block");
		            $(".LookAll").css("display", "block");
		            $(".MhZixun").css("display", "none");
		            $(".MhZixuna").css("display", "none");
		        } else {
		            $(".Dynamic").css("display", "none");
		            $(".LookAll").css("display", "none");
		            $(".MhZixun").css("display", "block");
		            $(".MhZixuna").css("display", "block");
		        }
		        $(this).siblings().removeClass();
		    }
		})
	

	
	var width=$(window).width();
	if (width <1000)
	{
		width = 1000;
	}
	$(".banner_img").css("width",width);
	$(".banner_img ul").css("width",3*width);
	$(".banner_img ul li").css("width",width);
	var num = 0;
	t = setInterval(autoChange, 4000);
	function autoChange() {
		num = (num == 2) ? 0 : ++num;
		$('.banner_img ul').animate({ marginLeft: -width * num + 'px' }, 500);//自动播放时图片滚动效果
		//自动播放时导航效果
		$('.navlist ul li:first').addClass('light');//导航效果初始化
		$('.navlist ul li').removeClass('light');
		$('.navlist ul li:eq(' + num + ')').addClass('light');
	}
	$('.navlist ul li').hover(function () {
		clearInterval(t);
	}, function () {
		t = setInterval(autoChange, 4000);
	}).click(function () {
		num = $(this).index();
		$('.banner_img ul').animate({ marginLeft: -width * num + 'px' }, 500);
		$('.navlist ul li').removeClass('light');
		$(this).addClass('light').siblings().removeClass('light');
	})
	
	
    //列表详情
	$(".MhZixun ul li").click(function () {
	    window.location.href = "InfoListDetails.html";
	})
})

