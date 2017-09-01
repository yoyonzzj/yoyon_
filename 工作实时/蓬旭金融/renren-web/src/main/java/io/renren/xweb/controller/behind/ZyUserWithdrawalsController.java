package io.renren.xweb.controller.behind;


import java.util.Date;
import java.util.List;
import java.util.Map;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;

import io.renren.xcommon.core.enums.SendMsg;
import io.renren.xcommon.core.exception.LockException;
import io.renren.xcommon.dao.ZyUserNewsDao;
import io.renren.xcommon.entity.LianlianPayOrderEntity;
import io.renren.xcommon.entity.ZyUserBankcardEntity;
import io.renren.xcommon.entity.ZyUserEntity;
import io.renren.xcommon.entity.ZyUserNewsEntity;
import io.renren.xcommon.entity.ZyUserVerifyEntity;
import io.renren.xcommon.entity.ZyUserWithdrawalsEntity;
import io.renren.xcommon.entity.LLBean.QueryPaymentRequestBean;
import io.renren.xcommon.entity.LLBean.QueryPaymentResponseBean;
import io.renren.xcommon.service.LianlianPayService;
import io.renren.xcommon.service.ZyUserBankcardService;
import io.renren.xcommon.service.ZyUserService;
import io.renren.xcommon.service.ZyUserWithdrawalsService;
import io.renren.xcommon.sms.SmsUtil;
import io.renren.xcommon.utils.IdGen;
import io.renren.xcommon.utils.PageUtils;
import io.renren.xcommon.utils.Query;
import io.renren.xcommon.utils.R;
import io.renren.xcommon.utils.com.LLUtils.HttpUtil;
import io.renren.xcommon.utils.com.LLUtils.LLUtils;
import io.renren.xcommon.utils.com.LLUtils.SignUtil;
import io.renren.xcommon.utils.com.yintong.client.base.PartnerConfig;
import io.renren.xshiro.entity.SysUserEntity;
import io.renren.xshiro.utils.ShiroUtils;
import io.renren.xweb.core.interceptor.anno.VaFormSubmitAnno;



/**
 * 用户提现表
 * 
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2017-07-01 14:24:18
 */
@RestController
@RequestMapping("zyuserwithdrawals")
public class ZyUserWithdrawalsController {
	@Autowired
	private ZyUserWithdrawalsService zyUserWithdrawalsService;
	@Autowired
	private ZyUserService zyUserService;
	@Autowired
	private ZyUserBankcardService zyUserBankcardService;
	@Autowired
	private ZyUserNewsDao zyUserNewsDao;
	
	static Logger logger = LoggerFactory.getLogger(ZyUserWithdrawalsController.class);
	
	/**
	 * 列表
	 */
	@RequestMapping("/list")
	@RequiresPermissions("zyuserwithdrawals:list")
	public R list(@RequestParam Map<String, Object> params){
		//查询列表数据
        Query query = new Query(params);

		List<ZyUserWithdrawalsEntity> zyUserWithdrawalsList = zyUserWithdrawalsService.queryList(query);
		int total = zyUserWithdrawalsService.queryTotal(query);
		
		PageUtils pageUtil = new PageUtils(zyUserWithdrawalsList, total, query.getLimit(), query.getPage());
		
		return R.ok().put("page", pageUtil);
	}
	
	
	/**
	 * 信息
	 */
	@RequestMapping("/info/{id}")
	@RequiresPermissions("zyuserwithdrawals:info")
	public R info(@PathVariable("id") String id){
		ZyUserWithdrawalsEntity zyUserWithdrawals = zyUserWithdrawalsService.queryObject(id);
		
		return R.ok().put("zyUserWithdrawals", zyUserWithdrawals);
	}
	
	/**
	 * 保存
	 */
	@RequestMapping("/save")
	@RequiresPermissions("zyuserwithdrawals:save")
	public R save(@RequestBody ZyUserWithdrawalsEntity zyUserWithdrawals){
		zyUserWithdrawalsService.save(zyUserWithdrawals);
		
		return R.ok();
	}
	
