<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

/* html {
  overflow: hidden !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

html::-webkit-scrollbar {
  width: 0;
  height: 0;
}
#app {
  width: 100%;
} */
.vs-sidebar__item__icon {
    color: #009FB7 !important;
}

html, body {
  font-family: 'Roboto', sans-serif  !important;
}

#app {
  --font-family-sans-serif :'Roboto'!important;
  font-family: 'Roboto', sans-serif !important;
}
</style>
