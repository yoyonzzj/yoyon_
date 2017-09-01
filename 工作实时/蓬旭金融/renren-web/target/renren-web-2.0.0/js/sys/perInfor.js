$(function () {
    $("#jqGrid").jqGrid({
        url: '/zyUser/personalInformation',
        postData:{'page':1, 'limit':10,'sidx':'','order':''},
        datatype: "json",
        colModel: [			
			{ label: '用户Id', name: 'userId',align:'center', width: 80,hidden:true},
			{ label: '用户名', name: 'phone', align:'center',width: 120 },
			{ label: '真实姓名', name: 'username',align:'center', width: 80 },
			{ label: '身份证验证', name: 'isIdcard',align:'center', width: 90,
				formatter : function(cellvalue, options, rowObject){
            		if (rowObject.isIdcard == 1){
            			var html='已验证';
            		}else if(rowObject.isIdcard == ""){
            			var html='未验证';
            		}else{
            			var html='';
            		}
            		return html;
            	}},
			{ label: '身份证号码', name: 'idcard',align:'center', width: 170 },
			{ label: '婚姻状况', name: 'marriage', align:'center',width: 80 },
			{ label: '户籍地址', name: 'hujiAdr', align:'center',width: 160 },
			{ label: '户籍详细地址', name: 'hujiAdrDetail',align:'center', width: 200 },
			{ label: '现居地址', name: 'liveAdr', align:'center',width: 150 },
			{ label: '现居详细地址', name: 'liveAdrDetail',align:'center', width: 240 },
			{ label: '开户银行', name: 'bankName',align:'center', width: 130 },
			{ label: '银行卡号', name: 'bankcardNo',align:'center', width: 180 },
			{ label: '银行预留手机', name: 'bankPhone', align:'center',width:120}
        ],
        viewrecords: true,
		shrinkToFit: false,
        height: 385,
        rowNum: 10,
		rowList : [10,30,50],
        rownumbers: true, 
        rownumWidth: 36, 
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
        	//$("#jqGrid").closest(".ui-jqgrid-bdiv").css({ "overflow-x" : "hidden" }); 
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
		console.log(11111111111)
	    var isIdcard = $('#isIdcard').val();
	    
		if(isIdcard=="已验证"){
			isIdcard=1;
		}else if(isIdcard=="未验证"){
			isIdcard=2;
		}else{
			isIdcard="";
		}
		
		var username = $('#username').val();
	    var phone = $('#phone').val();
	    console.log(phone);
	    var idcard = $('#idcard').val();
	    
		 $('#jqGrid').jqGrid('setGridParam',{  
		        datatype:'json',
		        page:1,
		        url: '/zyUser/personalInformationRequirement',
		        postData:{'page':1, 'limit':10,'username':username,
		        	'idcard':idcard,'isIdcard':isIdcard,'sidx':'','order':'','phone':phone}
		      }).trigger("reloadGrid");
	})
