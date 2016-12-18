/**
 * Video Module
 */

angular.module('vodVideo', [])
	.directive('vodVideo', function () {
		return {
			restrict: 'E'
			, scope: {
				video: '='
			}
			, templateUrl: '/views/helpers/video.html'
			, controller: ['$scope', '$element', '$http', function ($scope, $element) {

			}]
		};
	})

	.directive('videoControls', function () {

		return {

			restrict: 'E'
			, templateUrl: '/views/helpers/video-controls.html'
			, controller: ['$scope', '$element', '$http', '$rootScope', function ($scope, $element, $timeout) {

				$scope.videoElement = $element[0].previousElementSibling.children[0];

				$scope.playButton = "Pause";
				$scope.muteButton = "Mute";

				// Sliders
				$scope.fullScreenButton = $element.find('.full-screen');
				$scope.seekBar = $element.find('.seek-bar');
				$scope.volumeBar = $element.find('.volume-bar');


				$scope.playPause = function () {

					if ($scope.videoElement.paused == true) {
						$scope.videoElement.play();
						$scope.playButton = "Pause";
					}
					else {
						$scope.videoElement.pause();
						$scope.playButton = "Play";
					}
				}

				$scope.muteUnmute = function () {

					if ($scope.videoElement.muted == false) {
						$scope.videoElement.muted = true;
						$scope.muteButton = "Unmute";
					}
					else {
						$scope.videoElement.muted = false;
						$scope.muteButton = "Mute";
					}
				}

				$scope.fullscreen = function () {

					if ($scope.videoElement.requestFullscreen) {

						$scope.videoElement.requestFullscreen();

					}
					else {
						if ($scope.videoElement.mozRequestFullScreen) {

							$scope.videoElement.mozRequestFullScreen(); // Firefox

						}
						else {
							if ($scope.videoElement.webkitRequestFullscreen) {

								$scope.videoElement.webkitRequestFullscreen(); // Chrome and Safari
							}
						}
					}
				}
			}],

			link: function (scope, elem, attrs) {

				var video = elem[0].previousElementSibling.children[0];
				var seekbar = elem.find('.seek-bar');
				var playPause = elem.find('.play');


				seekbar.bind("change", function () {
					video.currentTime = video.duration * (this.value / 100);
				});

				elem.find('.volume-bar').bind("change", function () {
					video.volume = this.value;
				});

				video.addEventListener("timeupdate", function () {

					seekbar.val((100 / video.duration) * video.currentTime);
				});

				video.addEventListener("ended", function () {

					window.location.href = '/';
				});

				seekbar.bind("mousedown", function () {
					video.pause();
					playPause.html('Play');
				});

				seekbar.bind("mouseup", function () {
					video.play();
					playPause.html('Pause');
				});
			}
		}
	});
