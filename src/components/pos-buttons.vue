<template>
  <div class="buttons-container">
    <ul>
      <li id="confirm">Confirmar</li>
      <li id="cancel">Cancelar</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "pos-buttons"
};
</script>

<style scoped>
.buttons-container {
  flex: 1;
  display: flex;
  background-color: #cfcfcf;
  border: 4px solid black;
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

  border: 4px solid black;
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
