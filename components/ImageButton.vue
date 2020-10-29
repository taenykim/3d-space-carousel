<template>
  <nuxt-link :to="`/${urlName}`">
    <div
      ref="imageButton"
      class="image-button"
      :style="{
        backgroundColor: `black`,
        backgroundImage: `url(${src})`,
        backgroundSize: `cover`,
        backgroundPosition: 'center',
        transform: `rotateY(${rotateDeg}deg) translateZ(288px)`
      }"
      @click="onClickImageButton"
    ></div>
  </nuxt-link>
</template>

<script>
import observer from "~/observer/observer";
import { IMAGE_BUTTON_ACTION } from "~/observer/actions";

const { CLICK_IMAGE_BUTTON } = IMAGE_BUTTON_ACTION;

export default {
  props: ["urlName", "rotateDeg", "src"],
  created() {},
  mounted() {},
  methods: {
    onClickImageButton() {
      observer.notify(CLICK_IMAGE_BUTTON, {});
    }
  }
};
</script>

<style scoped lang="scss">
.image-button {
  position: absolute;
  width: 190px;
  height: 120px;
  cursor: pointer;
  box-shadow: 0px 0px 5px 2px #dddddd33;
}
</style>
