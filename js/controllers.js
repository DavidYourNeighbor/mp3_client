var demoControllers = angular.module('demoControllers', []);

demoControllers.controller('FirstController', ['$scope', 'CommonData'  , function($scope, CommonData) {
  $scope.data = "";
   $scope.displayText = ""

  $scope.setData = function(){
    CommonData.setData($scope.data);
    $scope.displayText = "Data set"

  };

}]);

demoControllers.controller('SecondController', ['$scope', 'CommonData' , function($scope, CommonData) {
  $scope.data = "";

  $scope.getData = function(){
    $scope.data = CommonData.getData();

  };

}]);


demoControllers.controller('UserListController', ['$scope', 'Users', function ($scope, Users) {
    Users.success(function(data){
        $scope.users = data;
    }).error(function(data, status){
        console.log(data, status);
        $scope.todos = [];
    });
}]);

demoControllers.controller('TaskListController', ['$scope', '$http', 'Tasks', '$window' , function($scope, $http,  Tasks, $window) {

    Tasks.get().success(function(data){
        $scope.tasks = data;
    });


}]);

demoControllers.controller('SettingsController', ['$scope' , '$window' , function($scope, $window) {
  $scope.url = $window.sessionStorage.baseurl;

  $scope.setUrl = function(){
    $window.sessionStorage.baseurl = $scope.url; 
    $scope.displayText = "URL set";

  };

}]);


