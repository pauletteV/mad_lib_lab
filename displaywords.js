var app = angular.module('myModule');

app.controller('displayWords', function($scope, wordsFactory){

	$scope.phrase = wordsFactory.retrieveInfo();

	console.log($scope.phrase);
})