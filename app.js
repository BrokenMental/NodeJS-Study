//express 서버 요청
var express = require('express');
//express 함수 보관
var app = express();
//post method 파라미터 활용할때 사용하는 모듈
var bodyParser = require('body-parser');

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

//화면 요청
app.get('/', function(req,res) {
	//html의 태그도 사용가능
	//res.send("<h1>hi friend!</h1>");
	//특정 파일을 지정해줘야 사용 가능하다.
	res.sendFile(__dirname + "/public/main.html"); //__dirname : 현재 프로젝트 루트 디렉터리
});

app.get('/main', function(req,res) {
	//get으로 데이터를 받을경우
	//req.param('email{form name명 혹은 데이터에 맞게}');
	res.sendFile(__dirname + "/public/main.html");
});

//post method 요청 시
app.post('/email_post', function(req,res) {
	//post에서 데이터를 받을경우, body-parser라는 라이브러리 활용
	console.log(req.body.email);
	//res.send("<h1>welcome, " +req.body.email+"</h1>");
	res.render('email.ejs', {'email' : req.body.email});
});
