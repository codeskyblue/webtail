/* homepage */

app = angular.module('webtail', ['luegg.directives'])

app.controller('NavCtrl', function($scope){
	$scope.currLang = 'en';
})

app.controller('MainCtrl', function($scope, $interval){
	$scope.name = 'Hello world';
	$scope.maxLine = 50;
	$scope.logs = [{
		number: 1,
		body: 'hello'
	}]

	$interval(function(){
		$scope.logs.push({
			number: 2,
			body: 'haha' + new Date()
		})
		if ($scope.logs.length > $scope.maxLine){
			// $scope.logs.shift();
		}
		// var bottom = document.getElementById("bottom");
		// bottom.scrollTop = bottom.scrollHeight;
		// console.log(bottom.scrollHeight)
		// window.scrollTo(0,document.body.scrollHeight);
	}, 500)
})