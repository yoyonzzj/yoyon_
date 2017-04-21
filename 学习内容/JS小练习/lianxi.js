// var aa=4;
// alert(aa)

// 函数
// function type(n){
//     if(typeof n=="number"){
//         alert("数值类型");
//     }else if(typeof n=="string"){
//         alert("字符串类型");
//     }else if (typeof n=="boolean"){
//         alert("布尔类型");
//     }
// }
// type(1.1);
// type("1.1");
// type(1>6);


// 函数的重载
// function type(n){
//     if(arguments.length==1){
//         if(typeof arguments[0]=="number"){
//             alert("1");
//         }
//         if(typeof arguments[0]=="string"){
//             alert("2");
//         }
//     }else if(arguments.length==2){
//         if(typeof arguments[0]=="number"){
//             alert("3");
//         }
//         if(typeof arguments[0]=="string"){
//             alert("4");
//         }
//     }
// }
// type(3);
// type("3");
// type(3,"3");
// type("3",3);


// function aa(){
//     alert(1);
//     return;
// }
// alert(aa());


// var b=1;
// function aa()
// {
//     var b=2;
//     function bb()
//     {
//         var b=3;
//         function cc()
//         {
//             var b=4;
//             alert(b);
//         }
//         cc();
//     }
//     bb();
// }
// aa();


// 回调函数
// function aa(fun){        //fun=bb
//     fun();
// }

// function bb(){
//     alert(1);
// }

// aa(bb);

// 回调
// function jisuan(num1,num2,fun){
//     var res=fun(num1,num2);
//     alert(res);
// }
// function jia(m,n){
//     return m+n;
// }
// function jian(m,n){
//     return m-n;
// }
// function cheng(m,n){
//     return m*n;
// }
// function chu(m,n){
//     return m/n;
// }
// jisuan(5,7,jia);
// jisuan(5,7,jian);
// jisuan(5,7,cheng);
// jisuan(5,7,chu);


// 递归函数
// function add(n){
//     if(n==1){
//         return 1;
//     }else{
//         return n+add(n-1)
//     }
// }
// alert(add(6));


// 阶乘
// function multiply(n){
//     if(n==1){
//         return 1;
//     }else{
//         return n*multiply(n-1)
//     }
// }
// alert(multiply(3));


// 闭包函数
// function aa() {
//     var num=100;
//     function bb(){
//         return num;
//     }
//     return bb;
// }
// alert((aa())())
// aa()===bb---->bb()---->(aa())()


// 可以看到i=9
// function aa(){
//     var i=9;
//     return function bb(){
//         alert(1);
//     }
// }
// function bb(){
//     alert(1);
// }
// aa();


// 遍历数组
// var arr1=[1,2,3,4,5]

// for(var i=0;i<=arr1.length;i++){
//     console.log(arr1[i]);
// }

// for(var i in arr1){
//     console.log(arr1[i])
// }


// 二维数组
// var arr=[[1,2,3],[4,5],[6,7,8],[9,0]]

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr.length);
// console.log(arr[2][1]);

// 二维数组遍历---for-in循环

// for(var i in arr){
//     var arr1=arr[i];
//     for (var k in arr1){
//         console.log(arr[i][k]);
//     }
// }

// 用函数遍历数组

// bianli(arr)


// 找出数组里最大值
// var arr3=[45,21,3,4,23,12,7,8];
// var max=arr3[0];
// for(var i in arr3){
//     if(arr3[i]>max){
//         max=arr3[i]
//     }
// }
// alert(max);


// 函数解决
// var arr=[45,21,3,4,23,12,7,8];
// function max_num(arr){
//     var max=arr[0];
//     for(var i=1;i<arr.length;i++){
//         if(arr[i]>max){
//            max=arr[i]
//         }    
//     }
//     return max;
// }
// alert(max_num(arr));

// 从最后一个取的话，var max=arr[arr.length-1];


// 返回最长的数组
// var arr4=[[1,2,3],[2,3,5,6],[1,5,3,4,],[8,9,6,5,4]];
// function max_arr(arr){
//     var maxarr=arr[0];
//      for(var i in arr){   
//         if(arr[i].length>maxarr.length){
//             maxarr=arr[i];            
//         }
//     }
//     return maxarr;
// }
// alert(max_arr(arr4));  



// 遍历混合数组
// var arr5=[1,2,[3,4],5,[6,7,8],9,10,"love",true,"1234"];
// function bianli2(arr){
//     for(var i=0;i<arr.length;i++){
//         if(typeof arr[i]!=="object"){
//             console.log(arr[i]);
//         }else if(typeof arr[i]=="object"){
//             for(var j=0;j<arr[i].length;j++){
//                 console.log(arr[i][j])
//             }
//         }
//     };
// }
// bianli2(arr5);


