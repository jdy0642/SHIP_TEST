package com.ship.web.tx;

import java.util.Map;
<<<<<<< HEAD
<<<<<<< HEAD
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ship.web.pxy.ArticleProxy;
import com.ship.web.pxy.Box;
import com.ship.web.pxy.CrawlingProxy;
@Service
public class TxService {
	@Autowired CrawlingProxy crawler;
	@Autowired ArticleProxy art;
	@Autowired Box<String> box;
	//dd
	public Box<String> cgvCrawling(){
		return crawler.cgvChoose();
	}
}
=======

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ship.web.pxy.Box;
import com.ship.web.pxy.CrawlingProxy;

@Service
public class TxService {
   @Autowired CrawlingProxy crawler;
   @Autowired Box<String> box;
   
   public Box<String> crawling(Map<?,?> paramMap){
      return crawler.bugsChoose(paramMap);
   }
}
>>>>>>> ljs
=======

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ship.web.pxy.Box;
import com.ship.web.pxy.CrawlingProxy;

@Service
public class TxService {
	@Autowired CrawlingProxy crawler;
	@Autowired Box<String> box;
	
	public Box<String> engCrawling(Map<?,?> paramMap){
		return crawler.engChoose(paramMap);
	}
}
>>>>>>> hsc
