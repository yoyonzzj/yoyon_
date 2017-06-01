<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>html+css</title>
</head>
<body>

行元素：<a>标签可定义锚                             块元素：<address>定义地址
		<b>字体加粗											<caption>定义表格标题
		<img>向网页中嵌入一幅图像							<dd>定义列表中定义条目						
		<input>输入框										<div>定义文档中的分区或节
		<span>组合文档中的行内元素							<dl>定义列表
		<br>换行											<dt>定义列表中的项目
		<em>定义为强调的内容								<fieldset>定义一个框架集
		<i>斜体文本效果										<form>创建 HTML 表单
		<select>创建单选或多选菜单							<h1h6>定义标题
		<small>呈现小号字体效果								<hr>创建一条水平线
		<strong>语气更强的强调的内容						<legend>元素为
		<label>标签为										<fieldset>元素定义标题
		<sub>定义下标文本									<li>标签定义列表项目
		<sup>定义上标文本									<noframes>为那些不支持框架的浏览器显示文本，于 frameset 元素内部
		<textarea>多行的文本输入控件						<noscript>定义在脚本未被执行时的替代内容
		<abbr>表示一个缩写形式								<ol>定义有序列表
		<acronym>定义只取首字母缩写							<ul>定义无序列表
		<bdo>可覆盖默认的文本方向							<p>标签定义段落
		<big>大号字体加粗									<pre>定义预格式化的文本
		<cite>引用进行定义									<table>标签定义 HTML 表格
		<code>定义计算机代码文本							<tbody>标签表格主体（正文）
		<dfn>定义一个定义项目								<td>表格中的标准单元格
		<kbd>定义键盘文本									<tfoot>定义表格的页脚（脚注或表注）
		<input> 元素定义标注（标记）						<th>定义表头单元格
		<q>定义短的引用										<thead>标签定义表格的表头
		<samp>定义样本文本									<tr>定义表格中的行
		<tt>打字机或者等宽的文本效果						
		<var>定义变量										


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

9.HTML <base> 元素  <base> 标签描述了基本的链接地址/链接目标，该标签作为HTML文档中所有的链接标签的默认链接:
	<head>
	<base href="http://www.runoob.com/images/" target="_blank">
	</head>
	<body>
		<img src="logo.png"> - 注意这里我们设置了图片的相对地址。能正常显示是因为我们在 head 部分设置了 base 标签，该标签指定了页面上所有链接的默认 URL，所以该图片的访问地址为 "http://www.runoob.com/images/logo.png"
	</body>

10.<meta> 标签- 使用实例
	为搜索引擎定义关键词:
	<meta name="keywords" content="HTML, CSS, XML, XHTML, JavaScript">
	为网页定义描述内容:
	<meta name="description" content="免费 Web & 编程 教程">
	定义网页作者:
	<meta name="author" content="Runoob">
	每30秒中刷新当前页面:
	<meta http-equiv="refresh" content="30">
	指定字符集:
	<meta charset="utf-8">
	向搜索引擎说明你的网页的关键词:
	<meta name="keywords" content="">
	告诉搜索引擎你的站点的主要内容:
	<meta name="description" content="">
	告诉搜索引擎你的站点的制作的作者:
	<meta name="author" content="your name">
	响应式页面:
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	定时让网页在3秒内跳转到mozilla首页(http-equiv 属性为名称/值对提供了名称。并指示服务器在发送实际的文档之前先在要传送给浏览器的 MIME 文档头部包含名称/值对。)
	<meta http-equiv="refresh" content="3" url="https://www.mozilla.org">
	如果安装了GCF (Google Chrome Frame)，则使用GCF来渲染页面 ("chrome=1"), 如果没有安装GCF，则使用最高版本的IE内核进行渲染 ("IE=edge")。X-UA-Compatible(浏览器采取何种版本渲染当前页面)
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	浏览器的内核控制
	<meta name="renderer" content="webkit|ie-comp|ie-stand">

11.<map> 定义图像地图  <area> 定义图像地图中的可点击区域
	<img src="planets.gif" width="145" height="126" alt="Planets" usemap="#planetmap">
	<map name="planetmap">
		<area shape="rect" coords="0,0,82,126" alt="Sun" href="sun.htm">
		<area shape="circle" coords="90,58,3" alt="Mercury" href="mercur.htm">
		<area shape="circle" coords="124,58,8" alt="Venus" href="venus.htm">
	</map>
	
12.HTML 表格  表格由 <table> 标签来定义。每个表格均有若干行（由 <tr> 标签定义），每行被分割为若干单元格（由 <td> 标签定义）。字母 td 指表格数据（table data），即数据单元格的内容。数据单元格可以包含文本、图片、列表、段落、表单、水平线、表格等等。
	定义表格的表头：<th>  
	单元格跨两列：<th colspan="2">Telephone</th>
	单元格跨两行：<th rowspan="2">Telephone</th>
	单元格边距：<table border="1" cellpadding="10">
	单元格间距：<table border="1" cellspacing="10">
				<h4>没有单元格间距:</h4>  -->  <table border="1">
	            <h4>单元格间距="0":</h4>  -->  <table border="1" cellspacing="0">
	            <h4>单元格间距="10":</h4>  -->  <table border="1" cellspacing="10">
	<style>
		.table{
			border-collapse 属性设置表格的边框是否被合并为一个单一的边框，还是象在标准的 HTML 中那样分开显示。

			border-collapse: separate;---默认值。边框会被分开。不会忽略 border-spacing 和 empty-cells 属性。
			border-collapse: collapse;---如果可能，边框会合并为一个单一的边框。会忽略 border-spacing 和 empty-cells 属性。
		}
	</style>
	表格标题的位置：<table border="1">
						<caption>Table 1.1 Customers</caption>
					</table>
					<style>
						caption{
							caption-side: top/bottom;
						}
					</style>
	表格详情：<a href="">http://www.runoob.com/html/html-tables.html</a>

13..无序列表：<h4>圆圈/圆点/正方形列表：</h4>
	<ul style="list-style-type:circle/disc/square;color:red">
		<li><a style="color:blue">Apples</a></li>
	有序列表：<h4>默认(从1开始自然数字)/大写字母/小写字母/罗马数字/小写罗马数字列表：</h4>
    <ol type="A/a/I/i" start="16">
		<li>Apples</li>
		<li>Bananas</li>
		<li>Lemons</li>
		<li>Oranges</li>
	</ol>  
	详情：<a href="">http://www.runoob.com/try/try.php?filename=trycss_list-style-type_all</a>

	设置作为列表项标记的图像 
<style>
	ul {
		list-style-image:url('sqpurple.gif');
	}
</style>

14.表单详情：<a href="">http://www.runoob.com/html/html-forms.html</a>
15.字符实体：<a href="">http://www.runoob.com/html/html-entities.html</a>
</body>
</html>
