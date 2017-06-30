angular.module('toyota').directive("tacomaColor", function () {

return {

    templateUrl: "./app/directives/colors_tacoma/tacoma-colors.html",
    scope: {},
    controller: ($scope, buildTacomaSvc) => {

          buildTacomaSvc.trdcolors().then((res) => {
            //  console.log(res);
             $scope.trdcolors = res
            //  console.log($scope.trdcolors)
            })
            $scope.addToSummary = (product) => {
                // console.log(`${cabbed}`, product)
                //     console.log(`Going to service with ${product}`)
                buildTacomaSvc.addToSummary(product).then(() => {
                    // Get the latest cart from the server. It has been updated.
                    buildTacomaSvc.getSummary().then((res) => {
                        $scope.summary = res.data;
                    })

                })
            }
        }
}




})