<template>
  <nuxt-link :to="`/${color}`">
    <div
      class="image-button"
      :style="{
        backgroundImage: `url(${src})`,
        backgroundSize: `cover`,
        backgroundPosition: 'center',
        transform: `rotateY(${rotateDeg}deg) translateZ(288px)`
      }"
      v-on:click="onClickImageButton"
    ></div>
  </nuxt-link>
</template>

<script>
import observer from "~/observer/observer";

export default {
  props: ["color", "rotateDeg", "src"],
  created() {
    // observer.register("updateSelectedIndex", this.updateSelectedIndex, this);
  },
  methods: {
    onClickImageButton() {
      observer.notify("clickImageButton", {});
    }
  }
};
</script>

<style scoped lang="scss">
a {
}
.image-button {
  position: absolute;
  width: 190px;
  height: 120px;
  transition: transform 0.5s, opacity 1s;
  cursor: pointer;
}
</style>
