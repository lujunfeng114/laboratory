<%@ page contentType="text/html;charset=GBK"%>
<%@ page language="java"    pageEncoding="UTF-8"%>
<%@ page import="java.sql.*,com.lyq.bean.DB" %>
<%String pcsname = request.getParameter("pcsnum"); 

String time1=(String)session.getAttribute("datastart");  //接收dobmspagedb 返回的信息 
String time2=(String)session.getAttribute("dataend");
String title=(String)session.getAttribute("pcsname"); 


if(pcsname == null)  //如果Dopagedb.jsp和apply.html页面返回pcsnum有值  则进行，防止 Dopagedb.jsp返回空的时候 
	{	
		
	Cookie cookies[] = request.getCookies(); 
	  if (null != cookies) {
		    for (int i = 0; i < cookies.length; i++) {
		       Cookie cookie = cookies[i];
		       if (cookie.getName().equals("pcsname")) {
		    	  pcsname = cookie.getValue();  
		       }
		    }
	  }
	}

DB db=new DB();
%>



<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title><%=pcsname %>数据显示页面</title>
<link rel="stylesheet" type="text/css" href="Css/tcal.css" />
<script type="text/javascript" src="js/tcal.js"></script> 
<!----------------------------------
 连接样式文件
 ---------------------------------->
 
<link href="skins/Aqua/css/ligerui-all.css" rel="stylesheet" type="text/css" />      
<link  href="Css/style.css" rel="stylesheet" type="text/css" />



<!----------------------------------
 查询函数
 ---------------------------------->
<script type="text/javascript" src="js/getcurrenttime.js"></script> 
<script  src="js/jquery-1.12.3.min.js"></script> 
<script src="js/ligerui/core/base.js" type="text/javascript"></script>  
<script src="js/ligerui/ligerui.all.js" type="text/javascript"></script>

<script language="javascript">

function check(){
	f=document.form1;
	if(f.pcsname.value==null){
		alert("请确保查询装置不能为空");
		return false;
	}
	
	if(f.datastart.value==""){
		alert("请输入查询启示时间");
		return false;
	}
	if(f.dataend.value==""){
		alert("请输入查询结束时间");
		return false;
	}
	
	//保存表单中的数据到cookie
	document.cookie="pcsname="+document.form1.pcsname.value;	  
	document.cookie="starttime="+document.form1.datastart.value;
	//alert(document.form1.datastart.value);
	document.cookie="endtime="+document.form1.dataend.value;
}



function jump()
{
	
	m=document.searchform;
	
	if(isNaN(parseInt(m.JumpSelect.value)) || parseInt(m.JumpSelect.value) < 1)
	{alert('输入错误，请重新输入！'); return false;} 
	location.href='dopagedb.jsp?currentpage='+m.JumpSelect.value; 
	

	}



</script>
</head>
<body>
<!----------------------------------
 显示登陆操作者的相关信息，显示登录 时间等
 ---------------------------------->
<table width="99%" height="25" border="0" align="center" cellpadding="0" cellspacing="0" style="margin-bottom:4px;">
      <tr >
        <td width="17" background="Images/bj4.gif"><img src="Picture/r.gif" width="16" height="16" /></td>
       <td width="466" background="Images/bj4.gif">尊敬的<%=session.getAttribute("types") %><%=session.getAttribute("name") %>:你好！欢迎光临，当前时间是：<span id="nowtime"></span>
        <td width="162" align="center" background="Images/bj4.gif">
		</td>           
      </tr>
</table>



<!----------------------------------
 显示搜素框的标题
 ---------------------------------->
<table width="99%" border="0" align="center" cellpadding="0" cellspacing="0">
          <tr>
            <td width="1%" align="left" background="Images/b2.jpg"><img src="Picture/b1.jpg" width="10" height="26" /></td>
            <td width="68%" background="Images/b2.jpg"><table width="124" border="0" align="left" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="20" align="left"><img src="Picture/tz.gif" width="10" height="16" /></td>
                  <td width="104" align="left" class="biao">条件搜索</td>
                </tr>
            </table></td>
            <td width="31%" align="right" background="Images/b2.jpg"><img src="Picture/b3.jpg" width="9" height="26" /></td>
          </tr>
</table>



<!----------------------------------
 显示搜素框和搜索条件选择
 ---------------------------------->
 <%
 
 %>
