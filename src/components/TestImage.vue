<script setup>
import imageSrc from '@images/image.png';
import { ref, onMounted } from 'vue';

const imageDOM = ref(null);
onMounted(() => {
  console.log(imageDOM.value);
});
</script>

<template>
  <img
    class="image"
    :src="imageSrc"
    alt="картинка"
    ref="imageDOM"
  >
</template>

<style scoped>
.image {
  border: 1rem solid lime;
}
</style>
