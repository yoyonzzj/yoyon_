  //兼容性的通过类名获取元素

function getClass(className,obj)
{
   obj=obj||document;
   if(obj.getElementsByClassName)
   {
       return  obj.getElementsByClassName(className)
   }
   else
   {
   	var all=obj.getElementsByTagName("*");
   	var newarr=[]
   	for (var i = 0; i<all.length; i++)
   	 {
   		if(checkClass(className,all[i].ClassName))
   		{
           newarr.push(arr[i]);
   		}
   	}
   	return newarr;

   }
}

   function checkClass(str,lstr)
   {
   	var arr=lstr.split(" ")
   	for (var i = 0; i<=arr.length; i++) {
   	 if(arr[i]==str)
   		{
           return true
   		}
   }
   return false
 }





//兼容性的获取或修改文本内容

function getText(ele,text)
{
     //文本不为空  
   if(text!=undefined)
   {     
       if (ele.textContent!=undefined) 
       {
        ele.textContent=text;
         
      }
       else
        {
          ele.innerText=text;
        }

   } 
      //文本为空  
   else
   {

    if(ele.textContent==undefined)
    {
      return ele.textContent=text;
    }
    else
    {
      return  ele.innerText=text;
    }

   }
}





//兼容性获取样式信息

function getStyle(ele,attr)
{
  if(window.getComputedStyle)
  {
    return getComputedStyle(ele,null)[attr]
  }
  else
  {
    return ele.currentStyle[attr]
  }
}





