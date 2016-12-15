package com.lyq.bean;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import jxl.Workbook;
import jxl.format.Alignment;
import jxl.format.Border;
import jxl.format.BorderLineStyle;
import jxl.format.Colour;
import jxl.format.UnderlineStyle;
import jxl.format.VerticalAlignment;
import jxl.write.Label;
import jxl.write.WritableCellFormat;
import jxl.write.WritableFont;
import jxl.write.WritableSheet;
import jxl.write.WritableWorkbook;

public class ExcelOperationUtil {
	/**
	 * JXL创建Excel文件
	 *
	 * @author LJF
	 * @param args
	 */
	Date now = new Date();
	SimpleDateFormat dateFormat1 = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");// 可以方便地修改日期格式
	SimpleDateFormat dateFormat2 = new SimpleDateFormat("yyyy_MM_dd_HH_mm_s");// 可以方便地修改日期格式
	String nowtime = dateFormat1.format(now);
	String nowtime2 = dateFormat2.format(now);
	int SheetMaxSize = 40000;
	int SheetNum = 0;

	/////////////////////////////////////// 输出//////////////////////////////
	public Boolean createExcelFile_PCS(List<PCS> list, String name, String starttime, String endtime) { // String
		// equipment
		// ,String
		// filepath,String
		// filename

		String[] title = { "PID", "AVoltage", "BVoltage", "CVoltage", "ACurrent", "BCurrent", "CCurrent", "DCVoltage",
				"DCCurrent", "ActivePower", "ReactivePower", "AddTime", "WorkingState", "OperationMode", "RunningState",
				"ControlMode", "FaultType" };

		// 创建Excel文件
		// File file = new File("D:/PCS数据导出/该文件夹下为PCS导出数据.xls");
		try {

			// 创建Excel工作簿;
			WritableWorkbook workbook = Workbook.createWorkbook(new File("E:/PCS_" + name + "_" + nowtime2 + ".xls"));

			// excel标题格式
			// 设置字体;
			WritableFont font1 = new WritableFont(WritableFont.ARIAL, 14, WritableFont.BOLD, false,
					UnderlineStyle.NO_UNDERLINE, Colour.GREEN);

			WritableCellFormat cellFormat1 = new WritableCellFormat(font1);
			// 设置背景颜色;
			// cellFormat1.setBackground(Colour.BLUE_GREY);
			// 设置边框;
			cellFormat1.setBorder(Border.ALL, BorderLineStyle.THIN);
			// 设置自动换行;
			cellFormat1.setWrap(true);
			// 设置文字居中对齐方式;
			cellFormat1.setAlignment(Alignment.CENTRE);
			// 设置垂直居中;
			cellFormat1.setVerticalAlignment(VerticalAlignment.CENTRE);

			// excel正文格式
			// 给第其他行设置背景、字体颜色、对齐方式等等;
			WritableFont font2 = new WritableFont(WritableFont.ARIAL, 14, WritableFont.NO_BOLD, false,
					UnderlineStyle.NO_UNDERLINE, Colour.BLUE2);
			WritableCellFormat cellFormat2 = new WritableCellFormat(font2);
			cellFormat2.setAlignment(Alignment.CENTRE);
			// cellFormat2.setBackground(Colour.PINK);
			cellFormat2.setBorder(Border.ALL, BorderLineStyle.THIN);
			cellFormat2.setWrap(true);

			// 格式化数值 显示小数点后2位
			// NumberFormat Numformat= new NumberFormat("#.##");

			// EXCEL 有行数限制(40000) 确定几张sheet
			if (list.size() % SheetMaxSize > 0)
				SheetNum = list.size() / SheetMaxSize + 1;
			else
				SheetNum = list.size() / SheetMaxSize;

			for (int k = 0; k < SheetNum; k++) {
				WritableSheet sheet = workbook.createSheet("页" + k, k);

				// 给sheet电子版中所有的列设默认行高，行宽
				sheet.getSettings().setDefaultRowHeight(400);
				sheet.getSettings().setDefaultColumnWidth(20);

				Label label = null;
				// 第一行
				sheet.mergeCells(0, 0, 16, 0);// 合并第一行 第1~18列
				sheet.setRowView(0, 600, false); // 设置行高

				// 第二行设置不同的宽度和高度
				sheet.setColumnView(1, 40); // 宽
				sheet.setRowView(1, 1200, false); // 设置行高

				// 表头
				label = new Label(0, 0, "中国电力科学研究院南京分院储能实验室-实验数据导出", cellFormat1); // (列
				// ，
				// 行
				// ，文字，
				// 格式)
				sheet.addCell(label);
				label = new Label(0, 1, "说明信息", cellFormat1);
				sheet.addCell(label);
				label = new Label(1, 1, "数据来源：中国电力科学研究院南京分院", cellFormat1);
				sheet.addCell(label);
				label = new Label(2, 1, "版本：1.0", cellFormat1);
				sheet.addCell(label);
				label = new Label(3, 1, "查询装置：" + name, cellFormat1);
				sheet.addCell(label);
				label = new Label(4, 1, "查询时间：" + starttime + "~" + endtime, cellFormat1);
				sheet.addCell(label);
				label = new Label(5, 1, "打印行数：" + list.size(), cellFormat1);
				sheet.addCell(label);
				label = new Label(6, 1, "打印（Sheet）页数：" + SheetNum, cellFormat1);
				sheet.addCell(label);
				label = new Label(7, 1, "每页行数：" + SheetMaxSize, cellFormat1);
				sheet.addCell(label);
				label = new Label(8, 1, "打印时间:" + nowtime, cellFormat1);
				sheet.addCell(label);
				label = new Label(9, 1, "版权:版权归中国电力科学研究院所有", cellFormat1);
				sheet.addCell(label);

				// 第三行设置列名
				for (int i = 0; i < title.length; i++) {
					label = new Label(i, 2, title[i], cellFormat1);
					sheet.addCell(label);
				}

				// 追加数据 40000 为一页 m为每页计数
				for (int i = k * SheetMaxSize, m = 0; i < (k + 1) * SheetMaxSize && m < SheetMaxSize; i++, m++) {
					if (i == list.size()) // 防止数组溢出
						break;
					PCS pcs = list.get(i);

					jxl.write.Number PID = new jxl.write.Number(0, m + 3, pcs.getPID(), cellFormat2);
					sheet.addCell(PID);

					jxl.write.Number AVoltage = new jxl.write.Number(1, m + 3, pcs.getAVoltage(), cellFormat2);
					sheet.addCell(AVoltage);

					jxl.write.Number BVoltage = new jxl.write.Number(2, m + 3, pcs.getBVoltage(), cellFormat2);
					sheet.addCell(BVoltage);

					jxl.write.Number CVoltage = new jxl.write.Number(3, m + 3, pcs.getCVoltage(), cellFormat2);
					sheet.addCell(CVoltage);

					jxl.write.Number ACurrent = new jxl.write.Number(4, m + 3, pcs.getACurrent(), cellFormat2);
					sheet.addCell(ACurrent);

					jxl.write.Number BCurrent = new jxl.write.Number(5, m + 3, pcs.getBCurrent(), cellFormat2);
					sheet.addCell(BCurrent);

					jxl.write.Number CCurrent = new jxl.write.Number(6, m + 3, pcs.getCCurrent(), cellFormat2);
					sheet.addCell(CCurrent);

					jxl.write.Number DCVoltage = new jxl.write.Number(7, m + 3, pcs.getDCVoltage(), cellFormat2);
					sheet.addCell(DCVoltage);

					jxl.write.Number DCCurrent = new jxl.write.Number(8, m + 3, pcs.getDCCurrent(), cellFormat2);
					sheet.addCell(DCCurrent);

					jxl.write.Number ActivePower = new jxl.write.Number(9, m + 3, pcs.getActivePower(), cellFormat2);
					sheet.addCell(ActivePower);

					jxl.write.Number ReactivePower = new jxl.write.Number(10, m + 3, pcs.getReactivePower(),
							cellFormat2);
					sheet.addCell(ReactivePower);

					label = new Label(11, m + 3, pcs.getAddTime(), cellFormat2);
					sheet.addCell(label);

					label = new Label(12, m + 3, pcs.getWorkingState(), cellFormat2);
					sheet.addCell(label);

					label = new Label(13, m + 3, pcs.getOperationMode(), cellFormat2);
					sheet.addCell(label);

					label = new Label(14, m + 3, pcs.getRunningState(), cellFormat2);
					sheet.addCell(label);

					label = new Label(15, m + 3, pcs.getControlMode(), cellFormat2);
					sheet.addCell(label);

					label = new Label(16, m + 3, pcs.getFaulty(), cellFormat2);
					sheet.addCell(label);
				}

			}
			// 写入数据
			workbook.write();
			workbook.close();





			return true;

		} catch (Exception e) {
			System.out.println("异常信息：" + e.getMessage());
			e.printStackTrace();
			return false;
		}

	}

