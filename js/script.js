//Set Up The Map
var map = L.map('map', {zoomControl: false})
	.setView([40.698824, -73.989312], 13);

//Set Up Basemap Tiles From Stamen
L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
	maxZoom: 17,
	minZoom: 13
}).addTo(map);
L.control.zoom({position: 'bottomleft'}).addTo(map);

//Create My Custom Icon Variable
var houseIcon = L.icon({
	iconUrl:      'images/HomeIcon.png',
	iconSize:     [30, 30],
	iconAnchor:   [15, 15],
	popupAnchor:  [0, -15] 
})

//Load External geoJSON (WTF is pointToLayer???)
$.getJSON('./js/geoJSON.json',function(data){
	//why is this a var?
	var geojsonLayer = L.geoJson(data.features, {
		onEachFeature: makeMarkers,
		pointToLayer: function (feature, latlng) {
			//can you define the custom icon var here?
			return L.marker(latlng, {icon:houseIcon});
		}
	}).addTo(map);
});


function makeMarkers(feature, layer) {
	var thisFeature = feature.properties;
		console.log(layer);
		console.log(feature);
		console.log(feature.properties.hTitle);
	layer.on("click", function(e){
		map.panTo(new L.LatLng(feature.coordinates.0,feature.coordinates.1), {animate: true, duration: 1.0});
		$('#houseTitle').text(feature.properties.hTitle)
		$('.addressFill').text(feature.properties.hAddress)
		$('.nabeFill').text(feature.properties.hNabe)
		$('.timeFill').text(feature.properties.hTime)
		$('.infoFill').text(feature.properties.hInfo)
		$('#housePhoto').attr("src",feature.properties.hPhoto)
	});

 };





//Defines what happens when marker is clicked

//function onClick(e) { //e is the event
//	console.log("boo")
//	console.log(this)
//	console.log("boo")
//};


//That hail mary that Chris found to first get geoJSON to use my custom markers

//function buttonSetup(feature, layer) {
//	layer.icon = houseIcon;
//	console.log(layer);
//  }


//function testFunction(feature, latlng) {
//	console.log("testfunction");
//	 return L.marker(latlng, {icon:houseIcon});
//}

//var geojsonLayer = new L.GeoJSON.AJAX("./js/geoJSON.json", 
//	{onEachFeature:buttonSetup,pointToLayer:testFunction});

//geojsonLayer.addTo(map);






