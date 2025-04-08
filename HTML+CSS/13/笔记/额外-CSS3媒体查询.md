# CSS3媒体查询

## **一、响应式原理**

响应式网页实现的效果：起初响应式的出现是为了解决在不同分辨率的终端设备上，页面中的各个元素能够有较好的展示。

 

响应式页面原理：**根据浏览器窗口的宽度，来加载不同的样式代码css**，从而使元素在不同分辨率下有完好的展示效果  （需要检测这个宽度）

 

## **二、css3中的媒体查询**

目前移动端页面主流的处理方式是：pc端用响应式原理来书写，移动端做成自适应的效果（例如:  [www.taobao.com](http://www.taobao.com)   和  m.taobao.com）

**Css3媒体查询是专门用来检测浏览器宽度，从而加载/渲染对应的css代码。**

媒体查询格式：

```css
@media  (min-width:1000px){    

	/*当浏览器宽度**大于等于1000px**的时候渲染这里面的代码，例如：*/

   div{ background-color: #ccc;}

}
```

注意：

@media  是查询关键字

(min-width:1000px)   是查询条件

大括号里面的代码是满足条件的时候渲染的样式代码

建议：媒体查询代码一般放在普通css代码之后

 

## **三、媒体查询的条件**

(min-width:1000px)   大于等于1000px

(max-width:1000px)   小于等于1000px

(orientation:landscape)  横屏

(orientation:portrait)  竖屏

 

## **四、媒体查询的关键字**

**And   两个条件存在的时候使用and关键字**

格式：

```css
@media **(min-width:600px) and (max-width:1000px)**{   

	/*在大于等于600px且小于等于1000px的时候，渲染这里的css代码：*/

    div{ background-color: #f40;}

}
```



注意：没有分号，and两边都有空格符号

 

**only 和not的设备类型可以是：**

all   所有设备类型适用

print   适用于分页媒体（包括打印设备和其它将内容分离到多页的设备）和以打印预览模式在屏幕上查看的文档

screen    主要指计算机或移动设备屏幕

speech   应用于屏幕阅读器等发声设备

格式：

```css
@media  only screen {  

}
```



最常书写的格式：

```css
@media  only  screen  and  (min-width:1000px){   

}
```



## **五、媒体查询书写位置**

1、内嵌式（直接写在html中的style标签里面）

2、外链式（把@media写在一个css文件中）

3、把media作为link的标签属性，条件作为media的值来书写

```html
<link rel="stylesheet" type="text/css" href="css/style02.css" media="(min-width:1000px)" />
```

