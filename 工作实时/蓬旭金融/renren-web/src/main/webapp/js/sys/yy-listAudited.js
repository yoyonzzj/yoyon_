$(function () {
    $("#jqGrid").jqGrid({
        url: '/zyuserverify/audited',
        postData:{'page':1, 'limit':10,'sidx':'','order':''},
        datatype: "json",
        colModel: [			
			{ label: '用户手机号码', name: 'phone', width:180}, 
			{ label: '用户真实姓名',name: 'userName', width:150}, 			
			{ label: '性别', name: 'usersex', width:64},
			{ label: '年龄', name: 'userage', width:64},
			{ label: '户籍地址', name: 'createTime', width:202},
			{ label: '申请时间', name: 'createTime', width:202},
			{ label: '授信额度', name: 'createTjime', width:80},
			{ label: '额度调整', name: 'personal', sortable:false,
				formatter: function(cellvalue, options, rowObject){
					if (rowObject.userStatus == 1) {
						var html = '<a href="javascript:void(0)" data-toggle="modal" data-target=".bs-example-modal-lg" style="color:#0000FF" onclick="justfy('+"'"+rowObject.userId+"'"+')">调额</a>'
					} else {
						var html = '<a href="javascript:void(0)" data-toggle="modal" data-target=".bs-example-modal-lg">---</a>'
					}
//					var html='<a href="javascript:void(0)" data-toggle="modal" data-target=".bs-example-modal-lg" onclick="person('+"'"+rowObject.userId+"'"+')"">查看个人信息</a>';
					return html;
				}, width:100
			},
			{ 
				label: '运营商认证',
				name: 'createDate2', sortable:false,
				formatter: function(cellvalue, options, rowObject){
					if (rowObject.userStatus == 1) {
						var html = '<div><div style="width:50%;height:100%;float:left;"><img src="../../imgs/yunyingshang.png" style="width:20px;height:20px"></div><div style="width:50%;height:100%;float:left;position:relative"><img src="../../imgs/pass.png" style="margin:0 auto;width:16px;height:16px;margin-top:3px;display:block"><img src="../../imgs/loading.png" style="margin:0 auto;width:16px;height:16px;margin-top:3px;display:none"><img src="../../imgs/unpass.png" style="margin:0 auto;width:16px;height:16px;margin-top:3px;display:none"></div></div>'
					} else {
						var html = '<a href="javascript:void(0)" data-toggle="modal" data-target=".bs-example-modal-lg">---</a>'
					}
					return html
				}, width:85
			},
			{ 
				label: '京东认证',
				name: 'createDate2', sortable:false,
				formatter: function(cellvalue, options, rowObject){
					if (rowObject.userStatus == 1) {
						var html = '<div><div style="width:50%;height:100%;float:left;"><img src="../../imgs/jingdong.png" style="width:20px;height:20px"></div><div style="width:50%;height:100%;float:left;position:relative"><img src="../../imgs/pass.png" style="margin:0 auto;width:16px;height:16px;margin-top:3px;display:none"><img src="../../imgs/loading.png" style="margin:0 auto;width:16px;height:16px;margin-top:3px;display:block"><img src="../../imgs/unpass.png" style="margin:0 auto;width:16px;height:16px;margin-top:3px;display:none"></div></div>'
					} else {
						var html = '<a href="javascript:void(0)" data-toggle="modal" data-target=".bs-example-modal-lg">---</a>'
					}
					return html
				}, width:85
			},
			{ 
				label: '淘宝认证',
				name: 'createDate2', sortable:false,
				formatter: function(cellvalue, options, rowObject){
					if (rowObject.userStatus == 1) {
						var html = '<div><div style="width:50%;height:100%;float:left;"><img src="../../imgs/taobao.png" style="width:20px;height:20px"></div><div style="width:50%;height:100%;float:left;position:relative"><img src="../../imgs/pass.png" style="margin:0 auto;width:16px;height:16px;margin-top:3px;display:none"><img src="../../imgs/loading.png" style="margin:0 auto;width:16px;height:16px;margin-top:3px;display:none"><img src="../../imgs/unpass.png" style="margin:0 auto;width:16px;height:16px;margin-top:3px;display:block"></div></div>'
					} else {
						var html = '<a href="javascript:void(0)" data-toggle="modal" data-target=".bs-example-modal-lg">---</a>'
					}
					return html
				}, width:85
			},
			{ label: '个人信息', name: 'personal', sortable:false,
				formatter: function(cellvalue, options, rowObject){
					if (rowObject.userStatus == 1) {
						var html = '<a href="javascript:void(0)" data-toggle="modal" data-target=".bs-example-modal-lg" style="color:#0000FF" onclick="person('+"'"+rowObject.userId+"'"+')">查看</a>'
					} else {
						var html = '<a href="javascript:void(0)" data-toggle="modal" data-target=".bs-example-modal-lg">---</a>'
					}
//					var html='<a href="javascript:void(0)" data-toggle="modal" data-target=".bs-example-modal-lg" onclick="person('+"'"+rowObject.userId+"'"+')"">查看个人信息</a>';
					return html;
				}, width:100
			},
			{ 
            	label: '审核结果',
            	name: 'verifyStatus', sortable:false,
        		formatter : function(cellvalue, options, rowObject){
            		if (rowObject.verifyStatus == 6){
            			var html='<a href="javascript:void(0)" style="color:#008000;font-weight:bold">通过</a>';
            		}else if (rowObject.verifyStatus == 5){
            			var html='<a href="javascript:void(0)" style="color:#FF0000;font-weight:bold">未通过</a>';
            		}
            		else{
            			var html='<a href="javascript:void(0)" style="color:red;font-weight:bold">错误</a>';
            		}
            		return html;
            	}, width:80
    		}, 		
			{ label: '审核人', name: 'verifyUser', width:80, sortable:false},
			{ label: '审核时间', name: 'verifyTime', width:170}
        ],
        viewrecords: true,
		shrinkToFit: false,
        height: 385,
        rowNum: 10,
		rowList : [10,30,50],
        rownumbers: true, 
        rownumWidth: 72, 
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
    $(".person-idpicture #rotatepic").on("click",function(e){  
        e.stopPropagation();  
    });
    var num = 0;
    $("#rotatepic").on("click",function(){
    	num ++;
    	$("#person-idpicture1").css("transform","rotate("+90*num+"deg)");
    })
}
//调整额度弹窗封装
function justfy(id){
	$(".aaaa").css("display","none");
	$(".check-form").css("display","block");
	$(".guanbi").css("display","none");
	$(".only-btn").css("display","block");
	$("#butongguo").css("display","none");
	$("#tongguo").css("display","none");
	$.post('/zyuserverify/userToExamine?verifyId='+id,function(data){
		//获得响应数据
		$("#check-phone").html("").append(function(){if(data.result.phone==undefined){return "---"}else{return data.result.phone}});
	  	$("#check-username").html("").append(function(){if(data.result.username==undefined){return "---"}else{return data.result.username}});
	  	$("#yincang").html("").append(data.result.id);
	},'json');
}
//额度调整确认
$("#tongguo").click(function(shenhemoney,shenheid){
	var shenhemoney=$("#optionFund").find("option:selected").text();
	var shenheid=$("#yincang").text();
	var userId=$("#yincang1").text();
	var phone=$("#check-phone").text();
	$.post('/zyuserverify/reviewExamine?verifyId='+shenheid+'&verifyStatus=6&money='+shenhemoney+'&userId='+userId+'&phone='+phone,function(data){
		location.reload();
	},'json');
});
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
	
	var verifyStatus=document.querySelector('#auditstatus').value;
	if(verifyStatus=="通过"){
		verifyStatus=6;
	}else if(verifyStatus=="未通过"){
		verifyStatus=5;
	}else{
		verifyStatus="";
	}
	
	var startTime=document.querySelector('#datetimeStart').value;
	var endTime=document.querySelector('#datetimeEnd').value;
	
    $('#jqGrid').jqGrid('setGridParam',{  
        datatype:'json',
        page:1,
        url: '/zyuserverify/auditedDemand',
        postData:{'page':1, 'limit':10,'userStatus':userStatus,
        	'verifyStatus':verifyStatus,'startTime':startTime,'endTime':endTime,'sidx':'','order':'','phone':phone}
      }).trigger("reloadGrid"); //重新载入*/
})
//清空按钮
$("#clear").click(function(){
	$('#userphone').val("");
	$('#datetimeStart').val("");
	$('#datetimeEnd').val("");
	$('#usersex').val("不限");
	$("input[name='authenticated']").removeAttr('checked');
})
//右侧设置按钮
function sidenav(){
	$("#sidebar").css("display","block");
	$("#sidebar").animate({"opacity":"1","right":"50px"},200);
}
$(".close_side").click(function(){$("#sidebar").animate({"opacity":"0","right":"-240px"},200);});
$("#sidebar").on("click",function(e){  
    e.stopPropagation();  
});
$("#serve_sub").click(function(){$("#sidebar").animate({"opacity":"0","right":"-240px"},500);location.reload();});
