	var module = angular.module("contactApp",[]);
	module.controller("contactController",showContacts);
	function showContacts() {		 
	 this.contactLists =[


	 ];
	 this.selectedContact=this.contactLists[0];

	}