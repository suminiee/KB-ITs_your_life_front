<template>
  <SlotChild>
    <h1>슬롯 테스트!</h1>
    <img
      src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2Ff8%2F8f%2Fc4%2Ff88fc4cb4ece258920d73f21e8cdd869.jpg&type=sc960_832"
      alt="아잠만"
    />
  </SlotChild>
</template>
<script>
import SlotChild from './SlotChild.vue';
export default {
  name: 'SlotParent',
  components: { SlotChild },
};
</script>
<style lang=""></style>
