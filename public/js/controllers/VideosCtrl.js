/* Video Controller Module */

angular.module('VideosCtrl', [])

	.controller('VideosController', function ($scope, $localStorage, $routeParams, $filter, $http) {

		var videos = $filter('filter')($localStorage.videos, {id: $routeParams.id}, true);
		$scope.video = videos[0];

		var data = {
			userid: $localStorage.guid,
			id: videos[0].id,
			title: videos[0].title,
			description: videos[0].description,
			thumbUrl: videos[0].thumbUrl,
			videoUrl: videos[0].videoUrl,
			duration: videos[0].duration,
			publishedDate: videos[0].publishedDate
		};

		$http.post('/savetohistory', data)
			.then(
			function (response) {
				console.log(response.data);
			},
			function (response) {
				console.log(response.data);
			}
		);

		$http.get("/fetchhistory")
			.then(function (response) {
				console.log(response.data);
			}, function errorCallback(response) {
				console.log('Api Error');
			});
	});