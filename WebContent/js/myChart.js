
var list = [];

function getGoods(){
	
	 list = [];//清空缓存
	  var userdata = {
    		  action:'getpcsdatas',
        	  dbname:$("#pcsdbname").text(),
              nocache:new Date().getTime(),
        };
  	 
     $.ajax({
        type: "post",	
        url: "GoodsServlet",
        data: userdata,
        dataType: "json",
        async:false,
        success: function(data){
			//jquery 赋值方式 	
        	    
			/*/ $("#PID").text(data.pcsdata1.PID);
				$("#AVoltage").text(data.pcsdata1.AVoltage);
				$("#BVoltage").text(data.pcsdata1.BVoltage);
				$("#CVoltage").text(data.pcsdata1.CVoltage);
				$("#ACurrent").text(data.pcsdata1.ACurrent);
				$("#BCurrent").text(data.pcsdata1.BCurrent);
				$("#CCurrent").text(data.pcsdata1.CCurrent);
			//	$("#Frequency").text(data.pcsdata1.frequency);
				$("#DCVoltag").text(data.pcsdata1.DCVoltage);
				$("#DCCurrent").text(data.pcsdata1.DCCurrent);
				$("#ActivePower").text(data.pcsdata1.activePower);
				$("#AddTime").text(data.pcsdata1.addTime);
				$("#ReactivePower").text(data.pcsdata1.reactivePower);
				$("#WorkingState").text(data.pcsdata1.workingState);
				$("#OperationMode").text(data.pcsdata1.operationMode);
				$("#RunningState").text(data.pcsdata1.runningState);
				$("#Faulty").text(data.pcsdata1.faulty);
			*/	
			
       	     	     
        		list.push(data.pcsdata1.AVoltage.toFixed(2)); 
        		list.push(data.pcsdata1.BVoltage.toFixed(2)); 
        		list.push(data.pcsdata1.CVoltage.toFixed(2)); 
        		list.push(data.pcsdata1.ACurrent.toFixed(2)); 
        		list.push(data.pcsdata1.BCurrent.toFixed(2)); 
        		list.push(data.pcsdata1.CCurrent.toFixed(2)); 
        		list.push(data.pcsdata1.DCVoltage.toFixed(2)); 
        		list.push(data.pcsdata1.DCCurrent.toFixed(2));         	
        		list.push(data.pcsdata1.activePower.toFixed(2)); 
        		list.push(data.pcsdata1.reactivePower.toFixed(2));          	
        	
        	//清除状态
        		$("#start,#wait,#stop,#mode1,#mode2,#mode3,#mode4,#onnet,#offnet,#error,#normal").css({background: "#BEBEBE"});
	
          //设置各种状态	
				if(data.pcsdata1.workingState=='停机')	
					$("#stop").css({background: "#7fee1d"});
				else if(data.pcsdata1.workingState=='待机')
					$("#wait").css({background: "#7fee1d"});
				else if(data.pcsdata1.workingState=='开机进行中')
					$("#start").css({background: "#7fee1d"});			
				else if(data.pcsdata1.workingState=='恒功率充电')
					$("#mode1").css({background: "#7fee1d"});			
				else if(data.pcsdata1.workingState=='恒功率放电')
					$("#mode2").css({background: "#7fee1d"});				
				else if(data.pcsdata1.workingState=='VF控制')
					$("#mode3").css({background: "#7fee1d"});					
				else if(data.pcsdata1.workingState=='恒压浮充')
					$("#mode4").css({background: "#7fee1d"});
				
				if(data.pcsdata1.operationMode=='离网')
					$("#offnet").css({background: "#7fee1d"});					
				if(data.pcsdata1.operationMode=='并网')
					$("#onnet").css({background: "#7fee1d"});
				
				if(data.pcsdata1.runningState=='正常')
					$("#normal").css({background: "#7fee1d"});					
				if(data.pcsdata1.runningState=='故障')
					$("#error").css({background: "#FF0000"});				
				
			

       	 }  
       	
        }); 
     }
      



window.setInterval("getGoods()", 2000);   //每隔分钟调用一次getGoods()方法



//////////////////////////交流A相电压/////////////////////////
 var AvoltageChart = echarts.init(document.getElementById('Avoltage'));


 
 Aoption = {
		    tooltip : {
		        formatter: "{a} <br/>{b} : {c}V"
		    },
		    toolbox: {
		        show : false,
		        feature : {
		            mark : {show: true},
		            restore : {show: true},
		            saveAsImage : {show: true}
		        }
		    },
		    series : [
		        {
		            name:'A相电压',
		            type:'gauge',
		            center : ['50%', '70%'],    // 默认全局居中
		            radius : [0, '100%'],
		            startAngle: 180,
		            endAngle : 0,
		            min: 0,                     // 最小值
		            max: 600,                   // 最大值
		            precision: 0,               // 小数精度，默认为0，无小数点
		            splitNumber: 6,             // 分割段数，默认为5
		            axisLine: {            // 坐标轴线
		                show: true,        // 默认显示，属性show控制显示与否
		                lineStyle: {       // 属性lineStyle控制线条样式
		                    color: [[0.16, 'lightgreen'],[0.5, 'orange'],[0.83, 'skyblue'],[1, '#ff4500']], 
		                    width: 20
		                }
		            },
		            axisTick: {            // 坐标轴小标记
		                show:true,        // 属性show控制显示与否，默认不显示
		                splitNumber: 5,    // 每份split细分多少段
		                length :8,         // 属性length控制线长
		                lineStyle: {       // 属性lineStyle控制线条样式
		                    color: '#eee',
		                    width: 1,
		                    type: 'solid'
		                }
		            },
		            axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
		                show: true,
		                formatter:function(v){
		                    switch (v+''){
	                        case '100': return '弱';
	                        case '200': return '低';
	                        case '400': return '中';
	                        case '500': return '高';
	                        default: return '';
	                    }
	                },
		                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
		                    color: '#333'
		                }
		            },
		            splitLine: {           // 分隔线
		                show: true,        // 默认显示，属性show控制显示与否
		                length :30,         // 属性length控制线长
		                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
		                    color: '#eee',
		                    width: 2,
		                    type: 'solid'
		                }
		            },
		            pointer : {
		                length : '60%',
		                width : 3,
		                color : 'auto'
		            },
		            title : {
		                show : true,
		                offsetCenter: ['0', -85],       // x, y，单位px
		                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
		                    color: '#333',
		                    fontSize : 15
		                }
		            },
		            detail : {
		                show : true,
		                backgroundColor: 'rgba(0,0,0,0)',
		                borderWidth: 0,
		                borderColor: '#ccc',
		                width: 100,
		                height: 40,
		                offsetCenter: ['0', 0],       // x, y，单位px
		                formatter:'{value}V',
		                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
		                    color: 'auto',
		                    fontSize : 15
		                }
		            },
		            data:[{value: 50, name: 'A相电压'}]
		        }
		    ]
		};

	//	clearInterval(timeTicket);
		timeTicket = setInterval(function (){
		 //   Aoption.series[0].data[0].value = (Math.random()*600).toFixed(2) - 0;
			  Aoption.series[0].data[0].value = list[0];
		      AvoltageChart.setOption(Aoption, true);
		},2000);
		                
     


//////////////////////// 交流B相电压
     var BvoltageChart = echarts.init(document.getElementById('Bvoltage'));

            // 指定图表的配置项和数据
     Boption = {
    		    tooltip : {
    		        formatter: "{a} <br/>{b} : {c}V"
    		    },
    		    toolbox: {
    		        show : false,
    		        feature : {
    		            mark : {show: true},
    		            restore : {show: true},
    		            saveAsImage : {show: true}
    		        }
    		    },
    		    series : [
    		        {
    		            name:'B相电压',
    		            type:'gauge',
    		            center : ['50%', '70%'],    // 默认全局居中
    		            radius : [0, '100%'],
    		            startAngle: 180,
    		            endAngle : 0,
    		            min: 0,                     // 最小值
    		            max: 600,                   // 最大值
    		            precision: 0,               // 小数精度，默认为0，无小数点
    		            splitNumber: 6,             // 分割段数，默认为5
    		            axisLine: {            // 坐标轴线
    		                show: true,        // 默认显示，属性show控制显示与否
    		                lineStyle: {       // 属性lineStyle控制线条样式
    		                    color: [[0.16, 'lightgreen'],[0.5, 'orange'],[0.83, 'skyblue'],[1, '#ff4500']], 
    		                    width: 20
    		                }
    		            },
    		            axisTick: {            // 坐标轴小标记
    		                show:true,        // 属性show控制显示与否，默认不显示
    		                splitNumber: 5,    // 每份split细分多少段
    		                length :8,         // 属性length控制线长
    		                lineStyle: {       // 属性lineStyle控制线条样式
    		                    color: '#eee',
    		                    width: 1,
    		                    type: 'solid'
    		                }
    		            },
    		            axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
    		                show: true,
    		                formatter:function(v){
    		                    switch (v+''){
    	                        case '100': return '弱';
    	                        case '200': return '低';
    	                        case '400': return '中';
    	                        case '500': return '高';
    	                        default: return '';
    	                    }
    	                },
    		                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
    		                    color: '#333'
    		                }
    		            },
    		            splitLine: {           // 分隔线
    		                show: true,        // 默认显示，属性show控制显示与否
    		                length :30,         // 属性length控制线长
    		                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
    		                    color: '#eee',
    		                    width: 2,
    		                    type: 'solid'
    		                }
    		            },
    		            pointer : {
    		                length : '60%',
    		                width : 3,
    		                color : 'auto'
    		            },
    		            title : {
    		                show : true,
    		                offsetCenter: ['0', -85],       // x, y，单位px
    		                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
    		                    color: '#333',
    		                    fontSize : 15
    		                }
    		            },
    		            detail : {
    		                show : true,
    		                backgroundColor: 'rgba(0,0,0,0)',
    		                borderWidth: 0,
    		                borderColor: '#ccc',
    		                width: 100,
    		                height: 40,
    		                offsetCenter: ['0', 0],       // x, y，单位px
    		                formatter:'{value}V',
    		                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
    		                    color: 'auto',
    		                    fontSize : 15
    		                }
    		            },
    		            data:[{value: 50, name: 'B相电压'}]
    		        }
    		    ]
    		};

    	//	clearInterval(timeTicket);
    		timeTicket = setInterval(function (){
    		  //  Boption.series[0].data[0].value = (Math.random()*600).toFixed(2) - 0;
    			  Boption.series[0].data[0].value = list[1];
    		      BvoltageChart.setOption(Boption, true);
    		},2000);
    		            
    		                    

