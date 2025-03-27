<template>
  <div>
    <h1>아아, 꿈을 꾸었습니다. 차은우가 되는 꿈을...</h1>
    <h1>Ref Data : {{ refData.name }}</h1>
    <h1>Reactive Data : {{ reactiveData.name }}</h1>
    <button v-on:click="changeRef">Ref Data 변경</button>
    <button v-on:click="changeReactive">Reactive Data 변경</button>
  </div>
</template>
<!-- template 에서 쓸때는 알아서 객체를 벗겨주기 때문에 .value를 사용하지 않아도 이름이 제대로 출력되지만
setup에서 접근할때는 .value까지 사용해야 제대로 접근이 가능하다. -->

<script setup>
import { ref, reactive } from 'vue';

// ref(변수의 초기값) -> 데이터 기반 렌더링, 데이터 값이 바뀌면 그에 맞춰서 바뀜(데이터가 계속 바뀌는 환경)
const refData = ref({ name: '이효석' });
//원시형데이터 -> 메모리에 저장되는게 주솟값이 아닌게 ref를 사용하고 배열 객체 이런경우엔 reactive 사용
let reactiveData = reactive({ name: '이효석' });

//ref는 .value를 해서 객체로 접근해야하지만 reactive는 그냥 바로 접근이 가능하다.
const changeRef = function () {
  refData.value = { name: '차은우' };
};

const changeReactive = () => {
  reactiveData = { name: '차은우' };
};

console.log('Ref data', refData);
console.log('Ref data의 value', refData.value);
console.log('Ref data의 value의 name', refData.value.name);
</script>

<!-- Vue2 -->
<!-- <script>
export default {
  data() {
    return {
      count: 0,
      state: {
        x: 0,
        y: 0,
        result: 0,
      },
    };
  },
};
</script> -->
