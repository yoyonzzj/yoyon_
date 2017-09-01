package io.renren.xweb.core.interceptor;

import org.apache.commons.lang.StringEscapeUtils;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;

import io.renren.xcommon.core.exception.BusinessException;
import io.renren.xcommon.core.exception.ParameterException;
import io.renren.xcommon.core.exception.SystemException;
import io.renren.xcommon.core.utils.JedisUtils;
import io.renren.xcommon.core.utils.StringUtils;
import io.renren.xshiro.entity.SysUserEntity;
import io.renren.xshiro.utils.ShiroUtils;

@Order(3)
@Component
@Aspect
public class VaFormSubmitInterceprot {
	/**
	 * 日志对象
	 */
	protected Logger logger = LoggerFactory.getLogger(getClass());

//	@Pointcut("@annotation(org.springframework.web.bind.annotation.ResponseBody)")
	@Pointcut("@annotation(io.renren.xweb.core.interceptor.anno.VaFormSubmitAnno)")
	public void aspect() {
	}

	@Around("aspect()")
	public Object around(ProceedingJoinPoint pjp) throws Throwable {
		// 访问目标方法的参数：
		String methodName= pjp.getSignature().getName();
		log("当前执行方法--->" +methodName);
//		String from_token=beforePoint(pjp);
		String from_token="";
		if(null == from_token){
			throw new ParameterException("缺少必要参数！", new Throwable());
		}
		String key=from_token+"_"+methodName;
		Long result=JedisUtils.setnx(key, key);
		if(result==null){
			throw new SystemException("系统繁忙！", new Throwable());
		}else{
			if(result==0){
				throw new BusinessException("不允许连续提交！", new Throwable());
			}
		}
		Object rvt =null;
		try {
			 rvt = pjp.proceed();
		} catch (Exception e) {
			throw e;
		}finally{
			JedisUtils.del(key);
		}
		return rvt;
	}

	private void log(String msg) {
		if (logger.isDebugEnabled()) {
			logger.debug(msg);
		}
	}
	/**
	 * 切点之前执行
	 * @param pjp
	 * @return
	 * @throws Exception
	 * @throws Throwable
	 */
	private String beforePoint(ProceedingJoinPoint pjp) throws Exception, Throwable {
//		Object[] args = pjp.getArgs();
//		String juid = null;
//		if (args != null && args.length > 0) {
//			Object args0 = args[0];
//			if (args0 != null) {
//				if (args0.getClass() == String.class) {
//					String record = StringEscapeUtils.unescapeHtml((String) args[0]);
//					JSONObject jo = JSON.parseObject(record);
//					juid = jo.getString("form_token");
//				}
//			}
//		}
//		return juid;
		SysUserEntity userEntity = ShiroUtils.getUserEntity();
		Long l = userEntity.getUserId();
		if (null != l) {
			String result = String.valueOf(l);
			return result;
		}else {
			return null;
		}
	}
}
