
var list = [];

function getGoods() {

	list = [];//清空缓存
	var userdata = {
		action : 'getdcdcdatas',
		dbname : $("#DCDCDBName").text(),
		nocache : new Date().getTime(),
	};

	$.ajax({
		type : "post",
		url : "GoodsServlet",
		data : userdata,
		dataType : "json",
		async : false,
		success : function(data) {
			//jquery 赋值方式 	
			// alert(data.dcdcdata1.loop1PortVoltage);
			//  $("#PID").text(data.pcsdata1.PID);
			$("#Loop1PortVoltage").text(data.dcdcdata1.loop1PortVoltage.toFixed(2));
			$("#Loop2PortVoltage").text(data.dcdcdata1.loop2PortVoltage.toFixed(2));
			$("#Loop3PortVoltage").text(data.dcdcdata1.loop3PortVoltage.toFixed(2));
			$("#Loop1CapacitorVoltage").text(data.dcdcdata1.loop1CapacitorVoltage.toFixed(2));
			$("#Loop2CapacitorVoltage").text(data.dcdcdata1.loop2CapacitorVoltage.toFixed(2));
			$("#Loop3CapacitorVoltage").text(data.dcdcdata1.loop3CapacitorVoltage.toFixed(2));

			$("#HighVoltageCapacitorVoltage").text(data.dcdcdata1.highVoltageCapacitorVoltage.toFixed(2));
			$("#HighVoltagePortVoltage").text(data.dcdcdata1.highVoltagePortVoltage.toFixed(2));
			$("#Loop1PortCurrent").text(data.dcdcdata1.loop1PortCurrent.toFixed(2));
			$("#Loop2PortCurrent").text(data.dcdcdata1.loop2PortCurrent.toFixed(2));
			$("#Loop3PortCurrent").text(data.dcdcdata1.loop3PortCurrent.toFixed(2));

			$("#Loop1InductorCurrent").text(data.dcdcdata1.loop1InductorCurrent.toFixed(2));
			$("#Loop2InductorCurrent").text(data.dcdcdata1.loop2InductorCurrent.toFixed(2));
			$("#Loop3InductorCurrent").text(data.dcdcdata1.loop3InductorCurrent.toFixed(2));
			$("#BusCurrent").text(data.dcdcdata1.busCurrent.toFixed(2));
			$("#HighVoltageTotalCurrent").text(data.dcdcdata1.highVoltageTotalCurrent.toFixed(2));

			$("#BusCurrent").text(data.dcdcdata1.busCurrent.toFixed(2));
			$("#Loop1Power").text(data.dcdcdata1.loop1Power.toFixed(2));
			$("#Loop2Power").text(data.dcdcdata1.loop2Power.toFixed(2));
			$("#Loop3Power").text(data.dcdcdata1.loop3Power.toFixed(2));

			$("#HighVoltagePower").text(data.dcdcdata1.highVoltagePower.toFixed(2));
		
			list.push(data.dcdcdata1.highVoltagePortVoltage.toFixed(2)); 
			list.push(data.dcdcdata1.loop1PortVoltage.toFixed(2)); 
			list.push(data.dcdcdata1.loop2PortVoltage.toFixed(2)); 
			list.push(data.dcdcdata1.loop3PortVoltage.toFixed(2)); 
  

			//清除状态
			/*  		$("#start,#wait,#stop,#mode1,#mode2,#mode3,#mode4,#onnet,#offnet,#error,#normal").css({background: "#BEBEBE"});*/

			//设置各种状态	
			//LOOP1　先做一个测试一下　确定数据库中到底各个状态对应的中文汉字以及相互关系
			/*if(data.dcdcdata1.Loop1WorkingState=='停机')	
				$("#loop1stop").css({background: "#7fee1d"});
			else if(data.dcdcdata1.Loop1WorkingState=='待机')
				$("#loop1wait").css({background: "#7fee1d"});
			else if(data.dcdcdata1.Loop1WorkingState=='开机进行中')
				$("#loop1start").css({background: "#7fee1d"});	
			else if(data.dcdcdata1.Loop1WorkingMode=='故障')
				$("#loop1error").css({background: "#7fee1d"});			
			else if(data.dcdcdata1.Loop1WorkingMode=='正常')
				$("#loop1normal").css({background: "#7fee1d"});				
			else if(data.dcdcdata1.Loop1Modulation=='BUCK')
				$("#loop1BUCK").css({background: "#7fee1d"});					
			else if(data.dcdcdata1.Loop1Modulation=='BOOST')
				$("#loop1BOOST").css({background: "#7fee1d"});
			else if(data.dcdcdata1.Loop1Modulation=='MPPT')
				$("#loop1MPPT").css({background: "#7fee1d"});	*/

		}

	});
}

