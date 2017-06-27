angular.module('toyota').directive("accessoriesDir", function () {

    return {

        templateUrl: "./app/directives/accessories-dir/accessories-dir.html",
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
        }
         

    }
})