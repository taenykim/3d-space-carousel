<template>
  <div ref="menuDrawer" id="menu-drawer">
    <div class="close-button" @click="close">X</div>
    <h3>3D Space Carousel</h3>
    <div class="contents">
      This project was created with a Vue framework, Nuxt. The source code can
      be viewed by clicking the GitHub icon at the top. The space image used in
      the project was referenced at
      <a href="https://wall.alphacoders.com/" target="_blank" class="ref-link"
        >https://wall.alphacoders.com/</a
      >
      and the svg icon at
      <a href="https://wall.alphacoders.com/" target="_blank" class="ref-link"
        >https://www.flaticon.com/</a
      >.
    </div>
    <div class="contents">
      Thank you for watching.
    </div>
    <div class="contents">
      @author
      <a href="https://github.com/taenykim" target="_blank" class="me-link">
        taenykim</a
      >
    </div>
  </div>
</template>

<script>
import observer from "~/observer/observer";
import { MENU_DRAWER_ACTION } from "~/observer/actions";

const { SHOW_MENU_DRAWER } = MENU_DRAWER_ACTION;
export default {
  created() {
    observer.register(SHOW_MENU_DRAWER, this.show, this);
  },
  methods: {
    show() {
      this.$refs.menuDrawer.classList.add("show");
    },
    close() {
      this.$refs.menuDrawer.classList.remove("show");
    }
  }
};
</script>

<style lang="scss" scoped>
.ref-link {
  color: yellow;
}
.me-link {
  color: rgb(0, 195, 255);
}
#menu-drawer {
  position: fixed;
  top: 70px;
  right: 0;
  z-index: 150;
  width: 260px;
  height: 120px;
  background: linear-gradient(150deg, #14131d, rgb(24, 1, 61));
  transform: translate(100%, 0);
  transition: 1s;
  padding: 20px;
  border: 3px solid #fff;
  border-radius: 20px;
  color: #21e33a;
  overflow-y: scroll;
}

.close-button {
  position: absolute;
  top: 14px;
  right: 20px;
  color: white;
  cursor: pointer;
}

h3 {
  margin: 0 0 24px 0;
  padding: 0;
}

.contents {
  margin-bottom: 20px;
}

.show {
  transform: translate(-10px, 0) !important;
  z-index: 100;
}
</style>
