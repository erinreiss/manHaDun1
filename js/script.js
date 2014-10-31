var map = L.map ('map').setView([40.698824, -73.989312], 12);

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
	// house1.bindPopup("A Park Slope Closet").openPopup();

var house2 = L.marker ([40.674899,-73.963617], {icon: houseIcon}) .addTo(map);
	// house2.bindPopup("A Prospect Heights Matchbook").openPopup();

var house3 = L.marker ([40.712934, -73.989794], {icon: houseIcon}) .addTo(map);
	// house3.bindPopup("A Chinatown Shoebox").openPopup();


//listeners for sidebar hovers

$('.house').on('mouseover', function(){
	$(this).css('background', '#8ECEFA');
});

$('.house').on('mouseout', function(){
	$(this).css('background', '#BDDCF0');
});

//listeners for icon hovers

house1.on('mouseover', function(){
	$('.house1').toggleClass('hover');
})

	.on('mouseout' function(){
		$('.house1').toggleClass('hover');
	});

house2.on('mouseover', function(){
	$('.house2').toggleClass('hover');
})

	.on('mouseout' function(){
		$('.house2').toggleClass('hover');
	});

house3.on('mouseover', function(){
	$('.house3').toggleClass('hover');
})

	.on('mouseout' function(){
		$('.house3').toggleClass('hover');
	});

//listeners for sidebar clicks

$('.house1').on('click', function(){
	map.panTo(new L.LatLng(40.681939, -73.979651), {animate: true, duration: 1.0})
});

$('.house2').on('click', function(){
	map.panTo(new L.LatLng(40.674899,-73.963617), {animate: true, duration: 1.0})
});

$('.house3').on('click', function(){
	map.panTo(new L.LatLng(40.712934, -73.989794), {animate: true, duration: 1.0})
});