window.setInterval("getGoods()", 20000); //每隔分钟调用一次getGoods()方法


//////////////////////////////////////直流表盘/////////////////////////
//////////////////////////////////////直流表盘/////////////////////////

//直流电压
var DCHVChart = echarts.init(document.getElementById('DCHV'));

DCHVoption = {
	tooltip : {
		formatter : "{a} <br/>{b} : {c}V"
	},
	toolbox : {
		show : false,
		feature : {
			mark : {
				show : true
			},
			restore : {
				show : true
			},
			saveAsImage : {
				show : true
			}
		}
	},
	series : [ {
		name : '高压侧电压',
		type : 'gauge',
		center : [ '50%', '70%' ], // 默认全局居中
		radius : [ 0, '100%' ],
		startAngle : 180,
		endAngle : 0,
		min : 0, // 最小值
		max : 800, // 最大值
		precision : 0, // 小数精度，默认为0，无小数点
		splitNumber : 8, // 分割段数，默认为5
		axisLine : { // 坐标轴线
			show : true, // 默认显示，属性show控制显示与否
			lineStyle : { // 属性lineStyle控制线条样式
				color : [ [ 0.25, 'lightgreen' ], [ 0.5, 'orange' ],
						[ 0.75, 'skyblue' ], [ 1, '#ff4500' ] ],
				width : 20
			}
		},
		axisTick : { // 坐标轴小标记
			show : true, // 属性show控制显示与否，默认不显示
			splitNumber : 5, // 每份split细分多少段
			length : 8, // 属性length控制线长
			lineStyle : { // 属性lineStyle控制线条样式
				color : '#eee',
				width : 1,
				type : 'solid'
			}
		},
		axisLabel : { // 坐标轴文本标签，详见axis.axisLabel
			show : true,
			formatter : function(v) {
				switch (v + '') {
				case '100':
					return '弱';
				case '300':
					return '低';
				case '500':
					return '中';
				case '700':
					return '高';
				default:
					return '';
				}
			},
			textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
				color : '#333'
			}
		},
		splitLine : { // 分隔线
			show : true, // 默认显示，属性show控制显示与否
			length : 30, // 属性length控制线长
			lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
				color : '#eee',
				width : 2,
				type : 'solid'
			}
		},
		pointer : {
			length : '60%',
			width : 3,
			color : 'auto'
		},
		title : {
			show : true,
			offsetCenter : [ '0', -85 ], // x, y，单位px
			textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
				color : '#333',
				fontSize : 15
			}
		},
		detail : {
			show : true,
			backgroundColor : 'rgba(0,0,0,0)',
			borderWidth : 0,
			borderColor : '#ccc',
			width : 100,
			height : 40,
			offsetCenter : [ '0', 0 ], // x, y，单位px
			formatter : '{value}V',
			textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
				color : 'auto',
				fontSize : 15
			}
		},
		data : [ {
			value : 50,
			name : '高压侧电压'
		} ]
	} ]
};

timeTicket = setInterval(function() {
//	DCHVoption.series[0].data[0].value = (Math.random() * 600).toFixed(2) - 0;
		DCHVoption.series[0].data[0].value = list[0];
	DCHVChart.setOption(DCHVoption, true);
}, 2000);

//////////////////////////低压侧L1/////////////////////////////
//直流电压
var DCL1VChart = echarts.init(document.getElementById('DCL1V'));

