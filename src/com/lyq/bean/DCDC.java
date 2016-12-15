package com.lyq.bean;

public class DCDC {
	private int PID;
	private float Loop1PortVoltage;
	private float Loop2PortVoltage;
	private float Loop3PortVoltage;
	private float Loop1CapacitorVoltage;
	private float Loop2CapacitorVoltage;
	private float Loop3CapacitorVoltage;
	private float HighVoltageCapacitorVoltage;
	private float HighVoltagePortVoltage;
	private float Loop1PortCurrent;
	private float Loop2PortCurrent;
	private float Loop3PortCurrent;
	private float Loop1InductorCurrent;
	private float Loop2InductorCurrent;
	private float Loop3InductorCurrent;
	private float BusCurrent;
	private float HighVoltageTotalCurrent;
	private float Loop1Power;
	private float Loop2Power;
	private float Loop3Power;
	private float HighVoltagePower;
	
	private String Loop1WorkingState;
	private String Loop2WorkingState;
	private String Loop3WorkingState;
	private String TotalWorkingState;
	private String Loop1WorkingMode;
	private String Loop2WorkingMode;
	private String Loop3WorkingMode;
	
	private float Loop1Modulation;
	private float Loop2Modulation;
	private float Loop3Modulation;
	private float Loop1VoltageLoopSet;
	private float Loop2VoltageLoopSet;
	private float Loop3VoltageLoopSet;
	private float Loop1CurrentLoopSet;
	private float Loop2CurrentLoopSet;
	private float Loop3CurrentLoopSet;
	
