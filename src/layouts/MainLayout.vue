<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title style="font-weight: bold;">
          Let Them Trade Map-Maker
        </q-toolbar-title>

        <q-btn class="q-mr-xs" color="secondary" label="Download Map" @click='generateMap()'>
          <q-tooltip :disable="$q.platform.is.mobile">
            Download current configuration as a JSON-file.
          </q-tooltip>
        </q-btn>



        <q-btn
          :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
          class="q-mr-xs"
          dense
          color="secondary"
          round
          @click="$q.fullscreen.toggle()">
          <q-tooltip :disable="$q.platform.is.mobile">
            {{ $q.fullscreen.isActive ? 'Exit Fullscreen' : 'Toggle Fullscreen' }}
          </q-tooltip>
        </q-btn>

        <div class="q-mr-xs" style="font-weight: bold">Made by Griefed</div>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="row no-wrap">
        <div class="col">
          <div class="full-height full-width">
            <q-scroll-area
              :visible="visible" class="full-height full-width page"
              :bar-style="{ borderRadius: '5px', opacity: 1, zIndex: 1001 }"
              :thumb-style="{ borderRadius: '5px', opacity: 1, zIndex: 1001 }"
            >
              <router-view/>
            </q-scroll-area>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  setup () {
    const reticulating = ["Adding","Hidden","Agendas","Adjusting","Bell","Curves","Aesthesizing","Industrial","Areas","Aligning","Covariance","Matrices",
      "Applying","Feng","Shui","Shaders","Applying","Theatre","Soda","Layer","Asserting","Packed","Exemplars","Attempting","to","Lock","Back-Buffer",
      "Binding","Sapling","Root","System","Breeding","Fauna","Building","Data","Trees","Bureacritizing","Bureaucracies","Calculating","Inverse","Probability","Matrices",
      "Calculating","Llama","Expectoration","Trajectory","Calibrating","Blue","Skies","Charging","Ozone","Layer","Coalescing","Cloud","Formations",
      "Cohorting","Exemplars","Collecting","Meteor","Particles","Compounding","Inert","Tessellations","Compressing","Fish","Files",
      "Computing","Optimal","Bin","Packing","Concatenating","Sub-Contractors","Containing","Existential","Buffer","Debarking","Ark","Ramp",
      "Debunching","Unionized","Commercial","Services","Deciding","What","Message","to","Display","Next","Decomposing","Singular","Values",
      "Decrementing","Tectonic","Plates","Deleting","Ferry","Routes","Depixelating","Inner","Mountain","Surface","Back","Faces","Depositing","Slush","Funds",
      "Destabilizing","Economic","Indicators","Determining","Width","of","Blast","Fronts","Deunionizing","Bulldozers","Dicing","Models",
      "Diluting","Livestock","Nutrition","Variables","Downloading","Satellite","Terrain","Data","Exposing","Flash","Variables","to","Streak","System",
      "Extracting","Resources","Factoring","Pay","Scale","Fixing","Election","Outcome","Matrix","Flood-Filling","Ground","Water","Flushing","Pipe","Network",
      "Gathering","Particle","Sources","Generating","Jobs","Gesticulating","Mimes","Graphing","Whale","Migration","Hiding","Willio","Webnet","Mask",
      "Implementing","Impeachment","Routine","Increasing","Accuracy","of","RCI","Simulators","Increasing","Magmafacation","Initializing","My","Sim","Tracking","Mechanism",
      "Initializing","Rhinoceros","Breeding","Timetable","Initializing","Robotic","Click-Path","AI","Inserting","Sublimated","Messages",
      "Integrating","Curves","Integrating","Illumination","Form","Factors","Integrating","Population","Graphs","Iterating","Cellular","Automata",
      "Lecturing","Errant","Subsystems","Mixing","Genetic","Pool","Modeling","Object","Components","Mopping","Occupant","Leaks","Normalizing","Power",
      "Obfuscating","Quigley","Matrix","Overconstraining","Dirty","Industry","Calculations","Partitioning","City","Grid","Singularities",
      "Perturbing","Matrices","Pixalating","Nude","Patch","Polishing","Water","Highlights","Populating","Lot","Templates","Preparing","Sprites","for","Random","Walks",
      "Prioritizing","Landmarks","Projecting","Law","Enforcement","Pastry","Intake","Realigning","Alternate","Time","Frames","Reconfiguring","User","Mental","Processes",
      "Relaxing","Splines","Removing","Road","Network","Speed","Bumps","Removing","Texture","Gradients","Removing","Vehicle","Avoidance","Behavior",
      "Resolving","GUID","Conflict","Retracting","Phong","Shader","Retrieving","from","Back","Store","Reverse","Engineering","Image","Consultant",
      "Routing","Neural","Network","Infanstructure","Scattering","Rhino","Food","Sources","Scrubbing","Terrain","Searching","for","Llamas",
      "Seeding","Architecture","Simulation","Parameters","Sequencing","Particles","Setting","Advisor","Moods","Setting","Inner","Deity","Indicators",
      "Setting","Universal","Physical","Constants","Sonically","Enhancing","Occupant-Free","Timber","Speculating","Stock","Market","Indices",
      "Splatting","Transforms","Stratifying","Ground","Layers","Sub-Sampling","Water","Data","Synthesizing","Gravity","Synthesizing","Wavelets",
      "Time-Compressing","Simulator","Clock","Unable","to","Reveal","Current","Activity","Weathering","Buildings","Zeroing","Crime","Network",
      "Reticulating","Splines"];
    return {
      visible: ref(true),
      reticulating
    }
  },
  methods: {
    generateMap() {
      //console.log(this.getMapName());
      //console.log(this.getMapId());
      //console.log(this.getMap());
      let map = "{\"mapId\": \"" + this.getMapId() + "\",\"mapName\": \"" + this.getMapName() + "\",\"tileSet\": [" + this.getMap() + "]}";
      this.downloadMap(this.getMapId() + ".json", JSON.stringify(JSON.parse(map), null, 2));
    },
    getMapId() {
      return 'e1-m.lttmm';
    },
    getMapName() {
      return this.reticulating[Math.floor(Math.random() * this.reticulating.length) - 1] + " " + this.reticulating[Math.floor(Math.random() * this.reticulating.length) - 1] + " " + this.reticulating[Math.floor(Math.random() * this.reticulating.length) - 1];
    },
    getMap() {
      let tiles = "";
      for (let y = -14; y < 15; y++) {
        for (let x = -24; x < 25; x++) {
          //console.log("x is " + x.toString() + " and y is " + y.toString());
          tiles = tiles +  "{\"x\": " + x.toString() + ",\"y\": " + y.toString() + ",\"z\": 0,\"typeId\": \"" + this.getLabel(x.toString() + "_" + y.toString()) + "\"}";
        }
      }
      return tiles.replaceAll("}{","},{");
    },
    getLabel(elementId) {
      return document.getElementById(elementId).innerText.replace("change_history", "").toLowerCase();
    },
    downloadMap(mapName, map) {
      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(map));
      element.setAttribute('download', mapName);

      element.style.display = 'none';
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    }
  }
})
</script>

<style>
.page {
  background: radial-gradient(circle, #56638A 0%, #483A58 100%)
}
</style>
