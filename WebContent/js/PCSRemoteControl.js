	var  instructionType='';
	var  Device1='';
//	var  Device1Mode:'',
//	var  Device1Data1='';
//	var  Device1Data1='';


function NOPickPcs()
{
	var name = $("#PCSDBName").text();
	
	if(name=="PCSInfo")
		{instructionType='1'; Device1='1';return false;}
	else if(name=="PCS2Info")
		{instructionType="1"; Device1="2";return false;}
	else if(name=="PCS3Info")
		{instructionType="1"; Device1="3";return false;}
	else if(name=="PCS4Info")
		{instructionType="1"; Device1="4";return false;}
	else if(name=="PCS5Info")
		{instructionType="1"; Device1="5";return false;}
	else
		{$.ligerDialog.error('无法选择PCS,请确保检测到装置名称！'); return true; }
			
}


function PcsStart()
{	

	if(NOPickPcs())   //没有检测到选择的PCS
		return;

	//开机
	  var Control = {
		  instructionType:instructionType,  //InstructionType中1代表单独控制PCS，2代表单独控制DCDC，3代表单独控制PLC，4代表高级功能
		  Device1: Device1,   ////设备序号
		  Device1Mode:'1',
		  Device1Data1:'0',
		  Device1Data2:'',
	      nocache:new Date().getTime(),};
	
		$.ligerDialog.confirm('确认开机操作？', function (yes) { 
	  if(yes)
		{
		  //AJAX 发送
		    $.ajax({
			       type: "post",	
			       url: "RemoteControl",
			       data:  Control,
			       dataType: "text",
			       async:false,
			       success: function(data){
			      		if(data=="YES")
							$.ligerDialog.success("指令下发成功，等待服务器响应！");
							else if(data=="NO")
								$.ligerDialog.error('指令下发失败！'); }
			      	});
			}
		});
	
}





function PcsStop()
{	
	if(NOPickPcs())   //没有检测到选择的PCS
		return

	
	//关机
	  var Control = {
		  instructionType:instructionType,  //InstructionType中1代表单独控制PCS，2代表单独控制DCDC，3代表单独控制PLC，4代表高级功能
		  Device1:Device1,   ////设备序号
		  Device1Mode:'1',
		  Device1Data1:'1',
		  Device1Data2:'',
	      nocache:new Date().getTime(),
	};
	
	  $.ligerDialog.confirm('确认停机操作？', function (yes) { 
		  if(yes)
			{
	  //AJAX 发送
	    $.ajax({
		       type: "post",	
		       url: "RemoteControl",
		       data:  Control,
		       dataType: "text",
		       async:false,
		       success: function(data){
		      		if(data=="YES")
						$.ligerDialog.success("指令下发成功，等待服务器响应！");
						else if(data=="NO")
							$.ligerDialog.error('指令下发失败！'); }
		       });
			}
	  });
}



function PcsPowerCharge()
{	
	if(NOPickPcs())   //没有检测到选择的PCS
		return

	
	
	$.ligerDialog.prompt('恒功率充电(kW)','请在此输入控制功率', function (yes,value) { 
		if(yes)  
		{
		if(isNaN(value))   //防止下发不是数值 系统崩溃
			{$.ligerDialog.error('下发的不是数值 ，请重新设置！');	return;}
		
		$("#POWERchargenum").val(value);  //设置值 放到显示框中 防止忘记
		
	//恒功率充电
	  var Control = {
		  instructionType:instructionType,  //InstructionType中1代表单独控制PCS，2代表单独控制DCDC，3代表单独控制PLC，4代表高级功能
		  Device1:Device1,   ////设备序号
		  Device1Mode:'2',
		  Device1Data1:value,  //充电值
		  Device1Data2:'',
	      nocache:new Date().getTime(),};
	
	  
	  //AJAX 发送
	    $.ajax({
		       type: "post",	
		       url: "RemoteControl",
		       data:  Control,
		       dataType: "text",
		       async:false,
		       success: function(data){
		    		if(data=="YES")
						$.ligerDialog.success("指令下发成功，等待服务器响应！");
						else if(data=="NO")
							$.ligerDialog.error('指令下发失败！');  }
	    	});
		}
	});
}



