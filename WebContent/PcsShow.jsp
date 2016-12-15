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
<title>PCSshow</title>

<script src="js/jquery-1.12.3.min.js"></script>
<link href="skins/Aqua/css/ligerui-all.css" rel="stylesheet" type="text/css" />
<script src="js/ligerui/core/base.js" type="text/javascript"></script>
<script src="js/ligerui/ligerui.all.js" type="text/javascript"></script>


<script type="text/javascript" src="js/PCSRemoteControl.js"></script>

<script type="text/javascript" src="js/echarts-all.js"></script>
<script type="text/javascript" src="js/getcurrenttime.js"></script>


<link href="Css/sharp.css" rel="stylesheet" type="text/css" />
<link href="Css/style.css" rel="stylesheet" type="text/css" />


<style>
#item_text2, #item_text1, #itemtypes2, #item_text3 { /**/
	display: none;
}

.STYLE1 {
	color: #FF0000
}

</style>

</head>

<body style="background: #D1EEEE;">

	<!----------------------------------
显示登录信息 和登录时间
 ---------------------------------->
	<table width="99%" height="25" border="0" align="center"
		cellpadding="0" cellspacing="0" style="margin-bottom: 4px;">
		<tr>
			<td width="17" background="Images/bj4.gif"><img
				src="Picture/r.gif" width="16" height="16" /></td>
			<td width="466" background="Images/bj4.gif">尊敬的<%=session.getAttribute("types")%><%=session.getAttribute("name")%>:你好！欢迎光临，当前时间是：<span
				id="nowtime"></span>
			</td>
			<td width="162" align="center" background="Images/bj4.gif"></td>
		</tr>
	</table>


	<!----------------------------------
