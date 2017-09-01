$(function () {
    $("#jqGrid").jqGrid({
    	url: '/zyUser/userContact',
    	postData:{'page':1, 'limit':10,'sidx':'','order':''},
        datatype: "json",
        colModel: [			
			{ label: '用户Id', name: 'userId',align:'center', width: 60,hidden:true},
			{ label: '用户名', name: 'phone', align:'center',width: 50 },
			{ label: '真实姓名', name: 'username', align:'center',width: 50 },
			{ label: '联系人', name: 'contactName',align:'center', width: 50 },
			{ label: '联系人电话', name: 'contactPhone',align:'center', width: 90 },
			{ label: '联系人关系', name: 'relation',align:'center', width: 50 },
			{ label: '紧急联系人', name: 'urgentContactName',align:'center', width: 50 },
			{ label: '紧急联系人电话', name: 'urgentContactPhone',align:'center', width: 60 },
			{ label: '补充信息', name: '',align:'center',align:'center', width: 110 ,
				formatter: function(cellvalue, options, rowObject){
			    	var html='<a id="h" type="button" data-toggle="modal" data-target="#myModal" onclick="add('+"'"+rowObject.userId+"'"+')">补充信息</a>'
			    	return html;			    		
		    }
			}
        ],
        viewrecords: true,
        height: 385,
        rowNum: 10,
		rowList : [10,30,50],
        rownumbers: true, 
        rownumWidth: 36, 
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

    function add(userId){
    	alert(111);
		$("#contactAdr").text("");
		$("#contactTel").text("");         
		$("#unitName").text("");       
		$("#unitAdrDetail").text("");
		$("#unitPhone").text("");
    	$.post('/zyUser/userContactAdditional?userId='+userId,function(data){
    		var obj = data.result;
    		$("#contactAdr").text(obj.contactAdr);
    		$("#contactTel").text(obj.contactTel);            
    		$("#unitName").text(obj.unitName);        
    		$("#unitAdrDetail").text(obj.unitAdrDetail);
    		$("#unitPhone").text(obj.unitPhone);
    	})
    }



$(function(){
	$("#button").click(function(){
		var phone = $('#phone').val();
		var username = $('#username').val();
		 $("#jqGrid").jqGrid('setGridParam',{  
		        datatype:'json',
		        page:1,
		        url: '/zyUser/conditionUserContact',
		        postData:{'page':1, 'limit':10,'sidx':'','order':'','username':username,'phone':phone}		        
		      }).trigger("reloadGrid"); //重新载入*/
	})
})