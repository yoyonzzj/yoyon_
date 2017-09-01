package io.renren.xweb.controller.behind;


import java.io.IOException;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.renren.xcommon.core.enums.BusinessCode;
import io.renren.xcommon.core.enums.SendMsg;
import io.renren.xcommon.core.exception.BusinessException;
import io.renren.xcommon.core.exception.LockException;
import io.renren.xcommon.core.utils.UUIDUtil;
import io.renren.xcommon.dao.DictDao;
import io.renren.xcommon.dao.ZyUserDao;
import io.renren.xcommon.dao.ZyUserNewsDao;
import io.renren.xcommon.dao.ZyUserWalletDao;
import io.renren.xcommon.entity.DictEntity;
import io.renren.xcommon.entity.ZyHomeAdEntity;
import io.renren.xcommon.entity.ZyUserBlackEntity;
import io.renren.xcommon.entity.ZyUserBorrowEntity;
import io.renren.xcommon.entity.ZyUserDataEntity;
import io.renren.xcommon.entity.ZyUserEntity;
import io.renren.xcommon.entity.ZyUserIdcardEntity;
import io.renren.xcommon.entity.ZyUserNewsEntity;
import io.renren.xcommon.entity.ZyUserVerifyEntity;
import io.renren.xcommon.entity.ZyUserWalletEntity;
import io.renren.xcommon.service.ZyHomeAdService;
import io.renren.xcommon.service.ZyUserBlackService;
import io.renren.xcommon.service.ZyUserBorrowService;
import io.renren.xcommon.service.ZyUserDataService;
import io.renren.xcommon.service.ZyUserIdcardService;
import io.renren.xcommon.service.ZyUserService;
import io.renren.xcommon.service.ZyUserVerifyService;
import io.renren.xcommon.sms.SmsUtil;
import io.renren.xcommon.utils.Constant;
import io.renren.xcommon.utils.PageUtils;
import io.renren.xcommon.utils.Query;
import io.renren.xcommon.utils.R;
import io.renren.xshiro.entity.SysUserEntity;
import io.renren.xshiro.utils.ShiroUtils;
import io.renren.xweb.core.interceptor.anno.VaFormSubmitAnno;


/**
 * 用户审核表
 * 
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2017-06-09 12:24:14
 */
@RestController
@RequestMapping("/zyuserverify")
public class ZyUserVerifyController {
	@Autowired
	private ZyUserVerifyService zyUserVerifyService;
	@Autowired
	private ZyUserService zyUserService;
	@Autowired
	private ZyHomeAdService zyHomeAdService;
	@Autowired
	private ZyUserBlackService zyUserBlackService;
	@Autowired
	private ZyUserBorrowService zyUserBorrowService;
	@Autowired
	private DictDao dictDao;
	@Autowired
	private ZyUserWalletDao zyUserWalletDao;
	@Autowired
	private ZyUserDao zyUserDao;
	@Autowired
	private ZyUserNewsDao zyUserNewsDao;
	@Autowired
	private ZyUserDataService zyUserDataService;
	@Autowired
	private ZyUserIdcardService zyUserIdcardService;
	
	static Logger logger = LoggerFactory.getLogger(ZyUserVerifyController.class);
	
	/**
	 * 列表
	 */
	@RequestMapping("/list")
	@RequiresPermissions("zyuserverify:list")
	public R list(@RequestParam Map<String, Object> params){
		//查询列表数据
        Query query = new Query(params);

		List<ZyUserVerifyEntity> zyUserVerifyList = zyUserVerifyService.queryList(query);
		int total = zyUserVerifyService.queryTotal(query);
		
		PageUtils pageUtil = new PageUtils(zyUserVerifyList, total, query.getLimit(), query.getPage());
		
		return R.ok().put("page", pageUtil);
	}
	
	
	/**
	 * 信息
	 */
	@RequestMapping("/info/{id}")
	@RequiresPermissions("zyuserverify:info")
	public R info(@PathVariable("id") String id){
		ZyUserVerifyEntity zyUserVerify = zyUserVerifyService.queryObject(id);
		
		return R.ok().put("zyUserVerify", zyUserVerify);
	}
	
	/**
	 * 保存
	 */
	@RequestMapping("/save")
	@RequiresPermissions("zyuserverify:save")
	public R save(@RequestBody ZyUserVerifyEntity zyUserVerify){
		zyUserVerifyService.save(zyUserVerify);
		
		return R.ok();
	}
	
	/**
	 * 修改
	 */
	@RequestMapping("/update")
	@RequiresPermissions("zyuserverify:update")
	public R update(@RequestBody ZyUserVerifyEntity zyUserVerify){
		zyUserVerifyService.update(zyUserVerify);
		
		return R.ok();
	}
	
	/**
	 * 删除
	 */
	@RequestMapping("/delete")
	@RequiresPermissions("zyuserverify:delete")
	public R delete(@RequestBody String[] ids){
		zyUserVerifyService.deleteBatch(ids);
		
		return R.ok();
	}
	
	
	/**
	 * 初审列表接口
	 * @param params
	 * @return
	 */
	@RequestMapping("/firstVerify")
	public R firstVerify(@RequestParam Map<String, Object> params) {
		Query query = new Query(params);
		List<Map<String, Object>> list = zyUserVerifyService.firstVerify(query);
		int total = zyUserVerifyService.queryTotal2(query);
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		return R.ok().put("page", pageUtil);
	}
	
	
	
