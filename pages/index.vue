<template>
  <div class="container">
    <main class="main">
      <NuxtChild :key="$route.params.id" />
      <div
        class="image-container"
        ref="imageContainer"
        :style="{ display: currentColor ? 'none' : 'flex' }"
      >
        <ImageButton v-for="color of colors" :key="color" :color="color" />
      </div>
    </main>
  </div>
</template>

<script>
import observer from "~/observer/observer";
import colors from "~/store/colors";

export default {
  props: ["currentColor", "flag"],
  data() {
    return {
      colors
    };
  },
  created() {
    observer.register("clickImageButton", this.translateImageContainer, this);
  },

  methods: {
    translateImageContainer() {
      this.$refs.imageContainer.classList.add("move-down");
      const timer = setTimeout(() => {
        this.$refs.imageContainer.style.display = "none";
        clearTimeout(timer);
      }, 1000);
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
  overflow: hidden;
}

.contents {
  width: 100%;
  height: 100%;
}

.image-container {
  display: flex;
  width: 90%;
  max-width: 800px;
  height: 200px;
  border: 4px solid black;
  background-color: #fff;
  position: absolute;
}

.move-down {
  transform: translateY(900px);
  transition: 1s;
}
</style>
