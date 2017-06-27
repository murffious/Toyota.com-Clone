angular.module('toyota').directive("gradesInitial", function () {

    return {

        templateUrl: "./app/directives/grades/gradesInitial.html",
        // link: function (scope, element, attribute) {

        // }
        controller: ($scope, buildTacomaSvc) => {

            buildTacomaSvc.tacomagrades().then((res) => {
                //  console.log(res);
                $scope.tacomagrades = res.data
            })
            $scope.selectedIndex = 0;
            $scope.itemClicked = ($index) => {
                // console.log($index);
                // console.log("clicked")
                $scope.selectedIndex = $index;
            }

            $scope.class = "select-button";

            $scope.changeClass = () => {
                if ($scope.class === "select-button")
                    $scope.class = "selected-button";
                else if ($scope.class === "selected-button")
                    $scope.class = "select-button";
            };
            $scope.toggle = true;


            // summary 
            // $scope.summmary = {}
            $scope.addToSummary = (product) => {
            //     console.log(`Going to service with ${product}`)
                // buildTacomaSvc.addToSummary(product).then(() => {
                //     Get the latest cart from the server. It has been updated.
                //     buildTacomaSvc.getSummary().then((res) => {
                //         $scope.summary = res.data;
                //     })
                // })
            }

            // buildTacomaSvc.getSummary().then((res) => {
            //     console.log(res);
            //     $scope.summary = res.data;
            // })
            // alternative toggle   $scope.$watch('toggle', () => {
            //     $scope.toggleText = $scope.toggle ? 'SELECT' : 'SELECTED';
            // })
        }

    }


})