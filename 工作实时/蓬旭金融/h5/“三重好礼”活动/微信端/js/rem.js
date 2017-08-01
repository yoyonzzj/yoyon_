var designWidth = 750;	//设计稿的宽度

//初始化
resize();
window.addEventListener("resize",function(){
	resize();
})

function resize(){
	var clientWidth = document.documentElement.clientWidth;
	var fontSize = clientWidth / designWidth * 100;
	document.documentElement.style.fontSize = fontSize+"px";
}