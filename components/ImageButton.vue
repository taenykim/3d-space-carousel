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
      observer.notify("click", this.color);
    }
  }
};
</script>

<style scoped lang="scss">
.image-button {
  flex: 1;
  margin: 4px 4px 4px 0px;
  cursor: pointer;

  &:nth-child(1) {
    margin: 4px 4px 4px 4px;
  }
}
</style>
