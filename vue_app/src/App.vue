<!-- js관련 -->
<script setup>
import ScopedSlotParent from './components/ScopedSlotParent.vue';
import ModalParent from './components/ModalParent.vue';
import TeleportDemo from './components/TeleportDemo.vue';
import CustomInputParent from './components/CustomInputParent.vue';
import ProvideComponent from './components/ProvideComponent.vue';
</script>

<!-- html 관련 -->
<template>
  <div>
    <!-- <ModalParent /> -->
    <!-- <TeleportDemo /> -->
    <!-- <CustomInputParent /> -->
    <ProvideComponent />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      drilling: '으아아~~ 어디까지 내려가는거에요',
    };
  },
};
</script>

<!-- 스타일-디자인 (css)부분 -->
<style scoped></style>
