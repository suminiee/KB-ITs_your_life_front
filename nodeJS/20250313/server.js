const express = require('express');
const cors = require('cors');

//포트번호 설정, 대문자로 써야함
const PORT = 4000;

//서버 실행
const server = express();
//cors 문제 해결
server.use(cors());

//controller
server.get('/request', function (req, res) {
  res.status('200').json('안녕하세요, 여기는 백엔드입니다.');
});

server.get('/error', function (req, res) {
  res.status('500').json('쵸비상!!! 에러발생!!!!');
});

server.listen(PORT, function () {
  console.log('서버가' + PORT + '번에서 작동 중입니다.');
});
