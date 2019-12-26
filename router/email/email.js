var express = require('express');
var router = express.Router();
//mariadb 모듈 설정
var mariadb = require('mariadb');

//mariadb 연결설정(대부분의 연결은 mysql과 유사하다)
var pool = mariadb.createPool({
	host: 'localhost',
	user: 'root',
	password: '1234',
	port: 4306, // port가 기본값과 다를경우 입력
	database: 'testdb' // db 선택
});

//db 연결작업
//var conn = pool.getConnection();

//mariadb 연결작업
//then()은 앞의 함수의 리턴값을 받는다.
//여기서 conn은 getConnection()의 리턴값을 임의로 지정한것.
/*pool.getConnection().then((conn) => {
	conn.query("SELECT * FROM ingu").then((rows) => {
		console.log(rows);

		return 0;
	});
});*/

router.post('/form', function(req,res) {
	console.log(req.body.email);
	res.render('email.ejs', {'email' : req.body.email});
});

router.post('/ajax', function(req, res){
	var email = req.body.email;
	var responseData = {};

	pool.getConnection().then((conn) => {
		conn.query('select name from nodetest where email ="' + email + '"')
		.then((rows) => {
			if(rows[0]){
				console.log(rows[0].name);
				responseData.result = "ok";
				responseData.name = rows[0].name;
			}else{
				console.log('none : '+rows[0]);
				responseData.result = "none";
				responseData.name = "";
			}
			conn.end();

			res.json(responseData);
		})
		.catch((err) => {
			console.log('err : '+err);
			
			conn.end();
		});
	});
});

module.exports = router;