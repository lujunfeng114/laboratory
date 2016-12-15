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

import net.sf.json.JSONObject;

/**
 * Servlet implementation class CheckOrderFinish
 */
public class CheckOrderFinish extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public CheckOrderFinish() {
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
		// response.getWriter().append("Served at:
		// ").append(request.getContextPath());
		doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		CheckFinish(request, response);
	}

	private void CheckFinish(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset=UTF-8");
		// 禁止页面缓存
		response.addHeader("Cache-Control", "no-store,no-cache,must-revalidate");
		response.addHeader("Cache-Control", "post-check=0,pre-check=0");
		response.addHeader("Expires", "0");
		response.addHeader("Pragma", "no-cache");

		// Date now = new Date();
		// SimpleDateFormat dateFormat1 = new SimpleDateFormat("yyyy/MM/dd
		// HH:mm:ss");//可以方便地修改日期格式
		// String nowtime = dateFormat1.format( now );

		DB conn = new DB();
		String serachnewpidsql = "select top 1 * from [dbo].[RemoteReturnInstructionInfo] order by PID desc";

		JSONObject outdata = new JSONObject(); // 数据的json对象

		ResultSet maxpid = conn.executeQuery(serachnewpidsql); // 获取表中最新一个PID
		try {
			while (maxpid.next()) {
				outdata.put("ID", maxpid.getInt(2)); // 刚开始登陆的时候记录当前数据库中已经存在的指令的最大ID
				outdata.put("information", maxpid.getString(3));
				outdata.put("AddTime", maxpid.getString(4));
			}

		} catch (Exception ex) {

			ex.printStackTrace();
		}

		PrintWriter out = response.getWriter();
		// String INSERTsql = "INSERT INTO
		// [dbo].[RemoteReturnInstructionInfo](ID,InstructionType
		// ,Device1,Device1Mode, Device1Data1,Device1Data2,AddTime) " +"VALUES"
		// +" ('" + id + "','" +instructionType+ "','" +Device1+ "','"
		// +Device1Mode+ "','" +Device1Data1+"','"+Device1Data2+"','"+nowtime+
		// "')";
		// System.out.println("sql:"+INSERTsql );
		// int result = conn.executeUpdate(INSERTsql);
		// System.out.println("result:"+result );
		out.print(outdata);

	}

}
