package com.lyq.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.lyq.bean.BMS;
import com.lyq.bean.DB;
import com.lyq.bean.ExcelOperationUtil;
import com.lyq.bean.PCS;

/**
 * Servlet implementation class DoExcel
 */
public class DoExcel extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public DoExcel() {
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
		response.setContentType("text/html;charset=UTF-8");
		response.addHeader("Cache-Control", "no-store,no-cache,must-revalidate"); // 禁止页面缓存
		response.addHeader("Cache-Control", "post-check=0,pre-check=0");
		response.addHeader("Expires", "0");
		response.addHeader("Pragma", "no-cache");

		// 接收到的数据格式：name=BmsAtlInfo&time1=2014%2F8%2F7&time2=2016%2F8%2F10
		String name = request.getParameter("name");
		String starttime = request.getParameter("time1");
		String endtime = request.getParameter("time2");

		// JSONObject json=new JSONObject(); //定义了一个JSON对象 用于存放多个json数组 然后统一发送出去

		List<BMS> list = new ArrayList<BMS>();
		List<PCS> list2 = new ArrayList<PCS>();

		DB DATABASE = new DB(); // 实例化一个数据库

		if ("pcsInfo".equals(name) || "pcs2Info".equals(name) || "pcs3Info".equals(name) || "pcs4Info".equals(name)
				|| "pcs5Info".equals(name)) {

			String sql = "SELECT * FROM [dbo]." + name + " where AddTime BETWEEN '" + starttime + "' AND '" + endtime
					+ "'";
			ResultSet rs = DATABASE.executeQuery(sql);// 查询数据库商品信息
			try {
				while (rs.next()) {
					PCS pcs = new PCS();
					pcs.setPID(rs.getInt(1));
					pcs.setAVoltage(rs.getFloat(2));
					pcs.setBVoltage(rs.getFloat(3));
					pcs.setCVoltage(rs.getFloat(4));
					pcs.setACurrent(rs.getFloat(5));
					pcs.setBCurrent(rs.getFloat(6));
					pcs.setCCurrent(rs.getFloat(7));
					pcs.setDCVoltage(rs.getFloat(8));
					pcs.setDCCurrent(rs.getFloat(9));
					pcs.setActivePower(rs.getFloat(10));
					pcs.setReactivePower(rs.getFloat(11));
					pcs.setAddTime(rs.getString(12));
					pcs.setWorkingState(rs.getString(13));
					pcs.setOperationMode(rs.getString(14));
					pcs.setRunningState(rs.getString(15));
					pcs.setControlMode(rs.getString(16));
					pcs.setFaulty(rs.getString(17));

					list2.add(pcs);
					// System.out.println("PCS数据:"+pcs);
				}
			} catch (Exception ex) {
				System.out.println("异常信息：" + ex.getMessage());
				ex.printStackTrace();
			}
			PrintWriter out = response.getWriter(); // out流输出

			ExcelOperationUtil excelUtil = new ExcelOperationUtil();

			boolean res = excelUtil.createExcelFile_PCS(list2, name, starttime, endtime);

			if (res)
				out.println("YES");
			else
				out.println("NO");

		} else {
			String sql = "SELECT * FROM [dbo]." + name + " where AddTime BETWEEN '" + starttime + "' AND '" + endtime
					+ "'";
			// int totalnum= DATABASE.findCount(sql); //用来读取一共所烧行
			ResultSet rs = DATABASE.executeQuery(sql);// 查询数据库商品信息
			try {
				while (rs.next()) {
					BMS bms = new BMS();
					bms.setPID(rs.getInt(1));
					bms.setTotalVoltage(rs.getFloat(2));
					bms.setTotalCurrent(rs.getFloat(3));
					bms.setSOC(rs.getFloat(4));
					bms.setSOH(rs.getFloat(5));
					bms.setSingleMaxVoltage(rs.getFloat(6));
					bms.setSingleMinVoltage(rs.getFloat(7));
					bms.setSingleMaxTemperature(rs.getFloat(8));
					bms.setSingleMinTemperature(rs.getFloat(9));
					bms.setRunningState(rs.getString(10));
					bms.setFaultType(rs.getString(11));
					bms.setAddTime(rs.getString(12));
					list.add(bms);
					// System.out.println("bms数据:"+bms);
				}
			} catch (Exception ex) {
				System.out.println("异常信息：" + ex.getMessage());
				ex.printStackTrace();
			}
			// System.out.println("list数据:"+list);

			PrintWriter out = response.getWriter(); // out流输出

			ExcelOperationUtil excelUtil = new ExcelOperationUtil();

			boolean res = excelUtil.createExcelFile_BMS(list, name, starttime, endtime);

			if (res)
				out.println("YES");
			else
				out.println("NO");

		}

	}

}
