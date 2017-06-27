angular.module('toyota').directive("packages", function () {

return {

    templateUrl: "./app/directives/packages/tacoma_packages.html",
    // link: function (scope, element, attribute) {
        
    // }
   controller: ($scope, buildTacomaSvc) => {

          buildTacomaSvc.trdpackages().then((res) => {
            //  console.log(res);
             $scope.trdpackages = res.data
            })
            
        }
}




})