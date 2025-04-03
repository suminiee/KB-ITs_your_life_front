<template>
  <div>
    <h1>LOGIN PAGE</h1>
    아이디 : <input type="text" v-model.trim="userId" />
    <br />
    비밀번호 : <input type="text" v-model.trim="userPassword" />
    <br />
    <!-- v-on:click -> @click -->
    <button v-on:click="login">로그인</button> /
    <button @click="logout">로그아웃</button>
  </div>
</template>

<script setup>
//반응형 데이터 -> ref
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();

const BASE_URL = '/api';
const userId = ref('');
const userPassword = ref('');

async function login() {
  try {
    const loginUrl = BASE_URL + '/users';
    const loginRes = await axios.get(loginUrl);

    const userArr = loginRes.data;

    const findUser = userArr.find(function (item, index) {
      //ref는 .value까지 사용해줘야 함
      return item.id === userId.value;
    });

    if (findUser == undefined)
      return alert('해당 아이디를 가지는 사용자가 없습니다!');
    if (findUser.password !== userPassword.value)
      return alert('비밀번호가 일치하지 않습니다.');

    alert('로그인 성공!');
    localStorage.setItem('auth', 'true');
    return router.push({ name: 'todo' });

    console.log('백엔드 유저 데이터 목록 : ', userArr);
  } catch (e) {
    alert('login 통신 에러 발생');
    console.log(e);
  }
}

function logout() {
  localStorage.removeItem('auth');
  alert('로그아웃 완료!');
}
</script>
