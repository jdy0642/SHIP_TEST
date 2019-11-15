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
	
	  public Box<String> choose(Map<?,?> paramMap){
		  String url = "";
		  switch (string(paramMap.get("srch"))) {
		case "인기글":
			for(int i =1; i<5; i++) {
				box = crawling(Path.CRAWLING_TARGET.toString()+i);
			}
			break;
		default:
				box = crawling("http://"+paramMap.get("site")+"/");
			break;
		}
	      return box;
	   }
	private Box<String> crawling(String url) {
		box.clear();
	      try {
	    	  Document rawData = Jsoup.connect(url).timeout(10*1000).get();
	    	  	Elements artist = rawData.select("div[class=\"article-list-item__title\"] span");
	    	  	for(Element e : artist) {
	    	  		box.add(e.text()+"\n ***************\n");
	    	  	}
	      } catch (Exception e) {
	         e.printStackTrace();
	      }
	      return box;
	}
}
