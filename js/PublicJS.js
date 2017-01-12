$(function(){
	//二维码和右菜单
	/*$(window).resize(function(){window.location.href=window.location.href});*/var W_width=($(window).width());if(W_width<="1200"){$("#Quick").css({"right":"0"});$(".Qrcode_wrap .Qrcode").css({"left":"0"})}else{$(".Qrcode_wrap .Qrcode").css({"left":"-176px"});$("#Quick").css({"right":"-100px"})};
	 //返回顶部
	$("#Quick .NavUl li.TOp").click(function(){$("html,body").animate({scrollTop:0},"slow")});
	//右菜单划过效果
	$("#Quick li").hover(function(){$("#Quick li.LIGHTLI .LEFT").animate({"margin-left":"0px"},500);$(this).find(".LEFT").stop().animate({"margin-left":"-51px"},500)},function(){$(this).find(".LEFT").stop().animate({"margin-left":"0"},500)});
	
	
	
})

//菜单锁定
/*function contact(){
	window.location.href="Index.html?href=1";	
}

function bussiness(){
	window.location.href="Index.html?href=2";	
}
*/

//浮动处理
function DIvS(obj,num) {
    $(obj).each(function (index, element) {
        if (((index + 1) % num) == 0) {
            $(this).css("margin-right", "0");
        }
    });
}

function NoDetailsPage(){
	 layer.msg("暂无动态详情", { icon: 5 }, { time: false });
}
