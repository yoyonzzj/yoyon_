package com.test;

import java.io.File;
import java.util.Date;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import io.renren.xcommon.core.enums.DelCode;
import io.renren.xcommon.core.utils.UUIDUtil;
import io.renren.xcommon.dao.ZyExternalBlacklistDao;
import io.renren.xcommon.dao.ZyUserDao;
import io.renren.xcommon.entity.ZyExternalBlacklistEntity;
import io.renren.xcommon.utils.excel.ImportExcel;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath*:spring-*.xml","classpath*:renren-shiro.xml","classpath*:renren-api.xml" })
public class AddBlackTest {
	@Autowired
	private ZyExternalBlacklistDao zyExternalBlacklistDao;
	@Test
	public void testZhuxuan(){
		try {
			File file=new File("D:/black/副本借款端黑名单0822.xlsx");
			ImportExcel ei = new ImportExcel(file, 0, 0);
			List<ZyExternalBlacklistEntity> list = ei.getDataList(ZyExternalBlacklistEntity.class);
			System.out.println("读取到的数据条数："+list.size());
			Date date = new Date();
			int i=0;
			int i1=0;
			for (ZyExternalBlacklistEntity zyExternalBlacklistEntity : list) {
				if(StringUtils.isNotBlank(zyExternalBlacklistEntity.getPhone())
						&&StringUtils.isNotBlank(zyExternalBlacklistEntity.getIdcardNo())
						&&StringUtils.isNotBlank(zyExternalBlacklistEntity.getUsername())){
					int count=zyExternalBlacklistDao.queryCountByIdCard(zyExternalBlacklistEntity.getIdcardNo());
					System.out.println(zyExternalBlacklistEntity);
					if(count<=0){
						ZyExternalBlacklistEntity z=new ZyExternalBlacklistEntity();
						z.setIdcardNo(zyExternalBlacklistEntity.getIdcardNo());
						z.setUsername(zyExternalBlacklistEntity.getUsername());
						z.setPhone(zyExternalBlacklistEntity.getPhone());
						if(StringUtils.isNotBlank(zyExternalBlacklistEntity.getType())){
							z.setType(zyExternalBlacklistEntity.getType());
						}
						z.setOverdue(zyExternalBlacklistEntity.getOverdue());
						z.setId(UUIDUtil.creatUUID());
						z.setCreateDate(date);
						z.setUpdateDate(date);
						z.setDelFlag(DelCode.DEL_FLAG_NORMAL);
						zyExternalBlacklistDao.save(z);
						i++;
					}else{
						System.out.println(zyExternalBlacklistEntity+"已经存在");
						i1++;
					}
					
				}
			}
			System.out.println("成功插入:"+i);
			System.out.println("失败插入:"+i1);
			
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	
	

}