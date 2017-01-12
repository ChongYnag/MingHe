$(function(){
	var contentHeight;
	window.onload=function(){
		contentHeight=$("#content").height();	
	}
	//返回顶部
	$("#Nav .NavUl li.TOp").click(function () {
        $("html,body").animate({
            scrollTop: 0
        },
        "slow")
    });
	//设置导航栏位置
	var width=$(window).width();
	var height=$(window).height();
	
	/*var navHeight=$("#Nav").height();
	if(height>490){
		$("#Nav").css({"margin-top":"0px"});
		 
	}*/
	/*if(width>1310){
		$("#content .content_inner .mainContent").css("margin-left",(width-1210)/2+"px");		
	}else{
		$("#content .content_inner .mainContent").css("margin-left","10px");	
	}*/
	/*$("#Nav").css({"margin-top":(height-800)/2-400+"px"});*/
	/*$(window).scroll(function () {
    	var scroll = $(document).scrollTop();
		//alert(scroll);
		if(scroll<contentHeight-height){
			$("#Nav").css({"margin-top":scroll+"px"});  
		}
		if(scroll>=contentHeight-height){
			$("#Nav").css({"margin-top":contentHeight-height+"px"}); 	
		} 
    });*/
	/*var scrolls = $(document).scrollTop();
	if(scrolls!=0){
		$("#Nav").css({"margin-top":scrolls+"px"});  
	}	*/
	
	//效果
	$(window).resize(function () {
		window.location.href = window.location.href;     
    });
	
	 var W_width = ($(window).width());
      if (W_width <= "1200") {
			//alert(W_width)	
			 $("#Nav .NavUl").css({"right":"0"});
        } else {
			 $("#Nav .NavUl").css({"right":"-100px"});
          //$("#Quick").css({"right":"0"});
       }
	
	
	
	$("#Nav li").hover(function(){
		$("#Nav li.LIGHTLI .LEFT").animate({"margin-left":"0px"},500);
		$(this).find(".LEFT").stop().animate({"margin-left":"-60px"},500);
	},function(){
		$(this).find(".LEFT").stop().animate({"margin-left":"0"},500);
	})	
})

function NoDetailsPage(){
	 layer.msg("暂无动态详情", { icon: 5 }, { time: false });
}


function contact(){
	window.location.href="Index.html?href=1";	
}

function bussiness(){
	window.location.href="Index.html?href=2";	
}