<table width="99%" border="0" align="center" cellpadding="3" cellspacing="1" bgcolor="#AEDEF4">
    <tr>
      <td align="center" bgcolor="#E2F7FE">
      
      <form id="form1" name="form1" method="post" action="dopagedb.jsp" onsubmit="return check()">
   	  <table width="75%" border="0" cellspacing="1" cellpadding="3">
   	  
       <tr>
        <td width="15%" >查询装置:</td>
        <td align="left"><input type="text" name="pcsname"  id="name" value="<%=pcsname%>" readonly="true" style="background-color:#E2F7FE "> </td>
           <td width="20%" height="25" align="center">查询开始时间：</td>
          
           <td width="10%" align="left">        	 
         	  <div><input type="text" name="datastart"  id="starttime" class="tcal" value=""/></div>
           </td >
           <td width="20%" height="25" align="center" >查询结束时间：</td>
           
           <td width="10%" align="left">
              <div><input type="text" name="dataend"  id="endtime" class="tcal" value="" /></div>
           </td>
           
          <td width="6%" align="center">时间：</td>
          
          <td width="14%" align="left">
	          <select name="applyyear" id="applyyear">
				 <option value="" >全部</option>
	             <option value='2009' >2009</option>
	             <option value='2010' >2010</option>
	             <option value='2011' >2011</option>
	             <option value='2012' >2012</option>
	             <option value='2013' >2013</option>
	             <option value='2008' >2008</option>
	             <option value='2014' >2014</option>
	             <option value='2015' >2015</option>
	             <option value='2016' >2016</option> 
	           </select></td>
           
          <td width="8%"><input type="submit" name="Submit" value="搜索" /></td>
        </tr>
      </table>
	  </form></td>
    </tr>
</table>

<!----------------------------------
 数据列表标题
 ---------------------------------->
<table width="50%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td height="5"></td>
  </tr>
</table>

  <table width="99%" border="0" align="center" cellpadding="0" cellspacing="0">
          <tr>
            <td width="1%" align="left" background="Images/b2.jpg"><img src="Picture/b1.jpg" width="10" height="26" /></td>
            <td width="68%" background="Images/b2.jpg"><table width="124" border="0" align="left" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="20" align="left"><img src="Picture/tz.gif" width="10" height="16" /></td>
                  <td width="104" align="left" class="biao">数据列表</td>
                </tr>
            </table></td>
            <td width="31%" align="right" background="Images/b2.jpg"><img src="Picture/b3.jpg" width="9" height="26" /></td>
          </tr>
</table>


<!----------------------------------
 显示搜索后的数据信息
 ---------------------------------->
 <form name="searchform" method="post" action="dopagedb.jsp">   
  <table width="99%" border="1" align="center" cellpadding="3" cellspacing="1" bgcolor="#AEDEF4" style="border:1px solid #AEDEF4">
    <tr>
    <td width="25" colspan="18" align="center" >查询表格：<%=title %> &nbsp查询时间：<%=time1 %> ~<%=time2 %></td>
    </tr>
    <tr>
      <td align="center" bgcolor="#FFF9DF">序号</td>
      <td align="center" bgcolor="#FFF9DF">PID</td>
      <td align="center" bgcolor="#FFF9DF">AVoltage</td>
      <td align="center" bgcolor="#FFF9DF">BVoltage</td>
	  <td align="center" bgcolor="#FFF9DF">CVoltage</td>
	  <td align="center" bgcolor="#FFF9DF">ACurrent</td>
	  <td align="center" bgcolor="#FFF9DF">BCurrent</td>
	  <td align="center" bgcolor="#FFF9DF">CCurrent</td>
	 <!--  <td align="center" bgcolor="#FFF9DF">Frequency</td> -->
	  <td align="center" bgcolor="#FFF9DF">DCvoltage</td>
	  <td align="center" bgcolor="#FFF9DF">DCCurrent</td>
	  <td align="center" bgcolor="#FFF9DF">ActivePoewr</td>
	  <td align="center" bgcolor="#FFF9DF">ReactivePower</td>
	  <td align="center" bgcolor="#FFF9DF">AddTime</td>
	  <td align="center" bgcolor="#FFF9DF">WorkingState</td>	  	  
	  <td align="center" bgcolor="#FFF9DF">OperationMode</td>		  
	  <td align="center" bgcolor="#FFF9DF">RunningState</td>			  
	  <td align="center" bgcolor="#FFF9DF">ControlMode</td>		  
	  <td align="center" bgcolor="#FFF9DF">Faulty</td>	
    </tr>
    
     <%
        ResultSet rs=(ResultSet)session.getAttribute("pageresultset");    //获取保存在session 查询数据
        if(rs==null){                                                     //如果为空 则显示“没有数据显示！”
      %>
      <tr  height="25" align="center" valign="middle" bgcolor="#FFFFFF"><td colspan="18">没有记录显示！</td> </tr>    
     <%
        }
        else{
        	int s=0;
        	 db=(DB)session.getAttribute("db");
        	 while(rs.next()){
        		 s++;
      %>
   <tr  onmouseout="this.style.backgroundColor='#ffffff'" bgcolor="#ffffff"  onmouseover="this.style.backgroundColor='#E6F2FF'" >                   	           
      <td height="25" align="center"  >  <strong><%=s%></strong></td>
         <td align="center"><%=rs.getString(1) %></td>
      <td align="center"><%=Math.round(rs.getFloat(2)) %></td>
      <td align="center"><%=Math.round(rs.getFloat(3)) %></td>
      <td align="center"><%=Math.round(rs.getFloat(4)) %></td>
      <td align="center"><%=Math.round(rs.getFloat(5)) %></td>
      <td align="center"><%=Math.round(rs.getFloat(6)) %></td>
	  <td align="center"><%=Math.round(rs.getFloat(7)) %></td>
	<!--   <td align="center">null</td> -->
	  <td align="center"><%=Math.round(rs.getFloat(8)) %></td>
	  <td align="center"><%=Math.round(rs.getFloat(9)) %></td>		  
	  <td align="center"><%=Math.round(rs.getFloat(10)) %></td>
	  <td align="center"><%=Math.round(rs.getFloat(11)) %></td>		  
	  <td align="center"><%=rs.getString(12) %></td>
	  <td align="center"><%=rs.getString(13) %></td>		  
	  <td align="center"><%=rs.getString(14) %></td>
	  <td align="center"><%=rs.getString(15) %></td>
	  <td align="center"><%=rs.getString(16) %></td>
	  <td align="center"><%=rs.getString(17) %></td>		  
   </tr>
      <%
      System.out.println("数据输出  Successful!");
        	 }
        }
      %>
    
 
