<template>
  <main class="main">
    <button class="previous-button" v-on:click="decreaseSelectedIndex">
      Previous
    </button>
    <button class="next-button" v-on:click="increaseSelectedIndex">
      Next
    </button>
    <div
      class="image-container"
      ref="imageContainer"
      :style="{ display: currentColor ? 'none' : 'flex' }"
    >
      <div class="carousel">
        <ImageButton
          v-for="(color, index) of colors"
          :key="color"
          :color="color"
          :rotateDeg="index * (360 / colors.length)"
        />
      </div>
    </div>
    <NuxtChild :key="$route.params.color" />
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
  },
  mounted() {
    // none!
  },
  methods: {
    translateImageContainer() {
      this.$refs.imageContainer.classList.add("move-down");
      const timer = setTimeout(() => {
        this.$refs.imageContainer.style.display = "none";
        clearTimeout(timer);
      }, 1000);
    },
    increaseSelectedIndex() {
      this.selectedIndex++;
    },
    decreaseSelectedIndex() {
      this.selectedIndex--;
    },
    rotateCarousel() {
      const carousel = document.querySelector(".carousel");
      const angle = (this.selectedIndex / colors.length) * -360;
      carousel.style.transform = "translateZ(400px) rotateY(" + angle + "deg)";
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
  transform: translateZ(400px);
  transform-style: preserve-3d;
  transition: transform 1s;
}

.move-down {
  transform: translateY(900px);
  transition: 1s;
}

.previous-button {
  z-index: 100;
  position: fixed;
  top: 50%;
  left: 10px;
  width: 50px;
  height: 50px;
  perspective: 2000px;
  transform-style: preserve-3d;
  transform: translateZ(500px);
}

.next-button {
  z-index: 100;
  position: fixed;
  top: 50%;
  right: 10px;
  width: 50px;
  height: 50px;
  perspective: 2000px;
  transform-style: preserve-3d;
  transform: translateZ(500px);
}
</style>
