<template>
  <div>
    <h1>TODO EDIT</h1>
    <div>
      <h2>todo : <input type="text" v-model.trim="editedTodo" /></h2>
      <h2>desc : <input type="text" v-model.trim="editedDesc" /></h2>
      <h2>done: <input type="checkbox" v-model="editedDone" /></h2>
      <button @click="editTodo(todoObj.id)">수정</button>
      <button
        @click="
          router.push({ name: 'todo/detail', params: { id: todoObj.id } })
        "
      >
        취소
      </button>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();

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

// const todo = ref(todoObj.value.todo);

async function editTodo(id) {
  const todoUrl = BASE_URL + `/todos/${id}`;
  try {
    const editedTodoList = {
      todo: editedTodo.value,
      desc: editedDesc.value,
      done: editedDone.value,
    };

    const editTodoRes = await axios.put(todoUrl, editedTodoList);

    console.log('TODO EDIT 통신 결과 : ', editTodoRes);

    router.push({ name: 'todo' });
  } catch (e) {
    console.log(e);
  }
}
</script>

<style lang="scss" scoped></style>
