<template>
  <div class="main-container">
    <router-view/>
  </div>
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
  margin: 5% 4%;
  flex-basis: 90%;
  flex-grow: 1;
  display: flex;
  background-color: #dedede;
}
</style>
