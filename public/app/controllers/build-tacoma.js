angular.module('toyota').controller('buildTacoma', function($scope, buildTacomaSvc){
    $scope.broken = 'working'


// $scope.class = "select-button";
    
//     $scope.changeClass = () =>{
//         if ($scope.class === "select-button")
//             $scope.class = "selected-button";
//          else if ($scope.class === "selected-button")
//             $scope.class = "select-button";
//     };
//      $scope.toggle = true;
    
//     $scope.$watch('toggle', () => {
//         $scope.toggleText = $scope.toggle ? 'SELECT' : 'SELECTED';
//     })

// Slider or Carousel
// $('.variable-width').slick({
//   dots: true,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 1,
//   centerMode: true,
//   variableWidth: true
// });

// Current method for changing pages....may use nested routing for more options with $locaition
$scope.opencontent =  (num) => {
 $scope.item = num; 
//  console.log($scope.item)
  
}
$scope.viewSummary = () => {
    buildTacomaSvc.getSummary().then((res) => {
                $scope.summary = res.data;
                console.log($scope.summary)
                console.log("I am right here in the summary")
            })
}

$scope.startingMSRP = "24,320"
$scope.startingTitle = "2017 Tacoma SR"
$scope.getPriceandTitleChange = (grade) => {
   $scope.startingMSRP = (grade.price)
   console.log("price check")
   console.log($scope.startingMSRP)
   $scope.startingTitle = (grade.year + " "+ grade.model + " " + grade.grade) 
}


 // make shift cart for summary  
// $scope.options = buildTacomaSvc.getSummary(); 
// $scope.addToSummary = (product) => {
//     console.log(`Going to service with ${product}`)
//     console.log(product)
//     buildTacomaSvc.addToSummary(product).then(() => {
//       Get the latest cart from the server. It has been updated.
//       buildTacomaSvc.getSummary().then((res)=> {
//         $scope.summary = res.data;
//       })
//     })
//   }

// buildTacomaSvc.getSummary().then((res) => {
//     console.log(res);
//     $scope.summary = res.data;
//   })

// Psuedo-code: when I click on grade it changes 1. the price 2. the picture set and 3. the title  (it flashed blue as it changes not that important) 4. if not button one then it will change to the selected button class

// it also pushes that item to the summary sheet and totals price  

// on leaving the view page for that selected tab the tab will put in a blue check mark 

// there is a next button at them bottom which has the same affect as clicking the tab section above
// the problem is that there are some set defaults that correlate with price 




//    $scope.myInterval = 5000;
//   var slides = $scope.slides = ["https://www.toyota.com/config/pub/3d/toyota/1005243/1000867/Exterior/1/864_477_PNG/af00b31-ed3b036-d5b169f-88ac67c-e7e9359-fe3c93a-4048061-cb4bfdb-75ff6b4-1cce8f3-0e3ddd3-0e44209-c9df76a-096cb71-30f9e80-54f8546-c13d5e1-90455cf-265e76d-ec56c89.png", "https://www.toyota.com/config/pub/3d/toyota/1005243/1000867/Exterior/2/864_477_PNG/ff8551f-ba459c1-3e65d71-954aca8-9c7d687-1d1b70b-e39f3ed-0f5b482-aa06481-7f50678-120b780-98e5b37-0db9f89-5c6bef0-98c10f3-6fb64ca-b21c68f-264e4f4-b5fcbaf-4146097-7394438.png"];
//   $scope.addSlide = function() {
//     var newWidth = 600 + slides.length + 1;
//     slides.push({
//       image: 'http://lorempixel.com/400/200/people' + newWidth + '/300',
//       text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
//         ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
//     });
//   };
//   for (var i=0; i<4; i++) {
//     $scope.addSlide();
//   }
});