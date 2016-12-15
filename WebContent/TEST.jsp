<%@ page language="Java" contentType="text/html; charset=utf-8" %>
<%@page import="java.io.OutputStream"%>
<%@page import="com.lyq.bean.TEST"%>
<%
 OutputStream os = response.getOutputStream(); // 取得输出流
 response.reset();// 清空输出流

 //不能用用中文设置 filename，会出错
response.setHeader("Content-disposition", "attachment; filename=student.xls");// 设定输出文件头
 response.setContentType("application/msexcel");// 定义输出类型
 
 TEST dccExp = new TEST();
 dccExp.createXls(os);
%><title>Insert title here</title>
</head>
<body>

</body>
</html>