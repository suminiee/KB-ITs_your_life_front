// export const animals = ['lions', 'heros', 'bears'];

// //빼고싶은 것 앞에 export 쓰면 됨.

// export function showAnimals() {
//   animals.map(function (el) {
//     console.log('🚀 ~ el:', el);
//   });
// }

// const animals = ['lions', 'bears'];

// function showAnimals() {
//   animals.map((el) => {
//     console.log('🚀 ~ animals.map ~ el:', el);
//   });
// }

// export { animals, showAnimals };

const animals = {
  animals: ['lions', 'giants'],
  showAnimals() {
    this.animals.map((el) => console.log(el));
  },
};

//이 파일에서 기본적으로 얘를 가지고 가서 쓰면 된다, 대신 받을때 달라짐(구조분해할당 안해도 됨)
export default animals;
