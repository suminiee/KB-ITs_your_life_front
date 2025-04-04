<template>
  <div>
    <h1>Counter1</h1>
    <h1>count : {{ count }}</h1>
    <h1>count x 2 : {{ doubleCount }}</h1>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useCounterStore } from '@/stores/counter';

const counterStore = useCounterStore();
const { increment, decrement } = counterStore;

//pinia를 썼는데 직접 접근하면 경고발생 -> 꺼내서 쓰자
const count = computed(() => counterStore.count);
const doubleCount = computed(() => counterStore.doubleCount);
</script>

<style lang="scss" scoped></style>
