<script setup>
import imageSrc from '@images/image.png';
</script>

<template>
  <img
    class="image"
    :src="imageSrc"
    alt="картинка"
  >
</template>

<style scoped>
.image {
  border: 1rem solid lime;
}
</style>