//////////////////////// 交流C相电压
    	     var CvoltageChart = echarts.init(document.getElementById('Cvoltage'));

    	            // 指定图表的配置项和数据
    	     Coption = {
    	    		    tooltip : {
    	    		        formatter: "{a} <br/>{b} : {c}V"
    	    		    },
    	    		    toolbox: {
    	    		        show : false,
    	    		        feature : {
    	    		            mark : {show: true},
    	    		            restore : {show: true},
    	    		            saveAsImage : {show: true}
    	    		        }
    	    		    },
    	    		    series : [
    	    		        {
    	    		            name:'C相电压',
    	    		            type:'gauge',
    	    		            center : ['50%', '70%'],    // 默认全局居中
    	    		            radius : [0, '100%'],
    	    		            startAngle: 180,
    	    		            endAngle : 0,
    	    		            min: 0,                     // 最小值
    	    		            max: 600,                   // 最大值
    	    		            precision: 0,               // 小数精度，默认为0，无小数点
    	    		            splitNumber: 6,             // 分割段数，默认为5
    	    		            axisLine: {            // 坐标轴线
    	    		                show: true,        // 默认显示，属性show控制显示与否
    	    		                lineStyle: {       // 属性lineStyle控制线条样式
    	    		                    color: [[0.16, 'lightgreen'],[0.5, 'orange'],[0.83, 'skyblue'],[1, '#ff4500']], 
    	    		                    width: 20
    	    		                }
    	    		            },
    	    		            axisTick: {            // 坐标轴小标记
    	    		                show:true,        // 属性show控制显示与否，默认不显示
    	    		                splitNumber: 5,    // 每份split细分多少段
    	    		                length :8,         // 属性length控制线长
    	    		                lineStyle: {       // 属性lineStyle控制线条样式
    	    		                    color: '#eee',
    	    		                    width: 1,
    	    		                    type: 'solid'
    	    		                }
    	    		            },
    	    		            axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
    	    		                show: true,
    	    		                formatter:function(v){
    	    		                    switch (v+''){
    	    	                        case '100': return '弱';
    	    	                        case '200': return '低';
    	    	                        case '400': return '中';
    	    	                        case '500': return '高';
    	    	                        default: return '';
    	    	                    }
    	    	                },
    	    		                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
    	    		                    color: '#333'
    	    		                }
    	    		            },
    	    		            splitLine: {           // 分隔线
    	    		                show: true,        // 默认显示，属性show控制显示与否
    	    		                length :30,         // 属性length控制线长
    	    		                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
    	    		                    color: '#eee',
    	    		                    width: 2,
    	    		                    type: 'solid'
    	    		                }
    	    		            },
    	    		            pointer : {
    	    		                length : '60%',
    	    		                width : 3,
    	    		                color : 'auto'
    	    		            },
    	    		            title : {
    	    		                show : true,
    	    		                offsetCenter: ['0', -85],       // x, y，单位px
    	    		                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
    	    		                    color: '#333',
    	    		                    fontSize : 15
    	    		                }
    	    		            },
    	    		            detail : {
    	    		                show : true,
    	    		                backgroundColor: 'rgba(0,0,0,0)',
    	    		                borderWidth: 0,
    	    		                borderColor: '#ccc',
    	    		                width: 100,
    	    		                height: 40,
    	    		                offsetCenter: ['0', 0],       // x, y，单位px
    	    		                formatter:'{value}V',
    	    		                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
    	    		                    color: 'auto',
    	    		                    fontSize : 15
    	    		                }
    	    		            },
    	    		            data:[{value: 50, name: 'C相电压'}]
    	    		        }
    	    		    ]
    	    		};

  	    	//	clearInterval(timeTicket);
    	    		timeTicket = setInterval(function (){
    	    		 //   Coption.series[0].data[0].value = (Math.random()*600).toFixed(2) - 0;
    	    			 Coption.series[0].data[0].value = list[2];
    	    		    CvoltageChart.setOption(Coption, true);
    	    		},2000);
    	    		
