<template>
  <div id="app">
    <div id="nav">
      <navbar/>
    </div>
  </div>
</template>
<script>
import navbar from "@/components/navbar.vue";

export default {
  name: "App",
  components: {
    navbar
  }
};
</script>



<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: #5e6572;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
