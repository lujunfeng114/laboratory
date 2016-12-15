<%@ page contentType="text/html;charset=UTF-8"%>
<%@ page language="java" pageEncoding="UTF-8"%>
<%@ page import="java.sql.*,com.lyq.bean.DB"%>
<%
	String PCSDBName = request.getParameter("pcsnum");
%>


<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>无标题文档</title>


<script src="js/jquery-1.12.3.min.js" type="text/javascript"></script>

<script src="js/echarts-all.js" type="text/javascript"></script>
<script src="js/theme-macarons.js" type="text/javascript"></script>
<script src="js/getcurrenttime.js" type="text/javascript"></script>


<link href="skins/Aqua/css/ligerui-all.css" rel="stylesheet"
	type="text/css" />
<script src="js/ligerui/core/base.js" type="text/javascript"></script>
<script src="js/ligerui/ligerui.all.js" type="text/javascript"></script>

<link href="Css/style.css" rel="stylesheet" type="text/css" />
<link href="Css/sharp.css" rel="stylesheet" type="text/css" />


<style type="text/css">
.biankuangs {
	border: solid #A6D2FF 1px;
	border-top: 0px;
}

#item_text2, #item_text1, #itemtypes2, #item_text3 { /**/
	display: none;
}

.STYLE1 {
	color: #FF0000
}

.STYLE1 {
	color: #FF0000
}
</style>

</head>

<body>

	<!----------------------------------
显示登录信息 和登录时间
 ---------------------------------->
	<table width="99%" height="25" border="0" align="center"
		cellpadding="0" cellspacing="0" style="margin-bottom: 4px;">
		<tr>
			<td width="17" background="Images/bj4.gif"><img
				src="Picture/r.gif" width="16" height="16" alt="" /></td>
			<td width="466" background="Images/bj4.gif">尊敬的<%=session.getAttribute("types")%><%=session.getAttribute("name")%>:你好！欢迎光临，当前时间是：<span
				id="nowtime"></span>
			</td>
			<td width="162" align="center" background="Images/bj4.gif"></td>
		</tr>
	</table>


	<!----------------------------------
标题
 ---------------------------------->
	<table width="99%" border="0" align="center" cellpadding="0"
		cellspacing="0">
		<tr>
			<td width="1%" align="left" background="Images/b2.jpg"><img
				src="Picture/b1.jpg" width="10" height="26" alt="" /></td>
			<td width="68%" background="Images/b2.jpg">
				<table width="211" border="0" align="left" cellpadding="0"
					cellspacing="0">
					<tr>
						<td width="20" align="left"><img src="Picture/tz.gif"
							width="10" height="16" alt="" /></td>
						<td width="191" align="left" class="biao">PCS装置-基本信息</td>
					</tr>
				</table>
			</td>
			<td width="31%" align="right" background="Images/b2.jpg"><img
				src="Picture/b3.jpg" width="9" height="26" alt="" /></td>
		</tr>
	</table>


	<!--------第一个表-------------------装置名称 和 区域  ------------------->
	<table width="99%" border="0" align="center" cellpadding="3"
		cellspacing="1" bgcolor="#AEDEF4">
		<tr>
			<td width="81" height="25" align="center" bgcolor="#FFF9DF">装置名称</td>
			<td colspan="3" align="left" bgcolor="#FFFFFF"><label
				id="pcsdbname"><%=PCSDBName%></label></td>
			<td width="89" align="center" bgcolor="#FFF9DF">PID</td>
			<td width="100" align="left" bgcolor="#FFFFFF" class="t5"><div
					align="left" id="PID"></div></td>

			<td width="83" align="center" bgcolor="#FFF9DF">所属区域</td>
			<td width="222" align="left" bgcolor="#FFFFFF" class="t5"><div
					align="left">直流微网1</div></td>
		</tr>
		<!----------------------------------
装置运行信息标题
 ---------------------------------->
		<tr>
			<td colspan="8" height="25" align="left" bgcolor="#FFF9DF">装置运行信息</td>
		</tr>
		<!----------------------------------
装置运行信
 ---------------------------------->
		<tr>
			<td height="25" align="center" bgcolor="#FFF9DF">设备工作状态</td>
			<td width="100" align="center" valign="middle" bgcolor="#FFFFFF"
				class="t5"><div align="left" id="WorkingState"></div></td>
			<td width="86" align="center" bgcolor="#FFF9DF">工作模式</td>
			<td width="100" align="center" valign="middle" bgcolor="#FFFFFF"
				class="t5"><div align="left" id="OperationMode"></div></td>
			<td width="89" align="center" bgcolor="#FFF9DF">运行状态</td>
			<td width="100" align="center" valign="middle" bgcolor="#FFFFFF"
				class="t5"><div align="left" id="RunningState"></div></td>
			<td align="center" bgcolor="#FFF9DF">有无警告</td>
			<td align="left" valign="middle" bgcolor="#FFFFFF" class="t5">
				<div align="left" id="Faulty"></div>
			</td>
		</tr>
		<!----------------------------------