	/**
	 * 复审列表接口
	 * @param params
	 * @return
	 */
	@RequestMapping("/reviewVerify")
	public R reviewVerify(@RequestParam Map<String, Object> params) {
		Query query = new Query(params);
		List<Map<String, Object>> list = zyUserVerifyService.reviewVerify(query);
		int total = zyUserVerifyService.reviewVerifyCount(query);
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		return R.ok().put("page", pageUtil);
	}
	
	
	
	@RequestMapping("/reviewVerifyNoCondition")
	public R reviewVerifyNoCondition(@RequestParam Map<String, Object> params) {
		Query query = new Query(params);
		List<Map<String, Object>> list = zyUserVerifyService.reviewVerifyNoCondition(query);
		int total = zyUserVerifyService.queryTotal8(query);
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		return R.ok().put("page", pageUtil);
	}
	
	
	/**
	 * 获取个人信息接口
	 * @param params
	 * @return
	 */
	@RequestMapping("/userSummary")
	public R userSummary(@RequestParam Map<String, Object> params) {
		String userId = params.get("userId").toString();
		Map<String, Object> result = zyUserService.findUserSummary(userId);
		return R.ok().put("result", result);
	}
	
	
	/**
	 * 获取工作信息接口
	 * @param params
	 * @return
	 */
	@RequestMapping("/userUnit")
	public R userUnit(@RequestParam Map<String, Object> params) {
		String userId = params.get("userId").toString();
		Map<String, Object> result = zyUserService.findUserUserUnit(userId);
		return R.ok().put("result", result);
	}
	
	
	
	/**
	 * 获得联系人信息接口
	 * @param params
	 * @return
	 */
	@RequestMapping("/userContact")
	public R userContact(@RequestParam Map<String, Object> params) {
		String userId = params.get("userId").toString();
		Map<String, Object> result = zyUserService.findUserContact(userId);
		return R.ok().put("result", result);
	}
	
	/**
	 * 获取认证信息接口
	 * @param params
	 * @return
	 */
	@RequestMapping("/userAuth")
	public R userAuth(@RequestParam Map<String, Object> params) {
		String userId = params.get("userId").toString();
		Map<String, Object> result = zyUserService.findUserAuth(userId);
		return R.ok().put("result", result);
	}
	
	/**
	 * 获取学历信息接口
	 * @param params
	 * @return
	 */
	@RequestMapping("/userSchool")
	public R userSchool(@RequestParam Map<String, Object> params) {
		String userId = params.get("userId").toString();
		Map<String, Object> result = zyUserService.userSchool(userId);
		return R.ok().put("result", result);
	}
	
	
	
	/**
	 * 获取审核信息接口
	 * @param params
	 * @return
	 */
	@RequestMapping("/userToExamine")
	public R userToExamine(@RequestParam Map<String, Object> params) {
		String verifyId = params.get("verifyId").toString();
		Map<String, Object> result = zyUserService.userToExamine(verifyId);
		return R.ok().put("result", result);
	}
	
	
	/**
	 * 复审审核接口
	 * @param params
	 * @return
	 */
	@RequestMapping("/reviewExamine")
	@VaFormSubmitAnno
	public R reviewExamine(@RequestParam Map<String, Object> params) {
		//获得参数
		String verifyId = params.get("verifyId").toString();
		String verifyStatus2 = params.get("verifyStatus").toString();
		String money = params.get("money").toString();
		String userId = params.get("userId").toString();
		String phone = params.get("phone").toString();
		
		Integer verifyStatus = Integer.valueOf(verifyStatus2);
		
		//操作之前先查询看看数据是否已经操作
		ZyUserVerifyEntity queryObject = zyUserVerifyService.queryObject(verifyId);
		if (queryObject.getVerifyStatus() == 5 || queryObject.getVerifyStatus() == 6) {
			return R.error("该信息已被操作，请刷新页面！");
		}
		//封装数据
		ZyUserVerifyEntity entity = new ZyUserVerifyEntity();
		entity.setId(verifyId);
		entity.setVerifyStatus(verifyStatus);
		SysUserEntity userEntity = ShiroUtils.getUserEntity();
		Long l = userEntity.getUserId();
		entity.setVerifyUser(String.valueOf(l));
		entity.setVerifyTime(new Date());
		
		entity.setVersion(queryObject.getVersion());
		entity.setUserId(queryObject.getUserId());
		
		if (verifyStatus == 5) {
			//如果审核不通过的情况下
			entity.setReason("人工复审不通过。");
			entity.setSecondExamineStatus(1);
			//加入黑名单
			ZyUserBlackEntity zyUserBlackEntity = new ZyUserBlackEntity();
			zyUserBlackEntity.preInsertNoUser();
			zyUserBlackEntity.setDelFlag("0");
			zyUserBlackEntity.setPhone(phone);
			zyUserBlackEntity.setUserId(userId);
			zyUserBlackEntity.setType(1);
			zyUserBlackEntity.setReason("复审未通过");
			int count = zyUserBlackService.save(zyUserBlackEntity);
			if (count == 1) {
				//修改额度审核表的状态
				BigDecimal bd=new BigDecimal(0);
				entity.setVerifyMoney(bd);
				
				int i = 0;
				boolean flag = true;
				while(flag){
					if (i>3) {
						logger.info("死循环！在--ZyUserVerifyController--reviewExamine方法！");
						return R.error("乐观锁错误！可能是重复操作！");
					}
					flag=false;
					try {
						zyUserVerifyService.toExamine(entity);
					}catch (LockException e) {
						flag = true;
						++i;
						queryObject = zyUserVerifyService.queryObject(verifyId);
						entity.setVersion(queryObject.getVersion());
					}
				}
				
				return R.ok();
			}else {
				return R.error("系统错误");
			}
		}else {
			//审核通过的情况下
			BigDecimal bd=new BigDecimal(money);
			//修改额度审核表的状态
			entity.setVerifyMoney(bd);
			entity.setSecondExamineStatus(0);
			
			int i = 0;
			boolean flag = true;
			while(flag){
				if (i>3) {
					logger.info("死循环！在--ZyUserVerifyController--reviewExamine方法！");
					return R.error("乐观锁错误！可能是重复操作！");
				}
				flag=false;
				try {
					zyUserVerifyService.toExamineForSuccess(entity);
				}catch (LockException e) {
					flag = true;
					++i;
					queryObject = zyUserVerifyService.queryObject(verifyId);
					entity.setVersion(queryObject.getVersion());
				}
			}
		return R.ok();
		}
	}
	
	