	/**
	 * 修改
	 */
	@RequestMapping("/update")
	@RequiresPermissions("zyuserwithdrawals:update")
	public R update(@RequestBody ZyUserWithdrawalsEntity zyUserWithdrawals){
		zyUserWithdrawalsService.update(zyUserWithdrawals);
		
		return R.ok();
	}
	
	/**
	 * 删除
	 */
	@RequestMapping("/delete")
	@RequiresPermissions("zyuserwithdrawals:delete")
	public R delete(@RequestBody String[] ids){
		zyUserWithdrawalsService.deleteBatch(ids);
		
		return R.ok();
	}
	
	
	
	
	
	@RequestMapping("/firstExamine")
	public R firstExamine(@RequestParam Map<String, Object> params) {
		Query query = new Query(params);
		List<Map<String, Object>> list = zyUserWithdrawalsService.firstExamine(query);
		int total = zyUserWithdrawalsService.queryTotal(query);
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		return R.ok().put("page", pageUtil);
	}
	
	
	@RequestMapping("/ToExamine")
	public R ToExamine(@RequestParam Map<String, Object> params) {
		String withdrawalsId = params.get("withdrawalsId").toString();
		Map<String, Object> result = zyUserWithdrawalsService.ToExamine(withdrawalsId);
		return R.ok().put("result", result);
	}
	
	
	
