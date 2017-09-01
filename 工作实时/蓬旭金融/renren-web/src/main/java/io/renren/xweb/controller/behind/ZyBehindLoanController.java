package io.renren.xweb.controller.behind;

import java.util.List;
import java.util.Map;

import org.drools.compiler.lang.dsl.DSLMapParser.entry_return;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.renren.xcommon.core.enums.BusinessCode;
import io.renren.xcommon.core.enums.DelCode;
import io.renren.xcommon.core.exception.BusinessException;
import io.renren.xcommon.core.exception.LockException;
import io.renren.xcommon.entity.ZyAuthMessageEntity;
import io.renren.xcommon.entity.ZyUserBlackEntity;
import io.renren.xcommon.service.ZyAuthMessageService;
import io.renren.xcommon.service.ZyUserBlackService;
import io.renren.xcommon.utils.PageUtils;
import io.renren.xcommon.utils.Query;
import io.renren.xcommon.utils.R;

/** 
* @author 作者： zhuxuan
* @version 创建时间：2017年9月1日
*/
@RestController
@RequestMapping("/behindLoan")
public class ZyBehindLoanController {
	
	@Autowired
	private ZyAuthMessageService zyAuthMessageService;
	
	static final Logger logger = LoggerFactory.getLogger(ZyBehindLoanController.class);
	
	
	/**
	 * 获取报告url
	 */
	@RequestMapping("/getReportUrl/1.2/{userId}/{type}")
	public R getReportUrl(@PathVariable String userId,@PathVariable int type){
		
		ZyAuthMessageEntity messageEntity = new ZyAuthMessageEntity();
		messageEntity.setUserId(userId);
		messageEntity.setType(type);
		messageEntity.setDelFlag(DelCode.DEL_FLAG_NORMAL);
		
		messageEntity = zyAuthMessageService.queryObjectByEntity(messageEntity);
		
		if(messageEntity == null){
			return R.error("没有获取到报告!");
		}
		
		return R.ok().put("page", messageEntity.getUrl());
	}

}
