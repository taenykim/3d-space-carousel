<template>
  <div ref="menuDrawer" id="menu-drawer">
    <div class="close-button" @click="close">X</div>
    <h3>3D Space Image Viewer</h3>
    <div class="contents">
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has
      roots in a piece of classical Latin literature from 45 BC, making it over
      2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
      College in Virginia, looked up one of the more obscure Latin words,
      consectetur, from a Lorem Ipsum passage, and going through the cites of
      the word in classical literature, discovered the undoubtable source. Lorem
      Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
      Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
      book is a treatise on the theory of ethics, very popular during the
      Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
      amet..", comes from a line in section 1.10.32.
    </div>
    <div class="contents">
      @copyright taenykim
    </div>
  </div>
</template>

<script>
import observer from "~/observer/observer";

export default {
  created() {
    observer.register("showMenuDrawer", this.show, this);
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
