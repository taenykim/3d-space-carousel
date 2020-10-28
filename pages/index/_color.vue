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

<style></style>
