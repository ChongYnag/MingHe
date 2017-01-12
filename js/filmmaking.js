function Videoonclick(url) {
    var index = layer.open({
        type: 1,
        title: false,
        moveOut: true,
        shade: [0.8, '#393D49'],
        area: ['900px', '511px'],
        skin: 'layui-layer-demo', //样式类名
        closeBtn: true, //不显示关闭按钮
        shift: 1,
        fix: false,
        shadeClose: false, //开启遮罩关闭
        content: "<div class='ZyVideo'><div class='ZyVideo_Top'  style='height:auto;'><b id='playpause' onclick='togglePlayPause()'></b><video id='videos' onclick='togglePlayPause()'><source src='" + url + "'>您的版本不支持该视频播放，请更换浏览器或者升级浏览器版本</video><div class='ZyVideo_Bottom'><div class='Progress'><div class='progressQQ'></div><div class='timeBar' id='timeBar'></div></div><div class='kongzhianniu'><b id='Control_bottom_B' class='bgligh' onclick='togglePlayPause()'></b><span class='time'><span id='PlayTime'>00:00</span>/<span class='totleTime'>00:00</span></span><button id='mute' onclick='toggleMute(this)'></button><input id='volume' min='0' max='1' step='0.1' type='range' onchange='setVolume()'><p id='Fullcreen'></p></div></div></div></div>"
    });
    $("#playpause").click();
	
    //视频播放
    // var video = document.getElementById("video");
    // Turn off the default controls
    var video = document.getElementById("videos");
    video.controls = false;
    //进度条2222
    var timeDrag = false; /* check for drag event 拖动事件检查 */
    $('.progressQQ').on('mousedown', function (e) {
        timeDrag = true;
        updatebar(e.pageX);
    });
    $(document).on('mouseup', function (e) {
        if (timeDrag) {
            timeDrag = false;
            updatebar(e.pageX);
        }
    });
    $(document).on('mousemove', function (e) {
        if (timeDrag) {
            updatebar(e.pageX);
        }
    });
	
    var updatebar = function (x) {
        var progress = $('.progressQQ');
        //calculate drag position 计算拖拽位置
        //and update video currenttime 更新视频时间
        //as well as progress bar 以及进度条
        var maxduration = video.duration;
        var position = x - progress.offset().left;
        var percentage = 100 * position / progress.width();
        if (percentage > 100) {
            percentage = 100;
        }
        if (percentage < 0) {
            percentage = 0;
        }
        $('.timeBar').css('width', percentage + '%');
        //console.log(percentage)
        video.currentTime = maxduration * percentage / 100;
    };
    video.addEventListener("timeupdate", updateProgress, false);
    $(".layui-layer").css({ "background": "none", "box-shadow": "none" });
    //全屏显示
    setInterval("judge()", 500);
    $("#Fullcreen").click(function () {
        var video = document.getElementById("videos");
        launchFullScreen(document.getElementById("videos"));
        video.attr("autoplay");
    })
	video.addEventListener('timeupdate', function() {
		var currentPos = video.currentTime;	
		$('#PlayTime').text(timeFormat(currentPos));	
	});
	video.onloadedmetadata = function () { 
		var vLength = video.duration; 
		$('.totleTime').text(timeFormat(vLength)); 
	}
	
	
}
function togglePlayPause() {
    var video = document.getElementById("videos");
    var playpause = document.getElementById("playpause");
    if (video.paused || video.ended) {
        //playpause.title = "pause";
        //playpause.innerHTML = "pause";
        video.play();
        $("#playpause").css({ "display": "none" });
        $("#Control_bottom_B").removeClass("bgligh");
    }
    else {
        //playpause.title = "play";
        //playpause.innerHTML = "play";
        video.pause();
        $("#playpause").css({ "display": "block" });
        $("#Control_bottom_B").addClass("bgligh");
    }
}


//进度条
function updateProgress() {
    var video = document.getElementById("videos");
    if (video == null || video == undefined)
        return false;
    var progress = document.getElementById("timeBar");
    var value = 0;
    if (video.currentTime > 0) {
        value = Math.floor((100 / video.duration) * video.currentTime);
    }
    progress.style.width = value + "%";
}

//获取进度时间
function CURurrentTime() {
    var video = document.getElementById("videos");
    $("#PlayTime").html(video.currentTime)
}

//音量控制
function setVolume() {
    var video = document.getElementById("videos");
    var volume = document.getElementById("volume");
    video.volume = volume.value;
}
function toggleMute(obj) {
	var video = document.getElementById("videos");
    video.muted = !video.muted;
    if ($(obj).hasClass("bglight")) {
        $(obj).removeClass("bglight")
    } else {
        $(obj).addClass("bglight");
    }
}


//全屏显示
function launchFullScreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

function judge() {
    var video = document.getElementById("videos");
    if (video == null || video == undefined)  
        return false;
    if (video.ended) {
        //playpause.title = "pause";
        //playpause.innerHTML = "pause";
        $("#playpause").css({ "display": "block" });
        $("#Control_bottom_B").addClass("bgligh");
    }
}

var timeFormat = function(seconds){
		var m = Math.floor(seconds/60)<10 ? "0"+Math.floor(seconds/60) : Math.floor(seconds/60);
		var s = Math.floor(seconds-(m*60))<10 ? "0"+Math.floor(seconds-(m*60)) : Math.floor(seconds-(m*60));
		return m+":"+s;
};
