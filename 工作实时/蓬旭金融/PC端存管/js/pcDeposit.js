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
})