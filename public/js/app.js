var app = angular.module('vodApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'VideosCtrl', 'HistoryCtrl', 'slick', 'vodVideo', 'ngStorage']);

app.filter('truncate', function () {
	return function (text, length, end) {
		if (isNaN(length)) {
			length = 15;
		}

		if (end === undefined) {
			end = " ";
		}

		if (text.length <= length || text.length - end.length <= length) {
			return text;
		}
		else {
			return String(text).substring(0, length - end.length) + end;
		}

	};
});