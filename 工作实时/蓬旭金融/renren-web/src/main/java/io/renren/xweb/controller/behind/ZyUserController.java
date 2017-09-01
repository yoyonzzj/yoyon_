package io.renren.xweb.controller.behind;


import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.renren.xcommon.service.ZyUserService;
import io.renren.xcommon.utils.PageUtils;
import io.renren.xcommon.utils.Query;
import io.renren.xcommon.utils.R;
import io.renren.xshiro.entity.SysUserEntity;
import io.renren.xshiro.service.SysUserService;

/** 
* @author 作者： zhuxuan
* @version 创建时间：2017年6月1日
*/
@RestController
@RequestMapping("/zyUser")
public class ZyUserController{
	
	@Autowired
	private ZyUserService zyUserService;
	@Autowired
	private SysUserService sysUserService;
	
	/**
	 * 获取用户个人信息列表接口
	 * @param params
	 * @return
	 */
	@RequestMapping("/personalInformation")
	public R personalInformation(@RequestParam Map<String, Object> params) {
		Query query = new Query(params);
		List<Map<String, Object>> list = zyUserService.personalInformation(query);
		int total = zyUserService.queryTotal2(query);
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		return R.ok().put("page", pageUtil);
	}
	
	
	/**
	 * 获取用户工作信息列表接口
	 * @param params
	 * @return
	 */
	@RequestMapping("/userCompanyInformation")
	public R userCompanyInformation(@RequestParam Map<String, Object> params) {
		Query query = new Query(params);
		List<Map<String, Object>> list = zyUserService.userCompanyInformation(query);
		int total = zyUserService.queryTotal5(query);
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		return R.ok().put("page", pageUtil);
	}
	
	/**
	 * 获取用户工作信息补充信息接口
	 * @param params
	 * @return
	 */
	@RequestMapping("/userCompanySupplementInformation")
	public R userCompanySupplementInformation(@RequestParam Map<String, Object> params) {
		String userId = params.get("userId").toString();
		Map<String, Object> result = zyUserService.userCompanySupplementInformation(userId);
		return R.ok().put("result", result);
	}
	
	/**
	 * 用户黑名单列表接口
	 * @param params
	 * @return
	 */
	@RequestMapping("/userBlackList")
	public R userBlackList(@RequestParam Map<String, Object> params) {
		Query query = new Query(params);
		List<Map<String, Object>> list = zyUserService.userBlackList(query);
		int total = zyUserService.queryTotal3(query);
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		return R.ok().put("page", pageUtil);
	}
	
	/**
	 * 获取用户联系人列表接口
	 * @param params
	 * @return
	 */
	@RequestMapping("/userContact")
	public R userContact(@RequestParam Map<String, Object> params) {
		Query query = new Query(params);
		List<Map<String, Object>> list = zyUserService.userContact(query);
		int total = zyUserService.queryTotal13(query);
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		return R.ok().put("page", pageUtil);
	}
	
	
	/**
	 * 获取联系人补充信息接口
	 * @param params
	 * @return
	 */
	@RequestMapping("/userContactAdditional")
	public R userContactAdditional(@RequestParam Map<String, Object> params) {
		String userId = params.get("userId").toString();
		Map<String, Object> result = zyUserService.userContactAdditional(userId);
		return R.ok().put("result", result);
	}
	
	
	
	/**
	 * 获取用户认证信息列表接口
	 * @param params
	 * @return
	 */
	@RequestMapping("/userAuth")
	public R userAuth(@RequestParam Map<String, Object> params) {
		Query query = new Query(params);
		List<Map<String, Object>> list = zyUserService.userAuth(query);
		int total = zyUserService.queryTotal2(query);
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		return R.ok().put("page", pageUtil);
	}
	
	
	@RequestMapping("/userSchool")
	public R userSchool(@RequestParam Map<String, Object> params) {
		Query query = new Query(params);
		List<Map<String, Object>> list = zyUserService.userSchool(query);
		int total = zyUserService.queryTotal4(query);
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		return R.ok().put("page", pageUtil);
	}
	
	
	@RequestMapping("/userSchoolAdditional")
	public R userSchoolAdditional(@RequestParam Map<String, Object> params) {
		String userId = params.get("userId").toString();
		Map<String, Object> result = zyUserService.userSchoolAdditional(userId);
		return R.ok().put("result", result);
	}
	
