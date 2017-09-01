package io.renren.xweb.controller.behind;


import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.omg.CORBA.OBJ_ADAPTER;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.druid.stat.TableStat.Mode;

import io.renren.xcommon.core.exception.LockException;
import io.renren.xcommon.entity.ZyBorrowVerifyEntity;
import io.renren.xcommon.service.ZyBorrowVerifyService;
import io.renren.xcommon.service.ZyUserBorrowService;
import io.renren.xcommon.service.ZyUserService;
import io.renren.xcommon.service.impl.LianlianPayServiceImpl;
import io.renren.xcommon.utils.PageUtils;
import io.renren.xcommon.utils.Query;
import io.renren.xcommon.utils.R;
import io.renren.xshiro.entity.SysUserEntity;
import io.renren.xshiro.utils.ShiroUtils;
import io.renren.xweb.core.interceptor.anno.VaFormSubmitAnno;



/**
 * 借款审核表
 * 
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2017-07-31 13:56:37
 */
@RestController
@RequestMapping("zyBorrowVerify")
public class ZyBorrowVerifyController {
	@Autowired
	private ZyBorrowVerifyService zyBorrowVerifyService;
	@Autowired
	private ZyUserBorrowService zyUserBorrowService;
	@Autowired
	private ZyUserService zyUserService;

	static Logger logger = LoggerFactory.getLogger(ZyBorrowVerifyController.class);
	
	/**
	 * 列表
	 */
	@RequestMapping("/list")
	@RequiresPermissions("zyborrowverify:list")
	public R list(@RequestParam Map<String, Object> params){
		//查询列表数据
        Query query = new Query(params);

		List<ZyBorrowVerifyEntity> zyBorrowVerifyList = zyBorrowVerifyService.queryList(query);
		int total = zyBorrowVerifyService.queryTotal(query);
		
		PageUtils pageUtil = new PageUtils(zyBorrowVerifyList, total, query.getLimit(), query.getPage());
		
		return R.ok().put("page", pageUtil);
	}
	
	
	/**
	 * 信息
	 */
	@RequestMapping("/info/{id}")
	@RequiresPermissions("zyborrowverify:info")
	public R info(@PathVariable("id") String id){
		ZyBorrowVerifyEntity zyBorrowVerify = zyBorrowVerifyService.queryObject(id);
		
		return R.ok().put("zyBorrowVerify", zyBorrowVerify);
	}
	
	/**
	 * 保存
	 */
	@RequestMapping("/save")
	@RequiresPermissions("zyborrowverify:save")
	public R save(@RequestBody ZyBorrowVerifyEntity zyBorrowVerify){
		zyBorrowVerifyService.save(zyBorrowVerify);
		
		return R.ok();
	}
	
	/**
	 * 修改
	 */
	@RequestMapping("/update")
	@RequiresPermissions("zyborrowverify:update")
	public R update(@RequestBody ZyBorrowVerifyEntity zyBorrowVerify){
		zyBorrowVerifyService.update(zyBorrowVerify);
		
		return R.ok();
	}
	
	/**
	 * 删除
	 */
	@RequestMapping("/delete")
	@RequiresPermissions("zyborrowverify:delete")
	public R delete(@RequestBody String[] ids){
		zyBorrowVerifyService.deleteBatch(ids);
		
		return R.ok();
	}
	
	
	/**
	 * 借款审核初审列表
	 * @param params
	 * @return
	 */
	@RequestMapping("/firstList")
	public R firstList(@RequestParam Map<String, Object> params) {
		Query query = new Query(params);
		List<Map<String, Object>> list = zyBorrowVerifyService.firstList(query);
		int total = zyBorrowVerifyService.queryTotal1(query);
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		return R.ok().put("page", pageUtil);
	}
	
	
	@RequestMapping("/firstListNoCondition")
	public R firstListNoCondition(@RequestParam Map<String, Object> params) {
		Query query = new Query(params);
		List<Map<String, Object>> list = zyBorrowVerifyService.firstListNoCondition(query);
		int total = zyBorrowVerifyService.queryTotal5(query);
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		return R.ok().put("page", pageUtil);
	}
	/**
	 * V1.2 新版初审列表条件查询
	 * @param params
	 * @return
	 */
	@RequestMapping("/trialList")
	public R firstTrialList(@RequestParam Map<String, Object> params){
		Query query = new Query(params);
		List<Map<String,Object>> list=zyBorrowVerifyService.firstTrialList(query);
		int total = zyBorrowVerifyService.queryTotal5(query);
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		return R.ok().put("page", pageUtil);
	}
	
