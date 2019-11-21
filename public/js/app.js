const app = angular.module("flights", []);

app.controller("MyController", ["$http", function($http){
    const controller = this;
    this.loggedInUser = false;

    this.signup = function(){
        $http({
            url:'/users',
            method: 'POST',
            data: {
                username: this.signupUsername,
                password: this.signupPassword
            }
        }).then(function(response){
            controller.loggedInUser = response.data;
        })
    }

    this.login = function(){
        $http({
            url:'/session',
            method:'POST',
            data: {
                username: this.loginUsername,
                password: this.loginPassword
            }
        }).then(function(response){
            if(response.data.username){
                controller.loggedInUser = response.data;
            } else {
                controller.loginUsername = null;
                controller.loginPassword = null;
            }
        })
    }

    this.logout = function(){
        $http({
            url:'/session',
            method:'DELETE'
        }).then(function(){
            controller.loggedInUser = false;
        })
    }
}])
