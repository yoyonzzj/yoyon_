<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html>
<html lang="zh-cn">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${CACHE_SYS_CONFIG.sysWebsitename}-支付限额</title>
<%@include file="../newtaglibs.jsp"%>
<c:set var="typeStatus" value="3"></c:set>
</head>
<body>
	<div class="ui-page ui-page-theme-a ui-page-active" data-role="page"
		style="backgroud:#eeeeee;">
		
<div class="container-fluid pb80">
    <div class="row">
        <div class="col-xs-12 mt10">
            <span class="fc_orange ">支持银行和限额</span><span class="fs12 fc_red">＊勾选的银行提现时无需填写支行</span>
        </div>
    </div>
    <div class="row bankLimit">
        <div class="col-xs-3">
            银行
        </div>
        <div class="col-xs-3">
            单笔
        </div>
        <div class="col-xs-3">
            单日
        </div>
        <div class="col-xs-3">
            单月
        </div>
    </div>
    <!--华夏银行-->
    <div class="row bankName2">
        <div class="col-xs-3  bank_sp" >
          <!--   <i class="bank_icon2 bank_hx2"></i> -->
 			<i>华夏银行</i>
        </div>
        <div class="col-xs-3 fc_orange">
            50万
        </div>
        <div class="col-xs-3 fc_blue">
            100万
        </div>
        <div class="col-xs-3 fc_green">
            3000万
        </div>
    </div>


    <!--交通银行-->
    <div class="row bankName2">
        <div class="col-xs-3 bank_sp">
           <!--  <i class="bank_icon2 bank_jt2"></i> -->
<i>交通银行</i>
        </div>
        <div class="col-xs-3 fc_orange">
            5万
        </div>
        <div class="col-xs-3 fc_blue">
            20万
        </div>
        <div class="col-xs-3 fc_green">
            600万
        </div>
    </div>
    <!--工商银行-->
    <div class="row bankName2">
        <div class="col-xs-3 bank_sp">
          <!--   <i class="bank_icon2 bank_gh2"></i> -->
          <i>工商银行</i>
            <!--打钩图片-->
          
        </div>
        <div class="col-xs-3 fc_orange">
            5万
        </div>
        <div class="col-xs-3 fc_blue">
            5万
        </div>
        <div class="col-xs-3 fc_green">
            150万
        </div>
    </div>
    <!--中国邮政-->
    <div class="row bankName2">
        <div class="col-xs-3 bank_sp">
          <!--   <i class="bank_icon2 bank_yz2"></i> -->
<i>中国邮政</i>
        </div>
        <div class="col-xs-3 fc_orange">
            10万
        </div>
        <div class="col-xs-3 fc_blue">
            50万
        </div>
        <div class="col-xs-3 fc_green">
            1500万
        </div>
    </div>
    <!--广发银行-->
    <div class="row bankName2">
        <div class="col-xs-3 bank_sp">
          <!--   <i class="bank_icon2 bank_gf2"></i> -->
