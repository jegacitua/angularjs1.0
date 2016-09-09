<?php

switch($_GET['action']){
	
	case 'listarEventos' :
	
		$jsondata = array();
				
		$file = file_get_contents("../../data/json_eventos.json");
		$datos = json_decode($file, true);
		
		header('Context-type: application/json');		
		foreach($datos as $row){
			$jsondata[] = $row;
		}
		echo json_encode($jsondata);
		exit;
		
	break;	
	
	
	
	

}

?>