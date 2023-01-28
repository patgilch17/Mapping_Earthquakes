// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level using the setView method.
//let map = L.map('mapid').setView([40.7, -94.5], 4);

// Create the map object with a center and zoom level.
let map = L.map("mapid", {
    center: [
      41.256,-95.935
    ],
    zoom: 5
});

// Coordinates for each point to be used in the line.
//let line = [
//  [33.9416, -118.4085],
//  [37.6214, -122.3790]
//];

// Coordinates for each point to be used in the polyline.
let line = [
  [33.9416, -118.4085],
  [37.6214, -122.3790],
  [40.7899, -111.9791],
  [47.4502, -122.3088],
  [42.2162, -83.3554]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "blue",
  dashArray: '10 15',
  weight: 4
}).addTo(map);

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
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
  //satellite-streets-v11  

//
//Then we add our 'graymap' tile layer to the map.
streets.addTo(map);




