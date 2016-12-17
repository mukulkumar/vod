angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/videos/:id?', {
			templateUrl: 'views/videos.html',
			controller: 'VideosController'
		})

		.when('/history', {
			templateUrl: 'views/history.html',
			controller: 'HistoryController'
		})

		.otherwise({redirectTo:'/'});

	$locationProvider.html5Mode(true);

}]);