<!-- js관련 -->
<script setup>
import NamedSlotParent from './components/NamedSlotParent.vue';
</script>

<!-- html 관련 -->
<template>
  <div>
    <NamedSlotParent />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {};
  },
};
</script>

<!-- 스타일-디자인 (css)부분 -->
<style scoped></style>
