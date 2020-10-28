<template>
  <main class="main" :style="{ backgroundColor }">
    <div class="image-container" ref="imageContainer">
      <ImageButton v-for="color of colors" :key="color" :color="color" />
    </div>
  </main>
</template>

<script>
import observer from "~/observer/observer";

export default {
  data() {
    return {
      backgroundColor: "#fff",
      colors: ["red", "black", "green", "purple", "blue", "orange"]
    };
  },
  // computed: {
  //   colors() {
  //     return ["red", "black", "green", "purple", "blue", "orange"];
  //   }
  // },
  created() {
    observer.register("clickImageButton", this.changeView, this);
  },
  methods: {
    changeView(color) {
      this.changeColor(color);
      this.translateImageContainer();
    },
    changeColor(color) {
      this.backgroundColor = color;
    },
    translateImageContainer() {
      this.$refs.imageContainer.classList.add("move-down");
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
  background-color: #fff;
}

.move-down {
  transform: translateY(900px);
  transition: 1s;
}
</style>
