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
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <q-icon size="30px" color="secondary" name="mdi-arrow-expand-vertical" />
                </q-item-section>
                <q-item-section>
                  <q-slider v-model="store.state.mapSizeY" :min="1" :max="101" label color="secondary" :step="1" label-always/>
                </q-item-section>
              </q-item>
              <q-btn class="q-mr-xs" color="secondary" label="Generate New Map" @click='createMap()'>
                <q-tooltip :disable="$q.platform.is.mobile">
                  Generate new map with size set above
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
              ></q-input>
              <q-btn class="q-mr-xs" color="secondary" label="Load Map From Filedata" @click='loadMapData()'>
                <q-tooltip :disable="$q.platform.is.mobile">
                  Load Map From Data
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

export default defineComponent({
    setup() {

      const store = inject('store');

      var mapString = ref('')

      const loadMapData = function() {
        store.methods.loadMap(JSON.parse(mapString.value));
      };

      const createMap= function(){
        store.methods.generateMap();
      };

      return {
        mapString,
        store,
        createMap,
        loadMapData
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
