$(function () {
    $("#jqGrid").jqGrid({
        url: '/zyuserverify/bannerList',
        postData:{'page':1, 'limit':10,'sidx':'','order':''},
        datatype: "json",
        colModel: [
			{ label: '内容标题', name: 'title', width:478 }, 			
			{ label: '排序', name: 'sort', width:233 , index: "sort" }, 			
			{ label: '发布时间', name: 'createDate', width:300 }, 	
			{ label: 'id', name: 'id', classes: 'idaa', hidden: true, width:233 }, 
			{ 
				label: '发布状态', 
				name: 'flag',
				formatter : function(cellvalue, options, rowObject){
            		if (rowObject.flag == 1){
            			var html='已发布';
            		}else if(rowObject.flag == 0){
            			var html='未发布';
            		}else{
            			var html='发布信息有误'
            		}
            		return html;
            	}, width:258 
			}, 			
			{ label: '发布人', name: 'author', width:268 }, 			
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
        	//隐藏grid底部滚动条
        	$("#jqGrid").closest(".ui-jqgrid-bdiv").css({ "overflow-x" : "hidden" }); 
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
				return ;
			}
			vm.showList = false;
            vm.title = "修改";
            vm.getMenuTree(id);
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
			var selectedId = $("#jqGrid").jqGrid("getGridParam", "selrow");     
		    var rowData = $("#jqGrid").jqGrid("getRowData", selectedId);
		    var bannerId=rowData.id;
			$("#kelong").css("display","block");
        	$.post('/zyuserverify/updateBanner?bannerId='+bannerId,function(data){
        		//获得响应数据
        	  	$("#addtitle").val(data.result.title);
        	  	$("#addurl").val(data.result.url);
        	  	$("#addsort").val(data.result.sort);
        	  	$("#addauthor").val(data.result.author);
        	  	$("#filename").val(data.result.pic);
        	  	if(data.result.flag==1){$("input[type=radio][value='显示']").attr("checked",'true')}else{$("input[type=radio][value='隐藏']").attr("checked",'true')};
        	},'json');
        	$("#delpic").click(function(){
        		$("#filename").val("");
        		$("#filebox").html("").append('<input type="file" name="image" value="" style="margin-top:8px" id="addpic" />');
        	});
        	$("#addserve").click(function(){
        		var title=document.querySelector("#addtitle").value;
        		var url=document.querySelector('#addurl').value;
        		var sort=document.querySelector('#addsort').value;
        		var flag = $('#addflag input[name="show"]:checked ').val();
        		if(flag=="显示"){
        			flag=1;
        		}else if(flag=="隐藏"){
        			flag=0;
        		}else{
        			flag="";
        		}
        		var author=document.querySelector('#addauthor').value;
        		var pic=document.querySelector('#filename').value;
        		$.ajax({
        		 	type: "GET",
        		    url:"/zyuserverify/addBanner?bannerId="+bannerId+"&title="+title+"&url="+url+"&sort="+sort+"&flag="+flag+"&author="+author+"&pic="+pic,
        		    dataType:'json',
        		    success:function(data){
        		    	 location.reload();
        		    }  
        		 });
        	});
		},
		saveOrUpdate: function (event) {
			//获取选择的菜单
			var nodes = ztree.getCheckedNodes(true);
			var menuIdList = new Array();
			for(var i=0; i<nodes.length; i++) {
				menuIdList.push(nodes[i].menuId);
			}
			vm.role.menuIdList = menuIdList;
			
//			var url = vm.role.roleId == null ? "../sys/role/save" : "../sys/role/update";
//			$.ajax({
//				type: "POST",
//			    url: url,
//			    data: JSON.stringify(vm.role),
//			    success: function(r){
//			    	if(r.code === 0){
//						alert('操作成功', function(index){
//							vm.reload();
//						});
//					}else{
//						alert(r.msg);
//					}
//				}
//			});
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

//查询按钮
$("#chaxun").click(function(){
	var flag=document.querySelector('#flagtype').value;
	if(flag=="已发布"){
		flag=1;
	}else if(flag=="未发布"){
		flag=0;
	}else{
		flag="";
	}
	var startTime=document.querySelector('#datetimeStart').value;
	var endTime=document.querySelector('#datetimeEnd').value;
    $('#jqGrid').jqGrid('setGridParam',{  
        datatype:'json',
        page:1,
        url: "/zyuserverify/conditionBannerList?page=1&limit=10&sidx=&order=&flag="+flag+"&startTime="+startTime+"&endTime="+endTime,
//        postData:{'page':1, 'limit':10,'flag':flag,
//        	'startTime':startTime,'endTime':endTime,'sidx':'','order':''}
      }).trigger("reloadGrid"); //重新载入*/
	
})


