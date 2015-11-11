/* homepage */

app = angular.module('webtail', [])

app.controller('NavCtrl', function($scope){
	$scope.currLang = 'en';
})

app.controller('MainCtrl', function($scope, $interval){
	$scope.name = 'Hello world';
	$scope.maxLine = 10;
	$scope.logs = [{
		number: 1,
		body: 'hello'
	}]

	$interval(function(){
		$scope.logs.push({
			number: 2,
			body: 'haha' + new Date()
		})
		if ($scope.logs.length > 10){
			$scope.logs.shift();
		}
	}, 500)
})