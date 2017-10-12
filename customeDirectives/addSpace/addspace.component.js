	/*directive name is 
	*/
	var app = angular.module("addSpaceApp",[]);
	app.controller("processController",function($scope){

    $scope.transformString = function(input){
      if(!input){
        return input;
      }
      var output ="";
      for(var i =0; i <input.length ; i++){
        if(i > 0 && input[i]==input[i].toUpperCase())
          output = output + " ";
        output = output + input[i];
      }
      $scope.output = output;
    }

  });