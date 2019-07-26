//Default Dengan Tanda bang(!)
/*app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		template : "<a href='#!/kedua'>Kedua</a>"
	})
	.when('/kedua', {
		template : "<a href='#!/'>Pertama</a>"
	});
});*/

//Custom Menghilangkan Tanda bang(!)
/*app.config(function($locationProvider){
	$locationProvider.hashPrefix('');
})
.config(function($routeProvider){
	$routeProvider
	.when('/', {
		template : "<a href='http://localhost:8080/learnangular/#/halaman2'>Halaman2</a>"
	})
	.when('/halaman2', {
		template : "<a href='http://localhost:8080/learnangular/#/'>Halaman1</a>"
	});
});*/

/*//Custom Menghilangkan Tanda hashbang(#!)
app.config(function($locationProvider){
	$locationProvider.html5Mode(true);
})
.config(function($routeProvider){
	$routeProvider
	.when('/', {
		template : "<a href='http://localhost:8080/learnangular/halaman2'>Halaman2</a>"
	})
	.when('/halaman2', {
		template : "<a href='http://localhost:8080/learnangular/'>Halaman1</a>"
	})
});*/

//Modifikasi Dengan Halaman
app.config(['$locationProvider', '$routeProvider', function config($locationProvider, $routeProvider){
	$locationProvider.html5Mode(true);
	$routeProvider
	.when('/', {
		templateUrl : "halamancoba.html"
	})
	.when('/halaman2', {
		templateUrl : "halamancoba2.html"
	})
	.when('/halaman3', {
		templateUrl : "halamancoba3.html"
	})
	.when('/halaman4', {
		templateUrl : "halamancoba4.html"
	});
}]);
