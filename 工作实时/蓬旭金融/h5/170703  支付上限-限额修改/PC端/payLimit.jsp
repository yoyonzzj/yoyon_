<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
<%@include file="../taglibs.jsp"%>
<link rel="stylesheet" type="text/css" href="${frontPath }/css/help.css" />
<style type="text/css">
.left_sidebar .liN11 a {
	color: #ffa540
}

</style>
</head>
<jsp:include page="/topnew.do" />
<title>帮助中心>支付上限</title>
<body>
<div class="wrap clearfix pt30">
    <div class="left_sidebar">
       <jsp:include page="/content/helpLeft.do" /> 
    </div>
    <!--个人信息-->
    <div class="user_content minHight700">
       <div class="user_title"><p>支付上限</p></div>
            <div class="paylimit_table">
            <div class="clearfix user_choose">
                <ul>
                    <li class="active">认证支付限额</li>
                    <li>网银支付限额</li>
                   
                </ul>
            </div>
           <!-- 认证支付限额-->
            <table width="0"  cellspacing="0" cellpadding="0" class="tabletabs">
            <thead>
			  <tr>
			    <th class="w10p">银行</th>
			    <th class="w10p">单笔限额</th>	
			    <th class="w10p">单日限额</th>
			    <th class="w10p">单月限额</th>
			    <th class="w60p">开通条件</th>
			  </tr>
		  </thead>
		  <tbody>
		  <tr>
		    <td>农业银行</td>
		    <td>20万</td>
		    <td>20万</td>
		    <td>600万</td>
		    <td>如果银行预留手机号码更换过或者开通过程中提示预留信息有误情况，可到农业银行柜台告知柜员银行预留手机号，修改客户信息的交易码为10400。<br/>建议开通银联在线支付业务，可使用IE浏览器登录银联用户系统开通，网址为<br/>https://www.95516.com/static/union/pages/card/openFirst.html?entry=openPay，开通中如有疑问建议联系银联客服。</td>
		  </tr>
		  <tr>
		    <td>交通银行</td>
		    <td>5万</td>
		    <td>20万</td>
		    <td>600万</td>
		    <td>建议携带身份证、银行卡至银行柜台去开通网银业务。<br/>建议开通银联在线支付业务，使用IE浏览器登录银联用户系统开通，网址为：<br/>https://www.95516.com/static/union/pages/card/openFirst.html?entry=openPay，开通中如有疑问建议联系银联客服。<br/>注意：批量卡或2000/04/01之前开立的卡，在开通在线支付时，需要先至银行柜台开通电子银行；儿童卡或联名账户借记卡，不允许开通银联在线支付。 </td>
		  </tr>
		  <tr>
		    <td>工商银行</td>
		    <td>5万</td>
		    <td>5万</td>
		    <td>150万</td>
		    <td>建议开通银联在线支付业务。请先前往工行网点办理4204柜面预留手机号码业务，后登录银联用户系统开通银联在线支付业务。</td>
		  </tr>
		  <tr>
		    <td>邮储银行</td>
		    <td>10万</td>
		    <td>50万</td>
		    <td>1500万</td>
		    <td>需建议开通银联在线支付业务，建议登录邮储个人网上银行开通，具体可联系邮储银行客服热线95580咨询如何开通此业务。或在银行柜台开通此业务，还可使用IE浏览器登录银联用户系统开通，网址为：https://www.95516.com/static/union/pages/card/openFirst.html?entry=openPay，开通中如有疑问建议联系银联客服。</td>
		  </tr>
		  <tr>
		    <td>浦发银行</td>
		    <td>5万</td>
		    <td>30万</td>
		    <td>900万</td>
		    <td>需开通网银或手机银行。</td>
		  </tr>
		  <tr>
		    <td>广发银行</td>
		    <td>50万</td>
		    <td>100万</td>
		    <td>3000万</td>
		    <td>建议携带身份证、银行卡至银行柜台开通网上银行业务。</td>
		  </tr>
		  <tr>
		    <td>平安银行</td>
		    <td>50万</td>
		    <td>100万</td>
		    <td>3000万</td>
		    <td>&nbsp;</td>
		  </tr>
		  <tr>
		    <td>招商银行</td>
		    <td>5万</td>
		    <td>5万</td>
		    <td>150万</td>
		    <td>&nbsp;</td>
		  </tr>
		  <tr>
		    <td>民生银行</td>
		    <td>5万</td>
		    <td>50万</td>
		    <td>1500万</td>
		    <td>&nbsp;</td>
		  </tr>
		  <tr>
		    <td>中国银行</td>
		    <td>5万</td>
		    <td>50万</td>
		    <td>1500万</td>
		    <td>建议开通银联跨行无卡支付和银联在线支付业务，开通中如有疑问建议联系中行客服。<br/>1）可先根据需要通过柜台、网银、自助终端、电话银行、手机银行等渠道办理借记卡“银联跨行无卡支付“功能。并根据自身需要设定每日累计交易限额，中行对无卡支付限额默认每卡每日5万元，您可根据需要调高或调低，如设置为0则默认关闭。开通此功能不允许代办，具体开通过程中如有疑问请联系中行客服热线95566咨询如何开通此业务。<br/>若需通过网银开通“银联跨行无卡支付“功能，请携带本人身份证件、银行卡以及银行预留手机号的手机前往中国银行各营业网点进行注册开通理财版或贵宾版网上银行。登录个人网上银行，选择“电子支付-银联跨行无卡支付”，按照页面提示操作开通“银联跨行无卡支付”功能，具体开通过程中如有疑问请联系中行客服热线95566咨询如何开通此业务。<br/>2）“银联跨行无卡支付”功能开通支付成功后，再登录银联用户系统，网址为：<br/>https://www.95516.com/static/union/pages/card/openFirst.html?entry=openPay开通银联在线支付业务。</td>
		  </tr>
		  <tr>
		    <td>建设银行</td>
		    <td>10万</td>
		    <td>50万</td>
		    <td>1500万</td>
		    <td>需开通开通网上银行、手机银行中任一业务，并确保开通以上功能的手机号与预留手机号一致。<br/>建议开通建行高级版（签约版）网银业务并激活后，再登陆银联用户系统，使用办理该高级版（签约版）网银业务的手机号开通银联在线支付业务。</td>
		  </tr>
		  <tr>
		    <td>光大银行</td>
		    <td>50万</td>
		    <td>100万</td>
		    <td>3000万</td>
		    <td>建议开通网上支付功能，开通方法如下，开通过程中如有疑问具体可联系光大银行客服热线95595咨询如何开通此业务。<br/>1、登录网上银行专业版，在""更多功能""-""电子支付""-""支付签约管理""-""网上支付""项下，点击""开通""；<br/>2、登录手机银行客户端，点击""我的""右上角按钮，通过""支付签约管理""中开通（需要先开通对外转账版的手机银行-----您可以通过个人专业版网银-更多功能-电子渠道-“手机银行”，在操作栏位下点击“修改”开通手机银行对外转账功能；未开通专业版网银的情况下，请本人携带有效身份证件及卡片至柜台办理）；<br/>3、如果您持有光大信用卡，可以使用信用卡预留的手机号码致电95595通过电话人工服务申请开通借记卡的网上支付功能，限额为500元/日；<br/>4、本人携带有效身份证件原件及卡片到光大银行柜台办理开通。</td>
		  </tr>
		  <tr>
		    <td>兴业银行</td>
		    <td>5万</td>
		    <td>5万</td>
		    <td>150万</td>
		    <td>建议携带身份证、银行卡至银行柜台开通“无卡在线支付业务”。或使用IE浏览器登录银联用户系统开通银联在线支付业务，网址为：<br/>https://www.95516.com/static/union/pages/card/openFirst.html?entry=openPay，开通中如有疑问建议联系银联客服。</td>
		  </tr>
		  <tr>
		    <td>中信银行</td>
		    <td>5000元</td>
		    <td>5000元</td>
		    <td>2万</td>
		    <td>建议开通短信通业务。</td>
		  </tr>
		  <tr>
		    <td>华夏银行</td>
		    <td>50万</td>
		    <td>100万</td>
		    <td>3000万</td>
		    <td>建议携带身份证、银行卡至银行柜台开通网上银行业务。</td>
		  </tr>
		   <tr>
		    <td>杭州银行</td>
		    <td>5万</td>
		    <td>30万</td>
		    <td>900万</td>
		    <td>&nbsp;</td>
		  </tr>
		   <tr>
		    <td>北京银行</td>
		    <td>5万</td>
		    <td>30万</td>
		    <td>900万</td>
		    <td>&nbsp;</td>
		  </tr>
		   <tr>
		    <td>浙商银行</td>
		    <td>5000元</td>
		    <td>5000元</td>
		    <td>15万</td>
		    <td>&nbsp;</td>
		  </tr>
		  <tr>
		    <td>上海银行</td>
		    <td>10万</td>
		    <td>100万</td>
		    <td>3000万</td>
		    <td>需开通银联在线支付业务，可使用IE浏览器登录银联用户系统开通银联在线支付业务，网址为：<br/>https://www.95516.com/static/union/pages/card/openFirst.html?entry=openPay，开通中如有疑问建议联系银联客服。</td>
		  </tr>
		   <tr>
		    <td>广州银行</td>
		    <td>50万</td>
		    <td>100万</td>
		    <td>3000万</td>
		    <td>&nbsp;</td>
		  </tr>
		   <tr>
		    <td>东莞农村商业银行</td>
		    <td>50万</td>
		    <td>100万</td>
		    <td>3000万</td>
		    <td>需开通银联在线支付业务，可使用IE浏览器登录银联用户系统开通银联在线支付业务，网址为：<br/>https://www.95516.com/static/union/pages/card/openFirst.html?entry=openPay，开通中如有疑问建议联系银联客服。</td>
		  </tr>
		   <tr>
		    <td>广东省农村信用社联合社</td>
		    <td>50万</td>
		    <td>100万</td>
		    <td>3000万</td>
		    <td>需开通银联在线支付业务，可使用IE浏览器登录银联用户系统开通银联在线支付业务，网址为：<br/>https://www.95516.com/static/union/pages/card/openFirst.html?entry=openPay，开通中如有疑问建议联系银联客服。</td>
		  </tr>
		  <tr>
		    <td>广州农村商业银行</td>
		    <td>50万</td>
		    <td>100万</td>
		    <td>3000万</td>
		    <td>&nbsp;</td>
		  </tr>
		   <tr>
		    <td>深圳农村商业银行</td>
		    <td>5万</td>
		    <td>30万</td>
		    <td>900万</td>
		    <td>&nbsp;</td>
		  </tr>
		   <tr>
		    <td>宁波银行</td>
		    <td>5万</td>
		    <td>30万</td>
		    <td>900万</td>
		    <td>"建议开通电话银行、手机银行。<br/>需开通银联在线支付业务，可使用IE浏览器登录银联用户系统开通银联在线支付业务，网址为：<br/>https://www.95516.com/static/union/pages/card/openFirst.html?entry=openPay，开通中如有疑问建议联系银联客服。"</td>
		  </tr>
		  <tr>
		    <td>甘肃省农村信用社联合社</td>
		    <td>5万</td>
		    <td>100万</td>
		    <td>3000万</td>
		    <td>&nbsp;</td>
		  </tr>
		   <tr>
		    <td>江苏银行</td>
		    <td>5万</td>
		    <td>30万</td>
		    <td>900万</td>
		    <td>&nbsp;</td>
		  </tr>
		   <tr>
		    <td>江苏长江商业银行</td>
		    <td>50万</td>
		    <td>100万</td>
		    <td>3000万</td>
		    <td>&nbsp;</td>
		  </tr>
		   <tr>
		    <td>黑龙江省农村信用社联合社</td>
		    <td>50万</td>
		    <td>100万</td>
		    <td>3000万</td>
		    <td>&nbsp;</td>
		  </tr>
		   <tr>
		    <td>恒丰银行</td>
		    <td>50万</td>
		    <td>100万</td>
		    <td>3000万</td>
		    <td>&nbsp;</td>
		  </tr>
		  <tr>
		    <td>广东南粤银行</td>
		    <td>5万</td>
		    <td>30万</td>
		    <td>900万</td>
		    <td>&nbsp;</td>
		  </tr>
		  <tr>
		    <td>东莞银行</td>
		    <td>5万</td>
		    <td>30万</td>
		    <td>900万</td>
		    <td>&nbsp;</td>
		  </tr>
		  <tr>
		    <td>武汉农村商业银行</td>
		    <td>50万</td>
		    <td>100万</td>
		    <td>3000万</td>
		    <td>&nbsp;</td>
		  </tr>
		  <tr>
		    <td>&nbsp;</td>
		    <td>&nbsp;</td>
		    <td>&nbsp;</td>
		    <td>&nbsp;</td>
		    <td>柜面开通银联无卡支付业务支持大部分地区（存在少部分地区不支持）开通银联无卡支付业务建议网上开通，使用网上银行或通过银联官网开通，开通成功率更高。网银如何开通建议咨询银行客服</td>
		  </tr>
		  <tr>
		    <td colspan="5">注：商户限额、用户银行卡本身限额、认证支付标准限额，3者取最低限额。限额表仅供参考，实际以支付界面提示为准</td>
		  </tr>
		  </tbody>
		</table>
		<!-- 网银支付限额-->
