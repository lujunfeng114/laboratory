package com.lyq.bean;

/**
 * @author LJF
 *
// */
public class BMS {
	private int PID;
	private float TotalVoltage;
	private float TotalCurrent;
	private float SOC;
	private float SOH;
	private float SingleMaxVoltage;
	private float SingleMinVoltage;
	private float SingleMaxTemperature;
	private float SingleMinTemperature;
	private String RunningState;
	private String FaultType;
	private String AddTime;
	
	public int getPID() {
		return PID;
	}

	public String getAddTime() {
		return AddTime;
	}

	public void setAddTime(String addTime) {
		AddTime = addTime;
	}

	public void setPID(int pID) {
		PID = pID;
	}

	public float getTotalVoltage() {
		return TotalVoltage;
	}

	public void setTotalVoltage(float totalVoltage) {
		TotalVoltage = totalVoltage;
	}

	public float getTotalCurrent() {
		return TotalCurrent;
	}

	public void setTotalCurrent(float totalCurrent) {
		TotalCurrent = totalCurrent;
	}

	public float getSOC() {
		return SOC;
	}

	public void setSOC(float sOC) {
		SOC = sOC;
	}

	public float getSOH() {
		return SOH;
	}

	public void setSOH(float sOH) {
		SOH = sOH;
	}

	public float getSingleMaxVoltage() {
		return SingleMaxVoltage;
	}

	public void setSingleMaxVoltage(float singleMaxVoltage) {
		SingleMaxVoltage = singleMaxVoltage;
	}

	public float getSingleMinVoltage() {
		return SingleMinVoltage;
	}

	public void setSingleMinVoltage(float singleMinVoltage) {
		SingleMinVoltage = singleMinVoltage;
	}

	public float getSingleMaxTemperature() {
		return SingleMaxTemperature;
	}

	public void setSingleMaxTemperature(float singleMaxTemperature) {
		SingleMaxTemperature = singleMaxTemperature;
	}

	public float getSingleMinTemperature() {
		return SingleMinTemperature;
	}

	public void setSingleMinTemperature(float singleMinTemperature) {
		SingleMinTemperature = singleMinTemperature;
	}

	public String getRunningState() {
		return RunningState;
	}

	public void setRunningState(String runningState) {
		RunningState = runningState;
	}

	public String getFaultType() {
		return FaultType;
	}

	public void setFaultType(String faultType) {
		FaultType = faultType;
	}

	@Override
	public String toString() {
		return "BMS [PID=" + PID + ", TotalVoltage=" + TotalVoltage + ", TotalCurrent=" + TotalCurrent + ", SOC=" + SOC
				+ ", SOH=" + SOH + ", SingleMaxVoltage=" + SingleMaxVoltage + ", SingleMinVoltage=" + SingleMinVoltage
				+ ", SingleMaxTemperature=" + SingleMaxTemperature + ", SingleMinTemperature=" + SingleMinTemperature
				+ ", RunningState=" + RunningState + ", FaultType=" + FaultType + ", AddTime=" + AddTime + "]";
	}


	


	
	


	


}