///////////////////////////////    交流电流                   /////////////////////////
    	    		  var AcurrentChart = echarts.init(document.getElementById('Acurrent'));

      	            // 指定图表的配置项和数据
      	     Acurrentoption = {
      	    		    tooltip : {
      	    		        formatter: "{a} <br/>{b} : {c}A"
      	    		    },
      	    		    toolbox: {
      	    		        show : false,
      	    		        feature : {
      	    		            mark : {show: true},
      	    		            restore : {show: true},
      	    		            saveAsImage : {show: true}
      	    		        }
      	    		    },
      	    		    series : [
      	    		        {
      	    		            name:'A相电流 ',
      	    		            type:'gauge',
      	    		            center : ['50%', '70%'],    // 默认全局居中
      	    		            radius : [0, '100%'],
      	    		            startAngle: 180,
      	    		            endAngle : 0,
      	    		            min: 0,                     // 最小值
      	    		            max: 600,                   // 最大值
      	    		            precision: 0,               // 小数精度，默认为0，无小数点
      	    		            splitNumber: 6,             // 分割段数，默认为5
      	    		            axisLine: {            // 坐标轴线
      	    		                show: true,        // 默认显示，属性show控制显示与否
      	    		                lineStyle: {       // 属性lineStyle控制线条样式
      	    		                    color: [[0.16, 'lightgreen'],[0.5, 'orange'],[0.83, 'skyblue'],[1, '#ff4500']], 
      	    		                    width: 20
      	    		                }
      	    		            },
      	    		            axisTick: {            // 坐标轴小标记
      	    		                show:true,        // 属性show控制显示与否，默认不显示
      	    		                splitNumber: 5,    // 每份split细分多少段
      	    		                length :8,         // 属性length控制线长
      	    		                lineStyle: {       // 属性lineStyle控制线条样式
      	    		                    color: '#eee',
      	    		                    width: 1,
      	    		                    type: 'solid'
      	    		                }
      	    		            },
      	    		            axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
      	    		                show: true,
      	    		                formatter:function(v){
      	    		                    switch (v+''){
      	    	                        case '100': return '弱';
      	    	                        case '200': return '低';
      	    	                        case '400': return '中';
      	    	                        case '500': return '高';
      	    	                        default: return '';
      	    	                    }
      	    	                },
      	    		                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
      	    		                    color: '#333'
      	    		                }
      	    		            },
      	    		            splitLine: {           // 分隔线
      	    		                show: true,        // 默认显示，属性show控制显示与否
      	    		                length :30,         // 属性length控制线长
      	    		                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
      	    		                    color: '#eee',
      	    		                    width: 2,
      	    		                    type: 'solid'
      	    		                }
      	    		            },
      	    		            pointer : {
      	    		                length : '60%',
      	    		                width : 3,
      	    		                color : 'auto'
      	    		            },
      	    		            title : {
      	    		                show : true,
      	    		                offsetCenter: ['0', -85],       // x, y，单位px
      	    		                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
      	    		                    color: '#333',
      	    		                    fontSize : 15
      	    		                }
      	    		            },
      	    		            detail : {
      	    		                show : true,
      	    		                backgroundColor: 'rgba(0,0,0,0)',
      	    		                borderWidth: 0,
      	    		                borderColor: '#ccc',
      	    		                width: 100,
      	    		                height: 40,
      	    		                offsetCenter: ['0', 0],       // x, y，单位px
      	    		                formatter:'{value}A',
      	    		                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
      	    		                    color: 'auto',
      	    		                    fontSize : 15
      	    		                }
      	    		            },
      	    		            data:[{value: 50, name: 'A相电流'}]
      	    		        }
      	    		    ]
      	    		};

      	    	//	clearInterval(timeTicket);
      	    		timeTicket = setInterval(function (){
      	    		//	Acurrentoption.series[0].data[0].value = (Math.random()*600).toFixed(2) - 0;
      	    			Acurrentoption.series[0].data[0].value = list[3];
      	    			AcurrentChart.setOption(Acurrentoption, true);
      	    		},2000);
      	    		
  /////////////////////////////////////B相电流////////////////////////
      	    	  var BcurrentChart = echarts.init(document.getElementById('Bcurrent'));

    	            // 指定图表的配置项和数据
    	     Bcurrentoption = {
    	    		    tooltip : {
    	    		        formatter: "{a} <br/>{b} : {c}A"
    	    		    },
    	    		    toolbox: {
    	    		        show : false,
    	    		        feature : {
    	    		            mark : {show: true},
    	    		            restore : {show: true},
    	    		            saveAsImage : {show: true}
    	    		        }
    	    		    },
    	    		    series : [
    	    		        {
    	    		            name:'B相电流 ',
    	    		            type:'gauge',
    	    		            center : ['50%', '70%'],    // 默认全局居中
    	    		            radius : [0, '100%'],
    	    		            startAngle: 180,
    	    		            endAngle : 0,
    	    		            min: 0,                     // 最小值
    	    		            max: 600,                   // 最大值
    	    		            precision: 0,               // 小数精度，默认为0，无小数点
    	    		            splitNumber: 6,             // 分割段数，默认为5
    	    		            axisLine: {            // 坐标轴线
    	    		                show: true,        // 默认显示，属性show控制显示与否
    	    		                lineStyle: {       // 属性lineStyle控制线条样式
    	    		                    color: [[0.16, 'lightgreen'],[0.5, 'orange'],[0.83, 'skyblue'],[1, '#ff4500']], 
    	    		                    width: 20
    	    		                }
    	    		            },
    	    		            axisTick: {            // 坐标轴小标记
    	    		                show:true,        // 属性show控制显示与否，默认不显示
    	    		                splitNumber: 5,    // 每份split细分多少段
    	    		                length :8,         // 属性length控制线长
    	    		                lineStyle: {       // 属性lineStyle控制线条样式
    	    		                    color: '#eee',
    	    		                    width: 1,
    	    		                    type: 'solid'
    	    		                }
    	    		            },
    	    		            axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
    	    		                show: true,
    	    		                formatter:function(v){
    	    		                    switch (v+''){
    	    	                        case '100': return '弱';
    	    	                        case '200': return '低';
    	    	                        case '400': return '中';
    	    	                        case '500': return '高';
    	    	                        default: return '';
    	    	                    }
    	    	                },
    	    		                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
    	    		                    color: '#333'
    	    		                }
    	    		            },
    	    		            splitLine: {           // 分隔线
    	    		                show: true,        // 默认显示，属性show控制显示与否
    	    		                length :30,         // 属性length控制线长
    	    		                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
    	    		                    color: '#eee',
    	    		                    width: 2,
    	    		                    type: 'solid'
    	    		                }
    	    		            },
    	    		            pointer : {
    	    		                length : '60%',
    	    		                width : 3,
    	    		                color : 'auto'
    	    		            },
    	    		            title : {
    	    		                show : true,
    	    		                offsetCenter: ['0', -85],       // x, y，单位px
    	    		                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
    	    		                    color: '#333',
    	    		                    fontSize : 15
    	    		                }
    	    		            },
    	    		            detail : {
    	    		                show : true,
    	    		                backgroundColor: 'rgba(0,0,0,0)',
    	    		                borderWidth: 0,
    	    		                borderColor: '#ccc',
    	    		                width: 100,
    	    		                height: 40,
    	    		                offsetCenter: ['0', 0],       // x, y，单位px
    	    		                formatter:'{value}A',
    	    		                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
    	    		                    color: 'auto',
    	    		                    fontSize : 15
    	    		                }
    	    		            },
    	    		            data:[{value: 50, name: 'B相电流'}]
    	    		        }
    	    		    ]
    	    		};
    	     
    	    	//	clearInterval(timeTicket);
    	    		timeTicket = setInterval(function (){
    	    		//	Bcurrentoption.series[0].data[0].value = (Math.random()*600).toFixed(2) - 0;
    	    			Bcurrentoption.series[0].data[0].value = list[4];
    	    			BcurrentChart.setOption(Bcurrentoption, true);
    	    		},2000);
 /////////////////////////////////////C相电流 //////////////////////
    	    		  var CcurrentChart = echarts.init(document.getElementById('Ccurrent'));

        	            // 指定图表的配置项和数据
        	     Ccurrentoption = {
        	    		    tooltip : {
        	    		        formatter: "{a} <br/>{b} : {c}A"
        	    		    },
        	    		    toolbox: {
        	    		        show : false,
        	    		        feature : {
        	    		            mark : {show: true},
        	    		            restore : {show: true},
        	    		            saveAsImage : {show: true}
        	    		        }
        	    		    },
        	    		    series : [
        	    		        {
        	    		            name:'C相电流 ',
        	    		            type:'gauge',
        	    		            center : ['50%', '70%'],    // 默认全局居中
        	    		            radius : [0, '100%'],
        	    		            startAngle: 180,
        	    		            endAngle : 0,
        	    		            min: 0,                     // 最小值
        	    		            max: 600,                   // 最大值
        	    		            precision: 0,               // 小数精度，默认为0，无小数点
        	    		            splitNumber: 6,             // 分割段数，默认为5
        	    		            axisLine: {            // 坐标轴线
        	    		                show: true,        // 默认显示，属性show控制显示与否
        	    		                lineStyle: {       // 属性lineStyle控制线条样式
        	    		                    color: [[0.16, 'lightgreen'],[0.5, 'orange'],[0.83, 'skyblue'],[1, '#ff4500']], 
        	    		                    width: 20
        	    		                }
        	    		            },
        	    		            axisTick: {            // 坐标轴小标记
        	    		                show:true,        // 属性show控制显示与否，默认不显示
        	    		                splitNumber: 5,    // 每份split细分多少段
        	    		                length :8,         // 属性length控制线长
        	    		                lineStyle: {       // 属性lineStyle控制线条样式
        	    		                    color: '#eee',
        	    		                    width: 1,
        	    		                    type: 'solid'
        	    		                }
        	    		            },
        	    		            axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
        	    		                show: true,
        	    		                formatter:function(v){
        	    		                    switch (v+''){
        	    	                        case '100': return '弱';
        	    	                        case '200': return '低';
        	    	                        case '400': return '中';
        	    	                        case '500': return '高';
        	    	                        default: return '';
        	    	                    }
        	    	                },
        	    		                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
        	    		                    color: '#333'
        	    		                }
        	    		            },
        	    		            splitLine: {           // 分隔线
        	    		                show: true,        // 默认显示，属性show控制显示与否
        	    		                length :30,         // 属性length控制线长
        	    		                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
        	    		                    color: '#eee',
        	    		                    width: 2,
        	    		                    type: 'solid'
        	    		                }
        	    		            },
        	    		            pointer : {
        	    		                length : '60%',
        	    		                width : 3,
        	    		                color : 'auto'
        	    		            },
        	    		            title : {
        	    		                show : true,
        	    		                offsetCenter: ['0', -85],       // x, y，单位px
        	    		                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
        	    		                    color: '#333',
        	    		                    fontSize : 15
        	    		                }
        	    		            },
        	    		            detail : {
        	    		                show : true,
        	    		                backgroundColor: 'rgba(0,0,0,0)',
        	    		                borderWidth: 0,
        	    		                borderColor: '#ccc',
        	    		                width: 100,
        	    		                height: 40,
        	    		                offsetCenter: ['0', 0],       // x, y，单位px
        	    		                formatter:'{value}A',
        	    		                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
        	    		                    color: 'auto',
        	    		                    fontSize : 15
        	    		                }
        	    		            },
        	    		            data:[{value: 50, name: 'C相电流'}]
        	    		        }
        	    		    ]
        	    		};

        	    	//	clearInterval(timeTicket);
        	    		timeTicket = setInterval(function (){
        	    		//	Ccurrentoption.series[0].data[0].value = (Math.random()*600).toFixed(2) - 0;
        	    			Ccurrentoption.series[0].data[0].value = list[5];
        	    			CcurrentChart.setOption(Ccurrentoption, true);
        	    		},2000);
   
