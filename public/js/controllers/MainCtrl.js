angular.module('MainCtrl', []).controller('MainController', function ($scope, $http, $timeout, $localStorage) {

	var videos = [];

	$http.get("https://demo2697834.mockable.io/movies")
		.then(function (response) {
			angular.forEach(response.data.entries, function (value) {
				videos.push({
					id: value.id,
					title: value.title,
					description: value.description,
					thumbUrl: value.images[0].url,
					videoUrl: value.contents[0].url,
					duration: value.contents[0].duration,
					publishedDate: value.publishedDate
				});
			});
		}, function errorCallback(response) {
			console.log('Api Error');
		});

	$timeout(function () {
		$scope.videos = videos;
		$localStorage.videos = videos;
	}, 2000);

	$scope.breakpoints = [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 8,
				slidesToScroll: 3,
				infinite: true,
				dots: false
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	];

	var S4 = function () {
		return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	}

	if (!$localStorage.guid) {
		$localStorage.guid = (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
	}
});