<i>广发银行</i>
        </div>
        <div class="col-xs-3 fc_orange">
            50万
        </div>
        <div class="col-xs-3 fc_blue">
            100万
        </div>
        <div class="col-xs-3 fc_green">
            3000万
        </div>
    </div>
    <!--民生银行-->
    <div class="row bankName2">
        <div class="col-xs-3 bank_sp">
           <!--  <i class="bank_icon2 bank_ms2"></i> -->
           <i>民生银行</i>

        </div>
        <div class="col-xs-3 fc_orange">
            5万
        </div>
        <div class="col-xs-3 fc_blue">
            50万
        </div>
        <div class="col-xs-3 fc_green">
            1500万
        </div>
    </div>
    <!--平安银行-->
    <div class="row bankName2">
        <div class="col-xs-3 bank_sp">
          <!--   <i class="bank_icon2 bank_pa2"></i> -->
          <i>平安银行</i>

        </div>
        <div class="col-xs-3 fc_orange">
            50万
        </div>
        <div class="col-xs-3 fc_blue">
            100万
        </div>
        <div class="col-xs-3 fc_green">
            3000万
        </div>
    </div>
    <!--招商银行-->
    <div class="row bankName2">
        <div class="col-xs-3 bank_sp">
          <!--   <i class="bank_icon2 bank_zzs2"></i> -->
          <i>招商银行</i>
            <!--打钩图片-->
           <!--  <img src="images/choose.png"> -->
        </div>
        <div class="col-xs-3 fc_orange">
            5万
        </div>
        <div class="col-xs-3 fc_blue">
            5万
        </div>
        <div class="col-xs-3 fc_green">
            150万
        </div>
    </div>
    <!--中国银行-->
    <div class="row bankName2">
        <div class="col-xs-3 bank_sp">
          <!--   <i class="bank_icon2 bank_zg2"></i>
            打钩图片
            <img src="images/choose.png"> -->
            <i>中国银行</i>
        </div>
        <div class="col-xs-3 fc_orange">
            5万
        </div>
        <div class="col-xs-3 fc_blue">
            50万
        </div>
        <div class="col-xs-3 fc_green">
            1500万
        </div>
    </div>
    <!--建设银行-->
    <div class="row bankName2">
        <div class="col-xs-3 bank_sp">
          <!--   <i class="bank_icon2 bank_js2"></i> -->
          <i>建设银行</i>

        </div>
        <div class="col-xs-3 fc_orange">
            10万
        </div>
        <div class="col-xs-3 fc_blue">
            50万
        </div>
        <div class="col-xs-3 fc_green">
            1500万
        </div>
    </div>
    <!--光大银行-->
    <div class="row bankName2">
        <div class="col-xs-3 bank_sp">
           <%--  <i class="bank_icon2 bank_gd2"></i>
            <!--打钩图片-->
            <img src="${configjscss}/images/newimages/choose.png"> --%>
            <i>光大银行</i>
        </div>
        <div class="col-xs-3 fc_orange">
            50万
        </div>
        <div class="col-xs-3 fc_blue">
            100万
        </div>
        <div class="col-xs-3 fc_green">
            3000万
        </div>
    </div>
    <!--兴业银行-->
    <div class="row bankName2">
        <div class="col-xs-3 bank_sp">
          <!--   <i class="bank_icon2 bank_xy2"></i> -->
          <i>兴业银行</i>

        </div>
        <div class="col-xs-3 fc_orange">
            5万
        </div>
        <div class="col-xs-3 fc_blue">
            5万
        </div>
        <div class="col-xs-3 fc_green">
            150万
        </div>
    </div>
    <!--中信银行-->
    <div class="row bankName2">
        <div class="col-xs-3 bank_sp">
          <!--   <i class="bank_icon2 bank_zx2"></i> -->
