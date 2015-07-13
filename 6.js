var app = angular.module('myApp',[]);

app.controller('myController',function($scope,$http){	

	$scope.posts = [];

	$http.get('http://jsonplaceholder.typicode.com/posts')
		.success(function(data){
			console.log(data);
			$scope.posts = data;
		})
		.error(function(data){

		});
	
	$scope.addPost = function(){
		$http.post('http://jsonplaceholder.typicode.com/posts',{
			title: $scope.newPost.title,
			body: $scope.newPost.body,
			userId: 1
		})
		.success(function(data,status,header,config){
			//console.log(data);
			//$scope.posts.unshift($scope.newPost);
			$scope.posts.push($scope.newPost);
			$scope.newPost = {};

		})
		.error(function(error,status,header,config){

		});
	}

});