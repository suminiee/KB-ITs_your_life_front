<!-- js관련 -->
<script setup>
import RefReactive from './components/composition-api/RefReactive.vue';
import Counter from './components/composition-api/Counter.vue';
import PropsParent from './components/composition-api/PropsParent.vue';
import EmitParent from './components/composition-api/EmitParent.vue';
import QuizParent from './components/composition-api/QuizParent.vue';
</script>

<!-- html 관련 -->
<template>
  <div>
    <!-- <ModalParent /> -->
    <!-- <TeleportDemo /> -->
    <!-- <CustomInputParent /> -->
    <!-- <ProvideComponent /> -->
    <!-- <RefReactive /> -->
    <!-- <Counter /> -->
    <!-- <PropsParent /> -->
    <!-- <EmitParent /> -->
    <QuizParent />
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
