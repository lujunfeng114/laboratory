<%@ page contentType="text/html;charset=GBK"%>
<%@ page import="java.sql.*"%>
<!----------------------------------
ʵ���� DB��Ϊdb  
 ---------------------------------->
<jsp:useBean id="db" class="com.lyq.bean.DB" scope="page" />

<%
	String strpage = request.getParameter("currentpage"); //��ȡDBlistbms���͹�����ҳ��ҳ��
	String bmsname = request.getParameter("bmsname"); //��ȡDBlistbms���͹����Ĳ�ѯ��ʼʱ��
	String datastart = request.getParameter("datastart"); //��ȡDBlistbms���͹����Ĳ�ѯ��ʼʱ��
	String dataend = request.getParameter("dataend"); //��ȡDBlistbms���͹����Ĳ�ѯ����ʱ��

	System.out.println("------------���β�ѯ�Ŀ�ʼʱ�� " + datastart + "--(���Ϊ�� ��Ĭ����һ�ε�ֵ ��cookiez��ȡ��)");
	System.out.println("------------���β�ѯ����ʱ��  " + dataend + "---(���Ϊ�� ��Ĭ����һ�ε�ֵ ��cookiez��ȡ��)");

	if (bmsname == null || datastart == null || dataend == null) {
		// String bmsname="";
		Cookie cookies[] = request.getCookies();
		if (null != cookies) {
			for (int i = 0; i < cookies.length; i++) {
				Cookie cookie = cookies[i];
				if (cookie.getName().equals("bmsname")) {
					bmsname = cookie.getValue();
				}
				if (cookie.getName().equals("starttime")) {
					datastart = cookie.getValue();
					System.out.println("------------cookieȡ���� ��ʼʱ�� " + datastart);
				}
				if (cookie.getName().equals("endtime")) {
					dataend = cookie.getValue();
					System.out.println("------------cookieȡ����  ����ʱ��" + dataend);

				}
			}
		}
	}

	if (datastart != null && dataend != null) {

		System.out.println("��ѯʱ�䣺" + datastart + "---" + dataend);
		System.out.println("�������ӵ������ݱ��ǣ�" + bmsname);
		if (strpage == null || strpage.equals("")) //���Ϊ�� Ĭ��Ϊ1
			strpage = "1";
		int currentpage = 1;
		try {
			currentpage = Integer.parseInt(strpage);
		} catch (Exception e) {
			currentpage = 1;
		}

		String sql = "SELECT * FROM [dbo]." + bmsname + " where AddTime BETWEEN " + "'" + datastart + "'"
				+ "AND" + "'" + dataend + "'";
		System.out.println("sql:::" + sql);

		db.getmatchlines(sql, currentpage); //��ȡ���������������� ����¼������ҳ��  	  
		ResultSet rs = db.getmatchPageRs(bmsname, datastart, dataend); //����getmatchPageRs����   ��ȡ���������ĵ�ǰҳ������
		session.setAttribute("db", db); //���� db��session
		session.setAttribute("pageresultset", rs); //�����ȡ������

		session.setAttribute("datastart", datastart); //������ʾ��ҳ�� �����û�֪�� �Լ���ѯ������ 
		session.setAttribute("dataend", dataend); //
		session.setAttribute("bmsname", bmsname); //

		response.sendRedirect("DBlistbms.jsp"); //�ض��� index.jspҳ��     	 

	} else {
		//��Զ���������,,���������� ǿ�����ò�ѯʱ�� ���������ʱ�� ��Ĭ��ѡȡcookie����һ�ε�ʱ��    
		//���������Ժ���չ һ���� ȫ����ʾ����ʷ����
		System.out.println("�������ӵ������ݱ��ǣ�" + bmsname);
		if (strpage == null || strpage.equals("")) //���Ϊ�� Ĭ��Ϊ1
			strpage = "1";
		int currentpage = 1;
		try {
			currentpage = Integer.parseInt(strpage);
		} catch (Exception e) {
			currentpage = 1;
		}

		db.setPageInfo(bmsname, currentpage); //����DB���е� setPageInfo���� ��ȡ ����ǰ ����ȡ��ǰָ����ָ��¼���кţ����ܼ�¼�� num_rs ������ҳ��pages_al  		 
		ResultSet rs = db.getPageRs(bmsname); //����getPageRs����   ��ȡ��ǰҳ������
		session.setAttribute("db", db); //���� db��session
		session.setAttribute("pageresultset", rs); //�����ȡ������
		response.sendRedirect("DBlistbms.jsp"); //�ض��� index.jspҳ��     	 

	}

	// String  pcsnum=(String)session.getAttribute("pcsnum");
%>
