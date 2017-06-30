angular.module('toyota').directive("summary", function () {

    return {

        templateUrl: "./app/directives/summary/summary_cart.html",
        // link: function (scope, element, attribute) {

        // }
        controller: ($scope, buildTacomaSvc) => {

        
            buildTacomaSvc.getSummary().then((res) => {
                $scope.summary = res.data;
                console.log($scope.summary)
                console.log("see me?")
                // console.log("I am right here in the summary")
            })


        }
    }




})