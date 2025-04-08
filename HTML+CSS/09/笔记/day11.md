# 【HTML+CSS】day11



## 学习目标

- [ ] 能够写出给网页添加favicon.ico图标
- [ ] 能够写出滑动门布局的书写格式
- [ ] 能够写出圣杯布局的书写格式
- [ ] 能够在网页中使用图标字体
- [ ] 能够写出子元素选择器的书写格式
- [ ] 能够写出下一级选择器的书写格式
- [ ] 能够写出属性选择器的书写格式
- [ ] 能够写出投影属性的书写格式
- [ ] 能够写出过渡属性的书写格式

## 一、垂直对齐

以前我们讲过让带有宽度的块级元素居中对齐，是margin: 0 auto;

以前我们还讲过让文字居中对齐，是 text-align: center;

但是我们从来没有讲过有垂直居中的属性， 我们的妈妈一直很担心我们的垂直居中怎么做。

vertical-align 垂直对齐， 这个看上去很美好的一个属性， 实际有着不可捉摸的脾气，否则我们也不会这么晚来讲解。

<img src="assets/xian.jpg" />

```css
vertical-align : baseline |top |middle |bottom 
```

设置或检索对象内容的垂直对其方式。 

vertical-align 不影响块级元素中的内容对齐，它只针对于 行内元素或者行内块元素，特别是行内块元素， **通常用来控制图片/表单与文字的对齐**。

```html
<style>
    .box{
        width: 300px;
        height: 30px;
        background: pink;
        font-size:12px;
        line-height: 30px; 
    }
    img{
        vertical-align: middle;
    }
</style>

<div class="box">
    <img src="images/ico_phone.png" alt="">
    手机
</div>
```

## 二、favicon介绍

**favicon.ico**一般用于作为缩略的网站标志,它显示位于浏览器的地址栏或者在标签上,用于显示网站的logo

生成.ico文件的在线网址有很多，这里提供一个：http://www.bitbug.net/

生成之后再html中的head标签中添加下面这句代码：

```html
<link rel="shortcut icon" href="favicon.ico" />
```



##  三、滑动门

先来体会下现实中的滑动门,或者你可以叫做推拉门：

<img src="assets/h.gif" />

###  滑动门出现的背景

制作网页时，为了美观，常常需要为网页元素设置特殊形状的背景，比如微信导航栏，有凸起和凹下去的感觉，最大的问题是里面的字数不一样多，咋办？

<img src="assets/wxx.jpg" />

为了使各种特殊形状的背景能够自适应元素中文本内容的多少，出现了CSS滑动门技术。它从新的角度构建页面，使各种特殊形状的背景能够自由拉伸滑动，以适应元素内部的文本内容，可用性更强。 最常见于各种导航栏的滑动门。

http://weixin.qq.com/

###  核心技术

核心技术就是利用CSS精灵（主要是背景位置）和盒子padding撑开宽度, 以便能适应不同字数的导航栏。

一般的经典布局都是这样的：

```html
<li>
  <a href="#">
    <span>导航栏内容</span>
  </a>
</li>
```

总结： 

1. a 设置 背景左侧，padding撑开合适宽度。    
2. span 设置背景右侧， padding撑开合适宽度 剩下由文字继续撑开宽度。
3. 之所以a包含span就是因为 整个导航都是可以点击的。



## 四、圣杯布局

就是左面的盒子和右面的盒子都是固定大小的，中间的盒子是自适应的，我们把这种部局叫做---》圣杯部局

起源于淘宝，用到了float浮动  和margin-left负值

实现步骤：

1、三盒子都浮动

2、中间盒子宽度是自适应的宽度是100%，左面盒子margin-left负的100%，右面盒子margin-left负的自身宽度(此时中间盒子被覆盖)

3、中间盒子添加padding-left:左盒子宽度；添加padding-right:右边盒子宽度；添加box-sizing:border-box;

参考代码：

```html
<style>
    .big{
        width: 80%;
        height:150px;
        border: 1px solid #000;
        margin: 100px auto;
    }
    .child{
        height: 150px;
        float: left;
    }
    .center{
        width: 100%;
        background-color: #fcf;
        padding-left: 200px;
        box-sizing: border-box;
        padding-right: 100px;
    }
    .left{
        width: 200px;
        background-color: #cff;
        margin-left: -100%;
    }
    .right{
        width: 100px;
        background-color: #ffc;
        margin-left: -100px;
    }
</style>
<div class="big">
    <div class="child center"></div>
    <div class="child left">左</div>
    <div class="child right">右</div>
</div>
```



