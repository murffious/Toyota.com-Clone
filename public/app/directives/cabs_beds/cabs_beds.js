angular.module('toyota').directive("cabsBeds", function () {

return {

    templateUrl: "./app/directives/cabs_beds/cabs_beds.html",
    // link: function (scope, element, attribute) {
        
    // }
    scope: {},
    controller: ($scope, buildTacomaSvc) => {

          buildTacomaSvc.trdcabsbeds().then((res) => {
            //  console.log(res);
             $scope.trdcabsbeds = res.data
            })
            


            $scope.selectedIndex = 0;
            $scope.itemClicked = ($index) => {
                console.log($index);
                $scope.selectedIndex = $index;
            }

            // These methods are for builidng a cart or summary page  
            // $scope.summmary = {}
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

            // buildTacomaSvc.getSummary().then((res) => {
            //     console.log(res);
            //     $scope.summary = res.data;
            // })
        }
}




})