angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, getAll) {
  $scope.data = {};
  $scope.data.links = getAll;
})
.directive('shortlyLink', function () {
  return {
    template:
    `<div class="link" ng-repeat="link in data.links | filter:query | orderBy:'-visits'">
    <img src='assets/redirect_icon.png'/>
    <div class='info'>
      <div class='visits'><span class='count'>{{link.visits}}</span>Visits</div>
      <div class='title'>{{link.title}}</div>
      <div class='original'>{{link.url}}</div>
      <a href=>{{link.base_url}}/{{link.code}}</a>
    </div>
  </div>`
  };
});
