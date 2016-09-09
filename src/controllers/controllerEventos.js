.factory('comun',function(){
	var comun = {};
	
	comun.evento = {};
	
});


.controller('controller_Eventos', function($http, $scope){
  
	$scope.loading	= true;

	$scope.listarEventos = function(){
		$scope.loading = false;
		$http.get('src/models/eventos.class.php?action=listarEventos')			
		.success(function(response){
			//$("#mensaje").html("La respuesta del modelo es: "+response);				
			$scope.eventos = response;				
			$scope.loading = true;
		});		
	}
		
	$scope.editarEvento = function (evento){
		comun.evento = evento;
		$state.go('frmEditarEvento');
    };
	
	
});


.controller('controller_EditarEventos', function($http, $scope, $state, comun){
  
	$scope.loading	= true;
		
	$scope.evento = comun.evento;
	
	
});