<!----------------------------------
 显示跳转页面信息 
分页导航
 ---------------------------------->	

   <tr background="Images/b2.jpg">
      <td height="25" >&nbsp;</td>

	  <td  align="center" colspan="6"height="30" >  每页：<%=db.getNumper()%>/<%=db.getNumrs()%> 条记录  &nbsp;&nbsp;当前页：<%=db.getPagecurrent()%>/<%=db.getPagesall()%> 页&nbsp;</td>

	
 
       <%if(db.getPagesall()>=1) { %>
       
       <td  colspan="7" align="center" >
        <a href="dopagedb.jsp?currentpage=1">第一页 &nbsp</a>
    	<%if(db.getPagecurrent()>1){%>
    	  <a href="dopagedb.jsp?currentpage=<%=db.getPagecurrent()-1%>">上一页 &nbsp</a>
    	<%}%>
    	
    	<%if(db.getPagecurrent()<db.getPagesall()){%>
    	  <a href="dopagedb.jsp?currentpage=<%=db.getPagecurrent()+1%>">下一页 &nbsp</a>
    	  <a href="dopagedb.jsp?currentpage=<%=db.getPagesall()%>">最后一页 &nbsp</a>
    	<%}%>
        </td>
      <%}; %> 
 

      <td  align="center" colspan="3" >&nbsp;
	  <span class='pagelink'> <a href="dopagedb.jsp?currentpage=1">< &nbsp</a> </span> 
	  <span class='pagelink'> <a href="dopagedb.jsp?currentpage=<%=db.getPagecurrent()-1%>"> <<&nbsp</a></span>
      <a class='pagelink' href="dopagedb.jsp?currentpage=1"><font color=green><%=db.getPagecurrent()%></font></a>
      <span class='pagelink'> <a href="dopagedb.jsp?currentpage=<%=db.getPagecurrent()+1%>"> >>&nbsp </a></span>
      <span class='pagelink'><a href="dopagedb.jsp?currentpage=<%=db.getPagesall()%>"> >&nbsp</a> </span> &nbsp转到第&nbsp;
      <input id='JumpSelect' type='text' size='2' value='1' onblur="jump()" title='鼠标外部单击，文章转向'> 页	  </td>
    
     <td align="center"><input type="button" name="Output" id="Output" value=" excel导出 "  title="暂未开放功能 "/></td>

     </tr>

</table>
</form>
<script  src="js/exceloutajax.js"></script>
</body>
</html>