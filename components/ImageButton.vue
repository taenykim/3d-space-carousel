<template>
  <div class="image-button" :style="{ backgroundColor: color }"></div>
</template>

<script>
export default {
  props: ["color"]
  //   data() {
  //     return { color: "red" };
  //   }
};
</script>

<style scoped lang="scss">
.image-button {
  flex: 1;
  margin: 4px 4px 4px 0px;

  &:nth-child(1) {
    margin: 4px 4px 4px 4px;
  }
}
</style>
