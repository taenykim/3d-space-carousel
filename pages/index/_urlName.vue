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
import imageSrcs from "~/store/imageSrcs";

export default {
  asyncData({ params }) {
    const src = imageSrcs.filter(item => item.name === params.urlName)[0].src;

    return { src };
  },
  validate({ params }) {
    return imageSrcs.map(item => item.name).indexOf(params.urlName) >= 0;
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
