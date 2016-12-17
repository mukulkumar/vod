angular.module('HistoryCtrl', []).controller('HistoryController', function ($scope, $http, $timeout, $localStorage) {

	var videos = [];

	$http.get("/fetchhistory", {params: {userid: $localStorage.guid}})

		.then(function (response) {

			videos = response.data;

		}, function errorCallback(response) {

			console.log('Api Error');

		});

	$timeout(function () {
		$scope.videos = videos;

		if (videos.length < 1) {
			$scope.noHistory = true;
		}

	}, 1000);

});