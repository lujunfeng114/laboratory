package com.lyq.bean;


/**
 * PCS信息
 * @author Lu jun feng
 *
 */

public class PCS {
			private int PID;
			private float AVoltage;
			private float BVoltage;
			private float CVoltage;
			private float ACurrent;
			private float BCurrent;
			private float CCurrent;
			//private float Frequency;
			private float DCVoltage;
			private float DCCurrent;
			private float ActivePower;
			private float ReactivePower;
			private String AddTime;
			private String WorkingState;
			private String OperationMode;
			private String RunningState;
			private String ControlMode;
			private String Faulty;
			public int getPID() {
				return PID;
			}
			public void setPID(int pID) {
				PID = pID;
			}
			public float getAVoltage() {
				return AVoltage;
			}
			public void setAVoltage(float aVoltage) {
				AVoltage = aVoltage;
			}
			public float getBVoltage() {
				return BVoltage;
			}
			public void setBVoltage(float bVoltage) {
				BVoltage = bVoltage;
			}
			public float getCVoltage() {
				return CVoltage;
			}
			public void setCVoltage(float cVoltage) {
				CVoltage = cVoltage;
			}
			public float getACurrent() {
				return ACurrent;
			}
			public void setACurrent(float aCurrent) {
				ACurrent = aCurrent;
			}
			public float getBCurrent() {
				return BCurrent;
			}
			public void setBCurrent(float bCurrent) {
				BCurrent = bCurrent;
			}
			public float getCCurrent() {
				return CCurrent;
			}
			public void setCCurrent(float cCurrent) {
				CCurrent = cCurrent;
			}
		/*	public float getFrequency() {
				return Frequency;
			}
			public void setFrequency(float frequency) {
				Frequency = frequency;
			}*/
			public float getDCVoltage() {
				return DCVoltage;
			}
			public void setDCVoltage(float dCVoltage) {
				DCVoltage = dCVoltage;
			}
			public float getDCCurrent() {
				return DCCurrent;
			}
			public void setDCCurrent(float dCCurrent) {
				DCCurrent = dCCurrent;
			}
			public float getActivePower() {
				return ActivePower;
			}
			public void setActivePower(float activePower) {
				ActivePower = activePower;
			}
			public float getReactivePower() {
				return ReactivePower;
			}
			public void setReactivePower(float reactivePower) {
				ReactivePower = reactivePower;
			}
			public String getAddTime() {
				return AddTime;
			}
			public void setAddTime(String addTime) {
				AddTime = addTime;
			}
			public String getWorkingState() {
				return WorkingState;
			}
			public void setWorkingState(String workingState) {
				WorkingState = workingState;
			}
			public String getOperationMode() {
				return OperationMode;
			}
			public void setOperationMode(String operationMode) {
				OperationMode = operationMode;
			}
			public String getRunningState() {
				return RunningState;
			}
			public void setRunningState(String runningState) {
				RunningState = runningState;
			}
			public String getControlMode() {
				return ControlMode;
			}
			public void setControlMode(String controlMode) {
				ControlMode = controlMode;
			}
			public String getFaulty() {
				return Faulty;
			}
			
			public void setFaulty(String faulty) {
				Faulty = faulty;
			}
			@Override
			public String toString() {
				return "PCS [PID=" + PID + ", AVoltage=" + AVoltage + ", BVoltage=" + BVoltage + ", CVoltage="
						+ CVoltage + ", ACurrent=" + ACurrent + ", BCurrent=" + BCurrent + ", CCurrent=" + CCurrent
						+ ", DCVoltage=" + DCVoltage + ", DCCurrent=" + DCCurrent + ", ActivePower=" + ActivePower
						+ ", ReactivePower=" + ReactivePower + ", AddTime=" + AddTime + ", WorkingState=" + WorkingState
						+ ", OperationMode=" + OperationMode + ", RunningState=" + RunningState + ", ControlMode="
						+ ControlMode + ", Faulty=" + Faulty + "]";
			}
			
		
		
			
	
			
			
		}
	
	
	

