<template>

  <div id="parent" class="hexagon" :style="backgroundImage">
    <div class="hexTop"></div>
    <div class="hexBottom"></div>

    <q-btn-dropdown
      class="buttonshift without-icon custom-width"
      :color="color"
      :label="label"
      :text-color="textcolor"
      align="center"
      size="11px"
      dropdown-icon=" "
      v-model="menuState">
      <q-list>

        <q-item clickable v-close-popup @click="barren">
          <q-item-section avatar>
            <q-avatar>
              <img src="~assets/tiles/barren.webp"/>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Barren</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="clay">
          <q-item-section avatar>
            <q-avatar>
              <img src="~assets/tiles/clay.webp"/>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Clay</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="desert">
          <q-item-section avatar>
            <q-avatar>
              <img src="~assets/tiles/desert.webp"/>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Desert</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="fish">
          <q-item-section avatar>
            <q-avatar>
              <img src="~assets/tiles/fish.webp"/>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Fish</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="forest">
          <q-item-section avatar>
            <q-avatar>
              <img src="~assets/tiles/wood.webp"/>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Forest</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="grass">
          <q-item-section avatar>
            <q-avatar>
              <img src="~assets/tiles/grass.webp"/>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Grass</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="ice">
          <q-item-section avatar>
            <q-avatar>
              <img src="~assets/tiles/ice.webp"/>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Ice</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="iron">
          <q-item-section avatar>
            <q-avatar>
              <img src="~assets/tiles/iron.webp"/>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Iron</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="mountain">
          <q-item-section avatar>
            <q-avatar>
              <img src="~assets/tiles/mountain.webp"/>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Mountain</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="salt">
          <q-item-section avatar>
            <q-avatar>
              <img src="~assets/tiles/salt.webp"/>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Salt</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="stone">
          <q-item-section avatar>
            <q-avatar>
              <img src="~assets/tiles/stone.webp"/>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Stone</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="water">
          <q-item-section avatar>
            <q-avatar>
              <img src="~assets/tiles/water.webp"/>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Water</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="wheat">
          <q-item-section avatar>
            <q-avatar>
              <img src="~assets/tiles/wheat.webp"/>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Wheat</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="wool">
          <q-item-section avatar>
            <q-avatar>
              <img src="~assets/tiles/wool.webp"/>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Wool</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-btn-dropdown>

  </div>

</template>

<script>
import {ref} from "vue";

export default {
  setup () {
    return {
      menuState: ref(false),
      label: 'grass',
      color: 'green-8',
      textcolor: 'white',
      backgroundImage: 'background-image: url(./tiles/grass_tile.webp);'
    }
  },
  methods: {
    barren () {
      console.log('Clicked on Barren');
      this.label = 'barren';
      this.color = 'brown-6';
      this.textcolor = 'white';
      this.backgroundImage = 'background-image: url(./tiles/barren_tile.webp);'
    },
    clay () {
      console.log('Clicked on Clay');
      this.label = 'clay';
      this.color = 'orange-6';
      this.textcolor = 'white';
      this.backgroundImage = 'background-image: url(./tiles/clay_tile.webp);'
    },
    desert () {
      console.log('Clicked on Desert');
      this.label = 'desert';
      this.color = 'yellow-4';
      this.textcolor = 'black';
      this.backgroundImage = 'background-image: url(./tiles/desert_tile.webp);'
    },
    fish () {
      console.log('Clicked on Fish');
      this.label = 'fish';
      this.color = 'amber-12';
      this.textcolor = 'black';
      this.backgroundImage = 'background-image: url(./tiles/fish_tile.webp);'
    },
    forest () {
      console.log('Clicked on Forest');
      this.label = 'forest';
      this.color = 'green-10';
      this.textcolor = 'white';
      this.backgroundImage = 'background-image: url(./tiles/forest_tile.webp);'
    },
    grass () {
      console.log('Clicked on Grass');
      this.label = 'grass';
      this.color = 'green-8';
      this.textcolor = 'white';
      this.backgroundImage = 'background-image: url(./tiles/grass_tile.webp);'
    },
    ice () {
      console.log('Clicked on Ice');
      this.label = 'ice';
      this.color = 'cyan-2';
      this.textcolor = 'black';
      this.backgroundImage = 'background-image: url(./tiles/ice_tile.webp);'
    },
    iron () {
      console.log('Clicked on Iron');
      this.label = 'iron';
      this.color = 'blue-grey-5';
      this.textcolor = 'white';
      this.backgroundImage = 'background-image: url(./tiles/iron_tile.webp);'
    },
    mountain () {
      console.log('Clicked on Mountain');
      this.label = 'mountain';
      this.color = 'grey-13';
      this.textcolor = 'white';
      this.backgroundImage = 'background-image: url(./tiles/mountain_tile.webp);'
    },
    salt () {
      console.log('Clicked on Salt');
      this.label = 'salt';
      this.color = 'grey-4';
      this.textcolor = 'black';
      this.backgroundImage = 'background-image: url(./tiles/salt_tile.webp);'
    },
    stone () {
      console.log('Clicked on Stone');
      this.label = 'stone';
      this.color = 'blue-grey-13';
      this.textcolor = 'white';
      this.backgroundImage = 'background-image: url(./tiles/stone_tile.webp);'
    },
    water () {
      console.log('Clicked on Water');
      this.label = 'water';
      this.color = 'blue-10';
      this.textcolor = 'white';
      this.backgroundImage = 'background-image: url(./tiles/water_tile.webp);'
    },
    wheat () {
      console.log('Clicked on Wheat');
      this.label = 'wheat';
      this.color = 'amber-12';
      this.textcolor = 'black';
      this.backgroundImage = 'background-image: url(./tiles/wheat_tile.webp);'
    },
    wool () {
      console.log('Clicked on Wool');
      this.label = 'wool';
      this.color = 'brown-13';
      this.textcolor = 'black';
      this.backgroundImage = 'background-image: url(./tiles/wool_tile.webp);'
    },
  }
}
</script>

<style>
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
</style>
