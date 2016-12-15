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
 * Servlet implementation class HistoryPowerLineServlet
 */
public class HistoryPowerLineServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public HistoryPowerLineServlet() {
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
		// TODO Auto-generated method stub
		gethistorydatas(request, response);

	}


	private void gethistorydatas(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset=UTF-8");
		// 禁止页面缓存
		response.addHeader("Cache-Control", "no-store,no-cache,must-revalidate");
		response.addHeader("Cache-Control", "post-check=0,pre-check=0");
		response.addHeader("Expires", "0");
		response.addHeader("Pragma", "no-cache");

		PrintWriter out = response.getWriter(); // out流输出json 数据
		DB conn = new DB();

		String selectrange = request.getParameter("selectrange"); // 获得请求表单中显示项目
		String datastart = request.getParameter("datastart"); // 获得请求表单中显示项目
		String dataend = request.getParameter("dataend"); // 获得请求表单中显示项目

		JSONObject json = new JSONObject(); // 定义了一个JSON对象 用于存放多个json数组 然后统一发送出去

		//String[] PCSArry={"PCSInfo","PCS2Info","PCS3Info","PCS4Info","PCS5Info"};
		//String[] DCDCArry={"DCDCInfo","DCDC2Info","DCDC3Info","DCDC4Info","DCDC5Info"};

		JSONArray PCS1_Activepower = new JSONArray(); // 存放 有功功率
		JSONArray PCS1_ReactivePower = new JSONArray(); // 存放 无功功率
		JSONArray PCS2_Activepower = new JSONArray(); // 存放 有功功率
		JSONArray PCS2_ReactivePower = new JSONArray(); // 存放 无功功率
		JSONArray PCS3_Activepower = new JSONArray(); // 存放 有功功率
		JSONArray PCS3_ReactivePower = new JSONArray(); // 存放 无功功率
		JSONArray PCS4_Activepower = new JSONArray(); // 存放 有功功率
		JSONArray PCS4_ReactivePower = new JSONArray(); // 存放 无功功率
		JSONArray PCS5_Activepower = new JSONArray(); // 存放 有功功率
		JSONArray PCS5_ReactivePower = new JSONArray(); // 存放 无功功率


		JSONArray DCDC1_Loop1Power = new JSONArray();
		JSONArray DCDC1_Loop2Power = new JSONArray();
		JSONArray DCDC1_Loop3Power = new JSONArray();
		JSONArray DCDC2_Loop1Power = new JSONArray();
		JSONArray DCDC2_Loop2Power = new JSONArray();
		JSONArray DCDC2_Loop3Power = new JSONArray();




		DecimalFormat df = new DecimalFormat("#.##"); // 格式化数据样式
		/*****************************************PCS1**********************************************************/
		String pcs1sql = "SELECT * FROM [dbo]." + "PCSInfo" + " where AddTime BETWEEN '" + datastart + "' AND '"
				+ dataend + "' and PID%" + selectrange + "=0";

		int totalnum = conn.findCount(pcs1sql ); // 用来读取一共有多少数据
		ResultSet pcs1rs = conn.executeQuery(pcs1sql );// 查询数据库商品信息
		try {
			while (pcs1rs.next()) {
				PCS1_Activepower.add(df.format(pcs1rs.getFloat(10)));
				PCS1_ReactivePower.add(df.format(pcs1rs.getFloat(11)));

			}
			json.put("totalnum", totalnum);
			json.put("PCS1_Activepower", PCS1_Activepower);
			json.put("PCS1_ReactivePower", PCS1_ReactivePower);

		} catch (Exception ex) {
			ex.printStackTrace();
		}

		/*****************************************PCS2**********************************************************/
		String pcs2sql = "SELECT * FROM [dbo]." + "PCS2Info" + " where AddTime BETWEEN '" + datastart + "' AND '"
				+ dataend + "' and PID%" + selectrange + "=0";
		ResultSet pcsrs2 = conn.executeQuery(pcs2sql);// 查询数据库商品信息
		try {
			while (pcsrs2.next()) {
				PCS2_Activepower.add(df.format(pcsrs2.getFloat(10)));
				PCS2_ReactivePower.add(df.format(pcsrs2.getFloat(11)));

			}
			json.put("PCS2_Activepower", PCS2_Activepower);
			json.put("PCS2_ReactivePower", PCS2_ReactivePower);

		} catch (Exception ex) {
			ex.printStackTrace();
		}

		/*****************************************PCS3**********************************************************/
		String pcs3sql = "SELECT * FROM [dbo]." + "PCS3Info" + " where AddTime BETWEEN '" + datastart + "' AND '"
				+ dataend + "' and PID%" + selectrange + "=0";
		ResultSet pcsrs3 = conn.executeQuery(pcs3sql);// 查询数据库商品信息
		try {
			while (pcsrs3.next()) {
				PCS3_Activepower.add(df.format(pcsrs3.getFloat(10)));
				PCS3_ReactivePower.add(df.format(pcsrs3.getFloat(11)));

			}
			json.put("PCS3_Activepower", PCS3_Activepower);
			json.put("PCS3_ReactivePower", PCS3_ReactivePower);

		} catch (Exception ex) {
			ex.printStackTrace();
		}

		/*****************************************PCS4**********************************************************/
		String pcs4sql = "SELECT * FROM [dbo]." + "PCS4Info" + " where AddTime BETWEEN '" + datastart + "' AND '"
				+ dataend + "' and PID%" + selectrange + "=0";
		ResultSet pcsrs4 = conn.executeQuery(pcs4sql);// 查询数据库商品信息
		try {
			while (pcsrs4.next()) {
				PCS4_Activepower.add(df.format(pcsrs4.getFloat(10)));
				PCS4_ReactivePower.add(df.format(pcsrs4.getFloat(11)));

			}
			json.put("PCS4_Activepower", PCS4_Activepower);
			json.put("PCS4_ReactivePower", PCS4_ReactivePower);

		} catch (Exception ex) {
			ex.printStackTrace();
		}


		/*****************************************PCS5**********************************************************/
		String pcs5sql = "SELECT * FROM [dbo]." + "PCS5Info" + " where AddTime BETWEEN '" + datastart + "' AND '"
				+ dataend + "' and PID%" + selectrange + "=0";
		ResultSet pcsrs5 = conn.executeQuery(pcs5sql);// 查询数据库商品信息
		try {
			while (pcsrs5.next()) {
				PCS5_Activepower.add(df.format(pcsrs5.getFloat(10)));
				PCS5_ReactivePower.add(df.format(pcsrs5.getFloat(11)));

			}
			json.put("PCS5_Activepower", PCS5_Activepower);
			json.put("PCS5_ReactivePower", PCS5_ReactivePower);

		} catch (Exception ex) {
			ex.printStackTrace();
		}



		/*****************************************DCDC1**********************************************************/
		String dcdc1sql = "SELECT * FROM [dbo]." + "DCDCInfo" + " where AddTime BETWEEN '" + datastart + "' AND '"
				+ dataend + "' and PID%" + selectrange + "=0";
		ResultSet dcdcrs1 = conn.executeQuery(dcdc1sql);// 查询数据库商品信息
		try {
			while (dcdcrs1.next()) {
				DCDC1_Loop1Power.add(df.format(dcdcrs1.getFloat(18)));
				DCDC1_Loop2Power.add(df.format(dcdcrs1.getFloat(19)));
				DCDC1_Loop3Power.add(df.format(dcdcrs1.getFloat(20)));

			}
			json.put("DCDC1_Loop1Power", DCDC1_Loop1Power);
			json.put("DCDC1_Loop2Power", DCDC1_Loop2Power);
			json.put("DCDC1_Loop3Power", DCDC1_Loop3Power);

		} catch (Exception ex) {
			ex.printStackTrace();
		}

		/*****************************************DCDC2**********************************************************/
		String dcdc2sql = "SELECT * FROM [dbo]." + "DCDC2Info" + " where AddTime BETWEEN '" + datastart + "' AND '"
				+ dataend + "' and PID%" + selectrange + "=0";
		ResultSet dcdcrs2 = conn.executeQuery(dcdc2sql);// 查询数据库商品信息
		try {
			while (dcdcrs2.next()) {
				DCDC2_Loop1Power.add(df.format(dcdcrs2.getFloat(18)));
				DCDC2_Loop2Power.add(df.format(dcdcrs2.getFloat(19)));
				DCDC2_Loop3Power.add(df.format(dcdcrs2.getFloat(20)));


			}

			json.put("DCDC2_Loop1Power", DCDC2_Loop1Power);
			json.put("DCDC2_Loop2Power", DCDC2_Loop2Power);
			json.put("DCDC2_Loop3Power", DCDC2_Loop3Power);

		} catch (Exception ex) {
			ex.printStackTrace();
		}

		out.print(json);
		out.close();
		conn.closed();

	}


}



