<template>
  <main class="main">
    <NuxtChild :key="$route.params.color" />
    <ArrowButtonWrapper />
    <div
      class="image-container"
      ref="imageContainer"
      :style="{ display: currentColor ? 'none' : 'flex' }"
    >
      <div id="big-image-button-wrapper" class="carousel">
        <ImageButton
          v-for="(color, index) of colors"
          :key="color[`name`]"
          :color="color[`name`]"
          :rotateDeg="index * (360 / colors.length) + 360 / colors.length / 2"
          :src="color[`src`]"
        />
      </div>
    </div>
  </main>
</template>

<script>
import observer from "~/observer/observer";
import colors from "~/store/colors";

export default {
  props: ["currentColor", "flag"],
  data() {
    return {
      colors,
      selectedIndex: 0
    };
  },
  watch: {
    selectedIndex() {
      this.rotateCarousel();
    }
  },
  created() {
    observer.register("clickImageButton", this.translateImageContainer, this);
    observer.register("changeSelectedIndex", this.changeSelctedIndex, this);
  },
  mounted() {
    // none!
  },
  methods: {
    translateImageContainer() {
      this.$refs.imageContainer.classList.add("move-down");
      observer.notify("removeArrowButton", {});
      const timer = setTimeout(() => {
        this.$refs.imageContainer.style.display = "none";
        clearTimeout(timer);
      }, 1000);
    },
    changeSelctedIndex(type) {
      if (type === "increase") this.selectedIndex++;
      if (type === "decrease") this.selectedIndex--;
    },
    decreaseSelectedIndex() {
      this.selectedIndex--;
    },
    rotateCarousel() {
      const carousel = document.querySelector(".carousel");
      const angle = (this.selectedIndex / colors.length) * -360;
      carousel.style.transform = "translateZ(900px) rotateY(" + angle + "deg)";
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
  background-image: url("https://images.alphacoders.com/193/thumb-1920-193.jpg");
  background-position: "center";
  background-size: cover;
}

.image-container {
  margin: 40px 0;
  width: 210px;
  height: 140px;
  margin: 80px auto;
  perspective: 1000px;
}

.carousel {
  width: 100%;
  height: 100%;
  transform: translateZ(900px);
  transform-style: preserve-3d;
  transition: transform 1s;
}

.move-down {
  opacity: 0;
  transition: 1s;
}
</style>
