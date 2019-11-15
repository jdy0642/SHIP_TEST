package com.ship.web.enums;

public enum Path {
	UPLOAD_PATH, CRAWLING_CGV, CRAWLING_BUGS;
	@Override
	public String toString() {
		String result = "";
		switch (this) {
		case UPLOAD_PATH:
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
    }
}
