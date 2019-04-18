<template>
  <div class="display-container">
    <div class="products-container"></div>
    <div class="total-container">
      <h2>Total:</h2>
      <div class="total-output"></div>
    </div>
  </div>
</template>

<script>
export default { name: "pos-display" };
</script>

<style scoped>
.display-container {
  flex: 3;
  background-color: #dedede;
  border: 4px solid black;
  display: flex;
  flex-direction: column;
}

.products-container {
  background-color: white;
  flex-grow: 1;
  margin: 5%;
  margin-bottom: 1%;
  border: 4px solid black;
  box-sizing: border-box;
}

.total-container {
  flex-basis: 9%;
  padding: 1%;
  padding-right: 10%;
  margin-bottom: 1%;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
}

.total-output {
  background-color: white;
  flex-basis: 20%;
  border: 2px solid black;
}

h2 {
  color: black;
  font-size: 2vw;
  margin-right: 2%;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  justify-content: center;
}
</style>
