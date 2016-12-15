$("#Output").click(function() {

	var name = $("#name").val();
	var starttime = $("#starttime").val();
	var endtime = $("#endtime").val();

	if (name == "") {
		$.ligerDialog.warn('请选择装置！');
		return false;
	}

	if (starttime == "") {
		$.ligerDialog.warn('请选择开始时间！');
		return false;
	}

	if (endtime == "") {
		$.ligerDialog.warn('请选择结束时间！');
		return false;
	}

	$.post("DoExcel", {
		name : name,
		time1 : starttime,
		time2 : endtime
	}, function(data) {

		// alert(data);
		if (data == "YES\r\n")
			$.ligerDialog.success('EXCEL 创建成功！输出目录:E盘根目录');
		else if (data == "NO\r\n")
			$.ligerDialog.error('EXCEL创建失败！');
		else
			$.ligerDialog.error('其他错误！');

	});

});