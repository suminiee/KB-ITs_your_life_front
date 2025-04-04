<template>
  <div>
    <h1>Msg Sender</h1>
    <input type="text" v-model.trim="userInput" />
    <button @click="editMst(userInput)">메세지 공간 이동!</button>
  </div>
</template>

<script setup>
import { useMessageStore } from '@/stores/message';

const messageStore = useMessageStore();
const { editMst } = messageStore;
</script>

<style lang="scss" scoped></style>
