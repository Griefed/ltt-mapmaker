[![screenshot](https://i.griefed.de/images/2021/09/18/image.png)](https://store.steampowered.com/app/1313290/Let_Them_Trade/)

# Let Them Trade Map Editor (ltt-mapeditor)

ltt-mapmaker is a visual map editor for the game [Let Them Trade](https://store.steampowered.com/app/1313290/Let_Them_Trade/) by [Spaceflower](https://spaceflower.de/), a german indie-gamestudio.

# Using lttmm

Simply click on a button in the center of a tile and select the tile you want it to change to. Do so for the whole map.
After your map looks good to you, hit the "DOWNLOAD MAP"-button in the top-right. This will generate a `.json`-file and
download it which will contain your configuration as a Let Them Trade map.

# Deploying lttmm

If you wish to manually deploy lttmm, download the latest `lttmm-x.x.x.tar.gz` or `lttmm-x.x.x.zip` from the
[Releases](https://github.com/Griefed/ltt-mapmaker/releases/latest) page and use these files to deploy it. I expect you
to know how to deploy these files with NGINX or similar software, as providing a complete guide on how to do so would
blow up the README.

## Docker

### Docker-Compose

Create a `docker-compose.yml`-file in your preferred location and add the following to it after editing it to your liking:

```yml
version: '3'
services:
  ltt-mapmaker:
    image: ghcr.io/griefed/ltt-mapmaker:latest
    container_name: ltt-mapmaker
    restart: unless-stopped
    environment:
      - TZ=Europe/Berlin # Your Timezone
      - PUID=1000 # Your user ID
      - PGID=1000 # your group ID
    ports:
      - 80:80
      - 443:443
```

After running `docker-compose up -d`, lttmm will be available at `localhost:80` and `localhost:443`.

### Docker run

Run the following command, after editing it to your liking:

```bash
docker create \
  --name=ltt-mapmaker \
  -e TZ=Europe/Berlin `# Your Timezone` \
  -e PUID=1000 `# Your user ID` \
  -e PGID=1000 `# Your group ID` \
  -p 80:80 \
  -p 443:443 \
  --restart unless-stopped \
  ghcr.io/griefed/ltt-mapmaker:latest
```

After running the command above, lttmm will be available at `localhost:80` and `localhost:443`.

# Making changes

If you wish to make changes, simply clone this repository, install the dependencies with `npm install`,
start the app in development mode (hot-code reloading, error reporting, etc.) with `quasar dev` and make your changes,
lint the files `npm run lint`, build the app for production with `quasar build`.

## Expanding tiles

Should Let Them Trade ever introduce more tiles to the game, a couple of things need to be done in order to expand lttmm
with those new tiles. Edit [Tile.vue](https://github.com/Griefed/ltt-mapmaker/blob/c614876316d5216690c3a2dd5ae2d05974965f16/src/components/Tile.vue):

Here's what the item for the barren-tile looks like. If you wish to add a new item, copy'n'paste this and change

  - change `barren` in `@click="barren"` to the name of the new tile
  - create the icon for the new tile and change `barren` in `<img src="~assets/barren.png"/>` to the name of the new tile
  - change `Barren` in `<q-item-label>Barren</q-item-label>` to the name of the new tile

```vue
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
```

After that is done, you need to add a new method for said new tile. Copy'n'paste this from the `methods: {`-section and change

  - change `barren` in the name of the method `barren () {` to the name of the new tile
  - change `Barren` in `console.log('Clicked on Barren');` to the name of the new tile
  - change `barren` in `this.label = 'barren';` to the name of the new tile
  - change `brown-6` in `this.color = 'brown-6';` to a suitable [Quasar colour](https://quasar.dev/style/color-palette#color-list) of the new tile. This is the button colour.
  - change `white` in `this.textcolor = 'white';` to `black` if `this.color` of the new tile is bright, improves readability
  - change `#634123` in `this.backgroundColor = 'background-color: #634123';` to a suitable colour of the new tile

```js
    barren () {
      console.log('Clicked on Barren');
      this.label = 'barren';
      this.color = 'brown-6';
      this.textcolor = 'white';
      this.backgroundColor = 'background-color: #634123';
    },
```

Congratulations! You've added a new tile to lttmm!

## Expanding/changing random map names

If you wish to expand/change the random name generator, edit `const reticulating` and/or `getMapName()` in the [MainLayout.vue](https://github.com/Griefed/ltt-mapmaker/blob/c614876316d5216690c3a2dd5ae2d05974965f16/src/layouts/MainLayout.vue).
