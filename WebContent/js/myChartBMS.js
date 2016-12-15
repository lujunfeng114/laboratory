var list = [];

function getGoods() {

	list = [];//清空缓存
	var userdata = {
		action : 'getbmsdatas',
		dbname : $("#bmsdbname").text(),
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

			//alert(data.bmsdata1.SingleMaxVoltage);
			$("#TotalVoltage").text(data.bmsdata1.totalVoltage.toFixed(2)); //电压
			$("#TotalCurrent").text(data.bmsdata1.totalCurrent.toFixed(2)); //电流
			$("#SOH").text(data.bmsdata1.SOH.toFixed(2)); //SOH
			$("#SOC").text(data.bmsdata1.SOC.toFixed(2)); //SOC
			$("#SingleMaxVoltage").text(
					data.bmsdata1.singleMaxVoltage.toFixed(2)); //单体最高电压
			$("#SingleMinVoltage").text(
					data.bmsdata1.singleMinVoltage.toFixed(2)); //单体最低电压
			$("#SingleMaxTemperature").text(
					data.bmsdata1.singleMaxTemperature.toFixed(2)); //单体最高温度
			$("#SingleMinTemperature").text(
					data.bmsdata1.singleMinTemperature.toFixed(2)); //单体最低温度

			list.push(data.bmsdata1.totalVoltage.toFixed(2));
			list.push(data.bmsdata1.totalCurrent.toFixed(2));
			list.push(data.bmsdata1.SOC.toFixed(2));

			//清除状态
			$("#start,#wait,#stop,#mode1,#mode2,#error,#normal").css({
				background : "#BEBEBE"
			});

			if (data.bmsdata1.runningState == '停机')
				$("#stop").css({
					background : "#7fee1d"
				});
			else if (data.bmsdata1.runningState == '待机')
				$("#wait").css({
					background : "#7fee1d"
				});
			else if (data.bmsdata1.runningState == '闭合')
				$("#start").css({
					background : "#7fee1d"
				});

			if (data.bmsdata1.runningState == '充电')
				$("#mode1").css({
					background : "#7fee1d"
				});
			if (data.bmsdata1.runningState == '放电')
				$("#mode2").css({
					background : "#FF0000"
				});

			if (data.bmsdata1.runningState == '正常')
				$("#normal").css({
					background : "#7fee1d"
				});
			if (data.bmsdata1.runningState == '故障')
				$("#error").css({
					background : "#FF0000"
				});

		}

	});
}

window.setInterval("getGoods()", 2000); //每隔分钟调用一次getGoods()方法

//////////////////////////////////////直流表盘/////////////////////////
//////////////////////////////////////直流表盘/////////////////////////
//////////////////////////////////////直流表盘/////////////////////////
//////////////////////////////////////直流表盘/////////////////////////

//直流电压
var DCVChart = echarts.init(document.getElementById('DCV'));

DCVoption = {
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
		name : '直流电压',
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
			name : '直流电压'
		} ]
	} ]
};

//	clearInterval(timeTicket);
timeTicket = setInterval(function() {
	//   DCVoption.series[0].data[0].value = (Math.random()*600).toFixed(2) - 0;
	DCVoption.series[0].data[0].value = list[0];
	DCVChart.setOption(DCVoption, true);
}, 2000);

///////////////////直流电流/////////////////

var DCAChart = echarts.init(document.getElementById('DCA'));

DCAoption = {
	tooltip : {
		formatter : "{a} <br/>{b} : {c}A"
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
		name : '直流电流',
		type : 'gauge',
		center : [ '50%', '70%' ], // 默认全局居中
		radius : [ 0, '100%' ],
		startAngle : 180,
		endAngle : 0,
		min : -300, // 最小值
		max : 300, // 最大值
		precision : 0, // 小数精度，默认为0，无小数点
		splitNumber : 6, // 分割段数，默认为5
		axisLine : { // 坐标轴线
			show : true, // 默认显示，属性show控制显示与否
			lineStyle : { // 属性lineStyle控制线条样式
				color : [ [ 0.16, 'lightgreen' ], [ 0.5, 'orange' ],
						[ 0.83, 'skyblue' ], [ 1, '#ff4500' ] ],
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
				case '-300':
					return '';
				case '-200':
					return '放电';
				case '200':
					return '充电';
				case '300':
					return '';
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
			formatter : '{value}A',
			textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
				color : 'auto',
				fontSize : 15
			}
		},
		data : [ {
			value : 50,
			name : '直流电流'
		} ]
	} ]
};

