var list = [];

// /////////////////////////////////////////////////

// ////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

var myChart_voltage = echarts.init(document.getElementById('Voltage'),
		'macarons');

voltage_option = {

	title : {
		// text : '功率曲线',
		// subtext : '数据来源储能实验室',
		x : '30', // 'left',
		y : '5', // 'top',
		textAlign : 'left',
		padding : 5,
		textStyle : {
			fontfamily : '',
			fontSize : 13,
			fontWeight : 'bolder',
			color : '#2894FF' // '#2894FF'
		},
		subtextStyle : {
			fontSize : 10,
			fontWeight : 'bolder',
		// color: '#2894FF' //'#2894FF'

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
		// // 'DATA1' : true,
		// 'DATA1' : true,
		// 'DATA1' : true,

		},

		data : []
	},
	toolbox : {
		show : true,
		orient : 'horizontal', // 布局方式，默认为水平布局，可选为：
		// 'horizontal' ¦ 'vertical'
		x : 'right', // 水平安放位置，默认为全图右对齐，可选为：
		// 'center' ¦ 'left' ¦ 'right' // ¦ {number}（x坐标，单位px）
		y : '80', // 垂直安放位置，默认为全图顶端，可选为：
		// 'top' ¦ 'bottom' ¦ 'center' // ¦ {number}（y坐标，单位px）
		// backgroundColor:''
		padding : [ 0, 50, 10, 30 ], // 左右上下
		itemSize : 15,
		itemGap : 10,
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
				show : true,
				title : '保存图片',
				type : 'png',
				name : 'charts',
				lang : [ '点击保存' ]
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
			var len = 10;
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
		y : 100,
		x2 : 50,
	// y2:50,

	},
	yAxis : [ {
		type : 'value',
		show : true,
		axisLine : {
			show : true,
		},
		// axisTick:{show:true,},

		scale : true,
		name : '  电压/V',
		namelocation : 'end',
		nameTextStyle : {
			fontSize : 15,
			fontWeight : 'blorder',
		},

		axisLabel : {
			show : true,
			margin : 30,
			// formatter: '{value} V',
			textStyle : {

				align : 'left',
				baseling : 'left',
				fontsize : 10,

			}
		},

		boundaryGap : [ 0.2, 0.2 ]
	},

	],
	series : [
	/*
	 * { name : 'PCS1有功', type : 'line', data : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	 * 0, 0, 0, 0, 0, 0, 0 ], symbolSize : 2, },
	 *  { name : 'PCS2有功', type : 'line', data : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	 * 0, 0, 0, 0, 0, 0, 0 ], symbolSize : 2, }, { name : 'PCS3有功', type :
	 * 'line', data : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	 * symbolSize : 2, }, { name : 'PCS4有功', type : 'line', data : [ 0, 0, 0, 0,
	 * 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], symbolSize : 2, },
	 *  { name : 'PCS5有功', type : 'line', data : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	 * 0, 0, 0, 0, 0, 0, 0 ], symbolSize : 2, },
	 */

	]

};

myChart_voltage.setOption(voltage_option);

function onCheck() {
	console.log("按钮进去了！");
	voltage_option.legend.data = [];
	voltage_option.series = [];
	var notes = treeManager.getChecked();
	for (var i = 0; i < notes.length; i++) {
		var k = notes[i].data.id;
		if (k == 1 || k == 12) {
		} else {
			voltage_option.legend.data.push(notes[i].data.text);
			voltage_option.legend.selected[notes[i].data.text] = true;
			console.log("i=" + i);
			voltage_option.series.push({
				name : notes[i].data.text, // 系列名称
				type : 'line', // 图表类型，折线图line、散点图scatter、柱状图bar、饼图pie、雷达图radar
				data : [ 0, 0, 0, 0, 0, 0, 0, ],
				symbolSize : 2,
			});	
			//console.log(voltage_option.series[i].name);
			//console.log(voltage_option.series[i].data);
		}
		
	}

	timeTicket = setInterval(function() {
		console.log("开始 ！");
		console.log(axisData);
		for (var j = 0; j < notes.length; j++) {
			var m = notes[j].data.id;
			if (m == 1 || m == 12) {
			} else {
				console.log("j="+j+"   M="+m);
				var axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');
				console.log(axisData);
				
				myChart_voltage.addData([ [ j, list[m-2], false, false, axisData ], ]);
				console.log(voltage_option.series[j]);
			}
		}

	}, 2000);

	console.log("结束 ！");
	myChart_voltage.setOption(voltage_option);
}


function getGoods() {

	list = [];// 清空缓存
	var userdata = {
		action : 'reflash',
		dbname : 'PCSInfo',
		nocache : new Date().getTime(),
	};

	$.ajax({
		type : "post",
		url : "DataReflash",
		data : userdata,
		dataType : "json",
		async : false,
		success : function(data) {

			// alert(data.pcsdata1.PID);

			/*
			 * $("#PID").text(data.pcsdata1.PID);
			 * $("#AVoltage").text(data.pcsdata1.AVoltage);
			 * $("#BVoltage").text(data.pcsdata1.BVoltage);
			 */

			list.push(data.pcs1.activePower.toFixed(2));
			list.push(data.pcs2.activePower.toFixed(2));
			list.push(data.pcs3.activePower.toFixed(2));
			list.push(data.pcs4.activePower.toFixed(2));
			list.push(data.pcs5.activePower.toFixed(2));
			list.push(data.pcs1.reactivePower.toFixed(2));
			list.push(data.pcs2.reactivePower.toFixed(2));
			list.push(data.pcs3.reactivePower.toFixed(2));
			list.push(data.pcs4.reactivePower.toFixed(2));
			list.push(data.pcs5.reactivePower.toFixed(2));
			// clearInterval(timeTicket);

		}

	});
}

window.setInterval("getGoods()", 2000); // 每隔2S调用一次getGoods()方法

