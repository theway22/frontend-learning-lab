# 【HTML+CSS】day07



## 学习目标

- [ ] 能够知道定位是用来解决层级关系的问题

- [ ] 能够说出绝对定位、相对定位的特点

- [ ] 能够使用子级绝对定位，父级相对定位完成层级关系的案例

- [ ] 能够说出固定定位的特点

- [ ] 能够写出定位居中的几个属性    

  定位   position:     left:50%;    top:50%   margin-left 负数自己宽度的一半   margin-top   负数自己高度的一半

- [ ] 能够写出决定层级位置高低的css属性          z-index:10;

- [ ] 能够写出表格的基本格式(table、tr、td)

## 一、固定定位fixed

固定定位是绝对定位的一种特殊形式，它以浏览器窗口作为参照物来定义网页元素。当position属性的取值为fixed时，即可将元素的定位模式设置为固定定位。

当对元素设置固定定位后，它将脱离标准文档流的控制，始终依据浏览器窗口来定义自己的显示位置。不管浏览器滚动条如何滚动也不管浏览器窗口的大小如何变化，该元素都会始终显示在浏览器窗口的固定位置。

固定定位有两点：

1. 固定定位的元素跟父亲没有任何关系，只认浏览器。
2. 固定定位完全脱标，不占有位置，不随着滚动条滚动。

ie6等低版本浏览器不支持固定定位。

## 二、叠放次序（z-index）

当对多个元素同时设置定位时，定位元素之间有可能会发生重叠。

在CSS中，要想调整重叠定位元素的堆叠顺序，可以对定位元素应用z-index层叠等级属性，其取值可为正整数、负整数和0。

比如：  z-index: 2;

注意：

1. z-index的默认属性值是0（IE为0，FF为auto），取值越大，定位元素在层叠元素中越居上。
2. 如果取值相同，则根据书写顺序，后来居上。
3. 后面数字一定不能加单位。
4. 只有相对定位，绝对定位，固定定位有此属性，其余标准流，浮动，静态定位都无此属性，亦不可指定此属性。

## 三、定位居中

利用定位进行居中：

```css
div{
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -100px;
    margin-top: -100px;
}
```

## 四、表格 table(会使用)

存在即是合理的。  表格的现在还是较为常用的一种标签，但不是用来布局，常见处理、显示表格式数据。

<img src="media/table.png" />

### 创建表格

在HTML网页中，要想创建表格，就需要使用表格相关的标签。创建表格的基本语法格式如下：

```html
<table>
  <tr>
    <td>单元格内的文字</td>
    ...
  </tr>
  ...
</table>
```

在上面的语法中包含三对HTML标签，分别为 &lt;table&gt;</table&gt;、&lt;tr&gt;</tr&gt;、&lt;td&gt;</td&gt;，他们是创建表格的基本标签，缺一不可，下面对他们进行具体地解释



```
1.table用于定义一个表格。

2.tr 用于定义表格中的一行，必须嵌套在 table标签中，在 table中包含几对 tr，就有几行表格。

3.td /td：用于定义表格中的单元格，必须嵌套在<tr></tr>标签中，一对 <tr> </tr>中包含几对<td></td>，就表示该行中有多少列（或多少个单元格）。
```

注意：

```
1. <tr></tr>中只能嵌套<td></td>
```

```
2. <td></td>标签，他就像一个容器，可以容纳所有的元素
```

### 表格属性

<img src="media/tt.png" />

### 表头标签

表头一般位于表格的第一行或第一列，其文本加粗居中，如下图所示，即为设置了表头的表格。设置表头非常简单，只需用表头标签&lt;th&gt;</th&gt;替代相应的单元格标签&lt;td&gt;</td&gt;即可。

 <img src="media/th.png" />

### 表格结构（了解）

```
在使用表格进行布局时，可以将表格划分为头部、主体，具体 如下所示：

<thead></thead>：用于定义表格的头部。

必须位于<table></table> 标签中，一般包含网页的logo和导航等头部信息。


<tbody></tbody>：用于定义表格的主体。

位于<table></table>标签中，一般包含网页中除头部和底部之外的其他内容。
```

<img src="media/thead.png" />

### 表格标题

**表格的标题： caption**

**定义和用法**

caption 元素定义表格标题。

```html
<table>
   <caption>我是表格标题</caption>
</table>
```

caption 标签必须紧随 table 标签之后。您只能对每个表格定义一个标题。通常这个标题会被居中于表格之上。

### 合并单元格

跨行合并：rowspan    跨列合并：colspan

合并单元格的思想：

​     将多个内容合并的时候，就会有多余的东西，把它删除。    例如 把 3个 td 合并成一个， 那就多余了2个，需要删除。