	private void LoanFailure(ZyUserEntity zyUserEntity) {
//		Date createDate = new Date();
//		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
//		String format = formatter.format(createDate);
		String msg=String.format(SendMsg._0054.msg);
		String msg2=String.format(SendMsg._0017.msg);
		ZyUserNewsEntity zyUserNews=new ZyUserNewsEntity();
		zyUserNews.setUserId(zyUserEntity.getId());
		zyUserNews.setNewsTitle(SendMsg._0017.key);
		zyUserNews.setNewsType(Integer.parseInt(SendMsg._0017.code));
		zyUserNews.setNewsDetail(msg2);
		zyUserNews.setStatus(1);
		zyUserNews.preInsertNoUser();
		zyUserNews.setDelFlag(ZyUserNewsEntity.DEL_FLAG_NORMAL);
		zyUserNewsDao.save(zyUserNews);

		if (zyUserEntity.getPhone()!=null) {
			String phone = zyUserEntity.getPhone();
			Map<String, Object> res=SmsUtil.sendMsg(msg, phone);
			int code=(Integer)res.get("code");
			if(code!=0){
				logger.error("用户贷款发送短信失败！内容："+(String)res.get("detail"));
			}
		}
	}
	
	
	private void limitSuccess(ZyUserEntity zyUserEntity, String money) {
		String msg2=String.format(SendMsg._0053.msg, money);
		String msg=String.format(SendMsg._0015.msg, money);
		ZyUserNewsEntity zyUserNews=new ZyUserNewsEntity();
		zyUserNews.setUserId(zyUserEntity.getId());
		zyUserNews.setNewsTitle(SendMsg._0015.key);
		zyUserNews.setNewsType(Integer.parseInt(SendMsg._0015.code));
		zyUserNews.setNewsDetail(msg);
		zyUserNews.setStatus(1);
		zyUserNews.preInsertNoUser();
		zyUserNews.setDelFlag(ZyUserNewsEntity.DEL_FLAG_NORMAL);
		zyUserNewsDao.save(zyUserNews);
		
		if (zyUserEntity.getPhone()!=null) {
			String phone = zyUserEntity.getPhone();
			Map<String, Object> res=SmsUtil.sendMsg(msg2, phone);
			int code=(Integer)res.get("code");
			if(code!=0){
				logger.error("用户贷款发送短信失败！内容："+(String)res.get("detail"));
			}
		}
	}


