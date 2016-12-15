<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML >
<html>
  <head>
    <base href="<%=basePath%>">  
    <title>储能拓扑</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
    <link href="Css/style.css" rel="stylesheet" type="text/css" />
	<script type="text/javascript" src="./js/jquery-1.12.3.min.js"></script> 
  </head>
  
 <script src="js/AcnetButton.js"></script> 
  
  <body>
  <div><input  type="button" value="顺控" onclick="alertmessage()"  class="scbtn2" style="z-index: 2;position:absolute ;left: 10%;top: 10% "></input> 
 

   <canvas id="canvas" width="1900" height="1060"style="border:1px solid black" style="z-index: 0"></canvas>
   
</body>

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
  
  
  
  function DrawValue(text,value,x,y,color,font)
  {
    if(font==null)
        ctx.font = '15px 微软雅黑';
        else
        ctx.font=font;
        if(color==null) ctx.fillStyle="#000000";
        else ctx.fillStyle=color;     
        ctx.fillText(text+":"+value,x,y); 
  }
  </script>

   
<script type="text/javascript">
	// 获取canvas元素对应的DOM对象
	var canvas = document.getElementById('canvas');
	// 获取在canvas上绘图的CanvasRenderingContext2D对象
	var ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#0072E3';  //路径的颜色 蓝色
    
    
      //全局调整  获取页面的宽度和长度
   var  BrowserHeight=window.innerHeight;
   var  BrowserWidth=window.innerWidth;
   // alert("innerHeight:"+BrowserHeight+"  innerWidth:"+BrowserWidth);
         
  /* alert("document.body.clientWidth"+document.body.clientWidth);
     alert("document.body.clientHeight"+document.body.clientHeight);
     alert("document.body.offsetWidth"+document.body.offsetWidth);
     alert("document.body.offsetHeight"+document.body.offsetHeight);
     
     alert("document.body.scrollWidth"+document.body.scrollWidth);
     alert("document.body.scrollHeight"+document.body.scrollHeight);
     
     alert("document.body.scrollTop"+document.body.scrollTop);
     alert("document.body.scrollLeft"+document.body.scrollLeft);
     alert("window.screenTop"+window.screenTop);
     alert("window.screenLeft"+window.screenLeft);
     alert("window.screen.height"+window.screen.height);
     alert("window.screen.width"+window.screen.width);
     alert("window.screen.availHeight"+window.screen.availHeight);
     alert("window.screen.availWidth"+window.screen.availWidth); */
    
   if(BrowserWidth==980 && BrowserHeight==642)  //特别为ipad 适配分辨率
   { 
	   ctx.scale(1.4,1.4);
	   
  	      }
          
   //  alert(BrowserWidth/1900+" " +  BrowserHeight/1060);
    
    
  ctx.scale(BrowserWidth/1900,BrowserHeight/1060);
  
  
   
   
    
	function ShowAC1()
	{	
		//绘制标题
		ctx.font = ' 30px 楷体';
		ctx.textBaseLine = 'top';
		ctx.fillText('交流微网1',920,40);
		
		//设置交流图标		
		DrawImage("AcSource",943,50,80,60);	
		DrawText("电网 ",1020,80,'20px 楷体'); 
		  	
		//AC交流连接线	
		DrawVerLine(980,80,150,5);
				
		//画交流开关
		DrawFillRect(970,149,20,40);
		DrawText("K3-1",1000,180,'20px 楷体'); 
		DrawText("pcc1断路器",830,180,'20px 楷体'); 
		
		//连线AC 400V
		DrawHorLine(30,230,1800,5);
		DrawText("AC 0.4KV",1500,210,'20px 楷体'); 
		
		//****************8k3-8 柴油发电**************************************//
		DrawVerLine(100,230,600,3);	
		DrawFillRect(90,350,20,40);
		DrawText('K3-8',130,370,'20px 楷体'); 			
        DrawImage("2",55,830,100,100);	
		
		DrawText('柴油发电机',60,950,'20px 楷体'); 
		DrawText('模拟器',80,975,'20px 楷体'); 
				 		 
		
		//****************k3-7**************************************//
		DrawText('K3-7',400,370,'20px 楷体'); 
		DrawText('PCS30 KT180',400,540,'20px 楷体'); 	
		DrawText('K6-3',400,720,'20px 楷体'); 		
		
		DrawVerLine(370,230,600,3);
		DrawFillRect(360,350,20,40);
	    DrawImage("1",340,490,60,100);	
	    DrawImage("5",330,800,80,120);		
	    DrawFillRect(360,700,20,40);
		DrawText('南都铅酸电池',330,950,'20px 楷体'); 
		DrawText('100kWh',330,975,'20px 楷体'); 
		

	
		//****************k3-6**************************************//		
		DrawText('K3-6',670,370,'20px 楷体'); 
		DrawText('PCS50 KT200',670,540,'20px 楷体'); 	
		DrawText('K6-2',670,720,'20px 楷体'); 		
		
		DrawVerLine(640,230,600,3);
		DrawFillRect(630,350,20,40);
	    DrawImage("1",610,490,60,100);	
	    DrawImage("6",600,800,80,120);		
	    DrawFillRect(630,700,20,40);
		DrawText('南都铅酸电池',610,950,'20px 楷体'); 
		DrawText('75kWh',610,975,'20px 楷体'); 
		
				
		//****************k3-5**************************************//		
		DrawText('K3-5',940,370,'20px 楷体'); 
		DrawText('PCS50 KT200',950,540,'20px 楷体'); 	
		DrawText('K6-6',950,720,'20px 楷体'); 				
		
		DrawVerLine(910,230,600,3);
		DrawFillRect(900,350,20,40);
	    DrawImage("1",880,490,60,100);	
	    DrawImage("7",870,800,80,120);		
	    DrawFillRect(900,700,20,40);
		DrawText('集星超级电容',880,950,'20px 楷体'); 
		DrawText('50kWh',880,975,'20px 楷体'); 
		
		
		//****************k3-4**************************************//
		DrawText('K3-4',1210,370,'20px 楷体'); 
		DrawText('PCS100 KT270',1220,540,'20px 楷体'); 
		
		DrawVerLine(1180,230,740,3);
		DrawFillRect(1170,350,20,40);
	    DrawImage("3",1150,490,60,100);	
	    DrawImage("8",1140,800,80,120);	
	    DrawFillRect(1170,970,20,40);

		DrawText('光伏模拟器2',1200,950,'20px 楷体'); 

		//****************k3-3**************************************//		
		DrawText('K3-3',1510,370,'20px 楷体'); 
		DrawText('PCS100 KT270',1520,540,'20px 楷体'); 
		DrawText('K5-2',1520,820,'20px 楷体'); 
					
		DrawVerLine(1480,230,700,3);
		DrawFillRect(1470,350,20,40);
	    DrawImage("3",1450,490,60,100);	
	  		
	    DrawFillRect(1470,800,20,40); 
		DrawText('至直流微电网1',1450,950,'20px 楷体'); 
	
		//****************k3-2**************************************//
		DrawText('K3-2',1780,370,'20px 楷体'); 
		
	    DrawVerLine(1750,230,300,3);
		DrawFillRect(1740,350,20,40);
	    DrawImage("4",1700,490,100,100);	
	  			    
		DrawText('RLC可调负载',1720,630,'20px 楷体'); 
	}
		ShowAC1();
