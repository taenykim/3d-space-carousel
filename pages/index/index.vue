<template>
  <div
    class="contents"
    :style="{
      backgroundColor: `black`,
      backgroundImage: `url('https://images.alphacoders.com/193/thumb-1920-193.jpg')`,
      backgroundPosition: `center`,
      backgroundSize: `cover`
    }"
  ></div>
</template>

<script></script>

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
