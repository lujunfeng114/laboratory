package com.lyq.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.lyq.bean.BMS;
import com.lyq.bean.DB;

/**
 * Servlet implementation class RegServlet
 */
public class RegServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public RegServlet() {
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
		String action = request.getParameter("action");

		if ("reg".equals(action))
			regeist(request, response);
		else if ("checkname".equals(action))
			checkusername(request, response);
		else if ("Modify".equals(action))
			modify(request, response);

	}

	///////////////////////////////////// 注册 写入数据库//////////////////////////////
	private void regeist(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8"); // 设置请求数据的字符编码格式
		String department = request.getParameter("typefs"); //
		String truename = request.getParameter("truename"); //
		String username = request.getParameter("username"); //
		String password = request.getParameter("password"); //
		String telphone = request.getParameter("tel"); //
		DB conn = new DB();
		String sql = "INSERT INTO [dbo].[REG](登录名,单位部门 ,姓名,密码,电话)VALUES('" + username + "','" + department + "','"
				+ truename + "','" + password + "','" + telphone + "')";
		int result = conn.executeUpdate(sql);// 查询数据库
		if (result != '0') {
			// 使用RequestDispatcher对象将页面请求转发到RegResult.jsp页
			request.setAttribute("resultline", "注册成功");
			request.getRequestDispatcher("RegResult.jsp").forward(request, response);
		} else {
			request.setAttribute("resultline", "注册失败");
			request.getRequestDispatcher("RegResult.jsp").forward(request, response);
		}

		conn.closed();
	}

	/////////////////////////////////// 验证账号/////////////////////////////////////
	private void checkusername(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8"); // 设置请求数据的字符编码格式
		response.setContentType("text/html;charset=UTF-8"); // 设置输出格式
		System.out.println("--------------------开始验证账号是否重复----------------------");
		String username = request.getParameter("username");
		DB conn = new DB();
		String sql = " SELECT 登录名  FROM [dbo].[REG] where 登录名='" + username + "'";
		int count = conn.findCount(sql);
		PrintWriter out = response.getWriter();// 创建输出流

		if (count != 0) {
			out.print("no");
		} else {
			out.print("yes");
		}
		out.flush(); // 清空缓冲区
		conn.closed();
	}

	////////////////////////////////////// 修改密码/////////////////////////////
	private void modify(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8"); // 设置请求数据的字符编码格式
		response.setContentType("text/html;charset=UTF-8"); // 设置输出格式
		// System.out.println("--------------------开始验证账号是否存在----------------------");
		String account = request.getParameter("account");
		DB modifyData = new DB();
		String sql = " SELECT 登录名  FROM [dbo].[REG] where 登录名='" + account + "'";
		int count = modifyData.findCount(sql);
		// if(count!=0)
		// System.out.println("账户存在");

		// System.out.println("--------------------开始验证密码是否正确----------------------");
		String oldpw = request.getParameter("oldpw");
		String sql2 = " SELECT 密码   FROM [dbo].[REG] where 登录名='" + account + "'";
		ResultSet rs2 = modifyData.executeQuery(sql2);// 查询数据库商品信息
		String yuanpassword = null;
		try {
			while (rs2.next()) {
				yuanpassword = rs2.getString(1);
				yuanpassword = yuanpassword.trim();
			}
		} catch (Exception ex) {
			System.out.println("异常信息：" + ex.getMessage());
			ex.printStackTrace();
		}

		int result = 2;
		if (yuanpassword.equals(oldpw)) {
			// 只有在旧密码正确时才会进行密码修改操作
			// System.out.println("--------------------开始更新密码----------------------");
			String pw = request.getParameter("pw");
			String sql3 = "update [dbo].[REG] set 密码='" + pw + "' where  登录名='" + account + "'";
			result = modifyData.executeUpdate(sql3);// 查询数据库商品信息

			// if(result==1)
			// System.out.println("密码修改成功");

		} else {
			result = 0;// 强制赋值=0
		}

		/////////////////// 合并输出信息//拼接STRING/////////////////////
		String output = "";
		if (count != 0)
			output = "账号正确 ";
		else
			output = "账号错误 ";
		if (yuanpassword.equals(oldpw))
			output = output + "原密码正确  ";
		else
			output = output + "原密码不正确   ";

		if (result == 1)
			output = output + "密码修改成功 ";
		else
			output = output + "密码修改失败 ";

		///////////////// 输出//////////////////
		PrintWriter out = response.getWriter();// 创建输出流

		out.print(output);
		out.flush(); // 清空缓冲区
		modifyData.closed();
	}

}
