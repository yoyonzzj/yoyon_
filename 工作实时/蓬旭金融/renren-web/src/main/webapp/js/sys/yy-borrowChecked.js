$(function () {
    $("#jqGrid").jqGrid({
        url: '/zyBorrowVerify/auditedListNoCondition',
        postData:{'page':1, 'limit':10,'sidx':'','order':'','phone':'','userStatus':'','startTime':'','endTime':''},
        datatype: "json",
        colModel: [			
			{ label: '用户手机号码', name: 'phone', width:110},
			{ label: '用户真实姓名', name: 'username', width:100}, 			
			{ 
            	label: '用户类型',
            	name: 'userStatus',
        		formatter : function(cellvalue, options, rowObject){
            		if (rowObject.userStatus == 1){
            			var html='上班族';
            		}else if(rowObject.userStatus == 2){
            			var html='学生族';
            		}else{
            			var html='';
            		}
            		return html;
            	}, width:72
    		}, 					
    		{ label: '借款金额', name: 'borrowLimit', width:120}, 			
			{ label: '借款期限', name: 'borrowPeriods', width:100}, 
			{ label: '借款时间', name: 'grantDate', width:170},
			{ label: '还款时间', name: 'refundDate', width:170},
			{ label: '申请时间', name: 'createDate', width:170},
			{ 
				label: '查看额度信息', name: 'freezeMoney', sortable:false,
				formatter: function(cellvalue, options, rowObject){
					if (rowObject.userStatus == 1) {
						var html = '<a href="javascript:void(0)" style="color:#0000FF" data-toggle="modal" data-target=".bs-example-modal-lg" onclick="limit('+"'"+rowObject.userId+"'"+')">查看额度信息</a>'
					} else {
						var html = '<a href="javascript:void(0)" style="color:#0000FF" data-toggle="modal" data-target=".bs-example-modal-lg">---</a>'
					}
//					var html='<a href="javascript:void(0)" style="color:#0000FF" data-toggle="modal" data-target=".bs-example-modal-lg" onclick="limit('+"'"+rowObject.userId+"'"+')"">查看额度信息</a>';
					return html;
				},width:100
			},
			{ label: '查看个人信息', name: 'personal', sortable:false, 
				formatter: function(cellvalue, options, rowObject){
					if (rowObject.userStatus == 1) {
						var html = '<a href="javascript:void(0)" data-toggle="modal" data-target=".bs-example-modal-lg" onclick="person('+"'"+rowObject.userId+"'"+')">查看个人信息</a>'
					} else {
						var html = '<a href="javascript:void(0)" data-toggle="modal" data-target=".bs-example-modal-lg">---</a>'
					}
//					var html='<a href="javascript:void(0)" data-toggle="modal" data-target=".bs-example-modal-lg" onclick="person('+"'"+rowObject.userId+"'"+')"">查看个人信息</a>';
					return html;
				}, width:103
			},
			{
				label : '查看详情',
				name : 'createDate2', sortable:false,
				formatter : function(cellvalue, options, rowObject){
					if (rowObject.userStatus == 1) {
						var html = '<a href="javascript:void(0)" data-toggle="modal" data-target=".bs-example-modal-lg" onclick="job('+"'"+rowObject.userId+"'"+')">查看工作信息</a>'
					} else {
						var html = '<a href="javascript:void(0)" data-toggle="modal" data-target=".bs-example-modal-lg" onclick="education('+"'"+rowObject.userId+"'"+')">查看学业信息</a>'
					}
					return html;
				}, width:103
			},
			{
				label : '查看联系人信息',
				name : 'createDate2', sortable:false,
				formatter : function(cellvalue, options, rowObject) {
					if (rowObject.userStatus == 1) {
						var html = '<a href="javascript:void(0)" data-toggle="modal" data-target=".bs-example-modal-lg" onclick="contacts('+"'"+rowObject.userId+"'"+')">查看联系人信息</a>'
					} else {
						var html = '<a href="javascript:void(0)" data-toggle="modal" data-target=".bs-example-modal-lg">---</a>'
					}
//					var html = '<a href="javascript:void(0)" data-toggle="modal" data-target=".bs-example-modal-lg" onclick="contacts('+"'"+rowObject.userId+"'"+')"">查看联系人信息</a>';
					return html
				}, width:115
			},
			{ 
				label: '查看认证信息',
				name: 'createDate2', sortable:false, 
				formatter: function(cellvalue, options, rowObject){
					if (rowObject.userStatus == 1) {
						var html = '<a href="javascript:void(0)" data-toggle="modal" data-target=".bs-example-modal-lg" onclick="identification('+"'"+rowObject.userId+"'"+')">查看认证信息</a>'
					} else {
						var html = '<a href="javascript:void(0)" data-toggle="modal" data-target=".bs-example-modal-lg">---</a>'
					}
//					var html='<a href="javascript:void(0)" data-toggle="modal" data-target=".bs-example-modal-lg" onclick="identification('+"'"+rowObject.userId+"'"+')"">查看认证信息</a>';
					return html
				}, width:103
			},
			{ 
            	label: '审核结果 ',
            	name: 'finalBorrowStatus', sortable:false,
        		formatter : function(cellvalue, options, rowObject){
        			if(rowObject.finalBorrowStatus == 1){
            			var html='<a href="javascript:void(0)" style="color:red;text-decoration:none;font-weight:bold">未通过</a>';
            		}else if(rowObject.finalBorrowStatus == 0){
            			var html='<a href="javascript:void(0)" style="color:#4F66FF;text-decoration:none;font-weight:bold">通过</a>';
            		}else{
            			var html='';
            		}
            		return html;
            	}, width:70
    		}, 		
			{ label: '审核人', name: 'verifyUser', width:72, sortable:false},
			{ label: '审核时间', name: 'verifyDate', width:170}
        ],
        viewrecords: true,
		shrinkToFit: false,
        height: 385,
        rowNum: 10,
		rowList : [10,30,50],
        rownumbers: true, 
        rownumWidth: 36, 
        autowidth:true,
        pager: "#jqGridPager",
        jsonReader : {
            root: "page.list",
            page: "page.currPage",
            total: "page.totalPage",
            records: "page.totalCount"
        },
        prmNames : {
            page:"page", 
            rows:"limit", 
            order: "order"
        },
        gridComplete:function(){
        	//隐藏grid底部滚动条
//        	$("#jqGrid").closest(".ui-jqgrid-bdiv").css({ "overflow-x" : "hidden" }); 
        }
    });
});

