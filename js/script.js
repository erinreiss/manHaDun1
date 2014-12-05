//Add SVG Map

 // $.get('../images/handMHDmap_OverLayBoxes.svg', 
 // 		function(data) {
 //    	$(document.body).append(data.documentElement);
 //  	});


var eb = $("#easBlaWay");

// $(eb).hover(
// 	function(){
// 		$(eb).fadeOut();
// 	},
// 	function(){
// 		$(eb).fadeIn();
// 	}
// );

// var this = $(this);

$(eb).mouseenter(
	function(){
		// console.log("enter");
		$(eb).fadeTo("opacity", "0");
	}
);

$(eb).mouseleave(
	function(){
		// console.log("exit");
		$(eb).fadeTo("opacity", "1");
	}
);

//Load CSV

var content;

d3.csv("content.csv", function(data){
	// how to set a window variable so you can access data in console
	// window.data = data;
	content = data;
});


//Populate Top Bar with clicked street's info

$("#easBlaWay").click(function(){
 		$('#streetTitleCh').text(feature.properties.hTitle)
		$('#streetTitleEn').text(feature.properties.hAddress)
		$('.nameFill').text(feature.properties.hNabe)
		$('.jobFill').text(feature.properties.hTime)
		$('.timeFill').text(feature.properties.hInfo)
		$('.bioFill').text(feature.properties.hInfo)
		$('#speakerPhoto').attr("src",feature.properties.hPhoto)
 });