	private String AddTime;
	private String FaultType;
	public int getPID() {
		return PID;
	}
	public void setPID(int pID) {
		PID = pID;
	}
	public float getLoop1PortVoltage() {
		return Loop1PortVoltage;
	}
	public void setLoop1PortVoltage(float loop1PortVoltage) {
		Loop1PortVoltage = loop1PortVoltage;
	}
	public float getLoop2PortVoltage() {
		return Loop2PortVoltage;
	}
	public void setLoop2PortVoltage(float loop2PortVoltage) {
		Loop2PortVoltage = loop2PortVoltage;
	}
	public float getLoop3PortVoltage() {
		return Loop3PortVoltage;
	}
	public void setLoop3PortVoltage(float loop3PortVoltage) {
		Loop3PortVoltage = loop3PortVoltage;
	}
	public float getLoop1CapacitorVoltage() {
		return Loop1CapacitorVoltage;
	}
	public void setLoop1CapacitorVoltage(float loop1CapacitorVoltage) {
		Loop1CapacitorVoltage = loop1CapacitorVoltage;
	}
	public float getLoop2CapacitorVoltage() {
		return Loop2CapacitorVoltage;
	}
	public void setLoop2CapacitorVoltage(float loop2CapacitorVoltage) {
		Loop2CapacitorVoltage = loop2CapacitorVoltage;
	}
	public float getLoop3CapacitorVoltage() {
		return Loop3CapacitorVoltage;
	}
	public void setLoop3CapacitorVoltage(float loop3CapacitorVoltage) {
		Loop3CapacitorVoltage = loop3CapacitorVoltage;
	}
	public float getHighVoltageCapacitorVoltage() {
		return HighVoltageCapacitorVoltage;
	}
	public void setHighVoltageCapacitorVoltage(float highVoltageCapacitorVoltage) {
		HighVoltageCapacitorVoltage = highVoltageCapacitorVoltage;
	}
	public float getHighVoltagePortVoltage() {
		return HighVoltagePortVoltage;
	}
	public void setHighVoltagePortVoltage(float highVoltagePortVoltage) {
		HighVoltagePortVoltage = highVoltagePortVoltage;
	}
	public float getLoop1PortCurrent() {
		return Loop1PortCurrent;
	}
	public void setLoop1PortCurrent(float loop1PortCurrent) {
		Loop1PortCurrent = loop1PortCurrent;
	}
	public float getLoop2PortCurrent() {
		return Loop2PortCurrent;
	}
	public void setLoop2PortCurrent(float loop2PortCurrent) {
		Loop2PortCurrent = loop2PortCurrent;
	}
	public float getLoop3PortCurrent() {
		return Loop3PortCurrent;
	}
	public void setLoop3PortCurrent(float loop3PortCurrent) {
		Loop3PortCurrent = loop3PortCurrent;
	}
	public float getLoop1InductorCurrent() {
		return Loop1InductorCurrent;
	}
	public void setLoop1InductorCurrent(float loop1InductorCurrent) {
		Loop1InductorCurrent = loop1InductorCurrent;
	}
	public float getLoop2InductorCurrent() {
		return Loop2InductorCurrent;
	}
	public void setLoop2InductorCurrent(float loop2InductorCurrent) {
		Loop2InductorCurrent = loop2InductorCurrent;
	}
	public float getLoop3InductorCurrent() {
		return Loop3InductorCurrent;
	}
	public void setLoop3InductorCurrent(float loop3InductorCurrent) {
		Loop3InductorCurrent = loop3InductorCurrent;
	}
	public float getBusCurrent() {
		return BusCurrent;
	}
	public void setBusCurrent(float busCurrent) {
		BusCurrent = busCurrent;
	}
	public float getHighVoltageTotalCurrent() {
		return HighVoltageTotalCurrent;
	}
	public void setHighVoltageTotalCurrent(float highVoltageTotalCurrent) {
		HighVoltageTotalCurrent = highVoltageTotalCurrent;
	}
	public float getLoop1Power() {
		return Loop1Power;
	}
	public void setLoop1Power(float loop1Power) {
		Loop1Power = loop1Power;
	}
	public float getLoop2Power() {
		return Loop2Power;
	}
	public void setLoop2Power(float loop2Power) {
		Loop2Power = loop2Power;
	}
	public float getLoop3Power() {
		return Loop3Power;
	}
	public void setLoop3Power(float loop3Power) {
		Loop3Power = loop3Power;
	}
	public float getHighVoltagePower() {
		return HighVoltagePower;
	}
	public void setHighVoltagePower(float highVoltagePower) {
		HighVoltagePower = highVoltagePower;
	}
	public String getLoop1WorkingState() {
		return Loop1WorkingState;
	}
	public void setLoop1WorkingState(String loop1WorkingState) {
		Loop1WorkingState = loop1WorkingState;
	}
	public String getLoop2WorkingState() {
		return Loop2WorkingState;
	}
	public void setLoop2WorkingState(String loop2WorkingState) {
		Loop2WorkingState = loop2WorkingState;
	}
	public String getLoop3WorkingState() {
		return Loop3WorkingState;
	}
	public void setLoop3WorkingState(String loop3WorkingState) {
		Loop3WorkingState = loop3WorkingState;
	}
	public String getTotalWorkingState() {
		return TotalWorkingState;
	}
	public void setTotalWorkingState(String totalWorkingState) {
		TotalWorkingState = totalWorkingState;
	}
	public String getLoop1WorkingMode() {
		return Loop1WorkingMode;
	}
	public void setLoop1WorkingMode(String loop1WorkingMode) {
		Loop1WorkingMode = loop1WorkingMode;
	}
	public String getLoop2WorkingMode() {
		return Loop2WorkingMode;
	}
	public void setLoop2WorkingMode(String loop2WorkingMode) {
		Loop2WorkingMode = loop2WorkingMode;
	}
	public String getLoop3WorkingMode() {
		return Loop3WorkingMode;
	}
	public void setLoop3WorkingMode(String loop3WorkingMode) {
		Loop3WorkingMode = loop3WorkingMode;
	}
	public float getLoop1Modulation() {
		return Loop1Modulation;
	}
	public void setLoop1Modulation(float loop1Modulation) {
		Loop1Modulation = loop1Modulation;
	}
	public float getLoop2Modulation() {
		return Loop2Modulation;
	}
	public void setLoop2Modulation(float loop2Modulation) {
		Loop2Modulation = loop2Modulation;
	}
	public float getLoop3Modulation() {
		return Loop3Modulation;
	}
	public void setLoop3Modulation(float loop3Modulation) {
		Loop3Modulation = loop3Modulation;
	}
	public float getLoop1VoltageLoopSet() {
		return Loop1VoltageLoopSet;
	}
	public void setLoop1VoltageLoopSet(float loop1VoltageLoopSet) {
		Loop1VoltageLoopSet = loop1VoltageLoopSet;
	}
	public float getLoop2VoltageLoopSet() {
		return Loop2VoltageLoopSet;
	}
	public void setLoop2VoltageLoopSet(float loop2VoltageLoopSet) {
		Loop2VoltageLoopSet = loop2VoltageLoopSet;
	}
	public float getLoop3VoltageLoopSet() {
		return Loop3VoltageLoopSet;
	}
	public void setLoop3VoltageLoopSet(float loop3VoltageLoopSet) {
		Loop3VoltageLoopSet = loop3VoltageLoopSet;
	}
	public float getLoop1CurrentLoopSet() {
		return Loop1CurrentLoopSet;
	}
	public void setLoop1CurrentLoopSet(float loop1CurrentLoopSet) {
		Loop1CurrentLoopSet = loop1CurrentLoopSet;
	}
	public float getLoop2CurrentLoopSet() {
		return Loop2CurrentLoopSet;
	}
	public void setLoop2CurrentLoopSet(float loop2CurrentLoopSet) {
		Loop2CurrentLoopSet = loop2CurrentLoopSet;
	}
	public float getLoop3CurrentLoopSet() {
		return Loop3CurrentLoopSet;
	}
	public void setLoop3CurrentLoopSet(float loop3CurrentLoopSet) {
		Loop3CurrentLoopSet = loop3CurrentLoopSet;
	}
	public String getAddTime() {
		return AddTime;
	}
	public void setAddTime(String addTime) {
		AddTime = addTime;
	}
	public String getFaultType() {
		return FaultType;
	}
	public void setFaultType(String faultType) {
		FaultType = faultType;
	}
	@Override
	public String toString() {
		return "DCDC [PID=" + PID + ", Loop1PortVoltage=" + Loop1PortVoltage + ", Loop2PortVoltage=" + Loop2PortVoltage
				+ ", Loop3PortVoltage=" + Loop3PortVoltage + ", Loop1CapacitorVoltage=" + Loop1CapacitorVoltage
				+ ", Loop2CapacitorVoltage=" + Loop2CapacitorVoltage + ", Loop3CapacitorVoltage="
				+ Loop3CapacitorVoltage + ", HighVoltageCapacitorVoltage=" + HighVoltageCapacitorVoltage
				+ ", HighVoltagePortVoltage=" + HighVoltagePortVoltage + ", Loop1PortCurrent=" + Loop1PortCurrent
				+ ", Loop2PortCurrent=" + Loop2PortCurrent + ", Loop3PortCurrent=" + Loop3PortCurrent
				+ ", Loop1InductorCurrent=" + Loop1InductorCurrent + ", Loop2InductorCurrent=" + Loop2InductorCurrent
				+ ", Loop3InductorCurrent=" + Loop3InductorCurrent + ", BusCurrent=" + BusCurrent
				+ ", HighVoltageTotalCurrent=" + HighVoltageTotalCurrent + ", Loop1Power=" + Loop1Power
				+ ", Loop2Power=" + Loop2Power + ", Loop3Power=" + Loop3Power + ", HighVoltagePower=" + HighVoltagePower
				+ ", Loop1WorkingState=" + Loop1WorkingState + ", Loop2WorkingState=" + Loop2WorkingState
				+ ", Loop3WorkingState=" + Loop3WorkingState + ", TotalWorkingState=" + TotalWorkingState
				+ ", Loop1WorkingMode=" + Loop1WorkingMode + ", Loop2WorkingMode=" + Loop2WorkingMode
				+ ", Loop3WorkingMode=" + Loop3WorkingMode + ", Loop1Modulation=" + Loop1Modulation
				+ ", Loop2Modulation=" + Loop2Modulation + ", Loop3Modulation=" + Loop3Modulation
				+ ", Loop1VoltageLoopSet=" + Loop1VoltageLoopSet + ", Loop2VoltageLoopSet=" + Loop2VoltageLoopSet
				+ ", Loop3VoltageLoopSet=" + Loop3VoltageLoopSet + ", Loop1CurrentLoopSet=" + Loop1CurrentLoopSet
				+ ", Loop2CurrentLoopSet=" + Loop2CurrentLoopSet + ", Loop3CurrentLoopSet=" + Loop3CurrentLoopSet
				+ ", AddTime=" + AddTime + ", FaultType=" + FaultType + "]";
	}
	
	
	
	
	
	
	

}
