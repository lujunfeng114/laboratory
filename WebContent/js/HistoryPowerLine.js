var list1 = [];

var jsonlist = [[],               
                [], [], [], [], [], [], [], [], [], [],   //PCS有功和无功                           
                [], [], [],    //DCDC1回路1~3功率
                [],[], [],		//DCDC2回路1~3功率
                [], [], [] ];//DCDC3回路1~3功率


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
		show : true,
		realtime : true,
		start : 30,
		end : 60
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
	 * { name : 'data1', type : 'line', data : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	 * 0, 0, 0, 0, 0, 0, 0 ], symbolSize : 2, },
	 *  { name : 'data2', type : 'line', data : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	 * 0, 0, 0, 0, 0, 0, 0 ], symbolSize : 2, }, { name : 'data3', type :
	 * 'line', data : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	 * symbolSize : 2, },
	 */

	]

};

myChart_voltage.setOption(voltage_option);

// //////////////////以下可以做历史数据显示用//////
function onCheck() {

	getGoods(); // 函数调用

//	var name = [];

	myChart_voltage.clear();
	voltage_option.legend.data = [];
	voltage_option.series = [];


	var notes = treeManager.getChecked();
	for (var i = 0; i < notes.length; i++) {
		
		/*var k = notes[i].data.id;
		if (k == 1 || k == 12) {
		} else {*/

			voltage_option.legend.data.push(notes[i].data.text);
			voltage_option.legend.selected[notes[i].data.text] = true;

			/*
			 * var list = []; for(k=0;k<100;k++) { list[k]=Math.random() * 40; }
			 */
			voltage_option.series.push({
				name : notes[i].data.text, // 系列名称
				type : 'line', // 图表类型，折线图line、散点图scatter、柱状图bar、饼图pie、雷达图radar
				data : jsonlist[notes[i].data.id],
				symbolSize : 2,
			});

		//}
	}
	myChart_voltage.setOption(voltage_option);
}

// /////////////////////////////////////////////////////////////////////////
function getGoods() {

	list = [];// 清空缓存

	var userdata = {
		selectrange : $("#timeselect").val(),
		datastart : $("#startdata").val(),
		dataend : $("#enddata").val(),
		nocache : new Date().getTime(),

	};

	$.ajax({
		type : "post",
		url : "HistoryPowerLineServlet",
		data : userdata,
		dataType : "json",
		async : false,
		success : function(data) {

			// alert(data.pcsdata1.PID);
			/*
			 * $("#PID").text(data.pcsdata1.PID);
			 * $("#AVoltage").text(data.pcsdata1.AVoltage);
			 * $("#BVoltage").text(data.pcsdata1.BVoltage); .toFixed(2)
			 */
			//jsonlist[0] 
			jsonlist[1] = data.PCS1_Activepower;
			jsonlist[2] = data.PCS2_Activepower;
			jsonlist[3] = data.PCS3_Activepower;
			jsonlist[4] = data.PCS4_Activepower;
			jsonlist[5] = data.PCS5_Activepower;

			jsonlist[6] = data.PCS1_ReactivePower;
			jsonlist[7] = data.PCS2_ReactivePower;
			jsonlist[8] = data.PCS3_ReactivePower;
			jsonlist[9] = data.PCS4_ReactivePower;
			jsonlist[10] = data.PCS5_ReactivePower;
			
			jsonlist[11] = data.DCDC1_Loop1Power;
			jsonlist[12] = data.DCDC1_Loop2Power;
			jsonlist[13] = data.DCDC1_Loop3Power;
			
			jsonlist[14] = data.DCDC2_Loop1Power;
			jsonlist[15] = data.DCDC2_Loop2Power;
			jsonlist[16] = data.DCDC2_Loop3Power;

	

		}

	});
}