	private boolean Loan(ZyUserEntity zyUserEntity, ZyUserBorrowEntity zyUserBorrowEntity) {
		//借款与授信额度的校验
		if(zyUserBorrowEntity.getBorrowLimit().compareTo(zyUserEntity.getUserLastLimit())==1){
			//借款大于授信额度
			return false;
		}
		try {
		//钱打入余额
		toWallet(zyUserEntity.getId(),zyUserBorrowEntity.getBorrowLimit(),zyUserBorrowEntity.getBorrowPeriods());
		
		//修改放款金额与放款时间
//		ZyUserBorrowEntity zBorrowEntity = new ZyUserBorrowEntity();
//		zBorrowEntity.setId(zyUserBorrowEntity.getId());
		ZyUserBorrowEntity zBorrowEntity = zyUserBorrowService.queryObject(zyUserBorrowEntity.getId());
		zBorrowEntity.setGrantLimit(zyUserBorrowEntity.getBorrowLimit());
		zBorrowEntity.setGrantDate(new Date());
		zBorrowEntity.setBorrowStatus(4);
		zyUserBorrowService.update(zBorrowEntity);
		
		//修改用户可用额度
		ZyUserEntity zyUser = zyUserDao.queryObject(zyUserEntity.getId());
		zyUser.setUserLastLimit(zyUser.getUserLastLimit().subtract(zyUserBorrowEntity.getBorrowLimit()));
		zyUser.setUserLimitStatus(2);
		zyUserDao.update(zyUser);
		
		//发送短信通知
		sendMsg(zyUser,zBorrowEntity);
		} catch (Exception e) {
			logger.error("提交借款申请发送消息失败!", e);
			return false;
		}
		return true;
	}
	
	
	private void toWallet(String userId, BigDecimal borrowLimit, Integer days) {
		//冻结金额
		Map<String, String> map = getUserRefundLimit(borrowLimit,days);
		BigDecimal freeze_money=new BigDecimal(map.get("freeze_money"));
		//用户可用金额
		BigDecimal available_balance = borrowLimit.subtract(freeze_money);
		
		//查看该用户是否有钱包
		ZyUserWalletEntity walletEntity =  zyUserWalletDao.queryEntityByUserId(userId);
		Date date=new Date();
		if(walletEntity==null){
			//用户没有钱包
			walletEntity=new ZyUserWalletEntity();
			walletEntity.setId(UUIDUtil.creatUUID());
			walletEntity.setUserId(userId);
			walletEntity.setCreateDate(date);
			walletEntity.setUpdateDate(date);
			walletEntity.setDelFlag(ZyUserWalletEntity.DEL_FLAG_NORMAL);
			walletEntity.setAccountBalance(borrowLimit);//账户总金额
			walletEntity.setAvailableBalance(available_balance);//账户可用金额
			walletEntity.setFreezeMoney(freeze_money);//冻结金额
			zyUserWalletDao.save(walletEntity);
			return;
		}
		//用户有钱包
		walletEntity.setUpdateDate(date);
		walletEntity.setAccountBalance(walletEntity.getAccountBalance().add(borrowLimit));//账户总金额
		walletEntity.setAvailableBalance(walletEntity.getAvailableBalance().add(available_balance));//账户可用金额
		walletEntity.setFreezeMoney(walletEntity.getFreezeMoney().add(freeze_money));//冻结金额
		zyUserWalletDao.update(walletEntity);
		
	}
	
	public Map<String,String> getUserRefundLimit(BigDecimal borrow_limit, Integer borrow_periods) {
//		//借款金额
//				BigDecimal borrow_limit=new BigDecimal(borrow_limit);
//				//借款天数
//				Integer borrow_periods = borrow_periods;
				
				DictEntity dictEntity=new DictEntity();
				dictEntity.setLabel(Constant.freeze_money_per);
				dictEntity.setType(Constant.freeze_money_per);
				dictEntity.setDelFlag(DictEntity.DEL_FLAG_NORMAL);
				dictEntity = dictDao.get(dictEntity);
				if(dictEntity==null){
					throw new BusinessException(BusinessCode._0004.value, new Throwable());
				}
				
				//比率数组
				String[] pre_str=dictEntity.getValue().split("-");
				
				//冻结金额比率
				BigDecimal freeze_money_per=new BigDecimal(pre_str[0]);
				
				//利息比率
				BigDecimal lixi_money_per=new BigDecimal(pre_str[1]);
			
				//担保费比率
				BigDecimal danbao_money_per=new BigDecimal(pre_str[2]);
			
				//手续费比率
				BigDecimal shouxu_money_per=new BigDecimal(pre_str[3]);
				
				//管理费 比率
				BigDecimal guanli_money_per=new BigDecimal(pre_str[4]);
				
				//基数
				BigDecimal base=borrow_limit.multiply(new BigDecimal(borrow_periods+"")).divide(new BigDecimal("365"),2, BigDecimal.ROUND_DOWN);
				
				//利息
				BigDecimal lixi_money=base.multiply(lixi_money_per).setScale(0,BigDecimal.ROUND_DOWN);

				//担保费
				BigDecimal danbao_money=base.multiply(danbao_money_per).setScale(0,BigDecimal.ROUND_DOWN);
				
				//手续费
				BigDecimal shouxu_money=base.multiply(shouxu_money_per).setScale(0,BigDecimal.ROUND_DOWN);
				
				//管理费
				BigDecimal guanli_money=base.multiply(guanli_money_per).setScale(0,BigDecimal.ROUND_DOWN);
				
				//冻结金额
				BigDecimal freeze_money=lixi_money.add(danbao_money).add(shouxu_money).add(guanli_money);
				
				Map<String,String> map=new HashMap<>();
				map.put("freeze_money", freeze_money+"");
				map.put("lixi_money", lixi_money+"");
				map.put("danbao_money", danbao_money+"");
				map.put("shouxu_money", shouxu_money+"");
				map.put("guanli_money", guanli_money+"");
				
				return map;
	}

	//发送消息
	private void sendMsg(ZyUserEntity zyUser, ZyUserBorrowEntity zBorrowEntity) throws Exception{
		Date createDate = zBorrowEntity.getCreateDate();
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		String format = formatter.format(createDate);
		String msg=String.format(SendMsg._0014.msg, format,zBorrowEntity.getBorrowLimit());
		ZyUserNewsEntity zyUserNews=new ZyUserNewsEntity();
		zyUserNews.setUserId(zyUser.getId());
		zyUserNews.setNewsTitle(SendMsg._0014.key);
		zyUserNews.setNewsType(Integer.parseInt(SendMsg._0014.code));
		zyUserNews.setNewsDetail(msg);
		zyUserNews.setStatus(1);
		zyUserNews.preInsertNoUser();
		zyUserNews.setDelFlag(ZyUserNewsEntity.DEL_FLAG_NORMAL);
		zyUserNewsDao.save(zyUserNews);
		
		if(Constant.isSendmsg){
			try {
				//获取用户的未读消息，推送给app
//				zyUserNews=new ZyUserNewsEntity();
//				zyUserNews.setUserId(zyUser.getId());
//				zyUserNews.setStatus(1);
//				Long unreadNewsCount=zyUserNewsDao.getUnreadNewsCount(zyUserNews);
//				JSONObject jo=new JSONObject();
//				jo.put("juid", zyUser.getId());
//				jo.put("type", SendMsg._0014.code);
//				jo.put("msg", msg);
//				jo.put("msgCount", String.valueOf(unreadNewsCount));
			
				if (zyUser.getPhone()!=null) {
					String phone = zyUser.getPhone();
					Map<String, Object> res=SmsUtil.sendMsg(msg, phone);
					int code=(Integer)res.get("code");
					if(code!=0){
						logger.error("用户贷款发送短信失败！内容："+(String)res.get("detail"));
					}
				}
			} catch (Exception e) {
				logger.error("用户贷款发送消息失败！", e);
			}
		}
	}
	
