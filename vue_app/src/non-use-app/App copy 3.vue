<!-- js관련 -->
<script setup>
import ColorEmit from './components/ColorEmit.vue';
</script>

<!-- html 관련 -->
<template>
  <div>
    <div :style="{ backgroundColor: color }">
      <h1>저의 색상을 정해주세요!!</h1>
      <ColorEmit @colorChange="colorChangeHandler" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      color: '',
    };
  },
  methods: {
    colorChangeHandler(e) {
      this.color = e.color;
    },
  },
};
</script>

<!-- 스타일-디자인 (css)부분 -->
<style scoped></style>
