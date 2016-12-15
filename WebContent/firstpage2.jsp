<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML>
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>储能实验室</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<script type="text/javascript" src="./js/jquery-1.12.3.min.js"></script> 
	<style type="text/css">
	.background{ background-color: ; margin-right: auto; margin-left: auto; }
	</style>
  </head>
	
	<body>
    <canvas class=background id="canvas" width="1900" height="1060" style="border:1px solid black "></canvas>  
    </body>
		
  <script>
 
    var canvas = document.getElementById('canvas');
	// 获取在canvas上绘图的CanvasRenderingContext2D对象
	var ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#0072E3';  //路径的颜色 蓝色
  
  
  
   //全局调整  获取页面的宽度和长度
   var  BrowserHeight=window.innerHeight;
   var  BrowserWidth=window.innerWidth;
  //  alert("innerHeight:"+BrowserHeight+"  innerWidth:"+BrowserWidth);  
     
  if(BrowserWidth==980 && BrowserHeight==642)  //特别为ipad 适配分辨率
   { 
	   ctx.scale(1.4,1.4);
	   
  	      }
  
  
    ctx.translate(30*BrowserWidth/1900,-15*(BrowserHeight-60)/1060);   //变换居中
    ctx.scale(BrowserWidth/1900,(BrowserHeight-20)/1060); 
  </script>
   
  <script> 
  function DrawHorLine(x,y,width,size)
  {
    
    if(size == null)
    	size=3; 
    ctx.beginPath();
    ctx.moveTo(x,y);
	ctx.lineTo(x+width,y);
	ctx.closePath();
	ctx.lineWidth = size;
	ctx.stroke(); //绘制已定义的路径 	
  }
  
    function DrawVerLine(x,y,height,size)
  {
     if(size == null)
    	size=3; 
    ctx.beginPath();
    ctx.moveTo(x,y);
	ctx.lineTo(x,y+height);
	ctx.closePath();
	ctx.lineWidth = size;
	ctx.stroke(); //绘制已定义的路径 	
  }
  
  
  function DrawImage(name,x,y,width,height)
  {
  	     var image = new Image();
		 image.src = "./Images/equitment/"+name+".png";
		 image.onload = function()
		 {
		  ctx.drawImage(image,x,y,width,height);
		 }
  }
    
  function DrawText(text,x,y,font,color)
  {
     
    if(font==null)
    ctx.font = '15px 微软雅黑';
    else
    ctx.font=font;
    if(color==null) ctx.fillStyle="#000000";
    else ctx.fillStyle=color;
    
    ctx.fillText(text,x,y);
    
  }
  
  
  function DrawFillRect(x,y,w,h,style)
  {
    if(style==null)
    ctx.fillStyle = '#228B22';  //填充区域的颜色
    else 
     ctx.fillStyle = style;     
  	 ctx.fillRect(x,y,w,h);	
  }
  
  </script>
  
     
   <script> 
   var DrawNet = function()
   {   		
   	//tittle
   	DrawText("储能在分布式发电/微网应用技术 ",590,50,"40px 楷体");

   	 ctx.font = '20px 微软雅黑'; 
   	  
   	   //电网图标
		DrawImage("AcSource",10,300,40,34);
				
		//交流总先
		DrawHorLine(40,320,40,5);
		DrawVerLine(80,100,500,5);
		
		DrawText("电网  ",10,360,"20px 楷体");			
		DrawText("AC0.4kV ",20,90);

		
		//电力电子混合模拟区域
		//k1-1支路
		//ctx.fillStyle = '#228B22';  //填充路径的颜色
		DrawHorLine(80,120,350);						
		DrawFillRect(120,110,30,20);		
		DrawText("K1-1 ",120,100); //k1-1
		DrawImage("9",180,90,80,80);
		DrawText("整流变压器 ",180,190,'20px 楷体'); 	
		DrawFillRect(290,110,30,20);
		DrawText("K0-1 ",290,100); //k0-1
		DrawImage("10",360,85,120,80);
		DrawText("LCI/SFC ",480,120,'20px 楷体'); 
		
		
		
		//k1-2支路
		DrawHorLine(80,280,480);
		DrawFillRect(110,270,30,20);
		DrawText("K1-2 ",110,260); //k1-2
		DrawImage("11",360,250,100,80);	
		DrawText("同/异步发电机 ",240,340,'20px 楷体'); 	
		DrawFillRect(500,270,30,20);
		DrawText("K0-3 ",500,260); //k0-3

						
		//k1-3支路
		DrawHorLine(80,430,350);
		DrawFillRect(110,420,30,20);
		DrawText("K1-3 ",110,410); //k1-3	
		DrawImage("14",180,400,60,80);
		DrawText("调压器 ",180,390,'20px 楷体'); 
		DrawFillRect(280,420,30,20);	
		DrawText("K0-5 ",280,410); //k0-5	
		DrawImage("12",350,400,100,80);
		DrawText("变频负荷 ",450,430,'20px 楷体'); 
		
		
					
		//k1-5支路	
		DrawHorLine(80,570,480);
		DrawFillRect(110,560,30,20);
		DrawText("K1-5 ",110,550); //k1-5	
		DrawImage("13",180,540,100,80);
		
		//K1-6
		DrawVerLine(160,520,50);
		DrawHorLine(158,520,133);
		DrawFillRect(210,510,30,20);
		DrawText("K1-6 ",210,500); //k1-6
		DrawVerLine(290,520,50);
		
		
		//K1-7		
		DrawFillRect(500,560,30,20);
		DrawText("K1-7 ",500,550); //k1-7
				
	    //K0-2~K0-4	
		DrawVerLine(410,100,350);  //竖线2
		DrawFillRect(400,190,20,30);
		DrawText("K0-2",420,200); //k0-2
		
		DrawFillRect(400,350,20,30);
		DrawText("K0-4",420,370); //k0-4
		
	   //AC0.4kv			
		DrawVerLine(560,220,600,5);//竖线3
		DrawText("AC0.4KV",500,220,'20px 楷体');
		
	   //K3-1
	   DrawHorLine(560,240,240);
	   DrawFillRect(590,230,30,20);
	   DrawText("K3-1",590,220); //k3-1
	
	   
	   //K4-2~K4-5
	   DrawVerLine(690,240,560);//竖线4
	   
	   DrawFillRect(680,400,20,30);
	   DrawText("K4-2",700,415); //k4-2
	   
	   DrawImage("3",670,480,50,80);
	    DrawText("交流线路阻抗",570,490,'15px 楷体'); 
	    DrawText("故障模拟器",570,510,'15px 楷体'); 
	   DrawFillRect(680,600,20,30);
	   DrawText("K4-5",700,615); //k4-5
	   
	   	   
	   //K2-1
	   DrawHorLine(560,800,240);
	   DrawFillRect(590,790,30,20);
	   DrawText("K2-1",590,780); //k2-1
	  
		
	   //交流微网1母线
	    DrawVerLine(800,80,550,5);//
	    DrawText("AC0.4KV",720,90,'20px 楷体');
	   
	   //k3-2	    
	    DrawHorLine(800,100,200);
	    DrawFillRect(850,90,30,20);
	    DrawText("K3-2",850,80); //k3-2
	    DrawImage("4",950,70,60,60);
	    DrawText("RLC负载",1015,90,'18px 楷体');
	  
	    
	    //k3-3	    
	    DrawHorLine(800,180,500);
	    DrawFillRect(850,170,30,20);
	    DrawText("K3-3",850,160); //k3-3
	    DrawImage("3",950,150,40,60);
	    DrawText("PCS100",1000,170,'18px 楷体');
	    DrawFillRect(1200,170,30,20);
	    DrawText("K5-2",1200,160); //k5-2
	   
	    	        	    
	    //k3-4	    
	    DrawHorLine(800,250,400);	    
	    DrawFillRect(850,240,30,20);
	    DrawText("K3-4",850,230); //k3-4
	    DrawImage("3",950,220,40,60);
	    DrawText("PCS50",1000,240,'18px 楷体');
	    DrawImage("24",1100,220,40,60);
	    DrawFillRect(1200,240,30,20);
	    DrawText("K2-2",1200,230); //k2-2
	    
	    
	    //k3-5
	    DrawHorLine(800,320,400); 
	    DrawFillRect(850,310,30,20);
	    DrawText("K3-5",850,300); //k3-5
	    DrawImage("1",950,300,50,60);
	    DrawText("PCS50",1000,320,'18px 楷体');
	    DrawFillRect(1100,310,30,20);
	    DrawText("K6-6",1100,300); //k6-6
	    DrawImage("7",1200,290,50,60);
	    
	    
	    
	    //k3-6
	    DrawHorLine(800,390,400);
	    DrawFillRect(850,380,30,20);
	    DrawText("K3-6",850,370); //k3-6
	    DrawImage("1",950,370,50,60);
	    DrawText("PCS50",1000,390,'18px 楷体');
	    DrawFillRect(1100,380,30,20);
	    DrawText("K6-2",1100,370); //k6-2
	    DrawImage("6",1200,370,50,60);
	        	    
	     //k3-7
	    DrawHorLine(800,460,400);
	    DrawFillRect(850,450,30,20);
	    DrawText("K3-7",850,440); //k3-7
	    DrawImage("1",950,440,50,60);
	    DrawText("PCS30",1000,460,'18px 楷体');
	    DrawFillRect(1100,450,30,20);
	    DrawText("K6-1",1100,440); //k6-1
	    DrawImage("5",1200,440,50,60);
	        
	    //k3-8
	    DrawHorLine(800,540,300);
	    DrawFillRect(850,530,30,20);
	    DrawText("K3-8",850,520); //k3-8
	    DrawImage("15",950,510,50,60);
	    DrawText("柴发",1000,530,'18px 楷体');
	    DrawFillRect(1100,530,30,20);
	    DrawText("K1-4",1100,520); //k1-4
	   
	   //微网1和微网2之间的互联
	   DrawHorLine(800,600,150);
	   DrawFillRect(850,590,30,20);  
	   DrawText("K4-1",850,580); //k4-1
	   DrawVerLine(950,598,124);
	   DrawImage("17",920,620,60,80); //交直流互联装置
	   DrawText("交直流互联 100kW",1000,640,'18px 楷体');
	   DrawHorLine(980,660,300); //交直流互联装置后面的线
	   DrawHorLine(800,720,150);
	   DrawFillRect(850,710,30,20);
	   DrawText("K4-4",850,700); //k4-4
	  	  	   
	    //交流微网2母线
	    DrawVerLine(800,710,360,5);//
	    DrawText("AC0.4KV",720,710,'20px 楷体');
	    
	    //k2-3
	    DrawHorLine(800,790,400);
	    DrawFillRect(850,780,30,20);
	    DrawText("K2-3",850,770); //k2-3
	    DrawImage("1",950,760,50,60);
	    DrawText("PCS100",990,750,'18px 楷体');
	    DrawImage("24",1200,760,50,60);
	    DrawText("光伏模拟器",1180,750,'18px 楷体');
	        
	    //k2-3 k2-4之间
	    DrawVerLine(1050, 790, 71);
	    DrawFillRect(1040,810,20,30);
	    DrawText("K6-6",1060,825); //k6-6
	    DrawHorLine(990,860,60);
	    
	    //k2-4 
	    DrawHorLine(800,870,400);
	    DrawFillRect(850,860,30,20);
	    DrawText("K2-4",850,850); //k2-4
	    DrawImage("1",950,840,50,60);
	    DrawText("光储能量转换装置",990,900,'18px 楷体');
	    
	    DrawFillRect(1100,860,30,20);
	    DrawText("K6-3",1100,850); //k6-3
	    DrawImage("18",1200,850,50,60);
	    DrawText("ATL电池",1200,940,'18px 楷体');
	       
	    //k2-5
	    DrawHorLine(800,950,500);
	    DrawFillRect(850,940,30,20);
	    DrawText("K2-5",850,930); //k2-5
	    DrawImage("1",950,930,50,60);
	    DrawText("PCS30",1000,940,'18px 楷体');
	    DrawFillRect(1100,940,30,20);
	    DrawText("K1-5",1100,930); //k1-5
	    
	    //k2-8
	    DrawHorLine(800,1030,400);
	    DrawFillRect(850,1020,30,20);
	    DrawText("K2-8",850,1010); //k2-8
	    DrawImage("1",950,1000,50,60);
	    DrawText("PCS30",1000,1010,'18px 楷体');
	    DrawFillRect(1100,1020,30,20);
	    DrawText("K6-5",1100,1010); //k6-5
	    DrawImage("19",1200,1000,50,60);
	    DrawText("超级电容50kw10s",1160,1000,'18px 楷体');
	     	   
	   // DC800     
	   DrawVerLine(1300, 100, 400,5);
	   DrawText("DC800V",1300,100,'20px 楷体');
	   DrawHorLine(1300, 220, 300);
	   DrawImage("20",1400,190,50,65);
	   DrawText("DC/DC 50k",1400,180,'18px 楷体');   
	   DrawFillRect(1500,210,30,20);
	   DrawText("K5-5",1500,200,'18px 楷体'); //K5-5
	   DrawImage("6",1600,190,50,65);
	   DrawText("中航铁锂 75kWH",1600,180,'18px 楷体'); 
	      
	   DrawHorLine(1300, 300, 300);
	   DrawImage("20",1400,270,50,65);
	   DrawText("DC/DC 50k",1400,270,'18px 楷体'); 
	   DrawImage("24",1600,270,50,65);
	   DrawText("光伏模拟器",1600,270,'18px 楷体');
	   
	   DrawHorLine(1300, 380, 300);
	   DrawImage("21",1400,360,50,65); 
	   DrawText("DC/DC 50k",1400,360,'18px 楷体'); 
	   DrawImage("22",1600,360,50,65);
	   DrawText("直流负荷",1600,360,'18px 楷体');
	      
	   //DC800V~DC400V     
	    DrawVerLine(1300, 450, 400);
	    DrawFillRect(1290,550,20,30);
	    DrawText("k5-3",1320,570);//k5-3
	    DrawImage("20",1275,620,50,65);
	    DrawText("直流变压器",1330,640,'18px 楷体');
	    DrawFillRect(1290,700,20,30);
	    DrawText("k5-4",1320,720);//k5-4
	    DrawImage("16",1275,750,50,65);
	    DrawText("线路阻抗",1330,780,'18px 楷体');
	    DrawText("故障模拟器",1330,800,'18px 楷体');
	       
	   //DC400V
	   DrawVerLine(1300, 800, 280,5);
	   DrawText("DC400V",1310,1030,'20px 楷体');
	    
	   DrawHorLine(1300, 840, 300);
	   DrawImage("21",1400,820,50,65);
	   DrawText("DC/DC 50k",1400,820,'18px 楷体');
	   DrawFillRect(1500,830,30,20);
	   DrawText("k6-4",1500,820);//k6-4
	   DrawImage("23",1600,810,80,65);
	   DrawText("美能锌溴电池 50kWH",1600,810,'18px 楷体');
	   
	   DrawHorLine(1300, 920, 300);
	   DrawImage("21",1400,900,50,65);
	   DrawText("DC/DC 50k",1400,900,'18px 楷体');
	   DrawImage("24",1600,900,50,65);
	   DrawText("光伏模拟器",1600,900,'18px 楷体');
	   
	   DrawHorLine(1300, 1000, 300); 
	   DrawImage("21",1400,980,50,65);
	   DrawText("DC/DC 50k",1400,980,'18px 楷体');
	   DrawImage("25",1600,980,50,65);
	   DrawText("直流负荷",1600,980,'18px 楷体');
	        	
   }   
   
   DrawNet();
   
   </script>
   <script type="text/javascript">
 function getplc() {

	
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
			var plc1=new Array(8);	
			var plc2=new Array(8);	
			var plc3=new Array(8);	
			var plc4=new Array(8);	
			var plc5=new Array(8);	
			var plc6=new Array(8);	
			var plc7=new Array(8);	
			var plc8=new Array(8);	
			var plc9=new Array(8);	

			for (var i=0;i<plc1.length;i++)	                                    
			{  plc1[i]=(a<<i)&data.PLC1;}	
			
			for (var i=0;i<plc2.length;i++)	                                    
			{  plc2[i]=(a<<i)&data.PLC2;}	
			
			for (var i=0;i<plc3.length;i++)	                                    
			{ plc3[i]=(a<<i)&data.PLC3;}
			
			for (var i=0;i<plc4.length;i++)	                                    
			{ plc4[i]=(a<<i)&data.PLC4;}	
		
			for (var i=0;i<plc5.length;i++)	                                    
			{ plc5[i]=(a<<i)&data.PLC5;}			
		
			for (var i=0;i<plc6.length;i++)	                                    
			{ plc6[i]=(a<<i)&data.PLC6;}	
			
			for (var i=0;i<plc7.length;i++)	                                    
			{  plc7[i]=(a<<i)&data.PLC7;}	
			
			for (var i=0;i<plc8.length;i++)	                                    
			{ plc8[i]=(a<<i)&data.PLC8;}	
		
			for (var i=0;i<plc9.length;i++)	                                    
			{ plc9[i]=(a<<i)&data.PLC9;}

			
			//开关1
/* 			if(plc1[0]==1)
				$("#K1_0").css({background : '#FF0000'});
			else
				$("#K1_0").css({background : '#00A600'}); */
			
			
			if(plc1[1]==2) //k1-1
				DrawFillRect(120,110,30,20,'#FF0000');
			else
				DrawFillRect(120,110,30,20, '#00A600');
			
			if (plc1[2]==4) //k1-2	
				DrawFillRect(110,270,30,20,'#FF0000');
			else
				DrawFillRect(110,270,30,20, '#00A600');
			
			if (plc1[3]==8)//k1-3
				DrawFillRect(110,420,30,20,'#FF0000');
			else
				DrawFillRect(110,420,30,20, '#00A600');
			
/* 			if (plc1[4]==16) //k1-4
				$("#K1_4").css({background : '#FF0000'});
			else
				$("#K1_4").css({background : '#00A600'}); */
			if (plc1[5]==32) //k1-5	
				DrawFillRect(110,560,30,20,'#FF0000');
			else
				DrawFillRect(110,560,30,20, '#00A600');
			
			if (plc1[6]==64) //k1-6
				DrawFillRect(210,510,30,20,'#FF0000');
			else
				DrawFillRect(210,510,30,20, '#00A600');
			
			if (plc1[7]==128) 	//k1-7
				DrawFillRect(500,560,30,20,'#FF0000');
			else
				DrawFillRect(500,560,30,20, '#00A600');
			
			
		  //开关2
			if (plc8[7]==128) //k2-1	
				DrawFillRect(590,790,30,20,'#FF0000');
			else
				DrawFillRect(590,790,30,20,'#00A600');
		  
			if(plc9[0]==1)//k2-2
				DrawFillRect(1200,240,30,20,'#FF0000');
			else
				DrawFillRect(1200,240,30,20,'#00A600');
			
			if(plc9[1]==2)//k2-3
				DrawFillRect(850,780,30,20,'#FF0000');
			else
				DrawFillRect(850,780,30,20,'#00A600');
			
			if (plc9[2]==4) //k2-4	
				DrawFillRect(850,860,30,20,'#FF0000');
			else
				DrawFillRect(850,860,30,20,'#00A600');
			
			if (plc9[3]==8) //k2-5	
				  DrawFillRect(850,940,30,20,'#FF0000');
			else
				  DrawFillRect(850,940,30,20,'#00A600');
			
/* 			if(plc3[0]==1)//k2-6
				$("#K2_6").css({background : '#FF0000'});
			else
				$("#K2_6").css({background : '#00A600'});
			if(plc3[1]==2)//k2-7
				$("#K2_7").css({background : '#FF0000'});
			else
				$("#K2_7").css({background : '#00A600'});
			 */
			if (plc3[2]==4) //k2-8	
				DrawFillRect(850,1020,30,20);
			else
				DrawFillRect(850,1020,30,20);	
			
/* 			if (plc3[3]==8) 	
				$("#K2_9").css({background : '#FF0000'});
			else
				$("#K2_9").css({background : '#00A600'});	 */	

			//plc3存放开关K3
			if(plc3[4]==16)  //K3-1
				DrawFillRect(590,230,30,20,'#FF0000');
			else				
				DrawFillRect(590,230,30,20,'#00A600');
			
			if (plc3[5]==32) //K3-2	
				DrawFillRect(850,90,30,20,'#FF0000');
			else				
				DrawFillRect(850,90,30,20,'#00A600');
			
			if (plc3[6]==64) //K3-3	
				DrawFillRect(850,170,30,20,'#FF0000');
			else			
				DrawFillRect(850,170,30,20,'#00A600');
			
			if (plc3[7]==128) //K3-4
				DrawFillRect(850,240,30,20,'#FF0000');
			else
				DrawFillRect(850,240,30,20,'#00A600');
			
			
			if (plc4[0]==1) //3-5	
				DrawFillRect(850,310,30,20,'#FF0000');
			else
				DrawFillRect(850,310,30,20,'#00A600');
			if (plc4[1]==2) //3-6
				  DrawFillRect(850,380,30,20,'#FF0000');
			else
				  DrawFillRect(850,380,30,20,'#00A600');
			if (plc4[2]==4) //3-7	
				DrawFillRect(850,450,30,20,'#FF0000');
			else
				DrawFillRect(850,450,30,20,'#00A600');
			if (plc4[3]==8) //3-8	
				DrawFillRect(850,530,30,20,'#FF0000');
			else
				DrawFillRect(850,530,30,20,'#00A600');
			
/* 			if (plc4[4]==16) //3-9	
				$("#K3_9").css({background : '#FF0000'});
			else
				$("#K3_9").css({background : '#00A600'});		 */	
			
		//开关4	
			if(plc4[5]==32) //k4-1
				DrawFillRect(850,590,30,20,'#FF0000');  
			else
				DrawFillRect(850,590,30,20,'#00A600');  
			if(plc4[6]==64) //k4-2
				DrawFillRect(680,400,20,30,'#FF0000');
			else
				DrawFillRect(680,400,20,30,'#00A600');
			
/* 			if (plc4[7]==128) 	//k4-3
				$("#K4_3").css({background : '#FF0000'});
			else
				$("#K4_3").css({background : '#00A600'});	 */
			
			if (plc5[0]==1) //k4-4	
				DrawFillRect(850,710,30,20,'#FF0000');
			else
				DrawFillRect(850,710,30,20,'#00A600');
			if (plc5[1]==2)  //k4-5	
				DrawFillRect(680,600,20,30,'#FF0000');
			else
				DrawFillRect(680,600,20,30,'#00A600');
/* 			if (plc5[2]==4) //k4-6	
				$("#K4_6").css({background : '#FF0000'});
			else
				$("#K4_6").css({background : '#00A600'});	 */
						
		//开关5	
	/* 		if(plc5[3]==8) //k5-1
				$("#K5_1").css({background : '#FF0000'});
			else
				$("#K5_1").css({background : '#00A600'}); */
		
			if(plc5[4]==16)  //k5-2
				  DrawFillRect(1200,170,30,20);
			else
				  DrawFillRect(1200,170,30,20);
			
			if (plc5[5]==32) //k5-3	
				DrawFillRect(1290,550,20,30);
			else
				DrawFillRect(1290,550,20,30);
			if (plc5[6]==64) //k5-4	
				DrawFillRect(1290,700,20,30);
			else
				DrawFillRect(1290,700,20,30);	
			if (plc5[7]==128) 	//k5-5
				DrawFillRect(1500,210,30,20);
			else
				DrawFillRect(1500,210,30,20);
/* 			if (plc6[0]==1) 	//k5-6
				$("#K5_6").css({background : '#FF0000'});
			else
				$("#K5_6").css({background : '#00A600'}); */
			
			
		//开关6	
			if (plc6[1]==2) 	//k6-1
				DrawFillRect(1100,450,30,20,'#FF0000');
			else
				DrawFillRect(1100,450,30,20,'#00A600');
		
			if (plc6[2]==4) //k6-2	
				DrawFillRect(1100,380,30,20,'#FF0000');
			else
				DrawFillRect(1100,380,30,20,'#00A600');	
			
			if (plc6[3]==8) //k6-3	
				DrawFillRect(1100,860,30,20,'#FF0000');
			else
				DrawFillRect(1100,860,30,20,'#00A600');
			if (plc6[4]==16) 	//k6-4
				 DrawFillRect(1500,830,30,20,'#FF0000');
			else
				 DrawFillRect(1500,830,30,20,'#00A600');
			if (plc6[5]==32) 	//k6-5
				DrawFillRect(1100,1020,30,20,'#FF0000');
			else
				DrawFillRect(1100,1020,30,20,'#00A600');		
			if (plc6[6]==64) 	//k6-6
				DrawFillRect(1100,310,30,20,'#FF0000');
			else
				DrawFillRect(1100,310,30,20,'#00A600');		
			
		}

	});
}

window.setInterval("getplc()", 2000); // 每隔2S调用一次
 </script>

  </body>
</html>
