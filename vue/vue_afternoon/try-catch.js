// 반복
setInterval(function () {
  try {
    //에러가 예상되는 코드
    const rand = parseInt(Math.random() * 10);
    console.log('🚀 ~ rand:', rand);

    if (rand > 5) return console.log('로또 사자!');
    throw new Error('망했어요,,,');
  } catch (e) {
    //에러처리 코드
    console.error('🚀 ~ e:', e);
  }
}, 2000);
