<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
  font-size: 2em;
  background: #8b623aed;
}
body {
  line-height: 1;
  min-height: 100%;
  position: relative; }

html {
  min-height: 100%;
  background-color: #946d48; }
</style>
