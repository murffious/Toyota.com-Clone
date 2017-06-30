angular.module('toyota').directive("accessoriesDir", function () {

    return {

        templateUrl: "./app/directives/accessories-dir/accessories-dir.html",
        scope: {},
        controller: ($scope, buildTacomaSvc) => {

           buildTacomaSvc.TRDaccessories().then((res) => {
            //  console.log(res);
             $scope.TRDacc = res.data
            })
            
             $scope.itemClicked = ($index) => {
            // console.log($index);
            // console.log("clicked")
            $scope.selectedIndex = $index;
                 }

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