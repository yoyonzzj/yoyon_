$(function () {
    $("#jqGrid").jqGrid({
        url: '/zyuserblack/black/list/1.2',
        postData:{'page':1, 'limit':10,'sidx':'','order':'','phone':'','userStatus':'','startTime':'','endTime':''},
        datatype: "json",
        colModel: [		
            { label: '用户手机号码', name: 'phone', width:180}, 
			{ label: '用户真实姓名',name: 'userName', width:150}, 	
			{ label: 'userId', name: 'userId', classes: 'idaa', hidden:true, width:233 },
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
            	}, width:80
			},
			{ label: '年龄', name: 'age', width:64},
			{ label: '户籍地址', name: 'hujiAdr', width:202},
			{ label: '第三方/执行人', name: 'operator', width:202},
			{ label: '处理时间', name: 'createTime', width:202}, 
			{ 
				label: '备注',
				name: 'reason',
				formatter: function(cellvalue, options, rowObject){
					var html = rowObject.reason+'<a style="float:right;color:#0000FF" href="javascript:void(0)" data-toggle="modal" data-target=".bs-example-modal-lg" onclick="remarkMore('+"'"+rowObject.userId+"'"+')">更多</a>'
					return html
				}, width:285,
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
			$("#move_list").removeAttr("data-toggle");
			$("#move_list").removeAttr("data-target");
			var selectedId = getSelectedRow();
			var rowData = $("#jqGrid").jqGrid("getRowData", selectedId);
		    var bannerId=selectedId;
			if(selectedId){
				confirm('请确认是否移入黑名单？', function(){
					$.ajax({
					    url: "/zyuserblack/remove/list/1.2?id="+bannerId,
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
//			return ;
//			alert(111)
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


//备注信息弹窗封装
function remarkMore(userId){
	$(".aaaa").css("display","none");
	$(".remarkMore-form").css("display","block");
	$(".guanbi").css({"bottom":"30px","right":"30px","display":"block","position":"fixed"});
	$("#quxiao").css("display","none");
	$.post('/zyuserblack/reason/list/1.2?userId='+userId,function(data){
		//获得响应数据
		var obj=eval(data.list);
		$("#data_tr").html("");
		$(obj).each(function (index){
			var val=obj[index];
			var tr=$('<tr></tr>');
			var index_order=index+1;
			tr.append('<td>'+ index_order + '</td>' + '<td>'+ val.operator + '</td>'+'<td>'+ val.createTime + '</td>'+'<td>'+ val.reason + '</td>');
			$("#data_tr").append(tr);
		});
	},'json');
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
	var province=document.querySelector('#province').value;
	if(province=="不限"){
		province="";
	}
	var firstAge=document.querySelector('#firstAge').value;
	var lastAge=document.querySelector('#lastAge').value;
	var operator=document.querySelector('#operator').value;
	var firstApply=document.querySelector('#datetimeStart').value;
	var lastApply=document.querySelector('#datetimeEnd').value;
	 $('#jqGrid').jqGrid('setGridParam',{  
	        datatype:'json',
	        page:1,
	        url: '/zyuserblack/black/list/1.2',
	        postData:{'page':1, 'limit':10,'sidx':'','order':'','firstApply':firstApply,'lastApply':lastApply,
	        		  'phone':phone,'username':username,'gender':gender,'province':province,'firstAge':firstAge,
	        		  'lastAge':lastAge,'operator':operator}
	      }).trigger("reloadGrid"); //重新载入*/
})
//清空按钮
$("#clear").click(function(){
	$('#phone').val("");
	$('#username').val("");
	$('#firstAge').val("");
	$('#lastAge').val("");
	$('#operator').val("");
	$('#datetimeStart').val("");
	$('#datetimeEnd').val("");
	$('#gender').val("不限");
	$('#province').val("不限");
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
