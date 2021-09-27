import {reactive} from 'vue';

const state = reactive({
  maxX: 0,
  minX: 0,
  maxY: 0,
  minY: 0,
  mapSizeX: 1,
  mapSizeY: 1,
  centerX: 0,
  centerY: 0,
  radiusY: 1,
  radiusX: 1,
  mapID: 'e1-m.lttmm',
  mapName: '',
  lttMap: null,
})

const methods = {

  reset() {
    state.mapSizeX = 1;
    state.mapSizeY = 1;
    state.centerX = 0;
    state.centerY = 0;
    state.radiusY = 1;
    state.radiusX = 1;
    state.mapID = 'e1-m.lttmm';
    state.mapName = '';
    state.lttMap = null;
  },

  exportMap() {
    return{
      mapID: state.mapID,
      mapName: state.mapName,
      initialViewRadiusX: state.centerX,
      initialViewRadiusY: state.centerY,
      initialVieCenterX: state.radiusX,
      initialViewCenterY: state.radiusY,
      tileSet: state.lttMap.flat()}
  },

  loadMap(mapData) {
    state.mapID = mapData.mapID;
    state.mapName = mapData.mapName;
    state.initialViewRadiusX = mapData.initialViewRadiusX;
    state.initialViewRadiusY = mapData.initialViewRadiusY;
    state.initialVieCenterX = mapData.initialVieCenterX;
    state.initialViewCenterY = mapData.initialViewCenterY;
    let tileSetData = this.getMultDimArrayFromFlattendArray(mapData.tileSet);
    state.mapSizeX = tileSetData.mapSizeX;
    state.mapSizeY = tileSetData.mapSizeY;
    state.lttMap = tileSetData.map;
    state.maxX = tileSetData.maxX;
    state.minX = tileSetData.minX;
    state.maxY = tileSetData.maxY;
    state.minY = tileSetData.minY;
  },

  getMultDimArrayFromFlattendArray(arr){
    let maxX,minX,maxY,minY, mapSizeX, mapSizeY;
    let sortArr = arr.sort((a,b)=>{
      if(a.y == b.y){
        return a.x - b.x;
      } else {
        return b.y-a.y
      }
    })
    let arrSize = sortArr.length;
    minX = sortArr[0].x;
    maxY = sortArr[0].y;
    minY = sortArr[arrSize-1].y;
    maxX = sortArr[arrSize-1].x;
    mapSizeX = Math.abs(minX)+Math.abs(maxX)+1;
    mapSizeY = Math.abs(minY)+Math.abs(maxY)+1;

    let map = [];
    for(let m = 0; m < mapSizeY; m++){
      let xArr = [];
      for(let i = 0; i < mapSizeX; i++){
        xArr.push(sortArr[(m*mapSizeX)+i]);
      }
      map.push(xArr);
    }
    return {mapSizeX, mapSizeY,maxX, minX,maxY, minY, map};
  },


  getMapName() {
    const reticulating = ["Adding","Hidden","Agendas","Adjusting","Bell","Curves","Aesthesizing","Industrial","Areas","Aligning","Covariance","Matrices",
      "Applying","Feng","Shui","Shaders","Applying","Theatre","Soda","Layer","Asserting","Packed","Exemplars","Attempting","to","Lock","Back-Buffer",
      "Binding","Sapling","Root","System","Breeding","Fauna","Building","Data","Trees","Bureacritizing","Bureaucracies","Calculating","Inverse","Probability","Matrices",
      "Calculating","Llama","Expectoration","Trajectory","Calibrating","Blue","Skies","Charging","Ozone","Layer","Coalescing","Cloud","Formations",
      "Cohorting","Exemplars","Collecting","Meteor","Particles","Compounding","Inert","Tessellations","Compressing","Fish","Files",
      "Computing","Optimal","Bin","Packing","Concatenating","Sub-Contractors","Containing","Existential","Buffer","Debarking","Ark","Ramp",
      "Debunching","Unionized","Commercial","Services","Deciding","What","Message","to","Display","Next","Decomposing","Singular","Values",
      "Decrementing","Tectonic","Plates","Deleting","Ferry","Routes","Depixelating","Inner","Mountain","Surface","Back","Faces","Depositing","Slush","Funds",
      "Destabilizing","Economic","Indicators","Determining","Width","of","Blast","Fronts","Deunionizing","Bulldozers","Dicing","Models",
      "Diluting","Livestock","Nutrition","Variables","Downloading","Satellite","Terrain","Data","Exposing","Flash","Variables","to","Streak","System",
      "Extracting","Resources","Factoring","Pay","Scale","Fixing","Election","Outcome","Matrix","Flood-Filling","Ground","Water","Flushing","Pipe","Network",
      "Gathering","Particle","Sources","Generating","Jobs","Gesticulating","Mimes","Graphing","Whale","Migration","Hiding","Willio","Webnet","Mask",
      "Implementing","Impeachment","Routine","Increasing","Accuracy","of","RCI","Simulators","Increasing","Magmafacation","Initializing","My","Sim","Tracking","Mechanism",
      "Initializing","Rhinoceros","Breeding","Timetable","Initializing","Robotic","Click-Path","AI","Inserting","Sublimated","Messages",
      "Integrating","Curves","Integrating","Illumination","Form","Factors","Integrating","Population","Graphs","Iterating","Cellular","Automata",
      "Lecturing","Errant","Subsystems","Mixing","Genetic","Pool","Modeling","Object","Components","Mopping","Occupant","Leaks","Normalizing","Power",
      "Obfuscating","Quigley","Matrix","Overconstraining","Dirty","Industry","Calculations","Partitioning","City","Grid","Singularities",
      "Perturbing","Matrices","Pixalating","Nude","Patch","Polishing","Water","Highlights","Populating","Lot","Templates","Preparing","Sprites","for","Random","Walks",
      "Prioritizing","Landmarks","Projecting","Law","Enforcement","Pastry","Intake","Realigning","Alternate","Time","Frames","Reconfiguring","User","Mental","Processes",
      "Relaxing","Splines","Removing","Road","Network","Speed","Bumps","Removing","Texture","Gradients","Removing","Vehicle","Avoidance","Behavior",
      "Resolving","GUID","Conflict","Retracting","Phong","Shader","Retrieving","from","Back","Store","Reverse","Engineering","Image","Consultant",
      "Routing","Neural","Network","Infanstructure","Scattering","Rhino","Food","Sources","Scrubbing","Terrain","Searching","for","Llamas",
      "Seeding","Architecture","Simulation","Parameters","Sequencing","Particles","Setting","Advisor","Moods","Setting","Inner","Deity","Indicators",
      "Setting","Universal","Physical","Constants","Sonically","Enhancing","Occupant-Free","Timber","Speculating","Stock","Market","Indices",
      "Splatting","Transforms","Stratifying","Ground","Layers","Sub-Sampling","Water","Data","Synthesizing","Gravity","Synthesizing","Wavelets",
      "Time-Compressing","Simulator","Clock","Unable","to","Reveal","Current","Activity","Weathering","Buildings","Zeroing","Crime","Network",
      "Reticulating","Splines"];
    return reticulating[ Math.floor( Math.random() * reticulating.length) - 1] + " "
            + reticulating[Math.floor(Math.random() * reticulating.length) - 1] + " "
            + reticulating[Math.floor(Math.random() * reticulating.length) - 1];
  },

  getMapId() {
    return 'e1-m.lttmm';
  },

  generateMap() {
    let defaultTile = "grass";
    let map = [];

    state.minX = -Math.floor(state.mapSizeX/2);
    if(state.mapSizeX%2){
      state.maxX = Math.floor(state.mapSizeX/2);
    }else{
      state.maxX = Math.floor(state.mapSizeX/2)+1;
    }

    state.minY = -Math.floor(state.mapSizeY/2);
    if(state.mapSizeY%2){
      state.maxY = Math.floor(state.mapSizeY/2);
    }else{
      state.maxY = Math.floor(state.mapSizeY/2)+1;
    }

    for(let m = state.maxY; m >= state.minY; m--){
      let xArr = [];
      for(let i = state.minX; i <= state.maxX; i++){
        xArr.push({ x: i, y: m, z: 0, typeId: defaultTile });
      }
      map.push(xArr);
    }
    state.lttMap = map;
    state.mapName = this.getMapName();
  }

}

export default {
  state,
  methods
}
