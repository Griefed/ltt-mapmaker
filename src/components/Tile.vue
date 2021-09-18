<template>
  <div id="parent" class="hexagon" :style="backgroundColor">
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
              <img src="~assets/barren.png"/>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Barren</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="clay">
          <q-item-section avatar>
            <q-avatar>
              <img src="~assets/clay.png"/>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Clay</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="desert">
          <q-item-section avatar>
            <q-avatar>
              <img src="~assets/desert.png"/>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Desert</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="fish">
          <q-item-section avatar>
            <q-avatar>
              <img src="~assets/fish.png"/>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Fish</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="forest">
          <q-item-section avatar>
            <q-avatar>
              <img src="~assets/wood.png"/>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Forest</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="grass">
          <q-item-section avatar>
            <q-avatar>
              <img src="~assets/grass.png"/>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Grass</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="ice">
          <q-item-section avatar>
            <q-avatar>
              <img src="~assets/ice.png"/>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Ice</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="iron">
          <q-item-section avatar>
            <q-avatar>
              <img src="~assets/iron.png"/>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Iron</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="mountain">
          <q-item-section avatar>
            <q-avatar>
              <img src="~assets/mountain.png"/>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Mountain</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="salt">
          <q-item-section avatar>
            <q-avatar>
              <img src="~assets/salt.png"/>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Salt</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="stone">
          <q-item-section avatar>
            <q-avatar>
              <img src="~assets/stone.png"/>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Stone</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="water">
          <q-item-section avatar>
            <q-avatar>
              <img src="~assets/water.png"/>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Water</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="wheat">
          <q-item-section avatar>
            <q-avatar>
              <img src="~assets/wheat.png"/>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Wheat</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="wool">
          <q-item-section avatar>
            <q-avatar>
              <img src="~assets/wool.png"/>
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
      backgroundColor: 'background-color: #6A6629'
    }
  },
  methods: {
    barren () {
      console.log('Clicked on Barren');
      this.label = 'barren';
      this.color = 'brown-6';
      this.textcolor = 'white';
      this.backgroundColor = 'background-color: #634123';
    },
    clay () {
      console.log('Clicked on Clay');
      this.label = 'clay';
      this.color = 'orange-6';
      this.textcolor = 'white';
      this.backgroundColor = 'background-color: #D07E37';
    },
    desert () {
      console.log('Clicked on Desert');
      this.label = 'desert';
      this.color = 'yellow-4';
      this.textcolor = 'black';
      this.backgroundColor = 'background-color: #FCF078';
    },
    fish () {
      console.log('Clicked on Fish');
      this.label = 'fish';
      this.color = 'amber-12';
      this.textcolor = 'black';
      this.backgroundColor = 'background-color: #59857B';
    },
    forest () {
      console.log('Clicked on Forest');
      this.label = 'forest';
      this.color = 'green-10';
      this.textcolor = 'white';
      this.backgroundColor = 'background-color: #A6AC38';
    },
    grass () {
      console.log('Clicked on Grass');
      this.label = 'grass';
      this.color = 'green-8';
      this.textcolor = 'white';
      this.backgroundColor = 'background-color: #6A6629';
    },
    ice () {
      console.log('Clicked on Ice');
      this.label = 'ice';
      this.color = 'cyan-2';
      this.textcolor = 'black';
      this.backgroundColor = 'background-color: #D5D5CF';
    },
    iron () {
      console.log('Clicked on Iron');
      this.label = 'iron';
      this.color = 'blue-grey-5';
      this.textcolor = 'white';
      this.backgroundColor = 'background-color: #655441';
    },
    mountain () {
      console.log('Clicked on Mountain');
      this.label = 'mountain';
      this.color = 'grey-13';
      this.textcolor = 'white';
      this.backgroundColor = 'background-color: #CFAA70';
    },
    salt () {
      console.log('Clicked on Salt');
      this.label = 'salt';
      this.color = 'grey-4';
      this.textcolor = 'black';
      this.backgroundColor = 'background-color: #FAFAFA';
    },
    stone () {
      console.log('Clicked on Stone');
      this.label = 'stone';
      this.color = 'blue-grey-13';
      this.textcolor = 'white';
      this.backgroundColor = 'background-color: #3E2C1D';
    },
    water () {
      console.log('Clicked on Water');
      this.label = 'water';
      this.color = 'blue-10';
      this.textcolor = 'white';
      this.backgroundColor = 'background-color: #3F5B58';
    },
    wheat () {
      console.log('Clicked on Wheat');
      this.label = 'wheat';
      this.color = 'amber-12';
      this.textcolor = 'black';
      this.backgroundColor = 'background-color: #575815';
    },
    wool () {
      console.log('Clicked on Wool');
      this.label = 'wool';
      this.color = 'brown-13';
      this.textcolor = 'black';
      this.backgroundColor = 'background-color: #94812B';
    },
  }
}
</script>

<style>
.buttonshift {
  margin-top: 15px;
}

button.without-icon i {
  display: none;
}

.custom-width {
  width: 93.5px;
}

.hexagon {
  z-index: -1;
  position: relative;
  width: 100px;
  height: 57.74px;
  margin: 28.87px 0;
  border-left: solid 3px #333333;
  border-right: solid 3px #333333;
}

.hexagon:before,
.hexagon:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 70.71px;
  height: 70.71px;
  -webkit-transform: scaleY(0.5774) rotate(-45deg);
  -ms-transform: scaleY(0.5774) rotate(-45deg);
  transform: scaleY(0.5774) rotate(-45deg);
  background-color: inherit;
  left: 11.6447px;
}

.hexagon:before {
  z-index: -1;
  top: -35.3553px;
  border-top: solid 4.2426px #333333;
  border-right: solid 4.2426px #333333;
}

.hexagon:after {
  z-index: -1;
  bottom: -35.3553px;
  border-bottom: solid 4.2426px #333333;
  border-left: solid 4.2426px #333333;
}
</style>
