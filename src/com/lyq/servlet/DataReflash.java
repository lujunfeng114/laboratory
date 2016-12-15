package com.lyq.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.ResultSet;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.lyq.bean.BMS;
import com.lyq.bean.DB;
import com.lyq.bean.DCDC;
import com.lyq.bean.PCS;

import net.sf.json.JSONObject;

/**
 * Servlet implementation class DataReflash
 */
public class DataReflash extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public DataReflash() {
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
		if ("reflash".equals(action))
			reflashdatas(request, response);

	}

	private void reflashdatas(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		// response.setContentType( "text/xml;charset=UTF-8" );//设置响应格式为XML
		response.setContentType("text/html;charset=UTF-8");
		response.addHeader("Cache-Control", "no-store,no-cache,must-revalidate"); // 禁止页面缓存
		response.addHeader("Cache-Control", "post-check=0,pre-check=0");
		response.addHeader("Expires", "0");
		response.addHeader("Pragma", "no-cache");

		// ArrayList<PCS> list=new ArrayList<PCS>(); // 数组列表不适合
		// 应为没有配对关系定义一个列表用于存放读取的数据
		// JSONArray datatablelist = new JSONArray(); //json数组，创建一个jsonjson数组
		// 用于存放所有表最新的数据 不合适
		DB conn = new DB();

		PrintWriter out = response.getWriter(); // out流输出json 数据

		JSONObject DATA = new JSONObject(); // 定义了存放总PCS BMS DCDC总数据的json对象

		JSONObject PCSDATA = new JSONObject(); // 定义了存放总PCS数据的json对象

		JSONObject PCS1DATA = new JSONObject(); // 定义了存放PCS1数据的json对象
		JSONObject PCS2DATA = new JSONObject(); // 定义了存放PCS2数据的json对象
		JSONObject PCS3DATA = new JSONObject(); // 定义了存放PCS3数据的json对象
		JSONObject PCS4DATA = new JSONObject(); // 定义了存放PCS4数据的json对象
		JSONObject PCS5DATA = new JSONObject(); // 定义了存放PCS4数据的json对象

		JSONObject BMSDATA = new JSONObject(); // 定义了存放总BMS数据的json对象

		JSONObject BMS1DATA = new JSONObject(); // 定义了存放BMS1数据的json对象
		JSONObject BMS2DATA = new JSONObject(); // 定义了存放BMS2数据的json对象
		JSONObject BMS3DATA = new JSONObject(); // 定义了存放BMS3数据的json对象
		JSONObject BMS4DATA = new JSONObject(); // 定义了存放BMS4数据的json对象
		JSONObject BMS5DATA = new JSONObject(); // 定义了存放BMS4数据的json对象


		JSONObject DCDCDATA = new JSONObject(); // 定义了存放总DCDC数据的json对象

		JSONObject DCDC1DATA = new JSONObject(); // 定义了存放DCDC1数据的json对象
		JSONObject DCDC2DATA = new JSONObject(); // 定义了存放DCDC1数据的json对象
		JSONObject DCDC3DATA = new JSONObject(); // 定义了存放DCDC1数据的json对象
		JSONObject DCDC4DATA = new JSONObject(); // 定义了存放DCDC1数据的json对象
		JSONObject DCDC5DATA = new JSONObject(); // 定义了存放DCDC1数据的json对象

		//System.out.println("---------------------PCS1数据--------------------------------------\n");
		// 连接PCS1
		String pcs1sql = "select top 1 *from DBO.PCSinfo order by PID desc ";
		ResultSet pcs1rs = conn.executeQuery(pcs1sql);// 查询数据库商品信息
		try {
			while (pcs1rs.next()) {
				PCS pcs1data = new PCS(); // 直接将PCS 类用输出流输出
				pcs1data.setPID(pcs1rs.getInt(1));
				pcs1data.setAVoltage(pcs1rs.getFloat(2));
				pcs1data.setBVoltage(pcs1rs.getFloat(3));
				pcs1data.setCVoltage(pcs1rs.getFloat(4));
				pcs1data.setACurrent(pcs1rs.getFloat(5));
				pcs1data.setBCurrent(pcs1rs.getFloat(6));
				pcs1data.setCCurrent(pcs1rs.getFloat(7));
				// pcs1data.setFrequency(pcs1rs.getFloat(8));
				pcs1data.setDCVoltage(pcs1rs.getFloat(8));
				pcs1data.setDCCurrent(pcs1rs.getFloat(9));
				pcs1data.setActivePower(pcs1rs.getFloat(10));
				pcs1data.setReactivePower(pcs1rs.getFloat(11));
				pcs1data.setAddTime(pcs1rs.getString(12));
				pcs1data.setWorkingState(pcs1rs.getString(13));
				pcs1data.setOperationMode(pcs1rs.getString(14));
				pcs1data.setRunningState(pcs1rs.getString(15));
				pcs1data.setControlMode(pcs1rs.getString(16));
				pcs1data.setFaulty(pcs1rs.getString(17));

				PCS1DATA.put("pcs1", pcs1data);// 将PCS1查询的最新数据添加到 PCS1DATA
				// json对象
				//System.out.println("PCS1DATA:" + PCS1DATA); // 查看一下
				PCSDATA.put("pcs1", pcs1data);// 将PCS1查询的最新数据添加到总的 PCSDATA 对象
				DATA.put("pcs1", pcs1data);
				// //System.out.println("PCSDATA:"+PCSDATA);
			}
		} catch (Exception ex) {
			ex.printStackTrace();
		}

		//System.out.println("---------------------PCS2数据--------------------------------------\n");
		// 连接PCS2
		String pcs2sql = "select top 1 *from DBO.PCS2Info order by PID desc ";
		ResultSet pcs2rs = conn.executeQuery(pcs2sql);// 查询数据库商品信息
		try {
			while (pcs2rs.next()) {
				PCS pcs2data = new PCS();
				pcs2data.setPID(pcs2rs.getInt(1));
				pcs2data.setAVoltage(pcs2rs.getFloat(2));
				pcs2data.setBVoltage(pcs2rs.getFloat(3));
				pcs2data.setCVoltage(pcs2rs.getFloat(4));
				pcs2data.setACurrent(pcs2rs.getFloat(5));
				pcs2data.setBCurrent(pcs2rs.getFloat(6));
				pcs2data.setCCurrent(pcs2rs.getFloat(7));
				// pcs2data.setFrequency(pcs2rs.getFloat(8));
				pcs2data.setDCVoltage(pcs2rs.getFloat(8));
				pcs2data.setDCCurrent(pcs2rs.getFloat(9));
				pcs2data.setActivePower(pcs2rs.getFloat(10));
				pcs2data.setReactivePower(pcs2rs.getFloat(11));
				pcs2data.setAddTime(pcs2rs.getString(12));
				pcs2data.setWorkingState(pcs2rs.getString(13));
				pcs2data.setOperationMode(pcs2rs.getString(14));
				pcs2data.setRunningState(pcs2rs.getString(15));
				pcs2data.setControlMode(pcs2rs.getString(16));
				pcs2data.setFaulty(pcs2rs.getString(17));

				PCS2DATA.put("pcs2", pcs2data);// 将PCS2查询的最新数据添加到 PCS1DATA
				// json对象
				//System.out.println("PCS2DATA:" + PCS2DATA); // 查看一下
				PCSDATA.put("pcs2", pcs2data);// 将PCS2查询的最新数据添加到总的 PCSDATA 对象
				DATA.put("pcs2", pcs2data);
				// //System.out.println("PCSDATA:"+PCSDATA);
			}
		} catch (Exception ex) {
			ex.printStackTrace();
		}

		//System.out.println("------------------------PCS3数据--------------------------------------\n");
		// 连接PCS3
		String pcs3sql = "select top 1 *from DBO.PCS3Info order by PID desc ";
		ResultSet pcs3rs = conn.executeQuery(pcs3sql);// 查询数据库商品信息
		try {
			while (pcs3rs.next()) {
				PCS pcs3data = new PCS();
				pcs3data.setPID(pcs3rs.getInt(1));
				pcs3data.setAVoltage(pcs3rs.getFloat(2));
				pcs3data.setBVoltage(pcs3rs.getFloat(3));
				pcs3data.setCVoltage(pcs3rs.getFloat(4));
				pcs3data.setACurrent(pcs3rs.getFloat(5));
				pcs3data.setBCurrent(pcs3rs.getFloat(6));
				pcs3data.setCCurrent(pcs3rs.getFloat(7));
				// pcs3data.setFrequency(pcs3rs.getFloat(8));
				pcs3data.setDCVoltage(pcs3rs.getFloat(8));
				pcs3data.setDCCurrent(pcs3rs.getFloat(9));
				pcs3data.setActivePower(pcs3rs.getFloat(10));
				pcs3data.setReactivePower(pcs3rs.getFloat(11));
				pcs3data.setAddTime(pcs3rs.getString(12));
				pcs3data.setWorkingState(pcs3rs.getString(13));
				pcs3data.setOperationMode(pcs3rs.getString(14));
				pcs3data.setRunningState(pcs3rs.getString(15));
				pcs3data.setControlMode(pcs3rs.getString(16));
				pcs3data.setFaulty(pcs3rs.getString(17));

				PCS3DATA.put("pcs3", pcs3data);// 将PCS3查询的最新数据添加到 PCS1DATA
				// json对象
				//System.out.println("PCS3DATA:" + PCS3DATA); // 查看一下
				PCSDATA.put("pcs3", pcs3data);// 将PCS3查询的最新数据添加到总的 PCSDATA 对象
				DATA.put("pcs3", pcs3data);
				// //System.out.println("PCSDATA:"+PCSDATA);
			}
		} catch (Exception ex) {
			ex.printStackTrace();
		}

		//System.out.println("---------------------PCS4数据--------------------------------------\n");
		// 连接PCS4
		String pcs4sql = "select top 1 *from DBO.PCS4Info order by PID desc ";
		ResultSet pcs4rs = conn.executeQuery(pcs4sql);// 查询数据库商品信息
		try {
			while (pcs4rs.next()) {
				PCS pcs4data = new PCS();
				pcs4data.setPID(pcs4rs.getInt(1));
				pcs4data.setAVoltage(pcs4rs.getFloat(2));
				pcs4data.setBVoltage(pcs4rs.getFloat(3));
				pcs4data.setCVoltage(pcs4rs.getFloat(4));
				pcs4data.setACurrent(pcs4rs.getFloat(5));
				pcs4data.setBCurrent(pcs4rs.getFloat(6));
				pcs4data.setCCurrent(pcs4rs.getFloat(7));
				// pcs4data.setFrequency(pcs4rs.getFloat(8));
				pcs4data.setDCVoltage(pcs4rs.getFloat(8));
				pcs4data.setDCCurrent(pcs4rs.getFloat(9));
				pcs4data.setActivePower(pcs4rs.getFloat(10));
				pcs4data.setReactivePower(pcs4rs.getFloat(11));
				pcs4data.setAddTime(pcs4rs.getString(12));
				pcs4data.setWorkingState(pcs4rs.getString(13));
				pcs4data.setOperationMode(pcs4rs.getString(14));
				pcs4data.setRunningState(pcs4rs.getString(15));
				pcs4data.setControlMode(pcs4rs.getString(16));
				pcs4data.setFaulty(pcs4rs.getString(17));

				PCS4DATA.put("pcs4", pcs4data);// 将PCS4查询的最新数据添加到 PCS1DATA
				// json对象
				//System.out.println("PCS4DATA:" + PCS4DATA); // 查看一下
				PCSDATA.put("pcs4", pcs4data);// 将PCS4查询的最新数据添加到总的 PCSDATA 对象
				DATA.put("pcs4", pcs4data);
				// //System.out.println("PCSDATA:"+PCSDATA);
			}
		} catch (Exception ex) {
			ex.printStackTrace();
		}

		//System.out.println("---------------------PCS5数据--------------------------------------\n");
		// 连接pcs5
		String pcs5sql = "select top 1 *from DBO.PCS5Info order by PID desc ";
		ResultSet pcs5rs = conn.executeQuery(pcs5sql);// 查询数据库商品信息
		try {
			while (pcs5rs.next()) {
				PCS pcs5data = new PCS();
				pcs5data.setPID(pcs5rs.getInt(1));
				pcs5data.setAVoltage(pcs5rs.getFloat(2));
				pcs5data.setBVoltage(pcs5rs.getFloat(3));
				pcs5data.setCVoltage(pcs5rs.getFloat(4));
				pcs5data.setACurrent(pcs5rs.getFloat(5));
				pcs5data.setBCurrent(pcs5rs.getFloat(6));
				pcs5data.setCCurrent(pcs5rs.getFloat(7));
				// pcs5data.setFrequency(pcs5rs.getFloat(8));
				pcs5data.setDCVoltage(pcs5rs.getFloat(8));
				pcs5data.setDCCurrent(pcs5rs.getFloat(9));
				pcs5data.setActivePower(pcs5rs.getFloat(10));
				pcs5data.setReactivePower(pcs5rs.getFloat(11));
				pcs5data.setAddTime(pcs5rs.getString(12));
				pcs5data.setWorkingState(pcs5rs.getString(13));
				pcs5data.setOperationMode(pcs5rs.getString(14));
				pcs5data.setRunningState(pcs5rs.getString(15));
				pcs5data.setControlMode(pcs5rs.getString(16));
				pcs5data.setFaulty(pcs5rs.getString(17));

				PCS5DATA.put("pcs5", pcs5data);// 将PCS5查询的最新数据添加到 PCS1DATA
				// json对象
				//System.out.println("PCS5DATA:" + PCS5DATA); // 查看一下
				PCSDATA.put("pcs5", pcs5data);// 将PCS5查询的最新数据添加到总的 PCSDATA 对象
				DATA.put("pcs5", pcs5data);
				//System.out.println("--------------所有PCS的数据------------");
				//System.out.println("PCSDATA:" + PCSDATA);

			}
		} catch (Exception ex) {
			ex.printStackTrace();
		}

		//System.out.println("---------------------BMSAtl数据--------------------------------------\n");
		// 连接BMS1
		String bms1sql = "select top 1 *from DBO.BMSAtlInfo order by PID desc ";
		ResultSet bms1rs = conn.executeQuery(bms1sql);// 查询数据库商品信息
		try {
			while (bms1rs.next()) {
				BMS bms1data = new BMS();
				bms1data.setPID(bms1rs.getInt(1));
				bms1data.setTotalVoltage(bms1rs.getFloat(2));
				bms1data.setTotalCurrent(bms1rs.getFloat(3));
				bms1data.setSOC(bms1rs.getFloat(4));
				bms1data.setSOH(bms1rs.getFloat(5));
				bms1data.setSingleMaxVoltage(bms1rs.getFloat(6));
				bms1data.setSingleMinVoltage(bms1rs.getFloat(7));
				bms1data.setSingleMaxTemperature(bms1rs.getFloat(8));
				bms1data.setSingleMinTemperature(bms1rs.getFloat(9));
				bms1data.setRunningState(bms1rs.getString(10));
				bms1data.setFaultType(bms1rs.getString(11));

				BMS1DATA.put("BMSAtl", bms1data);// 将bms1查询的最新数据添加到 PCS1DATA
				// json对象
				//System.out.println("BMSAtl:" + BMS1DATA); // 查看一下
				BMSDATA.put("BMSAtl", bms1data);
				DATA.put("BMSAtl", bms1data);
				// //System.out.println("BMSDATA:"+BMSDATA);
			}
		} catch (Exception ex) {
			ex.printStackTrace();
		}

		//System.out.println("---------------------BMSGaoTeliDianInfo数据--------------------------------------\n");
		// 连接BMS2
		String bms2sql = "select top 1 *from DBO.BMSGaoTeliDianInfo order by PID desc ";
		ResultSet bms2rs = conn.executeQuery(bms2sql);// 查询数据库商品信息
		try {
			while (bms2rs.next()) {
				BMS bms2data = new BMS();
				bms2data.setPID(bms2rs.getInt(1));
				bms2data.setTotalVoltage(bms2rs.getFloat(2));
				bms2data.setTotalCurrent(bms2rs.getFloat(3));
				bms2data.setSOC(bms2rs.getFloat(4));
				bms2data.setSOH(bms2rs.getFloat(5));
				bms2data.setSingleMaxVoltage(bms2rs.getFloat(6));
				bms2data.setSingleMinVoltage(bms2rs.getFloat(7));
				bms2data.setSingleMaxTemperature(bms2rs.getFloat(8));
				bms2data.setSingleMinTemperature(bms2rs.getFloat(9));
				bms2data.setRunningState(bms2rs.getString(10));
				bms2data.setFaultType(bms2rs.getString(11));

				BMS2DATA.put("BMSGaoTeliDianInfo", bms2data);// 将bms2查询的最新数据添加到

				// json对象
				//System.out.println("BMSGaoTeliDianInfo:" + BMS2DATA); // 查看一下
				BMSDATA.put("BMSGaoTeliDianInfo", bms2data);
				DATA.put("BMSGaoTeliDianInfo", bms2data);
				// //System.out.println("BMSDATA:"+BMSDATA);
			}
		} catch (Exception ex) {
			ex.printStackTrace();
		}

		//System.out.println("---------------------BMSGaoTeQianSuanInfo数据--------------------------------------\n");
		// 连接BMS3
		String bms3sql = "select top 1 *from DBO.BMSGaoTeQianSuanInfo order by PID desc ";
		ResultSet bms3rs = conn.executeQuery(bms3sql);// 查询数据库商品信息
		try {
			while (bms3rs.next()) {
				BMS bms3data = new BMS();
				bms3data.setPID(bms3rs.getInt(1));
				bms3data.setTotalVoltage(bms3rs.getFloat(2));
				bms3data.setTotalCurrent(bms3rs.getFloat(3));
				bms3data.setSOC(bms3rs.getFloat(4));
				bms3data.setSOH(bms3rs.getFloat(5));
				bms3data.setSingleMaxVoltage(bms3rs.getFloat(6));
				bms3data.setSingleMinVoltage(bms3rs.getFloat(7));
				bms3data.setSingleMaxTemperature(bms3rs.getFloat(8));
				bms3data.setSingleMinTemperature(bms3rs.getFloat(9));
				bms3data.setRunningState(bms3rs.getString(10));
				bms3data.setFaultType(bms3rs.getString(11));

				BMS3DATA.put("BMSGaoTeQianSuanInfo", bms3data);// 将BMS3查询的最新数据添加到

				// json对象
				//System.out.println("BMSGaoTeQianSuanInfo:" + BMS3DATA); // 查看一下
				BMSDATA.put("BMSGaoTeQianSuanInfo", bms3data);// 将BMS3查询的最新数据添加到总的
				// 对象
				DATA.put("BMSGaoTeQianSuanInfo", bms3data);
				// //System.out.println("BMSDATA:"+BMSDATA);
			}
		} catch (Exception ex) {
			ex.printStackTrace();
		}

		//System.out.println("---------------------BMSJiXingInfo数据--------------------------------------\n");
		// 连接BMS4
		String bms4sql = "select top 1 *from DBO.BMSJiXingInfo order by PID desc ";
		ResultSet bms4rs = conn.executeQuery(bms4sql);// 查询数据库商品信息
		try {
			while (bms4rs.next()) {
				BMS bms4data = new BMS();
				bms4data.setPID(bms4rs.getInt(1));
				bms4data.setTotalVoltage(bms4rs.getFloat(2));
				bms4data.setTotalCurrent(bms4rs.getFloat(3));
				bms4data.setSOC(bms4rs.getFloat(4));
				bms4data.setSOH(bms4rs.getFloat(5));
				bms4data.setSingleMaxVoltage(bms4rs.getFloat(6));
				bms4data.setSingleMinVoltage(bms4rs.getFloat(7));
				bms4data.setSingleMaxTemperature(bms4rs.getFloat(8));
				bms4data.setSingleMinTemperature(bms4rs.getFloat(9));
				bms4data.setRunningState(bms4rs.getString(10));
				bms4data.setFaultType(bms4rs.getString(11));

				BMS4DATA.put("BMSJiXingInfo", bms4data);// 将BMS4查询的最新数据添加到

				//System.out.println("BMSJiXingInfo:" + BMS4DATA); // 查看一下
				BMSDATA.put("BMSJiXingInfo", bms4data);// 将BMS4查询的最新数据添加到总的 对象
				DATA.put("BMSJiXingInfo", bms4data);
				//System.out.println("BMSDATA:"+BMSDATA);
			}
		} catch (Exception ex) {
			ex.printStackTrace();
		}

		//System.out.println("---------------------BMSkaiMaiInfo数据--------------------------------------\n");
		// 连接bms5
		String bms5sql = "select top 1 *from DBO.BMSJiXingInfo order by PID desc ";
		ResultSet bms5rs = conn.executeQuery(bms5sql);// 查询数据库商品信息
		try {
			while (bms5rs.next()) {
				BMS bms5data = new BMS();
				bms5data.setPID(bms5rs.getInt(1));
				bms5data.setTotalVoltage(bms5rs.getFloat(2));
				bms5data.setTotalCurrent(bms5rs.getFloat(3));
				bms5data.setSOC(bms5rs.getFloat(4));
				bms5data.setSOH(bms5rs.getFloat(5));
				bms5data.setSingleMaxVoltage(bms5rs.getFloat(6));
				bms5data.setSingleMinVoltage(bms5rs.getFloat(7));
				bms5data.setSingleMaxTemperature(bms5rs.getFloat(8));
				bms5data.setSingleMinTemperature(bms5rs.getFloat(9));
				bms5data.setRunningState(bms5rs.getString(10));
				bms5data.setFaultType(bms5rs.getString(11));

				BMS5DATA.put("BMSkaiMaiInfo", bms5data);// 将BMS5查询的最新数据添加到

				//System.out.println("BMSkaiMaiInfo:" + BMS5DATA); // 查看一下
				BMSDATA.put("BMSkaiMaiInfo", bms5data);// 将BMS5查询的最新数据添加到总的

				DATA.put("BMSkaiMaiInfo", bms5data);

			}
		} catch (Exception ex) {
			ex.printStackTrace();
		}


		//System.out.println("---------------------DCDC1DATA数据--------------------------------------\n");
		// 连接dc/dc1
		String dcdc1sql = "select top 1 *from DBO.DCDCinfo order by PID desc ";
		ResultSet dcdc1rs = conn.executeQuery(dcdc1sql);// 查询数据库商品信息
		try {
			while (dcdc1rs.next()) {
				DCDC dcdc1data = new DCDC();
				dcdc1data.setPID(dcdc1rs.getInt(1));
				dcdc1data.setLoop1PortVoltage(dcdc1rs.getFloat(2));
				dcdc1data.setLoop2PortVoltage(dcdc1rs.getFloat(3));
				dcdc1data.setLoop3PortVoltage(dcdc1rs.getFloat(4));
				dcdc1data.setLoop1CapacitorVoltage(dcdc1rs.getFloat(5));
				dcdc1data.setLoop2CapacitorVoltage(dcdc1rs.getFloat(6));
				dcdc1data.setLoop3CapacitorVoltage(dcdc1rs.getFloat(7));
				dcdc1data.setHighVoltageCapacitorVoltage(dcdc1rs.getFloat(8));
				dcdc1data.setHighVoltagePortVoltage(dcdc1rs.getFloat(9));
				dcdc1data.setLoop1PortCurrent(dcdc1rs.getFloat(10));
				dcdc1data.setLoop2PortCurrent(dcdc1rs.getFloat(11));
				dcdc1data.setLoop3PortCurrent(dcdc1rs.getFloat(12));
				dcdc1data.setLoop1InductorCurrent(dcdc1rs.getFloat(13));
				dcdc1data.setLoop2InductorCurrent(dcdc1rs.getFloat(14));
				dcdc1data.setLoop3InductorCurrent(dcdc1rs.getFloat(15));
				dcdc1data.setBusCurrent(dcdc1rs.getFloat(16));
				dcdc1data.setHighVoltageTotalCurrent(dcdc1rs.getFloat(17));
				dcdc1data.setLoop1Power(dcdc1rs.getFloat(18));
				dcdc1data.setLoop2Power(dcdc1rs.getFloat(19));
				dcdc1data.setLoop3Power(dcdc1rs.getFloat(20));
				dcdc1data.setHighVoltagePower(dcdc1rs.getFloat(21));
				dcdc1data.setLoop1WorkingState(dcdc1rs.getString(22));
				dcdc1data.setLoop2WorkingState(dcdc1rs.getString(23));
				dcdc1data.setLoop3WorkingState(dcdc1rs.getString(24));
				dcdc1data.setTotalWorkingState(dcdc1rs.getString(25));
				dcdc1data.setLoop1WorkingMode(dcdc1rs.getString(26));
				dcdc1data.setLoop2WorkingMode(dcdc1rs.getString(27));
				dcdc1data.setLoop3WorkingMode(dcdc1rs.getString(28));
				dcdc1data.setLoop1Modulation(dcdc1rs.getFloat(29));
				dcdc1data.setLoop2Modulation(dcdc1rs.getFloat(30));
				dcdc1data.setLoop3Modulation(dcdc1rs.getFloat(31));
				dcdc1data.setLoop1VoltageLoopSet(dcdc1rs.getFloat(32));
				dcdc1data.setLoop2VoltageLoopSet(dcdc1rs.getFloat(33));
				dcdc1data.setLoop3VoltageLoopSet(dcdc1rs.getFloat(34));
				dcdc1data.setLoop1CurrentLoopSet(dcdc1rs.getFloat(35));
				dcdc1data.setLoop2CurrentLoopSet(dcdc1rs.getFloat(36));
				dcdc1data.setLoop3CurrentLoopSet(dcdc1rs.getFloat(37));
				dcdc1data.setAddTime(dcdc1rs.getString(38));
				dcdc1data.setAddTime(dcdc1rs.getString(39));

				DCDC1DATA.put("DCDC1DATA", dcdc1data);// 将DCDC1查询的最新数据添加到

				//System.out.println("DCDC1DATA:" + dcdc1data); // 查看一下
				DCDCDATA.put("DCDC1DATA", dcdc1data);// 将DCDC1查询的最新数据添加到总的

				DATA.put("DCDC1DATA", dcdc1data);


			}
		} catch (Exception ex) {
			ex.printStackTrace();
		}


		//System.out.println("---------------------DCDC2DATA数据--------------------------------------\n");
		// 连接dc/dc2
		String dcdc2sql = "select top 1 *from DBO.DCDC2info order by PID desc ";
		ResultSet dcdc2rs = conn.executeQuery(dcdc2sql);// 查询数据库商品信息
		try {
			while (dcdc2rs.next()) {
				DCDC dcdc2data = new DCDC();
				dcdc2data.setPID(dcdc2rs.getInt(1));
				dcdc2data.setLoop1PortVoltage(dcdc2rs.getFloat(2));
				dcdc2data.setLoop2PortVoltage(dcdc2rs.getFloat(3));
				dcdc2data.setLoop3PortVoltage(dcdc2rs.getFloat(4));
				dcdc2data.setLoop1CapacitorVoltage(dcdc2rs.getFloat(5));
				dcdc2data.setLoop2CapacitorVoltage(dcdc2rs.getFloat(6));
				dcdc2data.setLoop3CapacitorVoltage(dcdc2rs.getFloat(7));
				dcdc2data.setHighVoltageCapacitorVoltage(dcdc2rs.getFloat(8));
				dcdc2data.setHighVoltagePortVoltage(dcdc2rs.getFloat(9));
				dcdc2data.setLoop1PortCurrent(dcdc2rs.getFloat(10));
				dcdc2data.setLoop2PortCurrent(dcdc2rs.getFloat(11));
				dcdc2data.setLoop3PortCurrent(dcdc2rs.getFloat(12));
				dcdc2data.setLoop1InductorCurrent(dcdc2rs.getFloat(13));
				dcdc2data.setLoop2InductorCurrent(dcdc2rs.getFloat(14));
				dcdc2data.setLoop3InductorCurrent(dcdc2rs.getFloat(15));
				dcdc2data.setBusCurrent(dcdc2rs.getFloat(16));
				dcdc2data.setHighVoltageTotalCurrent(dcdc2rs.getFloat(17));
				dcdc2data.setLoop1Power(dcdc2rs.getFloat(18));
				dcdc2data.setLoop2Power(dcdc2rs.getFloat(19));
				dcdc2data.setLoop3Power(dcdc2rs.getFloat(20));
				dcdc2data.setHighVoltagePower(dcdc2rs.getFloat(21));
				dcdc2data.setLoop1WorkingState(dcdc2rs.getString(22));
				dcdc2data.setLoop2WorkingState(dcdc2rs.getString(23));
				dcdc2data.setLoop3WorkingState(dcdc2rs.getString(24));
				dcdc2data.setTotalWorkingState(dcdc2rs.getString(25));
				dcdc2data.setLoop1WorkingMode(dcdc2rs.getString(26));
				dcdc2data.setLoop2WorkingMode(dcdc2rs.getString(27));
				dcdc2data.setLoop3WorkingMode(dcdc2rs.getString(28));
				dcdc2data.setLoop1Modulation(dcdc2rs.getFloat(29));
				dcdc2data.setLoop2Modulation(dcdc2rs.getFloat(30));
				dcdc2data.setLoop3Modulation(dcdc2rs.getFloat(31));
				dcdc2data.setLoop1VoltageLoopSet(dcdc2rs.getFloat(32));
				dcdc2data.setLoop2VoltageLoopSet(dcdc2rs.getFloat(33));
				dcdc2data.setLoop3VoltageLoopSet(dcdc2rs.getFloat(34));
				dcdc2data.setLoop1CurrentLoopSet(dcdc2rs.getFloat(35));
				dcdc2data.setLoop2CurrentLoopSet(dcdc2rs.getFloat(36));
				dcdc2data.setLoop3CurrentLoopSet(dcdc2rs.getFloat(37));
				dcdc2data.setAddTime(dcdc2rs.getString(38));
				dcdc2data.setAddTime(dcdc2rs.getString(39));

				DCDC2DATA.put("DCDC2DATA", dcdc2data);// 将DCDC查询的最新数据添加到
				//System.out.println("dcdc2DATA:" + dcdc2data); // 查看一下
				DCDCDATA.put("DCDC2DATA", dcdc2data);// 将DCDC查询的最新数据添加到总的
				DATA.put("DCDC2DATA", dcdc2data);

			}
		} catch (Exception ex) {
			ex.printStackTrace();
		}


		//System.out.println("--------------BMS的数据------------");
		//System.out.println("BMSDATA:" + BMSDATA);

		//System.out.println("--------------所有PCS和BMS的数据------------");
		//System.out.println("DATA:" + DATA);


		out.print(DATA);

		out.close();
		conn.closed();
	}

}
