<template>
  <div class="container">
    <posDisplay/>
    <posButtons/>
  </div>
</template>

<script>
import posDisplay from "@/components/pos-display.vue";
import posButtons from "@/components/pos-buttons.vue";

export default {
  name: "POS",
  components: {
    posDisplay,
    posButtons
  }
};
</script>

<style scoped>
.container {
  flex-grow: 1;
  display: flex;
}
</style>


