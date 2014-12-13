// On Load, give a class of "hLights" to all rects in "highlights"

$("#highlights rect").attr("class", "hLights");

// Hover Listener

var hLights = $(".hLights");
var matchData;

// Learn More Button Highlight NOT WORKING

$('#learnMore').mouseenter(
	function(){
		$(this).animate({backgroundColor: "rgba(67, 125, 225, 0.95)"
		},500);
	}
);

$('#learnMore').mouseleave(
	function(){
		$(this).animate({backgroundColor: "rgba(67, 125, 225, 0.45)"
		},500);
	}
);

// Street Highlights fade in & out on hover

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
    	matchData = content;
    }
);

// Next Click Listeners
$('#next1').click(
	function(){
		// $('.intro').fadeTo('opacity', '0');
		$('.intro1').css('visibility','hidden');
		$('#skipIntro').css('visibility','visible');
		$('#intro2').css('visibility','visible');
		$('.intro2').css('visibility','visible');
	}
);

$('#next2').click(
	function(){
		$('#intro2').css('visibility','hidden');
		$('.intro2').css('visibility','hidden');
		$('#intro3').css('visibility','visible');
		$('#forsythH').fadeTo("opacity", "0");
	}
);

$('#next3').click(
	function(){
		console.log(this);
		$('#intro3').css('visibility','hidden');
		$('#intro4').css('visibility','visible');
		$('.intro4').css('visibility','visible');
		$('#skipIntro').css('visibility','hidden');
	}
);

$('#next4').click(
	function(){
		console.log(this);
		$('#intro4').css('visibility','hidden');
		$('.intro4').css('visibility','hidden');
		//$('.introPop').css('visibility','hidden');
		$(hLights).css('visibility','visible');
		$('#clickStreet').css('visibility','visible');
	}
);

//Names Element Click Listener
// $('#english').click(
// 	function(){
// 		$(this).css('background-color', 'rgba(67, 125, 225, 0.9)');
// 	}
// );
// $('#mandarin').click(
// 	function(){

// 	}
// );
// $('#fujianese').click(
// 	function(){

// 	}
// );
// $('#cantonese').click(
// 	function(){

// 	}
// );

// Skip Intro Click Listener

$('#skipIntro').click(
	function(){
		$('#skipIntro').css('visibility','hidden');
		$('.introPop').css('visibility','hidden');
		$(hLights).css('visibility','visible');
		$('#clickStreet').css('visibility','visible');
		//$('html').css('overflow-x','visible');
	}
);

// Streets Click Listener
$(hLights).click(
	function(){
		$('#clickStreet').css('visibility','hidden');
		$('#streetsBar').css('visibility','visible');
		// $('#streetsBar').animate({height:'140px'}, 500);
		var thisID = (this.id);
		// console.log(thisID);
		for(var i=0;i<matchData.length;i++) {
			if(matchData[i].id == thisID) {
				// console.log(matchData[i].audioFill);
				$('.nameFill').text(matchData[i].nameFill);
				$('.jobFill').text(matchData[i].jobFill);
				$('.timeFill').text(matchData[i].timeFill);
				$('.fromFill').text(matchData[i].fromFill);
				$('.bioFill').html("&ldquo;" + matchData[i].bioFill + "&rdquo;");
				$('#streetTitleCh').html("&ldquo;" + matchData[i].streetTitleCh + "&rdquo;");
				$('#streetTitleEn').text(matchData[i].streetTitleEn);
				$('#speakerPhoto').attr("src",matchData[i].speakerPhoto)
				changeTrack(matchData[i].audioFill);
				break;
			}
		}
	}
);

//function to reload audio player on each click

function changeTrack(sourceUrl) {
    var audio = $("#player");      
    $("#audioFill").attr("src", sourceUrl);
    audio[0].pause();
    audio[0].load();//suspends and restores all audio element
    audio[0].play();
}

