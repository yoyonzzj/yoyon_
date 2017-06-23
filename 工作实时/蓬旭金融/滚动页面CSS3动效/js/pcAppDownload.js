$(window).on("scroll",function(){
	var st=$(window).scrollTop();//获取滚动条距离
	//$("#div").offset().top-$(window).scrollTop();
	$(".floor").each(function(){
		var t=$(this).offset().top;//返回被选元素相对于文档的偏移坐标。
		if(t-st<800&&t-st>-400){
			$(this).addClass("active");
		}else{
			$(this).removeClass("active");
		}
	})
})