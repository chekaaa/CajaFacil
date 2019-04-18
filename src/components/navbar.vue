<template>
  <div class="navbar">
    <ul>
      <li>
        <a v-on:click="GetLurem">Caja</a>
      </li>
      <li>
        <a v-on:click="createdb">Historial de ventas</a>
      </li>
      <li>Inventario</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "navbar",
  methods: {
    createdb: function(event) {
      this.$ipc.send("onCreatedb");
    },
    GetLurem: function(event) {
      this.$ipc.send("getLorem");
    },
    SetListeners: function() {
      this.$ipc.on("loremRows", (event, arg) => {
        console.log("Recived the " + arg[3].info);
      });
    }
  },
  created() {
    this.SetListeners();
  }
};
</script>

<style scope>
.navbar {
  background-color: #bfc0c0;
  font-size: 1.7em;
}

ul {
  list-style: none;
  display: flex;
}

li {
  color: #2d3142;
  padding: 0.1em 0.3em;
  font-weight: bold;
  margin: 0.3em 0.5em;
  text-align: center;
  background-color: #9d9e9e;
  cursor: pointer;
  box-shadow: 0px 4px 6px 2px rgb(133, 133, 133);
}

li:hover {
  background-color: #abadad;
}
</style>


