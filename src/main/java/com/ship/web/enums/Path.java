package com.ship.web.enums;

public enum Path {
<<<<<<< HEAD
<<<<<<< HEAD
	UPLOAD_PATH, CRAWLING_CGV, CRAWLING_BUGS;
=======
	UPLOAD_PATH, CRAWLING_OPGG;
>>>>>>> ljs
=======
	UPLOAD_PATH, CRAWLING_TARGET;
>>>>>>> hsc
	@Override
	public String toString() {
		String result = "";
		switch (this) {
		case UPLOAD_PATH:
<<<<<<< HEAD
<<<<<<< HEAD
			result = "C:\\Users\\User\\govern\\eGovFrame-3.8\\workspace\\ship\\src\\main\\webapp\\resources\\upload\\";
			break;
		
		case CRAWLING_CGV:
			result= "http://www.cgv.co.kr/movies/?lt=";
			break;
			
		case CRAWLING_BUGS:
			result= "https://music.bugs.co.kr/chart/track/realtime/total?chartdate=20191115&charthour=";
			break;
		}
		return result;
=======
			result = "C:\\Users\\User\\git\\EGOV_SHIP\\src\\main\\webapp\\resources\\upload\\";
			break;
		case CRAWLING_OPGG : 
			result= "https://talk.op.gg/s/lol/free?page=";
			break;
		}
        return result;
>>>>>>> ljs
=======
			result = "C:\\Users\\User\\govern\\eGovFrame-3.8\\workspace\\ship\\src\\main\\webapp\\resources\\upload\\";
			break;
		
		case CRAWLING_TARGET:
			result= "https://talk.op.gg/s/lol/free?page=";
			break;
		}
		return result;
>>>>>>> hsc
    }
}