	/**
	 * 初审审核接口
	 * @param params
	 * @return
	 */
	@RequestMapping("/toExamine")
	@VaFormSubmitAnno
	public R toExamine(@RequestParam Map<String, Object> params) {
		String verifyId = params.get("verifyId").toString();
		String verifyStatus2 = params.get("verifyStatus").toString();
		String money = params.get("money").toString();
//		String phone = params.get("phone").toString();
		
		//操作之前先查询是否已经操作过了
		ZyUserVerifyEntity queryObject = zyUserVerifyService.queryObject(verifyId);
		if (queryObject.getVerifyStatus() == 3 || queryObject.getVerifyStatus() == 4) {
			return R.error("该信息已被操作，请刷新页面！");
		}
		Integer verifyStatus = Integer.valueOf(verifyStatus2);
		ZyUserVerifyEntity entity = new ZyUserVerifyEntity();
		entity.setId(verifyId);
		entity.setVerifyStatus(verifyStatus);
		SysUserEntity userEntity = ShiroUtils.getUserEntity();
		Long l = userEntity.getUserId();
		entity.setVerifyUser(String.valueOf(l));
		entity.setVerifyTime(new Date());
		BigDecimal bd=new BigDecimal(money);
		entity.setVerifyMoney(bd);
		if (verifyStatus == 4) {
			entity.setFirstExamineStatus(0);
		}else {
			entity.setReason("人工初审不通过。");
			entity.setFirstExamineStatus(1);
		}
		
		int i = 0;
		boolean flag = true;
		while(flag){
			if (i>3) {
				logger.info("死循环！在--ZyUserVerifyController--reviewExamine方法！");
				return R.error("乐观锁错误！可能是重复操作！");
			}
			flag=false;
			try {
				zyUserVerifyService.toExamineForUpdate(entity);
			}catch (LockException e) {
				flag = true;
				++i;
				queryObject = zyUserVerifyService.queryObject(verifyId);
				entity.setVersion(queryObject.getVersion());
			}
		}
		
		return R.ok();
	}
	
	
	/**
	 * 获取已审核列表接口
	 * @param params
	 * @return
	 */
	@RequestMapping("/audited")
	public R audited(@RequestParam Map<String, Object> params) {
		Query query = new Query(params);
		List<Map<String, Object>> list = zyUserVerifyService.Audited(query);
		int total = zyUserVerifyService.queryTotal3(query);
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		return R.ok().put("page", pageUtil);
	}
	
	@RequestMapping("/waitVerifyDemand")
	public R waitVerifyDemand(@RequestParam Map<String, Object> params) {
		Query query = new Query(params);
		List<Map<String, Object>> list = zyUserVerifyService.waitVerifyDemand(query);
		int total = zyUserVerifyService.waitVerifyDemandCount(query);
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		return R.ok().put("page", pageUtil);
	}

	
	
