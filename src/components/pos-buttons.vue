<template>
  <div class="buttons-container">
    <ul>
      <li id="confirm" @click="confirmSale()">Confirmar</li>
      <li id="cancel" @click="cancelSale()">Cancelar</li>
    </ul>
  </div>
</template>

<script>
import { ipcRenderer } from "electron";
import { constants } from "crypto";

export default {
  name: "pos-buttons",
  methods: {
    cancelSale: function(e) {
      this.$store.dispatch("clearSale");
    },
    confirmSale: function(e) {
      this.$store.dispatch("commitSale");
    },
    onSaleDone: function(event, data) {
      this.$store.dispatch("clearSale");
      alert("Venta realizada con exito");
    }
  },
  mounted() {
    ipcRenderer.on("onSaleDone", this.onSaleDone);
  },
  beforeDestroy() {
    ipcRenderer.removeListener("onSaleDone", this.onSaleDone);
  }
};
</script>

<style scoped>
.buttons-container {
  flex: 1;
  display: flex;
  background-color: #cfcfcf;
  border: 2px solid black;
  border-collapse: collapse;
  border-left: 0px;
}
ul {
  flex-grow: 1;
  margin: 15vh 2vh;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

li {
  flex-basis: 30%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  box-shadow: none;
  font-size: 3vw;
  box-shadow: 0px 4px 6px 2px rgb(133, 133, 133);
  /* border: 4px solid black; */
}

#confirm {
  background-color: #97eb7b;
}

#confirm:hover {
  background-color: #b7e7a7;
}

#cancel {
  background-color: #ff5856;
}

#cancel:hover {
  background-color: #fc9796;
}
</style>
