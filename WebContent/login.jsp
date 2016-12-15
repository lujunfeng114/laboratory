<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<%
	String resultline = request.getParameter("resultline");
%>


<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>中国电力科学研究院储能实验室登陆</title>
<link href="Css/style.css" rel="stylesheet" type="text/css" />
<script src="js/jquery-1.12.3.min.js"></script>
<style type="text/css">
<!--
.STYLE1 {
	color: #ffffff;
	font-size: 12px;
}

.STYLE4 {
	color: #8da8c3;
	font-size: 12px;
}

.STYLE6 {
	font-size: 12px;
	color: #5593ce;
}
-->
</style>
<link href="Css/layout.css" rel="stylesheet" type="text/css" />

<style type="text/css">
<!--
.STYLE7 {
	color: #00CCCC;
	font-family: "新宋体";
	font-weight: bold;
	font-size: xx-large;
}
-->
</style>
</head>

<body>
	<table width="100%" height="595" border="0" align="center"
		cellpadding="0" cellspacing="0" style="margin: 0px; padding: 0px">
		<tr>
			<td height="595" align="center" valign="top">
				<div id="formbackground"
					style="position: absolute; width: 100%; height: 100%; z-index: -1">
					<img src="Images/bj.gif" height="100%" width="100%" />
				</div>
				<table width="465" height="414" border="0" align="center"
					cellpadding="0" cellspacing="0">
					<tr>
						<td height="152" colspan="3" align="center" valign="middle"
							background="Picture/toplogin2.gif"></td>
					</tr>
					<tr>
						<td width="15" height="262" background="Images/bj1.gif">&nbsp;</td>
						<td width="420" valign="middle" background="Images/bj2.gif">
							<form id="form1" name="form1" method="post"
								action="LoginServlet?action=save" onsubmit="return check();">
								<table width="100%" height="170" border="0" align="center"
									cellpadding="0" cellspacing="0">
									<tr>
										<td width="31%" align="right"><span class="STYLE1">用户名：</span></td>
										<td colspan="3" align="left"><label> <input
												name="username" type="text" id="username" />
										</label></td>
									</tr>
									<tr>
										<td align="right"><span class="STYLE1">密码：</span></td>
										<td colspan="3" align="left"><label> <input
												name="password" type="password" id="password" />
										</label></td>
									</tr>
									<tr>
										<td align="right"><span class="STYLE1">身份：</span></td>
										<td colspan="3" align="left"><label> <select
												name="tyeps">
													<option value="">请选择...</option>
													<option value="1" selected="selected">管理员</option>
													<option value="2">操作员</option>
													<option value="3">访客</option>
											</select>
										</label></td>
									</tr>
									<tr>
										<td align="right"><span class="STYLE1">验证码：</span></td>
										<td align="left"><label> <input name="yz"
												type="text" id="yz" size="6" />
										</label></td>
										<td align="left"><img src="NumberServlet" alt="验证码"
											name="checkImg" id="checkImg"
											style="position: relative; left: 10px;"
											onClick="document.getElementById('checkImg').src='NumberServlet?temp='+ (new Date().getTime().toString(36)); return false" />
										</td>

									</tr>
									<tr>
										<td>&nbsp;</td>
										<td width="15%" valign="top"><p class="STYLE4">&nbsp;</p>
										</td>
										<td width="20%" align="right" valign="middle"><a
											href="/javaweb/reg.html"><span class="STYLE4">注册新用户</span></a><br />
											<br /> <span class="STYLE4">找回密码</span></td>
										<td width="34%" height="55" align="left"><a
											href="/index.jsp"> <input name="image" type="submit"
												style="background-image: url(Images/reg/login2.gif); background-repeat: no-repeat; width: 60px; height: 56px;"
												value="" ;/>
										</a></td>
									</tr>
								</table>
							</form>
						</td>
						<td width="13" background="Images/bj3.gif">&nbsp;</td>
					</tr>
				</table>
				<table width="465" height="76" border="0" cellpadding="0"
					cellspacing="0">
					<tr>
						<td height="100">&nbsp;</td>
					</tr>
				</table> <br />
				<table width="100%" height="64" border="0" cellpadding="0"
					cellspacing="0">
					<tr>
						<td height="64" align="center" valign="middle"><span
							class="STYLE6">版权所有:中国电力科学研究院南京分院 <br /> <br />
								地址：江苏省南京市鼓楼区路南瑞路8号 中国电科院储能实验室 邮编:210000
						</span></td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
</body>
<script>
function check(){
	f=document.form1;
	if(f.username.value==""){
		alert("请填写用户名");
		return false;
	}
	if(f.password.value==""){
		alert("请填写密码");
		return false;
	}
	if(f.tyeps.value==""){
		alert("请选择用户类型");
		return false;
	}
	if(f.yz.value==""){
		alert("请填写验证码");
		return false;
	}
	else
		{
	//	$.get("NumberServlet?temp="+ (new Date().getTime()),{ action: "OutNum", },  function(data){ alert("Data Loaded: " + data); });
		
		 <%-- <%String vcode=(String)session.getAttribute("vcode"); %>//获取存在SESSION中的验证码
		   alert("<%=vcode%>"); --%>
		
		<%-- if(f.yz.value!=<%=vcode%>) --%>
		
		//alert("验证码不正确！");
	  //  return false; 
		//	return false;
		}
};
</script>
</html>