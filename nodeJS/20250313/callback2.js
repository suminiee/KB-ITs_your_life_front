function generateRandomNumber(cb) {
  console.log('숫자 생성 중...');

  //실행을 시킬 함수, 시간(ms단위) -> 인자를 두개 받음 // 얘 잘 안씀
  setTimeout(function () {
    //floor -> 소수점 버림
    const randNum = Math.floor(Math.random() * 10) + 1;
    console.log('생성된 숫자 : ' + randNum);

    const result = randNum >= 5 ? 'pass' : 'fail';

    cb(result);
  }, 1000);
}

//숫자 생성 중...
// 결과 확인 완료!
// 생성된 숫자 : 2
// fail
//결과 확인 완료가 먼저 뜨고 그 다음에 타임아웃함수가 뜸 -> 비동기적 특성

generateRandomNumber(function (result) {
  console.log('결과 : ' + result);
  console.log('결과 확인 완료!');
});
