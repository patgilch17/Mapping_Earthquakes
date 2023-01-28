# Mapping_Earthquakes
Necessary file is the index.html in the Earthquake_challenge folder.
Tectonic Plate data is from https://github.com/fraxen/tectonicplates.
Data for the earthquakes comes from https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php.

## Overview
The purpose of this project is to dynamically plot earthquake data from the last week and have what is considered "last week" be based upon when someone runs the code.  To do this we make a call to the USGS website which contains the data in a readily available JSON file.  We pull data both for all recorded earthquakes and separately major earthquakes (magnitude 4.5+) and add each to our map separately.  Because they stack on top of one another, I have created a separated legend and the layers can be toggled on and off separately.  Finally, we wanted to add some context for where these earthquakes were taking place and added the ability to see the edges of the Earth's tectonic plates.