	var module = angular.module("calculatorApp",[]);
	module.controller("calculatorController",calculateResult);
	function calculateResult() {
		
		
		this.buttonClicked = function(button){
		this.selectedOperation=button;
		this.result =0;
		this.showResult = function(){
		var value1 = parseFloat(this.first);
		var value2 = parseFloat(this.second);	
		
		if (this.selectedOperation === '+') {
		this.result = value1 + value2 ;	
		}	
		
		}

		


		
		}		
	}