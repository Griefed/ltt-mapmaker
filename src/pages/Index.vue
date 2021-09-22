<template>
  <span v-if="store.state.lttMap">
    <span v-for="(xRow, index) in store.state.lttMap" :key="index">
      <div class="row no-wrap"
        v-bind:class="{
          firstRow: (index == 0),
          moveup: (index !=0),
          shifted: (index != 0 && !(index%2))
        }"
      >
        <Tile
          v-for="(tile, i) in xRow"
          :tile="tile"
          :typeValue="tile.typeId"
          @update:typeValue="tile.typeId = $event"
          v-bind:id="tile.x+'_'+tile.y"
          :class="{tileMl: (i!=0)?1:0}"
          v-bind:style="{ zIndex: 1000,
                        }"
          v-bind:key="i"></Tile>
      </div>
    </span>
  </span>
  <span v-else>
    <div class="row no-wrap q-pa-md">
      <div class="column" style="width: 600px;">
        <div class="text-h6 q-mb-md">MapSize</div>
        <q-item>
          <q-item-section avatar>
            <q-icon size="30px" color="secondary" name="mdi-arrow-expand-horizontal" />
          </q-item-section>
          <q-item-section>
            <q-slider v-model="store.state.mapSizeX" :min="1" :max="101" label color="secondary" :step="2" label-always/>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-icon size="30px" color="secondary" name="mdi-arrow-expand-vertical" />
          </q-item-section>
          <q-item-section>
            <q-slider v-model="store.state.mapSizeY" :min="1" :max="101" label color="secondary" :step="2" label-always/>
          </q-item-section>
        </q-item>
        <q-btn class="q-mr-xs" color="secondary" label="Generate Base Map" @click='createMap()'>
          <q-tooltip :disable="$q.platform.is.mobile">
            Create Base Map
          </q-tooltip>
        </q-btn>
      </div>
    </div>
  </span>
</template>

<script>
import { defineComponent, inject } from 'vue';
import Tile from "../components/Tile.vue";

export default defineComponent({
    setup() {

      const store = inject('store');

      const createMap= function(){
        store.methods.generateMap();
        //this.$forceUpdate();
      };

      return {
        store,
        createMap,
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
