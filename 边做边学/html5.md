<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>html5</title>
</head>
<body>
最新版本的 Safari、Chrome、Firefox 以及 Opera 支持某些 HTML5 特性。Internet Explorer 9 将支持某些 HTML5 特性。
IE9 以下版本浏览器兼容HTML5的方法，使用本站的静态资源的html5shiv包：
<!--[if lt IE9]> 
<script src="http://cdn.static.runoob.com/libs/html5shiv/3.7/html5shiv.min.js"></script>
<![endif]-->
载入后，初始化新标签的CSS：
/*html5*/
article,aside,dialog,footer,header,section,footer,nav,figure,menu{display:block}


Internet Explorer 浏览器问题
你可以使用以上的方法来为 IE 浏览器添加 HTML5 元素，但是：
Internet Explorer 8 及更早 IE 版本的浏览器不支持以上的方式。
我们可以使用 Sjoerd Visscher 创建的 "HTML5 Enabling JavaScript", " shiv" 来解决该问题:
<!--[if lt IE 9]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
以上代码是一个注释，作用是在 IE 浏览器的版本小于 IE9 时将读取 html5.js 文件，并解析它。
注意：国内用户请使用本站静态资源库（Google 资源库在国内不稳定）：
<!--[if lt IE 9]>
  <script src="http://cdn.static.runoob.com/libs/html5shiv/3.7/html5shiv.min.js"></script>
<![endif]-->
针对IE浏览器html5shiv 是比较好的解决方案。html5shiv主要解决HTML5提出的新的元素不被IE6-8识别，这些新元素不能作为父节点包裹子元素，并且不能应用CSS样式。
完美的 Shiv 解决方案: <a href="">http://www.runoob.com/html/html5-browsers.html</a>

<header>	定义了文档的头部区域
<footer>	定义 section 或 document 的页脚。
<nav>	定义导航链接的部分。
<article>	定义页面独立的内容区域。
<section>	定义文档中的节（section、区段）。
<aside>	定义页面的侧边栏内容。
<figure>	规定独立的流内容（图像、图表、照片、代码等等）。
<bdi>	允许您设置一段文本，使其脱离其父元素的文本方向设置。
<command>	定义命令按钮，比如单选按钮、复选框或按钮
<details>	用于描述文档或文档某个部分的细节
<dialog>	定义对话框，比如提示框
<summary>	标签包含 details 元素的标题
<figcaption>	定义 <figure> 元素的标题
<mark>	定义带有记号的文本。
<meter>	定义度量衡。仅用于已知最大和最小值的度量。
<progress>	定义任何类型的任务的进度。
<ruby>	定义 ruby 注释（中文注音或字符）。
<rt>	定义字符（中文注音或字符）的解释或发音。
<rp>	在 ruby 注释中使用，定义不支持 ruby 元素的浏览器所显示的内容。
<time>	定义日期或时间。
<wbr>	规定在文本中的何处适合添加换行符。
html5新元素详情：<a href="">http://www.runoob.com/html/html5-new-element.html</a>
标签详情：<a href="">http://www.runoob.com/tags/html-reference.html</a>




</body>
</html>