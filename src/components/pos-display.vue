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
        <tr v-for="product in productList" :key="product.id_prod">
          <td>{{product.code}}</td>
          <td>{{product.name}}</td>
          <td>{{product.quantity}}</td>
          <td>${{product.subtotal}}</td>
        </tr>
      </table>
    </div>
    <div class="total-container">
      <h2>Total:</h2>
      <div class="total-output">
        <h3>{{totalPrice}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { ipcRenderer } from "electron";

export default {
  name: "pos-display",
  methods: {
    onPaste(evt) {
      console.log("on paste", evt);
    },
    requestProductByCode: function(e) {
      let pastedData = e.clipboardData.getData("text");
      console.log("Pasted length: " + pastedData.length);
      if (pastedData !== "undefined" && pastedData.length === 13) {
        ipcRenderer.send("getProductByCode", pastedData);
      } else {
        console.debug(
          "Invalid code , It must be a 13 long digit with only numbers"
        );
      }
    },
    pushProduct: function(event, arg) {
      this.$store.dispatch("onProductRecived", arg);
    }
  },
  computed: {
    totalPrice() {
      return this.$store.getters.calculatedTotal;
    },
    productList() {
      return this.$store.getters.getProductList;
    }
  },
  mounted() {
    window.addEventListener("paste", this.requestProductByCode);

    ipcRenderer.on("productByCode", this.pushProduct);
  },
  beforeDestroy() {
    ipcRenderer.removeListener("productByCode", this.pushProduct);
    window.removeEventListener("paste", this.requestProductByCode);
  }
};
</script>

<style scoped>
.display-container {
  flex: 3;
  background-color: #dedede;
  border: 2px solid black;
  border-collapse: collapse;
  display: flex;
  flex-direction: column;
}

.products-container {
  background-color: white;
  flex-grow: 1;
  margin: 5%;
  margin-bottom: 1%;
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
  border: 2px solid black;
  border-collapse: collapse;
  text-align: center;
}

.col1 {
  width: 28%;
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
