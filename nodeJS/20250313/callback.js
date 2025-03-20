function youKnow(cb) {
  console.log('you know ~');
  cb();
}

function myName() {
  console.log('제 이름은 강수민 입니다');
}

function dinner() {
  console.log('내가 이따 먹을 저녁 메뉴는 주는대로 먹어서 잘 모르겠습니다.');
}

function breakfast() {
  console.log('내일 아침은 그릭요거트에 그레놀라 꿀 사과조합을 먹겠어요.');
}

youKnow(myName);
youKnow(dinner);
youKnow(breakfast);

// youKnow2(function () {
//   console.log('내일 아침은 그릭요거트에 그레놀라 꿀 사과조합을 먹겠어요.');
// });
