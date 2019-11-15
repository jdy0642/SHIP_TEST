package com.ship.web.pxy;

<<<<<<< HEAD
<<<<<<< HEAD
import java.util.ArrayList;
import java.util.List;
=======
>>>>>>> ljs
=======
import java.util.ArrayList;
import java.util.List;
>>>>>>> hsc
import java.util.Map;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

<<<<<<< HEAD
<<<<<<< HEAD
import com.ship.web.enums.Path;
import com.ship.web.utl.Printer;

@Component("crawler")
public class CrawlingProxy extends Proxy {
	@Autowired Box<String> box;
	@Autowired Printer p;
	public Box<String> cgvChoose(){
	      return cgvCrawling(Path.CRAWLING_CGV.toString()+3);
	   }//dd
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
=======
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
>>>>>>> hsc
	      } catch (Exception e) {
	         e.printStackTrace();
	      }
	      return box;
	}
}
<<<<<<< HEAD
=======

@Component("crawler")
public class CrawlingProxy extends Proxy {
   @Autowired Box<String> box;
   
     public Box<String> bugsChoose(Map<?,?> paramMap){
       
//        System.out.println("박스 choose"+box);
         return bugsCrawling("https://music.bugs.co.kr/chart");
      }
   private Box<String> bugsCrawling(String url) {
      box.clear();
         try {
            Document rawData = Jsoup.connect(url).timeout(10*1000).get();
               Elements artist = rawData.select("p[class=\"title\"] a");
               for(Element e : artist) {
                  box.add(e.text()+"\n");
                  
               }
               System.out.println("box에 담긴: "+box);
         } catch (Exception e) {
            e.printStackTrace();
         }
         return box;
   }
}
>>>>>>> ljs
=======
>>>>>>> hsc