function PcsPowerDisCharge()
{	
	if(NOPickPcs())   //没有检测到选择的PCS
		return

	
	$.ligerDialog.prompt('恒功率放电(kW)','请在此输入控制功率', function (yes,value) { 
		if(yes)  
		{
		if(isNaN(value))   //防止下发不是数值 系统崩溃
		{$.ligerDialog.error('下发的不是数值 ，请重新设置！');	return;}
	
		$("#POWERdischargenum").val(value);  //设置值 放到显示框中 防止忘记
	//恒功率放电
	  var Control = {
		  instructionType:instructionType,  //InstructionType中1代表单独控制PCS，2代表单独控制DCDC，3代表单独控制PLC，4代表高级功能
		  Device1:Device1,   ////设备序号
		  Device1Mode:'3',
		  Device1Data1:value,  //放电值
		  Device1Data2:'',
	      nocache:new Date().getTime(),};
	
	  //AJAX 发送
	    $.ajax({
		       type: "post",	
		       url: "RemoteControl",
		       data:  Control,
		       dataType: "text",
		       async:false,
		       success: function(data){
		    	   if(data=="YES")
						$.ligerDialog.success("指令下发成功，等待服务器响应！");
						else if(data=="NO")
							$.ligerDialog.error('指令下发失败！'); }
		      	
		       });
		 }
	   });
}


function PcsVF()
{	
	if(NOPickPcs())   //没有检测到选择的PCS
		return
	
	$.ligerDialog.prompt('V/F控制  默认频率50HZ','请在此输入控制电压', function (yes,value) {
		if(yes)  
		{
		if(isNaN(value))   //防止下发不是数值 系统崩溃
		{$.ligerDialog.error('下发的不是数值 ，请重新设置！');	return;}
		$("#VFvoltagenum").val(value);  //设置值 放到显示框中 防止忘记
	
	
	//vf控制
	  var Control = {
		  instructionType:instructionType,  //InstructionType中1代表单独控制PCS，2代表单独控制DCDC，3代表单独控制PLC，4代表高级功能
		  Device1:Device1,   ////设备序号
		  Device1Mode:'4',
		  Device1Data1:value,  //电压
		  Device1Data2:'50',  //频率 
	      nocache:new Date().getTime(),};
	
	  //AJAX 发送
	    $.ajax({
		       type: "post",	
		       url: "RemoteControl",
		       data:  Control,
		       dataType: "text",
		       async:false,
		       success: function(data){
					if(data=="YES")
					$.ligerDialog.success("指令下发成功，等待服务器响应！");
					else if(data=="NO")
						$.ligerDialog.error('指令下发失败！');}
		      	
		       });
		}
	  });
}


function PcsVoltageCharge()
{	
	if(NOPickPcs())   //没有检测到选择的PCS
		return

	$.ligerDialog.prompt('恒电压充电','请在此输入控制电压', function (yes,value) { 
		if(yes) 
		{	
		if(isNaN(value))   //防止下发不是数值 系统崩溃
		{$.ligerDialog.error('下发的不是数值 ，请重新设置！');	return;}
		$("#VOLTAGEchargenum").val(value);  //设置值 放到显示框中 防止忘记
	//恒压充电
	  var Control = {
		  instructionType:instructionType,  //InstructionType中1代表单独控制PCS，2代表单独控制DCDC，3代表单独控制PLC，4代表高级功能
		  Device1:Device1,   ////设备序号
		  Device1Mode:'5',
		  Device1Data1:value,  //电压
		  Device1Data2:'',  
	      nocache:new Date().getTime(),};
	
	  //AJAX 发送
	    $.ajax({
		       type: "post",	
		       url: "RemoteControl",
		       data:  Control,
		       dataType: "text",
		       async:false,
		       success: function(data){
					
		    	   if(data=="YES")
						$.ligerDialog.success("指令下发成功，等待服务器响应！");
						else if(data=="NO")
							$.ligerDialog.error('指令下发失败！');}
		      	
		       });
		}
	 });
}


