var moviesApp = angular.module('moviesApp', []);

moviesApp.controller('mainController', ['$scope', '$http', function($scope, $http){

  $scope.movies = [];


  $scope.getMovies = function(){
    $http.get('https://api.import.io/store/connector/3983597f-f302-4dc1-b5ff-ad7bebddf5b2/_query?input=webpage/url:http%3A%2F%2Fwww.imdb.com%2Fsearch%2Ftitle%3Fcount%3D100%26num_votes%3D5000%2C%26release_date%3D2015-11-01%2C%26title_type%3Dfeature%26user_rating%3D7.5%2C10&&_apikey=a8112c3dbbf742a9b0c9dd672851c5e5f552522891f53e05ef1ee257ecd8203d0c466941d8a67681943cba37cb7d49b02f5d3330c555ff70c835f0ce7c6a577f82bae25d3bcd4b7b6b464da589cd5ca8')
    .then(function(response){

      $scope.movies = response.data.results;
      console.log($scope.movies);

    });
  };
  $scope.getMovies();

}]);
