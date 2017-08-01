window.onload=function(){
		   


       function setSize(){
              var html=document.getElementsByTagName('html')[0];
              var viewWidth=document.documentElement.clientWidth;
	          html.style.fontSize=viewWidth/15+"px";
          }
         
         setSize();
         window.onresize=setSize;


var next=document.getElementById("next");
var list=document.getElementById("list");
var lis=list.getElementsByTagName("li");
var len=lis.length;
var onoff=true;
var disY=0;
var disT=0;
var num=0;
var viewH=document.documentElement.clientHeight

for(var i=0;i<len;i++){
	lis[i].style.height=viewH+"px";
}



next.addEventListener("touchend",function(){
       if(num!=len-1){
            num++;
       }

   list.style.transition="0.5s";
   list.style.top=-viewH*num+"px";
  
   list.addEventListener("transitionend",function(){
   
       for(var i=0;i<len;i++){
         lis[i].className="";
       }
      lis[num].className="active";
   })
},false)







list.addEventListener("touchstart",function(ev){
   disY=ev.changedTouches[0].pageY;
   disT=list.offsetTop;
   list.style.transition="";
},false)



list.addEventListener("touchmove",function(ev){
   list.style.top=ev.changedTouches[0].pageY-disY+disT+"px"
},false);



list.addEventListener("touchend",function(ev){
   
   if(ev.changedTouches[0].pageY-disY<-50){
       if(num!=len-1){
             num++;
       }
   }else if(ev.changedTouches[0].pageY-disY>50){
       if(num!=0){
         num--;
       }
   }
   list.style.transition="0.5s";
   list.style.top=-viewH*num+"px";
  
   list.addEventListener("transitionend",function(){
   
       for(var i=0;i<len;i++){
          lis[i].className="";
       }
      lis[num].className="active";
   })

},false)








var mySwiper1 = new Swiper('.czz-xy',{
	//autoplay:1000,
	effect : 'coverflow',
	slidesPerView: 3,
	centeredSlides: true,
	coverflow: {
            rotate: -20,
            stretch: -5,
            depth: 60,
            modifier: 2,
            slideShadows : false
        }
})




var now=0;

slide("imglist1");
slide("imglist2");

function slide(obj){
var viewW=document.documentElement.clientWidth;
var imglist=document.getElementById(obj);
var oDiv=imglist.getElementsByTagName("div")[0];
var ps=oDiv.getElementsByTagName("p");
var span=imglist.getElementsByTagName("span")[0];
var disX=0;
var disL=0;
span.addEventListener("touchend",function(){
  this.parentNode.style.display="none";
},false)
for(var i=0;i<ps.length;i++){
  ps[i].style.width=viewW+"px";
}
oDiv.style.width=viewW*ps.length+"px";

oDiv.addEventListener("touchstart",function(ev){
   disX=ev.changedTouches[0].pageX;
   disL=oDiv.offsetLeft;
   oDiv.style.transition="";
},false)

oDiv.addEventListener("touchmove",function(ev){
   oDiv.style.left=ev.changedTouches[0].pageX-disX+disL+"px";
},false)

oDiv.addEventListener("touchend",function(ev){
   
   if(ev.changedTouches[0].pageX-disX<-50){
       if(now!=ps.length-1){
          now++;
       }
   }else if(ev.changedTouches[0].pageX-disX>50){
       if(now!=0){
          now--;
       }
   }
   oDiv.style.transition="0.5s";
   oDiv.style.left=-viewW*now+"px";
},false)

}




var imglist1=document.getElementById("imglist1");
var div1=document.getElementById("div1");
var list_img=document.getElementById("list-img1");
var imgs=list_img.getElementsByTagName("img");
for(var i=0;i<imgs.length;i++){
   imgs[i].index=i;
   imgs[i].addEventListener("click",function(){
       imglist1.style.display="block";
       now=this.index;
       div1.style.left=-now*document.documentElement.clientWidth+"px";
       div1.style.transition="";
   })
}







var imglist2=document.getElementById("imglist2");
var div2=document.getElementById("div2");
var list_img2=document.getElementById("list-img2");
var imgs2=list_img2.getElementsByTagName("img");
for(var i=0;i<imgs2.length;i++){
   imgs2[i].index=i;
   imgs2[i].addEventListener("click",function(){
       imglist2.style.display="block";
       now=this.index;
       div2.style.left=-now*document.documentElement.clientWidth+"px";
       div2.style.transition="";
   })
}

  document.addEventListener('touchmove', function(e) {
    e.preventDefault();
  });
}




/*var boximgs = document.getElementById("imgbox").getElementsByTagName("img");
for(var i=0;i<boximgs.length;i++){
  setScale(boximgs[i])
}
  
function setScale(obj){
  var startRotate = 0;
  var startScale = 0;
  css(obj,"translateZ",0.01);
  setGesture({
    el:obj,
    start: function(e){
      //startRotate = css(this,"rotate");
      startScale = css(this,"scale");
    },
    change:function(e){
      //css(this,"rotate",startRotate + e.rotation);
      css(this,"scale",startScale * e.scale);
    }
  })
}*/
  















/*document.addEventListener('touchstart', function(e) {
  e.preventDefault();
});*/

// Math.atan2(y,x) 斜率 由一条直线与X轴正方向所成角的正切 返回值弧度
// 角度转弧度: deg*Math.PI/180
//弧度转角度: rad*180/Math.PI 
/*function getDeg(point1,point2){
  var x = point2.x - point1.x;
  var y = point2.y - point1.y;
  return Math.atan2(y,x)*180/Math.PI; 
}
function setGesture(init){
  var el = init.el;
  var isGestrue = false; 
  var startPoint = [];
  if(!el){
    return;
  }
  el.addEventListener('touchstart', function(e) {
    if(e.touches.length >= 2){
      isGestrue = true; //记录当前用户触发了gesture
      startPoint[0] = {x:e.touches[0].pageX,y:e.touches[0].pageY};
      startPoint[1] = {x:e.touches[1].pageX,y:e.touches[1].pageY}; 
      init.start&&init.start.call(el,e);
    }
  });
  el.addEventListener('touchmove', function(e) {
    if(isGestrue&&e.touches.length >= 2){
      var nowPoint = [];
      nowPoint[0] = {x:e.touches[0].pageX,y:e.touches[0].pageY};
      nowPoint[1] = {x:e.touches[1].pageX,y:e.touches[1].pageY};
      var startDis = getDis(startPoint[0],startPoint[1]);
      var nowDis = getDis(nowPoint[0],nowPoint[1]);
      var startDeg = getDeg(startPoint[0],startPoint[1]);
      var nowDeg = getDeg(nowPoint[0],nowPoint[1]);
      e.scale = nowDis/startDis;
      e.rotation = nowDeg - startDeg;
      init.change&&init.change.call(el,e);
    }
  });
  el.addEventListener('touchend', function(e) {
    if(isGestrue){
      if(e.touches.length < 2 || e.targetTouches.length < 1){
        isGestrue = false;
        init.end&&init.end.call(el,e);
      }
    }
  });
}*/


