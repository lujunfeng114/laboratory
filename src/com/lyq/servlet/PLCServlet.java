package com.lyq.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.ResultSet;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.lyq.bean.DB;

import net.sf.json.JSONObject;

/**
 * Servlet implementation class PLCServlet
 */
public class PLCServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public PLCServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//	response.getWriter().append("Served at: ").append(request.getContextPath());



		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset=UTF-8");
		// 禁止页面缓存
		response.addHeader("Cache-Control", "no-store,no-cache,must-revalidate");
		response.addHeader("Cache-Control", "post-check=0,pre-check=0");
		response.addHeader("Expires", "0");
		response.addHeader("Pragma", "no-cache");

		String dbnamet = request.getParameter("dbname"); // 获得请求表单中显示项目
		System.out.println(dbnamet);
		PrintWriter out = response.getWriter(); // out流输出json 数据

		DB conn = new DB();
		String sql = "select top 1 *from DBO.PlcInfo order by PID desc";

		ResultSet rs = conn.executeQuery(sql);

		int  PLC1 = 0,PLC2=0,PLC3=0,PLC4=0,PLC5=0,PLC6=0,PLC7=0,PLC8=0,PLC9=0,PLC10=0;

		JSONObject s = new JSONObject(); // 定义了一个JSON对象

		try {
			while (rs.next()) {
				PLC1=(rs.getInt(2));
				PLC2=(rs.getInt(3));
				PLC3=(rs.getInt(4));
				PLC4=(rs.getInt(5));
				PLC5=(rs.getInt(6));
				PLC6=(rs.getInt(7));
				PLC7=(rs.getInt(8));
				PLC8=(rs.getInt(9));
				PLC9=(rs.getInt(10));
				PLC10=(rs.getInt(11));
			}
			s.put("PLC1", PLC1);
			s.put("PLC2", PLC2);
			s.put("PLC3", PLC3);
			s.put("PLC4", PLC4);
			s.put("PLC5", PLC5);
			s.put("PLC6", PLC6);
			s.put("PLC7", PLC7);
			s.put("PLC8", PLC8);
			s.put("PLC9", PLC9);
			s.put("PLC10", PLC10);


		} catch (Exception ex) {
			ex.printStackTrace();
		}

		System.out.println(s);
		out.print(s);
		out.close();
		conn.closed();

	}



}
