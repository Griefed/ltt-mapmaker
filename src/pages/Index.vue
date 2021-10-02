<template>

  <span v-if="store.state.lttMap">
    <span v-for="(xRow, index) in store.state.lttMap" :key="index">
      <div class="row no-wrap"
        v-bind:class="[{
          firstRow: (index == 0),
          moveup: (index !=0),
        }, (index != 0 && !(index%2))?'shifted':'notShifted']"
      >
        <Tile
          v-for="(tile, i) in xRow"
          :tile="tile"
          :typeValue="tile.typeId"
          @update:typeValue="tile.typeId = $event"
          v-bind:id="tile.x+'_'+tile.y"
          :class="{tileMl: (i!=0)?1:0}"
          v-bind:key="i">
          </Tile>
      </div>
    </span>
  </span>

  <span v-else>
    <div class="row no-wrap q-pa-md absolute-center">
      <q-card>
        <q-card-section>
          <div class="column" style="width: 600px;">
              <div class="text-h6 q-mb-md text-black">New Map Dimensions</div>
              <q-item>
                <q-item-section avatar>
                  <q-icon size="30px" color="secondary" name="mdi-arrow-expand-horizontal" />
                </q-item-section>
                <q-item-section>
                  <q-slider v-model="store.state.mapSizeX" :min="1" :max="101" label color="secondary" :step="1" label-always/>
                  <q-tooltip :disable="$q.platform.is.mobile">
                      Size along the X-axis.
                  </q-tooltip>
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <q-icon size="30px" color="secondary" name="mdi-arrow-expand-vertical" />
                </q-item-section>
                <q-item-section>
                  <q-slider v-model="store.state.mapSizeY" :min="1" :max="101" label color="secondary" :step="1" label-always/>
                  <q-tooltip :disable="$q.platform.is.mobile">
                    Size along the Y-axis.
                  </q-tooltip>
                </q-item-section>
              </q-item>

              <q-btn class="q-mr-xs" color="secondary" label="Generate Empty Map" @click='createMap()'>
                <q-tooltip :disable="$q.platform.is.mobile">
                  Generate empty map with size set above
                </q-tooltip>
              </q-btn>

          </div>
        </q-card-section>

        <q-card-section>
          <div class="column" style="width: 600px;">
            <q-input color="black" filled v-model="store.state.seed" label="Seed" type="number" maxlength="15">
              <template v-slot:append>
                <q-icon name="cancel" @click.stop="store.state.seed = null" class="cursor-pointer" />
                <q-icon name="refresh" @click.stop="store.state.seed = store.seedGenerator.random_int31()" class="cursor-pointer" />
              </template>
              <q-tooltip :disable="$q.platform.is.mobile">
                Numbers only.
              </q-tooltip>
            </q-input>
            <q-btn class="q-mr-xs" color="secondary" label="Generate Random Map" @click='createRandomMap()'>
                <q-tooltip :disable="$q.platform.is.mobile">
                  Generate random map with size set above
                </q-tooltip>
            </q-btn>
          </div>
        </q-card-section>

        <q-card-section>
          <div class="column">
            <div class="text-h6 q-mb-md text-black">Load Existing Map</div>
            <q-input
              v-model="mapString"
              filled
              placeholder="Paste Map Data"
              type="textarea"
              input-class="pastCodeArea"
            >
              <q-tooltip :disable="$q.platform.is.mobile">
                Valid map-json only.
              </q-tooltip>
            </q-input>
            <q-btn class="q-mr-xs" color="secondary" label="Load Map From Filedata" @click='loadMapData()'>
              <q-tooltip :disable="$q.platform.is.mobile">
                Load Map From Data
              </q-tooltip>
            </q-btn>
          </div>
        </q-card-section>

        <q-card-section>
          <div class="column">
            <div class="text-h6 q-mb-md text-black">Load Map from File</div>
            <q-file
              v-model="file"
              label="Pick one file"
              filled
              clearable
              accept=".json, application/*"
              max-file-size="800000"
              style="max-width: 100%"
              @rejected="onRejected"
            >
              <q-tooltip :disable="$q.platform.is.mobile">
                Only one file of max 800Kb in size.
              </q-tooltip>
            </q-file>
            <q-btn class="q-mr-xs" color="secondary" label="Load Map From Filedata" @click='loadMapFile()'>
              <q-tooltip :disable="$q.platform.is.mobile">
                Load Map From File
              </q-tooltip>
            </q-btn>
          </div>
        </q-card-section>


      </q-card>
    </div>
  </span>

</template>

<script>
import { defineComponent, inject, ref } from 'vue';
import Tile from "../components/Tile.vue";
import { useQuasar } from 'quasar';

export default defineComponent({
    setup() {

      const store = inject('store');

      const $q = useQuasar()

      var mapString = ref('');

      const parseJsonFromString = function(mapString) {
        let mapObject;
        try {
          mapObject = JSON.parse(mapString);
        } catch (e) {
            if (e instanceof SyntaxError) {
              $q.notify({
                type: 'negative',
                message: 'Input is not a valid JSON'
              })
          } else {
              $q.notify({
                type: 'negative',
                message: 'An unknown error occured'
              })
              console.log(e);
          }
          return;
        }
        this.file = null;
        this.mapString = null;
        store.methods.loadMap(mapObject);
      }

      const loadMapData = function() {
        this.parseJsonFromString(mapString.value);
      };

      const loadMapFile = function() {
        const reader = new FileReader();
        reader.onload = e => this.parseJsonFromString(e.target.result);
        reader.readAsText(this.file);
      };

      const createMap = function() {
        store.methods.generateMap();
      };

      const createRandomMap = function() {
        store.methods.generateRandomMap();
      };

      const onRejected = function(rejectedEntries) {
        $q.notify({
          type: 'negative',
          message: `${rejectedEntries[0].file.name} file(s) did not pass validation constraints`
        });
      };

      return {
        parseJsonFromString,
        file: ref(null),
        mapString,
        store,
        createMap,
        createRandomMap,
        loadMapData,
        loadMapFile,
        onRejected
      }
    },

    methods:{

    },
    components: {
      Tile
    },
  }
)
</script>

<style>
.firstRow {
  margin-left: 49px;
}

.shifted {
  margin-top: -31px;
  margin-left: 49px;
}

.tileMl {
  margin-left: -2px;
}

.moveup {
  margin-top: -31px;
}
</style>
