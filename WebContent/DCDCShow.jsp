<%@ page contentType="text/html;charset=UTF-8"%>
<%@ page language="java" pageEncoding="UTF-8"%>
<%@ page import="java.sql.*,com.lyq.bean.DB"%>
<%
	String DCDCDBName = request.getParameter("dcdcnum");

	if (DCDCDBName != null) //
	{
		String cookieName = "DCDCDBName";
		Cookie cookie = new Cookie(cookieName, DCDCDBName);
		response.addCookie(cookie);
	} else {
		Cookie cookies[] = request.getCookies();

		if (null != cookies) {
			for (int i = 0; i < cookies.length; i++) {
				Cookie cookie = cookies[i];
				if (cookie.getName().equals("DCDCDBName")) {
					DCDCDBName = cookie.getValue();
				}
			}
		}

	}
%>



<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>无标题文档</title>


<script src="js/jquery-1.12.3.min.js" type="text/javascript"></script>

<script src="js/echarts-all.js" type="text/javascript"></script>

<script src="js/getcurrenttime.js" type="text/javascript"></script>


<link href="skins/Aqua/css/ligerui-all.css" rel="stylesheet"
	type="text/css" />
<script src="js/ligerui/core/base.js" type="text/javascript"></script>
<script src="js/ligerui/ligerui.all.js" type="text/javascript"></script>

<script type="text/javascript" src="js/DCDCRemoteControl.js"></script>
<link href="Css/style.css" rel="stylesheet" type="text/css" />
<link href="Css/sharp.css" rel="stylesheet" type="text/css" />


</head>

<body style="background: #D1EEEE;">


	<!----------------------------------
