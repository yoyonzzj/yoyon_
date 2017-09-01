/**
 * @(#)ParameterException.java 2011-12-20 Copyright 2011 it.kedacom.com, Inc.
 *                             All rights reserved.
 */

package io.renren.xweb.controller;

import io.renren.xcommon.core.enums.MsgCode;

/**
 * 自定义异常处理,
 * 缺少必要参数异常
 * @author liuxin
 * @date 2014-12-10
 */

public class WebBusinessException extends RuntimeException {
	private MsgCode msgCode;
	private Object result;
	/** serialVersionUID */
	private static final long serialVersionUID = 6417641452178955756L;
	public WebBusinessException(String message,Throwable cause) {
		super(message, cause);
	}
	public WebBusinessException(String message,Object result,Throwable cause) {
		super(message, cause);
		this.setResult(result);
	}
	public WebBusinessException(MsgCode msgCode, String message,Throwable cause) {
		super(message, cause);
		this.setMsgCode(msgCode);
	}
	public WebBusinessException(MsgCode msgCode, String message,Object result,Throwable cause) {
		super(message, cause);
		this.setMsgCode(msgCode);
		this.setResult(result);
	}
	public MsgCode getMsgCode() {
		return msgCode;
	}
	public void setMsgCode(MsgCode msgCode) {
		this.msgCode = msgCode;
	}
	public Object getResult() {
		return result;
	}
	public void setResult(Object result) {
		this.result = result;
	}
	
	
}