// 删除数组中的空值

// var arr6=[2,3,4,,,3,2,1,,9];
// function delnull(arr){
//     var newarr=[];
//     var num=0;
//     for(var i=0;i<arr.length;i++){
//         if(typeof arr[i]=="number"){
//             newarr[num++]=arr[i];
//         }
//     }
//     return newarr;
// }
// alert(delnull(arr6));


// 剔除数组中的重复数据---开关思想
// var arr7=[1,2,3,1,2,2,1,4,5,4];
// var newarr=[];
// for(var i=0;i<arr7.length;i++){
//     var flag=true;
//     for(var j=0;j<newarr.length;j++){
//         if(arr7[i]==newarr[j]){
//             flag=false;
//             break;
//         }
//     }
//     if(flag){
//         newarr.push(arr7[i]);
//     }
// }
// console.log(newarr);

// 循环输出1到10
// 输出1到20的所有偶数
// 计算1到10的和（不用递归）
// 计算1到10的乘积（不用递归）
// 十行十列表格（封装函数）
// 九九乘法表（封装函数）
// 杨辉三角（封装函数）
// 鸡兔同笼 34头 96脚
// 一维数组遍历
// 二维数组遍历
// 数组最大值
// 二维数组最长数组
// 遍历混合数组
// 删除数组中的空值
// 删除数组中的重复值
// 排序（传入大于小于）
// 数组末尾删除元素
// 数组末尾追加元素
// 数组开头删除元素
// 数组开头追加元素
// 两个数组相连



// 排序
// var arr=[4,1,2,3,3,2,1,4]
// for(var i=0;i<arr.length;i++){
//     for(var j=i+1;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             var temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//         }
//     console.log(arr);
//     }
// }

// alert(arr);


// 冒泡排序
// var arr=[4,1,2,3,3,2,1,4]
// for(var i=0;i<arr.length;i++){
//     for(var j=0;j<arr.length-i;j++){
//         if(arr[j]>arr[j+1]){
//             var temp=arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp;
//         }
//     }
// }

// alert(arr);


// 排序封装函数
// var arr1=[4,1,2,3,3,2,1,4];
// function paixu(arr,ysf){
//     for(var i=0;i<arr.length;i++){
//         for(var j=i+1;j<arr.length;j++){
//             if(ysf){
//                 if(arr[i]>arr[j]){
//                     var temp=arr[i];
//                     arr[i]=arr[j];
//                     arr[j]=temp;
//                 }
//             }else{
//                 if(arr[i]<arr[j]){
//                    var temp=arr[i];
//                    arr[i]=arr[j];
//                    arr[j]=temp;
//                 }   
//             }
//         }
//     }
//     return arr;
// }
// alert(paixu(arr1,1));



// 数组末尾删除元素
// arr2=[3,4,1,2,3,7,4]
// function mypop(arr,n){
//     arr.length=arr.length-n;
//     return arr;
// }
// alert(mypop(arr2,2));


// 数组末尾追加元素
// arr5=[3,4,1,2,3,7,4];
// arr6=[5,9];
// function push(arr1,arr2){
//     for(i=0;i<arr2.length;i++){
//         arr1[arr1.length]=arr2[i]; 
//     }
//     return arr1;
// }
// alert(push(arr5,arr6));


// 老师写
// arr1=[3,4,1,2,3,7,4];
// function mypush(arr){
//     var xiabiao=arr.length;
//     for(var i=1;i<arguments.length;i++){
//         arr[xiabiao]=arguments[i];
//         xiabiao++;
//     }
//     return arr;
// }
// alert(mypush(arr1,4,5,6,7,8))


// 数组首部添加元素---平移法
// var arr1=[1,2,3,4,5,6];
// function myUnshift(arr){
//     var num=arr.length;
//     for(i=1;i<=num;i++){
//         arr[num-i+arguments.length]=arr[num-i];
//     }
//     for(k=0;k<arguments.length;k++){
//         arr[k]=arguments[k];
//     }
//     return arr;    
// }
// alert(myUnshift(arr1,1,2,3,4));



// 数组开头删除元素
// arr1=[3,4,1,2,3,7,4];
// function myshift(arr,n){
//     var newarr=[];
//     var i=arr.length;
//         for(j=0;j<i-n;j++){
//             newarr[j]=arr[n+j];
//         }    
//         return newarr;
// }
// alert(myshift(arr1,2));


