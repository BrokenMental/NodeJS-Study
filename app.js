//express 서버 요청
var express = require('express');
//express 함수 보관
var app = express();
//post method 파라미터 활용할때 사용하는 모듈
var bodyParser = require('body-parser');
//router 폴더의 index 파일을 사용할 수 있도록 정의
var router = require('./router/index');

//서버 실행작업
app.listen(3000, function() {
	console.log("start!! express server on port 3000");
});

//정적인 파일(js, css 등)을 지정
app.use(express.static('public'));
//bodyparser json 사용 지정
app.use(bodyParser.json());
//url 인코딩 설정
app.use(bodyParser.urlencoded({extended:true}));
//ejs node js 템플릿 사용 지정
app.set('view engine', 'ejs');

//경로를 써주지 않을경우에는 해당 파일에서 경로를 찾는다.
app.use(router);

//화면 요청(router로 변경)
/*app.get('/', function(req,res) {
	//html의 태그도 사용가능
	//res.send("<h1>hi friend!</h1>");
	//특정 파일을 지정해줘야 사용 가능하다.
	//__dirname : 현재 파일 루트 디렉터리
	res.sendFile(__dirname + "/public/main.html");
});

//post method 요청 시
app.post('/email_post', function(req,res) {
	//post에서 데이터를 받을경우, body-parser라는 라이브러리 활용
	console.log(req.body.email);
	//res.send("<h1>welcome, " +req.body.email+"</h1>");
	res.render('email.ejs', {'email' : req.body.email});
});

app.post('/ajax_send_email', function(req, res){
	//console.log(req.body.email);
	//var responseData = {'result' : 'ok', 'email' : req.body.email};

	var email = req.body.email;
	var responseData = {};

	//db connection은 비동기로 처리되기 때문에 밖에서 데이터를 출력할 경우 promise 에러가 발생한다.
	pool.getConnection().then((conn) => {
		conn.query('select name from nodetest where email ="' + email + '"')
		.then((rows) => {
			//rows는 metadata까지 나오기 때문에 값만 꺼내려면 index를 지정해주자
			if(rows[0]){
				//rows[0].{json 명} 으로 해당 json 데이터를 꺼낼 수 있다.
				console.log(rows[0].name);
				responseData.result = "ok";
				responseData.name = rows[0].name;
			}else{
				console.log('none : '+rows[0]);
				responseData.result = "none";
				responseData.name = "";
			}
			conn.end();

			//서버에 json형태로 보낼 경우 사용.
			res.json(responseData);
		})
		.catch((err) => {
			console.log('err : '+err);
			
			//connection 종료
			conn.end();
		});
	});
});*/