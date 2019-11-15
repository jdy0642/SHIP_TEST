<<<<<<< HEAD
<<<<<<< HEAD
"use strict";
var app = app || {};
app = (()=>{
	const WHEN_ERR='호출하는 js 파일을 찾을 수 없습니다.';
	let _,js,css,img,testjs;
	let run =x=> $.getScript(x+'/resources/js/cmm/router.js',
			()=>{$.extend(new Session(x));
			onCreate()
			});
=======
"use strict"
var app = app || {}
app = (()=>{
	const WHEN_ERR='호출하는 js 파일을 찾을 수 없습니다.'
	let _,js,css,img,authjs
	let run =x=> $.getScript(x+'/resources/js/cmm/router.js',
			()=>{$.extend(new Session(x))
			onCreate()
			})
>>>>>>> ljs
		
	let init =()=>{
		_ =$.ctx()
		js = $.js()
		css = $.css()
		img = $.img()
<<<<<<< HEAD
		testjs = js+'/cmm/test.js'
		
	}
	let onCreate =()=>{
		init();
		$.when(
			$.getScript(testjs)	
		)
		.done(()=>{
			test.onCreate()
=======
		authjs = js+'/cmm/auth.js'
		
=======
"use strict"; // 확실하게 코딩해라.
var app = app || {}; // app가있으면 가져다쓰고 없으면 app를 만들어라
app = (()=>{
	const WHEN_ERR = '호출하는 JS파일을 찾을 수 없습니다.'; // 상수
	let _,js,authjs; // 맴버변수, _<-임시변수
	let run =x=> $.getScript(x+'/resources/js/cmm/router.js',
			()=>{ $.extend(new Session(x));
			onCreate()
		});
	let init =()=>{
		_ = $.ctx();
		js = $.js();
		authjs = js+'/cmm/auth.js';
>>>>>>> yyh
	}
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(authjs)
<<<<<<< HEAD
			
		)
		.done(()=>{
			auth.onCreate()
>>>>>>> ljs
			
		}
		)
		.fail(()=>{
			alert(WHEN_ERR)	
		}
		)
<<<<<<< HEAD
	};
	return {run};
})();
=======
	}
	return {run}
})()
>>>>>>> ljs

=======
		)
		.done(()=>{
			auth.onCreate()		
		}
		)
		.fail(()=>{			
			alert(WHEN_ERR)
		}
		)
	}
	return {run}
		
})();
>>>>>>> yyh
