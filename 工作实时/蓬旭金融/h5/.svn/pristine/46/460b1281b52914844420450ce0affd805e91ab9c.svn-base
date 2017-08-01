/**
 * Created by Administrator on 2016/12/28.
 */

$(function(){
	$_lis = $("#czz-news li")
	$_divs = $("#czz-news div")

for(var i = 0; i < $_lis.length; i++){
    $_lis[i].index = i;
    $_lis[i].onclick = function(){
        for(var m = 0;m < $_lis.length; m++){
            $_lis[m].className = ""
        }
        this.className ="_li01";

    for(var n = 0 ; n < $_divs.length; n++){
        $_divs[n].className = ""
    }
    $_divs[this.index].className ="_div"
}
}
})