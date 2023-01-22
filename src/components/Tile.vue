<template>
   <div id="parent" class="hexagon"
    :class="[tile.typeId,isViewRadiusBorder(), ((tile.x == store.state.centerX) && (tile.y == store.state.centerY))?'centerTile':'']">
    <div class="hexTop" :class="((tile.x == store.state.centerX) && (tile.y == store.state.centerY))?'centerTop':''"></div>
    <div class="hexBottom" :class="((tile.x == store.state.centerX) && (tile.y == store.state.centerY))?'centerBottom':''"></div>

    <q-btn-dropdown
      class="buttonshift without-icon custom-width"
      :label="tile.typeId"
      align="center"
      size="11px"
      dropdown-icon=" "
      v-model="menuState">
      <q-list>

        <q-item v-for="type in types" v-bind:key="type" clickable v-close-popup @click="setType(type)">
          <q-item-section avatar>
            <q-avatar>
              <img :src="'./tiles/'+type+'.webp'" />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{type.toUpperCase()}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
    <q-tooltip :disable="$q.platform.is.mobile">
      {{tile.x+'/'+tile.y+": "+ tile.typeId}}
    </q-tooltip>
   </div>
</template>

<script>
import {inject, ref} from "vue";

export default {
  name: 'LttTile',
  props:{
    tile: Object,
    typeValue: String
  },
  setup (props) {
    var types = ["barren", "clay", "desert", "fish", "forest", "grass", "ice", "iron", "mountain", "salt", "stone", "water", "wheat", "wool"];
    const store = inject('store');

    const isViewRadiusBorder = function() {
      var borders = [];
      //leftBorder
      if( props.tile.x == (this.store.state.centerX-this.store.state.radiusX+1) &&
          ((this.store.state.centerY-this.store.state.radiusY+1) <= props.tile.y && props.tile.y <= (this.store.state.centerY+this.store.state.radiusY-1))){
            borders.push("viewBorderLeft");
      }
      if( props.tile.x == (this.store.state.centerX+this.store.state.radiusX-1) &&
          ((this.store.state.centerY-this.store.state.radiusY+1) <= props.tile.y && props.tile.y <= (this.store.state.centerY+this.store.state.radiusY-1))){
            borders.push("viewBorderRight")
      }
      if( props.tile.y == (this.store.state.centerY+this.store.state.radiusY-1) &&
          ((this.store.state.centerX-this.store.state.radiusX+1) <= props.tile.x && props.tile.x <= (this.store.state.centerX+this.store.state.radiusX-1))){
            borders.push("viewBorderTop")
      }
      if( props.tile.y == (this.store.state.centerY-this.store.state.radiusY+1) &&
          ((this.store.state.centerX-this.store.state.radiusX+1) <= props.tile.x && props.tile.x <= (this.store.state.centerX+this.store.state.radiusX-1))){
            borders.push("viewBorderBottom")
      }

      return borders;
    }

    return {
      isViewRadiusBorder,
      store,
      types,
      menuState: ref(false),
      label: 'grass',
      color: 'green-8',
      textcolor: 'white',
      backgroundImage: 'background-image: url(./tiles/grass_tile.webp);'
    }
  },
  emits: ['update:typeValue'],
  updated(){

  },
  methods: {
    setType(type){
      this.$emit('update:typeValue', type);
    },
  }
}
</script>

<style lang="scss">
.buttonshift {
  z-index: 1001;
  margin-top: 15px;
}

button.without-icon i {
  display: none;
}

.custom-width {
  width: 93.5px;
}

.hexagon {
  position: relative;
  width: 100px;
  height: 57.74px;
  margin: 28.87px 0;
  background-size: auto 108.5419px;
  background-position: center;
  border-left: solid 3px #333333;
  border-right: solid 3px #333333;
}



.hexTop,
.hexBottom {
  position: absolute;
  z-index: 1;
  width: 70.71px;
  height: 70.71px;
  overflow: hidden;
  -webkit-transform: scaleY(0.5774) rotate(-45deg);
  -ms-transform: scaleY(0.5774) rotate(-45deg);
  transform: scaleY(0.5774) rotate(-45deg);
  background: inherit;
  left: 11.64px;
}

/*counter transform the bg image on the caps*/
.hexTop:after,
.hexBottom:after {
  content: "";
  position: absolute;
  width: 94.0000px;
  height: 54.270925303824825px;
  -webkit-transform:  rotate(45deg) scaleY(1.7321) translateY(-27.1355px);
  -ms-transform:      rotate(45deg) scaleY(1.7321) translateY(-27.1355px);
  transform:          rotate(45deg) scaleY(1.7321) translateY(-27.1355px);
  -webkit-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  transform-origin: 0 0;
  background: inherit;
}