	@RequestMapping("/auditedDemand")
	public R auditedDemand(@RequestParam Map<String, Object> params) {
		Query query = new Query(params);
		List<Map<String, Object>> list = zyUserVerifyService.auditedDemand(query);
		int total = zyUserVerifyService.auditedDemandCount(query);
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		return R.ok().put("page", pageUtil);
	}
	
	
	@RequestMapping("/bannerList")
	public R bannerList(@RequestParam Map<String, Object> params) {
		Query query = new Query(params);
		List<Map<String, Object>> list = zyUserVerifyService.bannerList(query);
		int total = zyUserVerifyService.queryTotal6(query);
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		return R.ok().put("page", pageUtil);
	}
	
	
	@RequestMapping("/addBanner")
	public R addBanner(@RequestParam Map<String, Object> params) throws IOException {
		String bannerId = params.get("bannerId").toString();
		String title = params.get("title").toString();
		String url = params.get("url").toString();
		String sort = params.get("sort").toString();
		String flag = params.get("flag").toString();
		String author = params.get("author").toString();
		String pic = params.get("pic").toString();
//		String mongoId = null;
		ZyHomeAdEntity entity = new ZyHomeAdEntity();
		if (StringUtils.isEmpty(bannerId) || "undefined".equals(bannerId)) {
//			if (file.isEmpty()) {
//				throw new BusinessException("文件不能为空!", new Throwable());
//			}
//			if (file.getSize() >= (5 * 1024 * 1024)) {
//				throw new BusinessException("文件大小不能超过5M!", new Throwable());
//			}
//			String fileName = file.getOriginalFilename();
//			String fileType = FilenameUtils.getExtension(fileName);
//			// 表达式对象
//			Pattern p = Pattern.compile("(jpg|gif|png)");
//			// 创建 Matcher 对象
//			Matcher m = p.matcher(fileType);
//			if (!m.matches()) {
//				throw new BusinessException("上传文件必须是图片!", new Throwable());
//			}
//			mongoId = mongoDbService.save(file.getInputStream(), fileName, FilenameUtils.getExtension(fileName));// 获取mongoID
			entity.setAdPic(pic);
			entity.setAdUrl(url);
			entity.setTitle(title);
			entity.setSort(Integer.valueOf(sort));
			entity.setFlag(Integer.valueOf(flag));
			entity.setAuthor(author);
			entity.preInsertNoUser();
			entity.setDelFlag("0");
			boolean boo = zyUserVerifyService.addBanner(entity);
			if (boo) {
				return R.ok();
			}
		}else {
			ZyHomeAdEntity zyHomeAdEntity = zyHomeAdService.queryObject(bannerId);
			if (null != zyHomeAdEntity) {
//				if (file.isEmpty()) {
//					entity.setAdPic(pic);
//				}else {
//					if (file.getSize() >= (5 * 1024 * 1024)) {
//						throw new BusinessException("文件大小不能超过5M!", new Throwable());
//					}
//					String fileName = file.getOriginalFilename();
//					String fileType = FilenameUtils.getExtension(fileName);
//					// 表达式对象
//					Pattern p = Pattern.compile("(jpg|gif|png)");
//					// 创建 Matcher 对象
//					Matcher m = p.matcher(fileType);
//					if (!m.matches()) {
//						throw new BusinessException("上传文件必须是图片!", new Throwable());
//					}
//					mongoId = mongoDbService.save(file.getInputStream(), fileName, FilenameUtils.getExtension(fileName));// 获取mongoID
//					entity.setAdPic(mongoId);
//				}
				entity.setId(bannerId);
				entity.setAdPic(pic);
				entity.setAdUrl(url);
				entity.setTitle(title);
				entity.setSort(Integer.valueOf(sort));
				entity.setFlag(Integer.valueOf(flag));
				entity.setAuthor(author);
				entity.setUpdateDate(new Date());
				int count = zyHomeAdService.update(entity);
				if (count ==1) {
					return R.ok();
				}
			}else {
				return R.error("修改banner错误");
			}
		}
		return R.error("系统错误");
	}
	
	
	
	@RequestMapping("/updateBanner")
	public R updateBanner(@RequestParam Map<String, Object> params) {
		String bannerId = params.get("bannerId").toString();
		Map<String, Object> result = zyUserVerifyService.getBanner(bannerId);
		return R.ok().put("result", result);
	}
	
	
	@RequestMapping("/updateAddBanner")
	public R updateAddBanner(@RequestParam Map<String, Object> params) {
		String bannerId = params.get("bannerId").toString();
		String title = params.get("title").toString();
		String url = params.get("url").toString();
		String sort = params.get("sort").toString();
		String flag = params.get("flag").toString();
		String author = params.get("author").toString();
		String pic = params.get("pic").toString();
		ZyHomeAdEntity zyHomeAdEntity = zyHomeAdService.queryObject(bannerId);
		if (null != zyHomeAdEntity) {
			zyHomeAdEntity.setAdPic(pic);
			zyHomeAdEntity.setAdUrl(url);
			zyHomeAdEntity.setTitle(title);
			zyHomeAdEntity.setSort(Integer.valueOf(sort));
			zyHomeAdEntity.setFlag(Integer.valueOf(flag));
			zyHomeAdEntity.setAuthor(author);
			zyHomeAdEntity.setUpdateDate(new Date());
			int count = zyHomeAdService.update(zyHomeAdEntity);
			if (count ==1) {
				return R.ok();
			}
		}
		return R.error("服务器错误！");
	}
	
	
	@RequestMapping("/deleteBanner")
	public R deleteBanner(@RequestParam Map<String, Object> params) {
		try {
			String bannerId = params.get("bannerId").toString();
			String[] bannerIds = bannerId.split(",");
			for (String string : bannerIds) {
				zyHomeAdService.deleteBanner(string);
			}
//		ZyHomeAdEntity zyHomeAdEntity = zyHomeAdService.queryObject(bannerId);
//		if (null != zyHomeAdEntity) {
//			int count = zyHomeAdService.deleteBanner(bannerId);
//			if (count ==1) {
//				return R.ok();
//			}
//		}
//		return R.error("服务器错误！");
			return R.ok();
		} catch (Exception e) {
			e.printStackTrace();
			return R.error("服务器错误！");
		}
	}
	
	
	@RequestMapping("/conditionBannerList")
	public R conditionBannerList(@RequestParam Map<String, Object> params) {
		Query query = new Query(params);
		List<Map<String, Object>> list = zyHomeAdService.bannerList(query);
		int total = zyHomeAdService.queryTotal2(query);
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		return R.ok().put("page", pageUtil);
	}
	
	
	/**
	 * V1.2 额度终审列表
	 * @param params
	 * @return
	 */
	@RequestMapping("/finalListV2")
	public R finalListV2(@RequestParam Map<String, Object> params) {
		Query query = new Query(params);
		List<Map<String, Object>> list = zyUserVerifyService.finalListV2(query);
		int total = zyUserVerifyService.finalListV2Count(query);
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		return R.ok().put("page", pageUtil);
	}
	
	
	
