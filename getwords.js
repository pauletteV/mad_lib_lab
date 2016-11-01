var app = angular.module('myModule');

app.controller('getWords', function($scope, wordsFactory){


	$scope.sendAnswers = function() {

		//console.log($scope.input);

		//console.log('send answers function is working' + $scope.input);

		wordsFactory.setInfo($scope.input);
			
	}


});

