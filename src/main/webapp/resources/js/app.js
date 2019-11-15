"use strict";
var app = app || {};
app = (()=>{
	const WHEN_ERR='호출하는 js 파일을 찾을 수 없습니다.';
	let _,js,css,img,testjs;
	let run =x=> $.getScript(x+'/resources/js/cmm/router.js',
			()=>{$.extend(new Session(x));
			onCreate()
			});
		
	let init =()=>{
		_ =$.ctx()
		js = $.js()
		css = $.css()
		img = $.img()
		testjs = js+'/cmm/test.js'
		
	}
	let onCreate =()=>{
		init();
		$.when(
			$.getScript(testjs)	
		)
		.done(()=>{
			test.onCreate()
			
		}
		)
		.fail(()=>{
			alert(WHEN_ERR)	
		}
		)
	};
	return {run};
})();

