app.controller('emploCtrl', function($scope, $http){
  $scope.getData = function(){
      document.getElementById('indicator').innerHTML = "Refreshing data... Wait...";
      return $http({
        method: 'GET',
        url: 'database.json',
        headers: {
         'Content-Type': 'application/json'
        }
      }).then(function successCallback(response) {
          var datetimeNow = new Date();
          var hourNow = datetimeNow.getHours();
          var minuteNow = datetimeNow.getMinutes();
          $scope.employees = response.data;
          document.getElementById('indicator').innerHTML = "Last update on "+hourNow+":"+minuteNow;
        }, function errorCallback(response) {
          document.getElementById('indicator').innerHTML = 'Error occured '+response.status;
          console.log('Error occured '+response.status)
        });
  };
  $scope.getData();
});
