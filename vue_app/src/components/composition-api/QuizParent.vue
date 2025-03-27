<template>
  <div>
    <h1>{{ msg }}</h1>
    <QuizChild v-bind:answer="answer" v-on:send-msg="emitHandler" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import QuizChild from './QuizChild.vue';

const answer = ref(Math.floor(Math.random() * 21));
const msg = ref('랜덤 숫자를 맞춰 주세요');

const emitHandler = (value) => {
  msg.value = value;
};
</script>

<style lang="scss" scoped></style>
