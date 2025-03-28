<template>
  <div>
    <h1>오늘의 기분은!? {{ msg }}</h1>
    <img v-bind:src="imgSrc" v-bind:alt="msg" />
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue';
//내가 지금 어디있는지 주소를 알려줌 -> useRoute
import { useRoute } from 'vue-router';

const currentRoute = useRoute();
const mood = computed(() => currentRoute.params.mood);
const msg = computed(() =>
  mood.value === 'happy' ? '행복합니다' : '씬납니당'
);
const imgSrc = computed(() =>
  mood.value === 'happy'
    ? 'https://i.pinimg.com/564x/a3/a3/52/a3a352efb5a5829ca7007d86369a0d59.jpg'
    : 'https://i.imgur.com/wOCGlbN.gif'
);
</script>
