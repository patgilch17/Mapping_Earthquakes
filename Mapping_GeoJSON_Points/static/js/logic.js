// Add console.log to check to see if our code is working.
//console.log("working");

// Create the map object with a center and zoom level using the setView method.
//let map = L.map('mapid').setView([40.7, -94.5], 4);

// Create the map object with a center and zoom level.
//let map = L.map("mapid", {
//    center: [
//      41.256,-95.935
//    ],
//    zoom: 5
//});

// Coordinates for each point to be used in the line.
//let line = [
//  [33.9416, -118.4085],
//  [37.6214, -122.3790]
//];

// Coordinates for each point to be used in the polyline.
//let line = [
//  [33.9416, -118.4085],
//  [37.6214, -122.3790],
//  [40.7899, -111.9791],
//  [47.4502, -122.3088],
//  [42.2162, -83.3554]
//];

// Create a polyline using the line coordinates and make the line red.
//L.polyline(line, {
//  color: "blue",
//  dashArray: '10 15',
//  weight: 4
//}).addTo(map);

//  Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Adding a marker in the form of a circle
//L.circle([34.0522, -118.2437], {
//  radius: 300,
//  color: "black",
//  fillColor: "#ffffa1",
//  fillOpacity: .5
//}).addTo(map);

// We create the tile layer that will be the background of our map using the instructions from leaflet
//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//    maxZoom: 18,
//    id: 'mapbox/streets-v11',
//    tileSize: 512,
//    zoomOffset: -1,
//    accessToken: API_KEY
//});
// Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);

// An array containing each city's location, state, and population.
//let citydata = cities;

//citydata.forEach(city => {
//  console.log(city);
//  L.circleMarker(city.location,{
//    radius:city.population/100000,
//    color:"orange",
//    weight:10
//  }).bindPopup("<h2>"+city.city+"</h2><br><p>Population: "+city.population.toLocaleString()+"</p>").addTo(map);
//});
//<hr> could be used instead of <br> and <h4> could be used instead of <p> for example.

// We create the tile layer that will be the background of our map using the instructions from mapbox styles api
//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//    maxZoom: 18,
//    accessToken: API_KEY
//});
  //satellite-streets-v11  

//
//Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);

// Create the map object with a center and zoom level.


//////////////////// Used for Mapping just one/2 points

// Create the map object with a center and zoom level using the setView method.
//let map = L.map('mapid').setView([37.5, -122.5], 10);


// Add GeoJSON data.
//let sanFranAirport =
//{"type":"FeatureCollection",
//"features":[{
//    "type":"Feature",
//    "properties":{
//      "id":"3469",
//      "name":"San Francisco International Airport",
//      "city":"San Francisco",
//      "country":"United States",
//      "faa":"SFO",
//      "icao":"KSFO",
//      "alt":"14",
//      "tz-offset":"-8",
//      "dst":"A",
//      "tz":"America/Los_Angeles"},
//    "geometry":{
//     "type":"Point",
//      "coordinates":[-122.375,37.61899948120117]
//    }
//  },
//  {
//    "type":"Feature",
//    "properties":{
//      "id":"3469",
//      "name":"San Francisco International Airport",
//      "city":"San Francisco2",
//      "country":"United States",
//      "faa":"SFO",
//      "icao":"KSFO",
//      "alt":"14",
//      "tz-offset":"-8",
//      "dst":"A",
//      "tz":"America/Los_Angeles"},
//    "geometry":{
//      "type":"Point",
//      "coordinates":[-122.375,37.91899948120117]
//    }
//  }]
//};

//my attempt... didn't know there was a L.geoJSON() method lol... 
//Reads in the coordinates which we need as lat and lon.  Unfortunately it is stored as lon and lat.
//L.marker(sanFranAirport.features[0].geometry.coordinates.reverse()).addTo(map);

// Grabbing our GeoJSON data. with my attempt at a popup
//L.geoJSON(sanFranAirport).bindPopup("<h2>San Francisco</h2>").addTo(map);

// Grabbing our GeoJSON data with the modules popup
//L.geoJSON(sanFranAirport, {
//  // We turn each feature into a marker on the map.
//  pointToLayer: function(feature, latlng) {
//    console.log(feature);
//    return L.marker(latlng).bindPopup("<h2>" + feature.properties.name + "</h2> <hr> <h4>"+feature.properties.city +", "+feature.properties.country+"</h4>");
//  }
//}).addTo(map);
//could have used the onEachFeature callback function instead of pointToLayer callback function
//L.geoJSON(sanFranAirport, {
//  onEachFeature: function(feature, layer) {
//    console.log(layer);
//    layer.bindPopup("<h4>Airport Code: " + feature.properties.faa + "</h4> <hr> <h4>Airport name: "+feature.properties.name +"</h4>");
//   }
//}).addTo(map);


// We create the tile layer that will be the background of our map using the instructions from leaflet
//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//    maxZoom: 18,
//    id: 'mapbox/outdoors-v12',
//    tileSize: 512,
//    zoomOffset: -1,
//    accessToken: API_KEY
//});
// Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);


//////////////// Mapping multiple points usind json structure... remember to set up local host as a server
//let map = L.map('mapid').setView([30,30], 2);




// We create the tile layer that will be the background of our map using the instructions from mapbox styles api
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let baseMaps = {
  Street: streets,
  Dark: dark
};

// Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);

// Accessing the airport GeoJSON URL
//let airportData = "https://raw.githubusercontent.com/<GitHub_name>/Mapping_Earthquakes/main/majorAirports.json";
let airportData = "majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.


  L.geoJSON(data,{
    onEachFeature: function(feature, layer) {
      layer.bindPopup("Airport Code: "+ feature.properties.faa+"<br>The Name is: "+feature.properties.name);
  }
  }).addTo(map);
});



//let ourLayers = {
//  Airports: ourData
//}

let map = L.map("mapid",{
  center: [40.7, -94.5],
  zoom: 4,
  layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