DCL1Voption = {
	tooltip : {
		formatter : "{a} <br/>{b} : {c}V"
	},
	toolbox : {
		show : false,
		feature : {
			mark : {
				show : true
			},
			restore : {
				show : true
			},
			saveAsImage : {
				show : true
			}
		}
	},
	series : [ {
		name : 'L1低压侧电压',
		type : 'gauge',
		center : [ '50%', '70%' ], // 默认全局居中
		radius : [ 0, '100%' ],
		startAngle : 180,
		endAngle : 0,
		min : 0, // 最小值
		max : 800, // 最大值
		precision : 0, // 小数精度，默认为0，无小数点
		splitNumber : 8, // 分割段数，默认为5
		axisLine : { // 坐标轴线
			show : true, // 默认显示，属性show控制显示与否
			lineStyle : { // 属性lineStyle控制线条样式
				color : [ [ 0.25, 'lightgreen' ], [ 0.5, 'orange' ],
						[ 0.75, 'skyblue' ], [ 1, '#ff4500' ] ],
				width : 20
			}
		},
		axisTick : { // 坐标轴小标记
			show : true, // 属性show控制显示与否，默认不显示
			splitNumber : 5, // 每份split细分多少段
			length : 8, // 属性length控制线长
			lineStyle : { // 属性lineStyle控制线条样式
				color : '#eee',
				width : 1,
				type : 'solid'
			}
		},
		axisLabel : { // 坐标轴文本标签，详见axis.axisLabel
			show : true,
			formatter : function(v) {
				switch (v + '') {
				case '100':
					return '弱';
				case '300':
					return '低';
				case '500':
					return '中';
				case '700':
					return '高';
				default:
					return '';
				}
			},
			textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
				color : '#333'
			}
		},
		splitLine : { // 分隔线
			show : true, // 默认显示，属性show控制显示与否
			length : 30, // 属性length控制线长
			lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
				color : '#eee',
				width : 2,
				type : 'solid'
			}
		},
		pointer : {
			length : '60%',
			width : 3,
			color : 'auto'
		},
		title : {
			show : true,
			offsetCenter : [ '0', -85 ], // x, y，单位px
			textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
				color : '#333',
				fontSize : 15
			}
		},
		detail : {
			show : true,
			backgroundColor : 'rgba(0,0,0,0)',
			borderWidth : 0,
			borderColor : '#ccc',
			width : 100,
			height : 40,
			offsetCenter : [ '0', 0 ], // x, y，单位px
			formatter : '{value}V',
			textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
				color : 'auto',
				fontSize : 15
			}
		},
		data : [ {
			value : 50,
			name : 'L1低压侧电压'
		} ]
	} ]
};

timeTicket = setInterval(function() {
	//DCL1Voption.series[0].data[0].value = (Math.random() * 600).toFixed(2) - 0;
	DCL1Voption.series[0].data[0].value = list[1];
	DCL1VChart.setOption(DCL1Voption, true);
}, 2000);

//////////////////////////////////////低压侧L2////////////////////////////////
//直流电压
var DCL2VChart = echarts.init(document.getElementById('DCL2V'));

DCL2Voption = {
	tooltip : {
		formatter : "{a} <br/>{b} : {c}V"
	},
	toolbox : {
		show : false,
		feature : {
			mark : {
				show : true
			},
			restore : {
				show : true
			},
			saveAsImage : {
				show : true
			}
		}
	},
	series : [ {
		name : 'L2低压侧电压',
		type : 'gauge',
		center : [ '50%', '70%' ], // 默认全局居中
		radius : [ 0, '100%' ],
		startAngle : 180,
		endAngle : 0,
		min : 0, // 最小值
		max : 800, // 最大值
		precision : 0, // 小数精度，默认为0，无小数点
		splitNumber : 8, // 分割段数，默认为5
		axisLine : { // 坐标轴线
			show : true, // 默认显示，属性show控制显示与否
			lineStyle : { // 属性lineStyle控制线条样式
				color : [ [ 0.25, 'lightgreen' ], [ 0.5, 'orange' ],
						[ 0.75, 'skyblue' ], [ 1, '#ff4500' ] ],
				width : 20
			}
		},
		axisTick : { // 坐标轴小标记
			show : true, // 属性show控制显示与否，默认不显示
			splitNumber : 5, // 每份split细分多少段
			length : 8, // 属性length控制线长
			lineStyle : { // 属性lineStyle控制线条样式
				color : '#eee',
				width : 1,
				type : 'solid'
			}
		},
		axisLabel : { // 坐标轴文本标签，详见axis.axisLabel
			show : true,
			formatter : function(v) {
				switch (v + '') {
				case '100':
					return '弱';
				case '300':
					return '低';
				case '500':
					return '中';
				case '700':
					return '高';
				default:
					return '';
				}
			},
			textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
				color : '#333'
			}
		},
		splitLine : { // 分隔线
			show : true, // 默认显示，属性show控制显示与否
			length : 30, // 属性length控制线长
			lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
				color : '#eee',
				width : 2,
				type : 'solid'
			}
		},
		pointer : {
			length : '60%',
			width : 3,
			color : 'auto'
		},
		title : {
			show : true,
			offsetCenter : [ '0', -85 ], // x, y，单位px
			textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
				color : '#333',
				fontSize : 15
			}
		},
		detail : {
			show : true,
			backgroundColor : 'rgba(0,0,0,0)',
			borderWidth : 0,
			borderColor : '#ccc',
			width : 100,
			height : 40,
			offsetCenter : [ '0', 0 ], // x, y，单位px
			formatter : '{value}V',
			textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
				color : 'auto',
				fontSize : 15
			}
		},
		data : [ {
			value : 50,
			name : 'L2低压侧电压'
		} ]
	} ]
};

