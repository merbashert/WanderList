const app = angular.module("searchFlights", []);


app.controller("SearchFlightsController", ["$http", function($http){
    const controller = this;

    // let userOutboundAir = "SFO-sky";
    // let userInboudAir = "JFK-sky";
    // let userOutboundDate = "2019-12-01" ;
    // let userInboundDate = "2019-12-10" ;

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
        console.log(response);
        controller.searchFlights = response.data
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
      });
};
console.log("tst");
// this.searchFlights();
    // request(searchFlights, function (error, response, body) {
    //    console.log(JSON.parse(body));
    // });
}])



// const currency = {
//   method: 'GET',
//   url: 'https://currency-converter5.p.rapidapi.com/currency/historical/2018-02-09',
//   qs: {to: 'USD', from: 'CAD', amount: '1'},
//   headers: {
//     'x-rapidapi-host': 'currency-converter5.p.rapidapi.com',
//     'x-rapidapi-key': '9fa6b2d0ccmsh9b3a7a2f6ec8326p199982jsn4ed4b0a8a532'
//   }
// };
//
// request(currency, function (error, response, body) {
// 	console.log(JSON.parse(body));
// });
