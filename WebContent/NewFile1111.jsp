<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>

<link href="skins/Aqua/css/ligerui-all.css" rel="stylesheet"type="text/css" />
<script src="js/jquery-1.12.3.min.js"></script>
<script src="js/ligerui/core/base.js" type="text/javascript"></script>
<script src="js/ligerui/ligerui.all.js" type="text/javascript"></script>



<script type="text/javascript">

//+++++++++++++++++++++++按钮++++++++++++++++++++++++++++++++++++//
		
		
		
		
		
		
		
		
		
//+++++++++++++++++++++++TAB标签++++++++++++++++++++++++++++++++++++//

		
		
		
		
		
		
		  $(function ()
		{
//+++++++++++++++++++++++ device select选择框++++++++++++++++++++++++++++++++++++//
			$("#device1,#device2,#device3,#device4,#device5").ligerComboBox({
			width : 100,
			data : [ {
				text : 'PCS1',
				id : '1'
			}, {
				text : 'PCS2',
				id : '2'
			}, {
				text : 'PCS3',
				id : '3'
			},{
				text : 'PCS4',
				id : '4'
			},{
				text : 'PCS5',
				id : '5'
			},
			],
			valueFieldID: 'test3',
            autocomplete: true,
			//value : '1',
			//initIsTriggerEvent : false,
			
		});		
				
		
//+++++++++++++++++++++++select选择框++++++++++++++++++++++++++++++++++++//		
		$("#mode1,#mode2,#mode3,#mode4,#mode5").ligerComboBox({
			width : 100,
			data : [ {
				text : '模拟光伏',
				id : '1'
			}, {
				text : '平滑波动',
				id : '2'
			}, {
				text : '跟踪计划出力',
				id : '3'
			},
			],
			value : '1',
			initIsTriggerEvent : false,
			
		});	

	});






	
</script>

</head>
<body style="padding: 10px">
	<div id="navtab1"
		style="width: 600px; overflow: hidden; border: 1px solid #A3C0E8;">

		<div tabid="home" title="一键顺控" lselected="true" style="height: 300px">
			<div id="btn1" style="left: 20px; top: 80px" >并网启动</div>
			<br/>
			<div id="btn2"  style="left: 100px;top: 80px " >离网启动</div>
			<br/>
			<div id="btn3" style="left: 20px; top: 80px" >待机</div>
			<br/>
			<div id="btn4" style="left: 80px; top: 80px" >停机</div>
			<br/>
			
		</div>


		<div title="平滑波动">
			<div id="maingrid2" style="margin: 10px; height: 300px;">

		<table width="99%" border="1" cellpadding="0" cellspacing="0"
		bordercolor="#84C1FF"
		style="margin-bottom: 10px; margin-left: 7px; border-collapse: collapse; margin-right: 7px">
					<tr>
						<td align="center"width="10%"><input type="text" id="device1" /></td>
						<td align="center" width="40%"><input type="text" id="mode1" /></td>
						<td align="center"width="10%">控制值</td>
						<td align="center"width="40%"><input type="text" id="value1" /></td>
					</tr>

					<tr>
						<td align="center"><input type="text" id="device2" /></td>
						<td align="center"><input type="text" id="mode2" /></td>
						<td align="center">控制值</td>
						<td align="center"><input type="text" id="value2" /></td>
					</tr>

					<tr>
						<td align="center"><input type="text" id="device3" /></td>
						<td align="center"><input type="text" id="mode3" /></td>
						<td align="center">控制值</td>
						<td align="center"><input type="text" id="value3" /></td>
					</tr>

					<tr>
						<td align="center"><input type="text" id="device4" /></td>
						<td align="center"><input type="text" id="mode4" /></td>
						<td align="center">控制值</td>
						<td align="center"><input type="text" id="value4" /></td>
					</tr>

					<tr>
						<td align="center"><input type="text" id="device5" /></td>
						<td align="center"><input type="text" id="mode5" /></td>
						<td align="center">控制值</td>
						<td align="center"><input type="text" id="value5" /></td>
					</tr>

				</table>
				
					<div id="setfunction" style="left: 80px; top: 80px"  >确定</div>
				

			</div>
		</div>

		<div title="计划出力">

			<div id="maingrid3" style="margin: 10px; height: 300px;">计划出力</div>
		</div>


	</div>

</body>
</html>