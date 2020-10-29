<template>
  <header>
    <a href="/"><img class="header-icon home" src="~/assets/svg/home.svg"/></a>
    <div class="mini-image-container" ref="miniImageContainer">
      <MiniImageButton
        v-for="color of colors"
        :key="color.name"
        :color="color.name"
        :src="color.src"
      />
    </div>
    <img
      class="header-icon full"
      src="~/assets/svg/full.svg"
      @click="toFullDisplay"
    />
    <a href="/">
      <img class="header-icon github" src="~/assets/svg/github.svg"
    /></a>
    <img
      class="header-icon menu"
      src="~/assets/svg/menu.svg"
      @click="showMenuDrawer"
    />
  </header>
</template>

<script>
import observer from "~/observer/observer";
import colors from "~/store/colors";

export default {
  data() {
    return {
      colors
    };
  },
  created() {
    observer.register("clickImageButton", this.changeView, this);
  },
  methods: {
    changeView(color) {
      this.translateImageContainer();
    },
    translateImageContainer() {
      this.$refs.miniImageContainer.classList.add("move-down");
    },
    toFullDisplay() {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    },
    showMenuDrawer() {
      observer.notify("showMenuDrawer", {});
    }
  }
};
</script>

<style scoped lang="scss">
@import "~/assets/scss/variables.scss";

header {
  height: $header-height;
  background-color: #000;
  position: relative;
}

.header-icon {
  height: 30px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

.home {
  left: 30px;
}

.full {
  right: 84px;
}

.github {
  height: 33px;
  right: 132px;
}

.menu {
  height: 35px;
  right: 30px;
}

.mini-image-container {
  display: flex;
  width: 30vw;
  height: 40px;
  border: 2px solid black;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100px);
}

.move-down {
  transform: translate(-50%, -50%);
  transition: 1s;
}
</style>
