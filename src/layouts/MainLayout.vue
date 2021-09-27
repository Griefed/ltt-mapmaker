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

        <template v-if="store.state.lttMap">
          <q-btn class="q-mr-xs" color="secondary" label="New Map" @click='confirmMapNew = true'>
            <q-tooltip :disable="$q.platform.is.mobile">
              NewMap
            </q-tooltip>
          </q-btn>

          <q-separator inset spaced />

          <q-dialog v-model="confirmMapNew" persistent>
            <q-card>
              <q-card-section class="row items-center">
                <span class="q-ml-sm">
                  Make sure you have saved your map before generating or loading another one!
                  Clear Map?</span>
              </q-card-section>

              <q-card-actions align="right">
                <q-btn flat label="Cancel" color="primary" v-close-popup />
                <q-btn flat label="Clear Map" color="primary" @click='newMap()' v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>


          <q-btn-dropdown label="Settings" color="secondary">
            <div class="row no-wrap q-pa-md">
              <div class="column" style="width: 600px;">
                <div class="text-h6 q-mb-md">Initial View Radius</div>
                <q-item>
                  <q-item-section avatar>
                    <q-icon size="30px" color="secondary" name="mdi-arrow-expand-horizontal" />
                  </q-item-section>
                  <q-item-section>
                    <q-slider v-model="store.state.radiusX" :min="1" :max="Math.floor(store.state.mapSizeX/2)" label color="secondary" :step="1" label-always/>
                  </q-item-section>
                </q-item>

                <q-item>
                  <q-item-section avatar>
                    <q-icon size="30px" color="secondary" name="mdi-arrow-expand-vertical" />
                  </q-item-section>
                  <q-item-section>
                    <q-slider v-model="store.state.radiusY" :min="1" :max="Math.floor(store.state.mapSizeY/2)" label color="secondary" :step="1" label-always/>
                  </q-item-section>
                </q-item>

                <q-separator inset spaced />

                <div class="text-h6 q-mb-md">Initial View Center</div>
                <q-item>
                  <q-item-section avatar>
                    <q-icon size="30px" color="secondary" name="mdi-arrow-expand-horizontal" />
                  </q-item-section>
                  <q-item-section>
                    <q-slider v-model="store.state.centerX" :min="store.state.minX" :max="store.state.maxX" label color="secondary" :step="1" label-always/>
                  </q-item-section>
                </q-item>

                <q-item>
                  <q-item-section avatar>
                    <q-icon size="30px" color="secondary" name="mdi-arrow-expand-vertical" />
                  </q-item-section>
                  <q-item-section>
                    <q-slider v-model="store.state.centerY" :min="store.state.minY" :max="store.state.maxY" label color="secondary" :step="1" label-always/>
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

        </template>

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

        <q-btn @click="alert = true" color="secondary" dense label="About LTTMM">
          <q-tooltip :disable="$q.platform.is.mobile">
            Open a little About! 🙂
          </q-tooltip>

        </q-btn>

        <q-dialog v-model="alert">
          <q-card style="max-width: 1000px;width:750px">

            <q-card-section>
              <div class="text-h6 text-center">About Let Them Trade Map-Maker, Let Them Trade, and Spaceflower</div>
              <div class="text-center">Let Them Trade Map-Maker is not affiliated with Spaceflower in any way, shape, or form.</div>
            </q-card-section>

            <q-card-section align="center">
              <q-btn style="margin-right: 15px" type="a" target="_blank" href="https://github.com/Griefed/ltt-mapmaker">
                <q-icon size="50px" color="dark" name="mdi-github"></q-icon>
                <q-tooltip :disable="$q.platform.is.mobile">
                  LTTMM on GitHub!
                </q-tooltip>
              </q-btn>
            </q-card-section>

            <q-card-section class="q-pt-none text-center">
              A visual map maker for the game <b>Let Them Trade</b>, by <b>Spaceflower</b>, made with VueJS/Quasar.<br>
              Simply click on a button in the center of a tile and select the type you want it to change to.<br>
              Do so for the whole map. After your map looks good to you, hit the "<b>DOWNLOAD MAP</b>"-button in the menubar at the top.<br>
              This will generate and download a <b>.json</b>-file containing your Let Them Trade map.
            </q-card-section>

            <q-card-section>
              <div class="text-h6 text-center">All Things Spaceflower!</div>
            </q-card-section>

            <q-card-section align="center">
              <q-btn style="margin-right: 15px" type="a" href="https://store.steampowered.com/app/1313290/Let_Them_Trade/">
                <q-icon size="50px" color="red-7" name="mdi-steam"></q-icon>
                <q-tooltip :disable="$q.platform.is.mobile">
                  Let Them Trade on Steam!
                </q-tooltip>
              </q-btn>
              <q-btn style="margin-right: 15px" type="a" href="https://www.twitch.tv/spaceflowerde">
                <q-icon size="50px" color="red-7" name="mdi-twitch"></q-icon>
                <q-tooltip :disable="$q.platform.is.mobile">
                  Spaceflower on Twitch!
                </q-tooltip>
              </q-btn>
              <q-btn style="margin-right: 15px" type="a" href="https://spaceflower.de/">
                <q-icon size="50px" color="red-7" name="mdi-web"></q-icon>
                <q-tooltip :disable="$q.platform.is.mobile">
                  Visit the homepage of Spaceflower!
                </q-tooltip>
              </q-btn>
              <q-btn style="margin-right: 15px" type="a" href="https://www.tiktok.com/@spaceflowerde?">
                <q-icon size="50px" color="red-7" name="tiktok"></q-icon>
                <q-tooltip :disable="$q.platform.is.mobile">
                  Visit Spaceflower on TikTok!
                </q-tooltip>
              </q-btn>
              <q-btn style="margin-right: 15px" type="a" href="https://twitter.com/spaceflowerde">
                <q-icon size="50px" color="red-7" name="mdi-twitter"></q-icon>
                <q-tooltip :disable="$q.platform.is.mobile">
                  Visit Spaceflower on Twitter!
                </q-tooltip>
              </q-btn>
              <q-btn style="margin-right: 15px" type="a" href="https://www.facebook.com/SpaceflowerDE">
                <q-icon size="50px" color="red-7" name="mdi-facebook"></q-icon>
                <q-tooltip :disable="$q.platform.is.mobile">
                  Visit Spaceflower on Facebook!
                </q-tooltip>
              </q-btn>
              <q-btn style="margin-right: 15px" type="a" href="https://discordapp.com/invite/yaTeefS">
                <q-icon size="50px" color="red-7" name="mdi-discord"></q-icon>
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
import { defineComponent, ref, reactive, inject } from 'vue'
import { openURL } from 'quasar'

export default defineComponent({
  name: 'MainLayout',
  setup () {
    const store = inject('store');
    return {
      confirmMapNew: ref(false),
      store,
      visible: ref(true),
      alert: ref(false),
      verticalColor: ref('#000000'),
      horizontalColor: ref('#000000'),
      verticalOpacity: ref(1),
      horizontalOpacity: ref(1),
    }
  },
  methods: {
    newMap(){
      this.confirmMapNew = false;
      this.store.methods.reset();
    },
    generateMap() {
      this.downloadMap(this.store.methods.getMapId() + ".json", JSON.stringify(this.store.methods.exportMap(), null, 2));
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
