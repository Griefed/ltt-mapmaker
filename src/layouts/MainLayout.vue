<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>


        <q-avatar>
          <img alt="header" src="~assets/icon.webp" width="50px">
        </q-avatar>


        <q-toolbar-title style="font-weight: bold;">
          Let Them Trade Map-Maker
        </q-toolbar-title>

        <q-btn-dropdown label="Settings" color="secondary">
          <div class="row no-wrap q-pa-md">
            <div class="column" style="width: 600px;">
              <div class="text-h6 q-mb-md">Initial View Radius</div>
              <q-item>
                <q-item-section avatar>
                  <q-icon size="30px" color="secondary" name="mdi-arrow-expand-horizontal" />
                </q-item-section>
                <q-item-section>
                  <q-slider v-model="radiusX" :min="1" :max="24" label color="secondary" :step="1" label-always/>
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <q-icon size="30px" color="secondary" name="mdi-arrow-expand-vertical" />
                </q-item-section>
                <q-item-section>
                  <q-slider v-model="radiusY" :min="1" :max="14" label color="secondary" :step="1" label-always/>
                </q-item-section>
              </q-item>

              <q-separator inset spaced />

              <div class="text-h6 q-mb-md">Initial View Center</div>
              <q-item>
                <q-item-section avatar>
                  <q-icon size="30px" color="secondary" name="mdi-arrow-expand-horizontal" />
                </q-item-section>
                <q-item-section>
                  <q-slider v-model="centerX" :min="-24" :max="24" label color="secondary" :step="1" label-always/>
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <q-icon size="30px" color="secondary" name="mdi-arrow-expand-vertical" />
                </q-item-section>
                <q-item-section>
                  <q-slider v-model="centerY" :min="-14" :max="14" label color="secondary" :step="1" label-always/>
                </q-item-section>
              </q-item>

              <q-separator inset spaced />

              <div class="text-h6 q-mb-md">Scrollbar Settings</div>
              <div class="row no-wrap q-pa-md">
                <div>Horizontal Color and Opacity
                  <q-color v-model="verticalColor" class="my-picker"/>
                </div>
                <q-item>
                  <div class="column">
                  <q-item-section avatar>
                    <q-icon size="30px" style="margin-left: 5px;" color="secondary" name="opacity" />
                  </q-item-section>
                  <q-item-section>
                    <q-slider vertical reverse v-model="verticalOpacity" :min="0.0" :max="1" :step="0.1" label color="secondary"  label-always/>
                  </q-item-section>
                  </div>
                </q-item>

                <q-separator inset spaced />

                <div>Horizontal Color and Opacity
                  <q-color v-model="horizontalColor" class="my-picker"/>
                </div>
                <q-item>
                  <div class="column">
                    <q-item-section avatar>
                      <q-icon size="30px" style="margin-left: 5px;" color="secondary" name="opacity" />
                    </q-item-section>
                    <q-item-section>
                      <q-slider vertical reverse v-model="horizontalOpacity" :min="0.0" :max="1" :step="0.1" label color="secondary"  label-always/>
                    </q-item-section>
                  </div>
                </q-item>
              </div>

            </div>
          </div>
        </q-btn-dropdown>

        <q-separator inset spaced />

        <q-btn class="q-mr-xs" color="secondary" label="Download Map" @click='generateMap()'>
          <q-tooltip :disable="$q.platform.is.mobile">
            Download current configuration as a JSON-file.
          </q-tooltip>
        </q-btn>

        <q-separator inset spaced />

        <q-btn
          :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
          class="q-mr-xs"
          dense
          color="secondary"
          label="Toggle Fullscreen"
          @click="$q.fullscreen.toggle()">
          <q-tooltip :disable="$q.platform.is.mobile">
            {{ $q.fullscreen.isActive ? 'Exit Fullscreen' : 'Toggle Fullscreen' }}
          </q-tooltip>
        </q-btn>

        <q-separator inset spaced />

        <q-btn @click="alert = true" color="secondary" dense label="Made by Griefed">
          <q-tooltip :disable="$q.platform.is.mobile">
            Open a little About :)
          </q-tooltip>
          <q-avatar>
            <img alt="header" src="~assets/Griefed.webp" width="50">
          </q-avatar>
        </q-btn>

        <q-dialog v-model="alert">
          <q-card style="max-width: 1000px;width:750px">

            <q-card-section>
              <div class="text-h6">About Griefed and Let Them Trade Map Maker</div>
            </q-card-section>

            <q-card-section align="center">
              <q-btn style="margin-right: 15px" type="a" href="https://github.com/Griefed">
                <q-icon size="50px" color="info" name="mdi-github"></q-icon>
                <q-tooltip :disable="$q.platform.is.mobile">
                  Visit my GitHub profile!
                </q-tooltip>
              </q-btn>
              <q-btn style="margin-right: 15px" type="a" href="https://blog.griefed.de">
                <q-icon size="50px" color="info" name="mdi-wordpress"></q-icon>
                <q-tooltip :disable="$q.platform.is.mobile">
                  Visit my blog!
                </q-tooltip>
              </q-btn>
              <q-btn style="margin-right: 15px" type="a" href="https://griefed.de">
                <q-icon size="50px" color="info" name="mdi-web"></q-icon>
                <q-tooltip :disable="$q.platform.is.mobile">
                  Visit my website!
                </q-tooltip>
              </q-btn>
            </q-card-section>

            <q-card-section class="q-pt-none">
              Visual map maker for Let Them Trade by Spaceflower, made with VueJS/Quasar.<br>
              Simply click on a button in the center of a tile and select the type you want it to change to.<br>
              Do so for the whole map. After your map looks good to you, hit the "DOWNLOAD MAP"-button in the top-right.<br>
              This will generate a .json-file and download it which will contain your configuration as a Let Them Trade map.
            </q-card-section>

            <q-card-section>
              <div class="text-h6">All Things Spaceflower!</div>
            </q-card-section>

            <q-card-section align="center">
              <q-btn style="margin-right: 15px" type="a" href="https://store.steampowered.com/app/1313290/Let_Them_Trade/">
                <q-icon size="50px" color="black" name="mdi-steam"></q-icon>
                <q-tooltip :disable="$q.platform.is.mobile">
                  Let Them Trade on Steam!
                </q-tooltip>
              </q-btn>
              <q-btn style="margin-right: 15px" type="a" href="https://www.twitch.tv/spaceflowerde">
                <q-icon size="50px" color="black" name="mdi-twitch"></q-icon>
                <q-tooltip :disable="$q.platform.is.mobile">
                  Spaceflower on Twitch!
                </q-tooltip>
              </q-btn>
              <q-btn style="margin-right: 15px" type="a" href="https://spaceflower.de/">
                <q-icon size="50px" color="black" name="mdi-web"></q-icon>
                <q-tooltip :disable="$q.platform.is.mobile">
                  Visit the homepage of Spaceflower!
                </q-tooltip>
              </q-btn>
              <q-btn style="margin-right: 15px" type="a" href="https://www.tiktok.com/@spaceflowerde?">
                <q-icon size="50px" color="black" name="tiktok"></q-icon>
                <q-tooltip :disable="$q.platform.is.mobile">
                  Visit Spaceflower on TikTok!
                </q-tooltip>
              </q-btn>
              <q-btn style="margin-right: 15px" type="a" href="https://twitter.com/spaceflowerde">
                <q-icon size="50px" color="black" name="mdi-twitter"></q-icon>
                <q-tooltip :disable="$q.platform.is.mobile">
                  Visit Spaceflower on Twitter!
                </q-tooltip>
              </q-btn>
              <q-btn style="margin-right: 15px" type="a" href="https://www.facebook.com/SpaceflowerDE">
                <q-icon size="50px" color="black" name="mdi-facebook"></q-icon>
                <q-tooltip :disable="$q.platform.is.mobile">
                  Visit Spaceflower on Facebook!
                </q-tooltip>
              </q-btn>
              <q-btn style="margin-right: 15px" type="a" href="https://discordapp.com/invite/yaTeefS">
                <q-icon size="50px" color="black" name="mdi-discord"></q-icon>
                <q-tooltip :disable="$q.platform.is.mobile">
                  Join their Discord server!
                </q-tooltip>
              </q-btn>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat label="OK" color="primary" v-close-popup />
            </q-card-actions>

          </q-card>
        </q-dialog>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="row no-wrap">
        <div class="col">
          <div class="full-height full-width">
            <q-scroll-area
              :visible="visible" class="full-height full-width page"
              :bar-style="{ borderRadius: '5px', opacity: 1, zIndex: 1001 }"
              :vertical-thumb-style="{ borderRadius: '5px', opacity: verticalOpacity, zIndex: 1001, background: verticalColor }"
              :horizontal-thumb-style="{ borderRadius: '5px', opacity: horizontalOpacity, zIndex: 1001, background: horizontalColor }">
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
import { openURL } from 'quasar'

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
    let radiusY = 1;
    let radiusX = 1;
    let centerX = 0;
    let centerY = 0;
    let mapSizeX = 29;
    let mapSizeY = 29;
    return {
      visible: ref(true),
      alert: ref(false),
      verticalColor: ref('#000000'),
      horizontalColor: ref('#000000'),
      verticalOpacity: ref(1),
      horizontalOpacity: ref(1),
      radiusX,
      radiusY,
      centerX,
      centerY,
      reticulating,
      mapSizeX,
      mapSizeY
    }
  },
  methods: {
    generateMap() {
      //console.log(this.getMapName());
      //console.log(this.getMapId());
      //console.log(this.getMap());
      let map = "{\"mapId\": \"" + this.getMapId() + "\",\"mapName\": \"" + this.getMapName() + "\",\"initialViewRadiusX\": " + this.radiusX + "," + "\"initialViewRadiusY\": " + this.radiusY + "," + "\"initialViewCenterX\": " + this.centerX + "," + "\"initialViewCenterY\": " + this.centerY + ",\"tileSet\": [" + this.getMap() + "]}";
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
