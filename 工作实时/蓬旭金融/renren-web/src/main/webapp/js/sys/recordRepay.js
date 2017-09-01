$(function () {
    $("#jqGrid").jqGrid({
        url: '/zyUser/repaymentRecord',
        postData:{'page':1, 'limit':10,'sidx':'','order':''},
        datatype: "json",
        colModel: [			
			{ label: '用户手机号码', name: 'phone',align:'center',width: 120},
			{ label: '用户真实姓名', name: 'username', align:'center',width: 80},
			{ label: '用户类型', name: 'userstatus',align:'center', width: 90,
				formatter : function(cellvalue, options, rowObject){
            		if (rowObject.userstatus == 1){
            			var html='上班族';
            		}else if(rowObject.userstatus == 2){
            			var html='学生族';
            		}else{
            			var html='';
            		}
            		return html;
            	}},
			{ label: '借款金额', name: 'borrowLimit', align:'center',width: 90},
			{ label: '借款时间', name: 'createDate',align:'center', width: 160},
			{ label: '借款期限', name: 'borrowPeriods',align:'center', width: 90},
			{ label: '还款最后期限', name: 'refundTime',align:'center', width: 160},
			{ label: '还款本金', name: 'refundPrinciple', align:'center',width: 90},
			{ label: '借款手续费', name: 'interest',align:'center', width: 90},
			{ label: '逾期费用', name: 'overdueLimit',align:'center', width: 90},
			{ label: '是否逾期', name: 'overdue', align:'center',width: 90},
			{ label: '逾期天数', name: 'overdueDay',align:'center', width: 90},
			{ label: '待还总额', name: 'waitRefundWay',align:'center', width: 90},
			{ label: '已还金额', name: 'refundLimit',align:'center', width: 90},
			{ label: '还款时间', name: 'grantDate',align:'center', width: 160},
			{ label: '审核通过时间', name: 'verifyTime',align:'center', width: 160},
			{ label: '审核人', name: 'verifyUser', align:'center',width: 90},
			{ label: '还款状态', name: 'borrowStatus',align:'center',width:80,
				formatter : function(cellvalue, options, rowObject){
            		if (rowObject.borrowStatus == 4){
            			var html='<a href="javascript:void(0)" style="color:#4F66FF;text-decoration:none;font-weight:bold">还款中</a>';
            		}else if(rowObject.borrowStatus == 5){
            			var html='<a href="javascript:void(0)" style="color:#666;text-decoration:none;font-weight:bold">已还清</a>';
            		}else if(rowObject.borrowStatus == 6){
            			var html='<a href="javascript:void(0)" style="color:red;text-decoration:none;font-weight:bold">逾期</a>';
            		}else{
            			var html='';
            		}
            		return html;
            	}}
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

$(function(){
	$("#button").click(function(){
		var phone = $('#phone').val();
		var userStatus = $('#userStatus').val();
		var borrowStatus = $('#borrowStatus').val();
		var overdue = $('#overdue').val();
		var borrowStartTime = $('#borrowStartTime').val();
		var borrowEndTime = $('#borrowEndTime').val();
		var verifyStartTime = $('#verifyStartTime').val();
		var verifyEndTime = $('#verifyEndTime').val();
		
		if(userStatus=="上班族"){
			userStatus=1;
		}else if(userStatus=="学生族"){
			userStatus=2;
		}else{
			userStatus="";
		}
		
		if(overdue=="是"){
			overdue=1;
		}else if(overdue=="否"){
			overdue=0;
		}else if(overdue=="不限"){
			overdue=null;
		}
		
		if(borrowStatus=="还款中"){
			borrowStatus=4;
		}else if(borrowStatus=="已还清"){
			borrowStatus=5;
		}else if(borrowStatus=="已逾期"){
			borrowStatus=6;
		}else{
			borrowStatus=""
		}
		
		 $("#jqGrid").jqGrid('setGridParam',{  
		        datatype:'json',
		        page:1,
		        url: '/zyUser/conditionRepaymentRecord',
		        postData:{'page':1, 'limit':10,'sidx':'','order':'','userStatus':userStatus,'phone':phone,
		        	      'borrowStatus':borrowStatus,'overdue':overdue,'borrowStartTime':borrowStartTime,
		        	      'borrowEndTime':borrowEndTime,'verifyStartTime':verifyStartTime,'verifyEndTime':verifyEndTime}		        
		      }).trigger("reloadGrid"); //重新载入*/
	})
})