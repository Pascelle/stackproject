
$(document).ready(function docIsLoaded (){


/*	$("#intro").fadeIn(2000);
	$("#play_area").hide();
	$("#done").hide();

	$("#introgspic").click(function whenPicIsClicked (e){
		e.preventDefault(); // prevent the click from happening. 
		$("#intro").fadeOut(); // hide the intro
		$("#play_area").fadeIn(); // show play area
		$("#answer_area").hide();
	}); 

	*/

		function  getRequest() {
			var currentQuesIndex = 0;
			var currentQues = questionList[currentQuesIndex];
	  		var censusAPI = "http://api.census.gov/data/2010/sf1?";
	  		var personType = currentQues.characteristics;
	  		var state = currentQues.state;
	  		var censusKey = "7a069fab9fea4ada6d12d11ce6d6670121df896d"; 

	  		$.getJSON ( "http://api.census.gov/data/2010/sf1?", {
		   		key: censusKey,
		    	get: currentQues.characteristics,
		    	for: currentQues.state,
	  		}).done(function(data) {
		    	console.log(data);
		    	var results = Number(data[1][0]).toLocaleString('en');
		    	$('.return_obj p').append(results);
	  		});
	    }

	    getRequest();
});












		