<div class="paylimit_table2 tabletabs" style="display:none">
		<table width="0" border="0" cellspacing="0" cellpadding="0">
		<thead>
		  <tr>
		    <th class="w20p">银行</th>
		    <th class="w55p">限额</th>
		    <th class="w10p">支持卡种</th>
		    <th class="w15p">银行客服电话</th>
		  </tr>
		  </thead>
		  <tbody>
		  <tr>
		    <td>工商银行</td>
		    <td>1、自助注册网银（未申请U盾、口令卡、密码器）交易限额0元；<br/>
		      2、申请口令卡没有开通手机短信认证，单笔支付限额500元，日累计支付限额1000元；<br/>
		      3、申请口令卡并开通手机短信认证，单笔支付限额2000元，日累计支付限额5000元；<br/>
		      4、批量交易单笔1000元，日累计5000元；<br/>
		      5、密码器客户网上单笔交易限额50万，日累计支付限额100万；<br/>
		    6、U盾客户网上银行的初始单笔50万，日累计支付限额为100万，U盾客户如需提高限额，可至柜台办理相应限额提升。</td>
		    <td>借记卡</td>
		    <td>95588</td>
		  </tr>
		  <tr>
		    <td>建设银行</td>
		    <td>1、动态口令卡： 5000元/笔，5000元/日；<br/>
		      2、一代网银盾：5万元/笔，10万元/日；<br/>
		      3、二代网银盾（含一代网银盾+动态口令卡、一代网银盾+短信动态口令）：50万元/笔，50万元/日<br/>
		    <td>借记卡</td>
		    <td>95533</td>
		  </tr>
		  <tr>
		    <td>招商银行</td>
		    <td>1、专业版（ukey）：单笔50万，单日无限额<br/>
		      2、PC端账号密码支付 （卡号密码支付）：保护期内单笔单日500，保护期结束后单笔单日5000（累计支付金额达到200元那天起的15天后保护期自动结束），如直接使用一卡通直付（卡密支付时使用取款密码）的单笔单日5000<br/>3、手机支付(即个人银行大众版)：单笔单日5000元。 </td>
		    <td>借记卡</td>
		    <td>95555</td>
		  </tr>
		  <tr>
		    <td>交通银行</td>
		    <td>1、USB证书：单笔50万及每日限额100万元；<br/>
		    2、短信密码：单笔及每日限额50000元；</td>
		    <td>借记卡</td>
		    <td>95559</td>
		  </tr>
		  <tr>
		    <td>中国银行</td>
		    <td>1、口令卡：50000/笔，50万/日；<br/>
		     2、KEY：50000/笔，350万/日；</td>
		    <td>借记卡</td>
		    <td>95566</td>
		  </tr>
		  <tr>
		    <td>光大银行</td>
		    <td>1、手机动态密码：单笔限额5000，每日限额5000;<br/>
		    2、令牌动态密码：单笔限额500000，每日限额500000</td>
		    <td>借记卡</td>
		    <td>95595</td>
		  </tr>
		  <tr>
		    <td>中信银行</td>
		    <td>1、文件证书：1000元/笔，5000元/日<br/>
		      2、手机动态口令：1000元/笔，5000元/日<br/> 
		      3、USBkey：500000元/笔，1000000元/日<br/> 
		    </td>
		    <td>借记卡</td>
		    <td>95558</td>
		  </tr>
		  <tr>
		    <td>广发银行</td>
		    <td>1、手机动态验证码:单笔单日300元;<br/>2、Key盾:单笔单日500元；</td>
		    <td>借记卡</td>
		    <td>95508</td>
		  </tr>
		  <tr>
		    <td>浦发银行</td>
		    <td>1、签约用户（数字证书版）:单笔50万单日无限额；<br/>
		      2、签约用户（动态密码版）:单笔支付限额20万元，每日支付限额20万元；</td>
		    <td>借记卡</td>
		    <td>95528</td>
		  </tr>
		  <tr>
		    <td>平安银行</td>
		    <td>手机动态密码:单笔支付限额5万元，每日支付限额5万元；</td>
		    <td>借记卡</td>
		    <td>95511—3</td>
		  </tr>
		  <tr>
		    <td>宁波银行</td>
		    <td>1、动态密码令牌/短信动态密码:单笔支付限额5万元，每日支付限额5万元；<br/>
		      2、USBKey移动证书:单笔支付50万，每日支付无限额；</td>
		    <td>借记卡</td>
		    <td>95574</td>
		  </tr>
		  <tr>
		    <td>东亚银行</td>
		    <td>1、手机动态密码:单笔支付限额5000元，每日支付限额2万元；<br/>
		      2、USB-KEY/USB-KEY+口令卡:单笔支付限额50万，每日支付限额100万;</td>
		    <td>借记卡</td>
		    <td>8008303811</td>
		  </tr>
		  <tr>
		    <td>中国邮储银行</td>
		    <td>1、个人网银短信客户限额单笔5万，单日无限额；<br/>
		       2、个人网银UK+短信一般客户单笔50万，单日无限额；<br/>
		       3、VIP客户单笔50万，单日和单月不限；</td>
		    <td>借记卡</td>
		    <td>95580</td>
		  </tr>
		  <tr>
		    <td>南京银行</td>
		    <td>1、普通版:单笔支付限额300元，每日支付限额300元；<br/>
		       2、手机版:单笔支付限额1万元，每日支付限额1万元；<br/>
		      3、专业版:单笔支付限额5万元，每日支付限额5万元；</td>
		    <td>借记卡</td>
		    <td>40088-96400(全国) 96400(江苏)</td>
		  </tr>
		  <tr>
		    <td>北京银行</td>
		    <td>1、普通版：单笔300元，日累计300元；<br/>
		        2、动态密码版：单笔1000元，日累计5000元；<br/>
		      3、证书版：单笔50万元，日累计100万元；</td>
		    <td>借记卡</td>
		    <td>95526</td>
		  </tr>
		  <tr>
		    <td>渤海银行</td>
		    <td>单笔支付限额2万元，每日支付限额10万元；</td>
		    <td>借记卡</td>
		    <td>400-888-8811</td>
		  </tr>
		  <tr>
		    <td>农业银行<br/>（理财商户不支持）</td>
		    <td>1、一代K宝：部分存量用户，默认限额单笔50万，日累计100万；<br/>
		      2、二代K宝：默认限额单笔50万，日累计500万；K宝额度用户可柜台申请提升；<br/>
		      3、K令：目前仅广东省、宁波少量省市在用，限额单笔10万，单日50万；<br/>
		    4、K码支付：单笔1000元，单日1000元(我司未开通K码支付）</td>
		    <td>借记卡</td>
		    <td>95599</td>
		  </tr>
		  <tr>
		    <td>民生银行</td>
		    <td>U宝/动态令牌（OTP）：单笔50万及每日限额100万元；<br/>
		    浏览器证书/短信动态验证码：单笔及每日限额5000元；</td>
		    <td>借记卡</td>
		    <td>95568</td>
		  </tr>
		  <tr>
		    <td>华夏银行<br/>（理财商户不支持）</td>
		    <td>U盾：单笔5000元，日累计2万元；</td>
		    <td>借记卡</td>
		    <td>95577</td>
		  </tr>
		  <tr>
		    <td>上海银行<br/>（理财商户不支持）</td>
		    <td>易签宝（USBKey证书）：单笔及每日限额5万元；<br/>
		    文件证书：单笔及每日限额5000元；</td>
		    <td>借记卡</td>
		    <td>95594</td>
		  </tr>
		  <tr>
		    <td>成都银行</td>
		    <td>单笔50元，日累计500元；</td>
		    <td>借记卡</td>
		    <td> 96511、<br>
		    4006896511</td>
		  </tr>
		  <tr>
		    <td colspan="4">如对各银行支付方式及开通方法有疑问，建议咨询各银行客服。</td>
		  </tr>
		  </tbody>
		</table>
	</div>
</div>

</div>
	
	
	
</div>


</body>
<jsp:include page="/footnew.do" />
<script type="text/javascript">
$(function() {
		var data = {
			"tojsp" : 1,
			"channelCode":"webNotice"
		};
		pager_container = "pageDiv";
		getPageFrom(data, "${path }/content/pageListsDevide.do",
				countRegularTRecordsEable, "countRegularTRecordsEable");

	});
	//拼成表格
	function countRegularTRecordsEable(data) {
		var htmlStr = '<tr style="height:66px;line-height:46px;cursor:pointer;"  align=\"left\">';
		htmlStr += "<td style='font-size:18px;' chid="+data.id+">"+ data.content_title+"</td>"
				+ "<td style='font-size:18px;'>"+ data.content_add_datetime + "</td>";
		htmlStr += "</tr>";
		return htmlStr;
	};
	//tab切换
	$('.user_choose').on('click','li',function(){
		$(this).addClass('active').siblings().removeClass('active').parents('.user_choose').siblings('.tabletabs').hide().eq($(this).index()).show();
	})
</script>
</html>