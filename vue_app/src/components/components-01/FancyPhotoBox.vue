<template>
  <div class="out">
    <div class="in">
      <div class="title">
        <slot name="title"> </slot>
      </div>
      <div class="photo">
        <slot name="photo"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FancyPhotoBox',
};
</script>
<!-- scoped 의미 : css는 전역적으로 퍼지는 속성이 있는데 그걸 막아줌 ->  이 컴포넌트에만 적용되도록 만들어줌 -->
<style scoped>
.out {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: lightgray;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
}

.in {
  /* border: 5px solid orange; */
  background-color: orange;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
}
</style>
