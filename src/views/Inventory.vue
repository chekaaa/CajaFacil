<template>
  <div class="inventory-container">
    <inventoryFilterBar/>
    <inventoryDisplay/>
  </div>
</template>

<script>
import inventoryFilterBar from "@/components/inventory-filterBar.vue";
import inventoryDisplay from "@/components/inventory-display.vue";

export default {
  name: "Inventory",
  components: {
    inventoryFilterBar,
    inventoryDisplay
  }
};
</script>

<style scoped>
.inventory-container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  border-collapse: collapse;
}
</style>


