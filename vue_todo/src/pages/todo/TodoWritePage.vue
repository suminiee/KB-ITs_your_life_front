<template>
  <div>
    <h1>TODO WRITE</h1>
    <div>
      todo : <input type="text" v-model.trim="todo" />
      <br />
      <br />
      desc : <input type="text" v-model.trim="desc" />
      <br />
      <br />
      <button @click="saveTodo">작성</button>
      <button @click="router.push({ name: 'todo' })">취소</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();
const BASE_URL = '/api';
const todo = ref('');
const desc = ref('');

async function saveTodo() {
  try {
    const todoObj = {
      todo: todo.value,
      desc: desc.value,
      done: false,
    };
    const postTodoUrl = BASE_URL + '/todos';
    const postTodoRes = await axios.post(postTodoUrl, todoObj);
    console.log('TODO 통신 결과 : ', postTodoRes);
    router.push({ name: 'todo' });
  } catch (e) {
    console.error(e);
  }
}
</script>

<style lang="scss" scoped></style>
