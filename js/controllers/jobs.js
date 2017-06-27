app.controller('jobsCtrl', function($scope, fetchJobs){
  fetchJobs.then(function(data) {
    $scope.jobs = data;
  });
});
