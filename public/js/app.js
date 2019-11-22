const app = angular.module("flights", []);

app.controller("MyController", ["$http", function($http){
    const controller = this;
const origin = "Buffalo"
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
                outboundPartialDate: this.outboundPartialDate.toString().substring(4,15),
                inboundPartialDate: this.inboundPartialDate.toString().substring(4,15)
            }
        }).then(function(response){
            console.log(response);
            controller.getFlights();
        }, function(error){
            console.log(error);
        })
    }

    this.getFlights = function(){
        $http({
            method: 'GET',
            url: '/flights'
        }).then(function(response){
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

    this.editFlight = function(flight){
        $http({
            method:'PUT',
            url:'/flights/' + flight._id,
            data: {
                country: this.updatedCountry,
                currency: this.updatedCurrency,
                locale: this.updatedLocale,
                originPlace: this.updatedOriginPlace,
                destinationPlace: this.updatedDestinationPlace,
                outboundPartialDate: this.updatedOutboundPartialDate,
                inboundPartialDate: this.updatedInboundPartialDate
            }
        }).then(function(response){
            controller.getFlights();
            controller.indexOfFormToShow = null;
        })
    }

    this.deleteFlight = function(flight){
        $http({
            method: 'DELETE',
            url: '/flights/' + flight._id
        }).then(function(response){
            controller.getFlights();
        })
    }


}])
