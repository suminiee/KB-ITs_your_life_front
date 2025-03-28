<template>
  <div>
    <slot v-bind:msg="data1"></slot>
    <slot name="named" v-bind:msg="data2"></slot>
  </div>
</template>
<script>
export default {
  name: 'ScopedSlotChild',
  data() {
    return {
      data1: '과연 나는 어떤 태그에 들어갈까? 너무 궁금하다',
      data2: '그럼 나는?',
    };
  },
};
</script>
<!-- scoped 의미 : css는 전역적으로 퍼지는 속성이 있는데 그걸 막아줌 ->  이 컴포넌트에만 적용되도록 만들어줌 -->
<style scoped></style>
