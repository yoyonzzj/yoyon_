$(function () {
    $("#jqGrid").jqGrid({
        url: '/zyuserverify/firstListV2',
        postData:{'page':1, 'limit':10,'sidx':'','order':'','phone':'','userStatus':'','startTime':'','endTime':''},
        datatype: "json",
        colModel: [		
            { label: '用户手机号码', name: 'phone', width:180}, 
			{ label: '用户真实姓名',name: 'username', width:150}, 	
			{ label: 'id', name: 'id', classes: 'idaa', hidden:true, width:233 },
			{ 
            	label: '性别',
            	name: 'gender',
        		formatter : function(cellvalue, options, rowObject){
            		if (rowObject.gender == 1){
            			var html='男';
            		}else if(rowObject.gender == 2){
            			var html='女';
            		}else{
            			var html='';
            		}
            		return html;
            	}, width:64
    		}, 		
			{ label: '年龄', name: 'age', width:64},
			{ label: '户籍地址', name: 'hujiAdr', width:202},
			{ label: '申请时间', name: 'createTime', width:202}, 	
			{ 
				label: '运营商认证',
				name: 'operator', sortable:false,
				formatter: function(cellvalue, options, rowObject){
					if (rowObject.operator == 0) {
						var html = '<div><div style="width:50%;height:100%;float:left;"><img src="../../imgs/yunyingshang.png" style="width:20px;height:20px"></div><div style="width:50%;height:100%;float:left;position:relative"><img src="../../imgs/pass.png" style="margin:0 auto;width:16px;height:16px;margin-top:3px;display:none"><img src="../../imgs/loading.png" style="margin:0 auto;width:16px;height:16px;margin-top:3px;display:none"><img src="../../imgs/unpass.png" style="margin:0 auto;width:16px;height:16px;margin-top:3px;display:block"></div></div>'
					} else if (rowObject.operator == 1) {
						var html = '<div><div style="width:50%;height:100%;float:left;"><img src="../../imgs/yunyingshang.png" style="width:20px;height:20px"></div><div style="width:50%;height:100%;float:left;position:relative"><img src="../../imgs/pass.png" style="margin:0 auto;width:16px;height:16px;margin-top:3px;display:block"><img src="../../imgs/loading.png" style="margin:0 auto;width:16px;height:16px;margin-top:3px;display:none"><img src="../../imgs/unpass.png" style="margin:0 auto;width:16px;height:16px;margin-top:3px;display:none"></div></div>'
					} else if (rowObject.operator == 2) {
						var html = '<div><div style="width:50%;height:100%;float:left;"><img src="../../imgs/yunyingshang.png" style="width:20px;height:20px"></div><div style="width:50%;height:100%;float:left;position:relative"><img src="../../imgs/pass.png" style="margin:0 auto;width:16px;height:16px;margin-top:3px;display:none"><img src="../../imgs/loading.png" style="margin:0 auto;width:16px;height:16px;margin-top:3px;display:block"><img src="../../imgs/unpass.png" style="margin:0 auto;width:16px;height:16px;margin-top:3px;display:none"></div></div>'
					}else{
						var html="";
					}
					return html
				}, width:85
			},
			{ 
				label: '京东认证',
				name: 'jd', sortable:false,
				formatter: function(cellvalue, options, rowObject){
					if (rowObject.jd == 0) {
						var html = '<div><div style="width:50%;height:100%;float:left;"><img src="../../imgs/jingdong.png" style="width:20px;height:20px"></div><div style="width:50%;height:100%;float:left;position:relative"><img src="../../imgs/pass.png" style="margin:0 auto;width:16px;height:16px;margin-top:3px;display:none"><img src="../../imgs/loading.png" style="margin:0 auto;width:16px;height:16px;margin-top:3px;display:none"><img src="../../imgs/unpass.png" style="margin:0 auto;width:16px;height:16px;margin-top:3px;display:block"></div></div>'
					} else if (rowObject.jd == 1) {
						var html = '<div><div style="width:50%;height:100%;float:left;"><img src="../../imgs/jingdong.png" style="width:20px;height:20px"></div><div style="width:50%;height:100%;float:left;position:relative"><img src="../../imgs/pass.png" style="margin:0 auto;width:16px;height:16px;margin-top:3px;display:block"><img src="../../imgs/loading.png" style="margin:0 auto;width:16px;height:16px;margin-top:3px;display:none"><img src="../../imgs/unpass.png" style="margin:0 auto;width:16px;height:16px;margin-top:3px;display:none"></div></div>'
					} else if (rowObject.jd == 2) {
						var html = '<div><div style="width:50%;height:100%;float:left;"><img src="../../imgs/jingdong.png" style="width:20px;height:20px"></div><div style="width:50%;height:100%;float:left;position:relative"><img src="../../imgs/pass.png" style="margin:0 auto;width:16px;height:16px;margin-top:3px;display:none"><img src="../../imgs/loading.png" style="margin:0 auto;width:16px;height:16px;margin-top:3px;display:block"><img src="../../imgs/unpass.png" style="margin:0 auto;width:16px;height:16px;margin-top:3px;display:none"></div></div>'
					}else{
						var html="";
					}
					return html
				}, width:85
			},
			{ 
				label: '淘宝认证',
				name: 'tb', sortable:false,
				formatter: function(cellvalue, options, rowObject){
					if (rowObject.tb == 0) {
						var html = '<div><div style="width:50%;height:100%;float:left;"><img src="../../imgs/taobao.png" style="width:20px;height:20px"></div><div style="width:50%;height:100%;float:left;position:relative"><img src="../../imgs/pass.png" style="margin:0 auto;width:16px;height:16px;margin-top:3px;display:none"><img src="../../imgs/loading.png" style="margin:0 auto;width:16px;height:16px;margin-top:3px;display:none"><img src="../../imgs/unpass.png" style="margin:0 auto;width:16px;height:16px;margin-top:3px;display:block"></div></div>'
					} else if (rowObject.tb == 1) {
						var html = '<div><div style="width:50%;height:100%;float:left;"><img src="../../imgs/taobao.png" style="width:20px;height:20px"></div><div style="width:50%;height:100%;float:left;position:relative"><img src="../../imgs/pass.png" style="margin:0 auto;width:16px;height:16px;margin-top:3px;display:block"><img src="../../imgs/loading.png" style="margin:0 auto;width:16px;height:16px;margin-top:3px;display:none"><img src="../../imgs/unpass.png" style="margin:0 auto;width:16px;height:16px;margin-top:3px;display:none"></div></div>'
					} else if (rowObject.tb == 2) {
						var html = '<div><div style="width:50%;height:100%;float:left;"><img src="../../imgs/taobao.png" style="width:20px;height:20px"></div><div style="width:50%;height:100%;float:left;position:relative"><img src="../../imgs/pass.png" style="margin:0 auto;width:16px;height:16px;margin-top:3px;display:none"><img src="../../imgs/loading.png" style="margin:0 auto;width:16px;height:16px;margin-top:3px;display:block"><img src="../../imgs/unpass.png" style="margin:0 auto;width:16px;height:16px;margin-top:3px;display:none"></div></div>'
					}else{
						var html="";
					}
					return html
				}, width:85
			},
			{ label: '个人信息', name: 'personal', sortable:false,
				formatter: function(cellvalue, options, rowObject){
					var html = '<a href="javascript:void(0)" data-toggle="modal" data-target=".bs-example-modal-lg" style="color:#0000FF" onclick="person('+"'"+rowObject.userId+"'"+')">查看</a>'
					return html;
				}, width:100
			},
			{ 
				label: '初审',
				name: 'createDate2', sortable:false, 
				formatter: function(cellvalue, options, rowObject){
					var html = '<a href="javascript:void(0)" data-toggle="modal" data-target=".bs-example-modal-lg" style="color:#0000FF" onclick="check('+"'"+rowObject.id+"'"+')">初审</a>'
					return html
				}, width:125
			}
        ],
        viewrecords: true,
		shrinkToFit: false,
        height: 385,
        rowNum: 10,
		rowList : [10,30,50],
        rownumbers: true, 
        rownumWidth: 72, 
        autowidth:true,
        multiselect: true,
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
			var id = getSelectedRow();
			if(id == null){
				$("#join_list").removeAttr("data-toggle");
				$("#join_list").removeAttr("data-target");
				return ;
			}else{
				$('#join_list').attr('data-toggle','modal');
				$('#join_list').attr('data-target','.bs-example-modal-lg');
			}
			vm.showList = false;
            vm.title = "修改";
            vm.getMenuTree(id);
		},
		del1: function (event) {
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
			var pass_number=bannerIds.length;
			confirm('请确认是否批量通过已选中'+pass_number+'条记录？', function(){
				$.ajax({
				    url: "/zyuserverify/limitBatchPass?verifyId="+bannerIds,
				    success: function(r){
						if(r.code == 0){
							alert('操作成功', function(index){
								location.reload();
							});
						}else{
							alert(r.msg);
						}
					}
				});
			});
		},
		del2: function (event) {
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
			var pass_number=bannerIds.length;
			confirm('请确认是否批量拒绝已选中'+pass_number+'条记录？', function(){
				$.ajax({
				    url: "/zyuserverify/limitBatchRefuse?verifyId="+bannerIds,
				    success: function(r){
						if(r.code == 0){
							alert('操作成功', function(index){
								location.reload();
							});
						}else{
							alert(r.msg);
						}
					}
				});
			});
		},
		getRole: function(){
			var selectedId = $("#jqGrid").jqGrid("getGridParam", "selrow");     
		    var rowData = $("#jqGrid").jqGrid("getRowData", selectedId);
		    var bannerId=rowData.userId;
			join();
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
$("#datetimeStart").datetimepicker({
  format: 'yyyy-mm-dd',
  minView:'month',
  language: 'zh-CN',
  autoclose:true,
  startDate:new Date()
}).on("click",function(){
  $("#datetimeStart").datetimepicker("setEndDate",$("#datetimeEnd").val())
});
$("#datetimeEnd").datetimepicker({
  format: 'yyyy-mm-dd',
  minView:'month',
  language: 'zh-CN',
  autoclose:true,
  startDate:new Date()
}).on("click",function(){
  $("#datetimeEnd").datetimepicker("setStartDate",$("#datetimeStart").val())
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
//借款审核弹窗封装
function check(id){
	$(".aaaa").css("display","none");
	$(".check-form").css("display","block");
	$(".only-btn").css("display","block");
	$(".guanbi").css("display","none");
	$("#baocun").css("display","none");
	$("#queren").css("display","none");
	$.post('/zyuserverify/userToExamine?verifyId='+id,function(data){
		//获得响应数据
		$("#check-phone").html("").append(function(){if(data.result.phone==undefined){return "---"}else{return data.result.phone}});
		$("#check-verifyMoney").html("").append(function(){if(data.result.borrowLimit==undefined){return "---"}else{return data.result.borrowLimit}});
		$("#check-borrowLimit").html("").append(function(){if(data.result.borrowLimit==undefined){return "---"}else{return data.result.borrowLimit}});
		$("#check-managementCost").html("").append(function(){if(data.result.interest==undefined){return "---"}else{return data.result.interest}});
		$("#check-recommendcode").html("").append(function(){if(data.result.recommendcode==undefined){return "---"}else{return data.result.recommendcode}});
	  	$("#check-userStatus").html("").append(function(){if(data.result.userStatus==undefined){return "---"}else if(data.result.userStatus==1){return "上班族"}else if(data.result.userStatus==2){return "学生族"}else{return "错误"}});
	  	$("#check-refundWay").html("").append(function(){if(data.result.borrowPeriods==undefined){return "---"}else{return data.result.borrowPeriods}});
	  	$("#check-refundPrincipal").html("").append(function(){if(data.result.refundWay==undefined){return "---"}else{return data.result.refundWay}});
	  	//$("#check-interest").html("").append(function(){if(data.result.interest==undefined){return "---"}else{return data.result.interest}});
	  	$("#check-refundLimit").html("").append(function(){if(data.result.refundLimit==undefined){return "---"}else{return data.result.refundLimit}});
	  	$("#check-username").html("").append(function(){if(data.result.username==undefined){return "---"}else{return data.result.username}});
	  	$("#yincang").html("").append(data.result.id);
	},'json');
}
$("#tongguo").click(function(shenhemoney,shenheid){
	var shenhemoney=$("#optionFund").find("option:selected").text();
	var shenheid=$("#yincang").text();
	$.post('/zyuserverify/toExamine?verifyId='+shenheid+'&verifyStatus=3&money='+shenhemoney,function(data){
		location.reload();
	},'json');
});
$("#butongguo").click(function(shenhemoney,shenheid){
	var shenhemoney=$("#optionFund").find("option:selected").text();
	var shenheid=$("#yincang").text();
	$.post('/zyuserverify/toExamine?verifyId='+shenheid+'&verifyStatus=4&money='+shenhemoney,function(data){
		location.reload();
	},'json');
});
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
	if($("#yysAuth").is(':checked')){
		yysAuth=1;
	}else{
		yysAuth="";
	}
	if($("#jdAuth").is(':checked')){
		jdAuth=1;
	}else{
		jdAuth="";
	}
	if($("#tbAuth").is(':checked')){
		tbAuth=1;
	}else{
		tbAuth="";
	}
	var ageStart=document.querySelector('#ageStart').value;
	var ageEnd=document.querySelector('#ageEnd').value;
	var startTime=document.querySelector('#datetimeStart').value;
	var endTime=document.querySelector('#datetimeEnd').value;
	 $('#jqGrid').jqGrid('setGridParam',{  
	        datatype:'json',
	        page:1,
	        url: '/zyuserverify/finalListV2',
	        postData:{'page':1, 'limit':10,'username':username,'sidx':'','order':'',
	        	'startTime':startTime,'endTime':endTime,'phone':phone,'gender':gender,
	        	'hujiAdr':hujiAdr,'yysAuth':yysAuth,'jdAuth':jdAuth,'tbAuth':tbAuth,
	        	'ageStart':ageStart,'ageEnd':ageEnd}
	      }).trigger("reloadGrid"); //重新载入*/
})
//清空按钮
$("#clear").click(function(){
	$('#phone').val("");
	$('#username').val("");
	$('#datetimeStart').val("");
	$('#datetimeEnd').val("");
	$('#ageStart').val("");
	$('#ageEnd').val("");
	$('#gender').val("不限");
	$('#hujiAdr').val("不限");
	$("#yysAuth").removeAttr('checked');
	$("#jdAuth").removeAttr('checked');
	$("#tbAuth").removeAttr('checked');
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