timeTicket = setInterval(function() {
	//DCL2Voption.series[0].data[0].value = (Math.random() * 600).toFixed(2) - 0;
		DCL2Voption.series[0].data[0].value = list[2];
	DCL2VChart.setOption(DCL2Voption, true);
}, 2000);

///////////////////////////低压侧L3////////////////////////////
//直流电压
var DCL3VChart = echarts.init(document.getElementById('DCL3V'));

DCL3Voption = {
	tooltip : {
		formatter : "{a} <br/>{b} : {c}V"
	},
	toolbox : {
		show : false,
		feature : {
			mark : {
				show : true
			},
			restore : {
				show : true
			},
			saveAsImage : {
				show : true
			}
		}
	},
	series : [ {
		name : 'L3低压侧电压',
		type : 'gauge',
		center : [ '50%', '70%' ], // 默认全局居中
		radius : [ 0, '100%' ],
		startAngle : 180,
		endAngle : 0,
		min : 0, // 最小值
		max : 800, // 最大值
		precision : 0, // 小数精度，默认为0，无小数点
		splitNumber : 8, // 分割段数，默认为5
		axisLine : { // 坐标轴线
			show : true, // 默认显示，属性show控制显示与否
			lineStyle : { // 属性lineStyle控制线条样式
				color : [ [ 0.25, 'lightgreen' ], [ 0.5, 'orange' ],
						[ 0.75, 'skyblue' ], [ 1, '#ff4500' ] ],
				width : 20
			}
		},
		axisTick : { // 坐标轴小标记
			show : true, // 属性show控制显示与否，默认不显示
			splitNumber : 5, // 每份split细分多少段
			length : 8, // 属性length控制线长
			lineStyle : { // 属性lineStyle控制线条样式
				color : '#eee',
				width : 1,
				type : 'solid'
			}
		},
		axisLabel : { // 坐标轴文本标签，详见axis.axisLabel
			show : true,
			formatter : function(v) {
				switch (v + '') {
				case '100':
					return '弱';
				case '300':
					return '低';
				case '500':
					return '中';
				case '700':
					return '高';
				default:
					return '';
				}
			},
			textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
				color : '#333'
			}
		},
		splitLine : { // 分隔线
			show : true, // 默认显示，属性show控制显示与否
			length : 30, // 属性length控制线长
			lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
				color : '#eee',
				width : 2,
				type : 'solid'
			}
		},
		pointer : {
			length : '60%',
			width : 3,
			color : 'auto'
		},
		title : {
			show : true,
			offsetCenter : [ '0', -85 ], // x, y，单位px
			textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
				color : '#333',
				fontSize : 15
			}
		},
		detail : {
			show : true,
			backgroundColor : 'rgba(0,0,0,0)',
			borderWidth : 0,
			borderColor : '#ccc',
			width : 100,
			height : 40,
			offsetCenter : [ '0', 0 ], // x, y，单位px
			formatter : '{value}V',
			textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
				color : 'auto',
				fontSize : 15
			}
		},
		data : [ {
			value : 50,
			name : 'L3低压侧电压'
		} ]
	} ]
};

timeTicket = setInterval(function() {
	//DCL3Voption.series[0].data[0].value = (Math.random() * 600).toFixed(2) - 0;
		DCL3Voption.series[0].data[0].value = list[3];
	DCL3VChart.setOption(DCL3Voption, true);
}, 2000);
