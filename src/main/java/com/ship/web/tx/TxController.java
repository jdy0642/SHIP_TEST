package com.ship.web.tx;
<<<<<<< HEAD
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.core.task.AsyncListenableTaskExecutor;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ship.web.pxy.Trunk;
import com.ship.web.pxy.Box;
import com.ship.web.pxy.CrawlingProxy;
import com.ship.web.utl.Printer;
=======

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ship.web.pxy.Box;
import com.ship.web.pxy.CrawlingProxy;
import com.ship.web.pxy.PageProxy;
import com.ship.web.pxy.Trunk;
>>>>>>> ljs

@RestController
@Transactional
@RequestMapping("/tx")
public class TxController {
<<<<<<< HEAD
	//@Autowired HashMap<String, String> map;
	@Autowired Printer p;
	@Autowired TxService txService; 
	@Autowired Trunk<Box<String>> trunk;
	@Autowired CrawlingProxy crawler;
	@Autowired Box<String> box;
	//dd
	@GetMapping("/cgvcrawling")
	public Map<?,?> bringCgv(){
		trunk.put(Arrays.asList("list"),Arrays.asList(txService.cgvCrawling()));
		return trunk.get();
	}
}
=======
   @Autowired Trunk<String> trunk;
   @Autowired Box<String> box;
   @Autowired CrawlingProxy crawler;
   @Autowired TxService txService; 
   @Autowired PageProxy pager;
   
   @GetMapping("/bugscrawling")
   public Box<String> bringBugs(){
      System.out.println("컨트롤러 들어옴: >>>>>");
      box = txService.crawling(trunk.get());
      return box;
   }
}
>>>>>>> ljs
