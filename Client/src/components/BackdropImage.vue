<template>
  <img class="backdrop-image" :src="imageName" alt="" />
</template>

<script>
export default {
  props: {
    imageName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.backdrop-image {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 90px;
  left: 0;
  filter: blur(90px);
  transform: scale(1.1);
}
</style>
