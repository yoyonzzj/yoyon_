$(function () {
    $("#jqGrid").jqGrid({
    	url: '/zyUser/userSchool',
    	postData:{'page':1, 'limit':10,'sidx':'','order':''},
        datatype: "json",
        colModel: [			
			{ label: '用户Id', name: 'userId',align:'center', width: 60 ,hidden:true},
			{ label: '用户名', name: 'phone',align:'center', width: 60 },
			{ label: '真实姓名', name: 'username',align:'center', width: 60 },
			{ label: '学校名称', name: 'schoolName',align:'center', width: 110 },
			{ label: '在读学历', name: 'presentEducation',align:'center', width: 60 },
			{ label: '学校地址', name: 'schoolAdr',align:'center', width: 150 },
			{ label: '入学年份', name: 'entranceYear',align:'center', width: 60 },
			{ label: '毕业时间', name: 'graduationYear', align:'center',width: 60 },
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

function add(userId){
	$.post('/zyUser/userSchoolAdditional?userId='+userId,function(data){
		console.log(data.result)
		var obj = data.result;
		$("#majorName").text(obj.majorName);
		$("#expensesMonth").text(obj.expensesMonth);            
		$("#instructorName").text(obj.instructorName);        
		$("#instructorPhone").text(obj.instructorPhone);
		$("#schoolmateName").text(obj.schoolmateName);
		$("#schoolmatePhone").text(obj.schoolmatePhone);
	})
}

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
		var schoolName = $('#schoolName').val();
		console.log(schoolName)
		/*$("#jqGrid_ds").jqGrid('clearGridData');*/
		 $("#jqGrid").jqGrid('setGridParam',{  
		        datatype:'json',
		        page:1,
		        url: '/zyUser/conditionUserSchool',
		        postData:{'page':1, 'limit':10,'sidx':'','order':'','username':username,'phone':phone,'schoolName':schoolName}		        
		      }).trigger("reloadGrid"); //重新载入*/
	})
})