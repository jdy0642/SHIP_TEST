package com.ship.web.pxy;

import java.util.Map;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


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