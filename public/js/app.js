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
    };

    this.createFlight = function(){
        $http({
            method:'POST',
            url: '/flights',
            data: {
                country: this.country,
                currency: this.currency,
                locale: this.locale,
                originPlace: this.originPlace,
                destinationPlace: this.destinationPlace,
                outboundPartialDate: this.outboundPartialDate,
                inboundPartialDate: this.inboundPartialDate
            }
        })
    }

    this.getFlights = function(){
        $http({
            method: 'GET',
            url: '/flights'
        }).then(function(respose){
            controller.flights = response.data;
        })
    }

    this.getFlights();

    $http({
        method:'GET',
        url:'/session'
    }).then(function(response){
        if(response.data.username){
            controller.loggedInUser = response.data;
        }
    });


}])
