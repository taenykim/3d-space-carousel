<template>
  <div class="contents" :style="{ backgroundColor: currentColor }"></div>
</template>

<script>
export default {
  asyncData({ params }) {
    console.log("컬러들어옴", params.color);

    return { currentColor: params.color };
  },
  validate({ params }) {
    return (
      ["red", "black", "green", "purple", "blue", "orange"].indexOf(
        params.color
      ) >= 0
    );
  }
};
</script>

<style></style>
