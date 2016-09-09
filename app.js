angular.module('appEventos', ['ui.router'])

// Configuración de las rutas
.config(function($stateProvider, $urlRouterProvider){	
    
	$stateProvider
		.state('eventos',{
			url: '/eventos',
			templateUrl: 'src/views/eventos.html',
			controller: 'controllerEvento'
		})		
		.state('editarEvento',{
			url: '/editarEventos',
			templateUrl: 'src/views/frmevento-editar.html',
			controller: 'controllerEventoEditar'
		});
	$urlRouterProvider.otherwise('eventos');

})

.factory('comun',function(){
	var comun = {};		
	comun.evento = {};
	
	return comun;
})


.controller('controllerEvento', function($http, $scope, $state, comun){
	$scope.listarEventos = function(){
		$scope.loading = false;
		$scope.estado = ['INACTIVO', 'ACTIVO'];
		
		$http.get('src/models/eventos.class.php?action=listarEventos')			
		.success(function(response){			
			$scope.eventos = response;				
		});				
	}
	
	$scope.editarEvento = function(evento){
		comun.evento = evento;
		$state.go('editarEvento');
	}

})


.controller('controllerEventoEditar', function($scope, $state, comun){
	$scope.evento = comun.evento;
	
})

