<template>
  <div
    class="image-button"
    :style="{ backgroundColor: color }"
    v-on:click="onClickImageButton"
  ></div>
</template>

<script>
import observer from "~/observer/observer";

export default {
  props: ["color"],
  //   data() {
  //     return { color: "red" };
  //   }
  methods: {
    onClickImageButton() {
      observer.notify("clickImageButton", this.color);
    }
  }
};
</script>

<style scoped lang="scss">
.image-button {
  flex: 1;
  margin: 2px 2px 2px 0px;
  cursor: pointer;

  &:nth-child(1) {
    margin: 2px 2px 2px 2px;
  }
}
</style>