	/**
	 * 获取用户额度信息接口
	 * @param params
	 * @return
	 */
	@RequestMapping("/getUserLimit")
	public R getUserLimit(@RequestParam Map<String, Object> params) {
		String userId = params.get("userId").toString();
		Map<String, Object> result = zyBorrowVerifyService.getUserLimit(userId);
		return R.ok().put("result", result);
	}
	
	
	/**
	 * 初审审核接口
	 * @param params
	 * @return
	 */
	@RequestMapping("/firstVerify")
	@VaFormSubmitAnno
	public R firstVerify(@RequestParam Map<String, Object> params) {
		String borrowVerifyId = params.get("borrowVerifyId").toString();
		String borrowVerifyStatus2 = params.get("borrowVerifyStatus").toString();
		Integer borrowVerifyStatus = Integer.valueOf(borrowVerifyStatus2);
		
		//操作之前先查询数据然后查看是否已经操作
		ZyBorrowVerifyEntity queryObject = zyBorrowVerifyService.queryObject(borrowVerifyId);
		if (queryObject.getBorrowStatus() == 1 || queryObject.getBorrowStatus() == 2) {
			return R.error("该信息已被操作，请刷新页面！");
		}
		
		//封装数据
		ZyBorrowVerifyEntity entity = new ZyBorrowVerifyEntity();
		entity.setId(borrowVerifyId);
		entity.setBorrowStatus(borrowVerifyStatus);
		SysUserEntity userEntity = ShiroUtils.getUserEntity();
		Long l = userEntity.getUserId();
		entity.setVerifyUser(String.valueOf(l));
		if (borrowVerifyStatus == 1) {
			entity.setFirstBorrowStatus(1);
		}else {
			entity.setFirstBorrowStatus(0);
		}
		entity.setBorrowStatus(borrowVerifyStatus);
		entity.setVerifyDate(new Date());
		int update = zyBorrowVerifyService.update(entity);
		if (update == 1) {
			return R.ok();
		}else {
			return R.error("系统错误！");
		}
	}
	
	
	/**
	 * 获取审核信息
	 * @param params
	 * @return
	 */
	@RequestMapping("/getVerifyInfo")
	public R getVerifyInfo(@RequestParam Map<String, Object> params) {
		String borrowVerifyId = params.get("borrowVerifyId").toString();
		Map<String, Object> result = zyBorrowVerifyService.getVerifyInfo(borrowVerifyId);
		return R.ok().put("result", result);
	}
	
	
	/**
	 * 获取复审列表
	 * @param params
	 * @return
	 */
	@RequestMapping("/SecondList")
	public R SecondList(@RequestParam Map<String, Object> params) {
		Query query = new Query(params);
		List<Map<String, Object>> list = zyBorrowVerifyService.SecondList(query);
		int total = zyBorrowVerifyService.queryTotal2(query);
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		return R.ok().put("page", pageUtil);
	}
	
	
	
