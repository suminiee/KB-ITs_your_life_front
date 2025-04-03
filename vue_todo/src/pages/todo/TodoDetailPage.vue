<template>
  <div>
    <h1>TODO DETAIL</h1>
    <div>
      <h2>id : {{ todo.id }}</h2>
      <h2>todo : {{ todo.todo }}</h2>
      <h2>desc : {{ todo.desc }}</h2>
      <h2>done : {{ todo.done }}</h2>
      <button @click="router.push({ name: 'todo' })">목록</button>
      <button @click="router.push({ name: 'todo/edit' })">수정</button>
      <button @click="deleteTodo">삭제</button>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';

const router = useRouter();
const curRoute = useRoute();
const id = curRoute.params.id;
const BASE_URL = '/api';
//여기에 데이터 받아올거임!! ref 사용!!
const todo = ref({});

async function fetchTodo() {
  try {
    const todoUrl = BASE_URL + `/todos/${id}`;
    const todoRes = await axios.get(todoUrl);
    todo.value = todoRes.data;
    console.log('TODO DETAIL 데이터 : ', todo.value);
  } catch (e) {
    alert('TODO DETAIL DATA FETCH 통신 ERR 발생');
    console.error(e);
  }
}

async function deleteTodo() {
  try {
    const deleteUrl = BASE_URL + `/todos/${id}`;
    await axios.delete(deleteUrl);
    router.push({ name: 'todo' });
  } catch (e) {
    console.error(e);
  }
}

fetchTodo();
</script>

<style lang="scss" scoped></style>
