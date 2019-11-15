<<<<<<< HEAD
"use strict"
var auth_vue = auth_vue || {}
auth_vue = {
	join_head : ()=>{
		return '<head>'+
        '    <meta charset="utf-8">'+
        '    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">'+
        '    <meta name="description" content="">'+
        '    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">'+
        '    <meta name="generator" content="Jekyll v3.8.5">'+
        '    <title>Checkout example · Bootstrap</title>'+
        '    <link rel="canonical" href="https://getbootstrap.com/docs/4.3/examples/checkout/">'+
        '    <!-- Bootstrap core CSS -->'+
        '<link href="https://getbootstrap.com/docs/4.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">'+
        '    <style>'+
        '      .bd-placeholder-img {'+
        '        font-size: 1.125rem;'+
        '        text-anchor: middle;'+
        '        -webkit-user-select: none;'+
        '        -moz-user-select: none;'+
        '        -ms-user-select: none;'+
        '        user-select: none;'+
        '      }'+
        '      @media (min-width: 768px) {'+
        '        .bd-placeholder-img-lg {'+
        '          font-size: 3.5rem;'+
        '        }'+
        '      }'+
        '    </style>'+
        '    <!-- Custom styles for this template -->'+
        '    <link href="https://getbootstrap.com/docs/4.3/examples/checkout/form-validation.css" rel="stylesheet">'+
        '  </head>'
		},
	join_body : ()=>{
		return '<div class="container">'+
		'  <div class="py-5 text-center">'+
		'    <img class="d-block mx-auto mb-4" src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">'+
		'    <h2>Checkout form</h2>'+
		'    <p class="lead">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>'+
		'  </div>'+
		'  <div class="row">'+
		'    <div class="col-md-4 order-md-2 mb-4">'+
		'      <h4 class="d-flex justify-content-between align-items-center mb-3">'+
		'        <span class="text-muted">Your cart</span>'+
		'        <span class="badge badge-secondary badge-pill">3</span>'+
		'      </h4>'+
		'      <ul class="list-group mb-3">'+
		'        <li class="list-group-item d-flex justify-content-between lh-condensed">'+
		'          <div>'+
		'            <h6 class="my-0">Product name</h6>'+
		'            <small class="text-muted">Brief description</small>'+
		'          </div>'+
		'          <span class="text-muted">$12</span>'+
		'        </li>'+
		'        <li class="list-group-item d-flex justify-content-between lh-condensed">'+
		'          <div>'+
		'            <h6 class="my-0">Second product</h6>'+
		'            <small class="text-muted">Brief description</small>'+
		'          </div>'+
		'          <span class="text-muted">$8</span>'+
		'        </li>'+
		'        <li class="list-group-item d-flex justify-content-between lh-condensed">'+
		'          <div>'+
		'            <h6 class="my-0">Third item</h6>'+
		'            <small class="text-muted">Brief description</small>'+
		'          </div>'+
		'          <span class="text-muted">$5</span>'+
		'        </li>'+
		'        <li class="list-group-item d-flex justify-content-between bg-light">'+
		'          <div class="text-success">'+
		'            <h6 class="my-0">Promo code</h6>'+
		'            <small>EXAMPLECODE</small>'+
		'          </div>'+
		'          <span class="text-success">-$5</span>'+
		'        </li>'+
		'        <li class="list-group-item d-flex justify-content-between">'+
		'          <span>Total (USD)</span>'+
		'          <strong>$20</strong>'+
		'        </li>'+
		'      </ul>'+
		'   <form class="card p-2">'+
		'        <div class="input-group">'+
		'          <input type="text" class="form-control" placeholder="Promo code">'+
		'          <div class="input-group-append">'+
		'    <div id="btn_existId"></div>'+
		'          </div>'+
		'        </div>'+
		'      </form>'+
		'    </div>'+
		'    <div class="col-md-8 order-md-1">'+
		'      <h4 class="mb-3">회원가입</h4>'+
		'      <form class="needs-validation" novalidate="">'+
		'        <div class="row">'+
		'          <div class="col-md-6 mb-3">'+
		'            <label for="userid">ID</label>'+
		'            <input type="text" class="form-control" id="uid" placeholder="" value="" required="">'+
		'            <div class="invalid-feedback">'+
		'              Valid first name is required.'+
		'            </div>'+
		'          </div>'+
		'          <div class="col-md-6 mb-3">'+
		'            <label for="password">ID 중복체크</label>'+
		'            <input type="text" class="form-control" id="dupl_check" placeholder="" value="" required="">'+
		'            <div class="invalid-feedback">'+
		'              Valid last name is required.'+
		'            </div>'+
		'          </div>'+
		'        </div>'+
		'       <div class="mb-3">'+
		'          <label for="username">Username</label>'+
		'          <div class="input-group">'+
		'            <div class="input-group-prepend">'+
		'              <span class="input-group-text">@</span>'+
		'            </div>'+
		'            <input type="text" class="form-control" id="uname" placeholder="Username" required="">'+
		'            <div class="invalid-feedback" style="width: 100%;">'+
		'              Your username is required.'+
		'            </div>'+
		'          </div>'+
		'        </div>'+
		'       <div class="mb-3">'+
		'          <label for="address2">PASSWORD</label>'+
		'          <input type="text" class="form-control" id="upw" placeholder="">'+
		'        </div>'+
		'       <div class="mb-3">'+
		'          <label for="email">Email <span class="text-muted">(Optional)</span></label>'+
		'          <input type="email" class="form-control" id="email" placeholder="you@example.com">'+
		'          <div class="invalid-feedback">'+
		'            Please enter a valid email address for shipping updates.'+
		'          </div>'+
		'        </div>'+
		'	       <div class="mb-3">'+
		'          <label for="address">Address</label>'+
		'          <input type="text" class="form-control" id="address" placeholder="1234 Main St" required="">'+
		'          <div class="invalid-feedback">'+
		'            Please enter your shipping address.'+
		'          </div>'+
		'        </div>'+
	
		'       <div class="row">'+
		'          <div class="col-md-5 mb-3">'+
		'            <label for="country">Country</label>'+
		'            <select class="custom-select d-block w-100" id="country" required="">'+
		'              <option value="">Choose...</option>'+
		'              <option>United States</option>'+
		'            </select>'+
		'            <div class="invalid-feedback">'+
		'              Please select a valid country.'+
		'            </div>'+
		'          </div>'+
		'          <div class="col-md-4 mb-3">'+
		'            <label for="state">State</label>'+
		'            <select class="custom-select d-block w-100" id="state" required="">'+
		'              <option value="">Choose...</option>'+
		'              <option>California</option>'+
		'            </select>'+
		'            <div class="invalid-feedback">'+
		'              Please provide a valid state.'+
		'            </div>'+
		'          </div>'+
		'          <div class="col-md-3 mb-3">'+
		'            <label for="zip">Zip</label>'+
		'            <input type="text" class="form-control" id="zip" placeholder="" required="">'+
		'            <div class="invalid-feedback">'+
		'              Zip code required.'+
		'            </div>'+
		'          </div>'+
		'        </div>'+
		'        <hr class="mb-4">'+
		'        <div class="custom-control custom-checkbox">'+
		'          <input type="checkbox" class="custom-control-input" id="same-address">'+
		'          <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>'+
		'        </div>'+
		'        <div class="custom-control custom-checkbox">'+
		'          <input type="checkbox" class="custom-control-input" id="save-info">'+
		'          <label class="custom-control-label" for="save-info">Save this information for next time</label>'+
		'        </div>'+
		'        <hr class="mb-4">'+
		'       <h4 class="mb-3">Payment</h4>'+
		'       <div class="d-block my-3">'+
		'          <div class="custom-control custom-radio">'+
		'            <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked="" required="">'+
		'            <label class="custom-control-label" for="credit">Credit card</label>'+
		'          </div>'+
		'          <div class="custom-control custom-radio">'+
		'            <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required="">'+
		'            <label class="custom-control-label" for="debit">Debit card</label>'+
		'          </div>'+
		'          <div class="custom-control custom-radio">'+
		'            <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required="">'+
		'            <label class="custom-control-label" for="paypal">PayPal</label>'+
		'          </div>'+
		'        </div>'+
		'        <div class="row">'+
		'          <div class="col-md-6 mb-3">'+
		'            <label for="cc-name">Name on card</label>'+
		'            <input type="text" class="form-control" id="cc-name" placeholder="" required="">'+
		'            <small class="text-muted">Full name as displayed on card</small>'+
		'            <div class="invalid-feedback">'+
		'              Name on card is required'+
		'            </div>'+
		'          </div>'+
		'          <div class="col-md-6 mb-3">'+
		'            <label for="cc-number">Credit card number</label>'+
		'            <input type="text" class="form-control" id="cc-number" placeholder="" required="">'+
		'            <div class="invalid-feedback">'+
		'              Credit card number is required'+
		'            </div>'+
		'          </div>'+
		'        </div>'+
		'        <div class="row">'+
		'          <div class="col-md-3 mb-3">'+
		'            <label for="cc-expiration">Expiration</label>'+
		'            <input type="text" class="form-control" id="cc-expiration" placeholder="" required="">'+
		'            <div class="invalid-feedback">'+
		'              Expiration date required'+
		'            </div>'+
		'          </div>'+
		'          <div class="col-md-3 mb-3">'+
		'            <label for="cc-cvv">CVV</label>'+
		'            <input type="text" class="form-control" id="cc-cvv" placeholder="" required="">'+
		'            <div class="invalid-feedback">'+
		'              Security code required'+
		'            </div>'+
		'          </div>'+
		'        </div>'+
		'        <hr class="mb-4">'+
		'<div id="btn_join"></div>'+
		'      </form>'+
		'    </div>'+
		'  </div>'+
		'	 <footer class="my-5 pt-5 text-muted text-center text-small">'+
		'    <p class="mb-1">© 2017-2019 Company Name</p>'+
		'    <ul class="list-inline">'+
		'      <li class="list-inline-item"><a href="#">Privacy</a></li>'+
		'      <li class="list-inline-item"><a href="#">Terms</a></li>'+
		'      <li class="list-inline-item"><a href="#">Support</a></li>'+
		'    </ul>'+
		'  </footer>'+
		'</div>'+''
		},
	login_head: x=>{
		return '<head>'+
		'  <meta charset="UTF-8">'+
		'  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">'+
		'  <title>Document</title>'+
		'  '+
		'  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">'+
		'   <meta charset="utf-8">'+
		'    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">'+
		'    <meta name="description" content="">'+
		'    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">'+
		'    <meta name="generator" content="Jekyll v3.8.5">'+
		'    <title>Signin Template · Bootstrap</title>'+
		'    <link rel="canonical" href="https://getbootstrap.com/docs/4.3/examples/sign-in/">'+
		'    <style>'+
		'      .bd-placeholder-img {'+
		'        font-size: 1.125rem;'+
		'        text-anchor: middle;'+
		'        -webkit-user-select: none;'+
		'        -moz-user-select: none;'+
		'        -ms-user-select: none;'+
		'        user-select: none;'+
		'      }'+
		'      @media (min-width: 768px) {'+
		'        .bd-placeholder-img-lg {'+
		'          font-size: 3.5rem;'+
		'        }'+
		'      }'+
		'    </style>'+
		'    <!-- Custom styles for this template -->'+
		'    <link href="'+x.css+'/signin.css" rel="stylesheet">'+
		'    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">'+
		'</head>'
		},
	login_body: x=>{
			return '<body class="text-center">'+
			'  <form id="form_join" class="form-signin">'+
			'    <img class="mb-4" src="'+x.img+'/bootstrap-solid.svg" alt="" width="72" height="72">'+
			'    <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>'+
			'    <label for="inputEmail" class="sr-only">Email address</label>'+
			'    <input type="text" id="uid" value="a" class="form-control" placeholder="id" required="" autofocus="">'+
			'    <label for="inputPassword" class="sr-only">Password</label>'+
			'    <input type="password" id="upw" value="1" class="form-control" placeholder="Password" required="">'+
			'    <div class="checkbox mb-3">'+
			'      <label>'+
			'       <a id="a_go_join" href="#">회원가입</a> '+
			'      </label>'+
			'      <label>'+
			'       <a id="a_go_admin" href="#">관리자모드</a> '+
			'      </label>'+
			'    </div>'+
			'    <div id="btn_login"> </div>'+
			'    <p class="mt-5 mb-3 text-muted">© 2017-2019</p>'+
			'  </form>'+
			'<script>'+
			'</script> '+
			'</body>+'
		},
=======
"user strict"
var auth_vue = auth_vue || {}
auth_vue ={
	login_head: x=>{
		return '<head>'+
		'    <meta charset="utf-8">'+
		'    <meta name="robots" content="noindex, nofollow">'+
		'  <title>Our Team section using bootstrap 4 - Bootsnipp.com</title>'+
		'        <meta name="viewport" content="width=device-width, initial-scale=1">'+
		'    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">'+
		'    <style type="text/css">'+
		'    .row.heading h2 {'+
		'    color: #fff;'+
		'    font-size: 52.52px;'+
		'    line-height: 95px;'+
		'    font-weight: 400;'+
		'    text-align: center;'+
		'    margin: 0 0 40px;'+
		'    padding-bottom: 20px;'+
		'    text-transform: uppercase;'+
		'}'+
		'ul{'+
		'  margin:0;'+
		'  padding:0;'+
		'  list-style:none;'+
		'}'+
		'.heading.heading-icon {'+
		'    display: block;'+
		'}'+
		'.padding-lg {'+
		'  display: block;'+
		'  padding-top: 60px;'+
		'  padding-bottom: 60px;'+
		'}'+
		'.practice-area.padding-lg {'+
		'    padding-bottom: 55px;'+
		'    padding-top: 55px;'+
		'}'+
		'.practice-area .inner{ '+
		'     border:1px solid #999999; '+
		'   text-align:center; '+
		'   margin-bottom:28px; '+
		'   padding:40px 25px;'+
		'}'+
		'.our-webcoderskull .cnt-block:hover {'+
		'    box-shadow: 0px 0px 10px rgba(0,0,0,0.3);'+
		'    border: 0;'+
		'}'+
		'.practice-area .inner h3{ '+
		'    color:#3c3c3c; '+
		'  font-size:24px; '+
		'  font-weight:500;'+
		'  font-family: "Poppins", sans-serif;'+
		'  padding: 10px 0;'+
		'}'+
		'.practice-area .inner p{ '+
		'    font-size:14px; '+
		'  line-height:22px; '+
		'  font-weight:400;'+
		'}'+
		'.practice-area .inner img{'+
		'  display:inline-block;'+
		'}'+
		'our-webcoderskull{'+
		'  background: url("http://www.webcoderskull.com/img/right-sider-banner.png") no-repeat center top / cover;'+
		'  '+
		'}'+
		'.our-webcoderskull .cnt-block{ '+
		'   float:left; '+
		'   width:100%; '+
		'   background:#fff; '+
		'   padding:30px 20px; '+
		'   text-align:center; '+
		'   border:2px solid #d5d5d5;'+
		'   margin: 0 0 28px;'+
		'}'+
		'.our-webcoderskull .cnt-block figure{'+
		'   width:148px; '+
		'   height:148px; '+
		'   border-radius:100%; '+
		'   display:inline-block;'+
		'   margin-bottom: 15px;'+
		'}'+
		'.our-webcoderskull .cnt-block img{ '+
		'   width:148px; '+
		'   height:148px; '+
		'   border-radius:100%; '+
		'}'+
		'.our-webcoderskull .cnt-block h3{ '+
		'   color:#2a2a2a; '+
		'   font-size:20px; '+
		'   font-weight:500; '+
		'   padding:6px 0;'+
		'   text-transform:uppercase;'+
		'}'+
		'.our-webcoderskull .cnt-block h3 a{'+
		'  text-decoration:none;'+
		'  color:#2a2a2a;'+
		'}'+
		'.our-webcoderskull .cnt-block h3 a:hover{'+
		'  color:#337ab7;'+
		'}'+
		'.our-webcoderskull .cnt-block p{ '+
		'   color:#2a2a2a; '+
		'   font-size:13px; '+
		'   line-height:20px; '+
		'   font-weight:400;'+
		'}'+
		'.our-webcoderskull .cnt-block .follow-us{'+
		'  margin:20px 0 0;'+
		'}'+
		'.our-webcoderskull .cnt-block .follow-us li{ '+
		'    display:inline-block; '+
		'  width:auto; '+
		'  margin:0 5px;'+
		'}'+
		'.our-webcoderskull .cnt-block .follow-us li .fa{ '+
		'   font-size:24px; '+
		'   color:#767676;'+
		'}'+
		'.our-webcoderskull .cnt-block .follow-us li .fa:hover{ '+
		'   color:#025a8e;'+
		'}'+
		'.wrap {height: 100%;'+
		'  display: flex;'+
		'  align-items: center;'+
		'  justify-content: center;}'+
		'.button {width: 140px;'+
		'  height: 45px;'+
		'  font-family: Roboto, sans-serif;'+
		'  font-size: 11px;'+
		'  text-transform: uppercase;'+
		'  letter-spacing: 2.5px;'+
		'  font-weight: 500;'+
		'  color: #000;'+
		'  background-color: #fff;'+
		'  border: none;'+
		'  border-radius: 45px;'+
		'  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);'+
		'  transition: all 0.3s ease 0s;'+
		'  cursor: pointer;'+
		'  outline: none;}'+
		'.button:hover {'+
		'  background-color: #2EE59D;'+
		'  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);'+
		'  color: #fff;'+
		'  transform: translateY(-7px);}'+
		'    </style>'+
		'    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>'+
		'    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>'+
		'    </script>'+
		'</head>'
	},
	login_body: x=>{
        return '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">'+
        '<section class="our-webcoderskull padding-lg">'+
        '  <div id="main" class="container">'+
        '    <div class="row heading heading-icon" "style="justify-content: center;">'+
        '        <h2>SHIP Crawling</h2>'+
        '    </div>'+
        '    <ul class="row">'+
        '      <li class="col-12 col-md-6 col-lg-3">'+
        '          <div class="cnt-block equal-hight" style="height: 349px;">'+
        '            <figure><img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Bugs%21_logo.jpg" class="img-responsive" alt=""></figure>'+
        '            <h3><div id="bugs" class="wrap">'+
        '			</div></h3>'+
        '          </div>'+
        '      </li>'+
        '      <li class="col-12 col-md-6 col-lg-3">'+
        '          <div class="cnt-block equal-hight" style="height: 349px;">'+
        '            <figure><img src="https://upload.wikimedia.org/wikipedia/ko/3/32/CJ_CGV_logo.jpg" class="img-responsive" alt=""></figure>'+
        '            <h3><a id="cgv" href="#"></a></h3>'+
        '          </div>'+
        '      </li>'+
        '      <li class="col-12 col-md-6 col-lg-3">'+
        '          <div class="cnt-block equal-hight" style="height: 349px;">'+
        '            <figure><img src="https://ssl.pstatic.net/dicimg/alldic/newImg/enkodict.png" class="img-responsive" alt=""></figure>'+
        '            <h3><a id="eng" href="#"></a></h3>'+
        '          </div>'+
        '       </li>'+
        '      <li class="col-12 col-md-6 col-lg-3">'+
        '          <div class="cnt-block equal-hight" style="height: 349px;">'+
        '            <figure><img src="http://indz.co.kr/wp-content/uploads/2016/09/coming-soon.jpg" class="img-responsive" alt=""></figure>'+
        '            <h3><a id="ready" href="http://www.webcoderskull.com/"></a></h3>'+
        '          </div>'+
        '      </li>'+
        '    </ul>'+
        '  </div>'+
        '</section>'
    },
>>>>>>> yyh
}