(function(){
	var app = angular.module('myApp', []);
	
	var data = {
		city: 0,
		venu: 0,
	};
	
	app.controller('StatsController', function() {
		this.visitedCities = data.city;
		this.visitedVenus = data.venu;
	});

	// Custom element 
	// var app.directive('title', function(){
	// 	return {
	// 		restrict: 'E';
	// 		templateUrl: 'product-title.html';
	// 	}
	// })
})();