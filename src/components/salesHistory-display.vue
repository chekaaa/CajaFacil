<template>
  <div class="display-container">
    <div class="products-container">
      <table>
        <tr>
          <th class="col1">Codigo de boleta</th>
          <th class="col2">Fecha</th>
          <th class="col3">Total</th>
          <th class="col4">Detalles</th>
        </tr>
        <tr>
          <td>454535</td>
          <td>04-05-2019</td>
          <td>$25000</td>
          <td id="details">
            <button v-on:click="showWindow">+</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { ipcRenderer } from "electron";

export default {
  name: "pos-display",
  methods: {
    showWindow: function() {
      console.log("Showing window");
      ipcRenderer.send("showWindowtFunction", undefined);
    }
  }
};
</script>

<style scoped>
.display-container {
  flex: 8;
  background-color: #dedede;
  border-collapse: collapse;
  display: flex;
  flex-direction: column;
}

.products-container {
  background-color: white;
  flex-grow: 1;
  margin: 5%;
  margin-bottom: 2%;
  /* border: 2px solid black; */
  border-collapse: collapse;
  box-sizing: border-box;
  overflow-y: scroll;
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
  text-align: center;
}

h2,
h3 {
  color: black;
  font-size: 100%;
  margin-right: 2%;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
h3 {
  margin: 0;
  padding: 0;
  flex-grow: 1;
  height: 100%;
  font-size: 100%;
}

table {
  width: 100%;
  box-sizing: border-box;
  border-collapse: collapse;
  table-layout: fixed;
}

th {
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: bold;
  font-size: 2vw;
  background-color: rgb(194, 194, 194);
  color: black;
  border: 3px solid black;
  text-align: center;
}

.col1 {
  width: 15%;
}
.col2 {
  width: 15%;
}
.col3 {
  width: 10%;
}
.col4 {
  width: 7%;
}

td {
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: left;
  font-size: 2vw;
  border: 2px solid black;
}

#details {
  text-align: center;
}
#details button {
  padding: 0 20%;
}
</style>
