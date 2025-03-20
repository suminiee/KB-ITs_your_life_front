const bbam = {
  name: '이재현',
  age: 21,
  height: 180,
  position: 'SS',
  team: 'samsung lions',
};

for (let key in bbam) {
  //   console.log(key);
  console.log(`${key} : ${bbam[key]}`);
}