装置交流侧信息
 ---------------------------------->
		<tr>
			<td colspan="8" height="25" align="left" bgcolor="#FFF9DF">PCS交流侧信息</td>
		</tr>
		<tr>
			<td height="25" align="center" bgcolor="#FFF9DF">交流A电压(V)</td>
			<td width="95" align="center" valign="middle" bgcolor="#FFFFFF"
				class="t5"><div align="center" id="AVoltage"></div></td>
			<td align="center" valign="middle" bgcolor="#FFF9DF">交流A电流(A)</td>
			<td align="center" valign="middle" bgcolor="#FFFFFF" class="t5">
				<div align="center" id="ACurrent">&nbsp;</div>
			</td>
			<td width="89" align="center" bgcolor="#FFF9DF">频率(Hz)</td>
			<td width="100" align="center" valign="middle" bgcolor="#FFFFFF"
				class="t5">
				<div align="center" id="Frequency"></div>
			</td>
			<td align="center" bgcolor="#FFF9DF">数据时间</td>
			<td align="left" valign="middle" bgcolor="#FFFFFF" class="t5">
				<div align="left" id="AddTime"></div>
			</td>
		</tr>
		<tr>
			<td height="25" align="center" bgcolor="#FFF9DF">交流B电压(V)</td>
			<td align="center" valign="middle" bgcolor="#FFFFFF" class="t5"><div
					align="center" id="BVoltage"></div></td>
			<td align="center" bgcolor="#FFF9DF">交流B电流(A)</td>
			<td colspan="1" align="center" valign="middle" bgcolor="#FFFFFF"
				class="t5"><div align="center" id="BCurrent"></div></td>
			<td align="center" bgcolor="#FFF9DF">有功功率 (kW)</td>
			<td align="center" valign="middle" bgcolor="#FFFFFF" class="t5"><div
					align="center" id="ActivePower">&nbsp;</div></td>
			<td align="center" bgcolor="#FFF9DF">其他2</td>
			<td align="center" valign="middle" bgcolor="#FFFFFF" class="t5"><div
					align="left">&nbsp;</div></td>
		</tr>
		<tr>
			<td width="8%" height="25" align="center" bgcolor="#FFF9DF">交流C电压(V)</td>
			<td width="95" align="center" valign="middle" bgcolor="#FFFFFF"
				class="t5"><div align="center" id="CVoltage"></div></td>
			<td align="center" bgcolor="#FFF9DF">交流C电流(A)</td>
			<td colspan="1" align="center" valign="middle" bgcolor="#FFFFFF"
				class="t5"><div align="center" id="CCurrent">&nbsp;</div></td>
			<td align="center" bgcolor="#FFF9DF">无功功率(kW)</td>
			<td align="center" valign="middle" bgcolor="#FFFFFF" class="t5"><div
					align="center" id="ReactivePower">&nbsp;</div></td>
			<td align="center" bgcolor="#FFF9DF">其他3</td>
			<td align="center" valign="middle" bgcolor="#FFFFFF" class="t5"><div
					align="center" id="PID">&nbsp;</div></td>
		</tr>
	</table>
	<!---第二个表--------------------------------->
	<table width="99%" border="0" align="center" cellpadding="3"
		cellspacing="1" bgcolor="#AEDEF4" style="margin-bottom: 10px;">
		<!----------------------------------
