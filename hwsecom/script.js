
(function() {
// create the module and name it scotchApp
        var hws = angular.module('hwsApp', ['ngRoute']);
	// configure our routes
	hws.config(function($routeProvider)  {
		$routeProvider
         .when('/', {
				templateUrl : 'pages/login.html',
				controller  : 'logController'
			})
            
            .when('/home', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})        
            
             .when('/login', {
				templateUrl : 'pages/login.html',
				controller  : 'logController'
			})
        
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
          
            
            .when('/show_product', {
				templateUrl : 'pages/show_product.html',
				controller  : 'show_proController'
			})
          
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
	});

    hws.factory('ProductDetailsService',function(){
        return {
                ProductID : "",
                Name : "",
                Price : "",
                ManufacturarNo : "",
                Weight : "",
                Prim_category : "",
                setName : function(pro_id, name, price, manu_num, weight, prim_cat){
                            this.ProductID = pro_id;
                            this.Name = name;
                            this.Price = price;
                            this.ManufacturarNo = manu_num;
                            this.Weight = weight;
                            this.Prim_category = prim_cat;
                        },
                getName:function(){
                        return [this.ProductID, this.Name, this.Price, this.ManufacturarNo, this.Weight, this.Prim_category];
                }
        
        }
        
    });

    
	// create the controller and inject Angular's $scope
	hws.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	hws.controller('aboutContr1oller', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	hws.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});

    hws.controller('logController', function($scope){
    $scope.message = "hello I am here";
    
    });
    
    
    hws.controller('show_proController', function($scope,ProductDetailsService) {
                                        $scope.pro_details = ProductDetailsService.getName();
                                        $scope.now = new Date();
                                        console.log($scope.pro_details[0], $scope.pro_details[1], $scope.pro_details[2], $scope.pro_details[3],                                           $scope.pro_details[4], $scope.pro_details[5]);
	});
    
    
	hws.controller('creatproController', function($scope,ProductDetailsService) {
        console.log("create controller loaded!");
        $scope.Create = function(){
            ProductDetailsService.setName($scope.pro_id, $scope.name, $scope.price, $scope.manufacture_num, $scope.weight, $scope.prim_cat);
        }
	});

    
})();