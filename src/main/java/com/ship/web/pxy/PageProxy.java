package com.ship.web.pxy;
<<<<<<< HEAD
<<<<<<< HEAD
import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.ship.web.utl.Printer;
=======
=======
>>>>>>> hsc

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;


<<<<<<< HEAD
>>>>>>> ljs
=======
>>>>>>> hsc
import lombok.Data;
@Data @Lazy
@Component("pager")
public class PageProxy extends Proxy {
<<<<<<< HEAD
<<<<<<< HEAD
   private String search;
   private int totalCount,endRow,startRow,
            pageCount,pageNum,pageSize,startPage,endPage,
            blockCount,blockNum,prevBlock,nextBlock;
   private boolean existPrev,existNext;
   private final int BLOCK_SIZE = 5;
  
   private List<Integer> pages;
   @Autowired Printer p;


   @SuppressWarnings("unused")
   public void paging() {
      //Supplier<String> s = () -> articleMapper.countArticle();
      totalCount = 4;//Integer.parseInt(s.get());
      pageCount = (totalCount%pageSize)==0
                        ?(totalCount/pageSize)
                              :(totalCount/pageSize)+1;
      pageCount =(pageCount==0)?0:pageCount;
      startRow = (pageNum-1)*pageSize;
      
      endRow = (pageNum == pageCount) ? totalCount-1 : (pageNum*pageSize)-1 ;
      
      blockCount = (pageCount%BLOCK_SIZE)==0
                        ?(pageCount/BLOCK_SIZE)
                              :(pageCount/BLOCK_SIZE)+1;
      blockNum = (pageNum - 1) / BLOCK_SIZE;
      startPage =(blockNum*BLOCK_SIZE)+1;
      endPage = (blockCount!=blockNum+1) ? startPage+(BLOCK_SIZE-1) : pageCount; 
      existPrev = (blockNum!=0); 
      existNext = (blockNum!=(blockCount-1));
      pages=new ArrayList<>();
      for(int i = startPage ; i<=endPage;i++) { pages.add(i); }
      
      nextBlock = startPage + BLOCK_SIZE;
      prevBlock = startPage - BLOCK_SIZE;
            
   }
   public int parseInt(String param) {
      Function<String,Integer> f=s ->Integer.parseInt(s);
      return f.apply(param);
   }
 

}

=======
      private String search;
      private int totalCount,endRow,startRow,
               pageCount,pageNum,pageSize,startPage,endPage,
               blockCount,blockNum,prevBlock,nextBlock;
      private boolean existPrev,existNext;
      private final int BLOCK_SIZE = 4;
      private List<Integer> pages;
      public void paging() {
            totalCount = 100;
            pageCount = (totalCount%pageSize)==0
                              ?(totalCount/pageSize)
                                    :(totalCount/pageSize)+1;
            pageCount =(pageCount==0)?0:pageCount;
            startRow = (pageNum-1)*pageSize;
            endRow = (pageNum == pageCount) ? totalCount-1 : (pageNum*pageSize)-1 ;
            blockCount = (pageCount%BLOCK_SIZE)==0
                              ?(pageCount/BLOCK_SIZE)
                                    :(pageCount/BLOCK_SIZE)+1;
            blockNum = (pageNum - 1) / BLOCK_SIZE;
            startPage =(blockNum*BLOCK_SIZE)+1;
            endPage = (blockCount!=blockNum+1) ? startPage+(BLOCK_SIZE-1) : pageCount; 
            existPrev = (blockNum!=0); 
            existNext = (blockNum!=(blockCount-1));
            pages=new ArrayList<>();
            for(int i = startPage ; i<=endPage;i++) { pages.add(i); }
            nextBlock = startPage + BLOCK_SIZE;
            prevBlock = startPage - BLOCK_SIZE;
         }
}
>>>>>>> ljs
=======
	   private String search;
	   private int totalCount,endRow,startRow,
	            pageCount,pageNum,pageSize,startPage,endPage,
	            blockCount,blockNum,prevBlock,nextBlock;
	   private boolean existPrev,existNext;
	   private final int BLOCK_SIZE = 4;
	   private List<Integer> pages;
	   public void paging() {
		      totalCount = 100;
		      pageCount = (totalCount%pageSize)==0
		                        ?(totalCount/pageSize)
		                              :(totalCount/pageSize)+1;
		      pageCount =(pageCount==0)?0:pageCount;
		      startRow = (pageNum-1)*pageSize;
		      endRow = (pageNum == pageCount) ? totalCount-1 : (pageNum*pageSize)-1 ;
		      blockCount = (pageCount%BLOCK_SIZE)==0
		                        ?(pageCount/BLOCK_SIZE)
		                              :(pageCount/BLOCK_SIZE)+1;
		      blockNum = (pageNum - 1) / BLOCK_SIZE;
		      startPage =(blockNum*BLOCK_SIZE)+1;
		      endPage = (blockCount!=blockNum+1) ? startPage+(BLOCK_SIZE-1) : pageCount; 
		      existPrev = (blockNum!=0); 
		      existNext = (blockNum!=(blockCount-1));
		      pages=new ArrayList<>();
		      for(int i = startPage ; i<=endPage;i++) { pages.add(i); }
		      nextBlock = startPage + BLOCK_SIZE;
		      prevBlock = startPage - BLOCK_SIZE;
		   }
}
>>>>>>> hsc
