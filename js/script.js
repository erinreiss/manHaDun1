var map = L.map('map', {zoomControl: false}).setView([40.698824, -73.989312], 12);

L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
	maxZoom: 17,
	minZoom: 12
}).addTo(map);
//L.control.zoom(position: bottomright);

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

house1.on('click', function(){
	map.panTo(new L.LatLng(40.681939, -73.979651), {animate: true, duration: 1.0});
		$('.addressFill').text("59 5th Ave.");
		$('.nabeFill').text("Park Slope");
		$('.timeFill').text("2 months");
		$('.infoFill').text("This was actually a closet. Somehow Lizzie and I shared this room for the two months after I first arrived in the city. Every morning we had to move our clothes from the floor to the bed to get out of the room.");
 		$('#houseTitle').text("Park Slope Shoebox");
 		$('#housePhoto').attr("src","images/house1pic.png");

});

house2.on('click', function(e){
	map.panTo(new L.LatLng(40.674899,-73.963617), {animate: true, duration: 1.0});
	$('.addressFill').text("431 Sterling Pl.");
	$('.nabeFill').text("Prospect Heights");
	$('.timeFill').text("10 months");
	$('.infoFill').text("My first real home in NYC, I moved here with Lizzie after living in the City for only a few months. We shared this strange and ecclectic 3 bedroom apartment with three wonderful friends.");
	$('#houseTitle').text("Strange Cottage in Brooklyn");
    $('#housePhoto').attr("src","images/house2pic.png");
    console.log(e); 
});

	// Strange New Cottage in Brooklyn was too long, how to wrap
	// Speaking of, how to center...

house3.on('click', function(e){
	console.log(e);
	map.panTo(new L.LatLng(40.712934, -73.989794), {animate: true, duration: 1.0});
	$('.addressFill').text("27 Rutgers St.");
	$('.nabeFill').text("Chinatown");
	$('.timeFill').text("1 year");
	$('.infoFill').text("This is where I live now. I live on the 2nd floor of a Chinatown walk-up, above a Chinese food restaurant called 'Forever Taste.'' I love the area, I get to practice Chinese and I live two blocks from the East River.");
	$('#houseTitle').text("Chinatown Home-Stay");
    $('#housePhoto').attr("src","images/house3pic.png");

});

// Double quotes on Forever Taste crashes the site??