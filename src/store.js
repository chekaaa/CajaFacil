import Vue from "vue";
import Vuex from "vuex";
import { ipcRenderer } from "electron";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posProductList: []
  },
  getters: {
    calculatedTotal: state => {
      let tempTotal = 0;
      state.posProductList.forEach(product => {
        tempTotal += product.subtotal;
      });

      return "$" + tempTotal;
    },
    getProductList: state => {
      return state.posProductList;
    }
  },
  mutations: {
    onProductRecived: function(state, arg) {
      if (arg != null) {
        let objIndex = state.posProductList.findIndex(
          obj => obj.id === arg.id_prod
        );
        console.log("ObjIndex: " + objIndex);
        if (objIndex !== -1) {
          state.posProductList[objIndex].quantity++;
          state.posProductList[objIndex].subtotal =
            state.posProductList[objIndex].quantity * arg.precio_prod;
        } else {
          state.posProductList.push({
            id: arg.id_prod,
            code: arg.cod_ucc14,
            name: arg.nombre_prod,
            quantity: 1,
            subtotal: arg.precio_prod
          });
        }
      } else {
        console.log("Produc not found");
      }
    },
    commitSale: function(state) {
      if (state.posProductList.length > 0) {
        ipcRenderer.send("onCommitSale", state.posProductList);
      } else {
        console.log("No products on list");
      }
    },
    clearSale: function(state) {
      state.posProductList = [];
    }
  },
  actions: {
    onProductRecived(context, arg) {
      context.commit("onProductRecived", arg);
    },
    clearSale(context) {
      context.commit("clearSale");
    },
    commitSale(context) {
      context.commit("commitSale");
    }
  }
});
