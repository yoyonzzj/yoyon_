package io.renren.xweb.controller.behind;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.renren.xcommon.core.enums.BusinessCode;
import io.renren.xcommon.core.enums.DelCode;
import io.renren.xcommon.core.exception.BusinessException;
import io.renren.xcommon.core.exception.LockException;
import io.renren.xcommon.entity.ZyUserBlackEntity;
import io.renren.xcommon.service.ZyUserBlackService;
import io.renren.xcommon.utils.PageUtils;
import io.renren.xcommon.utils.Query;
import io.renren.xcommon.utils.R;

/** 
* @author 作者： zhuxuan
* @version 创建时间：2017年8月30日
*/
@RestController
@RequestMapping("/zyuserblack")
public class ZyUserBlackController {
	
	@Autowired
	private ZyUserBlackService zyUserBlackService;
	
	static final Logger logger = LoggerFactory.getLogger(ZyUserBlackController.class);
	
	
	/**
	 * 获取黑名单列表
	 */
	@RequestMapping("/black/list/1.2")
	public R blackList(@RequestParam Map<String, Object> params){
		//查询列表数据
        Query query = new Query(params);

		List<Map<String, Object>> list = zyUserBlackService.queryListPage(query);
		int total = zyUserBlackService.queryTotal(query);
		
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		
		return R.ok().put("page", pageUtil);
	}
	
	
	
	
	/**
	 * 黑名单列表点击更多返回规则信息接口
	 */
	@RequestMapping("/reason/list/1.2")
	public R reasonList(@RequestParam String userId){
		//查询列表数据

		List<Map<String, Object>> list = zyUserBlackService.queryReasonList(userId);
		
		return R.ok().put("list", list);
	}
	
	
	
	
	/**
	 * 移除单个黑名单接口
	 */
	@RequestMapping("/remove/list/1.2")
	public R removeBlack(@RequestParam String id){
		
		if(id==null || "".equals(id.trim())){
			return R.error("您还没有勾选呢!");
		}
	
		R result=null;
		
		boolean flag=true;
    	int i=0;
    	
    	while(flag){
    		flag = false;
    		try {
    			i++;
    			result = zyUserBlackService.removeBlack(id);
			} catch (LockException e) {
				flag =  true;
				if(i>3){
					logger.error("乐观锁死循环啦, zyUserBlackService.removeBlack");
					return R.error("乐观锁死循环跳出! zyUserBlackService.removeBlack");
				}
			}
    	}
    	
		return result;
	}
	
	
	
	

}
