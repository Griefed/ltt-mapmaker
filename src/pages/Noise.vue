<template>
  <q-card>
    <div class="row no-wrap">
      <q-btn @click="draw()" color="secondary" dense label="Noise"/>
        <!-- equivalent -->
      <q-input color="black" filled v-model="seedNumber" label="Seed" type="number" maxlength="15">
        <template v-if="seedNumber" v-slot:append>
          <q-icon name="cancel" @click.stop="seedNumber = null" class="cursor-pointer" />
        </template>
      </q-input>
      <q-input color="black" filled v-model="sizeX" label="Map Width" type="number" maxlength="3">
        <template v-if="sizeX" v-slot:append>
          <q-icon name="cancel" @click.stop="sizeX = null" class="cursor-pointer" />
        </template>
      </q-input>
      <q-input color="black" filled v-model="sizeY" label="Map Height" type="number" maxlength="3">
        <template v-if="sizeY" v-slot:append>
          <q-icon name="cancel" @click.stop="sizeY = null" class="cursor-pointer" />
        </template>
      </q-input>
    </div>
  </q-card>

  <q-card>
  <q-card-section>
    <canvas id="map-canvas" width="800" height="400"></canvas>
  </q-card-section>
</q-card>

</template>

<script>
import { ref } from 'vue'
import NoiseMap from 'noise-map';
import MersenneTwister from 'mersenne-twister';

export default {
  setup() {
    return {
      seedNumber: ref(new MersenneTwister().random_int()),
      sizeX: ref(50),
      sizeY: ref(30),
      button: ref(false)
    }
  },
  methods: {
    draw(seed) {
      const mapGenerator = new NoiseMap.MapGenerator(this.seedNumber);
      const heightmap = mapGenerator.createMap(this.sizeX, this.sizeY, {type: 'perlit'});
      heightmap.stepValues(5);
      for (let y = 0; y < this.sizeY; y++) {
        for (let x = 0; x < this.sizeX; x++) {
          let value = Math.floor(heightmap.get(x, y)*100);
          switch(value) {
            case 100:
              console.log('Coords: x:' + x + ' y: ' + y + ' value: Mountains');
              break;
            case 80:
              console.log('Coords: x:' + x + ' y: ' + y + ' value: Ice');
              break;
            case 60:
              console.log('Coords: x:' + x + ' y: ' + y + ' value: Barren');
              break;
            case 40:
              console.log('Coords: x:' + x + ' y: ' + y + ' value: Desert');
              break;
            case 20:
              console.log('Coords: x:' + x + ' y: ' + y + ' value: Grass');
              break;
            case 0:
              console.log('Coords: x:' + x + ' y: ' + y + ' value: Water');
              break;
            default:
              //console.log('Error');
          }
          //console.log('Coords: x:' + x + ' y: ' + y + ' value: ' + value);
        }
      }
      const mapContext = document.getElementById('map-canvas').getContext('2d');

      /* Comment out the line below to not draw heightmap */
      heightmap.draw(mapContext, 800, 400, NoiseMap.STYLE.GRAY);
    }
  }
}
</script>

<style>
.firstRow {
  margin-left: 49px;
}

.shifted {
  margin-top: -31px;
  margin-left: 49px;
}

.moveup {
  margin-top: -31px;
}
</style>
