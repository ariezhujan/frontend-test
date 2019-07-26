
//Contrroler Session
angular.module('belajar', [])
	app.controller('directive', function($scope){
		$scope.kata2 = 'Pembelajaran AngularJS';
		$scope.angka1 = 20;
		$scope.angka2 = 50;
		$scope.kata3 = 'Ini type String, penggabungan dengan type Angka. Dan ini di dalam controler, dengan Angka : '+$scope.angka1+' dan '+$scope.angka2;
	})
	.controller('kontroller', function ($scope){
		$scope.kata1 = 'Selamat Datang';
		$scope.kata2 = 'Pembelajaran AngularJS';
		$scope.angka1 = 20;
		$scope.angka2 = 50;
		$scope.kata3 = 'Ini type String, penggabungan dengan type Angka. Dan ini di dalam controler, dengan Angka : '+$scope.angka1+' dan '+$scope.angka2;	
	})
	.controller('kendaraan', function ($scope){
		$scope.jenis =  ['Mobil', 'Motor', 'Pesawat Terbang', 'Kapal', 'Sepeda'];
		$scope.mobil =  [
							{type : 'Brio', merk : 'Honda'},
							{type : 'Ertiga', merk : 'Suzuki'},
							{type : 'Sigra', merk : 'Daihatsu'},
							{type : 'Calya', merk : 'Toyota'}
						];
	})
	.controller('myApp', function ($scope){
		$scope.hasil = function(){
			var i = $scope.operasi;
			var j = 0;
			var nilai = '';
			while (j < i){
				nilai +=' '+i;
				i--;
			}
			return nilai;
		}
		$scope.hasil1 = function(){
			if ($scope.isi == 'soekarno'){
				return 'Jawaban anda adalah : '+$scope.isi+' , Selamat anda benar..';
			}else if($scope.isi == null){
				return 'Anda Belum Memilih..';
			}else{
				return 'Jawaban Anda salah..';
			}
		}
		$scope.hasil2 = function(){
			if ($scope.isi1 == 'jakarta'){
				return 'Jawaban Anda adalah : '+$scope.isi1+' , Selamat anda benar..';
			}else if($scope.isi1 == null){
				return 'Anda Belum Memilih..';
			}else{
				return 'Jawaban Anda salah..';
			}
		}
	})
	.controller('hitung', function($scope, $timeout){
		$scope.klik = function(){
			$timeout (function(){
					$scope.pesan = alert('Sudah 3 detik')
				} ,3000)
		}
	})
	.controller('hitung1', function($scope, $interval){
		$scope.hitungMundur = 10;
		$interval(function(){$scope.hitungMundur--} ,1000,0);
	})
	.controller('hitung2', function($scope, $interval){
		var nilai = 10;
		$scope.hitungMundur2 = nilai;
		$interval(function(){
			if ($scope.hitungMundur2 > 0){
				return ($scope.hitungMundur2--);
			}else{
				$scope.hitungMundur2 = nilai;
			}
		} ,1000,0)
	})
.controller('mart1', function($scope){
	$scope.barang = 'buku';
})
.controller('mart2', function($scope){
	$scope.barang = 'buku';
	$scope.jenis = ['Komputer', 'Seni', 'Tata Boga', 'Busana'];
	$scope.pemesanan = function(j){
		$scope.pesanan++;
	}
	$scope.pesanan = 0;
	$scope.$watch('pesanan', function(hasil){
		if (hasil == 3) {
			alert ('Silahkan melakukan pembayaran terlebih dahulu');
		}
	})
})
.controller('mitra', function($scope, $http){
	$http.get("file.php")
	.then(function(response){
		$scope.mitras = response.data.mitranya;
	});
});
//END Controller Session


