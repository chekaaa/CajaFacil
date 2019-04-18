<template>
  <div class="display-container">
    <div class="products-container">
      <table>
        <tr>
          <th class="col1">Codigo</th>
          <th class="col2">Nombre</th>
          <th class="col3">Cantidad</th>
          <th class="col4">Subtotal</th>
        </tr>
        <tr>
          <td>{{codigo}}</td>
          <td>Pilas</td>
          <td>10</td>
          <td>$5000</td>
        </tr>
        <tr>
          <td>133</td>
          <td>Super 8</td>
          <td>1</td>
          <td>1</td>
        </tr>
      </table>
    </div>
    <div class="total-container">
      <h2>Total:</h2>
      <div class="total-output">
        <h3>$325325</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pos-display",
  data() {
    return {
      codigo: "1234"
    };
  },
  methods: {
    onPaste(evt) {
      console.log("on paste", evt);
    }
  },
  mounted() {
    window.addEventListener("paste", function(e) {
      console.log(e.clipboardData.getData("text"));
    });
  }
};
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
  border: 3px solid black;
  text-align: center;
}

.col1 {
  width: 16%;
}
.col3 {
  width: 16%;
}
.col4 {
  width: 20%;
}

td {
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: left;
  font-size: 2vw;
  border: 2px solid black;
}
</style>
