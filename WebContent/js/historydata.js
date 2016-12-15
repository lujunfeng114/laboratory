////////////////////////////////////////////////历史数据//////////////////////////////////////////// 

$(document).ready(
		function() {

			$("#dispaly").click(
					function() {

						list = [];// 清空缓存

						var myChart = echarts.init(document
								.getElementById('A'),
						'macarons');

						// 过渡---------------------
						myChart.showLoading({
							text : '正在努力的读取数据中...', // loading
						});

						// ajax getting data...............
						// ajax callback

						var userdata = {
								action : 'gethistorydatas',
								equipmentselect : $(
								"#equipmentselect").val(),
								itemselect : $("#itemselect").val(),
								selectrange : $("#selectrange").val(),
								datastart : $("#datastart").val(),
								dataend : $("#dataend").val(),
								nocache : new Date().getTime(),

						};

						$.ajax({
							type : "post",
							url : "HistoryDataServlet",
							data : userdata,
							dataType : "json",
							async : false,
							success : function(data) {

								$.ligerDialog
								.success('共查询到'
										+ data.totalnum
										+ '个数据点。');

								// alert('共查询到'+data.totalnum+'个数据点。');
								/*
								 * alert(data.Avoltage);
								 * $.each(data.data1,function(i,item){
								 * 
								 * list.push(Math.round(item.toFixed(2)));
								 * alert(list.toString());
								 * });
								 */

								// hideloading
								myChart.hideLoading();

								var option = {
										title : {
											text : '历史数据',
											subtext : '数据来源储能实验室',

											x : '40',
											y : '10',
											textStyle : {
												fontSize : 15,
												fontWeight : 'bolder',
												// color: '#333'
											},
											subtextStyle : {
												fontSize : 10,
												fontWeight : 'bolder',

											}

										},

										tooltip : {
											trigger : 'axis',
											formatter : function(
													params,
													ticket,
													callback) {
												// console.log(params)
												var res = '时间 :'
													+ params[0].name;
												var list1 = new Array(
														'V',
														'V',
														'V',
														'A',
														'A',
														'A',
														'V',
														'A',
														'kw',
												'kvar');
												var list2 = new Array(
														'V',
														'A',
														'%',
														'%',
														'V',
												'V');
												for (var i = 0, l = params.length; i < l; i++) {
													if (data.name == 'PCS')
														res += '<br/>'
															+ params[i].seriesName
															+ ' : '
															+ params[i].value
															+ list1[i];
													else
														res += '<br/>'
															+ params[i].seriesName
															+ ' : '
															+ params[i].value
															+ list2[i];

												}
												setTimeout(
														function() {
															// 仅为了模拟异步回调
															callback(
																	ticket,
																	res);
														},
														0);
														return 'loading。。。';
											}

										},
										legend : {
											orient : 'horizontal', // 'vertical'/'horizontal'
											x : 'center', // 'center'
											// |
											// 'left'
											// |
											// 'right'|{number},
											y : 10, // 'center'
											// |
											// 'bottom'
											// |'top'|
											// {number}
											itemWidth : 15,
											itemHeight : 15,
											textStyle : {
												color : 'auto',
												fontSize : 13
											},
											data : []
										},
										toolbox : {
											show : true,
											orient : 'horizontal', // 布局方式，默认为水平布局，可选为：
											// 'horizontal'
											// ¦ 'vertical'
											x : 'right', // 水平安放位置，默认为全图右对齐，可选为：
											// 'center' ¦
											// 'left' ¦
											// 'right'
											// ¦
											// {number}（x坐标，单位px）
											y : '10', // 垂直安放位置，默认为全图顶端，可选为：
											// 'top' ¦
											// 'bottom' ¦
											// 'center'
											// ¦
											// {number}（y坐标，单位px）
											color : [
											         '#1e90ff',
											         '#22bb22',
											         '#4b0082',
											         '#d2691e' ],
											         backgroundColor : 'rgba(0,0,0,0)', // 工具箱背景颜色
											         borderColor : '#ccc', // 工具箱边框颜色
											         borderWidth : 0, // 工具箱边框线宽，单位px，默认为0（无边框）
											         padding : [ 0,
											                     70, 10,
											                     30 ], // 左右上下
											                     // //
											                     // 工具箱内边距，单位px，默认各方向内边距为5，
											                     showTitle : true,
											                     itemSize : 15,
											                     itemGap : 5,
											                     feature : {
											                    	 mark : {
											                    		 show : true,
											                    		 title : {
											                    			 mark : '辅助线-开关',
											                    			 markUndo : '辅助线-删除',
											                    			 markClear : '辅助线-清空'
											                    		 },
											                    		 lineStyle : {
											                    			 width : 1,
											                    			 color : '#1e90ff',
											                    			 type : 'dashed'
											                    		 }
											                    	 },
											                    	 dataZoom : {
											                    		 show : true,
											                    		 title : {
											                    			 dataZoom : '区域缩放',
											                    			 dataZoomReset : '区域缩放-后退'
											                    		 }
											                    	 },

											                    	 magicType : {
											                    		 show : true,
											                    		 title : {
											                    			 line : '动态类型切换-折线图',
											                    			 bar : '动态类型切换-柱形图',
											                    			 // stack
											                    			 // :
											                    			 // '动态类型切换-堆积',
											                    			 // tiled
											                    			 // :
											                    			 // '动态类型切换-平铺'
											                    		 },
											                    		 type : [
											                    		         'line',
											                    		         'bar', ],// 'stack',
											                    		         // 'tiled']
											                    	 },
											                    	 dataZoom : {
											                    		 show : true
											                    	 },
											                    	 dataView : {
											                    		 show : true,
											                    		 title : '数据视图',
											                    		 readOnly : true,
											                    	 },

											                    	 restore : {
											                    		 show : true,
											                    		 title : '还原',
											                    		 color : 'black'
											                    	 },

											                    	 saveAsImage : {
											                    		 show : true,
											                    		 title : '保存为图片',
											                    		 type : 'jpeg',
											                    		 lang : [ '点击本地保存' ]
											                    	 },

											                     }
										},
										calculable : true,
										dataZoom : {
											show : true,
											realtime : true,
											start : 20,
											end : 80
										},
										xAxis : [ {
											type : 'category',
											boundaryGap : false,
											data : data.Addtime,

											/*
											 * function (){ var
											 * list = []; for
											 * (var i = 1; i <=
											 * data.totalnum ;
											 * i++) { //totalnum
											 * 为一共多少点 //
											 * list.push( i);
											 * list.push(data.Addtime); }
											 * return list; }()
											 */
										} ],

										grid : {
											x : 70,
											x2 : 70,

										},
										yAxis : {
											type : 'value',
											axisLine : {
												show : true,
											},
											axisLabel : {
												show : true,
												margin : 25,
											},
											scale : true,

										},
										series : [
										          /*
										           * {
										           * name:'Avoltage',
										           * type:'line',
										           * data:data.Avoltage
										           * function (){ var
										           * list = []; for
										           * (var i = 1; i <=
										           * 1640; i++) {
										           * list.push(Math.round(Math.random()*
										           * 30)); } return
										           * list; }() }, {
										           * name:'Bvoltage',
										           * type:'line',
										           * data:data.Bvoltage }
										           */
										          ]
								};

								if (data.name == 'PCS') {

									option.legend.data
									.push(
											'Avoltage',
											'Bvoltage',
											'Cvoltage',
											'Acurrent',
											'Bcurrent',
											'Ccurrent',
											'',
											'DCvoltage',
											'DCcurrent',
											'ActivePoewr',
									'ReactivePower');

									option.series
									.push(

											{
												name : 'Avoltage',
												type : 'line',
												data : data.Avoltage,
												symbolSize : 2,
											},
											{
												name : 'Bvoltage',
												type : 'line',
												data : data.Bvoltage,
												symbolSize : 2,
											},

											{
												name : 'Cvoltage', // 系列名称
												type : 'line', // 图表类型，折线图line、散点图scatter、柱状图bar、饼图pie、雷达图radar
												data : data.Cvoltage,
												symbolSize : 2,
											},
											{
												name : 'Acurrent', // 系列名称
												type : 'line', // 图表类型，折线图line、散点图scatter、柱状图bar、饼图pie、雷达图radar
												data : data.Acurrent,
												symbolSize : 2,
											},
											{
												name : 'Bcurrent', // 系列名称
												type : 'line', // 图表类型，折线图line、散点图scatter、柱状图bar、饼图pie、雷达图radar
												data : data.Bcurrent,
												symbolSize : 2,
											},
											{
												name : 'Ccurrent', // 系列名称
												type : 'line', // 图表类型，折线图line、散点图scatter、柱状图bar、饼图pie、雷达图radar
												data : data.Ccurrent,
												symbolSize : 2,
											},
											{
												name : 'DCvoltage', // 系列名称
												type : 'line', // 图表类型，折线图line、散点图scatter、柱状图bar、饼图pie、雷达图radar
												data : data.DCvoltage,
												symbolSize : 2,
											},
											{
												name : 'DCcurrent', // 系列名称
												type : 'line', // 图表类型，折线图line、散点图scatter、柱状图bar、饼图pie、雷达图radar
												data : data.DCcurrent,
												symbolSize : 2,
											},
											{
												name : 'ActivePoewr', // 系列名称
												type : 'line', // 图表类型，折线图line、散点图scatter、柱状图bar、饼图pie、雷达图radar
												data : data.ActivePoewr,
												symbolSize : 2,
											},
											{
												name : 'ReactivePower', // 系列名称
												type : 'line', // 图表类型，折线图line、散点图scatter、柱状图bar、饼图pie、雷达图radar
												data : data.ReactivePower,
												symbolSize : 2,
											}

									);

								} else if (data.name == 'BMS') {
									option.legend.data
									.push(
											'totalVoltage',
											'totalCurrent',
											'SOC',
											'SOH',
											'SMaxVoltage',
									'SMinVoltage');
									option.series
									.push(
											{
												name : 'totalVoltage', // 系列名称
												type : 'line', // 图表类型，折线图line、散点图scatter、柱状图bar、饼图pie、雷达图radar
												data : data.totalVoltage,
												symbolSize : 2,
											},
											{
												name : 'totalCurrent', // 系列名称
												type : 'line', // 图表类型，折线图line、散点图scatter、柱状图bar、饼图pie、雷达图radar
												data : data.totalCurrent,
												symbolSize : 2,
											},
											{
												name : 'SOC', // 系列名称
												type : 'line', // 图表类型，折线图line、散点图scatter、柱状图bar、饼图pie、雷达图radar
												data : data.SOC,
												symbolSize : 2,
											},
											{
												name : 'SOH', // 系列名称
												type : 'line', // 图表类型，折线图line、散点图scatter、柱状图bar、饼图pie、雷达图radar
												data : data.SOH,
												symbolSize : 2,
											},
											{
												name : 'SMaxVoltage', // 系列名称
												type : 'line', // 图表类型，折线图line、散点图scatter、柱状图bar、饼图pie、雷达图radar
												data : data.SMaxVoltage,
												symbolSize : 2,
											},
											{
												name : 'SMinVoltage', // 系列名称
												type : 'line', // 图表类型，折线图line、散点图scatter、柱状图bar、饼图pie、雷达图radar
												data : data.SMinVoltage,
												symbolSize : 2,
											}

									);

								}

								myChart
								.setOption(option);

								/////////////////以上部分是放到ajax success里面 触发里面的//////////////

							}

						});

					});

		});
     	
