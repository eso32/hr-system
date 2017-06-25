app.factory('fetchEmployees', function($http) {
  return $http({
  method: 'GET',
  url: 'database.json',
  headers: {
   'Content-Type': 'application/json'
  }
  }).then(function successCallback(response) {
      return response
    }, function errorCallback(response) {
      console.log('Error occured '+response.status)
    });
});
