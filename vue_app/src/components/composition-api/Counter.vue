<template>
  <div>
    <h1>Vue3 Counter</h1>
    <p>Count : {{ count }}</p>
    <p>두 배로! : {{ double }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <p>지금까지 수행 된 횟수 : {{ countAll }}</p>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
// computed값도 ref랑 비슷하게 관리가 됨 (값에 접근하려면 .value 사용 필요)

const count = ref(0);
const double = computed(() => count.value * 2);
const countAll = ref(0);

function increment() {
  //   console.log('그냥 double : ', double);
  //   console.log('double.value : ', double.value);
  count.value++;
  countAll.value++;
}

function decrement() {
  count.value--;
  countAll.value++;
}

watch(count, (newValue, oldValue) => {
  console.log(`카운트가 ${oldValue}에서 ${newValue}로 변경되었습니다.`);

  if (newValue % 10 === 0 && newValue !== 0)
    return alert(`축하합니다! ${newValue}까지 도달했습니다!`);
});
</script>
<style scoped></style>