	@RequestMapping("/SecondListNoCondition")
	public R SecondListNoCondition(@RequestParam Map<String, Object> params) {
		Query query = new Query(params);
		List<Map<String, Object>> list = zyBorrowVerifyService.SecondListNoCondition(query);
		int total = zyBorrowVerifyService.queryTotal6(query);
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		return R.ok().put("page", pageUtil);
	}
	
	
	/**
	 * 复审审核接口
	 * @param params
	 * @return
	 */
	@RequestMapping("/secondVerify")
	@VaFormSubmitAnno
	public R secondVerify(@RequestParam Map<String, Object> params) {
		String borrowVerifyId = params.get("borrowVerifyId").toString();
		String borrowVerifyStatus2 = params.get("borrowVerifyStatus").toString();
		Integer borrowVerifyStatus = Integer.valueOf(borrowVerifyStatus2);
		
		//操作之前先查询数据然后查看是否已经操作
		ZyBorrowVerifyEntity queryObject = zyBorrowVerifyService.queryObject(borrowVerifyId);
		if (queryObject.getBorrowStatus() == 3 || queryObject.getBorrowStatus() == 4) {
			return R.error("该信息已被操作，请刷新页面！");
		}
		
		//封装数据
		ZyBorrowVerifyEntity entity = new ZyBorrowVerifyEntity();
		entity.setId(borrowVerifyId);
		entity.setBorrowStatus(borrowVerifyStatus);
		SysUserEntity userEntity = ShiroUtils.getUserEntity();
		Long l = userEntity.getUserId();
		entity.setVerifyUser(String.valueOf(l));
		if (borrowVerifyStatus == 3) {
			entity.setSecondBorrowStatus(1);
		}else {
			entity.setSecondBorrowStatus(0);
		}
		entity.setBorrowStatus(borrowVerifyStatus);
		entity.setVerifyDate(new Date());
		int update = zyBorrowVerifyService.update(entity);
		if (update == 1) {
			return R.ok();
		}else {
			return R.error("系统错误！");
		}
	}
	
	
	/**
	 * 获取终审列表
	 * @param params
	 * @return
	 */
	@RequestMapping("/finalList")
	public R finalList(@RequestParam Map<String, Object> params) {
		Query query = new Query(params);
		List<Map<String, Object>> list = zyBorrowVerifyService.finalList(query);
		int total = zyBorrowVerifyService.queryTotal3(query);
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		return R.ok().put("page", pageUtil);
	}
	
	
	@RequestMapping("/finalListNoCondition")
	public R finalListNoCondition(@RequestParam Map<String, Object> params) {
		Query query = new Query(params);
		List<Map<String, Object>> list = zyBorrowVerifyService.finalListNoCondition(query);
		int total = zyBorrowVerifyService.queryTotal7(query);
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		return R.ok().put("page", pageUtil);
	}
	
	
	/**
	 * 终审审核接口
	 * @param params
	 * @return
	 */
	@RequestMapping("/finalVerify")
//	@VaFormSubmitAnno
	public R finalVerify(@RequestParam Map<String, Object> params) {
		try {
			String borrowVerifyId = params.get("borrowVerifyId").toString();
			String borrowVerifyStatus2 = params.get("borrowVerifyStatus").toString();
			Integer borrowVerifyStatus = Integer.valueOf(borrowVerifyStatus2);
			
			//操作之前先查询数据然后查看是否已经操作
			ZyBorrowVerifyEntity queryObject = zyBorrowVerifyService.queryObject(borrowVerifyId);
			if (queryObject.getBorrowStatus() == 5 || queryObject.getBorrowStatus() == 6) {
				return R.error("该信息已被操作，请刷新页面！");
			}
			
			//封装数据
			ZyBorrowVerifyEntity entity = new ZyBorrowVerifyEntity();
			entity.setId(borrowVerifyId);
			entity.setBorrowStatus(borrowVerifyStatus);
			SysUserEntity userEntity = ShiroUtils.getUserEntity();
			Long l = userEntity.getUserId();
			entity.setVerifyUser(String.valueOf(l));
			ZyBorrowVerifyEntity zyBorrowVerifyEntity = zyBorrowVerifyService.queryObject(borrowVerifyId);
			if (borrowVerifyStatus == 5) {
				//审核失败
				entity.setFinalBorrowStatus(1);
				//失败情况下的业务处理
				int i = 0;
				boolean flag = true;
				while(flag){
					if (i>3) {
						logger.info("死循环！在--ZyBorrowVerifyController--方法的329行！！！");
						return R.error("系统错误！");
					}
					flag=false;
					try {
						 zyBorrowVerifyService.fail(zyBorrowVerifyEntity);
					}catch (LockException e) {
						flag = true;
						++i;
					}
				}
			}else {
				//审核成功
				int i = 0;
				entity.setFinalBorrowStatus(0);
				//成功情况下的业务处理
				boolean flag = true;
				while(flag){
					++i;
					flag=false;
					try {
						zyBorrowVerifyService.success(zyBorrowVerifyEntity);
					}catch (LockException e) {
						if (i>3) {
							logger.info("死循环！在--ZyBorrowVerifyController--方法的353行！！！"+zyBorrowVerifyEntity.getId());
							return R.error("修改信息乐观锁错误！");
						}
						flag = true;
					}
				}
			}
			entity.setVerifyDate(new Date());
			int update = zyBorrowVerifyService.update(entity);
			if (update == 1) {
				return R.ok();
			}else {
				return R.error("更新数据异常");
			}
		} catch (Exception e) {
			return R.error(e.getMessage());
		}
		
	}
	
	/**
	 * 已审核列表
	 * @param params
	 * @return
	 */
	@RequestMapping("/auditedList")
	public R auditedList(@RequestParam Map<String, Object> params) {
		Query query = new Query(params);
		List<Map<String, Object>> list = zyBorrowVerifyService.auditedList(query);
		int total = zyBorrowVerifyService.queryTotal4(query);
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		return R.ok().put("page", pageUtil);
	}
	
	
	@RequestMapping("/auditedListNoCondition")
	public R auditedListNoCondition(@RequestParam Map<String, Object> params) {
		Query query = new Query(params);
		List<Map<String, Object>> list = zyBorrowVerifyService.auditedListNoCondition(query);
		int total = zyBorrowVerifyService.queryTotal8(query);
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		return R.ok().put("page", pageUtil);
	}
	
	@RequestMapping("queryBorrowList")
	public R queryBorrowList(@RequestParam Map<String, Object> params){
		String userId =params.get("userId").toString();
		List<Map<String, Object>>result =zyUserBorrowService.queryUseBorrow(userId);
		return R.ok().put("result", result);
	}
	
	/**
	 * 
	 * @return
	 */
	@RequestMapping("queryUserLimit")
	public R queryUserLimit(@RequestParam Map<String, Object> params){
		String userId =params.get("userId").toString();
		Map<String, Object> result=zyUserService.queryUserLimit(userId);
		return R.ok().put("result", result);
		}
}
