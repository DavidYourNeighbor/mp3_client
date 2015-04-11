// js/services/todos.js
angular.module('demoServices', [])
        .factory('CommonData', function(){
        var data = "";
        return{
            getData : function(){
                return data;
            },
            setData : function(newData){
                data = newData;                
            }
        }
    })
    .factory('Users', ['$http', function($http){
        var baseUrl = $window.sessionStorage.baseurl;
        return $http.get(baseUrl+'/api/users');
    }])

    .factory('Tasks', ['$http', function($http){
        var baseUrl = $window.sessionStorage.baseurl;
        return $http.get(baseUrl+'/api/tasks');
    }])
    ;
