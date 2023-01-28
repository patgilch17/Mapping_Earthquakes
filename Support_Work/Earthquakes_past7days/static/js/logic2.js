// Accessing the Toronto airline routes GeoJSON URL.
//let torontoData = "https://raw.githubusercontent.com/<GitHub_name>/Mapping_Earthquakes/main/torontoRoutes.json";
let lineData = "torontoRoutes.json";
d3.json(lineData).then(function(data) {
    createFeatures(data.features);
});


function createFeatures(airportData) {

    function onEachFeaturess(feature, layer) {
        layer.bindPopup("airline: "+ feature.properties.airline+"<br>airline code: "+feature.properties.airline_id);
    }
    var ourFlights = L.geoJSON(airportData, {
        onEachFeature: onEachFeaturess
    });
    createMap(ourFlights);
};

function createMap(flightData){
    // We create the tile layer that will be the background of our map using the instructions from mapbox styles api
    let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
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
    "Light": light,
    "Dark": dark
    };

    let ourOverlay = {
        Flights: flightData
    }
    
    let map = L.map("mapid",{
    center: [44.0,-80.0],
    zoom: 2,
    layers: [light, flightData]
    });

    // Pass our map layers into our layers control and add the layers control to the map.
    L.control.layers(baseMaps, ourOverlay,{collapsed: false}).addTo(map);
};
