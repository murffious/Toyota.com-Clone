angular.module('toyota').directive("tacomaColor", function () {

return {

    templateUrl: "./app/directives/colors_tacoma/tacoma-colors.html",
    controller: ($scope, buildTacomaSvc) => {

          buildTacomaSvc.trdcolors().then((res) => {
            //  console.log(res);
             $scope.trdcolors = res.data
             console.log($scope.trdcolors)
            })
            
        }
}




})