.hexTop {
  top: -35.3553px;
  border-top: solid 3px #333333;
  border-right: solid 3px #333333;
}

.hexTop:after {
  background-position: center top;
}

.hexBottom {
  bottom: -35.3553px;
  border-bottom: solid 3px #333333;
  border-left: solid 3px #333333;
}

.hexBottom:after {
  background-position: center bottom;
}

.hexagon:after {
  content: "";
  position: absolute;
  top: 1.7321px;
  left: 0;
  width: 94.0000px;
  height: 54.2709px;
  z-index: 2;
  background: inherit;
}

.viewBorderLeft {
  z-index: 1001;
  border-left: dashed 3px blue;
}

.viewBorderRight {
  z-index: 1001;
  border-right: dashed 3px blue;
}

.viewBorderTop {
  z-index: 1001;
  .hexTop {
    border-top: dashed 3px blue;
    border-right: dashed 3px blue;
  }
}
.viewBorderBottom {
  z-index: 1001;
  .hexBottom {
    border-bottom: dashed 3px blue;
    border-left: dashed 3px blue;
  }
}

.notShifted{
  .viewBorderLeft{
    .hexTop{
      border-top: dashed 3px blue;
    }
    .hexBottom{
      border-left: dashed 3px blue;
    }
        .centerTop {
      border-top: solid 4.2426px red !important;;
      border-right: solid 4.2426px red !important;
    }

    .centerBottom {
      border-bottom: solid 4.2426px red !important;
      border-left: solid 4.2426px red !important;
    }
  }
}
.shifted, .firstRow{
  .viewBorderRight{
    .hexTop{
      border-right: dashed 3px blue;
    }
    .hexBottom{
      border-bottom: dashed 3px blue;
    }
        .centerTop {
      border-top: solid 4.2426px red !important;
      border-right: solid 4.2426px red !important;
    }

    .centerBottom {
      border-bottom: solid 4.2426px red !important;
      border-left: solid 4.2426px red !important;
    }
  }
}

.barren {
  background-image: url("../assets/tiles/barren_tile.webp");
  button {
    background-color: $brown-6;
    color: white;
  }
}

.clay {
  background-image: url("../assets/tiles/clay_tile.webp");
  button {
    background-color: $orange-6;
    color: white;
  }
}

.desert {
  background-image: url("../assets/tiles/desert_tile.webp");
  button {
    background-color: $yellow-4;
    color: black;
  }
}
.fish {
  background-image: url("../assets/tiles/fish_tile.webp");
  button {
    background-color: $amber-12;
    color: black;
  }
}
.forest {
  background-image: url("../assets/tiles/forest_tile.webp");
  button {
    background-color: $green-10;
    color: white;
  }
}
.grass {
  background-image: url("../assets/tiles/grass_tile.webp");
  button {
    background-color: $green-8;
    color: white;
  }
}
.ice {
  background-image: url("../assets/tiles/ice_tile.webp");
  button {
    background-color: $cyan-2;
    color: black;
  }
}
.iron {
  background-image: url("../assets/tiles/iron_tile.webp");
  button {
    background-color: $blue-grey-5;
    color: white;
  }
}
.mountain {
  background-image: url("../assets/tiles/mountain_tile.webp");
  button {
    background-color: $grey-13;
    color: white;
  }
}
.salt {
  background-image: url("../assets/tiles/salt_tile.webp");
  button {
    background-color: $grey-4;
    color: black;
  }
}
.stone {
  background-image: url("../assets/tiles/stone_tile.webp");
  button {
    background-color: $blue-grey-13;
    color: white;
  }
}
.water {
  background-image: url("../assets/tiles/water_tile.webp");
  button {
    background-color: $blue-10;
    color: white;
  }
}
.wheat {
  background-image: url("../assets/tiles/wheat_tile.webp");
  button {
    background-color: $amber-12;
    color: black;
  }
}
.wool {
  background-image: url("../assets/tiles/wool_tile.webp");
  button {
    background-color: $brown-13;
    color: black;
  }
}

.centerTop {
  border-top: solid 4.2426px red !important;
  border-right: solid 4.2426px red !important;
}

.centerBottom {
  border-bottom: solid 4.2426px red !important;
  border-left: solid 4.2426px red !important;
}

.centerTile {
  z-index: 1002;
  border-left: solid 3px red !important;
  border-right: solid 3px red !important;
}
</style>
