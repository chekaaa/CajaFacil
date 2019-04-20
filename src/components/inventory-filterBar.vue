<template>
  <div class="filter-bar">
    <div class="bar-title">Busqueda por nombre:</div>
    <input v-model="filter" type="text" pattern="\d*" name="codeInput" id="codeInput">
    <a @click="updateInventoryListWithFilter()">Buscar</a>
    <a @click="resetFilter()" id="resetButton">Resetear filtros</a>
  </div>
</template>

<script>
import { ipcRenderer } from "electron";

export default {
  name: "inventoryFilterBar",
  data() {
    return {
      filter: ""
    };
  },
  methods: {
    updateInventoryListWithFilter: function(e) {
      let filterData;
      if (filterData === "") {
        filterData = null;
      } else {
        filterData = this.filter;
      }
      ipcRenderer.send("onInventoryRequest", filterData);
    },
    resetFilter: function() {
      this.filter = "";
      ipcRenderer.send("onInventoryRequest", null);
    }
  }
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
  font-size: 3vh;
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
