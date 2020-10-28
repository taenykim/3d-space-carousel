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

export default {
  props: ["currentColor", "flag"],
  data() {
    return {
      backgroundColor: this.currentColor ? this.currentColor : "#fff",
      colors: ["red", "black", "green", "purple", "blue", "orange"],
      moved: false
    };
  },
  // computed: {
  //   colors() {
  //     return ["red", "black", "green", "purple", "blue", "orange"];
  //   }
  // },
  created() {
    observer.register("clickImageButton", this.changeView, this);
    console.log("크리에이트됨");
    console.log(this.currentColor);
    console.log(this.flag);
  },
  mounted() {
    console.log("마운트됨");
  },
  watch: {
    moved() {
      console.log("watch");
      this.translateImageContainer();
    }
  },
  methods: {
    changeView(color) {
      console.log(1);

      this.changeColor(color);
      this.moved = true;
    },
    changeColor(color) {
      this.backgroundColor = color;
    },
    translateImageContainer() {
      console.log("this");

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
