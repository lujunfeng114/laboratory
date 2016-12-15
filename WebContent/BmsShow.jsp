<%@ page contentType="text/html;charset=UTF-8"%>
<%@ page language="java" pageEncoding="UTF-8"%>
<%@ page import="java.sql.*,com.lyq.bean.DB"%>
<%
	String BMSDBName = request.getParameter("bmsnum");

	if (BMSDBName != null) //
	{
		String cookieName = "BMSDBName";
		Cookie cookie = new Cookie(cookieName, BMSDBName);
		response.addCookie(cookie);
	} else {
		Cookie cookies[] = request.getCookies();

		if (null != cookies) {
			for (int i = 0; i < cookies.length; i++) {
				Cookie cookie = cookies[i];
				if (cookie.getName().equals("BMSDBName")) {
					BMSDBName = cookie.getValue();
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
			<td width="40%" style="padding-bottom: 0px">
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
			<td width="10%"></td>

			<td width="60%" style="padding-bottom: 0px">
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
			<td width="40%" align="right"
				style="margin-top: 0px; padding-top: 0px">

				<table width="100%" border="1" bordercolor="#84C1FF" align="left"
					cellpadding="0" cellspacing="0"
					style="border-collapse: collapse; margin-top: 0px; padding-top: 0px">

					<tr>

						<td width="30%" height="25" width="40%" class="biao"
							bgcolor="#FFF9DF" align="center">名称:</td>
						<td width="30%" height="25" width="40%" class="biao"
							bgcolor="#FFF9DF" id="bmsdbname" align="center"><%=BMSDBName%></td>
						<td width="40%" rowspan="5" width="60%" align="center"><img
							src="Picture/bms.png" width="80" height="125" alt="" /></td>
					</tr>
					<tr>
						<td width="30%" height="25" width="40%" class="biao"
							bgcolor="#FFF9DF" align="center">位置:</td>
						<td width="30%" height="25" width="40%" class="biao"
							bgcolor="#FFF9DF" align="center">交流微网</td>
					</tr>
					<tr>
						<td width="30%" height="25" width="40%" class="biao"
							bgcolor="#FFF9DF" align="center">其他:</td>
						<td width="30%" height="25" width="40%" class="biao"
							bgcolor="#FFF9DF" align="center"></td>
					</tr>

					<tr>
						<td width="30%" height="25" width="40%" class="biao"
							bgcolor="#FFF9DF" align="center">种类:</td>
						<td width="30%" height="25" width="40%" class="biao"
							bgcolor="#FFF9DF" align="center"></td>
					</tr>

				</table>
			</td>

			<td width="10%"></td>

			<td width="50%">

				<table width="100%" border="1" align="left" cellpadding="0"
					cellspacing="0" bordercolor="#84C1FF"
					style="border-collapse: collapse">

					<tr>

						<td width="30%" rowspan="3" align="center" bgcolor="#FFF9DF"
							bordercolor="#84C1FF"><img src="Picture/batter.png"
							width="70" height="110" alt="" /></td>
						<td>

							<table width="100%" border="0" align="left" cellpadding="0"
								cellspacing="0" bordercolor="#84C1FF"
								style="border-collapse: collapse">
								<tr>
									<td width="30%" class="biao" align="center" bgcolor="#FFF9DF">开机状态：</td>
									<td width="40%" align="center">
										<table border="0" cellpadding="3" cellspacing="2"
											style="border-collapse: collapse">
											<tr>
												<td><div align="center" id="start" class="square"
														style="height: 18px; width: 18px"></div></td>
												<td><div align="center" id="wait" class="square"
														style="height: 18px; width: 18px"></div></td>
												<td><div align="center" id="stop" class="square"
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
							</table>
						</td>
					</tr>

					<tr>

						<td>
							<table width="100%" border="0" align="left" cellpadding="0"
								cellspacing="0" bordercolor="#84C1FF"
								style="border-collapse: collapse">
								<tr>
									<td width="30%" class="biao" align="center" bgcolor="#FFF9DF">运行模式
									</td>
									<td width="40%" align="center">
										<table border="0" cellpadding="3" cellspacing="2"
											style="border-collapse: collapse">
											<tr>
												<td><div align="center" id="mode1" class="square"
														style="height: 18px; width: 18px"></div></td>
												<td><div align="center" id="mode2" class="square"
														style="height: 18px; width: 18px"></div></td>
											</tr>
											<tr>
												<td>充电</td>
												<td>放电</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
						</td>
					</tr>

					<tr>

						<td>

							<table width="100%" border="0" align="left" cellpadding="0"
								cellspacing="0" bordercolor="#84C1FF"
								style="border-collapse: collapse">
								<tr>

									<td width="30%" class="biao" align="center" bgcolor="#FFF9DF">故障
									</td>
									<td width="40%" align="center">
										<table border="0" cellpadding="3" cellspacing="2"
											style="border-collapse: collapse">
											<tr>
												<td><div align="center" id="error" class="circle"
														style="height: 18px; width: 18px; background: #FF0000"></div>
												</td>
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
							</table>
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
		cellspacing="1" bgcolor="#AEDEF4" bordercolor="#D1EEEE">

		<tr>
			<td width="50%">
				<table bgcolor="#FFF9DF" width="100%">
					<tr>
						<td width="100%">
							<div id="DCV"
								style="width: 100%; height: 150px; background-color: #E0FFFF"></div>
						</td>

					</tr>
				</table>
			</td>

			<td width="50%" rowspan="2">
				<table bgcolor="#FFF9DF" width="100%" border="1" cellpadding="0"
					cellspacing="0" bordercolor="#D1EEEE"
					style="border-collapse: collapse">
					<tr>
						<td height="51" width="25%" align="center" bgcolor="#FFF9DF">直流电压(V)</td>
						<td width="25%" align="center" valign="middle" bgcolor="#FFFFFF"
							class="t5"><div align="center" id="TotalVoltage"></div></td>
						<td width="25%" align="center" valign="middle" bgcolor="#FFF9DF">直流电流(A)</td>
						<td width="25%" align="center" valign="middle" bgcolor="#FFFFFF"
							class="t5">
							<div align="center" id="TotalCurrent">&nbsp;</div>
						</td>


					</tr>
					<tr>
						<td height="50" width="25%" align="center" bgcolor="#FFF9DF">SOH(%)</td>
						<td width="25%" align="center" valign="middle" bgcolor="#FFFFFF"
							class="t5"><div align="center" id="SOH"></div></td>
						<td width="25%" align="center" valign="middle" bgcolor="#FFF9DF">SOC(%)</td>
						<td width="25%" align="center" valign="middle" bgcolor="#FFFFFF"
							class="t5">
							<div align="center" id="SOC">&nbsp;</div>
						</td>
					</tr>

					<tr>
						<td height="50" width="25%" align="center" bgcolor="#FFF9DF">单体最高电压(V)</td>
						<td width="25%" align="center" valign="middle" bgcolor="#FFFFFF"
							class="t5"><div align="center" id="SingleMaxVoltage"></div>
						</td>
						<td width="25%" align="center" valign="middle" bgcolor="#FFF9DF">位置编号</td>
						<td width="25%" align="center" valign="middle" bgcolor="#FFFFFF"
							class="t5">
							<div align="center" id="">&nbsp;</div>
						</td>

					</tr>
					<tr>
						<td height="50" align="center" bgcolor="#FFF9DF"
							id="SingleMinVoltag">单体最低电压(V)</td>
						<td align="center" valign="middle" bgcolor="#FFFFFF" class="t5"><div
								align="center" id="SingleMinVoltage"></div></td>
						<td align="center" bgcolor="#FFF9DF">位置编号</td>
						<td colspan="1" align="center" valign="middle" bgcolor="#FFFFFF"
							class="t5"><div align="center" id=""></div></td>

					</tr>
					<tr height="25%">
						<td height="50" width="8%" height="25" align="center"
							bgcolor="#FFF9DF">单体最高温度(℃)</td>
						<td width="95" align="center" valign="middle" bgcolor="#FFFFFF"
							class="t5"><div align="center" id="SingleMaxTemperature"></div>
						</td>
						<td align="center" bgcolor="#FFF9DF">位置编号</td>
						<td colspan="1" align="center" valign="middle" bgcolor="#FFFFFF"
							class="t5"><div align="center" id="">&nbsp;</div></td>
					</tr>
					<tr>
						<td height="50" width="25%" align="center" bgcolor="#FFF9DF">单体最低温度(℃)</td>
						<td width="25%" align="center" valign="middle" bgcolor="#FFFFFF"
							class="t5"><div align="center" id="SingleMinTemperature"></div>
						</td>
						<td width="25%" align="center" valign="middle" bgcolor="#FFF9DF">位置编号</td>
						<td width="25%" align="center" valign="middle" bgcolor="#FFFFFF"
							class="t5">
							<div align="center" id="">&nbsp;</div>
						</td>
					</tr>

				</table>
			</td>

		</tr>


		<tr>
			<td width="30%">
				<table bgcolor="#FFF9DF" width="100%">
					<tr>
						<td width="100%">
							<div id="DCA"
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
			<td width="100%" bgcolor="#FFFFFF">

				<table width="100%">
					<tr>
						<td width="100%" bgcolor="#FFFFFF" align="center"><div
								id="DC"
								style="width: 90%; height: 360px; background-color: #E0FFFF"></div></td>

					</tr>

					<tr>
						<td width="100%" bgcolor="#FFFFFF" align="center"><div
								id="ASD"
								style="width: 90%; height: 360px; background-color: #E0FFFF"></div></td>
					</tr>



				</table>

			</td>
		</tr>


	</table>

</body>
<script type="text/javascript" src="js/myChartBMS.js"></script>

</html>