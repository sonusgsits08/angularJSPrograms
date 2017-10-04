	var module = angular.module("userApp",[]);
	module.controller("userController",updateUser);
	function updateUser($scope) {	 
	 $scope.userName= "";
	}