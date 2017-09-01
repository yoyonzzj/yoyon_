window.onload=function(){
var next=document.getElementById("next");
var list=document.getElementById("list");
var lis=list.getElementsByTagName("li");
var len=lis.length;
var onoff=true;
var disY=0;
var disT=0;
var num=0;
var viewH=document.documentElement.clientHeight;


  document.addEventListener('touchmove', function(e){
    e.preventDefault();
  });


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
      list.style.transition=""
   })


     if(num==len-1){
        next.className="up";
   }else{
        next.className="";
   }



},false)







list.addEventListener("touchstart",function(ev){
   disY=ev.changedTouches[0].pageY;
   disT=list.offsetTop;
   //list.style.transition="";
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
   
   if(num==len-1){
        next.className="up";
   }else{
        next.className="";
   }


   list.style.transition="0.5s";
   list.style.top=-viewH*num+"px";
  
   list.addEventListener("transitionend",function(){
   
       for(var i=0;i<len;i++){
          lis[i].className="";
       }
      lis[num].className="active";
      list.style.transition=""
   })

},false)


function setSize(){
     var html=document.getElementsByTagName('html')[0];
     var viewWidth=document.documentElement.clientWidth;
	    html.style.fontSize=viewWidth/7.5+"px";
   }
  setSize();
  window.onresize=setSize;	
}
