var map = L.map('map').setView([40.698824, -73.989312], 12);

L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
	maxZoom: 17,
	minZoom: 12
}).addTo(map);

//define House Icon

var houseIcon = L.icon({
    iconUrl:      'images/HomeIcon.png',
    iconSize:     [30, 30], // size of the icon
    iconAnchor:   [15, 15], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -15] // point from which the popup should open relative to the iconAnchor
})

//create markes for homes

var house1 = L.marker ([40.681939, -73.979651], {icon: houseIcon}) .addTo(map);

var house2 = L.marker ([40.674899,-73.963617], {icon: houseIcon}) .addTo(map);
	
var house3 = L.marker ([40.712934, -73.989794], {icon: houseIcon}) .addTo(map);
	
//listeners for icons

house1.on('click', function(e){
	console.log(e);
	map.panTo(new L.LatLng(40.681939, -73.979651), {animate: true, duration: 1.0});
	$('#houseStats').text("<i>Address:</i> 27 Rutgers St.  <br><i>Neighborhood:</i> Chinatown <br><i>Time Spent:</i>  1 year <br><i>Info:</i>  This is where I live now. I live on the 2nd floor of a Chinatown walk-up, above a Chinese food restaurant called 'Forever Taste.' I love the area, I get to practice Chinese and I live two blocks from the East River.");
	$('#houseTitle').text("Chinatown Home-Stay");
});

house2.on('click', function(){
	map.panTo(new L.LatLng(40.674899,-73.963617), {animate: true, duration: 1.0});
	$('#houseStats').text("<i>Address:</i> 431 Sterling Pl.  <br><i>Neighborhood:</i> Prospect Heights <br><i>Time Spent:</i>  6 months <br><i>Info:</i>  My first real home in NYC, I moved here with Lizzie after living in the City for only a few months. We shared this strange and ecclectic 3 bedroom apartment with three wonderful friends.");
	$('#houseTitle').text("A Strange New Cottage in Brooklyn");
});

house3.on('click', function(){
		map.panTo(new L.LatLng(40.712934, -73.989794), {animate: true, duration: 1.0});
		$('#houseStats').text("<i>Address:</i> 59 5th Ave.  <br><i>Neighborhood:</i> Park Slope <br><i>Time Spent:</i>  2 months <br><i>Info:</i>  This was actually a closet. Somehow Lizzie and I shared this room for the two months after I first arrived in the city.");
	$('#houseTitle').text("Park Slope Shoeboc");
});