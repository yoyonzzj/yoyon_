package com.test;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import io.renren.xcommon.core.utils.UUIDUtil;
import io.renren.xcommon.dao.ZyExternalBlacklistDao;
import io.renren.xcommon.dao.ZyInteriorBlacklistDao;
import io.renren.xcommon.dao.ZyUserBlackDao;
import io.renren.xcommon.entity.ZyExternalBlacklistEntity;
import io.renren.xcommon.entity.ZyUserBlackEntity;
import io.renren.xcommon.utils.CardUtil;

/** 
* @author 作者： zhuxuan
* @version 创建时间：2017年8月31日
*/
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath*:spring-*.xml","classpath*:renren-shiro.xml","classpath*:renren-api.xml" })
public class TestZhuxuanBus {
	
	@Autowired
	private ZyUserBlackDao zyUserBlackDao;
	@Autowired
	private ZyExternalBlacklistDao zyExternalBlacklistDao;
	@Autowired
	private ZyInteriorBlacklistDao zyInteriorBlacklistDao;
	

	/*
	 * 迁移外部黑名单和内部黑名单到黑名单
	 */
	@Test
	public void TestBlackChange(){
		
		int sussess_count = 0;
		int error_count = 0;
		
		//获取外部黑名单集合
		List<ZyExternalBlacklistEntity> list = zyExternalBlacklistDao.queryList(new HashMap<>());
		
		//迁移外部黑名单到黑名单
		for (ZyExternalBlacklistEntity external : list) {
			ZyUserBlackEntity blackEntity = new ZyUserBlackEntity();
			blackEntity.setId(UUIDUtil.creatUUID());
			blackEntity.setUserId(null);
			blackEntity.setPhone(external.getPhone());
			blackEntity.setUsername(external.getUsername());
			blackEntity.setIdcard(external.getIdcardNo());
			blackEntity.setOverdueDays(null);
			blackEntity.setResources(external.getType());
			
			Map<String, Object> carInfo = CardUtil.getCarInfo(external.getIdcardNo());
			blackEntity.setGender((int)carInfo.get("sex"));
			blackEntity.setAge((int)carInfo.get("age"));
			
			blackEntity.setAddr(null);
			blackEntity.setOperatorId(1);
			blackEntity.setOperatorName("admin");
			blackEntity.setType(4);
			blackEntity.setReason("外部平台导入本平台库");
			
			blackEntity.setCreateDate(new Date());
			blackEntity.setUpdateDate(new Date());
			blackEntity.setDelFlag("0");
			blackEntity.setVersion(new Long("0"));
			
			int save = zyUserBlackDao.save(blackEntity);
			if(save ==1){
				sussess_count++;
			}else{
				error_count++;
			}

			
		}
		
		
	}
	
}
