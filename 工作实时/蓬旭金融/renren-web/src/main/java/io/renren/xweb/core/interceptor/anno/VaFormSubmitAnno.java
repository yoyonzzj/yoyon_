package io.renren.xweb.core.interceptor.anno;

import java.lang.annotation.ElementType;
import java.lang.annotation.Target;
/**
 * 验证表单是否连续提交
 * @author liuxin
 *
 */
@Target(ElementType.METHOD)
public @interface VaFormSubmitAnno {
	
}
