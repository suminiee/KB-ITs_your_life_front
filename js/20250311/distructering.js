const user = {
  id: 1,
  name: 'woodz',
  email: 'woodz@naver.com',
};

// const id = user.id;
// const name = user.name;
// const mail = user.email;

//구조 분해 할당 (객체를 구조분해 할 때는 key 명을 그대로 써야함)
const { id, name, email } = user;

// console.log(id, name, email);

// const fruits = ['딸기', '망고', '사과'];
//배열을 구조 분해 할당 할 때는 이름을 아무거나 써두 됨..

// const [a, b, c] = fruits;
// console.log(a, b, c);

const fruits = ['수박', '딸기', '바나나'];
const [a, b, c] = fruits;

// console.log(fruits);
// console.log(...fruits);

function conLog(a, b, c) {
  console.log(a, b, c);
}

//아래 두개 결과 같음
// conLog(fruits[0], fruits[1], fruits[2]);
// conLog(...fruits);

const string = 'apple';
//문자열을 알파벳 배열로 나누기
const strArr = string.split('');
const strArr2 = [...string];

// console.log(strArr);
// console.log(strArr2);

const arr = [1, 2, 3, 4];

//같은 메모리 상에 값을 동일하게 저장함.
const copyArr = arr;
//새로운 배열을 선언하고 넣어줌(값은 같지만 저장되는 메모리를 다르게 함)
const hardCopyArr = [...arr];

// console.log(arr === copyArr); //메모리 주소가 같기 때문에 true
// console.log(arr === hardCopyArr); //값은 동일하지만 메모리 주소가 다르기 때문에 false

const person = { name: '조승연', age: 28 };
const album = { title: 'OO-LI', song: 'drowning' };

const profile = {
  //위에서 정의한거 뿌려줌
  ...person,
  ...album,
  location: '청담동',
};

console.log(profile);
