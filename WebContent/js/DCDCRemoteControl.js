var instructionType = '';
var Device1 = '';
//	var  Device1Mode:'',
//	var  Device1Data1='';
//	var  Device1Data1='';

function NOPickDCDC() {
	var name = $("#DCDCDBName").text();
	//	$(":button").attr("disabled","true");
	if (name == "DCDCInfo") {
		instructionType = '2';
		Device1 = '51';
		return false;
	} else if (name == "DCDC2Info") {
		instructionType = "2";
		Device1 = "52";
		return false;
	} else if (name == "DCDC3Info") {
		instructionType = "2";
		Device1 = "53";
		return false;
	} else if (name == "DCDC4Info") {
		instructionType = "2";
		Device1 = "54";
		return false;
	} else if (name == "DCDC5Info") {
		instructionType = "2";
		Device1 = "55";
		return false;
	} else {
		$.ligerDialog.error('无法选择DC/DC,请确保检测到装置名称！');
		return true;
	}

}

function DCDCStart(Lookup) {
	if (NOPickDCDC()) //没有检测到选择的DCDC
		return;

	var modevalue = $("#look" + Lookup + "mode").val();
	if (modevalue == "") {
		$.ligerDialog.error("回路" + Lookup + '模式设置错误，请重新设置！');
		return;
	}

	//开机
	var Control = {
		instructionType : instructionType, //InstructionType中1代表单独控制DCDC，2代表单独控制DCDC，3代表单独控制PLC，4代表高级功能
		Device1 : Device1, ////设备序号
		Device1Mode : Lookup - 1, // 回路1-2-3 对应的 Device1Mode 为0-1-2
		Device1Data1 : '1',
		Device1Data2 : modevalue,
		nocache : new Date().getTime(),
	};

	$.ligerDialog.confirm('确认开机操作？', function(yes) {
		if (yes) {
			//AJAX 发送
			$.ajax({
				type : "post",
				url : "DCDCRemoteControl",
				data : Control,
				dataType : "text",
				async : false,
				success : function(data) {
					//  $.ligerDialog.success(data);
					if (data == "YES")
						$.ligerDialog.success("指令下发成功，等待服务器响应！");
					else if (data == "NO")
						$.ligerDialog.error('指令下发失败！');
				}
			});
		}
	});

}

function DCDCStop(Lookup) {
	if (NOPickDCDC()) //没有检测到选择的DCDC
		return;

	//关机
	var Control = {
		instructionType : instructionType, //InstructionType中1代表单独控制DCDC，2代表单独控制DCDC，3代表单独控制PLC，4代表高级功能
		Device1 : Device1, ////设备序号
		Device1Mode : Lookup,
		Device1Data1 : '0',
		Device1Data2 : '',
		nocache : new Date().getTime(),
	};

	$.ligerDialog.confirm('确认停机操作？', function(yes) {
		if (yes) { //AJAX 发送
			$.ajax({
				type : "post",
				url : "DCDCRemoteControl",
				data : Control,
				dataType : "text",
				async : false,
				success : function(data) {
					//  $.ligerDialog.success(data);
					if (data == "YES")
						$.ligerDialog.success("指令下发成功，等待服务器响应！");
					else if (data == "NO")
						$.ligerDialog.error('指令下发失败！');
				}

			});
		}
	});
}

function DCDCWait(Lookup) {
	if (NOPickDCDC()) //没有检测到选择的DCDC
		return;

	//待机
	var Control = {
		instructionType : instructionType, //InstructionType中1代表单独控制DCDC，2代表单独控制DCDC，3代表单独控制PLC，4代表高级功能
		Device1 : Device1, ////设备序号
		Device1Mode : Lookup,
		Device1Data1 : '1',
		Device1Data2 : '',
		nocache : new Date().getTime(),
	};
	$.ligerDialog.confirm('确认待机操作？', function(yes) {
		if (yes) {
			//AJAX 发送
			$.ajax({
				type : "post",
				url : "DCDCRemoteControl",
				data : Control,
				dataType : "text",
				async : false,
				success : function(data) {
					// $.ligerDialog.success(data);
					if (data == "YES")
						$.ligerDialog.success("指令下发成功，等待服务器响应！");
					else if (data == "NO")
						$.ligerDialog.error('指令下发失败！');
				}

			});
		}
	});
}