//////////////////////////////////////直流表盘/////////////////////////
//////////////////////////////////////直流表盘/////////////////////////
//////////////////////////////////////直流表盘/////////////////////////
//////////////////////////////////////直流表盘/////////////////////////
        	    		
        	    		//直流电压
        	    		var DCVChart = echarts.init(document.getElementById('DCV'));


        	    		 
        	    		 DCVoption = {
        	    				    tooltip : {
        	    				        formatter: "{a} <br/>{b} : {c}V"
        	    				    },
        	    				    toolbox: {
        	    				        show : false,
        	    				        feature : {
        	    				            mark : {show: true},
        	    				            restore : {show: true},
        	    				            saveAsImage : {show: true}
        	    				        }
        	    				    },
        	    				    series : [
        	    				        {
        	    				            name:'直流电压',
        	    				            type:'gauge',
        	    				            center : ['50%', '70%'],    // 默认全局居中
        	    				            radius : [0, '100%'],
        	    				            startAngle: 180,
        	    				            endAngle : 0,
        	    				            min: 0,                     // 最小值
        	    				            max: 800,                   // 最大值
        	    				            precision: 0,               // 小数精度，默认为0，无小数点
        	    				            splitNumber: 8,             // 分割段数，默认为5
        	    				            axisLine: {            // 坐标轴线
        	    				                show: true,        // 默认显示，属性show控制显示与否
        	    				                lineStyle: {       // 属性lineStyle控制线条样式
        	    				                    color: [[0.25, 'lightgreen'],[0.5, 'orange'],[0.75, 'skyblue'],[1, '#ff4500']], 
        	    				                    width: 20
        	    				                }
        	    				            },
        	    				            axisTick: {            // 坐标轴小标记
        	    				                show:true,        // 属性show控制显示与否，默认不显示
        	    				                splitNumber: 5,    // 每份split细分多少段
        	    				                length :8,         // 属性length控制线长
        	    				                lineStyle: {       // 属性lineStyle控制线条样式
        	    				                    color: '#eee',
        	    				                    width: 1,
        	    				                    type: 'solid'
        	    				                }
        	    				            },
        	    				            axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
        	    				                show: true,
        	    				                formatter:function(v){
        	    				                    switch (v+''){
        	    			                        case '100': return '弱';
        	    			                        case '300': return '低';
        	    			                        case '500': return '中';
        	    			                        case '700': return '高';
        	    			                        default: return '';
        	    			                    }
        	    			                },
        	    				                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
        	    				                    color: '#333'
        	    				                }
        	    				            },
        	    				            splitLine: {           // 分隔线
        	    				                show: true,        // 默认显示，属性show控制显示与否
        	    				                length :30,         // 属性length控制线长
        	    				                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
        	    				                    color: '#eee',
        	    				                    width: 2,
        	    				                    type: 'solid'
        	    				                }
        	    				            },
        	    				            pointer : {
        	    				                length : '60%',
        	    				                width : 3,
        	    				                color : 'auto'
        	    				            },
        	    				            title : {
        	    				                show : true,
        	    				                offsetCenter: ['0', -85],       // x, y，单位px
        	    				                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
        	    				                    color: '#333',
        	    				                    fontSize : 15
        	    				                }
        	    				            },
        	    				            detail : {
        	    				                show : true,
        	    				                backgroundColor: 'rgba(0,0,0,0)',
        	    				                borderWidth: 0,
        	    				                borderColor: '#ccc',
        	    				                width: 100,
        	    				                height: 40,
        	    				                offsetCenter: ['0', 0],       // x, y，单位px
        	    				                formatter:'{value}V',
        	    				                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
        	    				                    color: 'auto',
        	    				                    fontSize : 15
        	    				                }
        	    				            },
        	    				            data:[{value: 50, name: '直流电压'}]
        	    				        }
        	    				    ]
        	    				};

        	    			//	clearInterval(timeTicket);
        	    				timeTicket = setInterval(function (){
        	    				 //   DCVoption.series[0].data[0].value = (Math.random()*600).toFixed(2) - 0;
        	    					 DCVoption.series[0].data[0].value = list[6];
        	    				    DCVChart.setOption(DCVoption, true);
        	    				},2000);       	    		
        	    		
        	    		
     ///////////////////直流电流/////////////////
        	    				
        	    				var DCAChart = echarts.init(document.getElementById('DCA'));

               	    		 DCAoption = {
               	    				    tooltip : {
               	    				        formatter: "{a} <br/>{b} : {c}A"
               	    				    },
               	    				    toolbox: {
               	    				        show : false,
               	    				        feature : {
               	    				            mark : {show: true},
               	    				            restore : {show: true},
               	    				            saveAsImage : {show: true}
               	    				        }
               	    				    },
               	    				    series : [
               	    				        {
               	    				            name:'直流电流',
               	    				            type:'gauge',
               	    				            center : ['50%', '70%'],    // 默认全局居中
               	    				            radius : [0, '100%'],
               	    				            startAngle: 180,
               	    				            endAngle : 0,
               	    				            min: -400,                     // 最小值
               	    				            max: 400,                   // 最大值
               	    				            precision: 0,               // 小数精度，默认为0，无小数点
               	    				            splitNumber: 8,             // 分割段数，默认为5
               	    				            axisLine: {            // 坐标轴线
               	    				                show: true,        // 默认显示，属性show控制显示与否
               	    				                lineStyle: {       // 属性lineStyle控制线条样式
               	    				                    color: [[0.25, 'lightgreen'],[0.5, 'orange'],[0.75, 'skyblue'],[1, '#ff4500']], 
               	    				                    width: 20
               	    				                }
               	    				            },
               	    				            axisTick: {            // 坐标轴小标记
               	    				                show:true,        // 属性show控制显示与否，默认不显示
               	    				                splitNumber: 5,    // 每份split细分多少段
               	    				                length :8,         // 属性length控制线长
               	    				                lineStyle: {       // 属性lineStyle控制线条样式
               	    				                    color: '#eee',
               	    				                    width: 1,
               	    				                    type: 'solid'
               	    				                }
               	    				            },
               	    				            axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
               	    				                show: true,
               	    				                formatter:function(v){
               	    				                    switch (v+''){
               	    			                        case '-400': return '';
               	    			                        case '-300': return '放电';
               	    			                        case '300': return '充电';
               	    			                        case '400': return '';
               	    			                        default: return '';
               	    			                    }
               	    			                },
               	    				                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
               	    				                    color: '#333'
               	    				                }
               	    				            },
               	    				            splitLine: {           // 分隔线
               	    				                show: true,        // 默认显示，属性show控制显示与否
               	    				                length :30,         // 属性length控制线长
               	    				                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
               	    				                    color: '#eee',
               	    				                    width: 2,
               	    				                    type: 'solid'
               	    				                }
               	    				            },
               	    				            pointer : {
               	    				                length : '60%',
               	    				                width : 3,
               	    				                color : 'auto'
               	    				            },
               	    				            title : {
               	    				                show : true,
               	    				                offsetCenter: ['0', -85],       // x, y，单位px
               	    				                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
               	    				                    color: '#333',
               	    				                    fontSize : 15
               	    				                }
               	    				            },
               	    				            detail : {
               	    				                show : true,
               	    				                backgroundColor: 'rgba(0,0,0,0)',
               	    				                borderWidth: 0,
               	    				                borderColor: '#ccc',
               	    				                width: 100,
               	    				                height: 40,
               	    				                offsetCenter: ['0', 0],       // x, y，单位px
               	    				                formatter:'{value}A',
               	    				                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
               	    				                    color: 'auto',
               	    				                    fontSize : 15
               	    				                }
               	    				            },
               	    				            data:[{value: 50, name: '直流电流'}]
               	    				        }
               	    				    ]
               	    				};

               	    			//	clearInterval(timeTicket);
               	    				timeTicket = setInterval(function (){
               	    				 //   DCAoption.series[0].data[0].value = (Math.random()*600).toFixed(2) - 0;
               	    					DCAoption.series[0].data[0].value =list[7];
               	    				    DCAChart.setOption(DCAoption, true);
               	    				},2000);       	    		
               	    		
 //////////////////////有功功率 ////////////////
               	    				var DCPChart = echarts.init(document.getElementById('DCP'));

                      	    		 DCPoption = {
                      	    				    tooltip : {
                      	    				        formatter: "{a} <br/>{b} : {c}kW"
                      	    				    },
                      	    				    toolbox: {
                      	    				        show : false,
                      	    				        feature : {
                      	    				            mark : {show: true},
                      	    				            restore : {show: true},
                      	    				            saveAsImage : {show: true}
                      	    				        }
                      	    				    },
                      	    				    series : [
                      	    				        {
                      	    				            name:'有功功率',
                      	    				            type:'gauge',
                      	    				            center : ['50%', '70%'],    // 默认全局居中
                      	    				            radius : [0, '100%'],
                      	    				            startAngle: 180,
                      	    				            endAngle : 0,
                      	    				            min: -300,                     // 最小值
                      	    				            max: 300,                   // 最大值
                      	    				            precision: 0,               // 小数精度，默认为0，无小数点
                      	    				            splitNumber: 6,             // 分割段数，默认为5
                      	    				            axisLine: {            // 坐标轴线
                      	    				                show: true,        // 默认显示，属性show控制显示与否
                      	    				                lineStyle: {       // 属性lineStyle控制线条样式
                      	    				                    color: [[0.16, 'lightgreen'],[0.5, 'orange'],[0.83, 'skyblue'],[1, '#ff4500']], 
                      	    				                    width: 20
                      	    				                }
                      	    				            },
                      	    				            axisTick: {            // 坐标轴小标记
                      	    				                show:true,        // 属性show控制显示与否，默认不显示
                      	    				                splitNumber: 5,    // 每份split细分多少段
                      	    				                length :8,         // 属性length控制线长
                      	    				                lineStyle: {       // 属性lineStyle控制线条样式
                      	    				                    color: '#eee',
                      	    				                    width: 1,
                      	    				                    type: 'solid'
                      	    				                }
                      	    				            },
                      	    				            axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                      	    				                show: true,
                      	    				                formatter:function(v){
                      	    				                    switch (v+''){
                      	    			                        case '-200': return '放电';
                      	    			                        case '0': return '';
                      	    			                        case '200': return '充电';
                      	    			                        case '300': return '';
                      	    			                        default: return '';
                      	    			                    }
                      	    			                },
                      	    				                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                      	    				                    color: '#333'
                      	    				                }
                      	    				            },
                      	    				            splitLine: {           // 分隔线
                      	    				                show: true,        // 默认显示，属性show控制显示与否
                      	    				                length :30,         // 属性length控制线长
                      	    				                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                      	    				                    color: '#eee',
                      	    				                    width: 2,
                      	    				                    type: 'solid'
                      	    				                }
                      	    				            },
                      	    				            pointer : {
                      	    				                length : '60%',
                      	    				                width : 3,
                      	    				                color : 'auto'
                      	    				            },
                      	    				            title : {
                      	    				                show : true,
                      	    				                offsetCenter: ['0', -85],       // x, y，单位px
                      	    				                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                      	    				                    color: '#333',
                      	    				                    fontSize : 15
                      	    				                }
                      	    				            },
                      	    				            detail : {
                      	    				                show : true,
                      	    				                backgroundColor: 'rgba(0,0,0,0)',
                      	    				                borderWidth: 0,
                      	    				                borderColor: '#ccc',
                      	    				                width: 100,
                      	    				                height: 40,
                      	    				                offsetCenter: ['0', 0],       // x, y，单位px
                      	    				                formatter:'{value}kW',
                      	    				                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                      	    				                    color: 'auto',
                      	    				                    fontSize : 15
                      	    				                }
                      	    				            },
                      	    				            data:[{value: 50, name: '有功功率'}]
                      	    				        }
                      	    				    ]
                      	    				};

                      	    			//	clearInterval(timeTicket);
                      	    				timeTicket = setInterval(function (){
                      	    			//	    DCPoption.series[0].data[0].value = (Math.random()*600).toFixed(2) - 0;
                      	    					DCPoption.series[0].data[0].value =list[8];
                      	    					DCPChart.setOption(DCPoption, true);
                      	    				},2000); 
        	    		
 /////////////////////无功功率//////////////////////////////////
                      	    				var DCNPChart = echarts.init(document.getElementById('DCNP'));

                             	    		 DCNPoption = {
                             	    				    tooltip : {
                             	    				        formatter: "{a} <br/>{b} : {c}kvar"
                             	    				    },
                             	    				    toolbox: {
                             	    				        show : false,
                             	    				        feature : {
                             	    				            mark : {show: true},
                             	    				            restore : {show: true},
                             	    				            saveAsImage : {show: true}
                             	    				        }
                             	    				    },
                             	    				    series : [
                             	    				        {
                             	    				            name:'无功功率',
                             	    				            type:'gauge',
                             	    				            center : ['50%', '70%'],    // 默认全局居中
                             	    				            radius : [0, '100%'],
                             	    				            startAngle: 180,
                             	    				            endAngle : 0,
                             	    				            min: -300,                     // 最小值
                             	    				            max: 300,                   // 最大值
                             	    				            precision: 0,               // 小数精度，默认为0，无小数点
                             	    				            splitNumber: 6,             // 分割段数，默认为5
                             	    				            axisLine: {            // 坐标轴线
                             	    				                show: true,        // 默认显示，属性show控制显示与否
                             	    				                lineStyle: {       // 属性lineStyle控制线条样式
                             	    				                    color: [[0.16, 'lightgreen'],[0.5, 'orange'],[0.83, 'skyblue'],[1, '#ff4500']], 
                             	    				                    width: 20
                             	    				                }
                             	    				            },
                             	    				            axisTick: {            // 坐标轴小标记
                             	    				                show:true,        // 属性show控制显示与否，默认不显示
                             	    				                splitNumber: 5,    // 每份split细分多少段
                             	    				                length :8,         // 属性length控制线长
                             	    				                lineStyle: {       // 属性lineStyle控制线条样式
                             	    				                    color: '#eee',
                             	    				                    width: 1,
                             	    				                    type: 'solid'
                             	    				                }
                             	    				            },
                             	    				            axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                             	    				                show: true,
                             	    				                formatter:function(v){
                             	    				                    switch (v+''){
                             	    			                        case '-300': return '';
                             	    			                        case '-200': return '吸收';
                             	    			                        case '200': return '发出';
                             	    			                        case '300': return '';
                             	    			                        default: return '';
                             	    			                    }
                             	    			                },
                             	    				                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                             	    				                    color: '#333'
                             	    				                }
                             	    				            },
                             	    				            splitLine: {           // 分隔线
                             	    				                show: true,        // 默认显示，属性show控制显示与否
                             	    				                length :30,         // 属性length控制线长
                             	    				                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                             	    				                    color: '#eee',
                             	    				                    width: 2,
                             	    				                    type: 'solid'
                             	    				                }
                             	    				            },
                             	    				            pointer : {
                             	    				                length : '60%',
                             	    				                width : 3,
                             	    				                color : 'auto'
                             	    				            },
                             	    				            title : {
                             	    				                show : true,
                             	    				                offsetCenter: ['0', -85],       // x, y，单位px
                             	    				                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                             	    				                    color: '#333',
                             	    				                    fontSize : 15
                             	    				                }
                             	    				            },
                             	    				            detail : {
                             	    				                show : true,
                             	    				                backgroundColor: 'rgba(0,0,0,0)',
                             	    				                borderWidth: 0,
                             	    				                borderColor: '#ccc',
                             	    				                width: 100,
                             	    				                height: 40,
                             	    				                offsetCenter: ['0', 0],       // x, y，单位px
                             	    				                formatter:'{value}kvar',
                             	    				                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                             	    				                    color: 'auto',
                             	    				                    fontSize : 15
                             	    				                }
                             	    				            },
                             	    				            data:[{value: 50, name: '无功功率'}]
                             	    				        }
                             	    				    ]
                             	    				};

                             	    			//	clearInterval(timeTicket);
                             	    				timeTicket = setInterval(function (){
                             	    				  //  DCNPoption.series[0].data[0].value = (Math.random()*600).toFixed(2) - 0;
                             	    					 DCNPoption.series[0].data[0].value =list[9];
                             	    					DCNPChart.setOption(DCNPoption, true);
                             	    				},2000); 
        	    		
        	    		
        	    		
     	    		
        	    		
        	    		
 ///////////////////////////////////////////////////////////////////////////////       	    		
