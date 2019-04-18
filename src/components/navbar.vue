<template>
  <div class="navbar">
    <ul>
      <li>
        <router-link class="router-link" to="POS">Caja</router-link>
      </li>
      <li>
        <router-link class="router-link" to="Sales-history">Historial de ventas</router-link>
      </li>
      <li>
        <router-link class="router-link" to="Inventory">Inventario</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "navbar"
};
</script>

<style>
.navbar {
  background-color: #bfc0c0;
  font-size: 1.7em;
}

.router-link {
  text-decoration: none;
  color: inherit;
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