var vm = new Vue({
	el:'#rrapp',
	data:{
		q:{
			key: null
		},
	},
	methods: {
		query: function () {
			vm.reload();
		},
		reload: function (event) {
			var page = $("#jqGrid").jqGrid('getGridParam','page');
			$("#jqGrid").jqGrid('setGridParam',{ 
				postData:{'key': vm.q.key},
                page:page
            }).trigger("reloadGrid");
		}
	}
});

//额度信息弹窗封装
function limit(userId){
	$(".aaaa").css("display","none");
	$(".limit-form").css("display","block");
	$(".only-btn").css("display","none");
	$.post('/zyBorrowVerify/getUserLimit?userId='+userId,function(data){
		//获得响应数据
		var floatUserAltogetherLimit=parseFloat(data.result.userAltogetherLimit).toFixed(2);
		var floatUserUsedLimit=parseFloat(data.result.userUsedLimit).toFixed(2);
		var floatUserLastLimit=parseFloat(data.result.userLastLimit).toFixed(2);
		$("#limit-userAltogetherLimit").html("").append(function(){if(data.result.userAltogetherLimit==undefined){return "---"}else{return floatUserAltogetherLimit}});
		$("#limit-userUsedLimit").html("").append(function(){if(data.result.userUsedLimit==undefined){return "---"}else{return floatUserUsedLimit}});
		$("#limit-userLastLimit").html("").append(function(){if(data.result.userLastLimit==undefined){return "---"}else{return floatUserLastLimit}});
	},'json');
}
//个人信息弹窗封装
function person(userId){
	$(".aaaa").css("display","none");
	$(".person-form").css("display","block");
	$(".only-btn").css("display","none");
	$.post('/zyuserverify/userSummary?userId='+userId,function(data){
		//获得响应数据
		$("#person-phone").html("").append(function(){if(data.result.phone==undefined){return "---"}else{return data.result.phone}});
		$("#person-userName").html("").append(function(){if(data.result.userName==undefined){return "---"}else{return data.result.userName}});
		$("#person-bankName").html("").append(function(){if(data.result.bankName==undefined){return "---"}else if(data.result.bankName==""){return "---"}else{return data.result.bankName}});
	  	$("#person-idcardZ").html("").append('<a href="javascript:void(0)" onclick="idpicturesZ('+"'"+data.result.idcardZ+"'"+')">正面</a>');
	  	$("#person-idcardHand").html("").append('<a href="javascript:void(0)" onclick="idpicturesH('+"'"+data.result.idcardHand+"'"+')">手持</a>');
	  	$("#person-bankPhone").html("").append(function(){if(data.result.bankPhone==undefined){return "---"}else{return data.result.bankPhone}});
	  	$("#person-hujiAdr").html("").append(function(){if(data.result.hujiAdr==undefined){return "---"}else{return data.result.hujiAdr}});
	  	$("#person-liveAdr").html("").append(function(){if(data.result.liveAdr==undefined){return "---"}else{return data.result.liveAdr}});
	  	$("#person-userStatus").html("").append(function(){if(data.result.userStatus==undefined){return "---"}else if(data.result.userStatus==1){return "上班族"}else if(data.result.userStatus==2){return "学生族"}else{return "错误"}});
	  	$("#person-idcard").html("").append(function(){if(data.result.idcard==undefined){return "---"}else{return data.result.idcard}});
	  	$("#person-bankUsername").html("").append(function(){if(data.result.bankUsername==undefined){return "---"}else{return data.result.bankUsername}});
	  	$("#person-idcardF").html("").append('<a href="javascript:void(0)" onclick="idpicturesF('+"'"+data.result.idcardF+"'"+')">反面</a>');
	  	$("#person-marriage").html("").append(function(){if(data.result.marriage==undefined){return "---"}else{return data.result.marriage}});
	  	$("#person-hujiAdrDetail").html("").append(function(){if(data.result.hujiAdrDetail==undefined){return "---"}else{return data.result.hujiAdrDetail}});
	  	$("#person-liveAdrDetail").html("").append(function(){if(data.result.liveAdrDetail==undefined){return "---"}else{return data.result.liveAdrDetail}});
	},'json');
}
function idpicturesZ(jqdata){
	$(".person-idpicture").css("display","block")
	$("#person-idpicture1").attr("src","/db/mongod/picture/"+jqdata);
	$(".person-idpicture").on("click",function(){  
        $(this).hide(100);  
    });  
    $(".person-idpicture #person-idpicture1").on("click",function(e){  
        e.stopPropagation();  
    });
    $(".person-idpicture #rotatepic").on("click",function(e){  
        e.stopPropagation();  
    });
    var num = 0;
    $("#rotatepic").on("click",function(){
    	num ++;
    	$("#person-idpicture1").css("transform","rotate("+90*num+"deg)");
    })
}
function idpicturesH(jqdata){
	$(".person-idpicture").css("display","block");
	$("#person-idpicture1").attr("src","/db/mongod/picture/"+jqdata);
	$(".person-idpicture").on("click",function(){  
        $(this).hide(100);  
    });  
    $(".person-idpicture #person-idpicture1").on("click",function(e){  
        e.stopPropagation();  
    });
    $(".person-idpicture #rotatepic").on("click",function(e){  
        e.stopPropagation();  
    });
    var num = 0;
    $("#rotatepic").on("click",function(){
    	num ++;
    	$("#person-idpicture1").css("transform","rotate("+90*num+"deg)");
    })
}
function idpicturesF(jqdata){
	$(".person-idpicture").css("display","block");
	$("#person-idpicture1").attr("src","/db/mongod/picture/"+jqdata);
	$(".person-idpicture").on("click",function(){  
        $(this).hide(100);  
    });  
    $(".person-idpicture #person-idpicture1").on("click",function(e){  
        e.stopPropagation();  
    });
    $(".person-idpicture #rotatepic").on("click",function(e){  
        e.stopPropagation();  
    });
    var num = 0;
    $("#rotatepic").on("click",function(){
    	num ++;
    	$("#person-idpicture1").css("transform","rotate("+90*num+"deg)");
    })
}
//学业信息弹窗封装
function education(userId){
	$(".aaaa").css("display","none");
	$(".education-form").css("display","block");
	$(".only-btn").css("display","none");
	$.post('/zyuserverify/userSchool?userId='+userId,function(data){
		//获得响应数据
		$("#education-schoolName").html("").append(function(){if(data.result.schoolName==undefined){return "---"}else{return data.result.schoolName}});
		$("#education-schoolAdr").html("").append(function(){if(data.result.schoolAdr==undefined){return "---"}else{return data.result.schoolAdr}});
		$("#education-entranceYear").html("").append(function(){if(data.result.entranceYear==undefined){return "---"}else{return data.result.entranceYear}});
		$("#education-presentEducation").html("").append(function(){if(data.result.presentEducation==undefined){return "---"}else{return data.result.presentEducation}});
		$("#education-graduationYear").html("").append(function(){if(data.result.graduationYear==undefined){return "---"}else{return data.result.graduationYear}});
		$("#education-majorName").html("").append(function(){if(data.result.majorName==undefined){return "---"}else{return data.result.majorName}});
		$("#education-instructorPhone").html("").append(function(){if(data.result.instructorPhone==undefined){return "---"}else{return data.result.instructorPhone}});
	  	$("#education-schoolmatePhone").html("").append(function(){if(data.result.schoolmatePhone==undefined){return "---"}else{return data.result.schoolmatePhone}});
	  	$("#education-instructorName").html("").append(function(){if(data.result.instructorName==undefined){return "---"}else{return data.result.instructorName}});
	  	$("#education-schoolmateName").html("").append(function(){if(data.result.schoolmateName==undefined){return "---"}else{return data.result.schoolmateName}});
	},'json');
}
//工作信息弹窗封装
function job(userId){
	$(".aaaa").css("display","none");
	$(".job-form").css("display","block");
	$(".only-btn").css("display","none");
	$.post('/zyuserverify/userUnit?userId='+userId,function(data){
		//获得响应数据
		$("#job-phone").html("").append(function(){if(data.result.phone==undefined){return "---"}else{return data.result.phone}});
	  	$("#job-userName").html("").append(function(){if(data.result.userName==undefined){return "---"}else{return data.result.userName}});
	  	$("#job-professional").html("").append(function(){if(data.result.professional==undefined){return "---"}else{return data.result.professional}});
	  	$("#job-monthPay").html("").append(function(){if(data.result.monthPay==undefined){return "---"}else{return data.result.monthPay}});
	  	$("#job-payChannel").html("").append(function(){if(data.result.payChannel==undefined){return "---"}else{return data.result.payChannel}});
	  	$("#job-unitPhone").html("").append(function(){if(data.result.unitPhone==undefined){return "---"}else{return data.result.unitPhone}});
	  	$("#job-userStatus").html("").append(function(){if(data.result.userStatus==undefined){return "---"}else if(data.result.userStatus==1){return "上班族"}else if(data.result.userStatus==2){return "学生族"}else{return "错误"}});
	  	$("#job-idcard").html("").append(function(){if(data.result.idcard==undefined){return "---"}else{return data.result.idcard}});
	  	$("#job-education").html("").append(function(){if(data.result.education==undefined){return "---"}else{return data.result.education}});
	  	$("#job-monthPayday").html("").append(function(){if(data.result.monthPayday==undefined){return "---"}else{return data.result.monthPayday}});
	  	$("#job-unitName").html("").append(function(){if(data.result.unitName==undefined){return "---"}else{return data.result.unitName}});
	  	$("#job-unitAdrDetail").html("").append(function(){if(data.result.unitAdrDetail==undefined){return "---"}else{return data.result.unitAdrDetail}});
	  	$("#job-unitNature").html("").append(function(){if(data.result.unitNature==undefined){return "---"}else{return data.result.unitNature}});
	  	$("#job-title").html("").append(function(){if(data.result.title==undefined){return "---"}else{return data.result.title}});
	  	$("#job-certificationPersonPhone").html("").append(function(){if(data.result.certificationPersonPhone==undefined){return "---"}else{return data.result.certificationPersonPhone}});
	  	$("#job-unitIndustry").html("").append(function(){if(data.result.unitIndustry==undefined){return "---"}else{return data.result.unitIndustry}});
	  	$("#job-certificationPerson").html("").append(function(){if(data.result.certificationPerson==undefined){return "---"}else{return data.result.certificationPerson}});
	  	$("#job-otherIncome").html("").append(function(){if(data.result.otherIncome==undefined){return "---"}else{return data.result.otherIncome}});
	},'json');
}
//联系人信息弹窗封装
function contacts(userId){
	$(".aaaa").css("display","none");
	$(".contacts-form").css("display","block");
	$(".only-btn").css("display","none");
	$.post('/zyuserverify/userContact?userId='+userId,function(data){
		//获得响应数据
		$("#contacts-userName").html("").append(function(){if(data.result.userName==undefined){return "---"}else{return data.result.userName}});
		$("#contacts-contactName").html("").append(function(){if(data.result.contactName==undefined){return "---"}else{return data.result.contactName}});
		$("#contacts-relation").html("").append(function(){if(data.result.relation==undefined){return "---"}else{return data.result.relation}});
		$("#contacts-importantContactname").html("").append(function(){if(data.result.importantContactname==undefined){return "---"}else{return data.result.importantContactname}});
		$("#contacts-idcard").html("").append(function(){if(data.result.idcard==undefined){return "---"}else{return data.result.idcard}});
		$("#contacts-contactPhone").html("").append(function(){if(data.result.contactPhone==undefined){return "---"}else{return data.result.contactPhone}});
		$("#contacts-importantContactPhone").html("").append(function(){if(data.result.importantContactPhone==undefined){return "---"}else{return data.result.importantContactPhone}});
		$("#contacts-contactAdr").html("").append(function(){if(data.result.contactAdr==undefined){return "---"}else{return data.result.contactAdr}});
		$("#contacts-unitName").html("").append(function(){if(data.result.unitName==undefined){return "---"}else{return data.result.unitName}});
		$("#contacts-unitPhone").html("").append(function(){if(data.result.unitPhone==undefined){return "---"}else{return data.result.unitPhone}});
		$("#contacts-contactTel").html("").append(function(){if(data.result.contactTel==undefined){return "---"}else{return data.result.contactTel}});
		$("#contacts-unitAdrDetail").html("").append(function(){if(data.result.unitAdrDetail==undefined){return "---"}else{return data.result.unitAdrDetail}});
	},'json');
}
//认证信息弹窗封装
function identification(userId){
	$(".aaaa").css("display","none");
	$(".identification-form").css("display","block");
	$(".only-btn").css("display","none");
	$.post('/zyuserverify/userAuth?userId='+userId,function(data){
		//获得响应数据
		$("#identification-userName").html("").append(function(){if(data.result.userName==undefined){return "---"}else{return data.result.userName}});
		$("#identification-operator").html("").append(function(){if(data.result.operator==undefined){return "---"}else if(data.result.operator==0){return "<a href='javascript:void(0)' style='color:red'>未认证</a>"}else if(data.result.operator==1){return "<a href='javascript:void(0)' style='color:#0066CC'>已认证</a>"}else{return "<a href='javascript:void(0)' style='color:red'>错误</a>"}});
	  	$("#identification-jd").html("").append(function(){if(data.result.jd==undefined){return "---"}else if(data.result.jd==0){return "<a href='javascript:void(0)' style='color:red'>未认证</a>"}else if(data.result.jd==1){return "<a href='javascript:void(0)' style='color:#0066CC'>已认证</a>"}else{return "<a href='javascript:void(0)' style='color:red'>错误</a>"}});
	  	$("#identification-idcard").html("").append(function(){if(data.result.idcard==undefined){return "---"}else{return data.result.idcard}});
	  	$("#identification-tb").html("").append(function(){if(data.result.tb==undefined){return "---"}else if(data.result.tb==0){return "<a href='javascript:void(0)' style='color:red'>未认证</a>"}else if(data.result.tb==1){return "<a href='javascript:void(0)' style='color:#0066CC'>已认证</a>"}else{return "<a href='javascript:void(0)' style='color:red'>错误</a>"}});
	},'json');
}
//查询按钮
$("#chaxun").click(function(){
	var phone=document.querySelector('#userphone').value;

	var userStatus=document.querySelector('#userstatus').value;
	if(userStatus=="上班族"){
		userStatus=1;
	}else if(userStatus=="学生族"){
		userStatus=2;
	}else{
		userStatus="";
	}
	
	var borrowStatus=document.querySelector('#auditstatus').value;
	if(borrowStatus=="通过"){
		borrowStatus=6;
	}else if(borrowStatus=="未通过"){
		borrowStatus=5;
	}else{
		borrowStatus="";
	}
	
	var startTime=document.querySelector('#datetimeStart').value;
	var endTime=document.querySelector('#datetimeEnd').value;
	
	
    $('#jqGrid').jqGrid('setGridParam',{  
        datatype:'json',
        page:1,
        url: '/zyBorrowVerify/auditedList',
        postData:{'page':1, 'limit':10,'userStatus':userStatus,
        	'borrowStatus':borrowStatus,'startTime':startTime,'endTime':endTime,'sidx':'','order':'','phone':phone}
      }).trigger("reloadGrid"); //重新载入*/
	
	
})