/////////////////////////////////////////////////交流电压曲线////////////////////////////////// 
 /////////////////////////////////////////////////////////////////////////////// 
 /////////////////////////////////////////////////////////////////////////////// 
        	    		
        	   var myChart_voltage = echarts.init(document.getElementById('Voltage'),'macarons');

        	   voltage_option = {
        			           color:['#FFD700','#228B22','#FF0000'], //修改默然颜色
        	    	    	    title : {
        	    	    	        text: '交流电压',
        	    	    	        subtext:'数据来源储能实验室',
        	    	    	        x:'30',                //'left',
        	    	    	        y:'5',                  //'top',
        	    	    	        textAlign:'left',
        	    	    	        padding:5, 
        	    	    	        textStyle:
        	    	    	        {
        	    	    	            fontfamily:'',
        	    	    	        	fontSize: 13,
        	    	    	            fontWeight: 'bolder',
        	    	    	            color: '#2894FF'    //'#2894FF'
        	    	    	        },
        	    	    	        subtextStyle:
        	    	    	        {
        	    	    	        	fontSize: 10,
        	    	    	            fontWeight: 'bolder',
        	    	    	           // color: '#2894FF'    //'#2894FF'
        	    	    	            
        	    	    	        }

        	    	    	        
        	    	    	    },
        	    	    	    tooltip : {
        	    	    	        trigger: 'axis'
        	    	    	    },
        	    	    	    legend: {
        	    	    	    	 orient: 'horizontal', // 'vertical'
        	    	    	         x: 'center', // 'center' | 'left' | {number},
        	    	    	         y: '10', // 'center' | 'bottom' | {number}
        	    	    	    	selectedMode:true,
        	    	    	    	itemWidth:15,
        	    	    	        itemHeight:15,
        	    	    	        textStyle:{color:'auto'},
        	    	    	        selected: {
        	    	    	            'A相电压' : true,
        	    	    	            'B相电压' : true,
        	    	    	            'C相电压': true,
       	    	    	            
        	    	    	        },
        	    	    	        
        	    	    	        data:  [
        	    	     	               {
        	    	    	                   name:'A相电压',
        	    	    	                   textStyle:{fontWeight:'bold',fontSize:'12'}
        	    	    	               },
        	    	    	               {
        	    	    	                   name:'B相电压',
        	    	    	                   textStyle:{fontWeight:'bold',fontSize:'12'}
        	    	    	               },
        	    	    	               {
        	    	    	                   name:'C相电压',
        	    	    	                   textStyle:{fontWeight:'bold',fontSize:'12'}
        	    	    	               },
        	    	    	           ]
        	    	    	    },
        	    	    	    toolbox: {
        	    	    	        show : true,
        	    	    	        orient: 'horizontal',      // 布局方式，默认为水平布局，可选为：
        	    						                // 'horizontal' ¦ 'vertical'
        	    						x: 'right',                // 水平安放位置，默认为全图右对齐，可选为：
        	    						                // 'center' ¦ 'left' ¦ 'right'  // ¦ {number}（x坐标，单位px）
        	    						               
        	    						y: '10',                  // 垂直安放位置，默认为全图顶端，可选为：
        	    						                // 'top' ¦ 'bottom' ¦ 'center' // ¦ {number}（y坐标，单位px）
        	    						//backgroundColor:''   
        	    						padding:[0,50,10,30],  //左右上下
        	    					itemSize:15,                
        	    					itemGap: 10,
        	    	    	        feature : {
        	    	    	            mark : {show: true},
        	    	    	            dataView : {show: true, readOnly: false},
        	    	    	      	    magicType : {show: true, type: ['line', 'bar']},
        	    	    	            restore : {show: true},
        	    	    	            saveAsImage : {
        	    	    	            	show: true,
        	    	    	            	title:'保存图片',
        	    	    	            	type:'png',
        	    	    	            	name:'charts',
        	    	    	            	lang:['点击保存']
        	    	    	            	
        	    	    	            }
        	    	    	            
        	    	    	        }
        	    	    	    },
        	    	    	    dataZoom : {
        	    	    	        show : false,
        	    	    	        start : 0,
        	    	    	        end : 100
        	    	    	    },
        	    	    	    xAxis : [
        	    	    	        {
        	    	    	            type : 'category',
        	    	    	            boundaryGap : true,
        	    	    	            data : (function (){
        	    			                var now = new Date();
        	    			                var res = [];
        	    			                var len = 20;
        	    			                while (len--) {
        	    			                    res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
        	    			                    now = new Date(now - 2000);
        	    			                }
        	    			                return res;
        	    	                    })()
        	    	    	            
        	    	    	        },
        	    	    	    
        	    	    	    ],
        	    	    	    grid:{
	    	    	    	    	x:60,
	    	    	    	    //	y:60,
	    	    	    	    	x2:50,
	    	    	    	    //	y2:50,
	    	    	    	    	
    	    	    	    	
	    	    	    	    },
        	    	    	    yAxis : [
        	    	    	        {
        	    	    	            type : 'value',
        	    	    	            show:true,
        	    	    	            axisLine:{show:true,},
        	    	    	         //   axisTick:{show:true,},
        	    	    	        
        	    	    	            scale: true,
        	    	    	            name : '  电压/V',
        	    	    	            namelocation:'end',
        	    	    	            nameTextStyle:{
        	    	    	            	fontSize:15,
        	    	    	            	fontWeight:'blorder',
        	    	    	            },
        	    	    	           
        	    	    	            axisLabel : {
        	    	    	            	show:true,
	    	    	    	            	margin:30,
        	    	    	              //  formatter: '{value} V',
	    	    	    	            	textStyle:{
	    	    	    	            		
	    	    	    	            		align:'left',
	    	    	    	            		baseling:'left',
	    	    	    	            		fontsize:10,
	    	    	    	            		
	    	    	    	            		
	    	    	    	            	}
        	    	    	            },
        	    	    	            
        	    	    	            boundaryGap: [0.2, 0.2]
        	    	    	        },
        	    	    	     
        	    	    	    ],
        	    	    	    series : [
        	    	    	        
        	    	    	        {
        	    	    	            name:'A相电压',
        	    	    	            type:'line',
        	    	    	            itemStyle: {
        	    	    	                normal: {
        	    	    	                	lineStyle:{color:'#FFD700',}
        	    	    	                },
        	    	    	                
        	    	    	                emphasis: {
        	    	    	                    
        	    	    	                }
        	    	    	            },
        	    	    	            data:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        	    	    	            symbolSize:2,
        	    	    	        },
        	    	    	        
        	    	    	        {
        	    	    	            name:'B相电压',
        	    	    	            type:'line',
        	    	    	            itemStyle: {
        	    	    	                normal: {
        	    	    	                	
        	    	    	                	lineStyle:{color:'#228B22',}
        	    	    	                    
        	    	    	                },
        	    	    	                emphasis: {
        	    	    	                    
        	    	    	                }
        	    	    	            },
        	    	    	            data:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        	    	    	            symbolSize:2,
        	    	    	        },
        	    	    	        
        	    	    	        {
        	    	    	            name:'C相电压',
        	    	    	            type:'line',
        	    	    	            itemStyle: {
        	    	    	                normal: {
        	    	    	                	
        	    	    	                	lineStyle:{color:'#FF0000',}
        	    	    	                    
        	    	    	                },
        	    	    	                emphasis: {
        	    	    	                    
        	    	    	                }
        	    	    	            },
        	    	    	            data:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        	    	    	            symbolSize:2,
        	    	    	        },
        	    	    	        
        	    	    	    ]
        	    	    	        
						
        	    	    	    
        	    	    	};
        	    	    
           	myChart_voltage.setOption(voltage_option);   
        	    	    	
        	    	    	var axisData;
        	    	    //	clearInterval(timeTicket);
        	    	    	timeTicket = setInterval(function (){
        	    	    	axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');
        	    	    	    // 动态数据接口 addData
        	    	    	    
        	    	    	myChart_voltage.addData([
        	    	    	        [
        	    	    	            0,        // 系列索引
        	    	    	            list[0],
        	    	    	            //Math.round(Math.random() * 100), // 新增数据
        	    	    	            false,     // 新增数据是否从队列头部插入
        	    	    	            false,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
        	    	    	            axisData
        	    	    	            ],
        	    	    	        
        	    	    	        [
	        	    	 	            1,        // 系列索引
	        	    	 	           list[1], 
	        	    	 	           // Math.round(Math.random() * 100), // 新增数据
	        	    	 	            false,     // 新增数据是否从队列头部插入
	        	    	 	            false,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
	        	    	 	            axisData
	        	    	 	            
        	    	 	            ],
        	    	 	            [
	        	    	 	            2,        // 系列索引
	        	    	 	           list[2], 
	        	    	 	          //  Math.round(Math.random() * 100), // 新增数据
	        	    	 	            false,     // 新增数据是否从队列头部插入
	        	    	 	            false,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
	        	    	 	            axisData
        	    	 	            
        	    	 	            ]
        	    	    	       
        	    	    	    ]);
        	    	    	  
        	    	    	    
        	    	    	}, 2000);
        	    	    	                    
        	    	    	myChart_voltage.setOption(voltage_option);    
        	    	    	
