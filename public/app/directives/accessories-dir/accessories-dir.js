angular.module('toyota').directive("accessoriesDir", function () {

    return {

        templateUrl: "./app/directives/accessories-dir/accessories-dir.html",
        controller: ($scope, accessories_dirSvc) => {

           accessories_dirSvc.TRDaccessories().then((res) => {
             console.log(res);
             $scope.TRDacc = res.data
            })
            
             $scope.itemClicked = ($index) => {
            console.log($index);
            console.log("clicked")
            $scope.selectedIndex = $index;
                 }
        }
         

    }
})