显示登录信息 和登录时间
 ---------------------------------->
	<table width="99%" height="25" border="0" align="center"
		cellpadding="0" cellspacing="0" class="tableBorder"
		style="margin-bottom: 4px; border-collapse: collapse">
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
标题1
 ---------------------------------->

	<table width="99%" border="0" cellpadding="0" cellspacing="0"
		bordercolor="#84C1FF"
		style="margin-bottom: 10px; margin-left: 7px; border-collapse: collapse; margin-right: 7px">
		<tr>
			<td width="20%" style="padding-bottom: 0px">
				<table border="0" cellpadding="0" cellspacing="0"
					style="padding-bottom: 0px; border-collapse: collapse">
					<tr>
						<td width="1%" align="left" background="Images/b2.jpg"><img
							src="Picture/b1.jpg" width="10" height="26" alt="" /></td>
						<td width="4%" background="Images/b2.jpg" align="left"><img
							src="Picture/tz.gif" width="10" height="16" alt="" /></td>
						<td width="64%" align="left" background="Images/b2.jpg"
							class="biao">装置信息</td>
						<td width="31%" align="right" background="Images/b2.jpg"><img
							src="Picture/b3.jpg" width="9" height="26" alt="" /></td>
					</tr>
				</table>

			</td>
			<td width="5%"></td>

			<td width="65%" style="padding-bottom: 0px">
				<table border="0" cellpadding="0" cellspacing="0"
					style="padding-bottom: 0px; border-collapse: collapse">
					<tr>
						<td width="1%" align="left" background="Images/b2.jpg"><img
							src="Picture/b1.jpg" width="10" height="26" alt="" /></td>
						<td width="3%" background="Images/b2.jpg" align="left"><img
							src="Picture/tz.gif" width="10" height="16" alt="" /></td>
						<td width="64%" align="left" background="Images/b2.jpg"
							class="biao">运行信息</td>
						<td width="31%" align="right" background="Images/b2.jpg"><img
							src="Picture/b3.jpg" width="9" height="26" alt="" /></td>
					</tr>
				</table>

			</td>
		</tr>


		<tr>
			<td width="20%" align="right" style="border-collapse: collapse;">

				<table width="100%" border="1" bordercolor="#84C1FF" align="left"
					cellpadding="0" cellspacing="0"
					style="border-collapse: collapse; margin-top: 0px; padding-top: 0px">

					<tr>

						<td width="20%" height="37" width="40%" class="biao"
							bgcolor="#FFF9DF" align="center">名称:</td>
						<td width="30%" height="30" width="40%" class="biao"
							bgcolor="#FFF9DF" id="DCDCDBName" align="center"><%=DCDCDBName%></td>
						<td width="40%" rowspan="5" width="60%" align="center"><img
							src="Picture/dcdc.png" width="80" height="125" alt="" /></td>
					</tr>
					<tr>
						<td width="20%" height="37" width="40%" class="biao"
							bgcolor="#FFF9DF" align="center">位置:</td>
						<td width="30%" height="25" width="40%" class="biao"
							bgcolor="#FFF9DF" align="center">交流微网</td>
					</tr>
					<tr>
						<td width="20%" height="37" width="40%" class="biao"
							bgcolor="#FFF9DF" align="center">其他:</td>
						<td width="30%" height="25" width="40%" class="biao"
							bgcolor="#FFF9DF" align="center"></td>
					</tr>

					<tr>
						<td width="20%" height="37" width="40%" class="biao"
							bgcolor="#FFF9DF" align="center">种类:</td>
						<td width="30%" height="25" width="40%" class="biao"
							bgcolor="#FFF9DF" align="center"></td>
					</tr>

				</table>
			</td>

			<td width="5%"></td>

			<td width="65%">

				<table width="100%" border="1" align="left" cellpadding="0"
					cellspacing="0" bordercolor="#84C1FF"
					style="border-collapse: collapse">

					<tr>
						<td height="20" colspan="2 " align="center" bgcolor="#FFF9DF"
							bordercolor="#84C1FF" class="biao">回路1</td>
						<td colspan="2 " align="center" bgcolor="#FFF9DF"
							bordercolor="#84C1FF" class="biao">回路2</td>
						<td colspan="2 " align="center" bgcolor="#FFF9DF"
							bordercolor="#84C1FF" class="biao">回路3</td>
					</tr>

					<tr>
						<td width="8%" align="center" bgcolor="#FFF9DF"
							bordercolor="#84C1FF" class="biao">工作状态</td>
						<td width="25%" align="center" bgcolor="#FFF9DF"
							bordercolor="#84C1FF">
							<table border="0" cellpadding="3" cellspacing="2"
								style="border-collapse: collapse">
								<tr>
									<td><div align="center" id="loop1start" class="square"
											style="height: 18px; width: 18px"></div></td>
									<td><div align="center" id="loop1wait" class="square"
											style="height: 18px; width: 18px"></div></td>
									<td><div align="center" id="loop1stop" class="square"
											style="height: 18px; width: 18px; background: #7fee1d;"></div>
									</td>
								</tr>
								<tr>
									<td>开机</td>
									<td>待机</td>
									<td>关机</td>
								</tr>
							</table>
						</td>
						<td width="8%" align="center" bgcolor="#FFF9DF"
							bordercolor="#84C1FF" class="biao">工作状态</td>
						<td width="25%" align="center" bgcolor="#FFF9DF"
							bordercolor="#84C1FF">
							<table border="0" cellpadding="3" cellspacing="2"
								style="border-collapse: collapse">
								<tr>
									<td><div align="center" id="loop2start" class="square"
											style="height: 18px; width: 18px"></div></td>
									<td><div align="center" id="loop2wait" class="square"
											style="height: 18px; width: 18px"></div></td>
									<td><div align="center" id="loop2stop" class="square"
											style="height: 18px; width: 18px; background: #7fee1d;"></div>
									</td>
								</tr>
								<tr>
									<td>开机</td>
									<td>待机</td>
									<td>关机</td>
								</tr>
							</table>
						</td>
						<td width="10%" class="biao" align="center" bgcolor="#FFF9DF"
							bordercolor="#84C1FF">工作状态</td>
						<td width="25%" align="center" bgcolor="#FFF9DF"
							bordercolor="#84C1FF">
							<table border="0" cellpadding="3" cellspacing="2"
								style="border-collapse: collapse">
								<tr>
									<td><div align="center" id="loop3start" class="square"
											style="height: 18px; width: 18px"></div></td>
									<td><div align="center" id="loop3wait" class="square"
											style="height: 18px; width: 18px"></div></td>
									<td><div align="center" id="loop3stop" class="square"
											style="height: 18px; width: 18px; background: #7fee1d;"></div>
									</td>
								</tr>
								<tr>
									<td>开机</td>
									<td>待机</td>
									<td>关机</td>
								</tr>
							</table>
						</td>
					</tr>

					<tr>
						<td align="center" bgcolor="#FFF9DF" bordercolor="#84C1FF"
							class="biao">运行状态</td>
						<td align="center" bgcolor="#FFF9DF" bordercolor="#84C1FF">
							<table border="0" bordercolor="#84C1FF" cellpadding="3"
								cellspacing="2" style="border-collapse: collapse">
								<tr>
									<td><div align="center" id="loop1error" class="circle"
											style="height: 18px; width: 18px"></div></td>
									<td><div align="center" id="loop1normal" class="circle"
											style="height: 18px; width: 18px; background: #7fee1d;"></div>
									</td>
									<td style="visibility: hidden;">具体故障</td>
								</tr>
								<tr>
									<td>故障</td>
									<td>正常</td>
								</tr>
							</table>
						</td>
						<td align="center" bgcolor="#FFF9DF" bordercolor="#84C1FF"
							class="biao">运行状态</td>
						<td align="center" bgcolor="#FFF9DF" bordercolor="#84C1FF">
							<table border="0" bordercolor="#84C1FF" cellpadding="3"
								cellspacing="2" style="border-collapse: collapse">
								<tr>
									<td><div align="center" id="loop2error" class="circle"
											style="height: 18px; width: 18px"></div></td>
									<td><div align="center" id="loop2normal" class="circle"
											style="height: 18px; width: 18px; background: #7fee1d;"></div>
									</td>
									<td style="visibility: hidden;">具体故障</td>
								</tr>
								<tr>
									<td>故障</td>
									<td>正常</td>
								</tr>
							</table>
						</td>
						<td align="center" bgcolor="#FFF9DF" bordercolor="#84C1FF"
							class="biao">运行状态</td>
						<td align="center" bgcolor="#FFF9DF" bordercolor="#84C1FF">
							<table border="0" cellpadding="3" cellspacing="2"
								style="border-collapse: collapse">
								<tr>
									<td><div align="center" id="loop3error" class="circle"
											style="height: 18px; width: 18px"></div></td>
									<td><div align="center" id="loop3normal" class="circle"
											style="height: 18px; width: 18px; background: #7fee1d;"></div>
									</td>
									<td style="visibility: hidden;">具体故障</td>
								</tr>
								<tr>
									<td>故障</td>
									<td>正常</td>
								</tr>
							</table>
						</td>
					</tr>

					<tr>
						<td align="center" bgcolor="#FFF9DF" bordercolor="#84C1FF"
							class="biao">运行模式</td>
						<td align="center" bgcolor="#FFF9DF" bordercolor="#84C1FF">
							<table border="0" cellpadding="1" cellspacing="1"
								style="border-collapse: collapse">
								<tr>
									<td><div align="center" id="loop1BUCK" class="square"
											style="height: 18px; width: 18px"></div></td>
									<td><div align="center" id="loop1BOOST" class="square"
											style="height: 18px; width: 18px; background: #7fee1d;"></div>
									</td>
									<td><div align="center" id="loop1MPPT" class="square"
											style="height: 18px; width: 18px"></div></td>
								</tr>
								<tr>
									<td>BUCK</td>
									<td>BOOST</td>
									<td>Mppt</td>
								</tr>
							</table>
						</td>
						<td align="center" bgcolor="#FFF9DF" bordercolor="#84C1FF"
							class="biao">运行模式</td>
						<td align="center" bgcolor="#FFF9DF" bordercolor="#84C1FF">
							<table border="0" cellpadding="1" cellspacing="1"
								style="border-collapse: collapse">
								<tr>
									<td><div align="center" id="loop2BUCK" class="square"
											style="height: 18px; width: 18px"></div></td>
									<td><div align="center" id="loop2BOOST" class="square"
											style="height: 18px; width: 18px; background: #7fee1d;"></div>
									</td>
									<td><div align="center" id="loop2MPPT" class="square"
											style="height: 18px; width: 18px"></div></td>
								</tr>
								<tr>
									<td>BUCK</td>
									<td>BOOST</td>
									<td>Mppt</td>
								</tr>
							</table>
						</td>
						<td align="center" bgcolor="#FFF9DF" bordercolor="#84C1FF"
							class="biao">运行模式</td>
						<td align="center" bgcolor="#FFF9DF" bordercolor="#84C1FF">
							<table border="0" cellpadding="1" cellspacing="1"
								style="border-collapse: collapse">
								<tr>
									<td><div align="center" id="loop3BUCK" class="square"
											style="height: 18px; width: 18px"></div></td>
									<td><div align="center" id="loop3BOOST" class="square"
											style="height: 18px; width: 18px; background: #7fee1d;"></div>
									</td>
									<td><div align="center" id="loop3MPPT" class="square"
											style="height: 18px; width: 18px"></div></td>
								</tr>
								<tr>
									<td>BUCK</td>
									<td>BOOST</td>
									<td>Mppt</td>
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
				src="Picture/b1.jpg" width="10" height="26" alt="" /></td>
			<td width="68%" background="Images/b2.jpg">
				<table width="211" border="0" align="left" cellpadding="0"
					cellspacing="0">
					<tr>
						<td width="20" align="left"><img src="Picture/tz.gif"
							width="10" height="16" alt="" /></td>
						<td width="191" align="left" class="biao">DC/DC远程控制</td>
					</tr>
				</table>
			</td>
			<td width="31%" align="right" background="Images/b2.jpg"><img
				src="Picture/b3.jpg" width="9" height="26" alt="" /></td>
		</tr>
	</table>

	<table width="99%" border="1" bordercolor="#84C1FF"
		style="border-collapse: collapse; margin-left: 7px">
		<tr height="35">
			<td width="25%" align="center" bgcolor="#FFF9DF"
				style="font-size: 14px; font-weight: bold; color: #0072E3">回路1模式选择</td>
			<td align="center"><select name="" id="look1mode"
				style="height: 35px; width: 150px; font-size: 14px; font-weight: bold; color: #6C6C6C">
					<option value="">请选择模式</option>
					<option value="1">BOOST</option>
					<option value='2'>BUCK</option>
					<option value='3'>MPPT</option>
			</select></td>
			<td width="25%" align="center" bgcolor="#FFF9DF"
				style="font-size: 14px; font-weight: bold; color: #0072E3">回路2模式选择</td>
			<td align="center"><select name="" id="look2mode"
				style="height: 35px; width: 150px; font-size: 14px; font-weight: bold; color: #6C6C6C">
					<option value="">请选择模式</option>
					<option value="1">BOOST</option>
					<option value='2'>BUCK</option>
					<option value='3'>MPPT</option>
			</select></td>
			<td width="25%" align="center" bgcolor="#FFF9DF"
				style="font-size: 14px; font-weight: bold; color: #0072E3">回路3模式选择</td>
			<td align="center"><select name="" id="look3mode"
				style="height: 35px; width: 150px; font-size: 14px; font-weight: bold; color: #6C6C6C">
					<option value="">请选择模式</option>
					<option value="1">BOOST</option>
					<option value='2'>BUCK</option>
					<option value='3'>MPPT</option>
			</select></td>
			<td width="25%" align="center" bgcolor="#FFF9DF"><input
				type="button" name="" id="" value="故障复归" class="scbtn2"
				onclick="DCDCFaultRecovery();"></td>
		</tr>

		<tr height="35">
			<td width="25%" align="center" bgcolor="#FFF9DF" colspan="2"><input
				type="button" name="look1startbutton" id="look1startbutton"
				value="回路1开机" class="scbtn2" onclick="DCDCStart(1);"></td>
			<td width="25%" align="center" bgcolor="#FFF9DF" colspan="2"><input
				type="button" name="look2startbutton" id="look2startbutton"
				value="回路2开机" class="scbtn2" onclick="DCDCStart(2);"></td>
			<td width="25%" align="center" bgcolor="#FFF9DF" colspan="2"><input
				type="button" name="look3startbutton" id="look3startbutton"
				value="回路3开机" class="scbtn2" onclick="DCDCStart(3);"></td>
			<td width="25%" align="center" bgcolor="#FFF9DF"><input
				type="button" name="" id="" value="远程" class="scbtn2" onclick=""></td>
		</tr>

		<tr height="35">
			<td width="12%" align="center" bgcolor="#FFF9DF"><input
				type="button" name="look1stopbutton" id="look1stopbutton" value="停机"
				class="scbtn2" onclick="DCDCStop(0);"></td>
			<td width="12%" align="center" bgcolor="#FFF9DF"><input
				type="button" name="look1waitbutton" id="look1waitbutton" value="待机"
				class="scbtn2" onclick="DCDCWait(10);"></td>
			<td width="12%" align="center" bgcolor="#FFF9DF"><input
				type="button" name="look2stopbutton" id="look2stopbutton" value="停机"
				class="scbtn2" onclick="DCDCStop(1);"></td>
			<td width="12%" align="center" bgcolor="#FFF9DF"><input
				type="button" name="look2waitbutton" id="look2waitbutton" value="待机"
				class="scbtn2" onclick="DCDCWait(11);"></td>
			<td width="12%" align="center" bgcolor="#FFF9DF"><input
				type="button" name="look3stopbutton" id="look3stopbutton" value="停机"
				class="scbtn2" onclick="DCDCStop(2);"></td>
			<td width="12%" align="center" bgcolor="#FFF9DF"><input
				type="button" name="look3waitbutton" id="look4waitbutton" value="待机"
				class="scbtn2" onclick="DCDCWait(12);"></td>
			<td width="12%" align="center" bgcolor="#FFF9DF"><input
				type="button" name="" id="" value="就地" class="scbtn2" onclick=""></td>
		</tr>

		<tr height="35">
			<td width="12%" align="center" bgcolor="#FFF9DF"><input
				type="button" name="look1voltagebutton" id="look1voltagebutton"
				value="恒压控制" class="scbtn2" onclick="DCDCVoltage(4);"></td>
			<td width="12%" align="center" bgcolor="#FFF9DF"><input
				type="text" name="look1voltagenum" id="look1voltagenum" value=""
				class="scinput1"></td>
			<td width="12%" align="center" bgcolor="#FFF9DF"><input
				type="button" name="look2voltagebutton" id="look2voltagebutton"
				value="恒压控制" class="scbtn2" onclick="DCDCVoltage(5);"></td>
			<td width="12%" align="center" bgcolor="#FFF9DF"><input
				type="text" name="look2voltagenum" id="look2voltagenum" value=""
				class="scinput1"></td>
			<td width="12%" align="center" bgcolor="#FFF9DF"><input
				type="button" name="look3voltagebutton" id="look3voltagebutton"
				value="恒压控制" class="scbtn2" onclick="DCDCVoltage(6);"></td>
			<td width="12%" align="center" bgcolor="#FFF9DF"><input
				type="text" name="look3voltagenum" id="look3voltagenum" value=""
				class="scinput1"></td>
			<td width="12%" align="center" bgcolor="#FFF9DF"><input
				type="button" name="" id="" value="扩展按钮" class="scbtn2" onclick=""></td>
		</tr>

		<tr height="35">
			<td width="12%" align="center" bgcolor="#FFF9DF"><input
				type="button" name="look1currentbutton" id="look1currentbutton"
				value="恒流控制" class="scbtn2" onclick="DCDCCurrent(7);"></td>
			<td width="12%" align="center" bgcolor="#FFF9DF"><input
				type="text" name="look1currentnum" id="look1currentnum" value=""
				class="scinput1"></td>
			<td width="12%" align="center" bgcolor="#FFF9DF"><input
				type="button" name="look2currentbutton" id="look2currentbutton"
				value="恒流控制" class="scbtn2" onclick="DCDCCurrent(8);"></td>
			<td width="12%" align="center" bgcolor="#FFF9DF"><input
				type="text" name="look2currentnum" id="look2currentnum" value=""
				class="scinput1"></td>
			<td width="12%" align="center" bgcolor="#FFF9DF"><input
				type="button" name="look3currentbutton" id="look3currentbutton"
				value="恒流控制" class="scbtn2" onclick="DCDCCurrent(9);"></td>
			<td width="12%" align="center" bgcolor="#FFF9DF"><input
				type="text" name="look3currentnum" id="look3currentnum" value=""
				class="scinput1"></td>
			<td width="12%" align="center" bgcolor="#FFF9DF"><input
				type="button" name="" id="" value="扩展按钮" class="scbtn2" onclick=""></td>
		</tr>


	</table>



	<table width="99%" border="0" cellpadding="1" cellspacing="0"
		style="margin-left: 7px; margin-top: 10px">
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



	<table width="99%" border="1" align="center" cellpadding="3"
		cellspacing="1" bgcolor="#AEDEF4" bordercolor="#D1EEEE"
		style="border-collapse: collapse">

		<tr>
			<td width="33%">
				<table width="100%" border="1" cellpadding="0" cellspacing="0"
					style="border-collapse: collapse">
					<tr>
						<td width="50%" class="biao" height="25">高压侧电容电压</td>
						<td width="50%" id="HighVoltageCapacitorVoltage" align="center"
							class="biaontext"></td>
					</tr>
					<tr>
						<td width="50%" class="biao" height="25">压高压侧端口电压</td>
						<td width="50%" id="HighVoltagePortVoltage" align="center"
							class="biaontext"></td>
					</tr>

				</table>


			</td>
			<!--  DC/DC高压侧  -->
			<td width="33%">
				<table bgcolor="#FFF9DF" width="100%" border="0">
					<tr>
						<td width="100%">
							<div id="DCHV"
								style="width: 100%; height: 150px; background-color: #E0FFFF"></div>
						</td>
					</tr>
				</table>
			</td>

			<td width="33%">
				<table width="100%" border="1" cellpadding="0" cellspacing="0"
					style="border-collapse: collapse">
					<tr>
						<td width="50%" class="biao" height="25">高压侧总电流</td>
						<td width="50%" id="HighVoltageTotalCurrent" align="center"></td>
					</tr>
					<tr>
						<td width="50%" class="biao" height="25">高压侧功率</td>
						<td width="50%" id="HighVoltagePower" align="center"></td>
					</tr>
					<tr>
						<td width="50%" class="biao" height="25">母线电流</td>
						<td width="50%" id="BusCurrent" align="center"></td>
					</tr>

				</table>
			</td>


		</tr>


		<tr>
			<!--  DC/DC低压侧L1  -->
			<td width="33%">
				<table bgcolor="#FFF9DF" width="100%" border="0">
					<tr>
						<td width="100%">
							<div id="DCL1V"
								style="width: 100%; height: 150px; background-color: #E0FFFF"></div>
						</td>
					</tr>
				</table>
			</td>
			<!--  DC/DC低压侧L2 -->
			<td width="33%">
				<table bgcolor="#FFF9DF" width="100%" border="0">
					<tr>
						<td width="100%">
							<div id="DCL2V"
								style="width: 100%; height: 150px; background-color: #E0FFFF"></div>
						</td>
					</tr>
				</table>
			</td>
			<!--  DC/DC低压侧L3 -->
			<td width="33%">
				<table bgcolor="#FFF9DF" width="100%" border="0">
					<tr>
						<td width="100%">
							<div id="DCL3V"
								style="width: 100%; height: 150px; background-color: #E0FFFF"></div>
						</td>
					</tr>
				</table>
			</td>
		</tr>

		<tr>
			<td width="33%" style="border-collapse: collapse">
				<table width="100%" border="1" cellpadding="0" cellspacing="0"
					style="border-collapse: collapse">
					<tr>
						<td width="25%" class="biao" height="25">回路1低压端口电压</td>
						<td width="25%" id="Loop1PortVoltage" align="center"></td>


					</tr>

					<tr>
						<td width="25%" class="biao" height="25">回路1低压电容电压</td>
						<td width="25%" id="Loop1CapacitorVoltage" align="center"></td>



					</tr>
					<tr>
						<td width="25%" class="biao" height="25">回路1低压端口电流</td>
						<td width="25%" id="Loop1PortCurrent" align="center"></td>


					</tr>
					<tr>
						<td width="25%" class="biao" height="25">回路1电感电流</td>
						<td width="25%" id="Loop1InductorCurrent" align="center"></td>


					</tr>
					<tr>
						<td width="25%" class="biao" height="25">回路1低压功率</td>
						<td width="25%" id="Loop1Power" align="center"></td>

					</tr>
				</table>
			</td>

			<td>
				<table width="100%" border="1" cellpadding="0" cellspacing="0"
					style="border-collapse: collapse">
					<tr>
						<td width="25%" class="biao" height="25">回路2低压端口电压</td>
						<td width="25%" id="Loop2PortVoltage" align="center"></td>


					</tr>

					<tr>
						<td width="25%" class="biao" height="25">回路2低压电容电压</td>
						<td width="25%" id="Loop2CapacitorVoltage" align="center"></td>



					</tr>
					<tr>
						<td width="25%" class="biao" height="25">回路2低压端口电流</td>
						<td width="25%" id="Loop2PortCurrent" align="center"></td>


					</tr>
					<tr>
						<td width="25%" class="biao" height="25">回路2电感电流</td>
						<td width="25%" id="Loop2InductorCurrent" align="center"></td>


					</tr>
					<tr>
						<td width="25%" class="biao" height="25">回路2低压功率</td>
						<td width="25%" id="Loop2Power" align="center"></td>

					</tr>
				</table>
			</td>

			<td>
				<table width="100%" border="1" cellpadding="0" cellspacing="0"
					style="border-collapse: collapse">
					<tr>
						<td width="25%" class="biao" height="25">回路3低压端口电压</td>
						<td width="25%" id="Loop3PortVoltage" align="center"></td>


					</tr>

					<tr>
						<td width="25%" class="biao" height="25">回路3低压电容电压</td>
						<td width="25%" id="Loop3CapacitorVoltage" align="center"></td>



					</tr>
					<tr>
						<td width="25%" class="biao" height="25">回路3低压端口电流</td>
						<td width="25%" id="Loop3PortCurrent" align="center"></td>


					</tr>
					<tr>
						<td width="25%" class="biao" height="25">回路3电感电流</td>
						<td width="25%" id="Loop3InductorCurrent" align="center"></td>


					</tr>
					<tr>
						<td width="25%" class="biao" height="25">回路3低压功率</td>
						<td width="25%" id="Loop3Power" align="center"></td>

					</tr>
				</table>
			</td>

		</tr>
	</table>





	<!-- <table width="99%" border="0" cellpadding="1" cellspacing="0" style="margin-left: 7px;margin-top: 10px" >
          <tr>
            <td width="1%" align="left" background="Images/b2.jpg"><img src="Picture/b1.jpg" width="10" height="26" /></td>
            <td width="68%" background="Images/b2.jpg">
            <table width="211" border="0" align="left" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="20" align="left"><img src="Picture/tz.gif" width="10" height="16" /></td>
                  <td width="191" align="left" class="biao">PCS装置-图表显示</td>
                </tr>
            </table>
            </td>
            <td width="31%" align="right" background="Images/b2.jpg"><img src="Picture/b3.jpg" width="9" height="26" /></td>
          </tr>
</table>
     
  <table width="99%" border="0" align="center" cellpadding="3" cellspacing="1" bgcolor="#AEDEF4">  
  <tr>
     <td width="100%" bgcolor="#FFFFFF" >
     
     <table  width="100%">
     <tr>
     <td width="100%" bgcolor="#FFFFFF" align="center"><div id="DC" style="width: 90%;height:360px;background-color:#E0FFFF "></div></td>
     
     </tr>
     
     <tr>
     <td width="100%" bgcolor="#FFFFFF" align="center"><div id="ASD" style="width: 90%;height:360px;background-color:#E0FFFF "></div></td>
     </tr>
     
  
   
    </table>
    
    </td>
    </tr>
     
</table> -->

</body>
<script type="text/javascript" src="js/myChartDCDC.js"></script>
<script type="text/javascript" src="js/CheckOrderFinish.js"></script>

</html>