	/////////////////////////////////////// 输出BMS//////////////////////////////

	public Boolean createExcelFile_BMS(List<BMS> list, String name, String starttime, String endtime) { // String
		// equipment
		// ,String
		// filepath,String
		// filename

		String[] title = { "PID", "TotalVoltage", "TotalCurrent", "SOC", "SOH", "SingleMaxVoltage", "SingleMinVoltage",
				"SingleMaxTemperature", "SingleMinTemperature", "RunningState", "FaultType", "AddTime" };

		// //创建Excel文件
		// File file = new File("e:/jxl_test.xls");
		try {

			// 创建Excel工作簿;
			WritableWorkbook workbook = Workbook.createWorkbook(new File("E:/BMS_" + name + "_" + nowtime2 + ".xls"));

			// excel标题格式
			// 设置字体;
			WritableFont font1 = new WritableFont(WritableFont.ARIAL, 14, WritableFont.BOLD, false,
					UnderlineStyle.NO_UNDERLINE, Colour.GREEN);

			WritableCellFormat cellFormat1 = new WritableCellFormat(font1);
			// 设置背景颜色;
			// cellFormat1.setBackground(Colour.BLUE_GREY);
			// 设置边框;
			cellFormat1.setBorder(Border.ALL, BorderLineStyle.THIN);
			// 设置自动换行;
			cellFormat1.setWrap(true);
			// 设置文字居中对齐方式;
			cellFormat1.setAlignment(Alignment.CENTRE);
			// 设置垂直居中;
			cellFormat1.setVerticalAlignment(VerticalAlignment.CENTRE);

			// excel正文格式
			// 给第其他行设置背景、字体颜色、对齐方式等等;
			WritableFont font2 = new WritableFont(WritableFont.ARIAL, 14, WritableFont.NO_BOLD, false,
					UnderlineStyle.NO_UNDERLINE, Colour.BLUE2);
			WritableCellFormat cellFormat2 = new WritableCellFormat(font2);
			cellFormat2.setAlignment(Alignment.CENTRE);
			// cellFormat2.setBackground(Colour.PINK);
			cellFormat2.setBorder(Border.ALL, BorderLineStyle.THIN);
			cellFormat2.setWrap(true);

			// 格式化数值 显示小数点后2位
			// NumberFormat Numformat= new NumberFormat("#.##");

			// EXCEL 有行数限制(40000) 确定几张sheet
			if (list.size() % SheetMaxSize > 0)
				SheetNum = list.size() / SheetMaxSize + 1;
			else
				SheetNum = list.size() / SheetMaxSize;

			for (int k = 0; k < SheetNum; k++) {
				WritableSheet sheet = workbook.createSheet("页" + k, k);

				// 给sheet电子版中所有的列设默认行高，行宽
				sheet.getSettings().setDefaultRowHeight(400);
				sheet.getSettings().setDefaultColumnWidth(20);

				Label label = null;
				// 第一行
				sheet.mergeCells(0, 0, 11, 0);// 合并第一行 第1~12列
				sheet.setRowView(0, 600, false); // 设置行高

				// 第二行设置不同的宽度和高度
				sheet.setColumnView(1, 40); // 宽
				sheet.setRowView(1, 1200, false); // 设置行高

				// 表头
				label = new Label(0, 0, "中国电力科学研究院南京分院储能实验室-实验数据导出", cellFormat1); // (列
				// ，
				// 行
				// ，文字，
				// 格式)
				sheet.addCell(label);
				label = new Label(0, 1, "说明信息", cellFormat1);
				sheet.addCell(label);
				label = new Label(1, 1, "数据来源：中国电力科学研究院南京分院", cellFormat1);
				sheet.addCell(label);
				label = new Label(2, 1, "版本：1.0", cellFormat1);
				sheet.addCell(label);
				label = new Label(3, 1, "查询装置：" + name, cellFormat1);
				sheet.addCell(label);
				label = new Label(4, 1, "查询时间：" + starttime + "~" + endtime, cellFormat1);
				sheet.addCell(label);
				label = new Label(5, 1, "打印行数：" + list.size(), cellFormat1);
				sheet.addCell(label);
				label = new Label(6, 1, "打印（Sheet）页数：" + SheetNum, cellFormat1);
				sheet.addCell(label);
				label = new Label(7, 1, "每页行数：" + SheetMaxSize, cellFormat1);
				sheet.addCell(label);
				label = new Label(8, 1, "打印时间:" + nowtime, cellFormat1);
				sheet.addCell(label);
				label = new Label(9, 1, "版权:版权归中国电力科学研究院所有", cellFormat1);
				sheet.addCell(label);

				// 第二行设置列名
				for (int i = 0; i < title.length; i++) {
					label = new Label(i, 2, title[i], cellFormat1); // (col，row,cont)
					sheet.addCell(label);
				}

				for (int i = k * SheetMaxSize, m = 0; i < (k + 1) * SheetMaxSize && m < SheetMaxSize; i++, m++) {
					if (i == list.size()) // 防止数组溢出
						break;
					BMS bms = list.get(i);

					jxl.write.Number PID = new jxl.write.Number(0, m + 3, bms.getPID(), cellFormat2);
					sheet.addCell(PID);

					jxl.write.Number TotalVoltage = new jxl.write.Number(1, m + 3, bms.getTotalVoltage(), cellFormat2);
					sheet.addCell(TotalVoltage);

					jxl.write.Number TotalCurrent = new jxl.write.Number(2, m + 3, bms.getTotalCurrent(), cellFormat2);
					sheet.addCell(TotalCurrent);

					jxl.write.Number SOC = new jxl.write.Number(3, m + 3, bms.getSOC(), cellFormat2);
					sheet.addCell(SOC);

					jxl.write.Number SOH = new jxl.write.Number(4, m + 3, bms.getSOH(), cellFormat2);
					sheet.addCell(SOH);

					jxl.write.Number SingleMaxVoltage = new jxl.write.Number(5, m + 3, bms.getSingleMaxVoltage(),
							cellFormat2);
					sheet.addCell(SingleMaxVoltage);

					jxl.write.Number SingleMinVoltage = new jxl.write.Number(6, m + 3, bms.getSingleMinVoltage(),
							cellFormat2);
					sheet.addCell(SingleMinVoltage);

					jxl.write.Number SingleMaxTemperature = new jxl.write.Number(7, m + 3,
							bms.getSingleMaxTemperature(), cellFormat2);
					sheet.addCell(SingleMaxTemperature);

					jxl.write.Number SingleMinTemperature = new jxl.write.Number(8, m + 3,
							bms.getSingleMinTemperature(), cellFormat2);
					sheet.addCell(SingleMinTemperature);

					label = new Label(9, m + 3, bms.getRunningState(), cellFormat2);
					sheet.addCell(label);

					label = new Label(10, m + 3, bms.getFaultType(), cellFormat2);
					sheet.addCell(label);

					label = new Label(11, m + 3, bms.getAddTime(), cellFormat2);
					sheet.addCell(label);
				}
			}
			// 写入数据
			workbook.write();
			workbook.close();
			return true;

		} catch (Exception e) {
			System.out.println("异常信息：" + e.getMessage());
			e.printStackTrace();
			return false;
		}

	}

}