//通过多种方式获取元素的函数
//选择器  //元素
function $(selector,eleobj)
{   if(typeof selector=="string")
  {
    eleobj=eleobj||document;
    selector=selector.replace(/^\s*|\s*$/g,"");

    if(/^\.[a-zA-Z][a-zA-Z0-9_\-]*$/.test(selector))
    {
      return getClass(selector.slice(1),eleobj)
    }

    else if(/^#[a-zA-Z0-9][a-zA-Z0-9_\-]*$/.test(selector))
    {
      return eleobj.getElementById(selector.substring(1))
    }
    else if(/^([a-zA-Z]+)|(h[1-6])$/g.test(selector))
    {
        return eleobj.getElementsByTagName(selector)

    }
    else if(/^<([a-zA-Z]+)|(h[1-6])>$/g.test(selector))
    {
           return eleobj.createElement(selector.slice(1,-1))
    }
  }

  else if(typeof selector=="function")
   {
     addEvent(window,"load", selector) 
    // window.onload=function()
    // {
    //   selector()
   }
}



function aa(callback)
{
  window.onload=function(){callback();}


}





//只获取某个对象的子节点
function getChild(obj)
{
  var newarr=[];
  var arr=obj.childNodes;
  for(i=0;i<arr.length;i++)
  {
    if(arr[i].nodeType==1)
    {
      newarr.push(arr[i])
    }
  }
  return newarr;
}




//获取第一个元素子节点

function getLast(obj)
{
  return getChildren(obj)[0]
}




//获取最后一个元素子节点
function getLast(obj)
{
  var arr=getChildren(obj)
  return arr[arr.length-1]
}


//获取下一个兄弟子节点
function getNext(obj)
{
  var next=obj.nextSibling;
  if(next==null)
  {
    return null;
  }
  while(next.nodetype!=1)
  {
    next=next.nextSibling
    if(next==null)
    {
      return null;
    }
  }
  return next;
}




//获取上一个兄弟子节点
function getPre(obj)
{
  var pre=obj.previousSibling
  if(pre==null)
  {
    return null;
  }
  while(pre.nodetype!=1)
  {
    pre=pre.previousSibling
    if(pre==null)
    {
      return null;
    }
  }
  return pre;
}




//插入函数
function insetAfter(newobj,oldobj)
{
  var next=getNext(oldobj);
  var parset=oldobj.parsetNode;
  parent.insertBefore(newobj,next);
}





// 左右轮播封装函数
function Jdld(bigbox,imgbox,btn,leftbtn,rightbtn)
{
      var width=parseInt(getStyle(bigbox,"width"));
      btn[0].style.background="red"
      imgbox.style.left=-width+"px"
      var num=1
      var flag=true
      function time()
        {
          if(flag)
          {
          flag=false
          num++
          if(num==btn.length+1)
          {
            
            animate(imgbox,{left:-num*width},1000,function(){
              num=1
              imgbox.style.left=-width+"px"
              for (var j = 0; j < btn.length; j++) 
              {
                btn[j].style.background="#3e3e3e"
              };
              btn[0].style.background="red"
              flag=true
            })
            
            
          }
          else if(num<=0)
            {
              animate(imgbox,{left:-num*-width+"px"},1000,function(){
              num=5
              imgbox.style.left=-width*5+"px"
              for (var j = 0; j < btn.length; j++) 
              {
                btn[j].style.background="#3e3e3e"
              };
              btn[btn.length-1].style.background="red"
              flag=true
            })
            }
          else{
            animate(imgbox,{left:-width*num},1000,function()
              {
                for (var j = 0; j < btn.length; j++) 
                {
                  btn[j].style.background="#3e3e3e"
                };
                btn[num-1].style.background="red"
                flag=true
              })
          }
        }


        }
      var timeout;
      var t=setInterval(time,1500)
      for (var i = 0; i < btn.length; i++)
        {
          
          btn[i].index=i
          
          btn[i].onmouseover=function()
            { 
              var that=this
              clearTimeout(timeout)
              timeout=setTimeout(function()
                {
                for (var j = 0; j < btn.length; j++) 
                  {
                    btn[j].style.background="#3e3e3e"
                  };
                  that.style.background="red"
                  animate(imgbox,{left:-width*(that.index+1)},1000)
                },1000)
            }
          btn[i].onmouseout=function()
          {
            num=this.index+1
          }
        };
      bigbox.onmouseover=function()
        {
          clearInterval(t);
          leftbtn.style.display="block"
          rightbtn.style.display="block"
        }
      bigbox.onmouseout=function()
        {
          t=setInterval(time,1500)
          leftbtn.style.display="none"
          rightbtn.style.display="none"
        }
      leftbtn.onclick=function()
        {
          if(flag)
          {
          num-=2
          time()
          }
        }
      rightbtn.onclick=function()
        {
          time()
        }
}




// 双下标左右轮播
function jdlbs(bannerbox,imgs,btns,lefta,righta){
            

            var width=parseInt(getStyle(imgs[0],"width"))//转为整形
            // alert(width)

            btns[0].style.background="red"//当前第一个为红色
            var now=0;//第一张图片的位置
            var num=0;//移动的次数
            var z=10;


            var t=setInterval(lunbo,2000)//自动轮播每两秒一次
            imgs[0].style.zIndex=5//第一张图片层级调高
            function lunbo(){
              num++;
            if(num==imgs.length)
               {num=0}
             imgs[num].style.left=width+"px";
             imgs[num].style.zIndex=z++;
            animate(imgs[now],{left:-width});//animate为动画  原先第一张图向左走一张图片的位置
            animate(imgs[num],{left:0});     //
             btns[now].style.background="#ccc"//原来定义的颜色
             btns[num].style.background="red"//每次移动时到另一个位置时的颜色
             now=num; 
            }

            //把按钮加进去
            for (var i = 0; i < btns.length; i++) {
              btns[i].index=i;
              btns[i].onmouseover=function(){
                if(now<this.index){ //this.index是btns[i]的索引=num
                    imgs[this.index].style.left=width+"px";//先把图片放到右边
                    
                    animate(imgs[now],{left:-width});//正常向左走为负
                   }
                if(now>this.index){//指当前按钮5>他想去的按钮
                    imgs[this.index].style.left=-width+"px";//先把图片放到左边
                    animate(imgs[now],{left:width});//now指移出原位的图片动画向右走
                }
                imgs[this.index].style.zIndex=z++;
                animate(imgs[this.index],{left:0})
                btns[now].style.background="#ccc"
                btns[this.index].style.background="red"
                now=this.index;
               
              }
             
            };
            bannerbox.onmouseover=function(){
              righta.style.display="block";
              lefta.style.display="block";
              clearInterval(t)
              }
             bannerbox.onmouseout=function(){
              righta.style.display="none"; 
              lefta.style.display="none";
              t=setInterval(lunbo,2000)
              }
              righta.onclick=function(){
                lunbo()
              }
              lefta.onclick=function(){
                num--;
               if(num==-1){//当前图片为1时要取下一张图片左边没图片如果有即为-1，
                    num=imgs.length-1;//左边的图片为而下一张图片即第六张它的下表为5，因此img.length长度为6要减1赋值于下一张图片num
                   }
               imgs[num].style.left=-width+"px";//把下一张图片取出来放到左边，因此为-的宽度，
               imgs[num].style.zIndex=z++;
               animate(imgs[now],{left:width});//animate为动画  原先图向右走一张图片的位置
               animate(imgs[num],{left:0});     //下一张的图片梗着向右走一张的图片位置到框中
               btns[now].style.background="#ccc"//原来定义的颜色
               btns[num].style.background="red"//每次移动时到另一个位置时的颜色
               now=num; //把下一张图片赋值给当前
               }
               
         

}






//晃动效果

function  HdXg(hd,as)
{
    hd.onmouseover=function()
{
    animate(as,{left:-10},Tween.Quad.easeIn)
}

    hd.onmouseout=function()
{
    animate(as,{left:0},Tween.Quad.easeIn)
}

}





//获取任意元素坐标

function getPosition(obj)
{
   // var left=obj.offsetLeft
   var top=obj.offsetTop

   var parent=obj.parentNode
   while(parent.nodeName!="BODY")
   {
    if(getStyle(parent,"position")=="absolute"||getStyle(parent,"position")=="relative")
    {
      // left+=parent.offsetLeft+parseInt(getStyle(parent,"borderLeftWidth"))
      top+=parent.offsetTop+parseInt(getStyle(parent,"borderTopWidth"))
    }
    parent=parent.parentNode
   }
   // return {x:left,y:top}
   return top;
}






// 兼容性绑定多个事件的函数
function addEvent(obj,event,fun)
{
   if(obj.addEventListener)
   {
    obj.addEventListener(event,fun,false)
   }
   else
   {
    obj.attachEvent("on"+event,fun)
   }
}







//兼容性删除事件的函数
function removeEvent(obj,event,fun)
{
   if(obj.addEventListener)
   {
    obj.removeEventListener(event,fun,false)
   }
   else
   {
    obj.detachEvent("on"+event,fun)
   }
}





//添加滚轮事件函数

function mouseWheel(obj,upfun,downfun)
{

  if(document.attachEvent)
  {
  obj.attachEvent("onmousewheel",scrollFn); //IE、 opera
  }

  else if(document.addEventListener)
  {
  obj.addEventListener("mousewheel",scrollFn,false);
  //chrome,safari 
  obj.addEventListener("DOMMouseScroll",scrollFn,false);
  //firefox
  }

  function scrollFn(e)
  {
    var ev=e||window.event;

    var dir=ev.detail||ev.wheelDelta;
   if(dir==-3||dir==120)
   {
     upfun.call(obj)
   }
   else
   {
    downfun.call(obj)
   }
 }
}






//拖拽效果封装函数
function Drag(obj,setingObj)  //传两个形参
 {
        setingObj=setingObj||{} //赋值一个对象或空对象
        this.pos=setingObj.pos||"absolute"; //默认的定位或者赋值为绝对定位
        this.x=setingObj.x==undefined?true:setingObj.x; //当setObj.x没有被定义时返回true，否则返回它的值
        this.y=setingObj.y==undefined?true:setingObj.y; //当setObj.Y没有被定义时返回true,否则返回它的值
        this.animate=setingObj.animate==undefined?true:setingObj.animate; //当setingObj.animate没有被定义时返回true,否则返回它的值
        this.obj=obj;//把obj值付给obj;
        if(getComputedStyle(obj,null).position!="absolute"&&getComputedStyle(obj,null).position!="fixed")
        {//判断元素的定位方式，如果不为absolute且不为fixed,赋值为this.pos
          obj.style.position=this.pos;    
        }
        //定义初始的值
        this.ox=0;
        this.oy=0;
        this.cx=0;
        this.cy=0;
        this.left=0;
        this.top=0;
        this.down()//调用down()方法
        this.aa;  //定义一个中间变量
        this.startX=0;
        this.startY=0;
        this.endX=0;
        this.endY=0; 
        this.changeX=0;
        this.changeY=0;
        this.speed=0.8;
  }

  
  Drag.prototype={//Drag函数原型
    //鼠标按下事件 down方法
    down:function()
    {
     var that=this;
       
     addEvent(this.obj,"mousedown",function(e){//添加mousedown事件
      if(ev.preventDefault){
        ev.preventDefault()//阻止默认浏览器动作（W3C）
      }
      else
      {
        ev.returnValue=false;//IE中阻止函数器默认动作的方法
      }
      var ev=e||window.event; //解决IE和现代浏览器的获取事件对象的兼容性问题。
      that.ox=ev.offsetX; //获取距离事件源的距离
      that.oy=ev.offsetY;
      that.move()//调用move()方法
      that.up() //调用up方法
      //事件对象阻止浏览器的默认行为
 
     })   
    },
    //鼠标移动事件 move方法
    move:function()
    {
     var that=this;
     this.aa=this.mmove()//将this.mmove赋值给中间变量
     addEvent(document,"mousemove",this.aa)//给文档添加mousemove事件
    },
    //鼠标抬起事件 up方法
    up:function()
    {
     var that=this;
     addEvent(document,"mouseup",function(){//给文档添加mouseup文档
      removeEvent(document,"mousemove",that.aa)//移除mousemove事件
      if(that.animate)//if判断语句
      {
      var flag=Math.abs(that.changeX)<Math.abs(that.changeY);//比较x轴和y轴将变量给flag
      var t=setInterval(function()//时间周期函数
      {
        that.changeX*=that.speed;//计算每一时间的改变量
        that.changeY*=that.speed; 
          that.left+=that.changeX;//将改变量赋值
          that.top+=that.changeY;
          if(flag)
          {
              if(Math.abs(that.changeY)<1)//判断flag值，只要绝对值小于1就停止setInterval函数
              {
                clearInterval(t)
              }
          } 
          else
          {
              if(Math.abs(that.changeX)<1)
              {
                clearInterval(t)
              }
          }
         if(that.x&&that.y)//只要有一个值满足条件就停止运动，输出x轴和y轴的数值
         {
         that.obj.style.left=that.left+"px";
         that.obj.style.top=that.top+"px";
         }
         if(that.x&&!that.y)
         {
         that.obj.style.left=that.left+"px";  
         }
         if(!that.x&&that.y)
         {
         that.obj.style.top=that.top+"px";
         }  
      },60)
      }
     }) 
    },
    mmove:function()//mmove方法
    {
      //返回一个事件处理程序 fun  
     var that=this;
     function aa(e)//aa函数
     {
     var ev=e||window.event;
     that.cx=ev.clientX;//获取鼠标距离浏览器x轴和y轴的距离
     that.cy=ev.clientY; 
     that.left=that.cx-that.ox;//计算事件源距离浏览器的左侧和上边的距离
     that.top=that.cy-that.oy;
     that.endX=that.left;//赋值
     that.endY=that.top;
     if(that.x&&that.y)//只要有一个值满足条件就停止运动，输出x轴或y轴的数值
     {
     that.obj.style.left=that.left+"px";
     that.obj.style.top=that.top+"px";
     }
     if(that.x&&!that.y)
     {
       that.obj.style.left=that.left+"px";  
     }
     if(!that.x&&that.y)
     {
      that.obj.style.top=that.top+"px";
     }
     that.changeX=that.endX-that.startX;
     //start执行上一次mousemove的left 和top
     //end  当前这一次mousemove的left和top
     //change 最后一次mousemove的时候改变量
     that.changeY=that.endY-that.startY;
     that.startX=that.endX;
     that.startY=that.endY;
      }
     return aa;//返回aa
    }
  }






//判断某个元素是否包含有另外一个元素
 function contains (parent,child) {
  if(parent.contains){
     return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
 }

 //判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
  function checkHover (e,target) {
   if(getEvent(e).type=="mouseover"){
      return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
   }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
  }


//鼠标移入移除事件
/*
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover (obj,overfun,outfun) {
    if(overfun){
      obj.onmouseover=function  (e) {
        if(checkHover(e,obj)){
           overfun.call(obj,e);
        }
      }
    }
    if(outfun){
      obj.onmouseout=function  (e) {
        if(checkHover(e,obj)){
           outfun.call(obj,e);
        }
      }
    }
}
 




 
  function getEvent(e){
    return e||window.event;
  } 



//顶部导航栏效果鼠标 鼠标经过出现大的文本框
function  aa(dhBoxN,dhBoxNs)
{
    
    hover(dhBoxN,function(){
      dhBoxN.style.background="#fff"
      dhBoxNs.style.display="block"

   },function(){
      dhBoxN.style.background=""
      dhBoxNs.style.display="none"
   })

   hover(dhBoxNs,function(){
        dhBoxN.style.background="#fff"
        dhBoxNs.style.display="block"
   },function(){
       dhBoxN.style.background=""
       dhBoxNs.style.display="none"
   })
 


}




//正则将字符串空格替换
function trim(str,mode)
{
  if(mode=="l")
  {
    return str.replace(/^\s+/,"")
  }
  else if(mode=="r")
  {
     return str.replace(/\s+$/,"")
  }
   else if(mode=="b")
  {
     return str.replace(/^\s+|\s+$/g,"")
  }
   else if(mode=="a")
  {
     return str.replace(/\s+/g,"")
  }

  else if(mode=="m")
  {
     var leftreg=/^\s+/;
     var lefts=leftreg.exec(str);
     var rightreg=/\s+$/;
     var rights=rightreg.exec(str)
     return lefts+str.replace(/\s+/g,"")+rights;
  }

}






// //Ajax 的函数封装
function ajax(settingobj)
{
    var type=settingobj.type||"get";
    var url=settingobj.url;
    var asynch=settingobj.asynch==undefined?true:settingobj.asynch;//是否异步
    var dataType=settingobj.dataType||"text";
    var success=settingobj.success;
    var data=settingobj.data;
  
    if (typeof data=="object")
   {
     var str=""
     for(i in data)
     {
      var  str=str+i+"="+data[i]+"&"
     }
     str=str.slice(0,-1);
     data=str;
   };

    var ajaxobj=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");//获取Ajax对象
    if(type=="get")//判断提交方式 get
    {
       if(data=="")
       {
        ajaxobj.open(type,url,asynch);
       }
       else
       {
        ajaxobj.open(type,url+"?"+data,asynch);
       }
       ajaxobj.send(null)
    }
    else if(type=="post")//判断提交方式 post
    {
      ajaxobj.open(type,url,asynch);
      ajaxobj.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
      ajaxobj.send(data)
    }
    
    ajaxobj.onreadystatechange=function()
    {
        if(ajaxobj.readyState==4)
        {
           if(ajaxobj.status==200)
            {
               if(dataType=="text")
               {
                 var aa=ajaxobj.responseText;
                 success(aa)
               }
               else if(dataType=="xml")
               {
                var aa=ajaxobj.responseXML;
                 success(aa)
               }
                 else if(dataType=="json")
               {
                var aa=ajaxobj.responseText;
                aa=JSON.parse(aa)
                success(aa)
               }
            }
            else if (ajaxobj.status==404) 
            {
               alert("页面未找到")
            }
        }
    }




}


