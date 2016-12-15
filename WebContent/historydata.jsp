<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>


<link href="Css/style.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" type="text/css" href="Css/tcal.css" />


<script src="js/jquery-1.12.3.min.js"></script>
<script src="js/echarts-all.js"></script>

<link href="skins/Aqua/css/ligerui-all.css" rel="stylesheet" type="text/css" />
<script src="js/ligerui/core/base.js" type="text/javascript"></script>
<script src="js/ligerui/ligerui.all.js" type="text/javascript"></script>

<script type="text/javascript" src="js/tcal.js"></script>
<script type="text/javascript" src="js/getcurrenttime.js"></script>
<script type="text/javascript" src="js/test2.js"></script>


</head>
<body>


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

	<table width="99%" border="0" align="center" cellpadding="0"
		cellspacing="0">
		<tr>
			<td width="1%" align="left" background="Images/b2.jpg"><img
				src="Picture/b1.jpg" width="10" height="26" /></td>
			<td width="68%" background="Images/b2.jpg">
				<table width="211" border="0" align="left" cellpadding="0"
					cellspacing="0">
					<tr>
						<td width="20" align="left"><img src="Picture/tz.gif"
							width="10" height="16" /></td>
						<td width="191" align="left" class="biao">装置-历史数据</td>
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
			<td align="center" bgcolor="#E2F7FE">
				<!--  <form id="form1" name="form1" method="post" action="HistoryDataServlet?action=gethistorydatas" > -->
				<table width="90%" border="0" cellspacing="1" cellpadding="3">

					<tr>
						<td width="6%" align="center"><label>装置：</label></td>

						<td width="14%" align="left"><select name="equipmentselect"
							id="equipmentselect">
								<option value="">全部</option>
								<option value="PCSInfo">PCS1</option>
								<option value='PCS2Info'>PCS2</option>
								<option value='PCS3Info'>PCS3</option>
								<option value='PCS4Info'>PCS4</option>
								<option value='PCS5Info'>PCS5</option>
								<option value='BmsAtlInfo'>BMSATL</option>
								<option value='BmsGaoTeQianSuanInfo'>BMS铁锂电</option>
								<option value='BmsGaoTeliDianInfo'>BMS铅酸</option>
								<option value='BmsJiXingInfo'>BMS集星</option>
								<option value='BmsKaiMaiInfo'>BMS凯麦</option>

						</select></td>

						<td width="6%" align="center"><label>类别：</label></td>
						<td width="14%" align="left"><select name="itemselect"
							id="itemselect">
								<option value='0'>全部</option>
								<option value='交流电压'>交流电压</option>
								<option value='交流电流'>交流电流</option>
								<option value='直流信息'>直流信息</option>
								<option value='功率'>功率</option>
						</select></td>

						<td width="6%" align="center"><label>间隔：</label></td>
						<td width="14%" align="left"><select name="selectrange"
							id="selectrange">
								<option value='1'>全部</option>
								<option value='10'>10s</option>
								<option value='20'>20s</option>
								<option value='30'>30s</option>
								<option value='60'>1分</option>
								<option value='300'>5分</option>
								<option value='600'>10分</option>
						</select></td>

						<td width="15%" height="25" align="center"><label>查询开始时间：</label></td>

						<td width="10%" align="center">
							<div>
								<input type="text" name="datastart" id="datastart" class="tcal" value="" />
							</div>
						</td>

						<td width="15%" height="25" align="center"><label>查询结束时间</label></td>

						<td width="10%" align="center">
							<div>
								<input type="text" name="dataend" id="dataend" class="tcal"  value="" />
							</div>
						</td>
						<TD width="2%"></TD>

						<td width="5%" align="right"><input type="button"
							name="Submit" id="dispaly" class="scbtn2" value="搜索" /></td>
					</tr>




				</table> <!--  </form> -->

			</td>
		</tr>
	</table>

	<!-- 为ECharts准备一个具备大小（宽高）的Dom -->

	<table width="100%">
		<tr>
			<td width="2%" bgcolor="FFF9DF"></td>
			<td width="90%" align="center">
				<div id="A"
					style="width: 100%; height: 460px; color: #E0FFFF; background-color: #E0FFFF"></div>
			</td>
			<td width="2%" bgcolor="FFF9DF"></td>
		</tr>

	</table>
	<script src="js/historydata.js"></script>
</body>
</html>