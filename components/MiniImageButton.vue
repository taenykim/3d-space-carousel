<template>
  <nuxt-link :to="`/${color}`">
    <div
      class="image-button"
      :style="{
        backgroundImage: `url(${src})`,
        backgroundSize: `cover`,
        backgroundPosition: 'center'
      }"
      v-on:click="onClickImageButton"
    ></div>
  </nuxt-link>
</template>

<script>
import observer from "~/observer/observer";

export default {
  props: ["color", "src"],
  methods: {
    onClickImageButton() {
      observer.notify("clickImageButton", {});
    }
  }
};
</script>

<style scoped lang="scss">
a {
  flex: 1;
  margin: 2px 2px 2px 0px;
  cursor: pointer;

  &:nth-child(1) {
    margin: 2px 2px 2px 2px;
  }
}
.image-button {
  width: 100%;
  height: 100%;
}
</style>