	/**
	 * 条件查询用户个人信息列表接口
	 * @param params
	 * @return
	 */
	@RequestMapping("/personalInformationRequirement")
	public R personalInformationRequirement(@RequestParam Map<String, Object> params) {
		Query query = new Query(params);
		List<Map<String, Object>> list = zyUserService.personalInformationRequirement(query);
		int total = zyUserService.queryTotal6(query);
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		return R.ok().put("page", pageUtil);
	}
	
	
	/**
	 * 还款记录列表
	 * @param params
	 * @return
	 */ 
	@RequestMapping("/repaymentRecord")
	public R repaymentRecord(@RequestParam Map<String, Object> params) {
		Query query = new Query(params);
		List<Map<String, Object>> list = zyUserService.repaymentRecord(query);
		int total = zyUserService.queryTotal7(query);
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		return R.ok().put("page", pageUtil);
	}
	
	
	@RequestMapping("/userCapitalRecord")
	public R userCapitalRecord(@RequestParam Map<String, Object> params) {
		Query query = new Query(params);
		List<Map<String, Object>> list = zyUserService.userCapitalRecord(query);
		int total = zyUserService.queryTotal2(query);
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		return R.ok().put("page", pageUtil);
	}
	
	@RequestMapping("/conditionRepaymentRecord")
	public R conditionRepaymentRecord(@RequestParam Map<String, Object> params) {
		Query query = new Query(params);
		List<Map<String, Object>> list = zyUserService.conditionRepaymentRecord(query);
		int total = zyUserService.queryTotal8(query);
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		return R.ok().put("page", pageUtil);
	}
	
	@RequestMapping("/conditionUserCapitalRecord")
	public R conditionUserCapitalRecord(@RequestParam Map<String, Object> params) {
		Query query = new Query(params);
		List<Map<String, Object>> list = zyUserService.conditionUserCapitalRecord(query);
		int total = zyUserService.queryTotal9(query);
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		return R.ok().put("page", pageUtil);
	}
	
	/**
	 * 条件获取用户工作信息列表
	 * @param params
	 * @return
	 */
	@RequestMapping("/conditionUserCompanyInformation")
	public R conditionUserCompanyInformation(@RequestParam Map<String, Object> params) {
		Query query = new Query(params);
		List<Map<String, Object>> list = zyUserService.conditionUserCompanyInformation(query);
		int total = zyUserService.queryTotal12(query);
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		return R.ok().put("page", pageUtil);
	}
	
	/**
	 * 条件查询黑名单列表
	 * @param params
	 * @return
	 */
	@RequestMapping("/conditionUserBlackList")
	public R conditionUserBlackList(@RequestParam Map<String, Object> params) {
		Query query = new Query(params);
		List<Map<String, Object>> list = zyUserService.conditionUserBlackList(query);
		int total = zyUserService.queryTotal11(query);
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		return R.ok().put("page", pageUtil);
	}
	
	
	/**
	 * 条件获取联系人列表接口
	 * @param params
	 * @return
	 */
	@RequestMapping("/conditionUserContact")
	public R conditionUserContact(@RequestParam Map<String, Object> params) {
		Query query = new Query(params);
		List<Map<String, Object>> list = zyUserService.conditionUserContact(query);
		int total = zyUserService.queryTotal9(query);
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		return R.ok().put("page", pageUtil);
	}
	
	
	@RequestMapping("/conditionUserAuth")
	public R conditionUserAuth(@RequestParam Map<String, Object> params) {
		Query query = new Query(params);
		List<Map<String, Object>> list = zyUserService.conditionUserAuth(query);
		int total = zyUserService.queryTotal9(query);
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		return R.ok().put("page", pageUtil);
	}
	
	@RequestMapping("/conditionUserSchool")
	public R conditionUserSchool(@RequestParam Map<String, Object> params) {
		Query query = new Query(params);
		List<Map<String, Object>> list = zyUserService.conditionUserSchool(query);
		int total = zyUserService.queryTotal10(query);
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		return R.ok().put("page", pageUtil);
	}
	
	
	
	/**
	 * 贷侯管理页面
	 * @param params
	 * @return
	 */
	@RequestMapping("/AfterLoan")
	public R AfterLoan(@RequestParam Map<String, Object> params) {
		String string = params.get("verifyUser").toString();
		if (!StringUtils.isEmpty(string)) {
			SysUserEntity queryByUserName = sysUserService.queryByUserName(string);
			params.put("verifyUser", queryByUserName.getUserId());
		}
		
		Query query = new Query(params);
		List<Map<String, Object>> list = zyUserService.AfterLoan(query);
		int total = zyUserService.AfterLoanCount(query);
		PageUtils pageUtil = new PageUtils(list, total, query.getLimit(), query.getPage());
		return R.ok().put("page", pageUtil);
	}
	/**
	 * 用户个人信息
	 */
	@RequestMapping("/userInfo")
	public R queryuserInfo(@RequestParam Map<String, Object> params){
		String userId =params.get("userId").toString();
		Map<String, Object> result =zyUserService.queryuserInfo(userId);
		return R.ok().put("result", result);
	}
	
	
}
