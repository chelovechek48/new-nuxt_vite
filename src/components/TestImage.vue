<script setup>
import img from '@images/image.png';
</script>

<template>
  <img
    class="image"
    :src="img"
    alt="картинка"
  >
</template>

<style scoped>
.image {
  border: 1rem solid lime;
}
</style>
