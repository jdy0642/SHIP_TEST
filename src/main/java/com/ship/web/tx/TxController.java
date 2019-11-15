package com.ship.web.tx;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ship.web.pxy.Box;
import com.ship.web.pxy.CrawlingProxy;
import com.ship.web.pxy.PageProxy;
import com.ship.web.pxy.Trunk;

@RestController
@Transactional
@RequestMapping("/tx")
public class TxController {
	@Autowired Trunk<String> trunk;
	@Autowired Box<String> box;
	@Autowired CrawlingProxy crawler;
	@Autowired TxService txService; 
	@Autowired PageProxy pager;
	
	@GetMapping("/engcrawling")
	public Box<String> bringEng(){
		System.out.println("컨트롤러 들어옴: >>>>>");
		box = txService.engCrawling(trunk.get());
		return box;
	}

}
//	@GetMapping("/page/{pageno}/size/{pageSize}")
//	public Map<?,?>  list(@PathVariable String pageno,
//			@PathVariable String pageSize){
//		System.out.println("넘어온 페이지 넘버: "+pageno);
//		pager.setPageNum(pager.integer(pageno));
//		pager.setPageSize(pager.integer(pageSize));
//		pager.paging();
//		box.clear();
//		return trunk.get();
//	}


