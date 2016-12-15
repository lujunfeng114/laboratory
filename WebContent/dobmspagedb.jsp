<%@ page contentType="text/html;charset=GBK"%>
<%@ page import="java.sql.*"%>
<!----------------------------------
实例化 DB类为db  
 ---------------------------------->
<jsp:useBean id="db" class="com.lyq.bean.DB" scope="page" />

<%
	String strpage = request.getParameter("currentpage"); //获取DBlistbms发送过来的页面页码
	String bmsname = request.getParameter("bmsname"); //获取DBlistbms发送过来的查询开始时间
	String datastart = request.getParameter("datastart"); //获取DBlistbms发送过来的查询开始时间
	String dataend = request.getParameter("dataend"); //获取DBlistbms发送过来的查询结束时间

	System.out.println("------------本次查询的开始时间 " + datastart + "--(如果为空 则默认上一次的值 从cookiez中取出)");
	System.out.println("------------本次查询结束时间  " + dataend + "---(如果为空 则默认上一次的值 从cookiez中取出)");

	if (bmsname == null || datastart == null || dataend == null) {
		// String bmsname="";
		Cookie cookies[] = request.getCookies();
		if (null != cookies) {
			for (int i = 0; i < cookies.length; i++) {
				Cookie cookie = cookies[i];
				if (cookie.getName().equals("bmsname")) {
					bmsname = cookie.getValue();
				}
				if (cookie.getName().equals("starttime")) {
					datastart = cookie.getValue();
					System.out.println("------------cookie取出的 开始时间 " + datastart);
				}
				if (cookie.getName().equals("endtime")) {
					dataend = cookie.getValue();
					System.out.println("------------cookie取出的  结束时间" + dataend);

				}
			}
		}
	}

	if (datastart != null && dataend != null) {

		System.out.println("查询时间：" + datastart + "---" + dataend);
		System.out.println("本次连接的是数据表是：" + bmsname);
		if (strpage == null || strpage.equals("")) //如果为空 默认为1
			strpage = "1";
		int currentpage = 1;
		try {
			currentpage = Integer.parseInt(strpage);
		} catch (Exception e) {
			currentpage = 1;
		}

		String sql = "SELECT * FROM [dbo]." + bmsname + " where AddTime BETWEEN " + "'" + datastart + "'"
				+ "AND" + "'" + dataend + "'";
		System.out.println("sql:::" + sql);

		db.getmatchlines(sql, currentpage); //获取所欲符合条件数据 并记录条数和页数  	  
		ResultSet rs = db.getmatchPageRs(bmsname, datastart, dataend); //调用getmatchPageRs函数   获取符合条件的当前页的数据
		session.setAttribute("db", db); //保存 db到session
		session.setAttribute("pageresultset", rs); //保存获取的数据

		session.setAttribute("datastart", datastart); //用于显示到页面 方便用户知道 自己查询的条件 
		session.setAttribute("dataend", dataend); //
		session.setAttribute("bmsname", bmsname); //

		response.sendRedirect("DBlistbms.jsp"); //重定向到 index.jsp页面     	 

	} else {
		//永远不会进来了,,由于设置了 强制设置查询时间 另外如果无时间 则默认选取cookie中上一次的时间    
		//可以用于以后扩展 一按键 全部显示出历史数据
		System.out.println("本次连接的是数据表是：" + bmsname);
		if (strpage == null || strpage.equals("")) //如果为空 默认为1
			strpage = "1";
		int currentpage = 1;
		try {
			currentpage = Integer.parseInt(strpage);
		} catch (Exception e) {
			currentpage = 1;
		}

		db.setPageInfo(bmsname, currentpage); //调用DB类中的 setPageInfo函数 获取 按当前 “获取当前指针所指记录的行号，即总记录数 num_rs ”和总页数pages_al  		 
		ResultSet rs = db.getPageRs(bmsname); //调用getPageRs函数   获取当前页的数据
		session.setAttribute("db", db); //保存 db到session
		session.setAttribute("pageresultset", rs); //保存获取的数据
		response.sendRedirect("DBlistbms.jsp"); //重定向到 index.jsp页面     	 

	}

	// String  pcsnum=(String)session.getAttribute("pcsnum");
%>
