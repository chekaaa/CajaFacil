<template>
  <div class="filter-bar">
    <div class="bar-title">Busqueda por fecha</div>
    <div class="description">Desde:</div>
    <input type="date" name="from" id="fromDate" v-model="fromDate">
    <div class="description">Hasta:</div>
    <input type="date" name="from" id="toDate" v-model="fromDate">
    <a>Buscar</a>
    <a>Resetear filtros</a>
  </div>
</template>

<script>
export default {
  name: "SalesHistoryFilterBar",
  data() {
    return {
      fromDate: "2019-04-04"
    };
  },
  mounted() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }

    today = yyyy + "-" + mm + "-" + dd;
    this.fromDate = today;
  }
};
</script>

<style scoped>
.filter-bar {
  flex: 1;
  background-color: #cfcfcf;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.filter-bar > div {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 0 1vh;
  font-weight: bold;
  font-size: 2.5vh;
}

.filter-bar .bar-title {
  font-size: 3.5vh;
  font-weight: bolder;
}

.filter-bar .description {
  padding-left: 3vh;
}

.filter-bar #fromDate,
#toDate {
  margin: 2vh 0;
  text-align: center;
  font-weight: bold;
  font-size: 2vh;
}

.filter-bar a {
  color: #2d3142;
  padding: 0.1em 0.3em;
  font-weight: bold;
  margin: 1em 1em;
  text-align: center;
  background-color: #9d9e9e;
  cursor: pointer;
  box-shadow: 0px 2px 7px 2px rgb(100, 100, 100);
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
