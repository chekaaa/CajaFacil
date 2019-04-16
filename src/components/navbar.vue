<template>
  <div class="navbar">
    <ul>
      <li>Caja</li>
      <li>Historial de ventas</li>
      <li>Inventario</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "navbar"
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
}
</style>


