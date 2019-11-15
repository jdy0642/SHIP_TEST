package com.ship.web.tx;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ship.web.brd.Article;
import com.ship.web.cmm.ISupplier;
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
	
	@GetMapping("/engcrawling/")
	public void bringEng(){
		
		box = txService.crawling(trunk.get());
	}
	@GetMapping("/page/{pageno}/size/{pageSize}")
	public Map<?,?>  list(@PathVariable String pageno,
			@PathVariable String pageSize){
		System.out.println("넘어온 페이지 넘버: "+pageno);
		pager.setPageNum(pager.integer(pageno));
		pager.setPageSize(pager.integer(pageSize));
		pager.paging();
		box.clear();
		Supplier<List<Article>> s = () -> articleMapper.selectList(pager);
		p.accept("해당 페이지\n"+s.get());
		trunk.put(Arrays.asList("articles", "pxy"), Arrays.asList(s.get(),pager));
		return trunk.get();
	}
}
