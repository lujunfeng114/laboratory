function checkpassword() {

	var pw = $("#pw").val();
	var pw2 = $("#pw2").val();

	if (pw == "") {
		alert("新密码不能为空");
		return false;
	}

	if (pw2 == "") {
		alert("确认新密码不能为空");
		return false;
	}

	if (pw != pw2) {
		alert("两次输入的密码 不一致，请重新输入");
		return false;
	}

}

function oldpassword() {
	var account = $("#account").val();
	var oldpw = $("#oldpw").val();

	if (account == "") {
		alert("账号不能为空");
		return false;
	}

	if (oldpw == "") {
		alert("旧密码不能为空");
		return false;
	}

}



