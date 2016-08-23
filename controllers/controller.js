var app = angular.module('aula2', []);

app.controller('Home', ['$rootScope', '$scope','$http', function($rootScope, $scope,$http){
	
	$scope.usuarios = [];
	$scope.temCartao = "false";

	$scope.mostrarCartao = function(mostrar){
		if (mostrar == true){
			$scope.temCartao = true;
		} else{
			$scope.temCartao = false;
		}
	}


	$scope.cadastrar = function(){
		alert($scope.sexo)
		var usuario = {
			nome:$scope.nome,
			idade: $scope.idade,
			sexo:$scope.sexo,
			numero_cartao: $scope.numero
		};
	}
}]);

