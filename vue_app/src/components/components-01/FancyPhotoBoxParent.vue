<template>
  <FancyPhotoBox>
    <!-- v-slot:슬롯이름 -> 슬롯 이름으로 보내줌 -->
    <template v-slot:title>
      <h1>아잠만</h1>
    </template>
    <template #photo>
      <img
        src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2Ff8%2F8f%2Fc4%2Ff88fc4cb4ece258920d73f21e8cdd869.jpg&type=sc960_832"
        alt="아잠만"
      />
    </template>
  </FancyPhotoBox>
</template>
<script>
import FancyPhotoBox from './FancyPhotoBox.vue';
export default {
  name: 'FancyPhotoBoxParent',
  components: { FancyPhotoBox },
};
</script>
<style lang=""></style>
