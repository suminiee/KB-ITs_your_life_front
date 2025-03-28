<template>
  <div>
    <button @click="parentEvent">자식 버튼</button>
  </div>
</template>
<script>
export default {
  name: 'EventProps',
  props: ['parentEvent'],
};
</script>
<style lang=""></style>
