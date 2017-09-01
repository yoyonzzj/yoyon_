$(function () {
    $("#jqGrid").jqGrid({
        url: '/zyUser/AfterLoan',
        postData:{'page':1, 'limit':10,'sidx':'','order':'','phone':'','userStatus':'','startTime':'','endTime':'','verifyUser':''},
        datatype: "json",
        colModel: [		
            { label: '用户手机号码', name: 'phone', width:180}, 
			{ label: '用户真实姓名',name: 'username', width:150}, 			
			{ label: '性别', name: 'gender', width:64},
			{ label: 'userId', name: 'userId', classes: 'idaa', hidden:true, width:233 },
			{ label: '年龄', name: 'age', width:64},
			{ label: '户籍地址', name: 'hujiAdr', width:100},
			{ label: '借款金额', name: 'borrowLimit', width:80},
			{ label: '借款时间', name: 'createDate', width:80},
			{ label: '借款期限', name: 'borrowPeriods', width:80},
			{ label: '还款最后期限', name: 'refundTime', width:80},
			{ label: '还款本金', name: 'refundPrinciple', width:80},
			{ label: '借款手续费', name: 'operator', width:80},
			{ label: '是否逾期', name: 'overdue', width:80},
			{ label: '逾期天数', name: 'overdueDay', width:80},
			{ label: '逾期费用', name: 'overdueLimit', width:80},
			{ label: '待还总额', name: 'waitRefundWay', width:80},
			{ label: '个人信息', name: 'personal', sortable:false,
				formatter: function(cellvalue, options, rowObject){
					var html = '<a href="javascript:void(0)" data-toggle="modal" data-target=".bs-example-modal-lg" style="color:#0000FF" onclick="person('+"'"+rowObject.userId+"'"+')">查看</a>'
					return html;
				}, width:100
			},
			{ label: '审核通过时间', name: 'verifyTime', width:202}, 
			{ label: '审核人', name: 'verifyUser', width:80},
			{ label: '运营商报告', name: 'personal', sortable:false,
				formatter: function(cellvalue, options, rowObject){
					var html = '<a href="javascript:void(0)" style="color:#0000FF" onclick="yysLookfor('+"'"+rowObject.userId+"'"+')">查看</a>'
					return html;
				}, width:100
			},
			{ label: '运营商资信报告', name: 'personal', sortable:false,
				formatter: function(cellvalue, options, rowObject){
					var html = '<a href="javascript:void(0)" style="color:#0000FF" onclick="yyszxLookfor('+"'"+rowObject.userId+"'"+')">查看</a>'
					return html;
				}, width:100
			},
			{ label: '淘宝报告', name: 'personal', sortable:false,
				formatter: function(cellvalue, options, rowObject){
					var html = '<a href="javascript:void(0)" style="color:#0000FF" onclick="tbLookfor('+"'"+rowObject.userId+"'"+')">查看</a>'
					return html;
				}, width:100
			},
			{ label: '京东报告', name: 'personal', sortable:false,
				formatter: function(cellvalue, options, rowObject){
					var html = '<a href="javascript:void(0)" style="color:#0000FF" onclick="jdLookfor('+"'"+rowObject.userId+"'"+')">查看</a>'
					return html;
				}, width:100
			},
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
        }
    });    
});

var setting = {
		data: {
			simpleData: {
				enable: true,
				idKey: "menuId",
				pIdKey: "parentId",
				rootPId: -1
			},
			key: {
				url:"nourl"
			}
		},
		check:{
			enable:true,
			nocheckInherit:true
		}
	};