标题1
 ---------------------------------->

	<table width="99%" border="0" align="left" cellpadding="0"
		cellspacing="0"
		style="margin-bottom: 10px; margin-left: 7px; border-collapse: collapse">
		<tr>
			<td width="40%" style="padding-bottom: 0px">
				<table border="0" cellpadding="0" cellspacing="0"
					style="padding-bottom: 0px; border-collapse: collapse">
					<tr>
						<td width="1%" align="left" background="Images/b2.jpg"><img
							src="Picture/b1.jpg" width="10" height="26" /></td>
						<td width="4%" background="Images/b2.jpg" align="left"><img
							src="Picture/tz.gif" width="10" height="16" /></td>
						<td width="64%" align="left" background="Images/b2.jpg"
							class="biao">装置信息</td>
						<td width="31%" align="right" background="Images/b2.jpg"><img
							src="Picture/b3.jpg" width="9" height="26" /></td>
					</tr>
				</table>

			</td>
			<td width="10%"></td>

			<td width="50%" style="padding-bottom: 0px">
				<table border="0" cellpadding="0" cellspacing="0"
					style="padding-bottom: 0px; border-collapse: collapse">
					<tr>
						<td width="1%" align="left" background="Images/b2.jpg"><img
							src="Picture/b1.jpg" width="10" height="26" /></td>
						<td width="3%" background="Images/b2.jpg" align="left"><img
							src="Picture/tz.gif" width="10" height="16" /></td>
						<td width="64%" align="left" background="Images/b2.jpg"
							class="biao">运行信息</td>
						<td width="31%" align="right" background="Images/b2.jpg"><img
							src="Picture/b3.jpg" width="9" height="26" /></td>
					</tr>
				</table>

			</td>
		</tr>

		<tr>
			<td width="40%" align="right"
				style="margin-top: 0px; padding-top: 0px">

				<table width="100%" border="1" bordercolor="#84C1FF" align="left"
					cellpadding="0" cellspacing="0"
					style="border-collapse: collapse; margin-top: 0px; padding-top: 0px">

					<tr>
						<td width="30%" class="biao" bgcolor="#FFF9DF" align="center">名称:</td>
						<td width="30%" class="biao" bgcolor="#FFF9DF" id="pcsdbname"
							align="center"><div id="PCSDBName"><%=PCSDBName%></div></td>
						<td rowspan="4" width="40%" align="center"><img
							src="Picture/pcs.png" width=60 height=100 /></td>
					</tr>

					<tr>
						<td width="30%" class="biao" align="center" bgcolor="#FFF9DF">位置：</td>
						<td width="30%" class="biao" bgcolor="#FFF9DF" align="center">交流微网</td>
						<td width="40%"></td>
					</tr>
					<tr>
						<td width="30%" class="biao" bgcolor="#FFF9DF" align="center">其他1：</td>
						<td width="30%" class="biao" bgcolor="#FFF9DF" align="center"></td>
						<td width="40%"></td>
					</tr>
					<tr>
						<td width="30%" class="biao" align="center" bgcolor="#FFF9DF"
							align="center">其他2：</td>
						<td width="30%" class="biao" bgcolor="#FFF9DF" align="center"></td>
						<td width="40%"></td>
					</tr>
				</table>
			</td>


			<td width="10%"></td>

			<td width="50%">

				<table width="100%" border="1" bordercolor="#84C1FF" align="right"
					cellpadding="0" cellspacing="0"
					style="border-collapse: collapse; margin-top: 0px; padding-top: 0px">

					<tr>
						<td width="10%" height="50" class="biao" align="center"
							bgcolor="#FFF9DF">工作状态1</td>
						<td width="40%" align="center">
							<table border="0" bordercolor="#84C1FF" cellpadding="3"
								cellspacing="2" style="border-collapse: collapse">
								<tr>
									<td><div align="center" id="start" class="square"
											style="height: 18px; width: 18px"></div></td>
									<td><div align="center" id="wait" class="square"
											style="height: 18px; width: 18px"></div></td>
									<td><div align="center" id="stop" class="square"
											style="height: 18px; width: 18px"></div></td>
								</tr>
								<tr>
									<td>开机</td>
									<td>待机</td>
									<td>关机</td>
								</tr>
							</table>
						</td>

						<td width="10%" class="biao" align="center" bgcolor="#FFF9DF">故障状态</td>
						<td width="40%" align="center">
							<table border="0" bordercolor="#84C1FF" cellpadding="3"
								cellspacing="2" style="border-collapse: collapse">
								<tr>
									<td><div align="center" id="error" class="circle"
											style="height: 18px; width: 18px"></div></td>
									<td><div align="center" id="normal" class="circle"
											style="height: 18px; width: 18px"></div></td>
								</tr>
								<tr>
									<td>故障</td>
									<td>正常</td>
							</table>
						</td>

					</tr>

					<tr>
						<td width="10%" height="50" class="biao" align="center"
							bgcolor="#FFF9DF">工作状态2</td>
						<td width="40%" align="center">
							<table border="0" bordercolor="#84C1FF" cellpadding="2"
								cellspacing="1" style="border-collapse: collapse">
								<tr>
									<td width="25%"><div align="center" id="mode1"
											class="square" style="height: 18px; width: 18px"></div></td>
									<td width="25%"><div align="center" id="mode2"
											class="square" style="height: 18px; width: 18px"></div></td>
									<td width="25%"><div align="center" id="mode3"
											class="square" style="height: 18px; width: 18px"></div></td>
									<td width="25%"><div align="center" id="mode4"
											class="square" style="height: 18px; width: 18px"></div></td>
								</tr>
								<tr>
									<td width="25%" align="center">恒功充电</td>
									<td width="25%" align="center">恒功放电</td>
									<td width="25%" align="center">离网VF</td>
									<td width="25%" align="center">恒压充电</td>
								</tr>
							</table>
						</td>

						<td width="10%" class="biao" align="center" bgcolor="#FFF9DF">工作模式</td>
						<td width="40%" align="center">
							<table border="0" bordercolor="#84C1FF" cellpadding="3"
								cellspacing="2" style="border-collapse: collapse">
								<tr>
									<td><div align="center" id="onnet" class="square"
											style="height: 18px; width: 18px;"></div></td>
									<td><div align="center" id="offnet" class="square"
											style="height: 18px; width: 18px"></div></td>
								</tr>
								<tr>
									<td>并网</td>
									<td>离网</td>
								</tr>
							</table>
						</td>
					</tr>

				</table>
			</td>

		</tr>
	</table>

	<table width="99%" border="0" cellpadding="1" cellspacing="0"
		style="margin-left: 7px; margin-top: 10px;">
		<tr>
			<td width="1%" align="left" background="Images/b2.jpg"><img
				src="Picture/b1.jpg" width="10" height="26" /></td>
			<td width="68%" background="Images/b2.jpg">
				<table width="211" border="0" align="left" cellpadding="0"
					cellspacing="0">
					<tr>
						<td width="20" align="left"><img src="Picture/tz.gif"
							width="10" height="16" /></td>
						<td width="191" align="left" class="biao">PCS远程控制</td>
					</tr>
				</table>
			</td>
			<td width="31%" align="right" background="Images/b2.jpg"><img
				src="Picture/b3.jpg" width="9" height="26" /></td>
		</tr>
	</table>

	<table width="99%" border="1" bordercolor="#84C1FF"
		style="border-collapse: collapse; margin-left: 7px">
		<tr>
			<td width="25%" align="center" bgcolor="#FFF9DF" colspan="2"><input
				type="button" name="startbutton" id="startbutton" value="PCS开机"
				class="scbtn2" onclick="PcsStart();"></td>
			<td width="25%" align="center" bgcolor="#FFF9DF" colspan="2"><input
				type="button" name="stopbutton" id="stopbutton" value="PCS关机"
				class="scbtn2" onclick="PcsStop();"></td>
			<td width="25%" align="center" bgcolor="#FFF9DF" colspan="2"><input
				type="button" name="waitbutton" id="waitbutton" value="PCS待机"
				class="scbtn2" onclick="PcsWait();"></td>
			<td width="25%" align="center" bgcolor="#FFF9DF" colspan="2"><input
				type="button" name="accessnetpoint" id="accessnetpoint"
				value="下发并网状态" class="scbtn2" onclick="PcsNetState();"></td>
		</tr>

		<tr>
			<td width="25%" align="center" bgcolor="#FFF9DF" colspan="2"><input
				type="button" name="faultrecovery" id="faultrecovery" value="故障复归"
				class="scbtn2" onclick="PcsFaultRecovery();"></td>
			<td width="25%" align="center" bgcolor="#FFF9DF" colspan="2"><input
				type="button" name="sameperiod" id="sameperiod" value="同期开始"
				class="scbtn2" onclick="PcsTongQiStart();"></td>
			<td width="25%" align="center" bgcolor="#FFF9DF" colspan="2"><input
				type="button" name="sameperiodnull" id="sameperiodnull"
				value="同期无操作" class="scbtn2" onclick="PcsTongQiNull();"></td>
			<td width="25%" align="center" bgcolor="#FFF9DF" colspan="2"><input
				type="button" name="" id="" value="扩展按钮" class="scbtn2" onclick=""></td>
		</tr>

		<tr>
			<td width="12%" align="center" bgcolor="#FFF9DF"><input
				type="button" name="chargebutton" id="chargebutton" value="恒功率充电"
				class="scbtn2" onclick="PcsPowerCharge();"></td>
			<td width="12%" align="center"><input type="text"
				name="POWERchargenum" id="POWERchargenum" readonly="readonly"
				value="功率值" class="scinput1"></td>
			<td width="12%" align="center" bgcolor="#FFF9DF"><input
				type="button" name="dischargebutton" id="dischargebutton"
				value="恒功率放电" class="scbtn2" onclick="PcsPowerDisCharge();"></td>
			<td width="12%" align="center"><input type="text"
				name="POWERdischargenum" id="POWERdischargenum" readonly="readonly"
				value="功率值" class="scinput1"></td>
			<td width="12%" align="center" bgcolor="#FFF9DF" rowspan="2"><input
				type="button" name="VFbutton" id="VFbutton" value="VF"
				class="scbtn2" onclick="PcsVF();"></td>
			<td width="12%" align="center"><input type="text"
				name="VFvoltagenum" id="VFvoltagenum" readonly="readonly"
				value="控制电压" class="scinput1"></td>
			<td width="12%" align="center" bgcolor="#FFF9DF"><input
				type="button" name="" id="" value="扩展按钮" class="scbtn2" onclick=""></td>
			<td width="12%" align="center"><input type="text" name="" id=""
				readonly="readonly" value="" class="scinput1"></td>
		</tr>

		<tr>
			<td width="12%" align="center" bgcolor="#FFF9DF"><input
				type="button" name="voltagechargebutton" id="voltagechargebutton"
				value="恒压充电" class="scbtn2" onclick="PcsVoltageCharge();"></td>
			<td width="12%" align="center"><input type="text"
				name="VOLTAGEchargenum" id="VOLTAGEchargenum" readonly="readonly"
				value="电压值" class="scinput1"></td>
			<td width="12%" align="center" bgcolor="#FFF9DF"><input
				type="button" name="negetaivepower" id="negetaivepower" value="无功调节"
				class="scbtn2" onclick="PcsNegetaivePower();"></td>
			<td width="12%" align="center"><input type="text"
				name="NOactivenum" id="NOactivenum" readonly="readonly" value="无功值"
				class="scinput1"></td>
			<td width="12%" align="center"><input type="text"
				name="VFfrequencynum" id="VFfrequencynum" readonly="readonly"
				value="控制频率" class="scinput1"></td>
			<td width="12%" align="center" bgcolor="#FFF9DF"><input
				type="button" name="" id="" value="扩展按钮" class="scbtn2" onclick=""></td>
			<td width="12%" align="center"><input type="text" name="" id=""
				readonly="readonly" value="" class="scinput1"></td>

		</tr>



	</table>





	<table width="99%" border="0" cellpadding="1" cellspacing="0"
		style="margin-left: 7px; margin-top: 10px">
		<tr>
			<td width="1%" align="left" background="Images/b2.jpg"><img
				src="Picture/b1.jpg" width="10" height="26" /></td>
			<td width="68%" background="Images/b2.jpg">
				<table width="211" border="0" align="left" cellpadding="0"
					cellspacing="0">
					<tr>
						<td width="20" align="left"><img src="Picture/tz.gif"
							width="10" height="16" /></td>
						<td width="191" align="left" class="biao">PCS装置-图表显示</td>
					</tr>
				</table>
			</td>
			<td width="31%" align="right" background="Images/b2.jpg"><img
				src="Picture/b3.jpg" width="9" height="26" /></td>
		</tr>
	</table>



	<table width="99%" border="0" align="center" cellpadding="3"
		cellspacing="1" bgcolor="#AEDEF4">

		<tr>
			<td width="60%">
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

			<td width="40%">
				<table bgcolor="#FFF9DF" width="100%">
					<tr>
						<td width="50%">
							<div id="DCV"
								style="width: 100%; height: 150px; background-color: #E0FFFF"></div>
						</td>
						<td width="50%">
							<div id="DCA"
								style="width: 100%; height: 150px; background-color: #E0FFFF"></div>
						</td>
					</tr>
				</table>
			</td>

		</tr>


		<tr>
			<td width="60%">
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
			<td width="40%">
				<table bgcolor="#FFF9DF" width="100%">
					<tr>
						<td width="50%">
							<div id="DCP"
								style="width: 100%; height: 150px; background-color: #E0FFFF"></div>
						</td>
						<td width="50%">
							<div id="DCNP"
								style="width: 100%; height: 150px; background-color: #E0FFFF"></div>
						</td>
					</tr>
				</table>
			</td>

		</tr>
	</table>


	<table width="99%" border="0" cellpadding="1" cellspacing="0"
		style="margin-left: 7px; margin-top: 10px">
		<tr>
			<td width="1%" align="left" background="Images/b2.jpg"><img
				src="Picture/b1.jpg" width="10" height="26" /></td>
			<td width="68%" background="Images/b2.jpg">
				<table width="211" border="0" align="left" cellpadding="0"
					cellspacing="0">
					<tr>
						<td width="20" align="left"><img src="Picture/tz.gif"
							width="10" height="16" /></td>
						<td width="191" align="left" class="biao">PCS装置-图表显示</td>
					</tr>
				</table>
			</td>
			<td width="31%" align="right" background="Images/b2.jpg"><img
				src="Picture/b3.jpg" width="9" height="26" /></td>
		</tr>
	</table>

	<table width="99%" border="0" align="center" cellpadding="3"
		cellspacing="1" bgcolor="#AEDEF4">
		<tr>
			<td width="100%" bgcolor="#FFFFFF">

				<table width="100%">
					<tr>
						<td width="60%" bgcolor="#FFFFFF" align="center"><div
								id="Voltage"
								style="width: 95%; height: 360px; background-color: #E0FFFF"></div></td>
						<td width="40%"></td>
					</tr>

					<tr>
						<td width="100%" bgcolor="#FFFFFF" align="center"><div
								id="Current"
								style="width: 95%; height: 360px; background-color: #E0FFFF"></div></td>
					</tr>

					<tr>
						<td width="100%" bgcolor="#FFFFFF" align="center"><div
								id="DC"
								style="width: 95%; height: 360px; background-color: #E0FFFF"></div></td>
					</tr>

					<tr>
						<td width="100%" bgcolor="#FFFFFF" align="center"><div
								id="DCpower"
								style="width: 95%; height: 360px; background-color: #E0FFFF"></div></td>
					</tr>

				</table>

			</td>
		</tr>


	</table>

</body>
<script type="text/javascript" src="js/myChart.js"></script>


</html>