/////////////////////////////////////////////////交流电流曲线//////////////////////////////////         	    	    	
        	    	    	   var myChart_current = echarts.init(document.getElementById('Current'),'macarons');

        	            	   current_option = {
        	            			   		color:['#FFD700','#228B22','#FF0000'], //修改默然颜色 	    
        	            			   		title : {
        	            	    	    	        text: '交流电流',
        	            	    	    	        subtext:'数据来自储能实验室',
        	            	    	    	        x:'30',
        	            	    	    	        y:'5',
        	            	    	    	        textAlign:'left',
        	            	    	    	        padding:5, 
        	            	    	    	        textStyle:
        	            	    	    	        {
        	            	    	    	            fontSize: 13,
        	            	    	    	            fontWeight: 'bolder',
        	            	    	    	            color: '#2894FF'
        	            	    	    	        },
        	            	    	    	        subtextStyle:
        	            	    	    	        {
        	            	    	    	        	fontSize: 10,
        	            	    	    	            fontWeight: 'bolder',
        	            	    	    	            
        	            	    	    	        }

        	            	    	    	        
        	            	    	    	    },
        	            	    	    	    tooltip : {
        	            	    	    	        trigger: 'axis'
        	            	    	    	    },
        	            	    	    	    legend: {
        	            	    	    	    	 orient: 'horizontal', // 'vertical'
        	            	    	    	         x: 'center', // 'center' | 'left' | {number},
        	            	    	    	         y: '10', // 'center' | 'bottom' | {number}
        	            	    	    	       
        	            	    	    	    	selectedMode:true,
        	            	    	    	    	itemWidth:15,
        	            	    	    	        itemHeight:15,
        	            	    	    	        textStyle:{color:'auto'},
        	            	    	    	        selected: {
        	            	    	    	            'A相电流' : true,
        	            	    	    	            'B相电流' : true,
        	            	    	    	            'C相电流' : true,
        	            	    	    	            
        	            	    	    	            
        	            	    	    	        },
        	            	    	    	        
        	            	    	    	        data:  [
        	            	    	     	               {
        	            	    	    	                   name:'A相电流',
        	            	    	    	                   textStyle:{fontWeight:'bold',fontSize:'12'}
        	            	    	    	               },
        	            	    	    	               {
        	            	    	    	                   name:'B相电流',
        	            	    	    	                   textStyle:{fontWeight:'bold',fontSize:'12'}
        	            	    	    	               },
        	            	    	    	               {
        	            	    	    	                   name:'C相电流',
        	            	    	    	                   textStyle:{fontWeight:'bold',fontSize:'12'}
        	            	    	    	               },
        	            	    	    	           ]
        	            	    	    	    },
        	            	    	    	    toolbox: {
        	            	    	    	        show : true,
        	            	    	    	        orient: 'horizontal',      // 布局方式，默认为水平布局，可选为：
        	            	    						                // 'horizontal' ¦ 'vertical'
        	            	    						x: 'right',                // 水平安放位置，默认为全图右对齐，可选为：
        	            	    						                // 'center' ¦ 'left' ¦ 'right'
        	            	    						                // ¦ {number}（x坐标，单位px）
        	            	    						y: '10',                  // 垂直安放位置，默认为全图顶端，可选为：
        	            	    						                // 'top' ¦ 'bottom' ¦ 'center'
        	            	    						
        	            	    					itemSize:15,                // ¦ {number}（y坐标，单位px）
        	            	    					itemGap: 5,
        	            	    					  padding:[0,50,10,30],  //左右上下
        	            	    	    	        feature : {
        	            	    	    	            mark : {show: true},
        	            	    	    	            dataView : {show: true, readOnly: false},
        	            	    	    	      	    magicType : {show: true, type: ['line', 'bar']},
        	            	    	    	            restore : {show: true},
        	            	    	    	            saveAsImage : {show: true}
        	            	    	    	            
        	            	    	    	        }
        	            	    	    	    },
        	            	    	    	    dataZoom : {
        	            	    	    	        show : false,
        	            	    	    	        start : 0,
        	            	    	    	        end : 100
        	            	    	    	    },
        	            	    	    	    xAxis : [
        	            	    	    	        {
        	            	    	    	            type : 'category',
        	            	    	    	            axisLine:{show:true,},
        	            	    	    	            boundaryGap : true,
        	            	    	    	            data : (function (){
        	            	    			                var now = new Date();
        	            	    			                var res = [];
        	            	    			                var len = 20;
        	            	    			                while (len--) {
        	            	    			                    res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
        	            	    			                    now = new Date(now - 2000);
        	            	    			                }
        	            	    			                return res;
        	            	    	                    })()
        	            	    	    	            
        	            	    	    	        },
        	            	    	    	    
        	            	    	    	    ],
        	            	    	    	    grid:{
        	    	    	    	    	    	x:60,
        	    	    	    	    	    	x2:50,
        	    	    	    	    	    	
    	    	    	    	    	    	
        	    	    	    	    	    },
        	            	    	    	    yAxis : [
        	            	    	    	        {
        	            	    	    	            type : 'value',
        	            	    	    	            axisLine:{show:true,},
        	            	    	    	        
        	            	    	    	            scale: true,
        	            	    	    	            name : '电流/A',
        	            	    	    	            namelocation:'end',
        	            	    	    	            nameTextStyle:{
        	            	    	    	            	fontSize:15,
        	            	    	    	            	fontWeight:'blorder',
        	            	    	    	            },
        	            	    	    	            axisLabel : {
        	            	    	    	               // formatter: '{value} A'
        	            	    	    	                	show:true,
        	        	    	    	    	            	margin:35,
        	            	    	    	            },
        	            	    	    	           
        	            	    	    	            boundaryGap: [0.2, 0.2]
        	            	    	    	        },
        	            	    	    	     
        	            	    	    	    ],
        	            	    	    	    series : [
        	            	    	    	        
        	            	    	    	        {
        	            	    	    	            name:'A相电流',
        	            	    	    	            type:'line',
        	            	    	    	            itemStyle: {
        	            	    	    	                normal: {
        	            	    	    	                	
        	            	    	    	                	lineStyle:{color:'#FFD700',}	
        	            	    	    	                    
        	            	    	    	                },
        	            	    	    	                emphasis: {
        	            	    	    	                    
        	            	    	    	                }
        	            	    	    	            },
        	            	    	    	            data:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        	            	    	    	            symbolSize:2,
        	            	    	    	        },
        	            	    	    	        
        	            	    	    	        {
        	            	    	    	            name:'B相电流',
        	            	    	    	            type:'line',
        	            	    	    	            itemStyle: {
        	            	    	    	                normal: {
        	            	    	    	                	
        	            	    	    	                	lineStyle:{color:'#228B22',}
        	            	    	    	                    
        	            	    	    	                },
        	            	    	    	                emphasis: {
        	            	    	    	                    
        	            	    	    	                }
        	            	    	    	            },
        	            	    	    	            data:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        	            	    	    	            symbolSize:2,
        	            	    	    	        },
        	            	    	    	        
        	            	    	    	        {
        	            	    	    	            name:'C相电流',
        	            	    	    	            type:'line',
        	            	    	    	            itemStyle: {
        	            	    	    	                normal: {
        	            	    	    	                	
        	            	    	    	                	lineStyle:{color:'#FF0000',}
        	            	    	    	                    
        	            	    	    	                },
        	            	    	    	                emphasis: {
        	            	    	    	                    
        	            	    	    	                }
        	            	    	    	            },
        	            	    	    	            data:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        	            	    	    	            symbolSize:2,
        	            	    	    	        },
        	            	    	    	        
        	            	    	    	    ]
        	            	    	    	        
        	    						
        	            	    	    	    
        	            	    	    	};
        	            	    	    
        	            	   myChart_current.setOption(current_option);     
        	            	    	    	
        	            	    	    	var axisData;
        	            	    	    //	clearInterval(timeTicket);
        	            	    	    	timeTicket = setInterval(function (){
        	            	    	    	axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');
        	            	    	    	    // 动态数据接口 addData
        	            	    	    	    
        	            	    	    	myChart_current.addData([
        	            	    	    	        [
        	            	    	    	            0,        // 系列索引
        	            	    	    	            list[3],
        	            	    	    	            //Math.round(Math.random() * 100), // 新增数据
        	            	    	    	            false,     // 新增数据是否从队列头部插入
        	            	    	    	            false,     // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
        	            	    	    	            axisData
        	            	    	    	            ],
        	            	    	    	        
        	            	    	    	        [
        	    	        	    	 	            1,        // 系列索引
        	    	        	    	 	           list[4],
        	    	        	    	 	            //Math.round(Math.random() * 100), // 新增数据
        	    	        	    	 	            false,     // 新增数据是否从队列头部插入
        	    	        	    	 	            false,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
        	    	        	    	 	            axisData
        	    	        	    	 	            
        	            	    	 	            ],
        	            	    	 	            [
        	    	        	    	 	            2,        // 系列索引
        	    	        	    	 	           list[5],
        	    	        	    	 	            //Math.round(Math.random() * 100), // 新增数据
        	    	        	    	 	            false,     // 新增数据是否从队列头部插入
        	    	        	    	 	            false,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
        	    	        	    	 	            axisData
        	            	    	 	            
        	            	    	 	            ]
        	            	    	    	       
        	            	    	    	    ]);
        	            	    	    	  
        	            	    	    	    
        	            	    	    	}, 2000);
        	            	    	    	                    
        	            	    	    	myChart_current.setOption(current_option);    
        	            	    	    	
        	            	    	    	
        	            	    	    	
