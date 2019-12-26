//index.js에서 router관련 파일을 모두 처리하도록 중계기 역할을 함
//추후에 email 혹은 main관련 파일이 많아질때 관리하길 편하도록 폴더로 관리

var express = require('express');
var router = express.Router();
var path = require('path');
//router 폴더의 main 파일을 사용할 수 있도록 정의
var main = require('./main/main');
//router 폴더의 email 파일을 사용할 수 있도록 정의
var email = require('./email/email');

//루트경로 localhost:3000/ 으로 접속시 아래 함수 실행
router.get('/', function(req, res){
    console.log('indexjs /path loaded');
    res.sendFile(path.join(__dirname, '../public/main.html'));
});

// /main 으로 들어오는 요청은 main 변수에 적용된 router를 사용하도록 정의
router.use('/main', main);
// /email 으로 들어오는 요청은 email 변수에 적용된 router를 사용하도록 정의
router.use('/email', email);

module.exports = router;