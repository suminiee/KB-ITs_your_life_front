<template>
  <div class="top">
    <h1>여기는 TOP 슬롯, 뭐든지 기울입니다!</h1>
    <slot name="top"> </slot>
  </div>
  <div class="bottom">
    <h1>여기는 BOT 슬롯, 뭐든지 밑줄을 칩니다!</h1>
    <slot name="bottom"> </slot>
  </div>
</template>
<script>
export default {
  name: 'NamedSlotChild',
};
</script>
<!-- scoped 의미 : css는 전역적으로 퍼지는 속성이 있는데 그걸 막아줌 ->  이 컴포넌트에만 적용되도록 만들어줌 -->
<style scoped>
.top {
  font-style: italic;
  background-color: skyblue;
}
.bottom {
  text-decoration: underline;
  background-color: rgb(231, 231, 42);
}
</style>
