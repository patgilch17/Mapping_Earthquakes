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



let earthquakeURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

// Create a style for the lines.
//let myStyle = {
//  color: "#ffffa1",
//  weight: 2
//}

// This function returns the style data for each of the earthquakes we plot on
// the map. We pass the magnitude of the earthquake into a function
// to calculate the radius.
function styleInfo(feature) {
    return {
      opacity: 1,
      fillOpacity: 1,
      fillColor: "#ffae42",
      color: "#000000",
      radius: getRadius(feature.properties.mag),
      stroke: true,
      weight: 0.5
    };
  }

  function getRadius(magnitude){
    if (magnitude === 0){
        return 1;
    }
    return magnitude*4;
  }
// Grabbing our GeoJSON data.
d3.json(earthquakeURL).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
  //L.geoJson(data).addTo(map);

  L.geoJSON(data,{
    pointToLayer: function(feature, latlng) {
        console.log(data);
        return L.circleMarker(latlng).bindPopup(
            "<h3>Location: "+feature.properties.place+"</h3><hr>Magnitude: "+feature.properties.mag+"<br>Lat: "+feature.geometry.coordinates[1]+" Lon: "+feature.geometry.coordinates[0]+" Depth: "+feature.geometry.coordinates[2]
        );
    },
    style:styleInfo
    //color: "yellow",
   // weight: 2

}).addTo(map);

  
});



//let ourLayers = {
//  Airports: ourData
//}

let map = L.map("mapid",{
  center: [39.5,-98.5],
  zoom: 3,
  layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);