<template>
  <div class="display-container">
    <div class="products-container">
      <table>
        <tr>
          <th class="col1">Producto</th>
          <th class="col2">Stock</th>
          <th class="col3">Precio unitario</th>
          <th class="col4">Total</th>
        </tr>
        <tr v-for="product in productList" :key="product.id">
          <td>{{product.name}}</td>
          <td>{{product.stock}}</td>
          <td>${{product.price}}</td>
          <td>${{product.totalPrice}}</td>
        </tr>
      </table>
    </div>
    <div class="total-container">
      <h2>Valor total en productos:</h2>
      <div class="total-output">
        <h3>{{totalMoney}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { ipcRenderer } from "electron";

export default {
  name: "pos-display",
  data() {
    return {
      filterCode: null,
      productList: []
    };
  },
  methods: {
    updateProductList: function(e, _productList) {
      this.productList = [];
      if (_productList === null) return;
      _productList.forEach(product => {
        this.productList.push({
          id: product.id_prod,
          name: product.nombre_prod,
          stock: product.cantidad_prod,
          price: product.precio_prod,
          totalPrice: product.precio_prod * product.cantidad_prod
        });
      });
    }
  },
  computed: {
    totalMoney() {
      let money = 0;
      this.productList.forEach(product => {
        money += product.totalPrice;
      });
      return "$" + money;
    }
  },
  mounted() {
    ipcRenderer.send("onInventoryRequest", null);
    ipcRenderer.on("productListSent", this.updateProductList);
  },
  beforeDestroy() {
    ipcRenderer.removeListener("productListSent", this.updateProductList);
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
  background-color: rgb(194, 194, 194);
  color: black;
  border: 3px solid black;
  text-align: center;
}

.col1 {
  width: 28%;
}
.col2 {
  width: 10%;
}
.col3 {
  width: 20%;
}
.col4 {
  width: 10%;
}

td {
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: left;
  font-size: 2vw;
  border: 2px solid black;
}
</style>
