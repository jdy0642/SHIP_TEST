package com.ship.web.pxy;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ship.web.enums.Path;
@Component("crawler")
public class CrawlingProxy extends Proxy {
	@Autowired Box<String> box;
	
	  public Box<String> engChoose(Map<?,?> paramMap){
		 
//		  System.out.println("박스 choose"+box);
	      return engCrawling("https://endic.naver.com/?sLn=kr");
	   }
	private Box<String> engCrawling(String url) {
		box.clear();
	      try {
	    	  Document rawData = Jsoup.connect(url).timeout(10*1000).get();
	    	  	Elements artist = rawData.select("a[class=\"link\"] strong");
	    	  	Elements artist1 = rawData.select("a[class=\"link\"]");
	    	  	for(Element e : artist1) {
	    	  		box.add(e.text()+"\n");
	    	  		
	    	  	}
	    	  	System.out.println("box에 담긴: "+box);
	      } catch (Exception e) {
	         e.printStackTrace();
	      }
	      return box;
	}
}