var ztree;
var vm = new Vue({
	el:'#rrapp',
	data:{
		q:{
			author: null
		},
		showList: true,
		title:null,
		banner:{}
	},
	methods: {
		query: function () {
			vm.reload();
		},
		add: function(){
			vm.showList = false;
			vm.title = "新增";
			vm.banner = {};
			vm.getMenuTree(null);
		},
		update: function () {
			$("#move_list").removeAttr("data-toggle");
			$("#move_list").removeAttr("data-target");
			var selectedId = getSelectedRow();
			var rowData = $("#jqGrid").jqGrid("getRowData", selectedId);
		    var bannerId=selectedId;
			if(selectedId){
				confirm('请确认是否移入黑名单？', function(){
					$.ajax({
					    url: "/zyuserverify/deleteBanner?bannerId="+bannerId,
					    success: function(r){
							if(r.code == 0){
								alert('操作成功', function(index){
									vm.reload();
								});
							}else{
								alert(r.msg);
							}
						}
					});
				});
			}
		},
		del: function (event) {
			var selectedId = getSelectedRows();
			var bannerIds=new Array();
			for(var i=0;i<selectedId.length;i++){
				var rowData = $("#jqGrid").jqGrid("getRowData", selectedId[i]);
			    var bannerId=rowData.id;
			    bannerIds.push(bannerId);
			}
			if(bannerIds == null){
				return ;
			}
			confirm('确定要删除选中的记录？', function(){
				$.ajax({
				    url: "/zyuserverify/deleteBanner?bannerId="+bannerIds,
				    success: function(r){
						if(r.code == 0){
							alert('操作成功', function(index){
								vm.reload();
							});
						}else{
							alert(r.msg);
						}
					}
				});
			});
		},
		getRole: function(){
			$("#move_list").removeAttr("data-toggle");
			$("#move_list").removeAttr("data-target");
		},
		saveOrUpdate: function (event) {
			//获取选择的菜单
			var nodes = ztree.getCheckedNodes(true);
			var menuIdList = new Array();
			for(var i=0; i<nodes.length; i++) {
				menuIdList.push(nodes[i].menuId);
			}
			vm.role.menuIdList = menuIdList;
		},
		getMenuTree: function(roleId) {
			//加载菜单树
			$.get("../sys/menu/perms", function(r){
				ztree = $.fn.zTree.init($("#menuTree"), setting, r.menuList);
				//展开所有节点
				ztree.expandAll(true);
				
				if(roleId != null){
					vm.getRole(roleId);
				}
			});
	    },
	    reload: function (event) {
	    	vm.showList = true;
			var page = $("#jqGrid").jqGrid('getGridParam','page');
			$("#jqGrid").jqGrid('setGridParam',{ 
                postData:{'author': vm.q.author},
                page:page
            }).trigger("reloadGrid");
		}
	}
});


$('.date').datetimepicker({
	  language: 'zh-CN',//显示中文
	  format: 'yyyy-mm-dd',//显示格式
	  minView: "month",//设置只显示到月份
	  initialDate: new Date(),//初始化当前日期
	  autoclose: true,//选中自动关闭
	  todayBtn: true//显示今日按钮
})
$("#refundDateStart").datetimepicker({
  format: 'yyyy-mm-dd',
  minView:'month',
  language: 'zh-CN',
  autoclose:true,
  startDate:new Date()
}).on("click",function(){
  $("#refundDateStart").datetimepicker("setEndDate",$("#refundDateEnd").val())
});
$("#refundDateEnd").datetimepicker({
  format: 'yyyy-mm-dd',
  minView:'month',
  language: 'zh-CN',
  autoclose:true,
  startDate:new Date()
}).on("click",function(){
  $("#refundDateEnd").datetimepicker("setStartDate",$("#refundDateStart").val())
});

$("#verifyDateStart").datetimepicker({
  format: 'yyyy-mm-dd',
  minView:'month',
  language: 'zh-CN',
  autoclose:true,
  startDate:new Date()
}).on("click",function(){
  $("#verifyDateStart").datetimepicker("setEndDate",$("#verifyDateEnd").val())
});
$("#verifyDateEnd").datetimepicker({
  format: 'yyyy-mm-dd',
  minView:'month',
  language: 'zh-CN',
  autoclose:true,
  startDate:new Date()
}).on("click",function(){
  $("#verifyDateEnd").datetimepicker("setStartDate",$("#verifyDateStart").val())
});

$("#borrowTimeStart").datetimepicker({
	  format: 'yyyy-mm-dd',
	  minView:'month',
	  language: 'zh-CN',
	  autoclose:true,
	  startDate:new Date()
	}).on("click",function(){
	  $("#borrowTimeStart").datetimepicker("setEndDate",$("#borrowTimeEnd").val())
	});
	$("#borrowTimeEnd").datetimepicker({
	  format: 'yyyy-mm-dd',
	  minView:'month',
	  language: 'zh-CN',
	  autoclose:true,
	  startDate:new Date()
	}).on("click",function(){
	  $("#borrowTimeEnd").datetimepicker("setStartDate",$("#borrowTimeStart").val())
	});