	@RequestMapping("/firstVerify")
	@VaFormSubmitAnno
	public R firstVerify(@RequestParam Map<String, Object> params) {
		String withdrawalsId = params.get("withdrawalsId").toString();
		String withdrawalsStatus2 = params.get("withdrawalsStatus").toString();
		Integer withdrawalsStatus = Integer.valueOf(withdrawalsStatus2);
		
		//操作之前先查询数据然后查看是否已经操作
		ZyUserWithdrawalsEntity queryObject = zyUserWithdrawalsService.queryObject(withdrawalsId);
		if (queryObject.getWithdrawalsStatus() == 1 || queryObject.getWithdrawalsStatus() == 2) {
			return R.error("该信息已被操作，请刷新页面！");
		}
		ZyUserWithdrawalsEntity entity = new ZyUserWithdrawalsEntity();
		entity.setId(withdrawalsId);
		entity.setWithdrawalsStatus(withdrawalsStatus);
		SysUserEntity userEntity = ShiroUtils.getUserEntity();
		Long l = userEntity.getUserId();
		entity.setVerifyUser(String.valueOf(l));
		if (withdrawalsStatus == 1) {
			entity.setFirstWithdrawalsStatus(1);
		}else {
			entity.setFirstWithdrawalsStatus(0);
		}
		entity.setWithdrawalsStatus(withdrawalsStatus);
		boolean flag = zyUserWithdrawalsService.firstVerify(entity);
		if (flag) {
			return R.ok();
		}else {
			return R.error("系统错误！");
		}
	}
	
	
	@RequestMapping("/secondExamineList")
	public R secondExamineList(@RequestParam Map<String, Object> params) {
		Query query = new Query(params);
		List<Map<String, Object>> list = zyUserWithdrawalsService.secondExamineList(query);
		int total = zyUserWithdrawalsService.queryTotal2(query);
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		return R.ok().put("page", pageUtil);
	}
	
	
	@RequestMapping("/secondExamine")
	@VaFormSubmitAnno
	public R secondExamine(@RequestParam Map<String, Object> params) {
		String withdrawalsId = params.get("withdrawalsId").toString();
		String withdrawalsStatus2 = params.get("withdrawalsStatus").toString();
		Integer withdrawalsStatus = Integer.valueOf(withdrawalsStatus2);
		
		//操作之前先查询查看是否数据被操作
		ZyUserWithdrawalsEntity queryObject = zyUserWithdrawalsService.queryObject(withdrawalsId);
		if (queryObject.getWithdrawalsStatus() == 3 || queryObject.getWithdrawalsStatus() == 4) {
			return R.error("该信息已被操作，请刷新页面！");
		}
		ZyUserWithdrawalsEntity entity = new ZyUserWithdrawalsEntity();
		entity.setId(withdrawalsId);
		entity.setWithdrawalsStatus(withdrawalsStatus);
		SysUserEntity userEntity = ShiroUtils.getUserEntity();
		Long l = userEntity.getUserId();
		entity.setVerifyUser(String.valueOf(l));
		if (withdrawalsStatus == 4) {
			entity.setSecondWithdrawalsStatus(0);
		}else {
			entity.setSecondWithdrawalsStatus(1);
		}
		boolean flag = zyUserWithdrawalsService.firstVerify(entity);
		if (flag) {
			return R.ok();
		}else {
			return R.error("系统错误！");
		}
	}
	
	
	@RequestMapping("/finalExamineList")
	public R finalExamineList(@RequestParam Map<String, Object> params) {
		Query query = new Query(params);
		List<Map<String, Object>> list = zyUserWithdrawalsService.finalExamineList(query);
		int total = zyUserWithdrawalsService.queryTotal3(query);
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		return R.ok().put("page", pageUtil);
	}
	
	
	/**
	 * 提现终审
	 * @param params
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/finalExamine")
	@VaFormSubmitAnno
	public R finalExamine(@RequestParam Map<String, Object> params) throws Exception {
		String withdrawalsId = params.get("withdrawalsId").toString();
		String withdrawalsStatus2 = params.get("withdrawalsStatus").toString();
		Integer withdrawalsStatus = Integer.valueOf(withdrawalsStatus2);
		ZyUserWithdrawalsEntity zyUserWithdrawalsEntity = zyUserWithdrawalsService.queryObject(withdrawalsId);
		if (zyUserWithdrawalsEntity.getWithdrawalsStatus() == 5 || zyUserWithdrawalsEntity.getWithdrawalsStatus() == 6) {
			return R.error("该信息已被操作，请刷新页面！");
		}
		ZyUserEntity zyUserEntity = zyUserService.queryObject(zyUserWithdrawalsEntity.getUserId());
		ZyUserBankcardEntity zyUserBankcardEntity = zyUserBankcardService.queryObjectByUser(zyUserWithdrawalsEntity.getUserId());
		boolean flag = false;
		
		ZyUserWithdrawalsEntity entity = new ZyUserWithdrawalsEntity();
		entity.setId(withdrawalsId);
		entity.setWithdrawalsStatus(withdrawalsStatus);
		SysUserEntity userEntity = ShiroUtils.getUserEntity();
		Long l = userEntity.getUserId();
		entity.setVerifyUser(String.valueOf(l));
		if (withdrawalsStatus == 5) {
			//提现申请不通过的情况下
//			entity.setWithdrawalsStatus(withdrawalsStatus);
			entity.setFinalWithdrawalsStatus(1);
			flag = true;
			while(flag){
				flag=false;
				try {
					zyUserWithdrawalsService.addRemainder(withdrawalsId);
				}catch (LockException e) {
					flag = true;
				}
			}
//			FailureToWithdrawCash(zyUserEntity);
			entity.setUpdateDate(new Date());
			flag = zyUserWithdrawalsService.firstVerify(entity);
			if (flag) {
				return R.ok();
			}else {
				return R.error("系统错误！");
			}
		}else {
			entity.setFinalWithdrawalsStatus(0);
			boolean boo = withdrawals(zyUserEntity,zyUserBankcardEntity,zyUserWithdrawalsEntity);
			if (boo) {
				entity.setUpdateDate(new Date());
				flag = zyUserWithdrawalsService.firstVerify(entity);
				if (flag) {
					return R.ok();
				}else {
					return R.error("系统错误！");
				}
			}else {
				return R.error("系统错误！");
			}
		}
		
		
//		if (flag) {
//			ZyUserWithdrawalsEntity zyUserWithdrawalsEntity = zyUserWithdrawalsService.queryObject(withdrawalsId);
//			ZyUserEntity zyUserEntity = zyUserService.queryObject(zyUserWithdrawalsEntity.getUserId());
//			ZyUserBankcardEntity zyUserBankcardEntity = zyUserBankcardService.queryObjectByUser(zyUserWithdrawalsEntity.getUserId());
//			boolean flag2 = withdrawals(zyUserEntity,zyUserBankcardEntity,zyUserWithdrawalsEntity);
//			if (flag2) {
//				return R.ok();
//			}else {
//				return R.error("提交提现错误！");
//			}
//		}else {
//			return R.error("系统错误！");
//		}
	}


//	private void FailureToWithdrawCash(ZyUserEntity zyUserEntity) {
//		String msg=String.format(SendMsg._0018.msg);
//		ZyUserNewsEntity zyUserNews=new ZyUserNewsEntity();
//		zyUserNews.setUserId(zyUserEntity.getId());
//		zyUserNews.setNewsTitle(SendMsg._0018.key);
//		zyUserNews.setNewsType(Integer.parseInt(SendMsg._0018.code));
//		zyUserNews.setNewsDetail(msg);
//		zyUserNews.setStatus(1);
//		zyUserNews.preInsertNoUser();
//		zyUserNews.setDelFlag(ZyUserNewsEntity.DEL_FLAG_NORMAL);
//		zyUserNewsDao.save(zyUserNews);
//
//		if (zyUserEntity.getPhone()!=null) {
//			String phone = zyUserEntity.getPhone();
//			Map<String, Object> res=SmsUtil.sendMsg(msg, phone);
//			int code=(Integer)res.get("code");
//			if(code!=0){
//				logger.error("用户贷款发送短信失败！内容："+(String)res.get("detail"));
//			}
//		}
//	}


	private boolean withdrawals(ZyUserEntity zyUserEntity, ZyUserBankcardEntity zyUserBankcardEntity, ZyUserWithdrawalsEntity zyUserWithdrawalsEntity) throws Exception {
		boolean result = false;
		boolean flag = true;
		while(flag){
			flag=false;
			try {
			result = zyUserWithdrawalsService.Cash(zyUserEntity, zyUserBankcardEntity, zyUserWithdrawalsEntity);
			}catch (LockException e) {
				flag = true;
			}
		}
		return result;
	}
	
	@RequestMapping("/auditedList")
	public R auditedList(@RequestParam Map<String, Object> params) {
		Query query = new Query(params);
		List<Map<String, Object>> list = zyUserWithdrawalsService.auditedList(query);
		int total = zyUserWithdrawalsService.queryTotal4(query);
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		return R.ok().put("page", pageUtil);
	}
	
	
	@RequestMapping("/auditedListNoCondition")
	public R auditedListNoCondition(@RequestParam Map<String, Object> params) {
		Query query = new Query(params);
		List<Map<String, Object>> list = zyUserWithdrawalsService.auditedListNoCondition(query);
		int total = zyUserWithdrawalsService.queryTotal4(query);
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		return R.ok().put("page", pageUtil);
	}
	
	
	@RequestMapping("/abc")
	public R abc(@RequestParam Map<String, Object> params) {
		String withdrawalsId = params.get("id").toString();
		ZyUserWithdrawalsEntity entity = new ZyUserWithdrawalsEntity();
		entity.setId(withdrawalsId);
		entity.setWithdrawalsStatus(5);
		SysUserEntity userEntity = ShiroUtils.getUserEntity();
		Long l = userEntity.getUserId();
		entity.setVerifyUser(String.valueOf(l));
		entity.setFinalWithdrawalsStatus(1);
		boolean flag = true;
			while(flag){
				flag=false;
				try {
					zyUserWithdrawalsService.addRemainder(withdrawalsId);
				}catch (LockException e) {
					flag = true;
				}
			}
			entity.setUpdateDate(new Date());
			flag = zyUserWithdrawalsService.firstVerify(entity);
			if (flag) {
				return R.ok();
			}else {
				return R.error("系统错误！");
			}
	}
	
	
	
	@RequestMapping("/getWithdrawalsList")
	public R getWithdrawalsList(@RequestParam Map<String, Object> params) {
		Query query = new Query(params);
		List<Map<String, Object>> list = zyUserWithdrawalsService.getWithdrawalsList(query);
		int total = zyUserWithdrawalsService.queryTotal5(query);
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		return R.ok().put("page", pageUtil);
	}
	
	
	@RequestMapping("/getWithdrawalsListNoCondition")
	public R getWithdrawalsListNoCondition(@RequestParam Map<String, Object> params) {
		Query query = new Query(params);
		List<Map<String, Object>> list = zyUserWithdrawalsService.getWithdrawalsListNoCondition(query);
		int total = zyUserWithdrawalsService.queryTotal5(query);
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		return R.ok().put("page", pageUtil);
	}
}
