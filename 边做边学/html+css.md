<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>html+css</title>
</head>
<body>
1.对于中文网页需要使用 <meta charset="utf-8"> 声明编码，否则会出现乱码。

2. 一些标签的使用，切记所有标签都需要闭合，不管是单体标签还是成对标签。（尽管目前浏览器是识别有些标签不闭合的情况，但是取的最好的保证兼容性，使用闭合）

3. 标签写法要用小写字母（有些版本对大小写可认为相同，而xhtml中强制使用小写）

4.标题很重要请确保将 HTML 标题 标签只用于标题。不要仅仅是为了生成粗体或大号的文本而使用标题。搜索引擎使用标题为您的网页的结构和内容编制索引。因为用户可以通过标题来快速浏览您的网页，所以用标题来呈现文档结构是很重要的。应该将 h1 用作主标题（最重要的），其后是 h2（次重要的），再其次是 h3，以此类推。

5.<hr /> 标签在 HTML 页面中创建水平线。<br /> 标签换行 如果您希望在不产生一个新段落的情况下进行换行（新行），请使用 <br /> 标签

6.文本显示为单行，超过部分隐藏并使用省略号，实例:
    <style>
	    .aa{
	  	    overflow:hidden;
	        text-overflow:ellipsis;
	        white-space:nowrap;
	    }
    </style>
  
7.使用 display:-webkit-box; 让文本显示为多行(只有-webkit内核才有作用)，实例:
    <style>
	    .aa{
	  	    overflow:hidden;
	        text-overflow:ellipsis;
		    display:-webkit-box;
		    -webkit-line-clamp: 2;
		    -webkit-box-orient:vertical;
		    width:100px;
	    }
    </style>

7.使用 target 属性，你可以定义被链接的文档在何处显示。下面的这行会在新窗口打开文档：
    <a href="http://www.runoob.com/" target="_blank">访问菜鸟教程!</a>

8.HTML 链接- id 属性
	id属性可用于创建在一个HTML文档书签标记。
	提示: 书签是不以任何特殊的方式显示，在HTML文档中是不显示的，所以对于读者来说是隐藏的。
	实例
	在HTML文档中插入ID:
	<a id="tips">有用的提示部分</a>
	在HTML文档中创建一个链接到"有用的提示部分(id="tips"）"：
	<a href="#tips">访问有用的提示部分</a>
	或者，从另一个页面创建一个链接到"有用的提示部分(id="tips"）"：
	<a href="http://www.runoob.com/html/html-links.html#tips">
	访问有用的提示部分</a>
	基本的注意事项 - 有用的提示
	注释： 请始终将正斜杠添加到子文件夹。假如这样书写链接：href="http://www.runoob.com/html"，就会向服务器产生两次 HTTP 请求。这是因为服务器会添加正斜杠到这个地址，然后创建一个新的请求，就像这样：href="http://www.runoob.com/html/"。
		<a id="biaoji">标记</a>
		<a href="#biaoji">点我跳转到标记</a>

</body>
</html>