//个人信息弹窗封装
function person(userId){
	$(".aaaa").css("display","none");
	$(".person-form").css("display","block");
	$(".only-btn").css("display","none");
	$(".guanbi").css("display","block");
	$.post('/zyUser/userInfo?userId='+userId,function(data){
		//获得响应数据
	  	$("#person-idcardZ").html("").append('<a href="javascript:void(0)" onclick="idpicturesZ('+"'"+data.result.idcardHand+"'"+','+"'"+data.result.idcardZ+"'"+','+"'"+data.result.idcardF+"'"+')">正面</a>');
	  	$("#person-idcardHand").html("").append('<a href="javascript:void(0)" onclick="idpicturesH('+"'"+data.result.idcardHand+"'"+','+"'"+data.result.idcardZ+"'"+','+"'"+data.result.idcardF+"'"+')">手持</a>');
	  	$("#person-idcardF").html("").append('<a href="javascript:void(0)" onclick="idpicturesF('+"'"+data.result.idcardHand+"'"+','+"'"+data.result.idcardZ+"'"+','+"'"+data.result.idcardF+"'"+')">反面</a>');
	  	$("#identity-userName").html("").append(function(){if(data.result.userName==undefined){return "---"}else{return data.result.userName}});
	  	$("#identity-nation").html("").append(function(){if(data.result.nation==undefined){return "---"}else{return data.result.nation}});
	  	$("#identity-hujiAdrDetail").html("").append(function(){if(data.result.hujiAdrDetail==undefined){return "---"}else{return data.result.hujiAdrDetail}});
	  	$("#identity-idCard").html("").append(function(){if(data.result.idCard==undefined){return "---"}else{return data.result.idCard}});
	  	$("#identity-pastdue").html("").append(function(){if(data.result.pastdue==undefined){return "---"}else{return data.result.pastdue}});
	  	$("#person-professional").html("").append(function(){if(data.result.professional==undefined){return "---"}else{return data.result.professional}});
	  	$("#person-marriage").html("").append(function(){if(data.result.marriage==undefined){return "---"}else{return data.result.marriage}});
	  	$("#person-education").html("").append(function(){if(data.result.education==undefined){return "---"}else{return data.result.education}});
	  	$("#person-liveAdrDetail").html("").append(function(){if(data.result.liveAdrDetail==undefined){return "---"}else{return data.result.liveAdrDetail}});
	  	$("#job-monthPay").html("").append(function(){if(data.result.monthPay==undefined){return "---"}else{return data.result.monthPay}});
	  	$("#job-otherIncome").html("").append(function(){if(data.result.otherIncome==undefined){return "---"}else{return data.result.otherIncome}});
	  	$("#job-title").html("").append(function(){if(data.result.title==undefined){return "---"}else{return data.result.title}});
	  	$("#job-unitAdr").html("").append(function(){if(data.result.unitAdr==undefined){return "---"}else{return data.result.unitAdr}});
	  	$("#job-certificationPhone").html("").append(function(){if(data.result.certificationPhone==undefined){return "---"}else{return data.result.certificationPhone}});
	  	$("#job-monthPayday").html("").append(function(){if(data.result.monthPayday==undefined){return "---"}else{return data.result.monthPayday}});
	  	$("#job-unitName").html("").append(function(){if(data.result.unitName==undefined){return "---"}else{return data.result.unitName}});
	  	$("#job-unitPhone").html("").append(function(){if(data.result.unitPhone==undefined){return "---"}else{return data.result.unitPhone}});
	  	$("#job-certificationPerson").html("").append(function(){if(data.result.certificationPerson==undefined){return "---"}else{return data.result.certificationPerson}});
	  	$("#connection-contactName").html("").append(function(){if(data.result.contactName==undefined){return "---"}else{return data.result.contactName}});
	  	$("#connection-contactPhone").html("").append(function(){if(data.result.contactPhone==undefined){return "---"}else{return data.result.contactPhone}});
	  	$("#connection-jinContactPhone").html("").append(function(){if(data.result.jinContactPhone==undefined){return "---"}else{return data.result.jinContactPhone}});
	  	$("#connection-relation").html("").append(function(){if(data.result.relation==undefined){return "---"}else{return data.result.relation}});
	  	$("#connection-jinContactName").html("").append(function(){if(data.result.jinContactName==undefined){return "---"}else{return data.result.jinContactName}});
	},'json');
}
function idpicturesZ(idcardHand,idcardZ,idcardF){
	$(".person-idpicture").css("display","block")
	$("#person-idpicture1").attr("src","/db/mongod/picture/"+idcardZ);
	$(".person-idpicture").on("click",function(){  
        $(this).hide(100);  
    });  
    $(".person-idpicture #person-idpicture1").on("click",function(e){  
        e.stopPropagation();  
    });
    $(".person-idpicture #rotatepic").on("click",function(e){  
        e.stopPropagation();  
    });
    $(".person-idpicture #leftpic").on("click",function(e){  
        e.stopPropagation();  
    });$(".person-idpicture #rightpic").on("click",function(e){  
        e.stopPropagation();  
    });
    var num = 0;
    $("#rotatepic").on("click",function(){
    	num ++;
    	$("#person-idpicture1").css("transform","rotate("+90*num+"deg)");
    });
	var i=1;
	$("#leftpic").on("click",function(){ 
		i--;
		if(i==-1){
			i=2;
		}
		if(i==0){
			$("#person-idpicture1").attr("src","/db/mongod/picture/"+idcardHand);
		}else if(i==1){
			$("#person-idpicture1").attr("src","/db/mongod/picture/"+idcardZ);
		}else if(i==2){
			$("#person-idpicture1").attr("src","/db/mongod/picture/"+idcardF);
		}
	})
	$("#rightpic").on("click",function(){ 
		i++;
		if(i==3){
			i=0;
		}
		if(i==0){
			$("#person-idpicture1").attr("src","/db/mongod/picture/"+idcardHand);
		}else if(i==1){
			$("#person-idpicture1").attr("src","/db/mongod/picture/"+idcardZ);
		}else if(i==2){
			$("#person-idpicture1").attr("src","/db/mongod/picture/"+idcardF);
		}
	})
}
function idpicturesH(idcardHand,idcardZ,idcardF){
	$(".person-idpicture").css("display","block");
	$("#person-idpicture1").attr("src","/db/mongod/picture/"+idcardHand);
	$(".person-idpicture").on("click",function(){  
        $(this).hide(100);  
    });  
    $(".person-idpicture #person-idpicture1").on("click",function(e){  
        e.stopPropagation();  
    });
    $(".person-idpicture #rotatepic").on("click",function(e){  
        e.stopPropagation();  
    });
    $(".person-idpicture #leftpic").on("click",function(e){  
        e.stopPropagation();  
    });$(".person-idpicture #rightpic").on("click",function(e){  
        e.stopPropagation();  
    });
    var num = 0;
    $("#rotatepic").on("click",function(){
    	num ++;
    	$("#person-idpicture1").css("transform","rotate("+90*num+"deg)");
    });
    var i=0;
	$("#leftpic").on("click",function(){ 
		i--;
		if(i==-1){
			i=2;
		}
		if(i==0){
			$("#person-idpicture1").attr("src","/db/mongod/picture/"+idcardHand);
		}else if(i==1){
			$("#person-idpicture1").attr("src","/db/mongod/picture/"+idcardZ);
		}else if(i==2){
			$("#person-idpicture1").attr("src","/db/mongod/picture/"+idcardF);
		}
	})
	$("#rightpic").on("click",function(){ 
		i++;
		if(i==3){
			i=0;
		}
		if(i==0){
			$("#person-idpicture1").attr("src","/db/mongod/picture/"+idcardHand);
		}else if(i==1){
			$("#person-idpicture1").attr("src","/db/mongod/picture/"+idcardZ);
		}else if(i==2){
			$("#person-idpicture1").attr("src","/db/mongod/picture/"+idcardF);
		}
	})
}
function idpicturesF(idcardHand,idcardZ,idcardF){
	$(".person-idpicture").css("display","block");
	$("#person-idpicture1").attr("src","/db/mongod/picture/"+idcardF);
	$(".person-idpicture").on("click",function(){  
        $(this).hide(100);  
    });  
    $(".person-idpicture #person-idpicture1").on("click",function(e){  
        e.stopPropagation();  
    });
    $(".person-idpicture #rotatepic").on("click",function(e){  
        e.stopPropagation();  
    });
    $(".person-idpicture #leftpic").on("click",function(e){  
        e.stopPropagation();  
    });$(".person-idpicture #rightpic").on("click",function(e){  
        e.stopPropagation();  
    });
    var num = 0;
    $("#rotatepic").on("click",function(){
    	num ++;
    	$("#person-idpicture1").css("transform","rotate("+90*num+"deg)");
    });
    var i=2;
	$("#leftpic").on("click",function(){ 
		i--;
		if(i==-1){
			i=2;
		}
		if(i==0){
			$("#person-idpicture1").attr("src","/db/mongod/picture/"+idcardHand);
		}else if(i==1){
			$("#person-idpicture1").attr("src","/db/mongod/picture/"+idcardZ);
		}else if(i==2){
			$("#person-idpicture1").attr("src","/db/mongod/picture/"+idcardF);
		}
	})
	$("#rightpic").on("click",function(){ 
		i++;
		if(i==3){
			i=0;
		}
		if(i==0){
			$("#person-idpicture1").attr("src","/db/mongod/picture/"+idcardHand);
		}else if(i==1){
			$("#person-idpicture1").attr("src","/db/mongod/picture/"+idcardZ);
		}else if(i==2){
			$("#person-idpicture1").attr("src","/db/mongod/picture/"+idcardF);
		}
	})
}
//查询按钮
$("#chaxun").click(function(){
	var phone=document.querySelector('#phone').value;
	var username=document.querySelector('#username').value;
	var gender=document.querySelector('#gender').value;
	if(gender=="男"){
		gender=1;
	}else if(gender=="女"){
		gender=2;
	}else{
		gender="";
	}
	var hujiAdr=document.querySelector('#hujiAdr').value;
	if(hujiAdr=="不限"){
		hujiAdr="";
	}
	var ageStart=document.querySelector('#ageStart').value;
	var ageEnd=document.querySelector('#ageEnd').value;
	var overdueDayStart=document.querySelector('#overdueDayStart').value;
	var overdueDayEnd=document.querySelector('#overdueDayEnd').value;
	var verifyUser=document.querySelector('#verifyUser').value;
	var refundDateStart=document.querySelector('#refundDateStart').value;
	var refundDateEnd=document.querySelector('#refundDateEnd').value;
	var verifyDateStart=document.querySelector('#verifyDateStart').value;
	var verifyDateEnd=document.querySelector('#verifyDateEnd').value;
	var borrowTimeStart=document.querySelector('#borrowTimeStart').value;
	var borrowTimeEnd=document.querySelector('#borrowTimeEnd').value;
	 $('#jqGrid').jqGrid('setGridParam',{  
	        datatype:'json',
	        page:1,
	        url: '/zyUser/AfterLoan',
	        postData:{'page':1, 'limit':10,'sidx':'','order':'','gender':gender,'hujiAdr':hujiAdr,'phone':phone,
	        		  'username':username,'ageStart':ageStart,'ageEnd':ageEnd,'overdueDayStart':overdueDayStart,
	        		  'overdueDayEnd':overdueDayEnd,'verifyUser':verifyUser,'refundDateStart':refundDateStart,
	        		  'refundDateEnd':refundDateEnd,'verifyDateStart':verifyDateStart,'verifyDateEnd':verifyDateEnd,
	        		  'borrowTimeStart':borrowTimeStart,'borrowTimeEnd':borrowTimeEnd}
	      }).trigger("reloadGrid"); //重新载入*/
})
//清空按钮
$("#clear").click(function(){
	$('#phone').val("");
	$('#username').val("");
	$('#gender').val("不限");
	$('#hujiAdr').val("不限");
	$('#ageStart').val("");
	$('#ageEnd').val("");
	$('#overdueDayStart').val("");
	$('#overdueDayEnd').val("");
	$('#verifyUser').val("");
	$('#refundDateStart').val("");
	$('#refundDateEnd').val("");
	$('#verifyDateStart').val("");
	$('#verifyDateEnd').val("");
	$('#borrowTimeStart').val("");
	$('#borrowTimeEnd').val("");
})
//查看运营商报告
function yysLookfor(userId){
	var type=1;
	$.ajax({
	    url: '/behindLoan/getReportUrl/1.2/'+userId+'/'+type,
	    success: function(r){
			if(r.code == 0){
				alert('操作成功', function(){
					window.location.href=r.msg;
				});
			}else{
				alert(r.msg);
			}
		}
	});
}
function yyszxLookfor(userId){
	var type=2;
	$.ajax({
	    url: '/behindLoan/getReportUrl/1.2/'+userId+'/'+type,
	    success: function(r){
			if(r.code == 0){
				alert('操作成功', function(){
					window.location.href=r.msg;
				});
			}else{
				alert(r.msg);
			}
		}
	});
}
function tbLookfor(userId){
	var type=4;
	$.ajax({
	    url: '/behindLoan/getReportUrl/1.2/'+userId+'/'+type,
	    success: function(r){
			if(r.code == 0){
				alert('操作成功', function(){
					window.location.href=r.msg;
				});
			}else{
				alert(r.msg);
			}
		}
	});
}
function jdLookfor(userId){
	var type=3;
	$.ajax({
	    url: '/behindLoan/getReportUrl/1.2/'+userId+'/'+type,
	    success: function(r){
			if(r.code == 0){
				alert('操作成功', function(){
					window.location.href=r.msg;
				});
			}else{
				alert(r.msg);
			}
		}
	});
}
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
