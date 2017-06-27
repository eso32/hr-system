app.controller('attCtrl', ['$scope', function ($scope) {
  $scope.options = {
    responsive: true,
    legend: {
        display: true,
        labels: {
            fontColor: 'rgb(255, 99, 132)'
        }
    }
  };
  $scope.cp1 = {
    cities: ["Kraków", "Warszawa", "Łódź", "Sopot", "Gdańsk", "Gdynia", "Szczecin"],
    try: ['2016', '2017'],
    colors: ['#45b7cd', '#ff6384', '#ff8e72'],
    data: [[65, 59, 80, 81, 56, 55, 40],[28, 48, 40, 19, 86, 27, 90]]
  };
  $scope.cp2 = {
    cities: ["January", "February", "March", "April", "May", "June", "July"],
    try: ['2016', '2017'],
    colors: ['#45b7cd', '#ff6384', '#ff8e72'],
    data: [[65, 59, 80, 81, 56, 55, 40],[28, 48, 40, 19, 86, 27, 90]]
  };
}]);
