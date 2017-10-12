(function(){
var module = angular.module("contactApp");
module.controller("contactController",showContacts);
function showContacts(ContactDataSvc) {		 
	var self = this;
	this.editMode=false;	
	 var promise = ContactDataSvc.getContacts();
	 promise.then(function(data){
	 	self.contactLists=data;
	 })
	 this.selectContact = function(index){
	 	this.selectedContact=this.contactLists[index];	
	 }	 

	 this.toggleEditMode=function () {
	 	this.editMode = !this.editMode;	 	
	 }
	 this.saveUser = function(){
	 	this.toggleEditMode();
	 	var updatedUser = this.selectedContact;
	 	ContactDataSvc.saveUserData(updatedUser)
	 	.then(function(){
	 		self.successMessage="Success";
	 	},
	 	function(){
	 		self.errorMessage="Error";	
	 	})
	 }
	}
})();