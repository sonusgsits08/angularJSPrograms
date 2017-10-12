	var module = angular.module("contactApp",[]);
	module.controller("headerController",headerCont);
	module.controller("footerController",footerCont);
		function headerCont(AppData){
		this.appname = AppData.name;
		this.website=AppData.website;
		this.company=AppData.company;
	}
	function footerCont(AppData){
		this.appname = AppData.name;
		this.website=AppData.website;
		this.company=AppData.company;
	}