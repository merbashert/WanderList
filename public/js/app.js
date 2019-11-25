const app = angular.module("flights", []);

app.controller("MyController", ["$http", function($http){
    const controller = this;

    this.loggedInUser = false;
    // Show my flights on logged in index page by default
    this.includeLoggedInPath = './myflights.html';
    this.includePath = './apiSearch.html'


    // This controls our includes when user is not logged in
    this.changeInclude = (path) => {
        this.includePath = './' + path + '.html'
    }

    //This controls our includes that are only displayed when user is logged in
    this.changeLoggedInInclude = (path) => {
        this.includeLoggedInPath = './' + path + '.html'
    }

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
            // redirect to index page on submit
            window.location.href = "/";
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
                // redirect to index page on submit
                window.location.href = "/";
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
                inboundPartialDate: this.inboundPartialDate,
                userid: this.loggedInUser._id
            }
        }).then(function(response){
            // redirect to show flights page on submit
            window.location.href = "/";

        }, function(error){
            console.log(error);
        })
    }

    this.getFlights = function(){
        $http({
            method: 'GET',
            url: '/flights'
        }).then(function(response){
            // console.log(this.loggedInUser);
            controller.flights = response.data;
        })
    }


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

        $http({
            method:'GET',
            url:'/session'
        }).then(function(response){
            if(response.data.username){
                controller.loggedInUser = response.data;
            }
        });

this.getFlights();

// app.controller("PostController", ["$http", function($http){
//     const controller = this;

    this.clearForms = () => {
            this.destination = ""
            this.departure = ""
            this.return = ""
            this.cost = ""
            this.description = ""
        }
    this.addComment = function(post){
        $http({
            method: 'PUT',
            url: '/posts/' + post._id,
            data: {
                comment: this.comment
            }
        }).then(function(response){
            controller.getPosts()
            alert("Comment Posted!")
        })
    }

    this.createPost = function(){
        $http({
            method:'POST',
            url: '/posts',
            data: {
                destination: this.destination,
                departure: this.departure,
                return: this.return,
                cost: this.cost,
                description: this.description,
                userid: controller.loggedInUser._id
            }
        }).then(function(response){
            controller.getPosts();
            controller.clearForms()
                console.log(response.data);
        }, function(error){
            console.log(error);
        })
    }


    this.getPosts = function(){
        $http({
            method: 'GET',
            url: '/posts'
        }).then(function(response){
            controller.posts = response.data;

        }), function(error){

        }
    }


    this.deletePost = function(post){
        $http({
            method: 'DELETE',
            url: '/posts/' + post._id
        }).then(function(response){
            controller.getPosts();
        })
    }


    this.getPosts();
// }]);

}])




app.controller("SearchFlightsController", ["$http", function($http){
    const controller = this;

    this.searchFlights = function(){
        console.log("search flights running");
        $http({
          method: 'GET',
          url: "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/" +this.userOutboundAir+"/"+this.userInboudAir+"/"+this.userOutboundDate + "/" + this.userInboundDate,
          headers: {
            'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
            'x-rapidapi-key': '9fa6b2d0ccmsh9b3a7a2f6ec8326p199982jsn4ed4b0a8a532'
        },

    }).then(function(response){

        controller.foundFlights = response.data
         console.log(response.data)
    });
}

    this.currency = function() {
      $http({
          method: 'GET',
          url: "https://currency-converter5.p.rapidapi.com/currency/historical/2018-02-09?format=json&to="+this.toCountry+"&from="+this.fromCountry+"&amount=1",
          headers: {
              'x-rapidapi-host': 'currency-converter5.p.rapidapi.com',
              'x-rapidapi-key': '9fa6b2d0ccmsh9b3a7a2f6ec8326p199982jsn4ed4b0a8a532'
          },
      }).then(function(response){
          console.log(response);
          controller.foundCurrency = response.data
          console.log(response.data.amount);
          console.log(response.data);
      });
};

}])
