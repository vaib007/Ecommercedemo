
(function(){
// create the module and name it scotchApp
        var hws = angular.module('hwsApp', ['ngRoute']);
	// configure our routes
	hws.config(function($routeProvider)  {
		$routeProvider


        // route for the home page
		
            
            .when('/home', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})        
            
            .when('/', {
				templateUrl : 'pages/login.html',
				controller  : 'logController'
			})
        
             .when('/login', {
				templateUrl : 'pages/login.html',
				controller  : 'logController'
			})
        
			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})
          
            .when('/forgotpass', {
				templateUrl : 'pages/forgotpass.html',
				controller  : 'forgotController'
			})
          
            .when('/creatpro', {
				templateUrl : 'pages/creatpro.html',
				controller  : 'creatproController'
			})
          
        

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
	});

	// create the controller and inject Angular's $scope
	hws.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	hws.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	hws.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});
})();