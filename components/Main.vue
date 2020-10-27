<template>
  <main class="main">
    <div class="image-container">
      <ImageButton v-for="color of colors" :key="color" :color="color" />
    </div>
  </main>
</template>

<script>
export default {
  computed: {
    colors() {
      return ["red", "black", "green", "purple", "blue", "orange"];
    }
  }
};
</script>

<style scoped lang="scss">
@import "~/assets/sass/variables.scss";

main {
  height: calc(100vh - #{$header-height});
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container {
  display: flex;
  width: 90%;
  max-width: 800px;
  height: 200px;
  border: 4px solid black;
}
</style>
