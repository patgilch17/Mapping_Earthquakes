
// We create the tile layer that will be the background of our map using the instructions from mapbox styles api
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satellite = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let baseMaps = {
  "Streets": streets,
  "Satellite Streets": satellite
};

// Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);

// Accessing the Toronto neighborhoods GeoJSON URL.
//let torontoHoods = "https://raw.githubusercontent.com/<GitHub_name>/Mapping_Earthquakes/main/torontoNeighborhoods.json";
let torontoHoods = "torontoNeighborhoods.json";

// Create a style for the lines.
let myStyle = {
  color: "blue",
  weight: 1,
  fillColor: "yellow"
}

// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
  //L.geoJson(data).addTo(map);

  L.geoJSON(data,{
    onEachFeature: function(feature, layer) {
      layer.bindPopup("Neighborhood Name: "+ feature.properties.AREA_NAME);
    },
    style: myStyle
    //color: "yellow",
    //weight: 2

  }).addTo(map);

  
});



//let ourLayers = {
//  Airports: ourData
//}

let map = L.map("mapid",{
  center: [43.7,-79.3],
  zoom: 11,
  layers: [satellite]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

