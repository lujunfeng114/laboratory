package com.lyq.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.ResultSet;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.lyq.bean.DB;

/**
 * Servlet implementation class AdvancedFunctionServlet
 */
public class AdvancedFunctionServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public AdvancedFunctionServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String action = request.getParameter("action");
		if ("setordercontrol".equals(action))
			setordercontrol(request, response);
		if ("setuserdefinedcontrol".equals(action))
			setuserdefinedcontrol(request, response);


	}


	private void setordercontrol(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset=UTF-8");
		// 禁止页面缓存
		response.addHeader("Cache-Control", "no-store,no-cache,must-revalidate");
		response.addHeader("Cache-Control", "post-check=0,pre-check=0");
		response.addHeader("Expires", "0");
		response.addHeader("Pragma", "no-cache");

		Date now = new Date();
		SimpleDateFormat dateFormat1 = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");// 可以方便地修改日期格式
		String nowtime = dateFormat1.format(now);

		String Device1Mode1=request.getParameter("Device1Mode1");

		DB conn = new DB();
		String serachnewpidsql = "select max(PID) from [dbo].[RemoteReceiveInstructionInfo]";
		int id = 0;

		ResultSet maxpid = conn.executeQuery(serachnewpidsql); // 获取表中最新一个PID
		// 防止指令ID 错乱 不连续
		// 先读后写
		try {
			while (maxpid.next()) {

				id = maxpid.getInt(1) + 1; // 新加指令的要在原基础上加1
				//Cookie cookie = new Cookie("ORDERID", Integer.toString(id)); // 保存要下发的指令的ID到COOKIE
				// 用于前端JS访问判断
				//response.addCookie(cookie);
			}

		} catch (Exception ex) {

			ex.printStackTrace();
		}

		PrintWriter out = response.getWriter();
		String INSERTsql = "INSERT INTO [dbo].[RemoteReceiveInstructionInfo](ID,InstructionType ,Device1,Device1Mode, Device1Data1,Device1Data2,AddTime) "
				+ "VALUES" + " ('" + id + "','" + 4 + "','" + 100 + "','" + Device1Mode1 + "','"
				+" "  + "','" + " " + "','" + nowtime + "')";
		System.out.println("sql:" + INSERTsql);
		int result = conn.executeUpdate(INSERTsql);
		System.out.println("result:" + result);

		if (result == 1)
			out.print("YES");
		else
			out.print("NO");

	}


	private void setuserdefinedcontrol(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset=UTF-8");
		// 禁止页面缓存
		response.addHeader("Cache-Control", "no-store,no-cache,must-revalidate");
		response.addHeader("Cache-Control", "post-check=0,pre-check=0");
		response.addHeader("Expires", "0");
		response.addHeader("Pragma", "no-cache");

		Date now = new Date();
		SimpleDateFormat dateFormat1 = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");// 可以方便地修改日期格式
		String nowtime = dateFormat1.format(now);

		String Device1 =request.getParameter("Device1");
		String Device1Mode = request.getParameter("Device1Mode");
		String Device1Data1 = request.getParameter("Device1Data1");

		String Device2 =request.getParameter("Device2");
		String Device2Mode = request.getParameter("Device2Mode");
		String Device2Data1 = request.getParameter("Device2Data1");

		String Device3 =request.getParameter("Device3");
		String Device3Mode = request.getParameter("Device3Mode");
		String Device3Data1 = request.getParameter("Device3Data1");

		String Device4 =request.getParameter("Device4");
		String Device4Mode = request.getParameter("Device4Mode");
		String Device4Data1 = request.getParameter("Device4Data1");

		String Device5 =request.getParameter("Device5");
		String Device5Mode = request.getParameter("Device5Mode");
		String Device5Data1 = request.getParameter("Device5Data1");

		System.out.println("接收到的：" + Device1 +Device1Mode +Device1Data1+
				Device2 +Device2Mode +Device2Data1+
				Device3 +Device3Mode +Device3Data1+
				Device4 +Device4Mode +Device4Data1+
				Device5 +Device5Mode +Device5Data1);


		if ("null".equals(Device1)&&"".equals(Device1)) Device1="0";
		if ("null".equals(Device1Mode)&&"".equals(Device1Mode)) Device1Mode="0";
		if ("null".equals(Device1Data1)&&"".equals(Device1Data1)) Device1Data1="0";

		if ("null".equals(Device2)&&"".equals(Device2)) Device2="0";
		if ("null".equals(Device2Mode)&&"".equals(Device2Mode)) Device2Mode="0";
		if ("null".equals(Device2Data1)&&"".equals(Device2Data1)) Device2Data1="0";

		if ("null".equals(Device3)&&"".equals(Device3)) Device3="0";
		if ("null".equals(Device3Mode)&&"".equals(Device3Mode)) Device3Mode="0";
		if ("null".equals(Device3Data1)&&"".equals(Device3Data1)) Device3Data1="0";

		if ("null".equals(Device4)&&"".equals(Device1)) Device4="0";
		if ("null".equals(Device4Mode)&&"".equals(Device1)) Device4Mode="0";
		if ("null".equals(Device4Data1)&&"".equals(Device1)) Device4Data1="0";

		if ("null".equals(Device5)&&"".equals(Device1)) Device5="0";
		if ("null".equals(Device5Mode)&&"".equals(Device1)) Device5Mode="0";
		if ("null".equals(Device5Data1)&&"".equals(Device1)) Device5Data1="0";


		System.out.println("转换后的：" + Device1 +Device1Mode +Device1Data1+
				Device2 +Device2Mode +Device2Data1+
				Device3 +Device3Mode +Device3Data1+
				Device4 +Device4Mode +Device4Data1+
				Device5 +Device5Mode +Device5Data1);

		DB conn = new DB();
		String serachnewpidsql = "select max(PID) from [dbo].[RemoteReceiveInstructionInfo]";
		int id = 0;

		ResultSet maxpid = conn.executeQuery(serachnewpidsql); // 获取表中最新一个PID
		// 防止指令ID 错乱 不连续
		// 先读后写
		try {
			while (maxpid.next()) {

				id = maxpid.getInt(1) + 1; // 新加指令的要在原基础上加1
				//Cookie cookie = new Cookie("ORDERID", Integer.toString(id)); // 保存要下发的指令的ID到COOKIE
				// 用于前端JS访问判断
				//response.addCookie(cookie);
			}

		} catch (Exception ex) {

			ex.printStackTrace();
		}

		PrintWriter out = response.getWriter();
		String INSERTsql = "INSERT INTO [dbo].[RemoteReceiveInstructionInfo](ID,InstructionType ,Device1,Device1Mode, Device1Data1,"
				+ "Device2,Device2Mode, Device2Data1,"
				+ "Device3,Device3Mode, Device3Data1,"
				+ "Device4,Device4Mode, Device4Data1,"
				+ "Device5,Device5Mode, Device5Data1,"
				+"AddTime) "
				+ "VALUES" + " ('" + id + "','" + 4 + "','" + Device1 + "','" + Device1Mode + "','"+ Device1Data1 + "','"
				+ Device2 + "','" + Device2Mode + "','"+ Device2Data1 + "','"
				+ Device3 + "','" + Device3Mode + "','"+ Device3Data1 + "','"
				+ Device4 + "','" + Device4Mode + "','"+ Device4Data1 + "','"
				+ Device5 + "','" + Device5Mode + "','"+ Device5Data1 + "','"
				+ nowtime+"')";
		System.out.println("sql:" + INSERTsql);
		int result = conn.executeUpdate(INSERTsql);
		System.out.println("result:" + result);
		if (result == 1)
			out.print("YES");
		else
			out.print("NO");
	}

}




