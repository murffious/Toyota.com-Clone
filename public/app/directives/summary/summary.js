angular.module('toyota').directive("summary", function () {

    return {

        templateUrl: "./app/directives/summary/summary_cart.html",
        // link: function (scope, element, attribute) {

        // }

        controller: ($scope, buildTacomaSvc, modalSvc) => {


            // buildTacomaSvc.getSummary().then((res) => {
            //         console.log(res)
            //     $scope.summary = res.data;
            //     console.log($scope.summary)
            //     // $scope.sumPageTotal = []
            //     // for (var i = 0; i < $scope.summary; i++) {

            //     //     if ($scope.summary[i].price) {
            //     //         $scope.sumPageTotal.push($scope.summary[i].price)
                        
            //     //     }

            //     // }


            //     // $scope.numbers = $scope.sumPageTotal.map(v => {
            //     //     v = Number(v.replace(',', ''))
            //     //     return v
            //     // })
            //     // var y = $scope.numbers.reduce((a, b) => (a + b)).toLocaleString()
            //     // y = $scope.sumPageTotal;
            //     // console.log($scope.sumPageTotal)





            //     //                 let sumPageTotal = []
            //     //                 for (key in $scope.summary) {

            //     //                     if(key === "price") {
            //     //                         sumPageTotal.push()
            //     //                     }
            //     //                 }

            //     //                 const summary = [
            //     //   {price: "34,398"},
            //     //   {price: "72,495"},
            //     //   {price: "76"},
            //     //   {price: "7,435"}
            //     //   ]
            //     // let numbers = summary.map(v => {
            //     //   v.price = Number( v.price.replace(',', ''))
            //     //   return v
            //     // })
            //     //  var y = numbers.reduce((a, b) => ({price: a.price + b.price}))
            //     //  y.price.toLocaleString(); => '114,404'



            //     // console.log($scope.summary)
            //     // $scope.summaryTotal =  $scope.summary.filter(product => {  if (product.price) {
            //     //     return Number(product.price)
            //     //      }
            //     // }).reduce((sum, val) => {
            //     //     return sum + val
            //     // })  
            //     // console.log($scope.summaryTotal)
            //     // $scope.summaryTotal = summary[0].price + summary[4].price + summary[5].price;


            //     console.log("see me?")
            //     // console.log("I am right here in the summary")
            // })



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