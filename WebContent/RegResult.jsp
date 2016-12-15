<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>


<%
	//String department = new String(request.getParameter("department").getBytes("ISO-8859-1"),"UTF-8") ;  
	//String truename = new String(request.getParameter("truename").getBytes("ISO-8859-1"),"UTF-8") ; 
	//String username = new String(request.getParameter("username").getBytes("ISO-8859-1"),"UTF-8") ; 
	//String password = new String(request.getParameter("password").getBytes("ISO-8859-1"),"UTF-8") ; 
	//String telphone = new String(request.getParameter("telphone").getBytes("ISO-8859-1"),"UTF-8") ; 
	//String resultline = new String(request.getParameter("resultline").getBytes("ISO-8859-1"),"UTF-8") ; 

	String department = request.getParameter("typefs");
	String truename = request.getParameter("truename");
	String username = request.getParameter("username");
	String password = request.getParameter("password");
	String telphone = request.getParameter("tel");
	String resultline = request.getAttribute("resultline").toString();

	String DEP = "aaa";
	if ("1".equals(department))
		DEP = "储能";
	else if ("2".equals(department))
		DEP = "太阳能";
	else if ("3".equals(department))
		DEP = "监控";
	else if ("4".equals(department))
		DEP = "外单位";
%>


</head>
<body>
	<P>注册结果显示：</P>
	<P>
		部门：<%=DEP%></P>
	<P>
		姓名：<%=truename%></P>
	<P>
		账号：<%=username%></P>
	<P>
		密码：<%=password%></P>
	<P>
		手机：<%=telphone%></P>
	<P>
		注册结果：<%=resultline%></P>
	<p>
		<a href="login.jsp" target="view_window">现在去登陆！</a>
	</p>
</body>
</html>