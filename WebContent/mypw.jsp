<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>无标题文档</title>

<script src="js/getcurrenttime.js"></script>
<script src="js/jquery-1.12.3.min.js"></script>
<script src="js/passwordchange.js"></script>

<link href="Css/layout.css" rel="stylesheet" type="text/css" />
<link href="Css/cb.css" rel="stylesheet" type="text/css" />
<link href="Css/n.css" rel="stylesheet" type="text/css" />

<style>
.biankuangs {
	border: solid #A6D2FF 1px;
	border-top: 0px;
	display:
}
</style>

</head>

<body>
	<table width="99%" height="25" border="0" align="center"
		cellpadding="0" cellspacing="0" style="margin-bottom: 4px;">
		<tr>
			<td width="17" background="Images/bj4.gif"><img
				src="Picture/r.gif" width="16" height="16" /></td>
			<td width="466" background="Images/bj4.gif">尊敬的<%=session.getAttribute("types") %><%=session.getAttribute("name") %>:你好！欢迎光临，当前时间是：<span
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
			<td width="68%" background="Images/b2.jpg"><table width="124"
					border="0" align="left" cellpadding="0" cellspacing="0">
					<tr>
						<td width="20" align="left"><img src="Picture/tz.gif"
							width="10" height="16" /></td>
						<td width="104" align="left" class="biao">修改密码</td>
					</tr>
				</table></td>
			<td width="31%" align="right" background="Images/b2.jpg"><img
				src="Picture/b3.jpg" width="9" height="26" /></td>
		</tr>
	</table>
	<form id="ModifyPassword" name="form1" method="post"
		action="RegServlet?action=Modify">
		<table width="99%" border="0" align="center" cellpadding="3"
			cellspacing="1" bgcolor="#AEDEF4">
			<tr>
				<td width="21%" height="25" align="right" bgcolor="#D6F2FD">账号&nbsp;</td>
				<td width="79%" bgcolor="#FFFFFF"><label> &nbsp; <input
						name="account" type="text" id="account"
						value="<%=session.getAttribute("name")%>">
				</label></td>
			</tr>
			<tr>
				<td width="21%" height="25" align="right" bgcolor="#D6F2FD">原密码&nbsp;</td>
				<td width="79%" bgcolor="#FFFFFF"><label> &nbsp; <input
						name="oldpw" type="text" id="oldpw" onblur="oldpassword()" />
				</label></td>
			</tr>
			<tr>
				<td height="25" align="right" bgcolor="#EFFBFE">新密码&nbsp;</td>
				<td bgcolor="#FFFFFF"><label> &nbsp; <input name="pw"
						type="password" id="pw" />
				</label></td>
			</tr>
			<tr>
				<td height="25" align="right" bgcolor="#D6F2FD">重复新密码&nbsp;</td>
				<td bgcolor="#FFFFFF"><label> &nbsp; <input name="pw2"
						type="password" id="pw2" onblur="checkpassword()" />
				</label></td>
			</tr>
			<tr>
				<td height="25" align="right" bgcolor="#D6F2FD"></td>
				<td colspan="2" align="center" bgcolor="#FFFFFF" height="25"><label>
						<input type="submit" name="Submit" title="如果无法修改，请联系管理员 ！"
						value="修改密码" />
				</label></td>
			</tr>
		</table>
	</form>
</body>
</html>