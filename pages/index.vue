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
import { ARROW_BUTTON_ACTION, IMAGE_BUTTON_ACTION } from "~/observer/actions";

const { REMOVE_ARROW_BUTTON, CHANGE_SELECTED_INDEX } = ARROW_BUTTON_ACTION;
const { CLICK_IMAGE_BUTTON } = IMAGE_BUTTON_ACTION;

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
    observer.register(CLICK_IMAGE_BUTTON, this.translateImageContainer, this);
    observer.register(CHANGE_SELECTED_INDEX, this.changeSelctedIndex, this);
  },
  mounted() {
    // none!
  },
  methods: {
    translateImageContainer() {
      this.$refs.imageContainer.classList.add("move-down");
      observer.notify(REMOVE_ARROW_BUTTON, {});
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
@import "~/assets/scss/variables.scss";

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
  transform: translateZ(900px);
  transform-style: preserve-3d;
  transition: transform 1s;
}

.move-down {
  opacity: 0;
  transition: 1s;
}
</style>
