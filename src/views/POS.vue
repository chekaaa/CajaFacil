<template>
  <div class="pos-container">
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

<style>
.pos-container {
  flex-grow: 1;
  display: flex;
}
</style>


