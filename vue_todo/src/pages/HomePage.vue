<script setup>
// localStorage.setItem('woodz', '조승연');
// localStorage.setItem('luizy', '조승연');
// localStorage.removeItem('name');
// localStorage.clear();

// const obj = {
//   name: '조승연',
//   age: 30,
// };
//객체를 문자열로 변경해서 저장해야함.(객체 형태를 유지할 수 있는 json 형태로 집어넣겠다.)
localStorage.setItem('woodzObj', JSON.stringify(obj));
const getObj = JSON.parse(localStorage.getItem('woodzObj'));

// const item = localStorage.getItem('name');
// console.log(item);
// 꺼낼때도 그냥 문자열 상태이니까 JSON 형태로 parse해야함
console.log(localStorage);
console.log(getObj.name);
</script>

<template>
  <div>
    <h1>HOME</h1>
  </div>
</template>
