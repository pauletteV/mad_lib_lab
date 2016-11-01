var app = angular.module('myModule', ['ngRoute']);

app.config(function($routeProvider){

	$routeProvider

		.when('/', {
			controller: 'getWords',
			templateUrl: 'words.html'
			}
		)

		.when('/display', {
			controller: 'displayWords',
			templateUrl: 'story.html'
			}
		)
		
});

