angular.module('toyota').directive("summary", function () {

    return {

        templateUrl: "./app/directives/summary/summary_cart.html",
        // link: function (scope, element, attribute) {

        // }
        
        controller: ($scope, buildTacomaSvc, modalSvc) => {


            buildTacomaSvc.getSummary().then((res) => {
                $scope.summary = res.data;

               
                // console.log($scope.summary)
                // $scope.summaryTotal =  $scope.summary.filter(product => {  if (product.price) {
                //     return Number(product.price)
                //      }
                // }).reduce((sum, val) => {
                //     return sum + val
                // })  
                // console.log($scope.summaryTotal)
                // $scope.summaryTotal = summary[0].price + summary[4].price + summary[5].price;
                
                
                console.log("see me?")
                // console.log("I am right here in the summary")
            })



            $scope.modalShown = false;
            $scope.toggleModal = function () {
                console.log($scope.modalShown)
                $scope.modalShown = !$scope.modalShown;

            }






            // var vm = this;

            // vm.openModal = openModal;
            // vm.closeModal = closeModal;

            // $scope.initController();

            // $scope.initController = function () {
            //     vm.bodyText = 'This text can be updated in modal 1';
            // }
            //    $scope.openModal =  (id) =>{
            //         modalSvc.Open(id);
            //     }

            //     $scope.closeModal = (id) =>{
            //         modalSvc.Close(id);
            //     }

            //     }



        }
    }



})