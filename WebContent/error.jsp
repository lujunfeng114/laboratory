<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<base href="<%=basePath%>">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

	<p1>抱歉！尊敬的<%=request.getParameter("username")%>用户您好。您登陆的用户名或密码错误，
	请返回重新登陆！ <br>
	<br>

	<p1>提示！默认用户名和密码为 123，其他请注册</p1>
	<br>
	<br>
	<a href="http://localhost:8080/javaweb/login.html">返回</a>
</body>
</html>