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
import com.ship.web.utl.Printer;

@Component("crawler")
public class CrawlingProxy extends Proxy {
	@Autowired Box<String> box;
	@Autowired Printer p;
	public Box<String> cgvChoose(){
	      return cgvCrawling(Path.CRAWLING_CGV.toString()+3);
	   }
	private Box<String> cgvCrawling(String url) {
		p.accept("\n url: "+url);
		box.clear();
	      try {
	    	  Document rawData = Jsoup.connect(url).timeout(10*1000).get();
	    	  	Elements artist = rawData.select("a strong[class=\"title\"]");
	    	  	Elements num = rawData.select("div strong[class=\"rank\"]");
	    	  	for(int i=0; i < num.size(); i++) {
	    	  		box.add(String.format("%s위 : %s\n",num.get(i).text().replace("No.",""),artist.get(i).text()));
	    	  	}
	    	  	/*for(Element e : artist) {
	    	  		box.add(e.text()+"\n");
	    	  	}*/
	    	  	p.accept(""+box);
	      } catch (Exception e) {
	         e.printStackTrace();
	      }
	      return box;
	}
}
