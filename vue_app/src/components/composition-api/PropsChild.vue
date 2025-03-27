<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script setup>
//import defineProps 없어도 자동으로 해줘서 해줄필요 없음!
// import { defineProps } from 'vue';

const props = defineProps({
  msg: {
    type: String,
    required: true,
  },
});

console.log(props.msg);
</script>

<style lang="scss" scoped></style>
