var app = angular.module('aula2', []);

app.controller('Home', ['$rootScope', '$scope','$http', function($rootScope, $scope,$http){
	
	$rootScope.usuarios = [];
	$scope.temCartao = false;

	$scope.mostrarCartao = function(mostrar){
		if (mostrar == "Sim"){
			$scope.temCartao = true;
		} else{
			$scope.temCartao = false;
		}
	}


	$scope.cadastrar = function(){
	
		var usuario = {
			nome:$scope.nome,
			idade: $scope.idade,
			sexo:$scope.sexo,
			numero_cartao: $scope.numero,
			temCartao: $scope.possuiCartao

		};

		$rootScope.push(usuario);
		window.location = "cadastrados.html"

	}
}]);

