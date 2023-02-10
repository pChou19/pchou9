<script>
const API_STATION_ENDPOINT = `https://pchou9.com/.netlify/functions/fetch-wmata?name=`

export default {
  data: () => ({
    stationName: null,
    scheduleGrn: null,
    scheduleRd: null,
    scheduleOr: null,
    scheduleBl: null,
    errorMessage: null,
    selectedLine: "GR",
    station: "Shaw",
    stations: new Map([
      ["FortT", new Map([["GR", "E06"], ["RD", "B06"]])],
      ["Petworth", new Map([["GR", "E05"]])],
      ["CoHi", new Map([["GR", "E04"]])],
      ["USt", new Map([["GR", "E03"]])],
      ["Shaw", new Map([["GR", "E02"]])],
      ["MtVernon", new Map([["GR", "E01"]])],
      ["USt", new Map([["GR", "E03"]])],
      ["Archives", new Map([["GR", "F02"]])],
      ["L'Enfant", new Map([["GR", "F03"], ["OR", "D03"]])],
      ["Chinatown", new Map([["GR", "F01"], ["RD", "B01"]])],
      ["Metro", new Map([["RD", "A01"], ["OR", "C01"]])],
      ["FNorth", new Map([["RD", "A02"]])],
      ["Dupont", new Map([["RD", "A03"]])],
      ["Woodely", new Map([["RD", "A04"]])],
      ["Cleveland", new Map([["RD", "A05"]])],
      ["VanNess", new Map([["RD", "A06"]])],
      ["Tenleytown", new Map([["RD", "A07"]])],
      ["Friendship", new Map([["RD", "A08"]])],
      ["Bethesda", new Map([["RD", "A09"]])],
      ["Medical", new Map([["RD", "A10"]])],
      ["Grosvenor", new Map([["RD", "A11"]])],
      ["NBethesda", new Map([["RD", "A12"]])],
      ["Twinbrook", new Map([["RD", "A13"]])],
      ["Rockville", new Map([["RD", "A14"]])],
      ["ShadyGrove", new Map([["RD", "A15"]])],
      ["Judiciary", new Map([["RD", "B02"]])],
      ["Union", new Map([["RD", "B03"]])],
      ["RhodeIsland", new Map([["RD", "B04"]])],
      ["Brookland", new Map([["RD", "B05"]])],
      ["Takoma", new Map([["RD", "B07"]])],
      ["SilverSpring", new Map([["RD", "B08"]])],
      ["Forest", new Map([["RD", "B09"]])],
      ["Wheaton", new Map([["RD", "B10"]])],
      ["Glenmont", new Map([["RD", "B11"]])],
      ["Woodley", new Map([["RD", "A04"]])],
      ["NoMa", new Map([["RD", "B35"]])],
      ["McPherson", new Map([["OR", "C02"]])],
      ["FWest", new Map([["OR", "C03"]])],
      ["Foggy", new Map([["OR", "C04"]])],
      ["Rosslyn", new Map([["OR", "C05"]])],
      ["Arlington", new Map([["BL", "C06"]])],
      ["Pentagon", new Map([["BL", "C07"]])],
      ["PentagonCity", new Map([["BL", "C08"]])],
      ["CrystalCity", new Map([["BL", "C09"]])],
      ["DCA", new Map([["BL", "C10"]])],
      ["Braddock", new Map([["BL", "C12"]])],
      ["KingSt", new Map([["BL", "C13"]])],
      ["VanDorn", new Map([["BL", "J02"]])],
      ["Franconia", new Map([["BL", "J03"]])],
      ["Greenbelt", new Map([["GR", "E10"]])],
      ["College", new Map([["GR", "E09"]])],
      ["HyattsvilleC", new Map([["GR", "E08"]])],
      ["WHyattsville", new Map([["GR", "E07"]])],
      ["Waterfront", new Map([["GR", "F04"]])],
      ["NavyYard", new Map([["GR", "F05"]])],
      ["Anacostia", new Map([["GR", "F06"]])],
      ["Congress", new Map([["GR", "F07"]])],
      ["SouthernAve", new Map([["GR", "F08"]])],
      ["Naylor", new Map([["GR", "F09"]])],
      ["Suitland", new Map([["GR", "F10"]])],
      ["Branch", new Map([["GR", "F11"]])],
      ["Vienna", new Map([["OR", "K08"]])],
      ["Dunn", new Map([["OR", "K07"]])],
      ["WFalls", new Map([["OR", "K06"]])],
      ["EFalls", new Map([["OR", "K05"]])],
      ["Ballston", new Map([["OR", "K04"]])],
      ["VirginiaSq", new Map([["OR", "K03"]])],
      ["Clarendon", new Map([["OR", "K02"]])],
      ["Court", new Map([["OR", "K01"]])],
      ["FederalT", new Map([["OR", "D01"]])],
      ["Smithsonian", new Map([["OR", "D02"]])],
      ["FederalC", new Map([["OR", "D04"]])],
      ["CapitolS", new Map([["OR", "D05"]])],
      ["EMarket", new Map([["OR", "D06"]])],
      ["PotomacAve", new Map([["OR", "D07"]])],
      ["Stadium", new Map([["OR", "D08"]])],
      ["MinnesotaAve", new Map([["OR", "D09"]])],
      ["Deanwood", new Map([["OR", "D10"]])],
      ["Cheverly", new Map([["OR", "D11"]])],
      ["Landover", new Map([["OR", "D12"]])],
      ["Carrollton", new Map([["OR", "D13"]])],
    ]),
    GRNBELT: "1",
    BRNCH: "2",
    NEW_CARROL: "1",
    FRANCONIA: "2",
    VIENNA: "2",
    SHADY: "2",
    GLENMONT: "1",
    GREEN: "GR",
    YELLOW: "YL",
    RED: "RD",
    ORANGE: "OR",
    BLUE: "BL",
    SILVER: "SV",
    VIENNA_STATION: "Vienna/Fairfax-GMU",
    VIENNA_ABRV: "Vienna/Fairfax",
    FRANCONIA_STATION: "Franconia-Springfield",
    FRANCONIA_ABRV: "F. Springfield",
    LARG_STATION: "Downtown Largo",
    LARG_ABRV: "Dtwn Largo"
  }),
  created() {
    this.checkStation()
  },
  watch: {
    station: 'checkStation'
  },
  methods: {
    async checkStation() {
      let clearGr = true;
      let clearRd = true;
      let clearOr = true;
      let clearBl = true;
      if (this.stations.get(this.station).has(this.GREEN)) {
        this.scheduleGrn = await this.fetchData(this.station, this.GREEN);
        this.stationName = this.scheduleGrn.Trains[0].LocationName;
        clearGr = false;
      }
      if (this.stations.get(this.station).has(this.RED)) {
        this.scheduleRd = await this.fetchData(this.station, this.RED);
        this.stationName = this.scheduleRd.Trains[0].LocationName;
        clearRd = false;
      }
      if (this.stations.get(this.station).has(this.ORANGE)) {
        this.scheduleOr = await this.fetchData(this.station, this.ORANGE);
        this.stationName = this.scheduleOr.Trains[0].LocationName;
        clearOr = false;
      }
      if (this.stations.get(this.station).has(this.BLUE)) {
        this.scheduleBl = await this.fetchData(this.station, this.BLUE);
        this.stationName = this.scheduleBl.Trains[0].LocationName;
        clearBl = false;
      }
      if (clearGr) {
        this.scheduleGrn = null;
      }
      if (clearRd) {
        this.scheduleRd = null;
      }
      if (clearOr) {
        this.scheduleOr = null;
      }
      if (clearBl) {
        this.scheduleBl = null;
      }
    },
    async fetchData(currStation, line) {
      const url = `${API_STATION_ENDPOINT}${this.stations.get(currStation).get(line)}`;
      let schedule;
      await fetch(url)
        .then(async response => {
          const data = await response.json();

          if (!response.ok) {
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
          }

          schedule = data.data;
        })
        .catch(error => {
          this.errorMessage = error;
        })

        return schedule;
    },
    abbreviate(value) {
      switch (value) {
        case this.VIENNA_STATION:
          return this.VIENNA_ABRV;
        case this.FRANCONIA_STATION:
          return this.FRANCONIA_ABRV;
        case this.LARG_STATION:
          return this.LARG_ABRV;
        default:
          return value;
      }
    },
    changeLine(newLine) {
      this.selectedLine = newLine;
    }
  },
  mounted() {
    document.title = "Metro Schedule";
    this.timer = setInterval(() => {
      this.checkStation()
    }, 15000);
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
      <div class="metro-content">
        <h2>{{ stationName }}</h2>
        <div v-if="scheduleGrn" class="metro-trains">
          <h4>Greenbelt ⬆️</h4>
          <ul class="metro-list">
            <li v-for="(train, index) in scheduleGrn.Trains.filter(station => GRNBELT == station.Group)">
              <div v-if="train.Line == GREEN" style="display: inline">🟢</div>
              <div v-if="train.Line == YELLOW" style="display: inline">🟡</div>
              {{ train.DestinationName }}
              {{ train.Min }}
            </li>
          </ul>
          <h4>Branch ⬇️</h4>
          <ul class="metro-list">
            <li v-for="(train, index) in scheduleGrn.Trains.filter(station => BRNCH == station.Group)">
              <div v-if="train.Line == GREEN" style="display: inline">🟢</div>
              <div v-if="train.Line == YELLOW" style="display: inline">🟡</div>
              {{ train.DestinationName }}
              {{ train.Min }}
            </li>
          </ul>
        </div>
        <div v-if="scheduleRd" class="metro-trains">
          <h4>Shady Grove ↖️</h4>
          <ul class="metro-list">
            <li v-for="(train, index) in scheduleRd.Trains.filter(station => SHADY == station.Group)">
              <div v-if="train.Line == RED" style="display: inline">🔴</div>
              {{ train.DestinationName }}
              {{ train.Min }}
            </li>
          </ul>
          <h4>Glenmont ↗️</h4>
          <ul class="metro-list">
            <li v-for="(train, index) in scheduleRd.Trains.filter(station => GLENMONT == station.Group)">
              <div v-if="train.Line == RED" style="display: inline">🔴</div>
              {{ train.DestinationName }}
              {{ train.Min }}
            </li>
          </ul>
        </div>
        <div v-if="scheduleOr" class="metro-trains">
          <h4>Vienna ⬅️</h4>
          <ul class="metro-list">
            <li v-for="(train, index) in scheduleOr.Trains.filter(station => VIENNA == station.Group)">
              <div v-if="train.Line == BLUE" style="display: inline">🔵</div>
              <div v-if="train.Line == ORANGE" style="display: inline">🟠</div>
              <div v-if="train.Line == SILVER" style="display: inline">⚪</div>
              {{ abbreviate(train.DestinationName) }}
              {{ train.Min }}
            </li>
          </ul>
          <h4>N. Carrollton ➡️</h4>
          <ul class="metro-list">
            <li v-for="(train, index) in scheduleOr.Trains.filter(station => NEW_CARROL == station.Group)">
              <div v-if="train.Line == BLUE" style="display: inline">🔵</div>
              <div v-if="train.Line == ORANGE" style="display: inline">🟠</div>
              <div v-if="train.Line == SILVER" style="display: inline">⚪</div>
              {{ abbreviate(train.DestinationName) }}
              {{ train.Min }}
            </li>
          </ul>
        </div>
        <div v-if="scheduleBl" class="metro-trains">
          <h4>N. Carrollton ➡️</h4>
          <ul class="metro-list">
            <li v-for="(train, index) in scheduleBl.Trains.filter(station => NEW_CARROL == station.Group)">
              <div v-if="train.Line == BLUE" style="display: inline">🔵</div>
              {{ abbreviate(train.DestinationName) }}
              {{ train.Min }}
            </li>
          </ul>
          <h4>Franconia ⬇️</h4>
          <ul class="metro-list">
            <li v-for="(train, index) in scheduleBl.Trains.filter(station => FRANCONIA == station.Group)">
              <div v-if="train.Line == BLUE" style="display: inline">🔵</div>
              {{ abbreviate(train.DestinationName) }}
              {{ train.Min }}
            </li>
          </ul>
        </div>
        <div v-if="errorMessage">Error: {{ errorMessage }}</div>
        <select v-if="selectedLine == GREEN" v-model="station" class="metro-select" size="10">
          <option value="Greenbelt">Greenbelt</option>
          <option value="College">College Park</option>
          <option value="HyattsvilleC">Hyattsville Crossing</option>
          <option value="WHyattsville">West Hyattsville</option>
          <option value="FortT">Fort Totten</option>
          <option value="Petworth">Georgia Ave-Petworth</option>
          <option value="CoHi">Columbia Heights</option>
          <option value="USt">U St</option>
          <option value="Shaw" selected>Shaw</option>
          <option value="MtVernon">Mt Vernon</option>
          <option value="Chinatown">Chinatown</option>
          <option value="Archives">Archives</option>
          <option value="L'Enfant">L'Enfant</option>
          <option value="Waterfront">Waterfront</option>
          <option value="NavyYard">Navy Yard</option>
          <option value="Anacostia">Anacostia</option>
          <option value="Congress">Congress Heights</option>
          <option value="SouthernAve">Southern Ave</option>
          <option value="Naylor">Naylor Rd</option>
          <option value="Suitland">Suitland</option>
          <option value="Branch">Branch Ave</option>
        </select>
        <select v-if="selectedLine == RED" v-model="station" class="metro-select" size="10">
          <option value="ShadyGrove">Shady Grove</option>
          <option value="Rockville">Rockville</option>
          <option value="Twinbrook">Twinbrook</option>
          <option value="NBethesda">North Bethesda</option>
          <option value="Grosvenor">Grosvenor-Strathmore</option>
          <option value="Medical">Medical Center</option>
          <option value="Bethesda">Bethesda</option>
          <option value="Friendship">Friendship Heights</option>
          <option value="Cleveland">Cleveland Park</option>
          <option value="Woodley">Woodley Park</option>
          <option value="Dupont">Dupont Circle</option>
          <option value="FNorth">Farragut North</option>
          <option value="Metro">Metro Center</option>
          <option value="Chinatown">Chinatown</option>
          <option value="Judiciary">Judiciary Sq</option>
          <option value="Union">Union Station</option>
          <option value="NoMa">NoMa</option>
          <option value="RhodeIsland">Rhode Island</option>
          <option value="Brookland">Brookland</option>
          <option value="FortT">Fort Totten</option>
          <option value="Takoma">Takoma</option>
          <option value="SilverSpring">Silver Spring</option>
          <option value="Forest">Forest Glen</option>
          <option value="Wheaton">Wheaton</option>
          <option value="Glenmont">Glenmont</option>
        </select>
        <select v-if="selectedLine == ORANGE" v-model="station" class="metro-select" size="10">
          <option value="Vienna">Vienna</option>
          <option value="Dunn">Dunn Loring</option>
          <option value="WFalls">West Falls Church</option>
          <option value="EFalls">East Falls Church</option>
          <option value="Ballston">Ballston</option>
          <option value="VirginiaSq">Virginia Sq</option>
          <option value="Clarendon">Clarendon</option>
          <option value="Court">Court House</option>
          <option value="Rosslyn">Rosslyn</option>
          <option value="Foggy">Foggy Bottom</option>
          <option value="FWest">Farragut West</option>
          <option value="McPherson">McPherson Sq</option>
          <option value="Metro">Metro Center</option>
          <option value="FederalT">Federal Triangle</option>
          <option value="Smithsonian">Smithsonian</option>
          <option value="L'Enfant">L'Enfant Plaza</option>
          <option value="FederalC">Federal Center</option>
          <option value="CapitolS">Capitol South</option>
          <option value="EMarket">Eastern Market</option>
          <option value="PotomacAve">Potomac Ave</option>
          <option value="Stadium">Stadium-Armory</option>
          <option value="MinnesotaAve">Minnesota Ave</option>
          <option value="Deanwood">Deanwood</option>
          <option value="Cheverly">Cheverly</option>
          <option value="Landover">Landover</option>
          <option value="Carrollton">New Carrollton</option>
        </select>
        <select v-if="selectedLine == SILVER" v-model="station" class="metro-select" size="10">
          <option value="">Ashburn</option>
          <option value="">Loudoun Gateway</option>
          <option value="">Dulles</option>
          <option value="">Innovation Center</option>
          <option value="">Herndon</option>
          <option value="">Reston</option>
          <option value="">Wiehle</option>
          <option value="">Spring Hill</option>
          <option value="">Greensboro</option>
          <option value="">Tysons</option>
          <option value="">McLean</option>
          <option value="EFalls">East Falls Church</option>
          <option value="Ballston">Ballston</option>
          <option value="VirginiaSq">Virginia Sq</option>
          <option value="Clarendon">Clarendon</option>
          <option value="Court">Court House</option>
          <option value="Rosslyn">Rosslyn</option>
          <option value="Foggy">Foggy Bottom</option>
          <option value="FWest">Farragut West</option>
          <option value="McPherson">McPherson Sq</option>
          <option value="Metro">Metro Center</option>
          <option value="FederalT">Federal Triangle</option>
          <option value="Smithsonian">Smithsonian</option>
          <option value="L'Enfant">L'Enfant Plaza</option>
          <option value="FederalC">Federal Center</option>
          <option value="CapitolS">Capitol South</option>
          <option value="EMarket">Eastern Market</option>
          <option value="PotomacAve">Potomac Ave</option>
          <option value="Stadium">Stadium-Armory</option>
          <option value="">Benning Rd</option>
          <option value="">Capitol Heights</option>
          <option value="">Addison Rd</option>
          <option value="">Morgan Blvd</option>
          <option value="">Downtown Largo</option>
        </select>
        <select v-if="selectedLine == BLUE" v-model="station" class="metro-select" size="10">
          <option value="Franconia">Franconia-Springfield</option>
          <option value="VanDorn">Van Dorn St</option>
          <option value="KingSt">King St-Old Town</option>
          <option value="Braddock">Braddock Rd</option>
          <option value="DCA">Washington National</option>
          <option value="CrystalCity">Crystal City</option>
          <option value="PentagonCity">Pentagon City</option>
          <option value="Pentagon">Pentagon</option>
          <option value="Arlington">Arlington Cemetery</option>
          <option value="Rosslyn">Rosslyn</option>
          <option value="Foggy">Foggy Bottom</option>
          <option value="FWest">Farragut West</option>
          <option value="McPherson">McPherson Sq</option>
          <option value="Metro">Metro Center</option>
          <option value="FederalT">Federal Triangle</option>
          <option value="Smithsonian">Smithsonian</option>
          <option value="L'Enfant">L'Enfant Plaza</option>
          <option value="FederalC">Federal Center</option>
          <option value="CapitolS">Capitol South</option>
          <option value="EMarket">Eastern Market</option>
          <option value="PotomacAve">Potomac Ave</option>
          <option value="Stadium">Stadium-Armory</option>
          <option value="">Benning Rd</option>
          <option value="">Capitol Heights</option>
          <option value="">Addison Rd</option>
          <option value="">Morgan Blvd</option>
          <option value="">Downtown Largo</option>
        </select>
        <button @click="changeLine(GREEN)" class="metro-btn" :class="{'btn-green-active': selectedLine == GREEN, 'btn-green': selectedLine != GREEN}">Green</button>
        <button @click="changeLine(RED)" class="metro-btn" :class="{'btn-red-active': selectedLine == RED, 'btn-red': selectedLine != RED}">Red</button>
        <button @click="changeLine(ORANGE)" class="metro-btn" :class="{'btn-orange-active': selectedLine == ORANGE, 'btn-orange': selectedLine != ORANGE}">Orange</button>
        <button @click="changeLine(SILVER)" class="metro-btn" :class="{'btn-silver-active': selectedLine == SILVER, 'btn-silver': selectedLine != SILVER}">Silver</button>
        <button @click="changeLine(BLUE)" class="metro-btn" :class="{'btn-blue-active': selectedLine == BLUE, 'btn-blue': selectedLine != BLUE}">Blue</button>
      </div>
    </div>
  </div>
</template>
