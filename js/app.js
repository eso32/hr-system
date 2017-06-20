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
})

app.controller('dashboardCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
  $scope.cp1 = {
    cities: ["Kraków", "Warszawa", "Łódź", "Sopot", "Gdańsk", "Gdynia", "Szczecin"],
    try: ['V 2017', 'VI 2017'],
    colors: ['#45b7cd', '#ff6384', '#ff8e72'],
    data: [[65, 59, 80, 81, 56, 55, 40],[28, 48, 40, 19, 86, 27, 90]]
  };
  $scope.cp2 = {
    cities: ["January", "February", "March", "April", "May", "June", "July"],
    try: ['V 2017', 'VI 2017'],
    colors: ['#45b7cd', '#ff6384', '#ff8e72'],
    data: [[65, 59, 80, 81, 56, 55, 40],[28, 48, 40, 19, 86, 27, 90]]
  };
  $scope.cp3 = {
    cities: ["January", "February", "March", "April", "May", "June", "July"],
    try: ['V 2017', 'VI 2017'],
    colors: ['#45b7cd', '#ff6384', '#ff8e72'],
    data: [[65, 59, 80, 81, 56, 55, 40],[28, 48, 40, 19, 86, 27, 90]],
    datasetOverride: [
     {
       label: "Bar chart",
       borderWidth: 1,
       type: 'bar'
     },
     {
       label: "Line chart",
       borderWidth: 3,
       hoverBackgroundColor: "rgba(255,99,132,0.4)",
       hoverBorderColor: "rgba(255,99,132,1)",
       type: 'line'
     }
   ]
  };
  $scope.cp4 = {
    labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"],
    data: [300, 500, 100, 40, 120],
    type: 'polarArea',
    toggle: function () {
      $scope.cp4.type = $scope.cp4.type === 'polarArea' ?
        'pie' : 'polarArea';
    }
  };

  // // Simulate async data update
  // $timeout(function () {
  //   $scope.data = [
  //     [28, 48, 40, 19, 86, 27, 90],
  //     [65, 59, 80, 81, 56, 55, 40]
  //   ];
  // }, 3000);
}]);

app.controller('attCtrl', function($scope){

})

app.controller('emploCtrl', function($scope){

})

app.controller('jobsCtrl', function($scope){

})

app.controller('holidayCtrl', function($scope){

})

app.controller('attCtrl', function($scope){

})
