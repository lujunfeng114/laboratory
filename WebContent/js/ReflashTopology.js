

function getGoods(){
 	 var list = [];
    $.ajax({
       type: "post",	
       url: "DataReflash",
       data: "action=reflash&nocache=" + new Date().getTime(),
       dataType: "json",
       async:false,
       success: function(data){
			// var a= JSON.stringify(data);  json对象转字符串的方法
			//   alert(data.pcs1.PID);
			   
            //进来首先清除掉指定位置上的的显示，不然会发生重影和颜色加深现象
           // ctx.clearRect(200,520,60,60);
            
            DrawFillRect(220,520,120,80,'#FFF8D7');
            DrawFillRect(510,520,100,80,'#FFF8D7');
            DrawFillRect(780,520,100,80,'#FFF8D7');  	   
            DrawFillRect(1040,520,100,80,'#FFF8D7'); 
            DrawFillRect(1350,520,100,80,'#FFF8D7'); 
            
            DrawFillRect(210,880,110,80,'#FFF8D7'); 
            DrawFillRect(500,880,100,80,'#FFF8D7'); 
            DrawFillRect(760,880,100,80,'#FFF8D7'); 
            
      	   
    	   //开始绘制
    	   //pcs 从左往右
    	   DrawValue('电压(V)',data.pcs1.DCVoltage.toFixed(2),230,540);
    	   DrawValue('电流(A)',data.pcs1.DCCurrent.toFixed(2),230,560);
    	   DrawValue('功率(kW)',data.pcs1.activePower.toFixed(2),230,580);
    	   
    	   DrawValue('电压',data.pcs2.DCVoltage.toFixed(2),520,540);
    	   DrawValue('电流',data.pcs2.DCCurrent.toFixed(2),520,560);
    	   DrawValue('功率',data.pcs2.activePower.toFixed(2),520,580);
    	      	   
    	   DrawValue('电压',data.pcs4.DCVoltage.toFixed(2),800,540);
    	   DrawValue('电流',data.pcs4.DCCurrent.toFixed(2),800,560);
    	   DrawValue('功率',data.pcs4.activePower.toFixed(2),800,580);
    	   
    	   DrawValue('电压',data.pcs5.DCVoltage.toFixed(2),1060,540);
    	   DrawValue('电流',data.pcs5.DCCurrent.toFixed(2),1060,560);
    	   DrawValue('功率',data.pcs5.activePower.toFixed(2),1060,580);
    	   
    	   DrawValue('电压',data.pcs3.DCVoltage.toFixed(2),1360,540);
    	   DrawValue('电流',data.pcs3.DCCurrent.toFixed(2),1360,560);
    	   DrawValue('功率',data.pcs3.activePower.toFixed(2),1360,580);
    	      	   
    	   //BMS 从左往右	
           DrawValue('电压',data.BMSGaoTeQianSuanInfo.totalVoltage.toFixed(2),230,900);
    	   DrawValue('电流',data.BMSGaoTeQianSuanInfo.totalCurrent.toFixed(2),230,920);
    	   DrawValue('SOC',data.BMSGaoTeQianSuanInfo.SOC.toFixed(2),230,940);
    	   
    	   DrawValue('电压',data.BMSGaoTeliDianInfo.totalVoltage.toFixed(2),510,900);
    	   DrawValue('电流',data.BMSGaoTeliDianInfo.totalCurrent.toFixed(2),510,920);
    	   DrawValue('SOC',data.BMSGaoTeliDianInfo.SOC.toFixed(2),510,940);
    	       	   
    	   DrawValue('电压',data.BMSJiXingInfo.totalVoltage.toFixed(2),770,900);
    	   DrawValue('电流',data.BMSJiXingInfo.totalCurrent.toFixed(2),770,920);
    	   DrawValue('SOC',data.BMSJiXingInfo.SOC.toFixed(2),770,940);
    	   
      	 }
      	
       }); 
    }
     
window.onload = function (){ 

	getGoods();
	window.setInterval("getGoods()", 2000); //每隔分钟调用一次getGoods()方法

};