​     公式：  删除的个数  =  合并的个数  - 1   

   合并的顺序 先上   先左 

### 总结表格

1. 表格提供了HTML 中定义表格式数据的方法。
2. 表格中由行中的单元格组成。
3. 表格中没有列元素，列的个数取决于行的单元格个数。
4. 不要纠结于表格外观，那是CSS 的作用。

## 五、表单标签

在我们网页中， 我们需要跟用户进行交互，收集用户资料，此时也需要表单。

在HTML中，一个完整的表单通常由表单控件（也称为表单元素）、提示信息和表单域3个部分构成。

<img src="media/bd.png" />

  表单控件：

​       包含了具体的表单功能项，如单行文本输入框、密码输入框、复选框、提交按钮、重置按钮等。

  提示信息：

​        一个表单中通常还需要包含一些说明性的文字，提示用户进行填写和操作。

  表单域：  

​      他相当于一个容器，用来容纳所有的表单控件和提示信息，可以通过他定义处理表单数据所用程序的url地址，以及数据提交到服务器的方法。如果不定义表单域，表单中的数据就无法传送到后台服务器。

### 表单域

在HTML中，form标签被用于定义表单域，即创建一个表单，以实现用户信息的收集和传递，form中的所有内容都会被提交给服务器。创建表单的基本语法格式如下：

```html
<form action="url地址" method="提交方式" name="表单名称">
  各种表单控件
</form>
```

常用属性(这几个属性该阶段仅做了解即可)：

1. action
   在表单收集到信息后，需要将信息传递给服务器进行处理，action属性用于指定接收并处理表单数据的服务器程序的url地址。
2. method
   用于设置表单数据的提交方式，其取值为get或post。
3. name
   用于指定表单的名称，以区分同一个页面中的多个表单。

注意：  每个表单都应该有自己表单域。

### input 控件

<form method="post">表单开始和结束  action="后台页面"  链接后台页面

​	method----请求方式     post隐藏传参---传递数据

​                                             get--显示传参

```html
<form action="" method="get">
    文本输入框：
    <label for="txt"><input type="text" name="txt" id="txt" value="" placeholder="请输入文字"></label>
    <br><br>
    密码输入框：
    <label for="psd"><input type="password" name="psd" id="psd" value="" placeholder="请输入密码"></label>
    <br><br>
    单选按钮：
    <label for="male"><input type="radio" name="sex" id="male" value="male"> 男</label>
    <label for="female"><input type="radio" name="sex" id="female" value="female"> 女</label>
    <br><br>
    复选框：
    <label for="z"><input type="checkbox" name="student" id="z" value="zhangsan"> 张三</label>
    <label for="l"><input type="checkbox" name="student" id="l" value="lisi"> 李四</label>
    <label for="w"><input type="checkbox" name="student" id="w" value="wangwu"> 王五</label>
    <br><br>
    上传文件：
    <label for="file"><input type="file" name="file" id="file"></label>
    <br><br>
    图片形式的提交按钮：<br>
    <input type="image" src="./xxx.jpg" alt="">
    <br><br>
    <input type="button" value="普通按钮">
    <input type="submit" value="提交">
    <input type="reset" value="重置">
</form>
```

在上面的语法中，&lt;input /&gt;标签为单标签，type属性为其最基本的属性，其取值有多种，用于指定不同的控件类型。除了type属性之外，&lt;input /&gt;标签还可以定义很多其他的属性，其常用属性如下表所示。

<img src="media/input.png" />

### label标签

label 标签为 input 元素定义标注（标签）。

作用： 用于扩大表单元素的点选区域。

效果： label标签绑定一个表单元素后， 当点击label标签的时候, 被绑定的表单元素就会获得输入焦点

如何绑定元素呢？

for 属性规定 label 与哪个表单元素绑定。

```html
<label for="male"><input type="radio" name="sex" id="male" value="男性"> 男性</label>
```

### textarea控件(文本域)

如果需要输入大量的信息，就需要用到&lt;textarea&gt;&lt;/textarea&gt;标签。通过textarea控件可以轻松地创建多行文本输入框，其基本语法格式如下：

```html
<textarea cols="每行中的字符数" rows="显示的行数">
  文本内容
</textarea>
```

<img src="media/textarea.png" />

### 下拉选项

使用select控件定义下拉菜单的基本语法格式如下

```html
<select>
  <option>选项1</option>
  <option>选项2</option>
  <option>选项3</option>
  ...
</select>
```

注意：

1. &lt;select&gt;</select&gt;中至少应包含一对&lt;option></option&gt;。
2. 在option 中定义selected =" selected "时，当前项即为默认选中项。







