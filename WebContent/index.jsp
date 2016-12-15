<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<% String name = request.getParameter("username") ;
   String password= request.getParameter("password"); 
   String types= request.getParameter("tyeps");
   if( types.equals("1"))
	   types="管理员";
	   else if(types.equals("2"))
		   types="操作员";
	        else if(types.equals("3"))
		          types="访客";
	        else
	        	types="匿名";
 
   
   //保存登陆信息 供以后的页面使用  或许可以考虑 用cookie
  session.setAttribute("name",name );
  session.setAttribute("password",password );
  session.setAttribute("types",types ); 

%>



<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>首页</title>

<META http-equiv=Content-Type content="text/html; charset=utf-8">
<META content="Microsoft FrontPage 4.0" name=GENERATOR>
<style>
BODY {
	color: #111111;
	FONT-FAMILY: "宋体";
	FONT-SIZE: 12px;
	text-decoration: none;
	line-height: 150%;
	background: #ffffff;
	margin-left: 0px;
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
	SCROLLBAR-FACE-COLOR: #ffffff;
	SCROLLBAR-HIGHLIGHT-COLOR: #cccccc;
	SCROLLBAR-SHADOW-COLOR: #cccccc;
	SCROLLBAR-3DLIGHT-COLOR: #ffffff;
	SCROLLBAR-ARROW-COLOR: #cccccc;
	SCROLLBAR-TRACK-COLOR: #ffffff;
	SCROLLBAR-DARKSHADOW-COLOR: #ffffff;
}
</style>
</HEAD>
<frameset rows="96,*" cols="*" frameborder="no" border="0"
	framespacing="0">
	<frame src="top_teacher.html" name="topFrame" scrolling="No"
		noresize="noresize" id="topFrame" title="topFrame" />
	<frameset cols="170,*" frameborder="no" border="0" framespacing="0"
		name=content>
		<frame name=leftFrame marginWidth=0 marginHeight=0
			src="left_apply0.html" noResize scrolling=yes target="main" />
		<frame src="firstpage.html?stepback=n" name="main" id="main"
			title="main" marginWidth=0 marginHeight=0 />
	</frameset>
</frameset>
<noframes>
	<body>
	</body>
</noframes>


</HTML>