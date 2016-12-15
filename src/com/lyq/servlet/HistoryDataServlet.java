package com.lyq.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.ResultSet;
import java.text.DecimalFormat;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.lyq.bean.DB;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

/**
 * Servlet implementation class HistoryDataServlet
 */
public class HistoryDataServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public HistoryDataServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub

		this.doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub

		String action = request.getParameter("action");
		if ("gethistorydatas".equals(action))
			gethistorydatas(request, response);
	}

	private void gethistorydatas(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		// response.setContentType( "text/xml;charset=UTF-8" );//设置响应格式为XML
		response.setContentType("text/html;charset=UTF-8");
		// 禁止页面缓存
		response.addHeader("Cache-Control", "no-store,no-cache,must-revalidate");
		response.addHeader("Cache-Control", "post-check=0,pre-check=0");
		response.addHeader("Expires", "0");
		response.addHeader("Pragma", "no-cache");

		// ArrayList<Float> list=new ArrayList<Float>(); //定义一个列表用于存放读取的数据

		PrintWriter out = response.getWriter(); // out流输出json 数据
		DB conn = new DB();

		String equipmentselect = request.getParameter("equipmentselect"); // 获得请求表单中的装置信息
		String itemselect = request.getParameter("itemselect"); // 获得请求表单中显示项目
		String selectrange = request.getParameter("selectrange"); // 获得请求表单中显示项目
		String datastart = request.getParameter("datastart"); // 获得请求表单中显示项目
		String dataend = request.getParameter("dataend"); // 获得请求表单中显示项目

		JSONObject json = new JSONObject(); // 定义了一个JSON对象 用于存放多个json数组 然后统一发送出去

		if ("PCSInfo".equals(equipmentselect) || "PCS2Info".equals(equipmentselect)
				|| "PCS3Info".equals(equipmentselect) || "PCS4Info".equals(equipmentselect)
				|| "PCS5Info".equals(equipmentselect)) {
			json.put("name", "PCS");
			String sql = "SELECT * FROM [dbo]." + equipmentselect + " where AddTime BETWEEN '" + datastart + "' AND '"
					+ dataend + "' and PID%" + selectrange + "=0";
			JSONArray PCS_Avoltage = new JSONArray(); // 定义一个json数组，用于存放每个显示项目 如
			// 交流A相电压
			JSONArray PCS_Bvoltage = new JSONArray(); // 存放 交流B相电压
			JSONArray PCS_Cvoltage = new JSONArray(); // 存放 交流C相电压
			JSONArray PCS_Acurrent = new JSONArray(); // 存放 交流A相电流
			JSONArray PCS_Bcurrent = new JSONArray(); // 存放 交流B相电流
			JSONArray PCS_Ccurrent = new JSONArray(); // 存放 交流C相电流
			JSONArray PCS_DCVoltaget = new JSONArray(); // 存放 直流电压
			JSONArray PCS_DCCurrent = new JSONArray(); // 存放 直流电流
			JSONArray PCS_Activepower = new JSONArray(); // 存放 有功功率
			JSONArray PCS_ReactivePower = new JSONArray(); // 存放 无功功率
			JSONArray PCS_Addtime = new JSONArray(); // 存放 无功功率

			int totalnum = conn.findCount(sql); // 用来读取一共所烧行
			ResultSet rs1 = conn.executeQuery(sql);// 查询数据库商品信息
			DecimalFormat df = new DecimalFormat("#.##"); // 格式化数据样式
			try {
				while (rs1.next()) {
					PCS_Avoltage.add(df.format(rs1.getFloat(2)));
					PCS_Bvoltage.add(df.format(rs1.getFloat(3)));
					PCS_Cvoltage.add(df.format(rs1.getFloat(4)));
					PCS_Acurrent.add(df.format(rs1.getFloat(5)));
					PCS_Bcurrent.add(df.format(rs1.getFloat(6)));
					PCS_Ccurrent.add(df.format(rs1.getFloat(7)));
					PCS_DCVoltaget.add(df.format(rs1.getFloat(8)));
					PCS_DCCurrent.add(df.format(rs1.getFloat(9)));
					PCS_Activepower.add(df.format(rs1.getFloat(10)));
					PCS_Addtime.add(rs1.getString(12));

				}
				json.put("totalnum", totalnum);
				json.put("Avoltage", PCS_Avoltage);
				json.put("Bvoltage", PCS_Bvoltage);
				json.put("Cvoltage", PCS_Cvoltage);
				json.put("Acurrent", PCS_Acurrent);
				json.put("Bcurrent", PCS_Bcurrent);
				json.put("Ccurrent", PCS_Ccurrent);
				json.put("DCvoltage", PCS_DCVoltaget);
				json.put("DCcurrent", PCS_DCCurrent);
				json.put("ActivePoewr", PCS_Activepower);
				json.put("ReactivePower", PCS_ReactivePower);
				json.put("Addtime", PCS_Addtime);

			} catch (Exception ex) {
				ex.printStackTrace();
			}
		}

		else {
			json.put("name", "BMS");
			String sql = "SELECT * FROM [dbo]." + equipmentselect + " where AddTime BETWEEN '" + datastart + "' AND '"
					+ dataend + "' and PID%" + selectrange + "=0";
			JSONArray BMS_totalVoltage = new JSONArray();
			JSONArray BMS_totalCurrent = new JSONArray();
			JSONArray BMS_SOC = new JSONArray();
			JSONArray BMS_SOH = new JSONArray();
			JSONArray BMS_SMaxVoltage = new JSONArray();
			JSONArray BMS_SMinVoltage = new JSONArray();
			JSONArray BMS_Addtime = new JSONArray();

			int totalnum = conn.findCount(sql); // 用来读取一共所烧行
			ResultSet rs1 = conn.executeQuery(sql);// 查询数据库商品信息
			DecimalFormat df = new DecimalFormat("#.##"); // 格式化数据样式

			try {
				while (rs1.next()) {
					BMS_totalVoltage.add(df.format(rs1.getFloat(2)));
					BMS_totalCurrent.add(df.format(rs1.getFloat(3)));
					BMS_SOC.add(df.format(rs1.getFloat(4)));
					BMS_SOH.add(df.format(rs1.getFloat(5)));
					BMS_SMaxVoltage.add(df.format(rs1.getFloat(6)));
					BMS_SMinVoltage.add(df.format(rs1.getFloat(7)));
					BMS_Addtime.add(rs1.getString(12));

				}
				json.put("totalnum", totalnum);
				json.put("totalVoltage", BMS_totalVoltage);
				json.put("totalCurrent", BMS_totalCurrent);
				json.put("SOC", BMS_SOC);
				json.put("SOH", BMS_SOH);
				json.put("SMaxVoltage", BMS_SMaxVoltage);
				json.put("SMinVoltage", BMS_SMinVoltage);
				json.put("Addtime", BMS_Addtime);
			} catch (Exception ex) {
				ex.printStackTrace();
			}
		}

		out.print(json);
		out.close();
		conn.closed();

	}















}
