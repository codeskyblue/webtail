/* homepage */

app = angular.module('webtail', ['luegg.directives'])

app.controller('NavCtrl', function($scope){
	$scope.currLang = 'en';
})

var _isScrolledBottom = function () {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    var totalHeight = document.body.offsetHeight;
    var clientHeight = document.documentElement.clientHeight;
    return totalHeight <= currentScroll + clientHeight;
};

app.controller('MainCtrl', function($scope, $interval){
	$scope.name = 'Hello world';
	$scope.maxLine = 50;
	$scope.logs = [{
		number: 1,
		body: 'hello'
	}]

	setInterval(function(){
		var wasScrolledBottom = _isScrolledBottom();
		
		$scope.logs.push({
			number: 2,
			selected: false,
			body: 'haha' + new Date()
		})
		if ($scope.logs.length > $scope.maxLine){
			// $scope.logs.shift();
		}

		$scope.$digest(); // refresh page

		if (wasScrolledBottom) {
            window.scrollTo(0, document.body.scrollHeight);
        }
	}, 1000)
})