function DCDCVoltage(Lookup) {
	if (NOPickDCDC()) //没有检测到选择的DCDC
		return;

	/*	var modevalue=$("#look"+Lookup+"mode").val();
	 if(modevalue=="")
	 {$.ligerDialog.error("回路"+Lookup+'模式设置错误，请重新设置！');	return;}*/

	$.ligerDialog.prompt('恒压控制', '请在此输入控制电压', function(yes, value) {
		if (yes) //只有确认下发才进行操作
		{
			if (isNaN(value)) //防止下发不是数值 系统崩溃
			{
				$.ligerDialog.error('下发的不是数值 ，请重新设置！');
				return;
			}

			var num = Lookup - 3; //LOOKUP值为4-5-6减少3 对应 1-2-3回路
			$("#look" + num + "voltagenum").val(value + "V"); //设置值 放到显示框中 防止忘记	
			//	$("#look"+num+"currentnum").val(value+"A");  //设置值 放到显示框中 防止忘记
			//恒功率充电
			var Control = {
				instructionType : instructionType, //InstructionType中1代表单独控制DCDC，2代表单独控制DCDC，3代表单独控制PLC，4代表高级功能
				Device1 : Device1, ////设备序号
				Device1Mode : Lookup,
				Device1Data1 : value, //充电值
				Device1Data2 : '',
				nocache : new Date().getTime(),
			};

			//AJAX 发送
			$.ajax({
				type : "post",
				url : "DCDCRemoteControl",
				data : Control,
				dataType : "text",
				async : false,
				success : function(data) {
					//   $.ligerDialog.success(data);
					if (data == "YES")
						$.ligerDialog.success("指令下发成功，等待服务器响应！");
					else if (data == "NO")
						$.ligerDialog.error('指令下发失败！');
				}
			});

		}
	});
}

function DCDCCurrent(Lookup) {
	if (NOPickDCDC()) //没有检测到选择的DCDC
		return;

	/*	var modevalue=$("#look"+Lookup+"mode").val();
	 if(modevalue=="")
	 {$.ligerDialog.error("回路"+Lookup+'模式设置错误，请重新设置！');	return;}*/

	$.ligerDialog.prompt('恒电流控制', '请在此输入控制电流', function(yes, value) {
		if (yes) //只有确认下发才进行操作
		{

			if (isNaN(value)) //防止下发不是数值 系统崩溃
			{
				$.ligerDialog.error('下发的不是数值 ，请重新设置！');
				return;
			}

			var num = Lookup - 6; //LOOKUP值为7-8-9减少6 对应 1-2-3回路的ID
			$("#look" + num + "currentnum").val(value + "A"); //设置值 放到显示框中 防止忘记
			//恒功率放电
			var Control = {
				instructionType : instructionType, //InstructionType中1代表单独控制DCDC，2代表单独控制DCDC，3代表单独控制PLC，4代表高级功能
				Device1 : Device1, ////设备序号
				Device1Mode : Lookup,
				Device1Data1 : value, //放电值
				Device1Data2 : '',
				nocache : new Date().getTime(),
			};

			//AJAX 发送
			$.ajax({
				type : "post",
				url : "DCDCRemoteControl",
				data : Control,
				dataType : "text",
				async : false,
				success : function(data) {
					//   $.ligerDialog.success(data);
					if (data == "YES")
						$.ligerDialog.success("指令下发成功，等待服务器响应！");
					else if (data == "NO")
						$.ligerDialog.error('指令下发失败！');
				}

			});
		}
	});
}

function DCDCFaultRecovery() {
	if (NOPickDCDC() != true) //没有检测到选择的DCDC
		return;

	//故障复归
	var Control = {
		instructionType : instructionType, //InstructionType中1代表单独控制DCDC，2代表单独控制DCDC，3代表单独控制PLC，4代表高级功能
		Device1 : Device1, ////设备序号
		Device1Mode : '13',
		Device1Data1 : '1',
		Device1Data2 : '',
		nocache : new Date().getTime(),
	};
	$.ligerDialog.confirm('故障复归？', function(yes) {
		//AJAX 发送
		$.ajax({
			type : "post",
			url : "DCDCRemoteControl",
			data : Control,
			dataType : "text",
			async : false,
			success : function(data) {
				//   $.ligerDialog.success(data);
				if (data == "YES")
					$.ligerDialog.success("指令下发成功，等待服务器响应！");
				else if (data == "NO")
					$.ligerDialog.error('指令下发失败！');
			}

		});
	});
}

function valuecheck() {

	//  String name=$("#DCDCdbname").value();

	//	window.open ('control.html', 'newwindow', 'height=400, width=900, top=400, left=600, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no');

	$.ligerDialog.prompt('控制值设定', '控制值', function(yes, value) {
		if (yes)
			alert(value);
	});
}

/*

 function getGoods(){
 var list = [];
 $.ajax({
 type: "post",	
 url: "DataReflash",
 data: "action=reflash&nocache=" + new Date().getTime(),
 dataType: "text",
 async:false,
 success: function(data){
 // var a= JSON.stringify(data);  json对象转字符串的方法
 //   alert(data.DCDC1.PID);

 //jquery 赋值方式 

 // $("#voltage2").text("456");

 $("#voltage1").text(data.DCDC1.DCVoltage.toFixed(2));
 $("#current1").text(data.DCDC1.DCCurrent.toFixed(2));
 $("#power1").text(data.DCDC1.activePower.toFixed(2));


 }

 }); 
 }

 window.onload = function (){ 

 getGoods();
 window.setInterval("getGoods()", 2000); //每隔分钟调用一次getGoods()方法

 };*/
