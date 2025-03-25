<!-- js관련 -->
<script setup>
import CheckList from './components/CheckList.vue';
import TodoProps from './components/TodoProps.vue';
import EventProps from './components/EventProps.vue';
import PropsList from './components/PropsList.vue';
import PropsList2 from './components/PropsList2.vue';

const sendingEvent = () => {
  alert('부모 컴포넌트 님이 말씀 하셨다! 비상!!!!!!!');
};
</script>

<!-- html 관련 -->
<template>
  <div>
    <PropsList siteName="네이버" siteUrl="http://naver.com" visited="방문" />
    <PropsList siteName="다음" siteUrl="http://daum.net" visited="미방문" />
    <PropsList2 :siteInfo="siteData" />
  </div>
</template>

<!-- 스타일-디자인 (css)부분 -->
<style scoped></style>

<script>
export default {
  name: 'App',
  data() {
    return {
      siteData: {
        siteName: '페이스북',
        siteUrl: 'http://facebook.com',
        visited: '방문',
      },
    };
  },
};
</script>
