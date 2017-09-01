$(function () {
    $("#jqGrid").jqGrid({
        url: '/zyUser/userBlackList',
        postData:{'page':1, 'limit':10,'sidx':'','order':''},
        datatype: "json",
        colModel: [						
			{ label: '真实姓名', name: 'username', align:'center',width: 120 },
			{ label: '身份证号码', name: 'idcard', align:'center',width: 200 },
			{ label: '拉黑原因', name: 'reason', align:'center',width: 1040 },
			{ label: '拉黑时间', name: 'createDate',align:'center', width: 220}
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
        	/*$("#jqGrid").closest(".ui-jqgrid-bdiv").css({ "overflow-x" : "hidden" });*/ 
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

$("#button").click(function(){
	console.log(111111111111)
	var idcard=$('#idcard').val();
	var username=$('#username').val();
	console.log(username)
	var startTime = $('#startTime').val();
	var endTime=$('#endTime').val();
			
	 $("#jqGrid").jqGrid('setGridParam',{  
	        datatype:'json',
	        page:1,
	        url: '/zyUser/conditionUserBlackList',
	        postData:{'page':1, 'limit':10,'sidx':'','order':'','username':username,'idcard':idcard,'startTime':startTime,'endTime':endTime}
	      }).trigger("reloadGrid"); //重新载入*/
	 
//	$.post('/zyuserverify/waitVerifyDemand?page=1&limit=10&sidx=&order=&phone='+phone+"&userStatus="+userStatus+"&startTime="+startTime+"&endTime="+endTime,function(data){
//	},'json');
})