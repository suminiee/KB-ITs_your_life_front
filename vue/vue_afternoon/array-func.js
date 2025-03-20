const classArr = [
  { id: 1, name: '안은현' },
  { id: 2, name: '강병현' },
  { id: 3, name: '염다빈' },
  { id: 4, name: '권다연' },
  { id: 5, name: '이혜원' },
  { id: 6, name: '김은지' },
  { id: 7, name: '이준범' },
  { id: 8, name: '김지민' },
  { id: 9, name: '김연후' },
  { id: 10, name: '강수민' },
  { id: 11, name: '김보성' },
  { id: 12, name: '양서진' },
  { id: 13, name: '장현지' },
  { id: 14, name: '최재원' },
  { id: 15, name: '채수정' },
  { id: 16, name: '유예원' },
  { id: 17, name: '최예빈' },
  { id: 18, name: '전규진' },
  { id: 19, name: '강민재' },
  { id: 20, name: '김어진' },
  { id: 21, name: '김영오' },
  { id: 22, name: '서승준' },
  { id: 23, name: '이호진' },
  { id: 24, name: '김희주' },
  { id: 25, name: '곽효재' },
  { id: 26, name: '유수상' },
  { id: 27, name: '김서연' },
  { id: 28, name: '안태현' },
];

// const findedIndex = classArr.findIndex(function (student, index) {
//   console.log(student, index);

//   return student.name === '강수민';
// });

// console.log('🚀 ~ findedIndex ~ findedIndex:', findedIndex);

//화살표함수
//콜백함수 안이 반드시 한줄이어야함 (function, return 제거({} 제거), => 사용)
// const findedIndex2 = classArr.findIndex((student, index) =>
//   console.log(student, index)
// );

// const overIdTenIndex = classArr.filter(function (student, index) {
//   return student.id >= 10;
// });

// const overIdTenIndex2 = classArr.filter((student, index) => student.id >= 10);

// const findOddIndex = classArr.filter((student, index) => student.id % 2 != 0);
// console.log('🚀 ~ findOddIndex:', findOddIndex);

// const findOddIndex = classArr.filter(function (el, idx) {
//   return el.id % 2 != 0;
// });
// console.log('🚀 ~ findOddIndex ~ findOddIndex:', findOddIndex);

// const findEvenIndex = classArr.filter((student, index) => student.id % 2 == 0);
// console.log('🚀 ~ findEvenIndex:', findEvenIndex);

// const addedClassArr = classArr.map(function (student) {
//   return {
//     id: student.id,
//     name: student.name,
//     condition: 'good',
//   };
// });

// const addedClassArr = classArr.map(function (student) {
//   return {
//     ...student,
//     condition: 'good',
//   };
// });
// console.log('🚀 ~ addedClassArr ~ addedClassArr:', addedClassArr);

// const editedClassArr = classArr.map(function (student, index) {
//   if (student.id % 2 !== 0) {
//     return {
//       ...student,
//       id: student.id * 2 + 1,
//     };
//   } else {
//     return {
//       ...student,
//       name: student.name + '(짝수번)',
//     };
//   }
// });
// console.log('🚀 ~ editedClassArr ~ editedClassArr:', editedClassArr);

//reduce
//acc == sum , cur == current, idx == index
//뒤에 초기값 0 꼭 넣어줘야 함
// const sumId = classArr.reduce(function (acc, cur, idx) {
//   return (acc += cur.id);
// }, 0);
// console.log('🚀 ~ sumId ~ sumId:', sumId);

const sumName = classArr.reduce(function (acc, cur, idx) {
  return (acc += cur.name);
}, '');
console.log('🚀 ~ sumName ~ sumName:', sumName);