//	clearInterval(timeTicket);
timeTicket = setInterval(function() {
	//    DCAoption.series[0].data[0].value = (Math.random()*600).toFixed(2) - 0;
	DCAoption.series[0].data[0].value = list[1];
	DCAChart.setOption(DCAoption, true);
}, 2000);

///////////////////////////////////////////////////////////////////////////////       	    		
/////////////////////////////////////////////////曲线////////////////////////////////// 
/////////////////////////////////////////////////////////////////////////////// 
/////////////////////////////////////////////////////////////////////////////// 	

var myChart_dc = echarts.init(document.getElementById('DC'), 'macarons');

dc_option = {
	title : {
		text : '直流信息',
		subtext : '数据来源储能实验室',
		x : '30', //'left',
		y : '5', //'top',
		textAlign : 'left',
		padding : 5,
		textStyle : {
			fontfamily : '',
			fontSize : 13,
			fontWeight : 'bolder',
			color : '#2894FF' //'#2894FF'
		},
		subtextStyle : {
			fontSize : 10,
			fontWeight : 'bolder',
		// color: '#2894FF'    //'#2894FF'

		}

	},
	tooltip : {
		trigger : 'axis'
	},
	legend : {
		orient : 'horizontal', // 'vertical'
		x : 'center', // 'center' | 'left' | {number},
		y : '10', // 'center' | 'bottom' | {number}
		selectedMode : true,
		itemWidth : 15,
		itemHeight : 15,
		textStyle : {
			color : 'auto'
		},
		selected : {
			'直流电压' : true,
			'直流电流 ' : true,

		},
		data : [ {
			name : '直流电压',
			textStyle : {
				fontWeight : 'bold',
				fontSize : '12'
			}
		}, {
			name : '直流电流',
			textStyle : {
				fontWeight : 'bold',
				fontSize : '12'
			}
		},

		]
	},
	toolbox : {
		show : true,
		orient : 'horizontal', // 布局方式，默认为水平布局，可选为：
		// 'horizontal' ¦ 'vertical'
		x : 'right', // 水平安放位置，默认为全图右对齐，可选为：
		// 'center' ¦ 'left' ¦ 'right'
		// ¦ {number}（x坐标，单位px）
		y : '10', // 垂直安放位置，默认为全图顶端，可选为：
		// 'top' ¦ 'bottom' ¦ 'center'
		itemSize : 15, // ¦ {number}（y坐标，单位px）
		itemGap : 10,
		padding : [ 0, 50, 10, 30 ], //左右上下
		feature : {
			mark : {
				show : true
			},
			dataView : {
				show : true,
				readOnly : false
			},
			magicType : {
				show : true,
				type : [ 'line', 'bar' ]
			},
			restore : {
				show : true
			},
			saveAsImage : {
				show : true
			}

		}
	},
	dataZoom : {
		show : false,
		start : 0,
		end : 100
	},
	xAxis : [ {
		type : 'category',
		boundaryGap : true,
		data : (function() {
			var now = new Date();
			var res = [];
			var len = 20;
			while (len--) {
				res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
				now = new Date(now - 2000);
			}
			return res;
		})()

	},

	],
	grid : {
		x : 60,
		x2 : 50,

	},
	yAxis : [ {
		type : 'value',
		axisLine : {
			show : true,
		},
		axisLabel : {
			show : true,
			margin : 30,

		},
		scale : true,
		name : '直流电压/V',
		nameTextStyle : {
			fontSize : 15,
			fontWeight : 'blorder',
		//  nameTextStyle:{color:'#87cefa'
		},

		boundaryGap : [ 0.2, 0.2 ],
	},

	{
		type : 'value',
		axisLine : {
			show : true,
		},
		axisLabel : {
			show : true,
			margin : 10,

		},
		scale : true,
		name : '直流电流/A',
		nameTextStyle : {
			fontSize : 15,
			fontWeight : 'blorder',
		//  nameTextStyle:{color:'#87cefa'
		},

		boundaryGap : [ 0.2, 0.2 ],
	}

	],
	series : [

	{
		name : '直流电压',
		type : 'line',
		itemStyle : {
			normal : {

			},
			emphasis : {

			}
		},
		data : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
		symbolSize : 2,
	},

	{
		name : '直流电流',
		type : 'line',
		yAxisIndex : 1,
		itemStyle : {
			normal : {

			},
			emphasis : {

			}
		},
		data : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
		symbolSize : 2,
	},

	]

};

