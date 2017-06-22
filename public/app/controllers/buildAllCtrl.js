angular.module('toyota').controller('buildAllCtrl', function($scope, buildAllSvc){
    

buildAllSvc.getCarsAndVans1().then((res) => {
    console.log(res);
    $scope.getCarsAndVans1 = res.data
})


})
