$(function(){
  var list=document.getElementById("list");
  var lis=list.getElementsByTagName("li");
  var viewHeight=document.body.clientHeight;
  var next=document.getElementById("arrow");
  var len=lis.length;
  for(var i=0;i<len;i++){
    lis[i].style.height=viewHeight+"px"
  }
 
  





















  function bind(obj,type,fn){
     if(obj.addEventListener){
      obj.addEventListener(type, fn,false);
     }else if(obj.attachEvent){
       obj.attachEvent("on"+type,function(){
            fn.call(obj)
       })
     }
  }

 function fn1(ev){
   var ev=ev||event;
   ev.preventDefault();
   var bool=true;
   if(ev.wheelDelta){
        bool=ev.wheelDelta>0?true:false;
   }else{
        bool=ev.detail<0?true:false
   }
   
   return bool

 }

var onoff=true;
var now=0;




  next.addEventListener("click",function(){
   //alert(1)
   if(now!=len-1){
          now++;
   }

  
  list.style.transform="translateY("+(-now*viewHeight)+"px)";
  list.addEventListener("transitionend",function(){
      onoff=true
  },false) 
  
 
   list.addEventListener("transitionend",function(){
   
       for(var i=0;i<len;i++){
          lis[i].className="";
       }
      lis[now].className="active";
   })

  
  if(now==len-1){
        next.className="up";
   }else{
        next.className="";
   }



},false)















bind(box,"mousewheel",function(ev){
   //ev.preventDefault()
 if(onoff){
    onoff=false
    if(fn1(ev)){
      
      if(now>0){
        now--;
      }else{
        onoff=true
      }
      
    }else{
      
      if(now<len-1){
        now++
      }else{
        onoff=true
      }
     
    }
  }
  

 
  list.style.transform="translateY("+(-now*viewHeight)+"px)";
  
  list.addEventListener("transitionend",function(){
      onoff=true
  },false)  

 

    list.addEventListener("transitionend",function(){
   
       for(var i=0;i<len;i++){
          lis[i].className="";
       }
      lis[now].className="active";
   })


 
  if(now==len-1){
        next.className="up";
   }else{
        next.className="";
   }



 });
 
 


 bind(box,"DOMMouseScroll",function(ev){
    //ev.preventDefault()
     //ev.preventDefault()
 if(onoff){
    onoff=false
    if(fn1(ev)){
      
      if(now>0){
        now--;
      }else{
        onoff=true
      }
      
    }else{
      

      if(now<len-1){
        now++
      }else{
        onoff=true
      }
     
    }
 }


  list.style.transform="translateY("+(-now*viewHeight)+"px)";
  list.addEventListener("transitionend",function(){
      onoff=true
  },false) 
  
 
   list.addEventListener("transitionend",function(){
   
       for(var i=0;i<len;i++){
          lis[i].className="";
       }
      lis[now].className="active";
   })

  
  if(now==len-1){
        next.className="up";
   }else{
        next.className="";
   }

 });










window.onresize=function(){

	console.log(document.documentElement.clientHeight)
	for(var i=0;i<lis.length;i++){
		lis[i].style.width="100%";
		lis[i].style.height=viewHeight+"px";
        lis[i].style.background="url(images/bg.png) no-repeat center center";
        lis[i].style.backgroundSize="cover";
	}


}













})