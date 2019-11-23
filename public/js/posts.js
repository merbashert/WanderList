const app = angular.module("posts", []);


app.controller("PostController", ["$http", function($http){
    const controller = this;

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
                username: this.username
            }
        }).then(function(response){
            console.log(response);
            controller.getPosts();
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
            console.log(error);
        }
    }

    this.getPostShow = function(){
        $http({
            method: 'GET',
            url: '/posts/' + post._id
        }).then(function(response){
            controller.posts = response.data
        })
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
}])
