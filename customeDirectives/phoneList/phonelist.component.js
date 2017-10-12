var app = angular.module("phoneListApp");
app.component("phoneList",{
template:
'<ul>'+
'<li ng-repeat="phone in $ctrl.phones">'+ 
'<span> {{phone.name}} {{phone.model}}</span>'+
'</li>'+
'</ul>',
controller: function PhoneListController(){
	this.phones = [{name:'nexus',model:'1.0'},{name:'moto',model:'g4'}];
}
});