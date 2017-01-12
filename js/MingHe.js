$(function(){
	var href=getParamValue("href");
	if(href=="1"){
		$("html,body").animate({
            scrollTop: 4000
        },
        "slow")	
	}else if(href=="2"){
		$("html,body").animate({
            scrollTop: 2200
        },
        "slow")
	}
	var width=$(window).width();
	$("#banner .banner_inner .zindex").css({"margin-left":(width-1180)/2+"px"});
	
	if (width <1180)
	{
		width = 1180;
	}
	$("#banner .banner_inner .bannerList").css("width",width);
	$("#banner .banner_inner .bannerList .ListUl").css("width",3*width);
	$("#banner .banner_inner .bannerList li").css("width",width);
	var num = 0;
	t = setInterval(autoChange, 4000);
	function autoChange() {
		num = (num == 2) ? 0 : ++num;
		$('#banner .banner_inner .bannerList .ListUl').animate({ marginLeft: -width * num + 'px' }, 500);//自动播放时图片滚动效果
		//自动播放时导航效果
		$('ul.position li:first').addClass('LightLi');//导航效果初始化
		$('ul.position li').removeClass('LightLi');
		$('ul.position li:eq(' + num + ')').addClass('LightLi');
	}
	$('.position li').hover(function () {
		clearInterval(t);
	}, function () {
		t = setInterval(autoChange, 4000);
	}).click(function () {
		num = $(this).index();
		$('#banner .banner_inner .bannerList .ListUl').animate({ marginLeft: -width * num + 'px' }, 500);
		$('ul.bannerUl li').removeClass('LightLi');
		$(this).addClass('LightLi').siblings().removeClass('LightLi');
	})
	
	
	
	
	$("#Contact .Contact_inner .ContactUl li").click(function(){
		var m=$(this).index();
		$(this).addClass("ContactLi").siblings().removeClass("ContactLi");
		$("#Contact .Contact_inner .ContactList div:eq("+m+")").css("display","block").siblings().css("display","none");
	});	
	/*$("#Business .Business_inner .BusinessUl li").click(function(){
		var m=$(this).index();
		$(this).addClass("BusinessLi").siblings().removeClass("BusinessLi");
		$("#Business .Business_inner .BusinessList img:eq("+m+")").css("display","block").siblings().css("display","none");
	});*/	
	$("#Business .Business_inner .BusinessUl li").hover(function(){
		var m=$(this).index();
		$(this).addClass("BusinessLi").siblings().removeClass("BusinessLi");
		$("#Business .Business_inner .BusinessList a:eq("+m+")").css("display","block").siblings().css("display","none");
	},function(){
		
	});	
	var i=0;
	$("#Dynamic .Dynamic_inner .inf_list li").each(function(index, element) {
		i=index+1;
		$("#Dynamic .Dynamic_inner .inf_list").css("width",(index+1)*300+"px");
    });
	var n=0;
	$("#Dynamic .Dynamic_inner .move a:eq(0)").click(function(){
		var ll=i-4;
		var left=parseInt($("#Dynamic .Dynamic_inner .inf_list").css("margin-left"));
		if(left>-300*ll){
			n++;
			$("#Dynamic .Dynamic_inner .inf_list").animate({"margin-left":-(n+1)*(300)},100);
			
		}else{
					
		}
	});
	$("#Dynamic .Dynamic_inner .move a:eq(1)").click(function(){
		var left=parseInt($("#Dynamic .Dynamic_inner .inf_list").css("margin-left"));
		if(left<0){
			n--;
			$("#Dynamic .Dynamic_inner .inf_list").animate({"margin-left":-(n)*(300)},100);
			
		}else{
				
		}
	});
	/*var j=0;
	$("#banner .banner_inner .selectDiv ul.listDiv li").each(function(index, element) {
        
		if(index>j){
			j=index+1;	
		}
		$("#banner .banner_inner .selectDiv ul.listDiv").css("width",j*185+"px");
    });
	var h=0;
	$("#banner .banner_inner .selectDiv a.prev").click(function(){
		var ll=j-5;
		var left=parseInt($("#banner .banner_inner .selectDiv ul.listDiv").css("margin-left"));
		if(left>-185*ll){
			$("#banner .banner_inner .selectDiv ul.listDiv").animate({"margin-left":-(h+1)*(164)},100);
			h++;
		}else{
					
		}
	});
	$("#banner .banner_inner .selectDiv a.next").click(function(){
		var left=parseInt($("#banner .banner_inner .selectDiv ul.listDiv").css("margin-left"));
		if(left<0){
			$("#banner .banner_inner .selectDiv ul.listDiv").animate({"margin-left":-(h)*(164)},100);
			h--;
		}else{
				
		}
	});*/
	$("#banner .banner_inner .selectDiv ul.listDiv li").hover(function(){
		$(this).addClass("lightLi").siblings().removeClass("lightLi");
	},function(){
			
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
})
function contact(){
	window.location.href="Index.html?href=1";	
}

function bussiness(){
	window.location.href="Index.html?href=2";	
}


function NoDetailsPage(){
	 layer.msg("暂无动态详情", { icon: 5 }, { time: false });
}







































