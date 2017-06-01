<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>css</title>
</head>
<body>
<style>
1.  .aa{
		background-attachment: fixed;---背景图片是固定的
	}  
2.  .aa{
		text-align: justify;---实现两端对齐文本效果。
	    text-align: inherit;---规定应该从父元素继承text-align属性的值。
	}
3.  .aa{
		text-decoration: none;---移除链接下划线
		text-decoration: underline;---下划线
		text-decoration: line-through;---删除线
		text-decoration: overline;---上划线
    }
4.  .aa{
		text-transform:uppercase;---文本中的字母大写
		text-transform:lowercase;---文本中的字母小写
		text-transform:capitalize;---文本中单词首字母大写
	}
5.  .aa{
		direction: rtl;---文本书写方向从右到左的
	}
6.  .aa{
		text-indent: 40px;---首行缩进
	}
7.  .aa{
		letter-spacing: 5px;---字间距
	}
8.  .aa{
		word-spacing:30px;---单词间的间距
	}
9.  .aa{
		属性设置如何处理元素内的空白。
		white-space: normal;---默认。空白会被浏览器忽略。
		white-space: nowrap;---文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。
		white-space: pre;---空白会被浏览器保留。其行为方式类似 HTML 中的 <pre> 标签。
		white-space: pre-wrap;---保留空白符序列，但是正常地进行换行。
		white-space: pre-line;---合并空白符序列，但是保留换行符。
		white-space: inherit;---规定应该从父元素继承white-space属性的值。
	}
10. .aa{
		内部文字图像的垂直对齐
		vertical-align: baseline;---默认。元素放置在父元素的基线上。
		vertical-align: sub;---垂直对齐文本的下标。
		vertical-align: top;---把元素的顶端与行中最高元素的顶端对齐
		vertical-align: text-top;---把元素的顶端与父元素字体的顶端对齐
		vertical-align: middle;---把此元素放置在父元素的中部。
		vertical-align: bottom;---把元素的顶端与行中最低的元素的顶端对齐。
		vertical-align: text-bottom;---把元素的底端与父元素字体的底端对齐。
		vertical-align: 50%;---使用 "line-height" 属性的百分比值来排列此元素。允许使用负值。
		vertical-align: inherit;---规定应该从父元素继承 vertical-align 属性的值。
		vertical-align: 50px;---<length>：用长度值指定由基线算起的偏移量。可以为负值。基线对于数值来说为0。（CSS2）
	}
11. .aa{
		text-shadow: 2px 2px 2px #000;---文本阴影  IE 9及更早版本的浏览器不支持text-shadow属性.
					h-shadow	必需。水平阴影的位置。允许负值。
					v-shadow	必需。垂直阴影的位置。允许负值。
					blur	可选。模糊的距离。
					color	可选。阴影的颜色。参阅 CSS 颜色值。

	}
12. .aa{
		font-style: normal;---字体样式默认，正常
		font-style: italic;---斜体
		font-style: oblique;---斜体
	}
13. .aa{
		font-variant 属性设置小型大写字母的字体显示文本，这意味着所有的小写字母均会被转换为大写，但是所有使用小型大写字体的字母与其余文本相比，其字体尺寸更小。
		font-variant: normal;---默认值。浏览器会显示一个标准的字体。
		font-variant: small-caps;---浏览器会显示小型大写字母的字体。
	}
14. .aa{
		font-weight: normal;---默认值。定义标准的字符。
		font-weight: bold;---定义粗体字符。
		font-weight: bolder;---定义更粗的字符。
		font-weight: lighter;---定义更细的字符。
		font-weight: 100/200/300...;---定义由粗到细的字符。400 等同于 normal，而 700 等同于 bold。

		font:italic bold 12px/30px Georgia,serif;---混合写法，字体大小/行高

		能否管理文字的大小，在网页设计中是非常重要的。但是，你不能通过调整字体大小使段落看上去像标题，或者使标题看上去像段落。请务必使用正确的HTML标签，就<h1> - <h6>表示标题和<p>表示段落、

		1em的默认大小是16px。可以通过下面这个公式将像素转换为em：px/16=em
	}
