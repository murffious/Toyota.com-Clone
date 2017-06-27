angular.module('toyota').directive("configureMotor", function () {

return {

    templateUrl: "./app/directives/configuration/configuremotor.html",
    controller: ($scope, buildTacomaSvc) => {

          buildTacomaSvc.trdconfiguration().then((res) => {
             console.log(res);
             $scope.trdconfiguration = res.data
            })
            
        }
}




})