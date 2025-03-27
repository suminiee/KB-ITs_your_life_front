<template>
  <div>
    <input type="text" v-model.trim="inputNum" />
    <button @click="sendMsg">정답!</button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const inputNum = ref('0');
const count = ref(0);
const props = defineProps({
  answer: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(['send-msg']);

const sendMsg = () => {
  count.value++;
  // const userInput = parseInt(inputNum.value, 10);
  // const correctNum = parseInt(props.answer, 10);

  if (inputNum.value === props.answer) {
    emit('send-msg', '정답입니다!');
  } else if (inputNum.value > props.answer) {
    emit('send-msg', 'DOWN');
  } else {
    emit('send-msg', 'UP');
  }
};

watch(count, (newValue, oldValue) => {
  if (newValue === 3) return alert('3번째 시도 입니다.');
});
</script>

<style lang="scss" scoped></style>
