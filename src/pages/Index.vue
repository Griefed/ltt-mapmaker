<template>
  <span v-if="map">
    <span v-for="(xRow, index) in map" :key="index">
      <div v-if="index == 0" class="row no-wrap firstRow"
        v-bind:class="{
          firstRow: (index == 0),
          moveup: (index !=0),
          shifted: (index%2)
        }"
      >
        <Tile
          v-for="(tile, i) in xRow"
          v-bind:id="tile.x+'_'+tile.y"
          v-bind:style="{ zIndex: 1000,
                          margin: {
                            left: (i!=0)?-2:0
                          }
                        }"
          v-bind:key="i"></Tile>
      </div>
      <div v-else-if="(index%2)" class="row no-wrap moveup">
        <Tile
          v-for="(tile, i) in xRow"
          v-bind:id="tile.x+'_'+tile.y"
          v-bind:style="{
              zIndex: 1000,
              margin: {
                left: (i!=0)?-2:0
                }
            }"
          v-bind:key="i"></Tile>
      </div>
      <div v-else class="row no-wrap moveup shifted">
        <Tile
          v-for="(tile, i) in xRow"
          v-bind:id="tile.x+'_'+tile.y"
          v-bind:style="{
            zIndex: 1000,
            margin: {
              left: (i!=0)?-2:0}
              }"
          v-bind:key="i"></Tile>
      </div>
    </span>
  </span>

</template>

<script>
import { defineComponent } from 'vue';
import Tile from "../components/Tile.vue";

export default defineComponent({
    setup() {
      var mapSizeX = 49;
      var mapSizeY = 29;
      var map = [
        [{x:-1,y:1,z:0,type:"grass"},{x:0,y:1,z:0,type:"grass"},{x:1,y:1,z:0,type:"grass"}],
        [{x:-1,y:0,z:0,type:"grass"},{x:0,y:0,z:0,type:"grass"},{x:1,y:0,z:0,type:"grass"}],
        [{x:-1,y:-1,z:0,type:"grass"},{x:0,y:-1,z:0,type:"grass"},{x:1,y:-1,z:0,type:"grass"}]
        ];
      return {
        mapSizeX,
        mapSizeY,
        map
      }
    },
    mounted() {
      this.map = this.createMap(this.mapSizeX, this.mapSizeY);
      console.log(this.map);
      this.$forceUpdate();
    },
    methods:{
      init(){

      },
      createMap(x,y){
        let defaultTile = "grass";
        let map = [];
        let xMod = Math.floor(x/2);
        let yMod = Math.ceil(y/2);
        for(let m = y; m > 0; m--){
          let xArr = [];
          for(let i = 0; i < x; i++){
            xArr.push({
              x: i-xMod,
              y: m-yMod,
              z: 0,
              type: defaultTile
            });
          }
          map.push(xArr);
        }
        return map;
      }
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

.moveup {
  margin-top: -31px;
}
</style>
