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

import com.lyq.bean.BMS;
import com.lyq.bean.DB;

/**
 * Servlet implementation class RemoteControl
 */
public class RemoteControl extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public RemoteControl() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		this.doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		Control(request, response);
	}

	private void Control(HttpServletRequest request, HttpServletResponse response)
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

		String instructionType = request.getParameter("instructionType");
		String Device1 = request.getParameter("Device1");
		String Device1Mode = request.getParameter("Device1Mode");
		String Device1Data1 = request.getParameter("Device1Data1");
		String Device1Data2 = request.getParameter("Device1Data2");
		DB conn = new DB();
		String serachnewpidsql = "select max(PID) from [dbo].[RemoteReceiveInstructionInfo]";

		int id = 0;

		ResultSet maxpid = conn.executeQuery(serachnewpidsql); // 获取表中最新一个PID
		try {
			while (maxpid.next()) {

				id = maxpid.getInt(1) + 1; // 新加的要在原基础上加1
			}

		} catch (Exception ex) {

			ex.printStackTrace();
		}

		PrintWriter out = response.getWriter();
		String INSERTsql = "INSERT INTO [dbo].[RemoteReceiveInstructionInfo](ID,InstructionType ,Device1,Device1Mode, Device1Data1,Device1Data2,AddTime) "
				+ "VALUES" + " ('" + id + "','" + instructionType + "','" + Device1 + "','" + Device1Mode + "','"
				+ Device1Data1 + "','" + Device1Data2 + "','" + nowtime + "')";
		System.out.println("sql:" + INSERTsql);
		int result = conn.executeUpdate(INSERTsql);// 查询数据库商品信息
		// System.out.println("result:"+result );

		if (result == 1)
			out.print("YES");
		else
			out.print("NO");

	}

}



