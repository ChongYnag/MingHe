$(function () {
    ////以下将以jquery.ajax为例，演示一个异步分页
    //function demo(curr) {
    //    $.getJSON('test/demo1.json', {
    //        page: curr || 1 //向服务端传的参数，此处只是演示
    //    }, function (res) {
    //        //此处仅仅是为了演示变化的内容
    //        var demoContent = (new Date().getTime() / Math.random() / 1000) | 0;
    //        document.getElementById('view1').innerHTML = res.content + demoContent;
    //        //显示分页
    //        laypage({
    //            cont: 'page1', //容器。值支持id名、原生dom对象，jquery对象。【如该容器为】：<div id="page1"></div>
    //            pages: res.pages, //通过后台拿到的总页数
    //            curr: curr || 1, //当前页
    //            jump: function (obj, first) { //触发分页后的回调
    //                if (!first) { //点击跳页触发函数自身，并传递当前页：obj.curr
    //                    demo(obj.curr);
    //                }
    //            }
    //        });
    //    });
    //};
    ////运行
    //demo();
    laypage({
        cont: 'page1', //容器。值支持id名、原生dom对象，jquery对象。【如该容器为】：<div id="page1"></div>
        pages: 10, //通过后台拿到的总页数
        curr: 1, //当前页
        skin: '#FF870C',
        jump: function (obj, first) { //触发分页后的回调
            if (!first) { //点击跳页触发函数自身，并传递当前页：obj.curr
               // demo(obj.curr);
            }
        }
    });
    //列表详情
    $(".MhZixun ul li").click(function () {
        window.location.href = "InfoListDetails.html";
    })

})