package com.lyq.bean;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;


/**
 * 数据库操作
 * @author  luJunfeng
 *
 */

public class DB {
	/**
	 * 参数 
	 **/  
	private Connection conn = null;   //用于返回数据库连接句柄
	private Statement stmt = null;    //用于返回
	private ResultSet rs = null;      //用于返回查询结果
	private int count = 0;            //用于返回曹组手影响的行数
	
    private int num_per=40;
    private int num_rs=0;
    private int pages_all=0;
    private int page_current=1;
	
    private String classname="com.microsoft.sqlserver.jdbc.SQLServerDriver";
    private String url="jdbc:sqlserver://localhost:1433;DatabaseName=PCS3";	  //数据库 只有一个数据库 
    private String username = "sa";  //用户名
    private String password = "lujunfeng";  //数据库密码
    
    
  	public int getNumper(){
  		return this.num_per;
  	}
  	public int getNumrs(){
  		return this.num_rs;
  	}
  	public int getPagesall(){
  		return this.pages_all;
  	}
  	public int getPagecurrent(){
  		return this.page_current;
  	}	  
    
    
	
/**
 * 连接默认数据库
 * @return  conn  Connection对象
 * @Result 
 **/  
	public Connection getConnection(){
		// 数据库连接
		try {
			// 加载数据库驱动，注册到驱动管理器
			try {
				Class.forName(classname).newInstance();
				// 数据库连接字符串
				// 创建Connection连接
				conn = DriverManager.getConnection(url,username,password);
			} catch (InstantiationException e) {
				e.printStackTrace();
			} catch (IllegalAccessException e) {
				e.printStackTrace();
			} 
		
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		// 返回数据库连接
		return conn;
	}
	
		
/**
 * 连接其他数据库 
 * @param DBname 数据库名称
 * @return Connection对象
 */
	public Connection getConnection(String DBname){
		// 数据库连接
		try {
			// 加载数据库驱动，注册到驱动管理器
			try {
				Class.forName(classname).newInstance();
				// 数据库连接字符串
				String url="jdbc:sqlserver://localhost:1433;DatabaseName="+DBname;  //修改为需要连接的数据名称
				// 创建Connection连接
				conn = DriverManager.getConnection(url,username,password);
			} catch (InstantiationException e) {
				e.printStackTrace();
			} catch (IllegalAccessException e) {
				e.printStackTrace();
			} 
		
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		// 返回数据库连接
		return conn;
	}


	
/**
 *创建一个statement对象
 *@param  无 
 * @return statement对象
 */  
  	public Statement getStmed(){
  	  try{
  		 conn=getConnection();  //连接数据库和创建STATEMENT
  	     stmt=conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);
  	  }catch(Exception e){e.printStackTrace(System.err);}
  	  return stmt;
    }
  	

/**
 *执行带参数的SQL语句 默认连接
 *@param String TBname, String subsql,String subsqlvalue
 * @return  rs 查询结果
 */	
  	public ResultSet exesql(String TBname, String subsql,String subsqlvalue){
   		if(subsql==null)
   			subsql="";
   		if(subsqlvalue==null)
   			subsqlvalue="";
   		String sql="select * from DBO."+TBname+" where "+subsql+" ='"+subsqlvalue+"'";
   		System.out.println("sql:::"+sql);
   		try{
			stmt=getStmed();    //连接数据库和创建STATEMENT
			rs=stmt.executeQuery(sql);    //执行
		}
		catch(SQLException e){e.printStackTrace();}
		return rs;
	}
  	
	
/**
 * 获取所有数据(逆序)
 * @param  String TBname 表名称
 * @return   rs
 */	
  	public ResultSet getdescAllRs(String TBname){
   		String sql="select * from DBO."+TBname+" order by PID DESC";
   		System.out.println("sql:::"+sql);
   		try{
			stmt=getStmed();
			rs=stmt.executeQuery(sql);
		}
		catch(SQLException e){e.printStackTrace();}
		return rs;
	}
	

  	
/**
 * 执行SQL语句  （默认连接数据库PCS3）
 * @param SQL 语句
 * @return 返回结果
 */		
   public ResultSet executeQuery(String sql)
  {
     try
     {
       this.conn = getConnection();
      this.stmt = this.conn.createStatement(1004, 1007);
      System.out.println("sql:::"+sql);
      this.rs = this.stmt.executeQuery(sql);
     } catch (SQLException ex) {
       System.err.println(ex.getMessage());
     }
     return this.rs;
   }
 	
    

/**设置页码     TBname  计算页面数量
 * @param   TBname  page（参数传递过来的当前页数）
 * @return 
 * pages_all 总页面数  
 * page_current 当前页面
 * num_rs 数据总行数
 */	
	
 	public void setPageInfo(String TBname ,int page){
   		String sql="select * from DBO."+TBname;
   		System.out.println("sql:::"+sql);
		try{
			stmt=getStmed();
			rs=stmt.executeQuery(sql);
			rs.last();                         //将记录指针移动到最后一条记录；
  		    this.num_rs=rs.getRow();          //获取当前指针所指记录的行号，即总记录数
		    this.pages_all=(num_rs%num_per==0)?(num_rs/num_per):(num_rs/num_per)+1;    //计算出总页数；
			if(page<=1)
  		    	this.page_current=1;                  //如果由参数传递过来的当前页数值小于1，则将当前页数设置为1；
			else if(page>this.pages_all)
  	        	this.page_current=this.pages_all;  //如果由参数传递过来的当前页数值大于总页数，则将当前页数设置为总页数；
			else 
				this.page_current=page;
		}
		catch(SQLException e){                        //抛出异常
			e.printStackTrace();
			}
	}
 


		
 	
 	
 	
 	
 	
 	
 	/**获取表TBname 某一页面的数据  利用全局变量      page_current 当前页面  来获取
 	*@param  TBname 数据表名称
 	 * @return
 	 */
 	  	public ResultSet getPageRs( String 	TBname ){
 	  		int idnum=(this.page_current-1)*this.num_per;
 	  		String sql="";
 	  		if(this.page_current==1)
 	  			sql="select top "+this.num_per+" * from DBO."+TBname;
 	  		else
 	  			sql="select top "+this.num_per+" * from DBO."+TBname+ " where PID not in(select top "+idnum+" PID from dbo."+TBname+")";
 	  		System.out.println("sql:::"+sql);
 	  		try{
 	             
 	  			stmt=getStmed();
 	  			rs=stmt.executeQuery(sql);
 	  		}
 	  		
 	  		catch(Exception e){e.printStackTrace();}
 	  	    return rs;
 	  	}

 	
 	
 	/**按照查询条件查询满足条件的数据数目
 	 * @param   TBname  page（参数传递过来的当前页数）
 	 * @return 
 	 * pages_all 总页面数  
 	 * page_current 当前页面
 	 * num_rs 数据总行数
 	 */	
 	public void getmatchlines(String sql ,int page){
   		
   		System.out.println("sql:::"+sql);
		try{
			stmt=getStmed();
			rs=stmt.executeQuery(sql);
			rs.last();                         //将记录指针移动到最后一条记录；
  		    this.num_rs=rs.getRow();          //获取当前指针所指记录的行号，即总记录数
		    this.pages_all=(num_rs%num_per==0)?(num_rs/num_per):(num_rs/num_per)+1;    //计算出总页数；
			if(page<=1)
  		    	this.page_current=1;                  //如果由参数传递过来的当前页数值小于1，则将当前页数设置为1；
			else if(page>this.pages_all)
  	        	this.page_current=this.pages_all;  //如果由参数传递过来的当前页数值大于总页数，则将当前页数设置为总页数；
			else 
				this.page_current=page;
		}
		catch(SQLException e){                        //抛出异常
			e.printStackTrace();
			}
	}
 	
 	
 	
/**获取符合条件的数据的下一页
*@param  TBname 数据表名称
 * @return
 */
  	public ResultSet getmatchPageRs(String TBname,String datastart,String dataend ){
  		int idnum=(this.page_current-1)*this.num_per;
  		if(idnum<0)
  			idnum=1;
  		String sql="";
  		if(this.page_current==1)
  		//	sql="select top "+this.num_per+" * from DBO."+TBname;
  		sql="SELECT top "+this.num_per+" * FROM [dbo]."+TBname+ " where AddTime BETWEEN "+"'"+datastart+"'"+"AND"+"'"+dataend+"'";
  		else
  			sql="select top "+this.num_per+" * from DBO."+TBname+ " where AddTime not in(select top "+idnum+" AddTime from dbo."+TBname+")";
  		System.out.println("sql:::"+sql);
  		try{
             
  			stmt=getStmed();
  			rs=stmt.executeQuery(sql);
  		}
  		
  		catch(Exception e){e.printStackTrace();}
  	    return rs;
  	}


  	
/**
 * 查询总记录数
 *@param  TBname 数据表名称
 * @return 总记录数
 */
	public int findCount(String sql){
		
		  stmt=getStmed();
		  System.out.println("sql:::"+sql);
		// 查询总记录数SQL语句
	//	String sql = "select count(*) from DBO."+TBname;
		try {
			
			// 查询并获取ResultSet
			 rs = stmt.executeQuery(sql);
			 
			rs.last();                         //将记录指针移动到最后一条记录；
	  		count=rs.getRow();          //获取当前指针所指记录的行号，即总记录数

			// 关闭ResultSet
			rs.close();
			// 关闭Connection
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		// 返回总记录数
		return count;
	}
	
	  		 	
   
 /**
* 执行SQL更新语句  
* @param SQL 语句
* @return 返回受影响行数 
*/	   
   
   public int executeUpdate(String sql)
   {
     int result = 0;
     if(sql==null) sql="";
     try {
       this.conn = getConnection();
       this.stmt = this.conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);

       result = this.stmt.executeUpdate(sql);
    } catch (SQLException ex) {
    	System.err.println(ex.getMessage());
    	ex.printStackTrace(); result=-1;
       
     }
     return result;
   }


	
/**
 * 关闭数据库
 * @return 关闭数据库连接
 */

    public void closed(){
    	try{
    		if(rs!=null)rs.close();
    	}
    	catch(Exception e){e.printStackTrace();}  
    	
    	try{
    		if(stmt!=null)stmt.close();
    	}
    	catch(Exception e){e.printStackTrace();}  
    	
    	try{
    		if(conn!=null)conn.close();
    	}
    	catch(Exception e){e.printStackTrace();}    	
    }
	
	
	
}




