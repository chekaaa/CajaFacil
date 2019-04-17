<template>
  <div class="container">
    <navbar/>
  </div>
</template>

<script>
import navbar from "@/components/navbar.vue";
import mainContainer from "@/components/main-container.vue";

export default {
  name: "POS",
  components: {
    navbar,
    mainContainer
  }
};
</script>

