<script>
const API_STATION_ENDPOINT = `https://pchou9.com/.netlify/functions/fetch-wmata?name=`

export default {
  data: () => ({
    schedule: null,
    errorMessage: null,
    station: "E02",
    GRNBELT: "Grnbelt",
    BRNCH: "Brnch Av"
  }),
  created() {
    this.fetchData()
  },
  watch: {
    station: 'fetchData'
  },
  methods: {
    async fetchData() {
      const url = `${API_STATION_ENDPOINT}${this.station}`
      await fetch(url, {
  mode: 'cors',
  headers: {
    'Access-Control-Allow-Origin':'*'
  }
})
        .then(async response => {
          const data = await response.json();

          if (!response.ok) {
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
          }

          this.schedule = data.data;
        })
        .catch(error => {
          this.errorMessage = error;
        })
    },
  },
  mounted() {
    document.title = "WMATA Schedule";
    this.timer = setInterval(() => {
      this.fetchData()
    }, 10000);
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>

<template>
  <div class="header">
  </div>
  <div style="overflow:auto">
    <div class="main">
      <div class="wmata-content">
        <div v-if="schedule">
          <h2>{{ schedule.Trains[0].LocationName }}</h2>
          <h4>Greenbelt ⬆</h4>
          <ul class="wmata-list">
            <li v-for="(train, index) in schedule.Trains.filter(station => GRNBELT == station.Destination)">{{
              train.Min
            }}
            </li>
          </ul>
          <h4>Branch ⬇</h4>
          <ul class="wmata-list">
            <li v-for="(train, index) in schedule.Trains.filter(station => BRNCH == station.Destination)">{{
              train.Min
            }}
            </li>
          </ul>
        </div>
        <div v-if="errorMessage">Error: {{ errorMessage }}</div>
        <select v-model="station">
          <option value="E02">Shaw</option>
          <option value="F03">L'Enfant</option>
          <option value="F01">Chinatown</option>
        </select>
      </div>
    </div>
  </div>
</template>