## 五、图标字体

图标字体，本质是文字，不是图片。只不过他会以图标的形式来展现而已。是文字就能加 颜色、字号等等

步骤：第一、 http://www.iconfont.cn/ 进入这个网站---注册会员登录，下载你喜欢的图标

​           第二、解压你下载好的压缩包（图标字体） 建立一个fonts的文件夹放字体库

​          第三、直接拷贝字体  eot svg ttf woff

​       第四、直接拷贝demo.html里面的字体声明，代码如下

​	@font-face {font-family: 'iconfont';    src: url('iconfont.eot'); /* IE9*/    src: url('iconfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */    url('iconfont.woff') format('woff'), /* chrome、firefox */    url('iconfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/    url('iconfont.svg#iconfont') format('svg'); /* iOS 4.1- */}

第五、div{    font-family: 'iconfont';}

```
!important;----它的权重最大
```

总结： 图标字体，本意是文字，只不过以图标的形式来展现，所以他不是图，是文字。   Color    font-size

### 相关代码

```html
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>无标题文档</title>
<style>

/* 定义字体 */
@font-face {
  font-family: 'iconfont';
  src: url('iconfont/iconfont.eot');
  src: url('iconfont/iconfont.eot?#iefix') format('embedded-opentype'),
  url('iconfont/iconfont.woff') format('woff'),
  url('iconfont/iconfont.ttf') format('truetype'),
  url('iconfont/iconfont.svg#iconfont') format('svg');
}
/* 修改字体图标的默认样式 */
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}


.box span{font-size: 30px;}


</style>
</head>

<body>

<div class="box">
    <span class="iconfont">&#xe625;</span>
    <span class="iconfont">&#xe626;</span>
    <span class="iconfont">&#xe62d;</span>
</div>

</body>
</html>

```

**icomoon字库**

IcoMoon成立于2011年，推出的第一个自定义图标字体生成器，它允许用户选择他们所需要的图标，使它们成一字型。 内容种类繁多，非常全面，唯一的遗憾是国外服务器，打开网速较慢。

   推荐网站： http://www.iconfont.cn/



## 六、CSS3新属性

### 过渡属性

过渡属性 `transition` 是实现css动效的属性。

```css
transition: 属性名称 动画持续时间 运动曲线 延迟时间;
```

我们可以来写一下代码：

```css
div{
    width: 200px;
    height: 200px;
    background: skyblue;
    transition: height 2s linear 1s;
}
div:hover{
    height: 300px;
}
```

如何单独控制transition的某个属性值：

```css
transition-property
transition-duration
transition-timing-function
transition-delay
```

如果我们鼠标移上元素，想要有多个属性，如宽、高和背景都同时改变，显然 `transition-property` 的值，就不能只写一个属性的名称，而该写 `all`，如：

```css
transition: all 2s linear;
```

**补充**

多值写法:

```
transition: height 2s linear, background 1s linear;
```

### 转换属性

转换属性 `transform` 可将元素进行旋转、位移和缩放等转换。

#### 旋转Rotate

```css
transform: rotateX() rotateY() rotateZ();
```

值与值之间以空格隔开，单位为deg。

#### 位移Translate

```css
transform: translateX() translateY() translateZ();
```

值与值之间以空格隔开，单位为px。

#### 缩放Scale

```css
transform: scaleX() scaleY() scaleZ();
```

值为数值，值与值之间以空格隔开，无单位。

#### translate实现未知宽高的盒子居中

https://blog.csdn.net/mr_fzz/article/details/53081452

### 动画属性

过渡属性 `animation` 是实现css动效的属性。

```css
selector {
    animation: 动画名称 动画持续时间 运动曲线 重复次数 往复运动;
}

@keyframes 动画名称 {
    0% { css状态 }
    50% { css状态 }
    100% { css状态 }
}
```

其中，0%和100%可以写为 `from` 和 `to` 。

运动曲线：值多为 `linear` 。

重复次数：没有单位，值为数值。如果是无数次，值为 `infinite` 。

往复运动：表示是否往复执行动画，如是，则值为 `alternate`， 如否，则不写。