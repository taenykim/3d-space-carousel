<template>
  <nuxt-link :to="`/${color}`">
    <div
      class="image-button"
      :style="{
        backgroundColor: color,
        transform: `rotateY(${rotateDeg}deg) translateZ(288px)`
      }"
      v-on:click="onClickImageButton"
    ></div>
  </nuxt-link>
</template>

<script>
import observer from "~/observer/observer";

export default {
  props: ["color", "rotateDeg"],
  created() {
    console.log(this.rotateDeg);
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
  position: absolute;
  width: 190px;
  height: 120px;
  left: 10px;
  top: 10px;
  line-height: 116px;
  font-size: 80px;
  font-weight: bold;
  color: white;
  text-align: center;
  transition: transform 1s, opacity 1s;
  cursor: pointer;
}

.image-button {
  width: 100%;
  height: 100%;
}
</style>
