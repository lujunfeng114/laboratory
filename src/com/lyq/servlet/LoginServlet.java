package com.lyq.servlet;

import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.lyq.bean.DB;

/**
 * Servlet implementation class LoginServlet
 */
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public LoginServlet() {
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
		if ("save".equals(action))
			yanzheng(request, response);
	}

	private void yanzheng(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8"); // 设置请求数据的字符编码格式
		String username = request.getParameter("username"); // 获得请求表单中的用户名
		String password = request.getParameter("password"); // 获得请求表单中的密码

		DB conn = new DB();
		String sql = " SELECT *  FROM [dbo].[REG] WHERE 登录名='" + username + "' and 密码='" + password + "'";
		ResultSet rs = conn.executeQuery(sql);// 查询
		try {
			rs.last(); // 将记录指针移动到最后一条记录
		} catch (SQLException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		int num;
		try {
			num = rs.getRow();
			if (num != 1) {
				// 使用RequestDispatcher对象将页面请求转发到RegResult.jsp页
				request.setAttribute("resultline", "登陆失败");
				request.getRequestDispatcher("login.jsp").forward(request, response);

			} else {
				request.getRequestDispatcher("index.jsp").forward(request, response);
			}

			conn.closed();

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} // 获取当前指针所指记录的行号，即总记录数

	}

}
