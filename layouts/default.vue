<template>
  <div id="layout">
    <Header />
    <Nuxt />
    <MenuDrawer />
  </div>
</template>

<script>
import Header from "./Header";
import MenuDrawer from "./MenuDrawer";
export default {
  components: { Header, MenuDrawer }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
body {
  font-family: "Roboto", sans-serif;
  margin: 0;
}
#layout {
  width: 100vw;
  height: 100vh;
}
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 4px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #ffffff88;
  border-radius: 4px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: white;
}
</style>
