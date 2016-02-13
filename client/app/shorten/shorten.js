angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function (link) {
    Links.addOne(link)
    .then(function (data) {
      $scope.link = data;
    })
    .catch(function (error) {
      console.error(error);
    });
  };
});
