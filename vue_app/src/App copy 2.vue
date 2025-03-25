<!-- js관련 -->
<script setup>
import SendNameComponent from './components/SendNameComponent.vue';
</script>

<!-- html 관련 -->
<template>
  <div>
    <h1>너의 이름은 {{ name }}</h1>
    <!-- 자식컴포넌트에서 nameChange에 뭔가 담기면 -> 핸들러 이용 -->
    <SendNameComponent @nameChange="nameChangeHandler" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      name: '',
    };
  },
  methods: {
    nameChangeHandler(e) {
      this.name = e.name;
    },
  },
};
</script>

<!-- 스타일-디자인 (css)부분 -->
<style scoped></style>
