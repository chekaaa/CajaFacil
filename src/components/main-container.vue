<template>
  <div class="main-container"></div>
</template>

<script>
import navbar from "@/components/navbar.vue";

export default {
  name: "mainContainer",
  components: {
    navbar
  }
};
</script>

<style scope>
.main-container {
  margin: 5% 10%;
  flex-basis: 90%;
  flex-grow: 1;
  background-color: white;
}
</style>
