var map = L.map('map', {zoomControl: false}).setView([40.698824, -73.989312], 12);

L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
	maxZoom: 17,
	minZoom: 12
}).addTo(map);

L.control.zoom({position: 'bottomleft'}).addTo(map);

//define House Icon

	var houseIcon = L.icon({
	    iconUrl:      'images/HomeIcon.png',
	    iconSize:     [30, 30],
	    iconAnchor:   [15, 15],
	    popupAnchor:  [0, -15] 
})
	
//listeners for icons

//house1.on('click', function(){
//	map.panTo(new L.LatLng(40.681939, -73.979651), {animate: true, duration: 1.0});
//		$('.addressFill').text("59 5th Ave.");
//		$('.nabeFill').text("Park Slope");
//		$('.timeFill').text("2 months");
//		$('.infoFill').text("This was actually a closet. Somehow Lizzie and I shared this room for the two months after I first arrived in the city. Every morning we had to move our clothes from the floor to the bed to get out of the room.");
 //		$('#houseTitle').text("Park Slope Shoebox");
 	//	$('#housePhoto').attr("src","images/house1pic.png");

//});

//house2.on('click', function(e){
//	map.panTo(new L.LatLng(40.674899,-73.963617), {animate: true, duration: 1.0});
//	$('.addressFill').text("431 Sterling Pl.");
//	$('.nabeFill').text("Prospect Heights");
//	$('.timeFill').text("10 months");
//	$('.infoFill').text("My first real home in NYC, I moved here with Lizzie after living in the City for only a few months. We shared this strange and ecclectic 3 bedroom apartment with three wonderful friends.");
//	$('#houseTitle').text("A Strange New Cottage in Brooklyn");
//    $('#housePhoto').attr("src","images/house2pic.png");
//    console.log(e); 
//});

	// Strange New Cottage in Brooklyn was too long, how to wrap

// house3.on('click', function(e){
//	console.log(e);
//	map.panTo(new L.LatLng(40.712934, -73.989794), {animate: true, duration: 1.0});
//	$('.addressFill').text("27 Rutgers St.");
//	$('.nabeFill').text("Chinatown");
//	$('.timeFill').text("1 year");
//	$('.infoFill').text("This is where I live now. I live on the 2nd floor of a Chinatown walk-up, above a Chinese food restaurant called \"Forever Taste.\" I love the area, I get to practice Chinese and I live two blocks from the East River.");
//	$('#houseTitle').text("Chinatown Home-Stay");
//    $('#housePhoto').attr("src","images/house3pic.png");

//});

//Defines what happens when marker is clicked

//function onClick(e) { //e is the event
//	console.log("boo")
//	console.log(this)
//	console.log("boo")
//};

function buttonSetup(feature, layer) {
	var thisFeature = feature.properties;

	console.log(layer);
	console.log(feature.properties.hTitle);
	layer.bindPopup(
		feature.properties.hTitle
		);
//	"<div class ='"
//	feature.properties.hTitle"'
//    $('#houseTitle').text(feature.properties.hTitle)
//	feature.properties.hTitle.getElementByID = ;
	
	layer.on("click", function(e){
		$('#houseTitle').text(feature.properties.hTitle)
	});

 };

//This function adds custom markers - WTF is pointToLayer???

function putMarker(feature, latlng) {
    return L.marker(latlng, {icon:houseIcon});
};

$.getJSON('./js/geoJSON.json',function(data){
	console.log(data);

L.geoJson(data.features, {
	onEachFeature: buttonSetup, pointToLayer: putMarker
	}).addTo(map);
});


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






