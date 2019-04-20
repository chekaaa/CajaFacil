<template>
  <div class="salesHistory-container">
    <salesFilterBar/>
    <salesDisplay/>
  </div>
</template>

<script>
import salesFilterBar from "@/components/salesHistory-filterBar.vue";
import salesDisplay from "@/components/salesHistory-display.vue";

export default {
  name: "SalesHistory",
  components: {
    salesFilterBar,
    salesDisplay
  }
};
</script>

<style scoped>
.salesHistory-container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  border: 4px solid black;
  border-collapse: collapse;
}
</style>