装置直流侧信息
 ---------------------------------->
		<tr>
			<td height="25" colspan="4" align="left" bgcolor="#FFF9DF">pcs直流侧信息
			</td>
		</tr>
		<tr>
			<td width="10%" height="25" align="center" bgcolor="#FFF9DF">直流侧电压(V)</td>
			<td width="15%" height="12" align="left" valign="middle"
				bgcolor="#FFFFFF" class="t5"><div align="left" id="DCVoltag"></div>
			</td>
			<td width="10%" height="25" align="center" bgcolor="#FFF9DF">直流侧电流(A)</td>
			<td width="25%" height="25" align="left" valign="middle"
				bgcolor="#FFFFFF" class="t5"><div align="left" id="DCCurrent"></div>
			</td>
		</tr>
		<td height="30" bgcolor="#FFFFFF" colspan="4"
			style="border-color: #FFFFFF"></td>

	</table>




	<table width="99%" border="0" cellpadding="1" cellspacing="0"
		style="margin-left: 7px">
		<tr>
			<td width="1%" align="left" background="Images/b2.jpg"><img
				src="Picture/b1.jpg" width="10" height="26" alt="" /></td>
			<td width="68%" background="Images/b2.jpg">
				<table width="211" border="0" align="left" cellpadding="0"
					cellspacing="0">
					<tr>
						<td width="20" align="left"><img src="Picture/tz.gif"
							width="10" height="16" alt="" /></td>
						<td width="191" align="left" class="biao">PCS装置-图表显示</td>
					</tr>
				</table>
			</td>
			<td width="31%" align="right" background="Images/b2.jpg"><img
				src="Picture/b3.jpg" width="9" height="26" alt="" /></td>
		</tr>
	</table>



	<table width="99%" border="0" align="center" cellpadding="3"
		cellspacing="1" bgcolor="#AEDEF4">
		<tr>
			<td width="12%" height="23" align="center" bgcolor="#FFF9DF">工作状态</td>
			<td width="12%" align="center" bgcolor="#FFFFFF">
				<table border="0" cellpadding="3" cellspacing="2">
					<tr>
						<td><div align="center" id="start" class="square"
								style="height: 18px; width: 18px"></div></td>
						<td><div align="center" id="wait" class="square"
								style="height: 18px; width: 18px"></div></td>
						<td><div align="center" id="stop" class="square"
								style="height: 18px; width: 18px; background: #7fee1d;"></div></td>
					</tr>
					<tr>
						<td>开机</td>
						<td>待机</td>
						<td>关机</td>
					</tr>
				</table>
			</td>

			<td width="10%" height="23" align="center" bgcolor="#FFF9DF">工作模式</td>
			<td width="16%" align="center" bgcolor="#FFFFFF">
				<table border="0" cellpadding="3" cellspacing="2">
					<tr>
						<td><div align="center" id="mode1" class="square"
								style="height: 18px; width: 18px"></div></td>
						<td><div align="center" id="mode2" class="square"
								style="height: 18px; width: 18px"></div></td>
						<td><div align="center" id="mode3" class="square"
								style="height: 18px; width: 18px"></div></td>
						<td><div align="center" id="mode4" class="square"
								style="height: 18px; width: 18px; background: #7fee1d;"></div></td>
					</tr>
					<tr>
						<td>模式一</td>
						<td>模式二</td>
						<td>模式三</td>
						<td>模式四</td>
					</tr>
				</table>
			</td>


			<td width="10%" height="23" align="center" bgcolor="#FFF9DF">运行状态</td>
			<td width="12%" align="center" bgcolor="#FFFFFF">
				<table border="0" cellpadding="3" cellspacing="2">
					<tr>
						<td><div align="center" id="ok" class="square"
								style="height: 18px; width: 18px; background: #7fee1d;"></div></td>
						<td><div align="center" id="wrong" class="square"
								style="height: 18px; width: 18px"></div></td>
					</tr>
					<tr>
						<td>正常</td>
						<td>错误</td>

					</tr>
				</table>
			</td>

			<td width="12%" height="23" align="center" bgcolor="#FFF9DF">运行状态</td>
			<td width="12%" align="center" bgcolor="#FFFFFF">
				<table border="0" cellpadding="3" cellspacing="2">
					<tr>
						<td><div align="center" id="error" class="circle"
								style="height: 18px; width: 18px; background: #FF0000"></div></td>
						<td><div align="center" id="normal" class="circle"
								style="height: 18px; width: 18px"></div></td>
					</tr>
					<tr>
						<td>故障</td>
						<td>正常</td>
					</tr>
				</table>
			</td>
		</tr>

		<tr>
			<td colspan="8">
				<table bgcolor="#FFF9DF" width="100%">
					<tr>
						<td width="33%">
							<div id="Avoltage"
								style="width: 100%; height: 150px; background-color: #E0FFFF"></div>
						</td>
						<td width="33%">
							<div id="Bvoltage"
								style="width: 100%; height: 150px; background-color: #E0FFFF"></div>
						</td>
						<td width="33%">
							<div id="Cvoltage"
								style="width: 100%; height: 150px; background-color: #E0FFFF"></div>
						</td>
					</tr>
				</table>
			</td>
		</tr>

		<tr>
			<td colspan="8">
				<table bgcolor="#FFF9DF" width="100%">
					<tr>
						<td width="33%">
							<div id="Acurrent"
								style="width: 100%; height: 150px; background-color: #E0FFFF"></div>
						</td>
						<td width="33%">
							<div id="Bcurrent"
								style="width: 100%; height: 150px; background-color: #E0FFFF"></div>
						</td>
						<td width="33%">
							<div id="Ccurrent"
								style="width: 100%; height: 150px; background-color: #E0FFFF"></div>
						</td>
					</tr>
				</table>
			</td>

		</tr>
		<td colspan="8" bgcolor="#FFFFFF">

			<table width="100%">
				<tr>
					<td width="100%" bgcolor="#FFFFFF" align="center"><div
							id="Voltage"
							style="width: 70%; height: 360px; background-color: #E0FFFF"></div></td>
				</tr>

				<tr>
					<td width="100%" bgcolor="#FFFFFF" align="center"><div
							id="Current"
							style="width: 70%; height: 360px; background-color: #E0FFFF"></div></td>
				</tr>

				<tr>
					<td width="100%" bgcolor="#FFFFFF" align="center"><div id="DC"
							style="width: 70%; height: 360px; background-color: #E0FFFF"></div></td>
				</tr>

				<tr>
					<td width="100%" bgcolor="#FFFFFF" align="center"><div
							id="DCpower"
							style="width: 70%; height: 360px; background-color: #E0FFFF"></div></td>
				</tr>

			</table>

		</td>
		<tr>


		</tr>


	</table>

</body>
<script type="text/javascript" src="js/myChart.js"></script>

</html>