angular.module('toyota').directive("gradesInitial", function () {

    return {

        templateUrl: "./app/directives/grades/gradesInitial.html",
        // link: function (scope, element, attribute) {

        // }
        controller: ($scope, buildTacomaSvc) => {
            //   get info for grades selection cards for ng repeat
            buildTacomaSvc.tacomagrades().then((res) => {
                //  console.log(res);
                $scope.tacomagrades = res.data
            })

            // zero in on ng repeat to have class chagne on button click etc
            $scope.selectedIndex = 0;
            $scope.itemClicked = ($index) => {
                // console.log($index);
                $scope.selectedIndex = $index;
            }
            //  all this below is code for chaning class that I originally was using save for reference
            // $scope.selected = 0;

            // $scope.select = function (index) {
            //     $scope.selected = index;
            // };

            // $scope.class = "select-button";

            // $scope.changeClass = () => {
            //     if ($scope.class === "select-button")
            //         $scope.class = "selected-button";
            //     else if ($scope.class === "selected-button")
            //         $scope.class = "select-button";
            // };
            // $scope.toggle = true;
            //  $scope.toggleObject = {item: -1};
            //  $scope.$watch('toggle', () => {
            //     $scope.toggleText = $scope.toggle ? 'SELECT' : 'SELECTED';
            // })


            // grab photos for changint the slider

            buildTacomaSvc.trdcolors().then((res) => {
                $scope.photos = res.images
            })
            
            $scope.changeSliderPhotos = (id) => {
                // console.log(id)
                 return  buildTacomaSvc.getTRDphotos(id) 

            }

            // These methods are for builidng a cart or summary page  
            // $scope.summmary = {}
            $scope.addToSummary = (product) => {
                // console.log(product)
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