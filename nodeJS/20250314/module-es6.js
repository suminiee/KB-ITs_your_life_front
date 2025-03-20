//전체를 가져오는것을 '지양'함, 필요한 것만 가져오는걸 지향 -> 구조분해할당으로 받아오기

// import { animals as ani, showAnimals as show } from './animals-es6.js';
// import { animals, showAnimals } from './animals-es6.js';

import animals from './animals-es6.js'; //default animals로 export해줄때 + 확장자 넣어줘야함!!!아니면 오류남
console.log(animals.animals);
animals.showAnimals();

// console.log('🚀 ~ animals:', animals);
// console.log('🚀 ~ ani:', ani);

// showAnimals();
// show();

//package.json에 type: module을 적으면 es6만 사용할 수 있게 됨(commonjs 사용 불가능)
