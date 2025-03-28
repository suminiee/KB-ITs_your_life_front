<template>
  <div>
    <h1>{{ siteName }}</h1>
    <!-- 사이트 주소가 변수로 전달됨 -> v-bind로 전달해야함!! -->
    <a :href="siteUrl">{{ siteName }} 링크</a>
    <h2>방문 여부 : {{ visited }}</h2>
    <hr />
  </div>
</template>
<script>
export default {
  name: 'PropsList',
  props: ['siteName', 'siteUrl', 'visited'],
};
</script>
<style lang=""></style>
