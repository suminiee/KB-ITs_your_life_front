<template>
  <div>
    <h1>TODO EDIT</h1>
    <div>
      <h2>todo : <input type="text" v-model.trim="editedTodo" /></h2>
      <h2>desc : <input type="text" v-model.trim="editedDesc" /></h2>
      <h2>done: <input type="checkbox" v-model="editedDone" /></h2>
      <button @click="editedTodo(todoObj.id)">수정</button>
      <button>취소</button>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

//현재 Id를 받아와야함!!
const curRoute = useRoute();
const id = curRoute.params.id;

const BASE_URL = '/api';

const todoObj = ref({});
const editedTodo = ref('');
const editedDesc = ref('');
const editedDone = ref(false);

async function fetchTodo() {
  try {
    const todoUrl = BASE_URL + `/todos/${id}`;
    const todoRes = await axios.get(todoUrl);

    todoObj.value = todoRes.data;

    console.log('TODO DETAIL 데이터 : ', todoObj.value);

    editedTodo.value = todoObj.value.todo;
    editedDesc.value = todoObj.value.desc;
    editedDone.value = todoObj.value.done;
  } catch (e) {
    // alert('TODO DETAIL DATA FETCH 통신 ERR 발생');
    console.error(e);
  }
}
fetchTodo();

async function editTodo(id) {
  try {
  } catch (error) {}
}

const todo = ref(todoObj.value.todo);
</script>

<style lang="scss" scoped></style>
