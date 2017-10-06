	var module = angular.module("userApp",[]);
	module.controller("userController1",updateUser1);
	module.controller("userController2",updateUser1);
	//when using controller as , we dont need to pass scope variable to the funciton.
	function updateUser1() {	 
	 this.userName = "controller1 user1";
	}
	function updateUser2() {	 
	 this.userName = "controller2 user2";
	}