angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, getAll) {
  $scope.data = {};
  $scope.data.links = getAll;
});
