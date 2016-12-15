
function getplc() {
	//颜色复位
	$("#K3_1,#K3_2,#K3_3,#K3_4,#K3_5,#K3_6,#K3_7,#K3_8,#K3_9").css({background : '#D3D3D3'});
	
	
	
	var userdata = {
			action : 'reflash',
			dbname : 'PCSInfo',
			nocache : new Date().getTime(),
		};

	$.ajax({
		type : "post",
		url : "PLCServlet",
		data : userdata,
		dataType : "json",
		async : false,
		success : function(data) {
			
			//alert(data.PLC9.toString(2));
			var a=0x01;
			var plc8=new Array(8);
			var plc9=new Array(8);
			var plc3=new Array(8);
			
			for (var i=0;i<plc8.length;i++)	                                    
			{   
				plc8[i]=(a<<i)&data.PLC8;}	
			
			for (var i=0;i<plc9.length;i++)	                                    
			{ 	
				plc9[i]=(a<<i)&data.PLC9;}	
		
			for (var i=0;i<plc3.length;i++)	                                    
			{ 	
				plc3[i]=(a<<i)&data.PLC3;}
			
			
			if(plc8[7]==128)
				$("#K3_1").css({background : '#FF0000'});
			else
				$("#K3_1").css({background : '#00A600'});			
			
			
			if (plc9[0]==1) 	
				$("#K3_2").css({background : '#FF0000'});
			else
				$("#K3_2").css({background : '#00A600'});
			if (plc9[1]==2) 	
				$("#K3_3").css({background : '#FF0000'});
			else
				$("#K3_3").css({background : '#00A600'});
			if (plc9[2]==4) 	
				$("#K3_4").css({background : '#FF0000'});
			else
				$("#K3_4").css({background : '#00A600'});
			if (plc9[3]==8) 	
				$("#K3_5").css({background : '#FF0000'});
			else
				$("#K3_5").css({background : '#00A600'});
		
			
				if (plc3[0]==1) 	
				$("#K3_6").css({background : '#FF0000'});
			else
				$("#K3_6").css({background : '#00A600'});
			if (plc3[1]==2) 	
				$("#K3_7").css({background : '#FF0000'});
			else
				$("#K3_7").css({background : '#00A600'});
			if (plc3[2]==4) 	
				$("#K3_8").css({background : '#FF0000'});
			else
				$("#K3_8").css({background : '#00A600'});
			if (plc3[3]==8) 	
				$("#K3_9").css({background : '#FF0000'});
			else
				$("#K3_9").css({background : '#00A600'});			
			
			
		/*	
			alert("第0位"+b[0]+" 第1位"+b[1]+    
					" 第2位"+b[2]+" 第3位"+b[3]+
					" 第4位"+b[4]+" 第5位"+b[5]+
					" 第6位"+b[6]+" 第7位"+b[7]);
			*/
			
			
			
			

		}

	});
}

window.setInterval("getplc()", 2000); // 每隔2S调用一次