function PcsWait()
{	
	if(NOPickPcs())   //没有检测到选择的PCS
		return

	
	//待机
	  var Control = {
		  instructionType:instructionType,  //InstructionType中1代表单独控制PCS，2代表单独控制DCDC，3代表单独控制PLC，4代表高级功能
		  Device1:Device1,   ////设备序号
		  Device1Mode:'6',
		  Device1Data1:'1',  
		  Device1Data2:'',  
	      nocache:new Date().getTime(),};
	  $.ligerDialog.confirm('确认下发？', function (yes) { 
		  if(yes)
			{
	  //AJAX 发送
	    $.ajax({
		       type: "post",	
		       url: "RemoteControl",
		       data:  Control,
		       dataType: "text",
		       async:false,
		       success: function(data){
		    	   if(data=="YES")
						$.ligerDialog.success("指令下发成功，等待服务器响应！");
						else if(data=="NO")
							$.ligerDialog.error('指令下发失败！');}
		      	
		       });
			}
	  });
}






function PcsFaultRecovery()
{	
	if(NOPickPcs())   //没有检测到选择的PCS
		return

	
	//故障复归
	  var Control = {
		  instructionType:instructionType,  //InstructionType中1代表单独控制PCS，2代表单独控制DCDC，3代表单独控制PLC，4代表高级功能
		  Device1:Device1,   ////设备序号
		  Device1Mode:'7',
		  Device1Data1:'1',  
		  Device1Data2:'',  
	      nocache:new Date().getTime(),};
	  $.ligerDialog.confirm('确认下发？', function (yes) { 
		  if(yes)
			{
	  //AJAX 发送
	    $.ajax({
		       type: "post",	
		       url: "RemoteControl",
		       data:  Control,
		       dataType: "text",
		       async:false,
		       success: function(data){
		    	   if(data=="YES")
						$.ligerDialog.success("指令下发成功，等待服务器响应！");
						else if(data=="NO")
							$.ligerDialog.error('指令下发失败！'); }
		      	
		       });
			}
	  });
}


function PcsNetState()
{	
	if(NOPickPcs())   //没有检测到选择的PCS
		return

	
	//下发并网点状态
	  var Control = {
		  instructionType:instructionType,  //InstructionType中1代表单独控制PCS，2代表单独控制DCDC，3代表单独控制PLC，4代表高级功能
		  Device1:Device1,   ////设备序号
		  Device1Mode:'8',
		  Device1Data1:'1',  
		  Device1Data2:'',  
	      nocache:new Date().getTime(),};
	  $.ligerDialog.confirm('确认下发？', function (yes) { 
		  if(yes)
			{
	  //AJAX 发送
	    $.ajax({
		       type: "post",	
		       url: "RemoteControl",
		       data:  Control,
		       dataType: "text",
		       async:false,
		       success: function(data){
					
		    	   if(data=="YES")
						$.ligerDialog.success("指令下发成功，等待服务器响应！");
						else if(data=="NO")
							$.ligerDialog.error('指令下发失败！');}
		      	
		       });
			}
	  });
}


