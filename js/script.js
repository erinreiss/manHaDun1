// Hover Listener

var hLights = $(".hLights");
// console.log(hLights);

// Fade in & out on hover

$(hLights).mouseenter(
	function(){
		// console.log("enter");
		// console.log(this.id)
		$(this).fadeTo("opacity", ".39");
	}
);

$(hLights).mouseleave(
	function(){
		// console.log("exit");
		$(this).fadeTo("opacity", "0");
	}
);

//Load CSV Content using Json

$.getJSON("convertcsv.json", 
	function(content){
    	console.log(content);
    }
);

//Populate Top Bar with clicked street's info

//Click Listener
$(hLights).click(
	function(){
		var thisID = (this.id);
		$('.nameFill').text(this.id);
	}
);

//Attempt to Use Underscore.js

	// var row = _.findWhere(content, {id: "easBlaWayH"});
		//also tried:
			//var row = _.findWhere(data, {id: easBlaWayH});
			//var row = _.findWhere(content, {id: easBlaWayH});
			//var row = _.findWhere(content.csv, {id: easBlaWayH});
	// console.log (row);

//Load CSV Content using CSV

		// var content;

		// d3.csv("content.csv", function(data){
		// 	// how to set a window variable so you can access data in console
		// 	window.data = data;
		// 	content = data;
		// });

