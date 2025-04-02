<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router';

const router = useRouter(); //useRouter는 어디로 보낼지 설정하는거고 useRoute는 내가 지금 어디있는지 찾아주는 것.
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      /
      <RouterLink to="/about">About</RouterLink>
      /
      <RouterLink to="/dynamic/happy">Happy</RouterLink>
      /
      <RouterLink to="/dynamic/exciting">Exciting</RouterLink>
      /
      <RouterLink to="/cors">Cors</RouterLink>
      /
      <RouterLink to="/ex-cors">Cors EX</RouterLink>
    </nav>
    <div>
      <RouterLink to="/user/1">User1</RouterLink>
      /
      <RouterLink to="/user/2">User2</RouterLink>
      /
      <RouterLink to="/user/3">User3</RouterLink>
      /
      <RouterLink to="/user/4">User4</RouterLink>
      /
      <RouterLink to="/user/5">User5</RouterLink>
    </div>

    <!-- <div> -->
    <!-- 자바스크립트적으로 이동 -->
    <!-- <button v-on:click="router.push('/')">Home</button>
      <button v-on:click="router.push('/about')">About</button>
      <button v-on:click="router.push('/test')">Test</button>
      <button v-on:click="router.back()">뒤로</button>
      <button v-on:click="router.forward()">앞으로</button>
    </div> -->
  </header>
  <RouterView />
</template>

<style scoped></style>
