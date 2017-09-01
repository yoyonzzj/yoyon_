$(function () {
    $("#jqGrid").jqGrid({
        url: '/zyUser/userCompanyInformation',
        postData:{'page':1, 'limit':10,'sidx':'','order':''},
        datatype: "json",
        colModel: [			
			{ label: '用户名', name: 'phone',align:'center', width: 120 },
			{ label: '用户Id', name: 'userId',align:'center', width: 90,hidden:true},
			{ label: '真实姓名', name: 'username',align:'center', width: 90},
			{ label: '职业', name: 'professional',align:'center', width: 90 },
			{ label: '学历', name: 'education',align:'center', width: 80 },
			{ label: '月薪', name: 'monthPay',align:'center', width: 120 },
			{ label: '发薪日', name: 'monthPayday',align:'center', width: 90 },
			{ label: '发薪渠道', name: 'payChannel',align:'center', width: 100 },
			{ label: '公司名称', name: 'unitName',align:'center', width: 220 },
			{ label: '公司固话', name: 'unitPhone',align:'center', width: 120 },
			{ label: '公司地址', name: 'unitAdr',align:'center', width: 180 },
			{ label: '公司详细地址', name: 'unitAdrDetail',align:'center', width: 240 },
			{ label: '补充信息', name: '',align:'center', width: 110 ,
				formatter: function(cellvalue, options, rowObject){
			    	var html='<a id="h" type="button" data-toggle="modal" data-target="#myModal" onclick="add('+"'"+rowObject.userId+"'"+')">补充信息</a>'
			    	return html;			    		
		    }
			}],
			
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

function add(userId){
	$("#unitNature").text("");
	$("#unitIndustry").text("");            
	$("#title").text("");        
	$("#certificationPerson").text("");
	$("#certificationPersonPhone").text("");
	$("#otherIncome").text("");
    	$.post('/zyUser/userCompanySupplementInformation?userId='+userId,function(data){
    		var obj = data.result;
    		$("#unitNature").text(obj.unitNature);
    		$("#unitIndustry").text(obj.unitIndustry);            
    		$("#title").text(obj.title);        
    		$("#certificationPerson").text(obj.certificationPerson);
    		$("#certificationPersonPhone").text(obj.certificationPersonPhone);
    		$("#otherIncome").text(obj.otherIncome);
    	})
    }

$(function(){
	$("#button").click(function(){
		var phone = $('#phone').val();
		var username = $('#username').val();
		/*$("#jqGrid_ds").jqGrid('clearGridData');*/
		 $("#jqGrid").jqGrid('setGridParam',{  
		        datatype:'json',
		        page:1,
		        url: '/zyUser/conditionUserCompanyInformation',
		        postData:{'page':1, 'limit':10,'sidx':'','order':'','username':username,'phone':phone}		        
		      }).trigger("reloadGrid"); //重新载入*/
	})
})