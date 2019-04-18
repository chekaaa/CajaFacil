<template>
  <div id="app">
    <navbar/>
    <mainContainer/>
  </div>
</template>
<script>
import navbar from "@/components/navbar.vue";
import mainContainer from "@/components/main-container.vue";

export default {
  name: "App",
  components: {
    navbar,
    mainContainer
  }
};
</script>



<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: #bbe2ff;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
