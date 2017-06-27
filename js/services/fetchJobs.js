app.factory('fetchJobs', function($http) {
  return $http({
  method: 'GET',
  url: 'jobs.json',
  headers: {
   'Content-Type': 'application/json'
  }
  }).then(function successCallback(response) {
      return response.data
    }, function errorCallback(response) {
      console.log('Error occured '+response.status)
    });
});
