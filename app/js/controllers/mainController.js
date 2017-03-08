angular.module('app')
    .controller('MainController', function($scope) {
        $scope.newTodo = '';
        $scope.todos = [];

        $scope.addTodo = function() {
            $scope.todos.push($scope.newTodo);
            $scope.newTodo = '';
        };

        $scope.deleteTodo = function(index) {
            console.log(index);
            $scope.todos.splice(index, 1);
        };

        $scope.editTodo = function(index, todo) {
            $scope.todos[index] = todo;
        };
    });
