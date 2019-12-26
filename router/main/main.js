var express = require('express');
//express에 router함수를 사용해서 파일들끼리 연결
var router = express.Router();
//상대 경로를 활용할 때 정의
var path = require('path');

/*app.get('/', function(req,res) {
	//get으로 데이터를 받을경우
	//req.param('email{form name명 혹은 데이터에 맞게}');
	res.sendFile(__dirname + "/public/main.html");
});*/

//기존에는 경로에 /main이라고 썼지만 이제는 app.js의 router에 /main으로 연결되어 있기 때문에 루트 경로만 사용한다. 
router.get('/', function(req,res) {
	console.log('main js loaded');
	//.join은 콤마를 기준으로 앞과 뒤의 문자를 합쳐주는 함수
	res.sendFile(path.join(__dirname, "../../public/main.html"));
});

//router를 module에 exports 시켜서 다른 파일에서 실행 가능하게 함
module.exports = router;