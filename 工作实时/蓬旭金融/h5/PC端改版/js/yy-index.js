$(function(){
    var bannercontainer=$(".bannercontainer")[0]
    var banneritem=$(".banneritem")
    var anniu=$(".anniu")
    var left=$(".left")[0]
    var right=$(".right")[0]
    var num=0;
    function move(type){
        var type= type||"r";
        if(type=='r'){
            num++;
            if(num>=banneritem.length){
                num=0;
            }
        }else if(type=='l'){
                num--;
                if(num==-1){
                num=banneritem.length-1;
                }
        }
        
        for(var i=0;i<banneritem.length;i++){
//          banneritem[i].style.zIndex="1";
            banneritem[i].style.display="none";
            anniu[i].style.background="#A2A2A2";
			anniu[i].style.color="#fff";
            banneritem[i].style.opacity="0.2";
        }   
//          banneritem[num].style.zIndex="2";
            banneritem[num].style.display="block";
            anniu[num].style.background="#fff";
            anniu[num].style.color="#ffa540";
            animate(banneritem[num],{opacity:1},1000)
    }
    var t= setInterval(move,1800);
    bannercontainer.onmouseover=function(){
        clearInterval(t)
        left.style.display="block"
        right.style.display="block"
    }
    bannercontainer.onmouseout=function(){
        t=setInterval(move,1800);
        left.style.display="none"
        right.style.display="none"
    } 
    var st;      
    for (var i = 0; i < anniu.length; i++) {
            anniu[i].index=i;
            anniu[i].onmouseover=function(){
                var that=this;
                clearTimeout(st);
                st = setTimeout(function(){
                    for(var j=0;j<banneritem.length;j++){
//                      banneritem[j].style.zIndex="1";
                        banneritem[j].style.display="none";
                        banneritem[j].style.opacity="0.2";
                        anniu[j].style.background="#999";
						anniu[j].style.color="#fff";
                    }   
//                  banneritem[that.index].style.zIndex="2";
                    banneritem[that.index].style.display="block";
                    anniu[that.index].style.color="#ffa540";
                    anniu[that.index].style.background="#fff";
                    animate(banneritem[that.index],{opacity:1},1000)
                },500) 
                num=this.index;        
            }
    }        
    right.onclick=function(){
        move('r');        
    }
    left.onclick=function(){
        move('l')
    }

	
	
	
	var ulslide=$(".ulslide")[0];
    var bnum=0;
    zdt=setInterval(zdmove,2000)
    function zdmove(){
        bnum++;
        if(bnum==3){
            bnum=0;
        }
        animate(ulslide,{marginTop:-60*bnum},300)
    }
    
    
    
    
    
})