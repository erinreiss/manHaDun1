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

//Load CSV Content

var content;

d3.csv("content.csv", function(data){
	// how to set a window variable so you can access data in console
	window.data = data;
	content = data;
});

//Click Listener
$(hLights).click(
	function(){
		$('.nameFill').text(this.id)
	}
);

//Populate Top Bar with clicked street's info

var row = _.findWhere(content, {id: easBlaWayH});
	//also tried:
		//var row = _.findWhere(data, {id: easBlaWayH});
		//var row = _.findWhere(content.csv, {id: easBlaWayH});
console.log (row);

// $(eb).click(
// 	function(){
//  		$('#streetTitleCh').text(feature.properties.hTitle)
// 		$('#streetTitleEn').text(feature.properties.hAddress)
// 		$('.nameFill').text(feature.properties.hNabe)
// 		$('.jobFill').text(feature.properties.hTime)
// 		$('.timeFill').text(feature.properties.hInfo)
// 		$('.bioFill').text(feature.properties.hInfo)
// 		$('#speakerPhoto').attr("src",feature.properties.hPhoto)
//  	}
// );

