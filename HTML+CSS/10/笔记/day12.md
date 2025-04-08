# 【HTML+CSS】day12



## 学习目标

- [x] 能够写出过渡属性的书写格式
- [x] 能够写出转换-旋转书写格式
- [x] 能够写出转换-位移的书写格式
- [x] 能够写出转换-缩放的书写格式
- [x] 能够写出未知宽高的盒子的居中方式
- [x] 能够写出旋转中心点和旋转轴属性
- [x] 能够实现完成开门案例
- [x] 能够实现构建立体面案例
- [x] 能够写出动画属性的书写格式

## 一、过渡属性

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

## 二、转换属性

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

## 三、**旋转中心点和旋转轴**

我们可以通过  transform-origin 这个属性配合旋转来控制元素的旋转中心点和旋转轴。

配合Transform:rotate()做旋转中心点的设置，两个值，单位可以是px  %

参考的点是元素的左上角（px）

写%参考点是元素宽度和高度

配合Transform:rotateY()/rotateX()做旋转轴的设置。

值可以只写一个方向词：left/right/center/top/bottom

```html
<!--旋转轴案例-->
<style>
    div{
        margin:100px auto;
        width: 200px;
        height: 200px;
        border: 1px solid #000;

    }
    img{
        transition: all .6s;
        transform-origin:right;
    }
    div:hover img{
        transform: rotateY(180deg);
    }

</style>

<div><img src="images/shn.jpg" alt=""></div>
```

## 四、开门案例

transform-style:preserve-3d;  让元素及其内部元素（子元素）的转换呈现3D效果，需要配合透视属性（景深属性）来做：

perspective: 700px;  (一般我们会给700px~1500px);

css3属性perspective（可以理解为 人眼到物体的距离）

## 五、构建立体面案例

```html
 <style>
        *{
            margin: 0;
            padding: 0;
            list-style: none;
        }
        .box,ul, li{
            width: 200px;
            height: 200px;
        }
        .box{
            border: 1px solid #000;
            margin: 100px auto;
            perspective: 700px;
        }
        .box ul{
            position: relative;
            transform-style: preserve-3d;
            transition:all 1s;
        }
        .box li{
            position: absolute;
            left: 0;top: 0;
        }
        .box li:nth-of-type(1){
            background-color: pink;
            transform:translateZ(100px);
            /*opacity: .7;*/
        }
        .box li:nth-of-type(2){
            background-color: skyblue;
            transform:rotateX(-90deg) translateZ(100px);
        }
        .box:hover ul{
            transform:rotateX(90deg);
        }
    </style>
    <div class="box">
        <ul>
            <li>前面</li>
            <li>底面</li>
        </ul>
    </div>
```



## 六、动画属性

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