// On Load, give a class of "hLights" to all rects in "highlights"

$("#highlights rect").attr("class", "hLights");

// Hover Listener

var hLights = $(".hLights");
var matchData;

// Learn More Button Highlight

$('#learnMore').mouseenter(
	function(){
		// console.log("enter");
		// console.log(this.id)
		$(this).fadeTo("opacity", "1");
	}
);

$('#learnMore').mouseleave(
	function(){
		// console.log("exit");
		$(this).fadeTo("opacity", ".45");
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

// Learn More Click Listener
$('#learnMore').click(
	function(){
		$('.intro').addClass('hide');
	}
);

// Streets Click Listener
$(hLights).click(
	function(){
		$('.hide1').removeClass('hide1');
		// $('#topBar').animate({height:'140px'}, 500);
		var thisID = (this.id);
		// console.log(thisID);
		for(var i=0;i<matchData.length;i++) {
			if(matchData[i].id == thisID) {
				// console.log(matchData[i].audioFill);
				$('.nameFill').text(matchData[i].nameFill);
				$('.jobFill').text(matchData[i].jobFill);
				$('.timeFill').text(matchData[i].timeFill);
				$('.bioFill').text(matchData[i].bioFill);
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

