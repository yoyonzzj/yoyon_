var base={
	  getId:function(id){
       return document.getElementById(id);
	  },
    getTag:function(parent,element){
       return parent.getElementsByTagName(element);
    },
    showTip:function(obj,msg){ //悬浮提示框方法
		     obj.innerHTML=msg;
 	       obj.style.opacity=1;
         setTimeout(function(){
                 obj.style.opacity=0;
         },2000)
	  },
    redirect:function(url){  //跳转地址方法
       window.location.href=url;
    },
    onlyNumber:function(input, n){ //只能输入小数点数字方法
       input.value = input.value.replace(/[^0-9\.]/ig, '');
       var dotIdx = input.value.indexOf('.'), dotLeft, dotRight;
       if (dotIdx >= 0) {
           dotLeft = input.value.substring(0, dotIdx);
           dotRight = input.value.substring(dotIdx + 1);
           if (dotRight.length > n) {
               dotRight = dotRight.substring(0, n);
           }
           input.value = dotLeft + '.' + dotRight;
       }
  },
  delTip:function(obj){  //输入框输入显示清空字段方法
       obj.addEventListener("input",function(){
           var next=this.nextElementSibling;
           if(this.value.length>0){
              next.style.display="block";
           }else{
              next.style.display="none";
           }
      })
  },
  clearVal:function(obj){  //清空字段方法
      obj.addEventListener("touchend",function(){
           var prev=this.previousElementSibling;
           prev.value="";
           this.style.display="none";
      })
  },
  sendCode:function(obj,n){ //发送验证码的倒计时
    var timer=null;
    var num=n;
    obj.addEventListener("click",function(){
          var _this=this;
          this.disabled=true;
          timer=setInterval(function(){
              _this.value=num+"s";
              num--;
              if(num==0){
                clearInterval(timer);
                num=n;
                _this.disabled=false;
                _this.value="重新发送";
              }
             
          },1000)

    })
  }





} 