/////////////////////////////直流电流//////////////////////////////////////
        	            	    	  
  
    	   var myChart_dc = echarts.init(document.getElementById('DC'),'macarons');

    	   dc_option = {
    	    	    	    title : {
    	    	    	        text: '直流信息',
    	    	    	        subtext:'数据来源储能实验室',
    	    	    	        x:'30',                //'left',
    	    	    	        y:'5',                  //'top',
    	    	    	        textAlign:'left',
    	    	    	        padding:5, 
    	    	    	        textStyle:
    	    	    	        {
    	    	    	            fontfamily:'',
    	    	    	        	fontSize: 13,
    	    	    	            fontWeight: 'bolder',
    	    	    	            color: '#2894FF'    //'#2894FF'
    	    	    	        },
    	    	    	        subtextStyle:
    	    	    	        {
    	    	    	        	fontSize: 10,
    	    	    	            fontWeight: 'bolder',
    	    	    	           // color: '#2894FF'    //'#2894FF'
    	    	    	            
    	    	    	        }

    	    	    	        
    	    	    	    },
    	    	    	    tooltip : {
    	    	    	        trigger: 'axis'
    	    	    	    },
    	    	    	    legend: {
    	    	    	    	 orient: 'horizontal', // 'vertical'
    	    	    	         x: 'center', // 'center' | 'left' | {number},
    	    	    	         y: '10', // 'center' | 'bottom' | {number}
    	    	    	    	selectedMode:true,
    	    	    	    	itemWidth:15,
    	    	    	        itemHeight:15,
    	    	    	        textStyle:{color:'auto'},
    	    	    	        selected: {
    	    	    	            '直流电压' : true,
    	    	    	            '直流电流 ' : true,
    	    	    	            
    	    	    	        },
    	    	    	        data:  [
    	    	     	               {
    	    	    	                   name:'直流电压',
    	    	    	                   textStyle:{fontWeight:'bold',fontSize:'12'}
    	    	    	               },
    	    	    	               {
    	    	    	                   name:'直流电流',
    	    	    	                   textStyle:{fontWeight:'bold',fontSize:'12'}
    	    	    	               },
    	    	    	           
    	    	    	           ]
    	    	    	    },
    	    	    	    toolbox: {
    	    	    	        show : true,
    	    	    	        orient: 'horizontal',      // 布局方式，默认为水平布局，可选为：
    	    						                // 'horizontal' ¦ 'vertical'
    	    						x: 'right',                // 水平安放位置，默认为全图右对齐，可选为：
    	    						                // 'center' ¦ 'left' ¦ 'right'
    	    						                // ¦ {number}（x坐标，单位px）
    	    						y: '10',                  // 垂直安放位置，默认为全图顶端，可选为：
    	    						                // 'top' ¦ 'bottom' ¦ 'center'
    	    					itemSize:15,                // ¦ {number}（y坐标，单位px）
    	    					itemGap: 10,
    	    					padding:[0,50,10,30],  //左右上下
    	    	    	        feature : {
    	    	    	            mark : {show: true},
    	    	    	            dataView : {show: true, readOnly: false},
    	    	    	      	    magicType : {show: true, type: ['line', 'bar']},
    	    	    	            restore : {show: true},
    	    	    	            saveAsImage : {show: true}
    	    	    	            
    	    	    	        }
    	    	    	    },
    	    	    	    dataZoom : {
    	    	    	        show : false,
    	    	    	        start : 0,
    	    	    	        end : 100
    	    	    	    },
    	    	    	    xAxis : [
    	    	    	        {
    	    	    	            type : 'category',
    	    	    	            boundaryGap : true,
    	    	    	            data : (function (){
    	    			                var now = new Date();
    	    			                var res = [];
    	    			                var len = 20;
    	    			                while (len--) {
    	    			                    res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
    	    			                    now = new Date(now - 2000);
    	    			                }
    	    			                return res;
    	    	                    })()
    	    	    	            
    	    	    	        },
    	    	    	    
    	    	    	    ],
    	    	    	    grid:{
    	    	    	    	x:60,
    	    	    	    	x2:50,
    	    	    	    	
	    	    	    	
    	    	    	    },
    	    	    	    yAxis : [
    	    	    	        {
    	    	    	            type : 'value',
    	    	    	            axisLine:{show:true,},
    	    	    	            axisLabel:{
    	    	    	            	show:true,
    	    	    	            	margin:30,
    	    	    	            	
    	    	    	            },
    	    	    	            scale: true,
    	    	    	            name : '直流电压/V',
    	    	    	            nameTextStyle:{
    	    	    	            	fontSize:15,
    	    	    	            	fontWeight:'blorder',
    	    	    	          //  nameTextStyle:{color:'#87cefa'
    	    	    	            	},
    	    	    	            
    	    	    	            boundaryGap: [0.2, 0.2],
    	    	    	        },
    	    	    	        
    	    	    	        {
    	    	    	            type : 'value',
    	    	    	            axisLine:{show:true,},
    	    	    	            axisLabel:{
    	    	    	            	show:true,
    	    	    	            	margin:10,
    	    	    	            	
    	    	    	            },
    	    	    	            scale: true,
    	    	    	            name : '直流电流/A',
    	    	    	            nameTextStyle:{
    	    	    	            	fontSize:15,
    	    	    	            	fontWeight:'blorder',
    	    	    	          //  nameTextStyle:{color:'#87cefa'
    	    	    	            	},
    	    	    	            
    	    	    	            boundaryGap: [0.2, 0.2],
    	    	    	        }
    	    	    	        
    	    	    	     
    	    	    	    ],
    	    	    	    series : [
    	    	    	        
    	    	    	        {
    	    	    	            name:'直流电压',
    	    	    	            type:'line',
    	    	    	            itemStyle: {
    	    	    	                normal: {
    	    	    	                	
    	    	    	                	
    	    	    	                    
    	    	    	                },
    	    	    	                emphasis: {
    	    	    	                    
    	    	    	                }
    	    	    	            },
    	    	    	            data:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    	    	    	            symbolSize:2,
    	    	    	        },
    	    	    	        
    	    	    	        {
    	    	    	            name:'直流电流',
    	    	    	            type:'line',
    	    	    	            yAxisIndex: 1,
    	    	    	            itemStyle: {
    	    	    	                normal: {
    	    	    	                	
    	    	    	                
    	    	    	                    
    	    	    	                },
    	    	    	                emphasis: {
    	    	    	                    
    	    	    	                }
    	    	    	            },
    	    	    	            data:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    	    	    	            symbolSize:2,
    	    	    	        },
    	    	    	        
    	    	    	      
    	    	    	        
    	    	    	    ]
    	    	    	        
					
    	    	    	    
    	    	    	};
    	    	    
    	   myChart_dc.setOption(dc_option);     
    	    	    	
    	    	    	var axisData;
    	    	    //	clearInterval(timeTicket);
    	    	    	timeTicket = setInterval(function (){
    	    	    	axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');
    	    	    	    // 动态数据接口 addData
    	    	    	    
    	    	    	myChart_dc.addData([
    	    	    	        [
    	    	    	            0,        // 系列索引
    	    	    	          list[6],
    	    	    	            // Math.round(Math.random() * 100), // 新增数据
    	    	    	            false,     // 新增数据是否从队列头部插入
    	    	    	            false ,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
    	    	    	            axisData
    	    	    	        ],
    	    	    	        
    	    	    	        [
        	    	 	            1,        // 系列索引
        	    	 	          list[7],
        	    	 	           // Math.round(Math.random() * 100), // 新增数据
        	    	 	            false,     // 新增数据是否从队列头部插入
        	    	 	            false,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
        	    	 	            
        	    	 	            
    	    	 	            ]
    	    	 	          
    	    	    	       
    	    	    	    ]);
    	    	    	  
    	    	    	    
    	    	    	}, 2000);
    	    	    	                    
    	    	    	myChart_dc.setOption(dc_option);          	            	    	    	
    	
       	            	    	    	
        	            	    	    	
