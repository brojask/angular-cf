var app = angular.module('myApp',[]);

app.controller('myController',function($scope){

	$scope.nombre = 'Bryan';
	$scope.nuevoComentario = {};
	$scope.comentarios = [{comentario:'Comm 1', user:'U1'},{comentario:'Comm 2', user: 'U2'}];

	$scope.addComm = function(){
		$scope.comentarios.push($scope.nuevoComentario);
		$scope.nuevoComentario = {};
	}

});