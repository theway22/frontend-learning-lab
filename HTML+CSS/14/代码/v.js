
//  把窗口宽度分成10列   窗口宽度/10    把结果给到html作为字体大小  即  窗口宽度/10 == 1rem
var winW = document.documentElement.clientWidth   
var htmlFont = winW/10;
document.getElementsByTagName('html')[0].style.fontSize = htmlFont+'px';