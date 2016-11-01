var app = angular.module('myModule');

app.factory('wordsFactory', function() {

	//console.log('factory! Woo');

  	var wordObj = {}; //create empty object

  	var setInfo = function(inputObj) {

    	console.log('setInfo function is working ' + inputObj);

    	wordObj = inputObj;

    	//console.log('word one is: ' + wordObj.word1);

  	}

  	var retrieveInfo = function () {

  		console.log("Heloooooo");
  		console.log('retrieveInfo function is called');

  		return wordObj;

  	}

  	return { //return the ENTIRE object OUT of the factory

    	setInfo: setInfo,
    	retrieveInfo: retrieveInfo

  	};


});

