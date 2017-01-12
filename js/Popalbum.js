function IMG(title,num,images){
		var str="";
		var index = layer.open({
        type: 1,
        title: false,
        moveOut: true,
        shade: [0.8, '#393D49'],
        area: ['1000px', '669px'],
        skin: 'layui-layer-demo', //样式类名
        closeBtn: true, //不显示关闭按钮
        shift: 1,
        fix: false,
        shadeClose: false, //开启遮罩关闭
        content: "<div class='show'><a class='LEFT'></a><ul class='show_inner'></ul><a class='RIGHT'></a><div class='Title'><p class='titles'>...</p><p class='totle'><span class='n'>1</span>/<span class='totlen'>4</span></p></div></div>"
    });
		
		$(".layui-layer-content").css({"background":"none","overflow":"hidden"});
		$(".layui-layer").css({"background":"none","box-shadow":"none"});
		$(".titles").html(title);
		$(".totlen").html(num);
		var arr=images;
		//var json= $.parseJSON(images);
		/*$.each(json,function(value){
			alert(value);
			})*/
		var array=images.split(' ');
			for(var i=0;i<array.length;i++){
				str+="<li><img src='"+array[i]+"' alt='图片展示' /></li>";
			}
			$(".show_inner").html(str);
			n=0;
			//图片宽高解决
    		PictureProcessing($(".show ul li"), "800", "500")
			
			
		var width=$(".show .show_inner li:eq(0)").width();
		animate(width,num);
		/*if(width == 0)
		{
        	imgReady(array[0], function () {
            	width = this.width;
				if(width>800){
			$(".show .show_inner li:eq(0)").width("800");
			$(".show .show_inner").width("800");	
			width=800;
			}else{
				$(".show .show_inner li:eq(0)").width(width);
				$(".show .show_inner").width(width);		
			}
				animate(width,num);
            });
		}
		else
		{
			if(width>800){
			$(".show .show_inner li:eq(0)").width("800");
			$(".show .show_inner").width("800");	
			}else{
				$(".show .show_inner li:eq(0)").width(width);
				$(".show .show_inner").width(width);		
			}	
			
			
		}*/
		
		
}

function animate(width,num){	
		$(".show .show_inner li").fadeOut(100);
		$(".Title").fadeIn(100);
		$(".show .show_inner li:eq("+n+")").fadeIn(500);
		$(".show .show_inner li:eq("+n+")").css({"margin-left":(800-width)/2+"px"});		
		$(".show").css({"height":$(".show .show_inner li:eq("+n+")").height()});
		//$(".LEFT").css({"top":$(".show .show_inner li:eq("+n+")").height()/2+"px"});
		//$(".RIGHT").css({"top":$(".show .show_inner li:eq("+n+")").height()/2+"px","left":$(".show .show_inner li:eq("+n+")").width()+110+"px"});	
		if( num !=1){
			$(".show a.LEFT").click(function(){
			
			if(n==0){
				return;	
			}else{
				n--;	
				$(".n").html(n+1);
				var widths=$(".show .show_inner li:eq("+n+")").width();
				if(width>800){
					
				}else{
					$(".show .show_inner li:eq("+n+")").css({"margin-left":(800-width)/2+"px"});		
				}
				$(".show .show_inner li:eq("+n+")").fadeIn(500).siblings().fadeOut(100);
			}	
		});	
		$(".show a.RIGHT").click(function(){
			if(width>800){
					
			}else{
				$(".show .show_inner li:eq("+n+")").css({"margin-left":(800-widths)/2+"px"});	
			}
			if(n==2){
				return;	
			}else{
				n++;
				$(".n").html(n+1);	
				var widths=$(".show .show_inner li:eq("+n+")").width();
				if(width>800){
					
				}else{
					$(".show .show_inner li:eq("+n+")").css({"margin-left":(800-widths)/2+"px"});		
				}
				$(".show .show_inner li:eq("+n+")").fadeIn(500).siblings().fadeOut(100);
			}	
			});			
		}
}




function PictureProcessing(PhotoParent, ParentW, ParentH) {
    //图片宽高大小配置
    var width = ParentW; var height = ParentH;
    $(PhotoParent).each(function (index, element) {
        imgReady($(element).find("img").attr("src"), function () {
            var widthscale = (parseFloat(width) / parseFloat(this.width));
            var heightscale = (parseFloat(height) / parseFloat(this.height));
            var scale = 0;
            var top = 0; var left = 0;
            if (widthscale > heightscale) {
                scale = heightscale;

                left = (width - (this.width * scale)) / 2;
            }
            else {
                scale = widthscale;
                top = (height - (this.height * scale)) / 2;
            }

            $(element).find("img").attr("style", "top:" + top + "px;left:" + left + "px;margin-left:0px;margin-top:0px;width:" + (this.width * scale) + "px;height:" + (this.height * scale) + "px;");
            //alert('size ready: width=' + this.width + '; height=' + this.height);
        });
    });
}

var imgReady = (function () {
    var list = [], intervalId = null,

    // 用来执行队列
	tick = function () {
	    var i = 0;
	    for (; i < list.length; i++) {
	        list[i].end ? list.splice(i--, 1) : list[i]();
	    };
	    !list.length && stop();
	},

    // 停止所有定时器队列
	stop = function () {
	    clearInterval(intervalId);
	    intervalId = null;
	};

    return function (url, ready, load, error) {
        var onready, width, height, newWidth, newHeight,
			img = new Image();

        img.src = url;

        // 如果图片被缓存，则直接返回缓存数据
        if (img.complete) {
            ready.call(img);
            load && load.call(img);
            return;
        };

        width = img.width;
        height = img.height;

        // 加载错误后的事件
        img.onerror = function () {
            error && error.call(img);
            onready.end = true;
            img = img.onload = img.onerror = null;
        };

        // 图片尺寸就绪
        onready = function () {
            newWidth = img.width;
            newHeight = img.height;
            if (newWidth !== width || newHeight !== height ||
            // 如果图片已经在其他地方加载可使用面积检测
				newWidth * newHeight > 1024
			) {
                ready.call(img);
                onready.end = true;
            };
        };
        onready();

        // 完全加载完毕的事件
        img.onload = function () {
            // onload在定时器时间差范围内可能比onready快
            // 这里进行检查并保证onready优先执行
            !onready.end && onready();

            load && load.call(img);

            // IE gif动画会循环执行onload，置空onload即可
            img = img.onload = img.onerror = null;
        };

        // 加入队列中定期执行
        if (!onready.end) {
            list.push(onready);
            // 无论何时只允许出现一个定时器，减少浏览器性能损耗
            if (intervalId === null) intervalId = setInterval(tick, 40);
        };
    };
})();
