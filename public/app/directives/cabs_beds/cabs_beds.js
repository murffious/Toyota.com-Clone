angular.module('toyota').directive("cabsBeds", function () {

return {

    templateUrl: "./app/directives/cabs_beds/cabs_beds.html",
    // link: function (scope, element, attribute) {
        
    // }
    controller: ($scope, buildTacomaSvc) => {

          buildTacomaSvc.trdcabsbeds().then((res) => {
            //  console.log(res);
             $scope.trdcabsbeds = res.data
            })
            
        }
}




})