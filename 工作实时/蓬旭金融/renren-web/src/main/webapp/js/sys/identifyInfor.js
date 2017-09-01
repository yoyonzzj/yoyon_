$(function () {
    $("#jqGrid").jqGrid({
    	url: '/zyUser/userAuth',
    	postData:{'page':1, 'limit':10,'sidx':'','order':''},
        datatype: "json",
        colModel: [			
			{ label: '用户Id', name: 'userId',align:'center', width: 60,hidden:true},
			{ label: '用户名', name: 'phone',align:'center', width: 50 },
			{ label: '真实姓名', name: 'username', align:'center',width: 50 },
			{ label: '运营商认证', name: 'operator', align:'center',width: 110 ,
				formatter : function(cellvalue, options, rowObject){
            		if (rowObject.operator == 1){
            			var html='认证';
            		}else if(rowObject.operator == 0){
            			var html='未认证';
            		}else{
            			var html='';
            		}
            		return html;
            	}},
			{ label: '京东认证', name: 'jd', align:'center',width: 150,
            		formatter : function(cellvalue, options, rowObject){
                		if (rowObject.jd == 1){
                			var html='认证';
                		}else if(rowObject.jd == 0){
                			var html='未认证';
                		}else{
                			var html='';
                		}
                		return html;
                	}},
			{ label: '淘宝认证', name: 'tb', align:'center',width: 90,
                		formatter : function(cellvalue, options, rowObject){
                    		if (rowObject.tb == 1){
                    			var html='认证';
                    		}else if(rowObject.tb == 0){
                    			var html='未认证';
                    		}else{
                    			var html='';
                    		}
                    		return html;
                    	}}
        ],
        viewrecords: true,
        height: 385,
        rowNum: 10,
		rowList : [10,30,50],
        rownumbers: true, 
        rownumWidth: 72, 
        autowidth:true,
        multiselect: false,
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

$(function(){
	$("#button").click(function(){
		console.log(111111111111)
		var phone = $('#phone').val();
		console.log(phone)
		var username = $('#username').val();
		console.log(username)
		/*$("#jqGrid_ds").jqGrid('clearGridData');*/
		 $("#jqGrid").jqGrid('setGridParam',{  
		        datatype:'json',
		        page:1,
		        url: '/zyUser/conditionUserAuth',
		        postData:{'page':1, 'limit':10,'sidx':'','order':'','username':username,'phone':phone}		        
		      }).trigger("reloadGrid"); //重新载入*/
	})
})
