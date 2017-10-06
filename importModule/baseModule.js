	var module = angular.module("repeatApp",[]);
	module.controller("repeatController",repeat);
	function repeat() {
		this.myList =[
		{'name':"siyaram",'age':30},
		{'name':"sunil",'age':29},
		];
	}