15.	a:link {color: #000000;}       未访问链接
	a:visited {color: #00FF00;}    已访问链接 
	a:hover {color: #FF00FF;}      鼠标移动到链接上 
	a:active {color: #0000FF;}     鼠标点击时 

	a:hover 必须在 a:link 和 a:visited 之后，需要严格按顺序才能看到效果。
	a:active 必须在 a:hover 之后

	a:link {text-decoration: none;}         未访问链接
	a:visited {text-decoration: none;}      已访问链接
	a:hover {text-decoration: underline;}   鼠标移动到链接上
	a:active {text-decoration: underline;}  鼠标点击时

	a:link {background-color: #B2FF99;}      未访问链接 
	a:visited {background-color: #FFFF85;}   已访问链接 
	a:hover {background-color: #FF704D;}     鼠标移动到链接上 
	a:active {background-color: #FF704D;}    鼠标点击时 
16. .aa{
		边框样式
		border-style:none;---无边框
		border-style:dotted;---点虚线边框
		border-style:dashed;---虚线边框
		border-style:solid;---实线边框
		border-style:double;---双边框
		border-style:groove;---凹槽边框
		border-style:ridge;---垄状边框
		border-style:inset;---嵌入边框
		border-style:outset;---外凸边框
		border-style:hidden;---隐藏边框

		border-bottom:thick dotted #ff0000;

		border-style:dotted solid dashed double;
		border-style:dotted solid dashed;
		border-style:dotted solid;
		border-style:dotted;

		outline-style:dotted;---点线轮廓
		outline-style:dashed;---虚线轮廓
		outline-style:solid;---实线轮廓
		outline-style:double;---双线轮廓
		outline-style:groove;---凹槽轮廓
		outline-style:ridge;---垄状轮廓
		outline-style:inset;---嵌入轮廓
		outline-style:outset;---外凸轮廓

		outline:green dotted thick;
	}
17. .aa{
		visibility:hidden/visible;---隐藏一个元素，还占据位置
		display: block;---隐藏一个元素，不占据位置

		visibility:collapse;---当在表格元素中使用时，此值可删除一行或一列，但是它不会影响表格的布局。被行或列占据的空间会留给其他内容使用。如果此值被用在其他的元素上，会呈现为 "hidden"。
	}
18. .aa{
		overflow:scroll;---内容超出出现滚动条
		overflow: visible;---默认值。内容不会被修剪，会呈现在元素框之外。
		overflow: auto;---如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。
		overflow: scroll;---内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。
		overflow: hidden;---内容会被修剪，并且其余内容是不可见的。
	}
</style>
19. 更改光标，请把鼠标移动到单词上，可以看到鼠标指针发生变化：
		<span style="cursor:auto">auto</span><br>
		<span style="cursor:crosshair">crosshair</span><br>
		<span style="cursor:default">default</span><br>
		<span style="cursor:e-resize">e-resize</span><br>
		<span style="cursor:help">help</span><br>
		<span style="cursor:move">move</span><br>
		<span style="cursor:n-resize">n-resize</span><br>
		<span style="cursor:ne-resize">ne-resize</span><br>
		<span style="cursor:nw-resize">nw-resize</span><br>
		<span style="cursor:pointer">pointer</span><br>
		<span style="cursor:progress">progress</span><br>
		<span style="cursor:s-resize">s-resize</span><br>
		<span style="cursor:se-resize">se-resize</span><br>
		<span style="cursor:sw-resize">sw-resize</span><br>
		<span style="cursor:text">text</span><br>
		<span style="cursor:w-resize">w-resize</span><br>
		<span style="cursor:wait">wait</span><br>
<style>
20. .aa{

	}

</style>
</body>
</html>