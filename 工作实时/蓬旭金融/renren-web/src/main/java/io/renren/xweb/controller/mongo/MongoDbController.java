package io.renren.xweb.controller.mongo;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.commons.io.FilenameUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.mongodb.gridfs.GridFSDBFile;

import io.renren.xcommon.core.exception.BusinessException;
import io.renren.xcommon.core.utils.Encodes;
import io.renren.xcommon.mongo.MongoDbService;

@Controller
@RequestMapping("/db/mongod")
public class MongoDbController {
	private Logger logger = LoggerFactory.getLogger(getClass());

	@Autowired
	private MongoDbService mongoDbService;

	@RequestMapping("save")
	@ResponseBody
	public Object save() throws Exception {
		FileInputStream fs = new FileInputStream("D:\\aaa.png");
		String id=mongoDbService.save(fs, "index.png", "png");
		return id;
	}

//	/***
//	 ** 异常处理
//	 ***/
//	@org.springframework.web.bind.annotation.ExceptionHandler(Exception.class)
//	public @ResponseBody Object ExceptionHandler(Exception exceededException) {
//		if (exceededException instanceof MaxUploadSizeExceededException) {
//			throw new BusinessException("上传图片太大l !",new Throwable());
//		} else {
//			return "上传图片太大";
//		}
//	}

	@RequestMapping(value = "upload")
	@ResponseBody
	public Object upload(@RequestParam(value = "file") MultipartFile file) throws IOException {
		if (file.isEmpty()) {
			throw new BusinessException("文件不能为空!", new Throwable());
		}
		logger.info("上传文件大小--->"+(file.getSize()/1024)+"KB");
		if (file.getSize() >= (5 * 1024 * 1024)) {
			throw new BusinessException("文件大小不能超过5M!", new Throwable());
		}
		String fileName = file.getOriginalFilename();
		String fileType = FilenameUtils.getExtension(fileName);
		// 表达式对象
		Pattern p = Pattern.compile("(jpg|gif|png)");
		// 创建 Matcher 对象
		Matcher m = p.matcher(fileType);
		if (!m.matches()) {
			throw new BusinessException("上传文件必须是图片!", new Throwable());
		}
		Map<String, Object> result = new HashMap<>();;
		try {
			String mongoId = mongoDbService.save(file.getInputStream(), fileName, FilenameUtils.getExtension(fileName));// 获取mongoID
			result = new HashMap<String, Object>();
			result.put("fileid", mongoId);// 保存
			result.put("code", "0");
		} catch (Exception e) {
			result.put("code", "500");
		}
		return result;
	}
	
	

	// /**
	// * 上传单张图片
	// *
	// * @param request
	// * @param response
	// * @return
	// * @throws Exception
	// */
	// @RequestMapping("upload")
	// @ResponseBody
	// public Object upload(HttpServletRequest request, HttpServletResponse
	// response) throws Exception {
	// // 判断提交的请求是否包含文件
	// boolean isMultipart = ServletFileUpload.isMultipartContent(request);
	// if (!isMultipart) {
	// throw new BusinessException("请使用正确的上传方式!", new Throwable());
	// }
	// List<FileItem> uploadFiles = getFiles(request);
	// if (uploadFiles.isEmpty()) {
	// throw new BusinessException("上传文件不能为空!", new Throwable());
	// }
	// if (uploadFiles.size() > 1) {
	// throw new BusinessException("只能上传1个文件!", new Throwable());
	// }
	// FileItem item = uploadFiles.get(0);
	// if (item.getSize() > (5 * 1024 * 1024)) {
	// throw new BusinessException("上传文件大小不能超过5M!", new Throwable());
	// }
	// String name = item.getName();// 获得文件名
	// String fileType = FilenameUtils.getExtension(name);
	// // 表达式对象
	// Pattern p = Pattern.compile("(jpg|gif|png)");
	// // 创建 Matcher 对象
	// Matcher m = p.matcher(fileType);
	// if (!m.matches()) {
	// throw new BusinessException("上传文件必须是图片!", new Throwable());
	// }
	// Map<String, Object> result = new HashMap<String, Object>();
	// String mongoId = mongoDbService.save(item.getInputStream(), name,
	// FilenameUtils.getExtension(name));// 获取mongoID
	// result.put("fileid", mongoId);
	// return result;
	// }

	/**
	 * 获取所有上传文件
	 * 
	 * @param request
	 * @return
	 * @throws FileUploadException
	 */
	private List<FileItem> getFiles(HttpServletRequest request) throws FileUploadException {
		DiskFileItemFactory factory = new DiskFileItemFactory();
		factory.setSizeThreshold(1024);
		ServletFileUpload upload = new ServletFileUpload(factory);
		upload.setHeaderEncoding("UTF-8");
		// upload.setSizeMax(5 * 1024 * 1024);// 设置上传大小5M
		List<FileItem> items = upload.parseRequest(request);
		List<FileItem> uploadFiles = new ArrayList<>();
		for (FileItem item : items) {
			if (!item.isFormField()) {// 如果是文件类型
				uploadFiles.add(item);
			}
		}
		return uploadFiles;
	}

	@RequestMapping(value = "/picture/{id}", method = RequestMethod.GET)
	public void picture(HttpServletResponse response, @PathVariable String id) {

		try {
			GridFSDBFile image = mongoDbService.findByMongoId(id);
			if (null != image) {
				response.setContentType("application/octet-stream; charset=utf-8");
				response.setHeader("Content-Disposition", "attachment; filename="
						+ Encodes.urlEncode(image.getFilename()));
				image.writeTo(response.getOutputStream());
			}
		} catch (Exception e) {
			logger.error("查询mongo图片异常", e);
		}
	}

}
