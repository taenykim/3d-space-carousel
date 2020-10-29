<template>
  <div
    class="contents"
    :style="{
      backgroundColor: `black`,
      backgroundImage: `url(${src})`,
      backgroundSize: `cover`,
      backgroundPosition: 'center'
    }"
  ></div>
</template>

<script>
import colors from "~/store/colors";

export default {
  asyncData({ params }) {
    const src = colors.filter(item => item.name === params.color)[0].src;

    return { src };
  },
  validate({ params }) {
    return colors.map(item => item.name).indexOf(params.color) >= 0;
  }
};
</script>

<style scoped lang="scss">
@import "~/assets/scss/variables.scss";

.contents {
  width: 100%;
  height: calc(100vh - #{$header-height});
  top: 60px;
  left: 0;
  position: absolute;
}
</style>
