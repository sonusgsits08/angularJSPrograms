	var module = angular.module("clockApp",[]);
	module.controller("clockController",showTime);
	function showTime($scope) {
	 //var currentDate  = new Date();
	 //$scope.currentTime = currentDate.toTimeString();
	 $scope.updateTime = function () {
	 	var currentDate  = new Date();
	 	$scope.currentTime = currentDate.toTimeString();
	 }
	}