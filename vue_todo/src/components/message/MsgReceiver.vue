<template>
  <div>
    <h1>Msg Receiver</h1>
    <h1>PINIA 로 부터 받은 메세지는 "{{ msg }}" 입니다.</h1>
  </div>
</template>

<script setup>
import { useMessageStore } from '@/stores/message';
import { computed, ref } from 'vue';

const messageStore = useMessageStore();
const msg = computed(() => messageStore.msg);
</script>

<style lang="scss" scoped></style>