	/**
	 * V1.2 批量审核不通过接口
	 * @param params
	 * @return
	 */
	@RequestMapping("/batchFail")
	@VaFormSubmitAnno
	public R batchFail(@RequestParam Map<String, Object> params) {
		//获得参数
		String verifyIdS = params.get("verifyId").toString();
		String[] verifyIds = verifyIdS.split(",");
		for (String verifyId : verifyIds) {
			
			ZyUserVerifyEntity queryObject = zyUserVerifyService.queryObject(verifyId);
			if (queryObject.getVerifyStatus() == 5 || queryObject.getVerifyStatus() == 6) {
				return R.error("该信息已被操作，请刷新页面！");
			}
			
			//封装数据
			ZyUserVerifyEntity entity = new ZyUserVerifyEntity();
			entity.setId(verifyId);
			entity.setVerifyStatus(5);
			SysUserEntity userEntity = ShiroUtils.getUserEntity();
			Long l = userEntity.getUserId();
			entity.setVerifyUser(String.valueOf(l));
			entity.setVerifyTime(new Date());
			//如果审核不通过的情况下
			entity.setReason("人工复审不通过。");
			entity.setSecondExamineStatus(1);
			
			//修改额度审核表的状态
			BigDecimal bd=new BigDecimal(0);
			entity.setVerifyMoney(bd);
			
			entity.setVersion(queryObject.getVersion());
			entity.setUserId(queryObject.getUserId());
			
			int i = 0;
			boolean flag = true;
			while(flag){
				if (i>3) {
					logger.info("死循环！在--ZyUserVerifyController--reviewExamine方法！");
					continue;
				}
				flag=false;
				try {
					zyUserVerifyService.toExamine(entity);
				}catch (LockException e) {
					flag = true;
					++i;
					queryObject = zyUserVerifyService.queryObject(verifyId);
					entity.setVersion(queryObject.getVersion());
				}
			}
		}
		return R.ok();
	}
	
	
	/**
	 * V1.2 批量审核通过接口
	 * @param params
	 * @return
	 */
	@RequestMapping("/batchSuccess")
	@VaFormSubmitAnno
	public R batchSuccess(@RequestParam Map<String, Object> params) {
		
		String verifyIdS = params.get("verifyId").toString();
		String[] verifyIds = verifyIdS.split(",");
		for (String verifyId : verifyIds) {
			//操作之前先查询看看数据是否已经操作
			ZyUserVerifyEntity queryObject = zyUserVerifyService.queryObject(verifyId);
			if (queryObject.getVerifyStatus() == 5 || queryObject.getVerifyStatus() == 6) {
				return R.error("该信息已被操作，请刷新页面！");
			}
			
			//封装数据
			ZyUserVerifyEntity entity = new ZyUserVerifyEntity();
			entity.setId(verifyId);
			entity.setVerifyStatus(6);
			SysUserEntity userEntity = ShiroUtils.getUserEntity();
			Long l = userEntity.getUserId();
			entity.setVerifyUser(String.valueOf(l));
			entity.setVerifyTime(new Date());
			
			entity.setVersion(queryObject.getVersion());
			entity.setUserId(queryObject.getUserId());
			
			//审核通过的情况下
			BigDecimal bd=new BigDecimal(1000);
			//修改额度审核表的状态
			entity.setVerifyMoney(bd);
			entity.setSecondExamineStatus(0);
			
			int i = 0;
			boolean flag = true;
			while(flag){
				if (i>3) {
					logger.info("死循环！在--ZyUserVerifyController--reviewExamine方法！");
					continue;
				}
				flag=false;
				try {
					zyUserVerifyService.toExamineForSuccess(entity);
				}catch (LockException e) {
					flag = true;
					++i;
					queryObject = zyUserVerifyService.queryObject(verifyId);
					entity.setVersion(queryObject.getVersion());
				}
			}
		}
		return R.ok();
	}
	
	
	
	
	/**
	 * V1.2 额度初审列表
	 * @param params
	 * @return
	 */
	@RequestMapping("/firstListV2")
	public R firstListV2(@RequestParam Map<String, Object> params) {
		Query query = new Query(params);
		List<Map<String, Object>> list = zyUserVerifyService.firstListV2(query);
		int total = zyUserVerifyService.firstListV2Count(query);
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		return R.ok().put("page", pageUtil);
	}
	
	
	/**
	 * V1.2 加入黑名单接口
	 * @param params
	 * @return
	 */
	@RequestMapping("/addBlack")
	public R addBlack(@RequestParam Map<String, Object> params) {
		String userId = params.get("userId").toString();
		String type = params.get("type").toString();
		String reason = params.get("reason").toString();
		String Id = params.get("Id").toString();
		
		ZyUserEntity zyUser = zyUserService.queryObject(userId);
		
		ZyUserDataEntity zyUserData = zyUserDataService.queryByUserId(userId);
		
		ZyUserIdcardEntity zyUserIdcard = zyUserIdcardService.queryByUserId(userId);
		
		SysUserEntity userEntity = ShiroUtils.getUserEntity();
		
		Long long1 = userEntity.getUserId();
		Integer sysId = Integer.valueOf(long1.toString());
		
		ZyUserBlackEntity zyUserBlack = new ZyUserBlackEntity();
		
		zyUserBlack.setId(UUIDUtil.creatUUID());
		zyUserBlack.setPhone(zyUser.getPhone());
		zyUserBlack.setUsername(zyUser.getUsername());
		zyUserBlack.setIdcard(zyUserIdcard.getIdcard());
		zyUserBlack.setGender(zyUserData.getGender());
		zyUserBlack.setAddr(zyUserData.getHujiAdr());
		zyUserBlack.setAge(zyUserData.getAge());
		zyUserBlack.setOperatorId(sysId);
		zyUserBlack.setOperatorName(userEntity.getUsername());
		zyUserBlack.setType(3);
		zyUserBlack.setResources("柚钱花");
		zyUserBlack.setReason(reason);
		zyUserBlack.setCreateDate(new Date());
		zyUserBlack.setUpdateDate(zyUserBlack.getCreateDate());
		zyUserBlack.setDelFlag("0");
		
		
		int i = 0;
		boolean flag = true;
		while(flag){
			if (i>3) {
				logger.info("死循环！在--ZyUserVerifyController--addBlack方法！");
				return R.error("死循环错误！");
			}
			flag=false;
			try {
				zyUserBlackService.addBlack(zyUserBlack,zyUser,Id);
			}catch (LockException e) {
				flag = true;
				++i;
				zyUser = zyUserService.queryObject(userId);
			}
		}
		return R.ok();
	}
	/**
	 * V1.2 额度初审的批量通过
	 * @param ids
	 * @return
	 */
	@RequestMapping("/limitBatchPass")
	public R LimitBatchpasss(@RequestParam Map<String, Object> params){
		String verifyIdS = params.get("verifyId").toString();
		String[] verifyIds = verifyIdS.split(",");
		a:for (String id : verifyIds) {
			//操作之前先查询看看数据是否已经操作
			ZyUserVerifyEntity queryObject = zyUserVerifyService.queryObject(id);
			if (queryObject.getVerifyStatus() == 3||queryObject.getVerifyStatus() == 4) {
				return R.error("该信息已被操作，请刷新页面！");
			}
			
			ZyUserVerifyEntity zVerifyEntity=new ZyUserVerifyEntity();
			zVerifyEntity.setId(id);
			zVerifyEntity.setVerifyStatus(3);
			SysUserEntity userEntity = ShiroUtils.getUserEntity();
			Long userId=userEntity.getUserId();
			zVerifyEntity.setVerifyUser(String.valueOf(userId));
			zVerifyEntity.setVerifyTime(new Date());
			zVerifyEntity.setVersion(queryObject.getVersion());
			zVerifyEntity.setUserId(queryObject.getUserId());
			//审核通过情况下
			zVerifyEntity.setFirstExamineStatus(0);
			
			int i = 0;
			boolean flag = true;
			while(flag){
				// 防止其死循环
				flag = false;
				try {
					i++;
					zyUserVerifyService.updateLimitStatus(zVerifyEntity);
				} catch (LockException e) {
					if (i > 3) {
						logger.error("死循环啦！在--ZyUserVerifyController—-LimitBatchpasss方法");						
						continue a;
					}
					queryObject = zyUserVerifyService.queryObject(id);
					zVerifyEntity.setVersion(queryObject.getVersion());
					flag = true;
				}
			}
		}
		return R.ok();
		
	}
	/**
	 * V1.2 额度初审的批量不通过
	 * @param params
	 * @return
	 */
	@RequestMapping("/limitBatchRefuse")
	public R LimitBatchRefuse(@RequestParam Map<String, Object> params){
		String verifyIdS = params.get("verifyId").toString();
		String[] verifyIds = verifyIdS.split(",");
		a:for (String id : verifyIds) {
			//操作之前先查询看看数据是否已经操作
			ZyUserVerifyEntity queryObject = zyUserVerifyService.queryObject(id);
			if (queryObject.getVerifyStatus() == 3||queryObject.getVerifyStatus() == 4) {
				return R.error("该信息已被操作，请刷新页面！");
			}
			ZyUserVerifyEntity zVerifyEntity=new ZyUserVerifyEntity();
			zVerifyEntity.setId(id);
			zVerifyEntity.setVerifyStatus(4);
			SysUserEntity userEntity = ShiroUtils.getUserEntity();
			Long userId=userEntity.getUserId();
			zVerifyEntity.setVerifyUser(String.valueOf(userId));
			zVerifyEntity.setVerifyTime(new Date());
			zVerifyEntity.setVersion(queryObject.getVersion());
			zVerifyEntity.setUserId(queryObject.getUserId());
			//审核不通过情况下
			zVerifyEntity.setFirstExamineStatus(1);
			
			int i = 0;
			boolean flag = true;
			while(flag){
				// 防止其死循环
				flag = false;
				try {
					i++;
					zyUserVerifyService.updateLimitStatus(zVerifyEntity);
				} catch (LockException e) {
					if (i > 3) {
						logger.error("死循环啦！在--ZyUserVerifyController—-LimitBatchRefuse方法");						
						continue a;
					}
					queryObject = zyUserVerifyService.queryObject(id);
					zVerifyEntity.setVersion(queryObject.getVersion());
					flag = true;
				}
			}
		}
		return R.ok();	
	}
	
	public static void main(String[] args) {
		System.out.println(123);
	}
}