/////////////////////////////直流功率////////////////////////      	            	    	    	
    	    	    	   var myChart_power = echarts.init(document.getElementById('DCpower'),'macarons');

    	    	    	   power_option = {
    	    	    	    	    	    title : {
    	    	    	    	    	        text: '功率信息',
    	            	    	    	        subtext:'数据来源储能实验室',
    	            	    	    	        x:'30',                //'left',
    	            	    	    	        y:'5',                  //'top',
    	            	    	    	        textAlign:'left',
    	            	    	    	        padding:5, 
    	            	    	    	        textStyle:
    	            	    	    	        {
    	            	    	    	            fontfamily:'',
    	            	    	    	        	fontSize: 13,
    	            	    	    	            fontWeight: 'bolder',
    	            	    	    	            color: '#2894FF'    //'#2894FF'
    	            	    	    	        },
    	            	    	    	        subtextStyle:
    	            	    	    	        {
    	            	    	    	        	fontSize: 10,
    	            	    	    	            fontWeight: 'bolder',
    	            	    	    	           // color: '#2894FF'    //'#2894FF'
    	            	    	    	            
    	            	    	    	        }

    	    	    	    	    	        
    	    	    	    	    	    },
    	    	    	    	    	    tooltip : {
    	    	    	    	    	        trigger: 'axis'
    	    	    	    	    	    },
    	    	    	    	    	    legend: {
    	    	    	    	    	    	 orient: 'horizontal', // 'vertical'
    	    	    	    	    	         x: 'center', // 'center' | 'left' | {number},
    	    	    	    	    	         y: '10', // 'center' | 'bottom' | {number}
    	    	    	    	    	    	selectedMode:true,
    	    	    	    	    	    	itemWidth:15,
    	    	    	    	    	        itemHeight:15,
    	    	    	    	    	        textStyle:{color:'auto'},
    	    	    	    	    	        selected: {
    	    	    	    	    	            '有功功率' : true,
    	    	    	    	    	            '无功功率' : true,
    	    	    	    	    	        },
    	    	    	    	    	        
    	    	    	    	    	        data:  [
    	    	    	    	     	               {
    	    	    	    	    	                   name:'有功功率',
    	    	    	    	    	                   textStyle:{fontWeight:'bold',fontSize:'12'}
    	    	    	    	    	               },
    	    	    	    	    	               {
    	    	    	    	    	                   name:'无功功率',
    	    	    	    	    	                   textStyle:{fontWeight:'bold',fontSize:'12'}
    	    	    	    	    	               },
    	    	    	    	    	           
    	    	    	    	    	           ]
    	    	    	    	    	    },
    	    	    	    	    	    toolbox: {
    	    	    	    	    	        show : true,
    	    	    	    	    	        orient: 'horizontal',      // 布局方式，默认为水平布局，可选为：
    	    	    	    						                // 'horizontal' ¦ 'vertical'
    	    	    	    						x: 'right',                // 水平安放位置，默认为全图右对齐，可选为：
    	    	    	    						                // 'center' ¦ 'left' ¦ 'right'
    	    	    	    						                // ¦ {number}（x坐标，单位px）
    	    	    	    						y: '10',                  // 垂直安放位置，默认为全图顶端，可选为：
    	    	    	    						                // 'top' ¦ 'bottom' ¦ 'center'
    	    	    	    					itemSize:15,                // ¦ {number}（y坐标，单位px）
    	    	    	    					itemGap: 10,
    	    	    	    	    	        feature : {
    	    	    	    	    	            mark : {show: true},
    	    	    	    	    	            dataView : {show: true, readOnly: false},
    	    	    	    	    	      	    magicType : {show: true, type: ['line', 'bar']},
    	    	    	    	    	            restore : {show: true},
    	    	    	    	    	            saveAsImage : {show: true}
    	    	    	    	    	            
    	    	    	    	    	        }
    	    	    	    	    	    },
    	    	    	    	    	    dataZoom : {
    	    	    	    	    	        show : false,
    	    	    	    	    	        start : 0,
    	    	    	    	    	        end : 100
    	    	    	    	    	    },
    	    	    	    	    	    xAxis : [
    	    	    	    	    	        {
    	    	    	    	    	            type : 'category',
    	    	    	    	    	            boundaryGap : true,
    	    	    	    	    	            data : (function (){
    	    	    	    			                var now = new Date();
    	    	    	    			                var res = [];
    	    	    	    			                var len = 20;
    	    	    	    			                while (len--) {
    	    	    	    			                    res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
    	    	    	    			                    now = new Date(now - 2000);
    	    	    	    			                }
    	    	    	    			                return res;
    	    	    	    	                    })()
    	    	    	    	    	            
    	    	    	    	    	        },
    	    	    	    	    	    
    	    	    	    	    	    ],
    	    	    	    	    	    grid:{
    	    	    	    	    	    	x:60,
    	    	    	    	    	    	x2:50,
    	    	    	    	    	    	
	    	    	    	    	    	
    	    	    	    	    	    },
    	    	    	    	    	    
    	    	    	    	    	    yAxis : [
    	    	    	    	    	        {
    	    	    	    	    	            type : 'value',
    	    	    	    	    	            axisLine:{show:true,},
    	    	    	    	    	            axisTick:{
    	    	    	    	    	            	show:false,
    	    	    	    	    	            	inside:false,
    	    	    	    	    	            	},
    	    	    	    	    	            axisLabel:{
    	    	    	    	    	            	show:true,
    	    	    	    	    	            	margin:30,
    	    	    	    	    	            	
    	    	    	    	    	            },
    	    	    	    	    	            scale: true,
    	    	    	    	    	            name : '有功功率/kW',
    	    	    	    	    	            nameTextStyle:{
    	    	    	    	    	            	fontSize:15,
    	    	    	    	    	            	fontWeight:'blorder',
    	    	    	    	    	          //  nameTextStyle:{color:'#87cefa'
    	    	    	    	    	            	},
    	    	    	    	    	            
    	    	    	    	    	            boundaryGap: [0.2, 0.2]
    	    	    	    	    	        },
    	    	    	    	    	        
    	    	    	    	    	        {
    	    	    	    	    	            type : 'value',
    	    	    	    	    	            axisLine:{show:true,},
    	    	    	    	    	            axisLabel:{
    	    	    	    	    	            	show:true,
    	    	    	    	    	            	margin:10,
    	    	    	    	    	            	
    	    	    	    	    	            },
    	    	    	    	    	            scale: true,
    	    	    	    	    	            name : '无功功率/kvar',
    	    	    	    	    	            nameTextStyle:{
    	    	    	    	    	            	fontSize:15,
    	    	    	    	    	            	fontWeight:'blorder',
    	    	    	    	    	          //  nameTextStyle:{color:'#87cefa'
    	    	    	    	    	            	},
    	    	    	    	    	            boundaryGap: [0.2, 0.2]
    	    	    	    	    	        }
    	    	    	    	    	        
    	    	    	    	    	     
    	    	    	    	    	    ],
    	    	    	    	    	    series : [
    	    	    	    	    	        
    	    	    	    	    	        {
    	    	    	    	    	            name:'有功功率',
    	    	    	    	    	            type:'line',
    	    	    	    	    	            itemStyle: {
    	    	    	    	    	                normal: {
    	    	    	    	    	                	
    	    	    	    	    	                	
    	    	    	    	    	                    
    	    	    	    	    	                },
    	    	    	    	    	                emphasis: {
    	    	    	    	    	                    
    	    	    	    	    	                }
    	    	    	    	    	            },
    	    	    	    	    	            data:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    	            	    	    	            symbolSize:2,
    	    	    	    	    	        },
    	    	    	    	    	        
    	    	    	    	    	        {
    	    	    	    	    	            name:'无功功率',
    	    	    	    	    	            type:'line',
    	    	    	    	    	            yAxisIndex: 1,
    	    	    	    	    	            itemStyle: {
    	    	    	    	    	                normal: {
    	    	    	    	    	                	
    	    	    	    	    	                
    	    	    	    	    	                    
    	    	    	    	    	                },
    	    	    	    	    	                emphasis: {
    	    	    	    	    	                    
    	    	    	    	    	                }
    	    	    	    	    	            },
    	    	    	    	    	            data:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    	            	    	    	            symbolSize:2,
    	    	    	    	    	        },
    	    	    	    	    	        
    	    	    	    	    	      
    	    	    	    	    	        
    	    	    	    	    	    ]
    	    	    	    	    	        
    	    						
    	    	    	    	    	    
    	    	    	    	    	};
    	    	    	    	    
    	    	    	   myChart_power.setOption(power_option);     
    	    	    	    	    	
    	    	    	    	    	var axisData;
    	    	    	    	    //	clearInterval(timeTicket);
    	    	    	    	    	timeTicket = setInterval(function (){
    	    	    	    	    	axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');
    	    	    	    	    	    // 动态数据接口 addData
    	    	    	    	    	    
    	    	    	    	    	myChart_power.addData([
    	    	    	    	    	        [
    	    	    	    	    	            0,        // 系列索引
    	    	    	    	    	           list[8],
    	    	    	    	    	          //  Math.round(Math.random() * 100), // 新增数据
    	    	    	    	    	            false,     // 新增数据是否从队列头部插入
    	    	    	    	    	            false ,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
    	    	    	    	    	            axisData
    	    	    	    	    	        ],
    	    	    	    	    	        
    	    	    	    	    	        [
    	    	        	    	 	            1,        // 系列索引
    	    	        	    	 	           list[9],
    	    	        	    	 	         //   Math.round(Math.random() * 100), // 新增数据
    	    	        	    	 	            false,     // 新增数据是否从队列头部插入
    	    	        	    	 	            false,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
    	    	        	    	 	            
    	    	        	    	 	            
    	    	    	    	 	            ]
    	    	    	    	 	          
    	    	    	    	    	       
    	    	    	    	    	    ]);
    	    	    	    	    	  
    	    	    	    	    	    
    	    	    	    	    	}, 2000);
    	    	    	    	    	                    
    	    	    	    	    	myChart_power.setOption(power_option);         	            	    	    	
        	    	    	