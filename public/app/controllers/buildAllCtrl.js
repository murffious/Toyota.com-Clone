angular.module('toyota').controller('buildAllCtrl', function($scope, buildAllSvc){
    

buildAllSvc.getCarsAndVans1().then((res) => {
    // console.log(res);
    $scope.getCarsAndVans1 = res.data
    console.log(res)
})

buildAllSvc.gettrucks1().then((res) => {
    // console.log(res);
    $scope.gettrucks1 = res.data
})
buildAllSvc.gethybrids1().then((res) => {
    // console.log(res);
    $scope.gethybrids1 = res.data
})
buildAllSvc.getcrossovers1().then((res) => {
    // console.log(res);
    $scope.getcrossovers1 = res.data
})

})
