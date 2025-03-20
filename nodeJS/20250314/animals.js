// const animals = ['사자', '고양이'];

// exports.animals = animals;

// exports.animals = ['사자', '고양이'];

//배열에 있는거 보여주기(for보다 유용)
// exports.showAnimals = function showAnimals() {
//   animals.map(function (el) {
//     console.log('🚀 ~ el:', el);
//   });
// };

// module.exports = {
//   animals,
//   showAnimals,
// };

const animals = {
  animals: ['lions', 'cat'],
  showAnimals() {
    this.animals.map(function (el) {
      console.log('🚀 ~ el:', el);
    });
  },
};

module.exports = animals;
