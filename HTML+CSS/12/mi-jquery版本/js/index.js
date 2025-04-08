// ------------------------------二维码  开始

$(".top-Bar .qr-a").hover(function(){
    $(this).children().stop().slideDown(100);
},function(){
    $(this).children().stop().slideUp(100);
})


// ------------------------------二维码  结束

// ------------------------------购物车  开始

$(".bus").hover(function(){
    var this_ = $(this)
    this_.children("a").addClass("hover");
    this_.children(".bus-inner").stop().slideDown(200,function(){
        $(".bus-inner em").hide().siblings("i").show();
    });
},function(){
    $(this).children("a").removeClass("hover");
    $(this).children(".bus-inner").stop().slideUp(200,function(){
        $(".bus-inner em").show().siblings("i").hide();
    });
})
// ------------------------------购物车  结束


// ------------------------------头部导航  开始
// .header .nav li:not(:eq(-1),:eq(-2))   过滤选择器not() ，可以同时过滤多个元素，用逗号隔开,里面的选择器是过滤选择器，记得加冒号
// 选择.header-bottom 触发事件的原因： 鼠标移出导航之后就会把.header-bottom盒子上滑隐藏，所以，只需要在移上.header-bottom，也让他触发下滑显示即可。
$(".header .nav li:not(:eq(-1),:eq(-2)),.header-bottom").hover(function(){
    $(".header-bottom").stop().slideDown(200);
},function(){
    $(".header-bottom").stop().slideUp(200);
})

// ------------------------------头部导航  结束

//----------------------------------轮播图   开始
var num = 0;
var dua = 3500;
// 轮播图点击事件
$(".banner ol li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    $(".banner ul li").eq($(this).index()).stop().fadeIn(400).siblings().stop().fadeOut(400);
    num=$(this).index();
})


function play() {
    num++;
    if(num==5){
        num=0;
    }
    $(".banner ul li").eq(num).stop().fadeIn(400).siblings().stop().fadeOut(400)
    $(".banner ol li").eq(num).addClass("active").siblings().removeClass("active");
}
var timer = setInterval(play, dua)

$(".banner").hover(function(){
    clearInterval(timer);
},function(){
    timer = setInterval(play, dua);
})

$(".banner .banner-right-btn").click(play)
$(".banner .banner-left-btn").click(function(){
    num--;
    if(num==-1){
        num=4;
    }
    $(".banner ul li").eq(num).stop().fadeIn(400).siblings().stop().fadeOut(400)
    $(".banner ol li").eq(num).addClass("active").siblings().removeClass("active");
})
//----------------------------------轮播图   结束