</script>

<script>

function KeyChange()
{  
	//颜色复位
//	$("#K3_1,#K3_2,#K3_3,#K3_4,#K3_5,#K3_6,#K3_7,#K3_8,#K3_9,#6_2,#6_3,#6_6").css({background : '#D3D3D3'});
	
		
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
			//window.print("123");
			console.log("123");
			//alert(data.PLC9.toString(2));
			var a=0x01;
						
			var plc8=new Array(8);
			var plc9=new Array(8);
			var plc3=new Array(8);
			var plc4=new Array(8);
			var plc6=new Array(8);
			
			
			
			for (var i=0;i<plc8.length;i++)	                                    
			{   
				plc8[i]=(a<<i)&data.PLC8;}	
			
			for (var i=0;i<plc9.length;i++)	                                    
			{ 	
				plc9[i]=(a<<i)&data.PLC9;}	
		
			for (var i=0;i<plc3.length;i++)	                                    
			{ 	
				plc3[i]=(a<<i)&data.PLC3;}
			for (var i=0;i<plc4.length;i++)	                                    
			{ 	
				plc4[i]=(a<<i)&data.PLC4;}		
			
			for (var i=0;i<plc6.length;i++)	                                    
			{ 	
				plc6[i]=(a<<i)&data.PLC6;}				
						
			//plc3存放开关K3
			if(plc3[4]==16)  //K3-1
				DrawFillRect(970,149,20,40,	'#FF0000');
			else				
				DrawFillRect(970,149,20,40,	 '#00A600');
			
			if (plc3[5]==32) //K3-2	
			DrawFillRect(1740,350,20,40,'#FF0000');
			else				
			DrawFillRect(1740,350,20,40,'#00A600');
			
			if (plc3[6]==64) //K3-3	
			DrawFillRect(1470,350,20,40,'#FF0000');
			else			
			DrawFillRect(1470,350,20,40,'#00A600');
			
			if (plc3[7]==128) //K3-4
				DrawFillRect(1170,350,20,40,'#FF0000');
			else
				DrawFillRect(1170,350,20,40,'#00A600');
			

			if (plc4[0]==1) //K3-5	
				DrawFillRect(900,350,20,40,'#FF0000');
			else
				DrawFillRect(900,350,20,40,'#00A600');
			
			if (plc4[1]==2) //K3-6	
			DrawFillRect(630,350,20,40,'#FF0000');
			else				
			DrawFillRect(630,350,20,40,'#00A600');
			
			if (plc4[2]==4) //K3-7	
				DrawFillRect(360,350,20,40,'#FF0000');
			else
				DrawFillRect(360,350,20,40,'#00A600');
			
			if (plc4[3]==8) //K3-8	
				DrawFillRect(90,350,20,40,'#FF0000');
			else
				DrawFillRect(90,350,20,40,'#00A600');
			
/* 		if (plc4[4]==16) //K3-9 暂无	
				
			else */
						
			
			
			if (plc6[2]==4) //K6-2			
			DrawFillRect(630,700,20,40,'#FF0000');
			else				
			DrawFillRect(630,700,20,40,'#00A600');
			
			if (plc6[3]==8) //k6-3
				DrawFillRect(360,700,20,40,'#FF0000');
			else
				DrawFillRect(360,700,20,40,'#00A600');		
			
			if (plc6[6]==64) //K6-6	
				DrawFillRect(900,700,20,40,'#FF0000');
			else
				DrawFillRect(900,700,20,40,'#00A600');			
			
		
			if (plc9[1]==4) 	
				DrawFillRect(1170,970,20,40,'#FF0000');
			else
				DrawFillRect(1170,970,20,40,'#FF0000');	

		}

	});  
	
	
}

window.setInterval("KeyChange()",3000);
</script>
<script src="js/ReflashTopology.js"></script> 

</html>
