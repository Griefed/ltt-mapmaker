<template>

   <div id="parent" class="hexagon" :class="tile.typeId">
    <div class="hexTop"></div>
    <div class="hexBottom"></div>

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
import {ref} from "vue";

export default {
  props:{
    tile: Object,
    typeValue: String
  },
  setup () {
    var types = ["barren", "clay", "desert", "fish", "forest", "grass", "ice", "iron", "mountain", "salt", "stone", "water", "wheat", "wool"];
    return {
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
  border-top: solid 4.2426px #333333;
  border-right: solid 4.2426px #333333;
}

.hexTop:after {
  background-position: center top;
}

.hexBottom {
  bottom: -35.3553px;
  border-bottom: solid 4.2426px #333333;
  border-left: solid 4.2426px #333333;
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
</style>
