<template>
  <div id="layout">
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Header from "./Header";
export default {
  components: { Header }
};
</script>

<style lang="scss">
body {
  margin: 0;
}
#layout {
  width: 100vw;
  height: 100vh;
}
</style>
