$(function(){
    $("#fullpage").fullpage({
    	initialSlide :2,
        anchors:["page1","page2","page3","page4","page5","page6","page7","page8","page9","page10"],
        css3:false,
        easing:"easeInQuart",
        navigation:true,
        navigationColor:"#fff",
        navigationPosition:"right",
        slidesNavigation:true,
        navigationTooltips:["首页","视觉","交互","皮肤","功能","代办邮件","联系人邮件","科技","连接易信","马上体验"]
    })
    var xiaohezi=document.querySelectorAll(".xiaohezi");
	var zhezhao=document.querySelector(".zhezhao");
	var centerbox=document.querySelector(".centerbox");
	var centerIMG=document.querySelector(".centerIMG");
	var left=document.querySelector(".left");
	var right=document.querySelector(".right");
	var aa=document.querySelectorAll(".aa");
	var ow=parseInt(getStyle(centerbox,"width"))
	var oh=parseInt(getStyle(centerbox,"height"))
	var speed=0;
	for(i=0;i<xiaohezi.length;i++){
		var index=0;
		xiaohezi[i].index = i;
		xiaohezi[i].onclick=function(){
			$.fn.fullpage.setAllowScrolling(false);
			var img=$("img",this)[0];
			zhezhao.style.display="block";
			centerIMG.src=img.src;
			index=this.index;
		}
		left.onclick=function(){
			index--;
			if(index==-1){
				index=0;
			}
			centerIMG.src=aa[index].src;
		}
		right.onclick=function(){
			index++;
			if(index==3){
				index=2;
			}
			centerIMG.src=aa[index].src;
		}
	}
	mouseWheel(centerbox,function(){
       	speed+=20;
       	var pw=ow+speed+"px";
       	var ph=oh+speed+"px";
       	this.style.width=pw;
       	this.style.height=ph;
       	centerIMG.style.width=pw;
       	centerIMG.style.height=ph;
    },function(){
       	speed-=20;
       	var pw=ow+speed+"px";
       	var ph=oh+speed+"px";
       	this.style.width=pw;
       	this.style.height=ph;
       	centerIMG.style.width=pw;
       	centerIMG.style.height=ph;
    })
	$(".zhezhao").click(function(){
		$(this).css("display","none");
		$.fn.fullpage.setAllowScrolling(true);
	})
	$(".centerbox").on("click",function(e){  
        e.stopPropagation();  
    })  
	$(".fixednav").click(function(){
		$.fn.fullpage.moveSectionDown();
	})
	 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable :true,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
        slidesPerView: 'auto',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : false
        }
   });
})