function PcsTongQiStart()
{	
	if(NOPickPcs())   //没有检测到选择的PCS
		return
	
	//同期开始
	  var Control = {
		  instructionType:instructionType,  //InstructionType中1代表单独控制PCS，2代表单独控制DCDC，3代表单独控制PLC，4代表高级功能
		  Device1:Device1,   ////设备序号
		  Device1Mode:'9',
		  Device1Data1:'1',  
		  Device1Data2:'',  
	      nocache:new Date().getTime(),};
	  $.ligerDialog.confirm('确认下发？', function (yes) { 
		  if(yes)
			{
	  //AJAX 发送
	    $.ajax({
		       type: "post",	
		       url: "RemoteControl",
		       data:  Control,
		       dataType: "text",
		       async:false,
		       success: function(data){
					
		    	   if(data=="YES")
						$.ligerDialog.success("指令下发成功，等待服务器响应！");
						else if(data=="NO")
							$.ligerDialog.error('指令下发失败！'); }
		      	
		       });
			}
	  });
}



function PcsTongQiNull()
{	
	if(NOPickPcs())   //没有检测到选择的PCS
		return
	
	//同期无操作
	  var Control = {
		  instructionType:instructionType,  //InstructionType中1代表单独控制PCS，2代表单独控制DCDC，3代表单独控制PLC，4代表高级功能
		  Device1:Device1,   ////设备序号
		  Device1Mode:'9',
		  Device1Data1:'0',  
		  Device1Data2:'',  
	      nocache:new Date().getTime(),};
	  $.ligerDialog.confirm('确认下发？', function (yes) { 
		  if(yes)
			{
	  //AJAX 发送
	    $.ajax({
		       type: "post",	
		       url: "RemoteControl",
		       data:  Control,
		       dataType: "text",
		       async:false,
		       success: function(data){
		    	   if(data=="YES")
						$.ligerDialog.success("指令下发成功，等待服务器响应！");
						else if(data=="NO")
							$.ligerDialog.error('指令下发失败！'); }
		      	
		       });
			}
	  });
}




function PcsNegetaivePower()
{	
	if(NOPickPcs())   //没有检测到选择的PCS
		return

	$.ligerDialog.prompt('无功调节','请在此输入调节功率', function (yes,value) {
		if(yes) 
		{
		if(isNaN(value))   //防止下发不是数值 系统崩溃
		{$.ligerDialog.error('下发的不是数值 ，请重新设置！');	return;}
		$("#NOactivenum").val(value);  //设置值 放到显示框中 防止忘记
	//无功调节
	  var Control = {
		  instructionType:instructionType,  //InstructionType中1代表单独控制PCS，2代表单独控制DCDC，3代表单独控制PLC，4代表高级功能
		  Device1:Device1,   ////设备序号
		  Device1Mode:'4004',
		  Device1Data1:value,  
		  Device1Data2:'',  
	      nocache:new Date().getTime(),};
	
	  //AJAX 发送
	    $.ajax({
		       type: "post",	
		       url: "RemoteControl",
		       data:  Control,
		       dataType: "text",
		       async:false,
		       success: function(data){
					
		    	   if(data=="YES")
						$.ligerDialog.success("指令下发成功，等待服务器响应！");
						else if(data=="NO")
							$.ligerDialog.error('指令下发失败！');}
		      	
		       });
		}
	});
}





function valuecheck()
{
	
  //  String name=$("#pcsdbname").value();
	
//	window.open ('control.html', 'newwindow', 'height=400, width=900, top=400, left=600, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no');
	
	$.ligerDialog.prompt('控制值设定','控制值', function (yes,value) { if(yes) alert(value); });		
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
			//   alert(data.pcs1.PID);
			   
			//jquery 赋值方式 
			   
			// $("#voltage2").text("456");
    	   
    	    $("#voltage1").text(data.pcs1.DCVoltage.toFixed(2));
			$("#current1").text(data.pcs1.DCCurrent.toFixed(2));
			$("#power1").text(data.pcs1.activePower.toFixed(2));


      	 }
      	
       }); 
    }
     
window.onload = function (){ 

	getGoods();
	window.setInterval("getGoods()", 2000); //每隔分钟调用一次getGoods()方法

};*/
