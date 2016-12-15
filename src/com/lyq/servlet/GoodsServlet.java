package com.lyq.servlet;

/**
 * 
 */

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.ResultSet;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.lyq.bean.BMS;
import com.lyq.bean.DB;
import com.lyq.bean.DCDC;
import com.lyq.bean.PCS;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

public class GoodsServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		this.doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String action = request.getParameter("action");
		if ("getpcsdatas".equals(action))
			getpcsdatas(request, response);
		if ("getbmsdatas".equals(action))
			getbmsdatas(request, response);
		if ("getdcdcdatas".equals(action))
			getdcdcdatas(request, response);

	}

	private void getpcsdatas(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		// response.setContentType( "text/xml;charset=UTF-8" );//设置响应格式为XML
		response.setContentType("text/html;charset=UTF-8");
		// 禁止页面缓存
		response.addHeader("Cache-Control", "no-store,no-cache,must-revalidate");
		response.addHeader("Cache-Control", "post-check=0,pre-check=0");
		response.addHeader("Expires", "0");
		response.addHeader("Pragma", "no-cache");

		String dbname = request.getParameter("dbname"); // 获取页面发送的数据库名称，用于更新SQL语句

		PrintWriter out = response.getWriter(); // out流输出json 数据
		DB conn = new DB();
		String sql = "select top 1 *from DBO." + dbname + " order by PID desc";

		ResultSet rs = conn.executeQuery(sql);// 查询数据库商品信息

		// ArrayList<PCS> list=new ArrayList<PCS>(); //定义一个列表用于存放读取的数据
		JSONObject s = new JSONObject(); // 定义了一个JSON对象

		try {
			while (rs.next()) {
				PCS pcsdata = new PCS();
				pcsdata.setPID(rs.getInt(1));
				pcsdata.setAVoltage(rs.getFloat(2));
				pcsdata.setBVoltage(rs.getFloat(3));
				pcsdata.setCVoltage(rs.getFloat(4));
				pcsdata.setACurrent(rs.getFloat(5));
				pcsdata.setBCurrent(rs.getFloat(6));
				pcsdata.setCCurrent(rs.getFloat(7));
				// pcsdata.setFrequency(rs.getFloat(8));
				pcsdata.setDCVoltage(rs.getFloat(8));
				pcsdata.setDCCurrent(rs.getFloat(9));
				pcsdata.setActivePower(rs.getFloat(10));
				pcsdata.setReactivePower(rs.getFloat(11));
				pcsdata.setAddTime(rs.getString(12));
				pcsdata.setWorkingState(rs.getString(13));
				pcsdata.setOperationMode(rs.getString(14));
				pcsdata.setRunningState(rs.getString(15));
				pcsdata.setControlMode(rs.getString(16));
				pcsdata.setFaulty(rs.getString(17));
				s.put("pcsdata1", pcsdata);// 添加对象
				out.print(s);
			}

		} catch (Exception ex) {
			ex.printStackTrace();
		}
		out.close();
		conn.closed();

		// System.out.println(s);
		// request.setAttribute("data", s);
		// request.getRequestDispatcher("receive.jsp").forward(request,
		// response);

	}

	private void getbmsdatas(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		// response.setContentType( "text/xml;charset=UTF-8" );//设置响应格式为XML
		response.setContentType("text/html;charset=UTF-8");
		// 禁止页面缓存
		response.addHeader("Cache-Control", "no-store,no-cache,must-revalidate");
		response.addHeader("Cache-Control", "post-check=0,pre-check=0");
		response.addHeader("Expires", "0");
		response.addHeader("Pragma", "no-cache");

		String dbname = request.getParameter("dbname");

		PrintWriter out = response.getWriter(); // out流输出json 数据
		DB conn = new DB();

		String sql = "select top 1 *from DBO." + dbname + " order by PID desc";

		ResultSet rs = conn.executeQuery(sql);// 查询数据库商品信息

		// ArrayList<PCS> list=new ArrayList<PCS>(); //定义一个列表用于存放读取的数据
		JSONObject s = new JSONObject(); // 定义了一个JSON对象

		try {
			while (rs.next()) {
				BMS bmsdata = new BMS();
				bmsdata.setPID(rs.getInt(1));
				bmsdata.setTotalVoltage(rs.getFloat(2));
				bmsdata.setTotalCurrent(rs.getFloat(3));
				bmsdata.setSOC(rs.getFloat(4));
				bmsdata.setSOH(rs.getFloat(5));
				bmsdata.setSingleMaxVoltage(rs.getFloat(6));
				bmsdata.setSingleMinTemperature(rs.getFloat(7));
				bmsdata.setSingleMaxTemperature(rs.getFloat(8));
				bmsdata.setSingleMinTemperature(rs.getFloat(9));
				bmsdata.setRunningState(rs.getString(10));
				bmsdata.setFaultType(rs.getString(11));
				bmsdata.setAddTime(rs.getString(12));

				s.put("bmsdata1", bmsdata);// 添加对象
				out.print(s);
			}

		} catch (Exception ex) {
			ex.printStackTrace();
		}
		out.close();
		conn.closed();

		// System.out.println(s);
		// request.setAttribute("data", s);
		// request.getRequestDispatcher("receive.jsp").forward(request,
		// response);

	}

	private void getdcdcdatas(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		// response.setContentType( "text/xml;charset=UTF-8" );//设置响应格式为XML
		response.setContentType("text/html;charset=UTF-8");
		// 禁止页面缓存
		response.addHeader("Cache-Control", "no-store,no-cache,must-revalidate");
		response.addHeader("Cache-Control", "post-check=0,pre-check=0");
		response.addHeader("Expires", "0");
		response.addHeader("Pragma", "no-cache");

		String dbname = request.getParameter("dbname");

		PrintWriter out = response.getWriter(); // out流输出json 数据
		DB conn = new DB();

		String sql = "select top 1 *from DBO." + dbname + " order by PID desc";

		ResultSet rs = conn.executeQuery(sql);// 查询数据库商品信息

		// ArrayList<PCS> list=new ArrayList<PCS>(); //定义一个列表用于存放读取的数据
		JSONObject s = new JSONObject(); // 定义了一个JSON对象

		try {
			while (rs.next()) {
				DCDC dcdcdata = new DCDC();
				dcdcdata.setPID(rs.getInt(1));
				dcdcdata.setLoop1PortVoltage(rs.getFloat(2));
				dcdcdata.setLoop2PortVoltage(rs.getFloat(3));
				dcdcdata.setLoop3PortVoltage(rs.getFloat(4));
				dcdcdata.setLoop1CapacitorVoltage(rs.getFloat(5));
				dcdcdata.setLoop2CapacitorVoltage(rs.getFloat(6));
				dcdcdata.setLoop3CapacitorVoltage(rs.getFloat(7));
				dcdcdata.setHighVoltageCapacitorVoltage(rs.getFloat(8));
				dcdcdata.setHighVoltagePortVoltage(rs.getFloat(9));
				dcdcdata.setLoop1PortCurrent(rs.getFloat(10));
				dcdcdata.setLoop2PortCurrent(rs.getFloat(11));
				dcdcdata.setLoop3PortCurrent(rs.getFloat(12));
				dcdcdata.setLoop1InductorCurrent(rs.getFloat(13));
				dcdcdata.setLoop2InductorCurrent(rs.getFloat(14));
				dcdcdata.setLoop3InductorCurrent(rs.getFloat(15));
				dcdcdata.setBusCurrent(rs.getFloat(16));
				dcdcdata.setHighVoltageTotalCurrent(rs.getFloat(17));
				dcdcdata.setLoop1Power(rs.getFloat(18));
				dcdcdata.setLoop2Power(rs.getFloat(19));
				dcdcdata.setLoop3Power(rs.getFloat(20));
				dcdcdata.setHighVoltagePower(rs.getFloat(21));
				dcdcdata.setLoop1WorkingState(rs.getString(22));
				dcdcdata.setLoop2WorkingState(rs.getString(23));
				dcdcdata.setLoop3WorkingState(rs.getString(24));
				dcdcdata.setTotalWorkingState(rs.getString(25));
				dcdcdata.setLoop1WorkingMode(rs.getString(26));
				dcdcdata.setLoop2WorkingMode(rs.getString(27));
				dcdcdata.setLoop3WorkingMode(rs.getString(28));
				dcdcdata.setLoop1Modulation(rs.getFloat(29));
				dcdcdata.setLoop2Modulation(rs.getFloat(30));
				dcdcdata.setLoop3Modulation(rs.getFloat(31));
				dcdcdata.setLoop1VoltageLoopSet(rs.getFloat(32));
				dcdcdata.setLoop2VoltageLoopSet(rs.getFloat(33));
				dcdcdata.setLoop3VoltageLoopSet(rs.getFloat(34));
				dcdcdata.setLoop1CurrentLoopSet(rs.getFloat(35));
				dcdcdata.setLoop2CurrentLoopSet(rs.getFloat(36));
				dcdcdata.setLoop3CurrentLoopSet(rs.getFloat(37));
				dcdcdata.setAddTime(rs.getString(38));
				dcdcdata.setFaultType(rs.getString(39));

				s.put("dcdcdata1", dcdcdata);// 添加对象
				out.print(s);
			}

		} catch (Exception ex) {
			ex.printStackTrace();
		}
		out.close();
		conn.closed();

		// System.out.println(s);
		// request.setAttribute("data", s);
		// request.getRequestDispatcher("receive.jsp").forward(request,
		// response);

	}

}

 

