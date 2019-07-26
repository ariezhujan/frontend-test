
//Start Directive Session
app.directive('tampil2', function(){
	return function(scope, element){
		restrict : 'E';
		element.html('<b>'+scope.kata3+'</b>');
	}
})
.directive('daftarMenu', function(){
	return {
		link : function(scope,element,attr){
			scope.kata = attr.daftarMenu.split(' ');
		}, template : '<li ng-repeat = "kt in kata" >\{{kt}}\</li>'
	}
})
.directive('tampil3', function(){
	return {
		restrict : 'E',
		template : "<b> {{tampil3}} </b>" , controller : function($scope){
			$scope.tampil3 = 'Ini Dari controller di Dalam Directive';
		}
	}
})
.directive('tampil' ,function(){
		return {
			template : '<b>Belajar Angular directive</b> <em> dan Mendukung Tag HTML</em>'
		}
	})
.directive('tampil1' ,function(){
	return function(scope, element, attr){
		element.text(attr.tampil1);
	}
})
.directive('tampil4', function(){
	return {
		restrict : 'E',
		templateUrl : "halaman.html"
	}
});