package com.lyq.filter;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

/**
 * Servlet Filter implementation class ServletFilter
 */
public class ServletFilter implements Filter {

    
	String encoding = null;
	/**
     * Default constructor. 
     */
    public ServletFilter() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see Filter#destroy()
	 */
	public void destroy() {
		// TODO Auto-generated method stub
		encoding = null;
	}

	/**
	 * @see Filter#doFilter(ServletRequest, ServletResponse, FilterChain)
	 */
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
	
		// 判断字符编码是否为空
		if(encoding != null){
			// 设置request的编码格式
			request.setCharacterEncoding(encoding);
			// 设置response字符编码
     		response.setContentType("text/html; charset="+encoding);
		}
		// 传递给下一过滤器
		chain.doFilter(request, response);

	}

	/**
	 * @see Filter#init(FilterConfig)
	 */
	public void init(FilterConfig fConfig) throws ServletException {
		// TODO Auto-generated method stub
		// 获取初始化参数
		encoding = fConfig.getInitParameter("encoding");
	}

}
