$(function () {
    $("#jqGrid").jqGrid({
        url: '/zyUser/userCapitalRecord',
        postData:{'page':1, 'limit':10,'sidx':'','order':''},
        datatype: "json",
        colModel: [			
			{ label: '用户手机号码', name: 'phone', key: true, index: "phone", align: 'center', width: 120},
			{ label: '用户真实姓名', name: 'username', align: 'center', width:100}, 			
			{ 
            	label: '用户类型',
            	name: 'userstatus',
        		formatter : function(cellvalue, options, rowObject){
            		if (rowObject.userStatus == 1){
            			var html='上班族';
            		}else if(rowObject.userStatus == 2){
            			var html='学生族';
            		}else{
            			var html='';
            		}
            		return html;
            	}, 
			    align: 'center', width:72
    		}, 		 			
			{ label: '借款总次数', name: 'totalLoan', align: 'center', width:92}, 			
			{ label: '借款成功次数', name: 'successLoan', align: 'center', width:110}, 			
			{ label: '借款失败次数', name: 'failLoan', align: 'center', width:110}, 			
			{ label: '逾期总次数', name: 'overdueLoan', align: 'center', width:95},	
			{ label: '累计借款金额', name: 'sum', align: 'center', width:110},
			{ label: '最大单笔借款金额', name: 'max', align: 'center', width:136},
			{ label: '最小单笔借款金额', name: 'min', align: 'center', width:126},
			{ label: '信用总额度', name: 'userAltogetherLimit', align: 'center', width:82},
			{ label: '当前借款中金额', name: 'nowSum', align: 'center', width:110},
			{ label: '当前逾期费用', name: 'overdue', align: 'center', width:110},
			{ label: '已用额度', name: 'quotaUsed', align: 'center', width:80},
			{ label: '剩余可用额度', name: 'userLastLimit', align: 'center', width:116}
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
//	var startTime=document.querySelector('#datetimeStart').value;
//	var endTime=document.querySelector('#datetimeEnd').value;
    $('#jqGrid').jqGrid('setGridParam',{  
        datatype:'json',
        page:1,
        url: "/zyUser/conditionUserCapitalRecord",
        postData:{'page':1, 'limit':10,'phone':phone,
        	'userStatus':userStatus,'sidx':'','order':''}
      }).trigger("reloadGrid"); //重新载入*/
	
})