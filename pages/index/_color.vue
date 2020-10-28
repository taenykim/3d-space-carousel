<template>
  <div class="contents" :style="{ backgroundColor: currentColor }"></div>
</template>

<script>
import colors from "~/store/colors";

export default {
  asyncData({ params }) {
    return { currentColor: params.color };
  },
  validate({ params }) {
    return colors.indexOf(params.color) >= 0;
  }
};
</script>

<style scoped lang="scss">
@import "~/assets/sass/variables.scss";

.contents {
  width: 100%;
  height: calc(100vh - #{$header-height});
  top: 60px;
  left: 0;
  position: absolute;
}
</style>