//  ? + ? = 8
//  +   + 
//  ? - ? = 6
// ||  ||
//  13  8


// function myArray(){
//     this.length=arguments.length;
//     for(var i=0;i<arguments.length;i++){
//         this[i]=arguments[i];
//     }
// }
// var arr=new myArray(1,2,3);
// alert(arr.length)


// var arr1=[1,2,3,4,5];
// var arr2=[6,7,8,9,10];
// function mycontact(arr1,arr2){
//     var newarr=[];
//     for(var j=0;j<arguments.length;j++){
//         for(var i=0;i<arguments[0].length;i++){
//         }
//     }    
// }
// var arr=new mycontact(arr1.contact(arr2))
// alert(arr);




// var arr=new myArray(1,2,3);
// var arr1=new myArray(1,2,3);
// var arr2=new myArray(1,2,3);
// arr.mypush(1,2);
// arr.mypop();
// arr.myshift();
// arr.myunshift(1,2);
// arr.mycontact(arr1,arr2...);


// var str='img/1.jpg';
// console.log(str.replace("jpg","gif"))


// 查找字符串"优逸客官网地址:http://www.sxuek.com, 
// 优逸客课程体系：http://www.sxuek.com/uisj/,优逸客
// 学生作品：http://www.sxuek.com/sxzp/"将所有”sxuek”
//  出现的位置，打印出来

// var str=new String("优逸客官网地址:http://www.sxuek.com,优逸客课程体系：http://www.sxuek.com/uisj/,优逸客学生作品：http://www.sxuek.com/sxzp/");
// while(str.indexOf("sxuek")!=-1){
//     console.log(str.indexOf("sxuek"));
// str.replace("sxuek","*****")
// }


// 210--420随机整数(不要420）
//     console.log(Math.floor(Math.random()*210+210))
// -10--10随机整数(-10和10都要)
// console.log(Math.round(Math.random()*20-10))


// 难点---写摩天轮
// window.onload=function(){
//     var div=document.getElementsByTagName('div');
//     var jiaodu=0;
//     var speed=10;
//     var x=0;
//     var y=0;
//     var R=200;
//     for(var i=0;i<div.length;i++){
//         jiaodu+=speed;
//         x=200+R*(Math.cos(2*Math.PI/360*jiaodu));
//         y=200+R*(Math.sin(2*Math.PI/360*jiaodu));
//         div[i].style.cssText="top:"+x+"px;left:"+y+"px;";
//     };   
// }
//

// var box=document.getElementsByClassName("box")[0];
//   console.log("元素节点")
//   console.log("nodeType:",box.nodeType)
//   console.log("nodeName:",box.nodeName)   
//   console.log("nodeValue:",box.nodeValue) 

//   console.log("属性节点")
//   var attr=box.attributes[0];
//   console.log("nodeType:",attr.nodeType)
//   console.log("nodeName:",attr.nodeName)   
//   console.log("nodeValue:",attr.nodeValue) 

//   console.log("文本节点")
// var textnode=box.firstChild;
//   console.log("nodeType:",textnode.nodeType)
//   console.log("nodeName:",textnode.nodeName)   
//   console.log("nodeValue:",textnode.nodeValue)

//   console.log("注释节点")
// var innerbox2=document.getElementsByClassName("innerbox2")[0];
// var comment=innerbox2.nextSibling;
//   console.log("nodeType:",comment.nodeType)
//   console.log("nodeName:",comment.nodeName)   
//   console.log("nodeValue:",comment.nodeValue)

//   console.log("文档节点")
//   console.log("nodeType:",document.nodeType)
//   console.log("nodeName:",document.nodeName)   
//   console.log("nodeValue:",document.nodeValue)

  // 

  // window.onload=function(){
  	// function insertAfter(newdiv,innerbox2){
  	// var box=$(".box")[0];
  	// var innerbox2=$(".innerbox2")[0]
  	// var newdiv=document.createElement("div")
  	// newdiv.className="innerbox5";
  	// newdiv.innerHTML="111";
  	// console.log(111)
  	// newdiv.style.cssText="width:100px;height:100px;background-color:yellow;font-size:36px;text-align:center;line-height:100px;"
  	// box.appendChild(newdiv);
  	// box.insertBefore(newdiv,innerbox4)
  	// box.removeChild(innerbox4)
  	// box.replaceChild(newdiv,innerbox4) 
  	// 	var innerbox8=innerbox2.nextSibling[0];
  	// 	box.insertBefore(newdiv,innerbox8)

  	// }
  // }


 

 