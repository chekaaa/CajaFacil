<template>
  <div class="filter-bar">
    <div class="bar-title">Busqueda por codigo:</div>
    <input type="number" pattern="\d*" name="codeInput" id="codeInput" min="0">
    <a>Buscar</a>
    <a id="resetButton">Resetear filtros</a>
  </div>
</template>

<script>
export default {
  name: "inventoryFilterBar"
};
</script>

<style scoped>
.filter-bar {
  flex: 1;
  background-color: #cfcfcf;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 2vh;
}

.filter-bar > div {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 0 1vh;
  font-weight: bold;
  font-size: 2.5vh;
}

.filter-bar .bar-title {
  font-size: 3.5vh;
  font-weight: bolder;
}

.filter-bar #codeInput {
  margin: 2vh 0;
  margin-left: 1%;
  margin-right: 20%;
  text-align: center;
  font-weight: bold;
  font-size: 2vh;
}

.filter-bar a {
  color: #2d3142;
  padding: 0.1em 0.3em;
  font-weight: bold;
  margin: 1em 1em;
  text-align: center;
  background-color: #9d9e9e;
  cursor: pointer;
  box-shadow: 0px 2px 7px 2px rgb(100, 100, 100);
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.filter-bar #resetButton {
  padding-left: 2%;
  padding-right: 2%;
}
</style>
