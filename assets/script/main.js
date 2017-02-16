var myApp = angular.module("myApp", []);

myApp.controller('calculateConins', function($scope) {
	$scope.value = 0.00;
	//$scope.ammount = 'Enter monetary value for coin conversion';
});

myApp.service('validateService',function(validateHelper) {
	this.checkInput = function(ammount) {
		var input_data = validateHelper.removeWhitespace(ammount);
		var response = {
			'status' : false,
			'message' : ''
		};
		if (!input_data) {
			response.message = 'Input contains no characters.';
		} else if (input_data === '0') {
			response.message = 'Input must be greater than 0.';
		} else if (validateHelper.containsAlpha(input_data)) {
			response.message = 'Input contains unaccepted non-numerical characters.';
		} else if (validateHelper.containsNoNumeric(input_data)) {
			response.message = 'Input contains no numbers.';
		} else {
			response.status = true;
		}
			return response;
		}
	});

myApp.service('validateHelper', function() {
	this.removeWhitespace = function(str) {
		return str.replace(/\s+/g, '');
	}
	this.containsAlpha = function(str) {
	    var regex = /[^£2.p\d]/g;
	    return regex.test(str);
	  }
	this.containsNoNumeric= function(str) {
	    var regex = /\d+/g;
	    return !regex.test(str);
	  }
});

myApp.directive('coins', function(validateService, parse, calculate){
	return {
		//restrict : 'A',
		templateUrl : 'views/coins.html',
		link : function ($scope, element, attr){
			$scope.calculate = function (){
				$scope.value = $scope.ammount;
				$scope.response = validateService.checkInput($scope.value);
				 if ($scope.response.status === true) {
				        // Parse the users input to an ammount of pennies (float)
					 $scope.value = parse.newParser($scope.value);
				        // Calculate the minimum number of coins for ammount
				       $scope.pennies = $scope.value;
				        $scope.results = calculate.minimumCoins($scope.value);
				        // Display results to user
				      } 
			}
		}
	}
});
