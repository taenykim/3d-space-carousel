<template>
  <nuxt-link :to="`/${urlName}`">
    <div
      class="image-button"
      :style="{
        backgroundColor: `black`,
        backgroundImage: `url(${src})`,
        backgroundSize: `cover`,
        backgroundPosition: 'center'
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
  props: ["urlName", "src"],
  methods: {
    onClickImageButton() {
      observer.notify(CLICK_IMAGE_BUTTON, {});
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
