const fs = require('fs');

//이 파일을 읽어라 그 다음에 함수 실행할거임
fs.readFile('readme.txt', function (err, data) {
  if (err) throw err;

  //2진수 상태라 toString을 이용해서 문자로 바꿔야함.
  console.log('1번', data.toString());
  //이 경우에는 1번이 먼저 실행된 다음에 2번이 순서 지켜져서 하게됨.....
  fs.readFile('readme.txt', function (err, data) {
    if (err) throw err;

    //2진수 상태라 toString을 이용해서 문자로 바꿔야함.
    console.log('2번', data.toString());
  });
});

// fs.readFile('readme.txt', function (err, data) {
//   if (err) throw err;

//   //2진수 상태라 toString을 이용해서 문자로 바꿔야함.
//   console.log('2번', data.toString());
// });

// fs.readFile('readme.txt', function (err, data) {
//   if (err) throw err;

//   //2진수 상태라 toString을 이용해서 문자로 바꿔야함.
//   console.log('3번', data.toString());
// });

// fs.readFile('readme.txt', function (err, data) {
//   if (err) throw err;

//   //2진수 상태라 toString을 이용해서 문자로 바꿔야함.
//   console.log('4번', data.toString());
// });
