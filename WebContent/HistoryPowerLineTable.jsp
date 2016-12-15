<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title></title>
<link href="skins/Aqua/css/ligerui-all.css" rel="stylesheet"type="text/css" />
<link href="Css/style.css" rel="stylesheet" type="text/css"/>
<link rel="stylesheet" type="text/css" href="Css/tcal.css" />

<script src="js/jquery-1.12.3.min.js"></script>
<script type="text/javascript" src="js/tcal.js"></script>
<script src="js/ligerui/core/base.js" type="text/javascript"></script>
<script src="js/ligerui/ligerui.all.js" type="text/javascript"></script>
<script type="text/javascript" src="js/echarts-all.js"></script>
<script src="js/ligerui/plugins/ligerDateEditor.js" type="text/javascript"></script>

<script type="text/javascript">
	$(function() {
		$("#layout1").ligerLayout({
			leftWidth : 180,
			
			allowLeftResize : false,

		});
	});
</script>
<style type="text/css">
body {
	padding: 10px;
	margin: 0;
}

#layout1 {
	width: 100%;
	margin: 40px;
	height: 400px;
	margin: 0;
	padding: 0;
}

#accordion1 {
	height: 270px;
}

h4 {
	margin: 20px;
}


</style>

<script type="text/javascript">
	var data = [];
	data.push({
		id : 1,
		pid : 0,
		text : 'PCS1有功'
	});
	data.push({
		id : 2,
		pid : 0,
		text : 'PCS2有功'
	});
	data.push({
		id : 3,
		pid : 0,
		text : 'PCS3有功'
	});
	data.push({
		id : 4,
		pid : 0,
		text : 'PCS4有功'
	});
	data.push({
		id : 5,
		pid : 0,
		text : 'PCS5有功'
	});
	data.push({
		id : 6,
		pid : 0,
		text : 'PCS1无功'
	});
	data.push({
		id : 7,
		pid : 0,
		text : 'PCS2无功'
	});
	data.push({
		id : 8,
		pid : 0,
		text : 'PCS3无功'
	});
	data.push({
		id : 9,
		pid : 0,
		text : 'PCS4无功'
	});
	data.push({
		id : 10,
		pid : 0,
		text : 'PCS5无功'
	});
	

	data.push({
		id : 11,
		pid : 0,
		text : 'DC/DC1回路1功率'
	});
	data.push({
		id : 12,
		pid : 0,
		text : 'DC/DC1回路2功率'
	});
	data.push({
		id : 13,
		pid : 0,
		text : 'DC/DC1回路3功率'
	});
	data.push({
		id : 14,
		pid : 0,
		text : 'DC/DC2回路1功率'
	});
	data.push({
		id : 15,
		pid : 0,
		text : 'DC/DC2回路2功率'
	});
	data.push({
		id : 16,
		pid : 0,
		text : 'DC/DC2回路3功率'
	});


	
	$(function() {
		var tree = $("#tree1").ligerTree({
			data : data,
			idFieldName : 'id',
			slide : false,
			parentIDFieldName : 'pid',
         
			//onCheck: onCheck,
            
 		});
		treeManager = $("#tree1").ligerGetTreeManager();
		treeManager.collapseAll();

		/*  $("#startdata").ligerDateEditor(
		            {
		            	//showTime: true,
		                format: "yyyy/M/d",
		                label: '',
		                labelWidth: 100,
		                labelAlign: 'center',
		                cancelable : false
		        });

		    $("#enddata").ligerDateEditor(
		            {
		            	//showTime: true,
		                format: "yyyy/M/d",
		                label: '',
		                labelWidth: 100,
		                labelAlign: 'center',
		                cancelable : false
		        });  */
		    
		    $("#timeselect").ligerComboBox({
                width : 130,
                cancelable: true
            });
		    		    
		
	});
	
	 
</script>

</head>
<body style="padding: 10px">
	<div id="layout1">
		<div position="left" title="选择"  style="overflow: auto ;height:400px ;">
			<ul id="tree1"></ul>
			<div><input
				type="button" name="look1waitbutton" id="look1waitbutton" value="显示"
				class="scbtn2" onclick="onCheck();"/></div>
		</div>
		
		<div position="center" title="功率显示曲线"  >
			<div id="Voltage"
				style="width: 85%; height: 450px; background-color: #E0FFFF"></div> 
		</div>
		 <div position="right" title="时间选择">
		 <h3>时间间隔：</h3>
		 <select name="timeselect" id="timeselect" >
				<option value="1">无间隔全部显示</option>
				<option value="5">5S</option>
				<option value="10">10S</option>
				<option value="30">30S</option>
				<option value="60">1分</option>
				<option value="120">2分</option>
				<option value="300">5分</option>
				<option value="600">10分</option>
			</select> 
			 <h3>开始时间：</h3>
			 <input type="text" name="datastart" id="startdata" class="tcal" value="" />			 			 
			 <h3>结束时间：</h3>
			 <input type="text" name="datastart" id="enddata" class="tcal" value="" />
		 </div> 
		<div position="top" align="center" style="height:30">
			<h1>历史功率曲线显示</h1>
		</div>
		<div position="bottom"></div>
	</div>

	<div style="display: none;"></div>
</body>
<script type="text/javascript" src="js/HistoryPowerLine.js"></script>
</html>