<i>中信银行</i>
        </div>
        <div class="col-xs-3 fc_orange">
            5千
        </div>
        <div class="col-xs-3 fc_blue">
            5千
        </div>
        <div class="col-xs-3 fc_green">
            2万
        </div>
    </div>
    <!--农业银行-->
    <div class="row bankName2">
        <div class="col-xs-3 bank_sp">
           <%--  <i class="bank_icon2 bank_ny2"></i>
            <!--打钩图片-->
            <img src="${configjscss}/images/newimages/choose.png"> --%>
            <i>农业银行</i>
        </div>
        <div class="col-xs-3 fc_orange">
            20万
        </div>
        <div class="col-xs-3 fc_blue">
            20万
        </div>
        <div class="col-xs-3 fc_green">
            600万
        </div>
    </div>
    
     <!--杭州银行-->
    <div class="row bankName2">
        <div class="col-xs-3 bank_sp">
           <!--  <i class="bank_icon2 bank_hz2"></i> -->
            <!--打钩图片-->
         <%--    <img src="${configjscss}/images/newimages/choose.png"> --%>
         <i>杭州银行</i>
        </div>
        <div class="col-xs-3 fc_orange">
            5万
        </div>
        <div class="col-xs-3 fc_blue">
            30万
        </div>
        <div class="col-xs-3 fc_green">
            900万
        </div>
    </div>
      <!--上海银行-->
    <div class="row bankName2">
        <div class="col-xs-3 bank_sp">
         <!--    <i class="bank_icon2 bank_sh2"></i> -->
         <i>上海银行</i>
            <!--打钩图片-->
           <%--  <img src="${configjscss}/images/newimages/choose.png"> --%>
        </div>
        <div class="col-xs-3 fc_orange">
            10万
        </div>
        <div class="col-xs-3 fc_blue">
            100万
        </div>
        <div class="col-xs-3 fc_green">
            3000万
        </div>
    </div>
     <!--北京银行-->
    <div class="row bankName2">
        <div class="col-xs-3 bank_sp">
           <!--  <i class="bank_icon2 bank_bj2"></i> -->
           <i>北京银行</i>
            <!--打钩图片-->
        <%--     <img src="${configjscss}/images/newimages/choose.png"> --%>
        </div>
        <div class="col-xs-3 fc_orange">
            5万
        </div>
        <div class="col-xs-3 fc_blue">
            30万
        </div>
        <div class="col-xs-3 fc_green">
            900万
        </div>
    </div>   
     <!--浙商银行-->
    <div class="row bankName2">
        <div class="col-xs-3 bank_sp">
         <!--    <i class="bank_icon2 bank_zs2"></i> -->
            <!--打钩图片-->
            <i>浙商银行</i>
          <%--   <img src="${configjscss}/images/newimages/choose.png"> --%>
        </div>
        <div class="col-xs-3 fc_orange">
            5千
        </div>
        <div class="col-xs-3 fc_blue">
            5千
        </div>
        <div class="col-xs-3 fc_green">
            15万
        </div>
    </div>
    
    
    
    
    
     <div class="row bankName2">
        <div class="col-xs-3 bank_sp">
            <i >浦发银行</i>
        </div>
        <div class="col-xs-3 fc_orange">
            5万
        </div>
        <div class="col-xs-3 fc_blue">
            30万
        </div>
        <div class="col-xs-3 fc_green">
            900万
        </div>
    </div>
     <div class="row bankName2">
        <div class="col-xs-3 bank_sp">
            <i >广州银行</i>
        </div>
        <div class="col-xs-3 fc_orange">
            50万
        </div>
        <div class="col-xs-3 fc_blue">
            100万
        </div>
        <div class="col-xs-3 fc_green">
            3000万
        </div>
    </div>
     <div class="row bankName2">
        <div class="col-xs-3 bank_sp">
            <i >太仓农村商业银行</i>
        </div>
        <div class="col-xs-3 fc_orange">
            5万
        </div>
        <div class="col-xs-3 fc_blue">
            5万
        </div>
        <div class="col-xs-3 fc_green">
            150万
        </div>
    </div>
     <div class="row bankName2">
        <div class="col-xs-3 bank_sp">
            <i >东莞农商</i>
        </div>
        <div class="col-xs-3 fc_orange">
            50万
        </div>
        <div class="col-xs-3 fc_blue">
            100万
        </div>
        <div class="col-xs-3 fc_green">
            3000万
        </div>
    </div>
     <div class="row bankName2">
        <div class="col-xs-3 bank_sp">
            <i >广东农信</i>
        </div>
        <div class="col-xs-3 fc_orange">
            50万
        </div>
        <div class="col-xs-3 fc_blue">
            100万
        </div>
        <div class="col-xs-3 fc_green">
            3000万
        </div>
    </div>
     <div class="row bankName2">
        <div class="col-xs-3 bank_sp">
            <i >广州农商</i>
        </div>
        <div class="col-xs-3 fc_orange">
            50万
        </div>
        <div class="col-xs-3 fc_blue">
            100万
        </div>
        <div class="col-xs-3 fc_green">
            3000万
        </div>
    </div>
     <div class="row bankName2">
        <div class="col-xs-3 bank_sp">
            <i >深农商行</i>
        </div>
        <div class="col-xs-3 fc_orange">
            5万
        </div>
        <div class="col-xs-3 fc_blue">
            30万
        </div>
        <div class="col-xs-3 fc_green">
            900万
        </div>
    </div>
     <div class="row bankName2">
        <div class="col-xs-3 bank_sp">
            <i >宁波银行</i>
        </div>
        <div class="col-xs-3 fc_orange">
            5万
        </div>
        <div class="col-xs-3 fc_blue">
            30万
        </div>
        <div class="col-xs-3 fc_green">
            900万
        </div>
    </div>
     <div class="row bankName2">
        <div class="col-xs-3 bank_sp">
            <i >山东农信社</i>
        </div>
        <div class="col-xs-3 fc_orange">
            50万
        </div>
        <div class="col-xs-3 fc_blue">
            100万
        </div>
        <div class="col-xs-3 fc_green">
            3000万
        </div>
    </div>
     <div class="row bankName2">
        <div class="col-xs-3 bank_sp">
            <i >江南农村商业银行</i>
        </div>
        <div class="col-xs-3 fc_orange">
            10万
        </div>
        <div class="col-xs-3 fc_blue">
            10万
        </div>
        <div class="col-xs-3 fc_green">
            300万
        </div>
    </div>
     <div class="row bankName2">
        <div class="col-xs-3 bank_sp">
            <i >吉林省农信社</i>
        </div>
        <div class="col-xs-3 fc_orange">
            20万
        </div>
        <div class="col-xs-3 fc_blue">
            100万
        </div>
        <div class="col-xs-3 fc_green">
            3000万
        </div>
    </div>
     <div class="row bankName2">
        <div class="col-xs-3 bank_sp">
            <i >甘肃农信社</i>
        </div>
        <div class="col-xs-3 fc_orange">
            5万
        </div>
        <div class="col-xs-3 fc_blue">
            100万
        </div>
        <div class="col-xs-3 fc_green">
            3000万
        </div>
    </div>
     <div class="row bankName2">
        <div class="col-xs-3 bank_sp">
            <i >江苏银行</i>
        </div>
        <div class="col-xs-3 fc_orange">
            5万
        </div>
        <div class="col-xs-3 fc_blue">
            30万
        </div>
        <div class="col-xs-3 fc_green">
            900万
        </div>
    </div>
     <div class="row bankName2">
        <div class="col-xs-3 bank_sp">
            <i >长江商业银行</i>
        </div>
        <div class="col-xs-3 fc_orange">
            50万
        </div>
        <div class="col-xs-3 fc_blue">
            100万
        </div>
        <div class="col-xs-3 fc_green">
            3000万
        </div>
    </div>
     <div class="row bankName2">
        <div class="col-xs-3 bank_sp">
            <i >黑龙江农信社</i>
        </div>
        <div class="col-xs-3 fc_orange">
            50万
        </div>
        <div class="col-xs-3 fc_blue">
            100万
        </div>
        <div class="col-xs-3 fc_green">
            3000万
        </div>
    </div>
     <div class="row bankName2">
        <div class="col-xs-3 bank_sp">
            <i >恒丰银行</i>
        </div>
        <div class="col-xs-3 fc_orange">
            50万
        </div>
        <div class="col-xs-3 fc_blue">
            100万
        </div>
        <div class="col-xs-3 fc_green">
            3000万
        </div>
    </div>
     <div class="row bankName2">
        <div class="col-xs-3 bank_sp">
            <i >广东南粤</i>
        </div>
        <div class="col-xs-3 fc_orange">
            5万
        </div>
        <div class="col-xs-3 fc_blue">
            30万
        </div>
        <div class="col-xs-3 fc_green">
            900万
        </div>
    </div>
     <div class="row bankName2">
        <div class="col-xs-3 bank_sp">
            <i >东莞银行</i>
        </div>
        <div class="col-xs-3 fc_orange">
            5万
        </div>
        <div class="col-xs-3 fc_blue">
            30万
        </div>
        <div class="col-xs-3 fc_green">
           900万
        </div>
    </div>
     <div class="row bankName2">
        <div class="col-xs-3 bank_sp">
            <i >武汉农商行</i>
        </div>
        <div class="col-xs-3 fc_orange">
            50万
        </div>
        <div class="col-xs-3 fc_blue">
            100万
        </div>
        <div class="col-xs-3 fc_green">
            3000万
        </div>
    </div>
    
    


</div>






<footer>
  <jsp:include page="/web/footnew.do"></jsp:include>
</footer>
	</div>
</body>

</html>