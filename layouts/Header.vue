<template>
  <header>
    <div class="mini-image-container" ref="miniImageContainer">
      <MiniImageButton v-for="color of colors" :key="color" :color="color" />
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      colors: ["red", "black", "green", "purple", "blue", "orange"]
    };
  }
};
</script>

<style scoped lang="scss">
@import "~/assets/sass/variables.scss";

header {
  height: $header-height;
  background-color: aqua;
  position: relative;
}

.mini-image-container {
  display: flex;
  width: 140px;
  height: 40px;
  border: 2px solid black;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
