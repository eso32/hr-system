app.controller('dashboardCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
  $scope.options = {
    responsive: true,

    scales: {
            yAxes: [{
                ticks: {
                    min: 0
                }
            }]
        }
  };
  $scope.cp1 = {
    cities: ["PContr", "FrontEnd", "PM", "Engineer"],
    try: ['V 2017'],
    colors: ['#45b7cd', '#ff6384', '#ff8e72'],
    data: [[6, 7, 3, 2]]
  };
  $scope.cp2 = {
    cities: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII" ],
    try: ['2016', '2017'],
    colors: ['#45b7cd', '#ff6384', '#ff8e72'],
    data: [[10, 2, 5, 3, 2, 1, 3,2,3,6,13,12],[8, 4, 7, 11, 2, 4]]
  };
  $scope.cp3 = {
    cities: ["2013", "2014", "2015", "2016", "2017"],
    try: ['New employees', 'Cumulated number'],
    colors: ['#45b7cd', '#ff6384', '#ff8e72'],
    data: [[2, 3, 2, 1, 5],[2, 5, 7, 8, 13]],
    datasetOverride: [
     {
       label: 'New employees',
       borderWidth: 1,
       type: 'bar'
     },
     {
       label: 'Cumulated number',
       borderWidth: 3,
       hoverBackgroundColor: "rgba(255,99,132,0.4)",
       hoverBorderColor: "rgba(255,99,132,1)",
       type: 'line'
     }
   ]
  };
  $scope.cp4 = {
    labels: ["PM", "Engineering", "HR", "Administration", "3'rd parties"],
    data: [13, 7, 12, 4, 8],
    type: 'pie',
    toggle: function () {
      $scope.cp4.type = $scope.cp4.type === 'polarArea' ?
        'pie' : 'polarArea';
    },
    options: {
      responsive: true,
    },
    colors: ['#45b7cd', '#A0CC14', '#ff6384', '#ff8e72', '#1252B2', '#FF3419'],
  };

  // // Simulate async data update
  // $timeout(function () {
  //   $scope.data = [
  //     [28, 48, 40, 19, 86, 27, 90],
  //     [65, 59, 80, 81, 56, 55, 40]
  //   ];
  // }, 3000);
}]);
