angular.module('toyota').directive("gradesInitial", function () {

    return {

        templateUrl: "./app/directives/grades/gradesInitial.html",
        // link: function (scope, element, attribute) {

        // }
        controller: ($scope, buildTacomaSvc) => {

           buildTacomaSvc.tacomagrades().then((res) => {
             console.log(res);
             $scope.tacomagrades = res.data
            })



            $scope.class = "select-button";

            $scope.changeClass = () => {
                if ($scope.class === "select-button")
                    $scope.class = "selected-button";
                else if ($scope.class === "selected-button")
                    $scope.class = "select-button";
            };
            $scope.toggle = true;

            $scope.$watch('toggle', () => {
                $scope.toggleText = $scope.toggle ? 'SELECT' : 'SELECTED';
            })
        }

    }


})