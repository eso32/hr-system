var app = angular.module('hrsystem', ['ngRoute', 'chart.js']);

app.config(['ChartJsProvider', function (ChartJsProvider) {
    // Configure all charts
    ChartJsProvider.setOptions({
      chartColors: ['#FF5252', '#FF8A80'],
      responsive: false
    });
    // Configure all line charts
    ChartJsProvider.setOptions('line', {
      showLines: false
    });
  }]);

app.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl: 'js/templates/dashboard.html',
    controller: 'dashboardCtrl'
  }).when('/employees',{
    templateUrl: 'js/templates/employees.html',
    controller: 'emploCtrl'
  }).when('/jobs',{
    templateUrl: 'js/templates/jobs.html',
    controller: 'jobsCtrl'
  }).when('/holiday',{
    templateUrl: 'js/templates/holiday.html',
    controller: 'holidayCtrl'
  }).when('/attendance',{
    templateUrl: 'js/templates/attendance.html',
    controller: 'attCtrl'
  }).otherwise({
    redirectTo: '/'
  })
});

app.controller('attCtrl', function($scope){

});

app.controller('jobsCtrl', function($scope){

});

app.controller('holidayCtrl', function($scope){

});
