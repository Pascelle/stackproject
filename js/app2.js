//user submits query
$(document).ready( function() {

// takes a string of semi-colon separated tags to be searched
// for on StackOverflow

var getFrequentAnswerers = function(answerers) {
	
	// the parameters we need to pass in our request to StackOverflow's API
	var request = { 
		tagged: answerers,
		site: 'stackoverflow',
		order: 'desc',
		sort: 'creation'
	};
	
	$.ajax({
		url: "http://api.stackexchange.com/2.2/tags/"+answerers+"/top-answerers/all_time",
		data: request,
		dataType: "jsonp",//use jsonp to avoid cross origin issues
		type: "GET",
	})

	.done(function(result){ //this waits for the ajax to return with a succesful promise object
		console.log(result);
		var searchResults = showSearchResults(request.tagged, result.items.length);
		$('.search-results').html(searchResults);
		//$.each is a higher order function. It takes an array and a function as an argument.
		//The function is executed once for each item in the array.
		$.each(result.items, function(i, item) {
			var question = showQuestion(item);
			$('.results').append(question);
		});
	})
	.fail(function(jqXHR, error){ //this waits for the ajax to return with an error promise object
		var errorElem = showError(error);
		$('.search-results').append(errorElem);
	});
};


$('.frequent-answerer-getter').submit(function(e){
		e.preventDefault();
		// zero out results if previous search has run
		$('.results').html('');
		// get the value of the tags the user submitted
		var answerers = $(this).find("input[name='answerers']").val(); //this refers to the current instance of results that is being worked with
		getFrequentAnswerers(answerers);
		return false;
	});


});



//query is made using getJSON

// appended to DOM