myChart_dc.setOption(dc_option);

var axisData;
//	clearInterval(timeTicket);
timeTicket = setInterval(function() {
	axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');
	// 动态数据接口 addData

	myChart_dc.addData([ [ 0, // 系列索引
	list[0],
	// Math.round(Math.random() * 100), // 新增数据
	false, // 新增数据是否从队列头部插入
	false, // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
	axisData ],

	[ 1, // 系列索引
	list[1],
	// Math.round(Math.random() * 100), // 新增数据
	false, // 新增数据是否从队列头部插入
	false, // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头

	]

	]);

}, 2100);

myChart_dc.setOption(dc_option);

///////////////////////////////////////////SOC/////////////////////////////////////////////////////////    	    	

var myChart_SOC = echarts.init(document.getElementById('ASD'), 'macarons');

SOC_option = {
	title : {
		text : 'SOC',
		subtext : '数据来源储能实验室',
		x : '30', //'left',
		y : '5', //'top',
		textAlign : 'left',
		padding : 5,
		textStyle : {
			fontfamily : '',
			fontSize : 13,
			fontWeight : 'bolder',
			color : '#2894FF' //'#2894FF'
		},
		subtextStyle : {
			fontSize : 10,
			fontWeight : 'bolder',
		// color: '#2894FF'    //'#2894FF'
		}

	},
	tooltip : {
		trigger : 'axis'
	},
	legend : {
		orient : 'horizontal', // 'vertical'
		x : 'center', // 'center' | 'left' | {number},
		y : '10', // 'center' | 'bottom' | {number}
		selectedMode : true,
		itemWidth : 15,
		itemHeight : 15,
		textStyle : {
			color : 'auto'
		},
		selected : {
			'SOC' : true,
		},
		data : [ {
			name : 'SOC',
			textStyle : {
				fontWeight : 'bold',
				fontSize : '12'
			}
		},

		]
	},
	toolbox : {
		show : true,
		orient : 'horizontal', // 布局方式，默认为水平布局，可选为：
		// 'horizontal' ¦ 'vertical'
		x : 'right', // 水平安放位置，默认为全图右对齐，可选为：
		// 'center' ¦ 'left' ¦ 'right'
		// ¦ {number}（x坐标，单位px）
		y : '10', // 垂直安放位置，默认为全图顶端，可选为：
		// 'top' ¦ 'bottom' ¦ 'center'
		itemSize : 15, // ¦ {number}（y坐标，单位px）
		itemGap : 10,
		padding : [ 0, 50, 10, 30 ], //左右上下
		feature : {
			mark : {
				show : true
			},
			dataView : {
				show : true,
				readOnly : false
			},
			magicType : {
				show : true,
				type : [ 'line', 'bar' ]
			},
			restore : {
				show : true
			},
			saveAsImage : {
				show : true
			}

		}
	},
	dataZoom : {
		show : false,
		start : 0,
		end : 100
	},
	xAxis : [ {
		type : 'category',
		boundaryGap : true,
		data : (function() {
			var now = new Date();
			var res = [];
			var len = 20;
			while (len--) {
				res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
				now = new Date(now - 2000);
			}
			return res;
		})()

	},

	],
	grid : {
		x : 60,
		x2 : 50,

	},
	yAxis : [ {
		type : 'value',
		axisLine : {
			show : true,
		},
		axisLabel : {
			show : true,
			margin : 30,

		},
		scale : true,
		name : 'SOC/%',
		nameTextStyle : {
			fontSize : 15,
			fontWeight : 'blorder',
		//  nameTextStyle:{color:'#87cefa'
		},

		boundaryGap : [ 0.2, 0.2 ],
	},

	],
	series : [

	{
		name : 'SOC',
		type : 'line',
		itemStyle : {
			normal : {

			},
			emphasis : {

			}
		},
		data : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
		symbolSize : 2,
	},

	]

};

myChart_SOC.setOption(SOC_option);

var axisData;

timeTicket = setInterval(function() {
	axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');
	// 动态数据接口 addData

	myChart_SOC.addData([ [ 0, // 系列索引
	list[2],
	// Math.round(Math.random() * 100), // 新增数据
	false, // 新增数据是否从队列头部插入
	false, // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
	axisData ],

	]);

}, 2100);

myChart_SOC.setOption(SOC_option);         
	    	    	
        	    	