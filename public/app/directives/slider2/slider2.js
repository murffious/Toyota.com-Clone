angular.module("toyota").directive("slider2", function ($timeout, buildTacomaSvc) {

    return {
        templateUrl: "./app/directives/slider2/slider2.html",
        restrict: 'AE',
        replace: true,
        scope: {
            images: '='
        },
        link:  (scope, elem, attrs) => {
            scope.currentIndex = 0; // Initially the index is at the first image

            scope.next =  () => {
                scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
            };

            scope.prev =  () => {
                scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;
            };
            scope.$watch('currentIndex',  () => {
                scope.images.forEach( (image) => {
                    image.visible = false; // make every image invisible
                });

                scope.images[scope.currentIndex].visible = true; // make the current image visible
                
            });
            // scope.$watch('buildTacomaSvc.photos', (newVal)=> {
            //     console.log("hi")
            //     scope.images = buildTacomaSvc.photos
            // })
        },
        controller: ($scope, buildTacomaSvc) => {
            
            $scope.set_size = (image) => {
                    if(image.title === "Pic 6" ||image.title === "Pic 7" ||image.title=== "Pic 8" ) {
                        return {width: "500px", "box-shadow": "0 1px 5px 2px rgba(0,0,0,.15)", top: "34px", "margin-left": "56px"}
                    }
            }
            $scope.images = buildTacomaSvc.photos
            // $scope.$apply()
            // $scope.$watch('buildTacomaSvc.photos', (newVal)=> {
            //     $scope.images = buildTacomaSvc.photos
            //     console.log('hey')
            // })
            
            // $scope.images = [{
            //     src: '../../app/images/build-tacoma-home/sr-1.png',
            //     title: 'Pic 1'
            // }, {
            //     src: '../../app/images/build-tacoma-home/sr-2.png',
            //     title: 'Pic 2'
            // }, {
            //     src: '../../app/images/build-tacoma-home/sr-3.png',
            //     title: 'Pic 3'
            // }, {
            //     src: '../../app/images/build-tacoma-home/sr-4.png',
            //     title: 'Pic 4'
            // }, {
            //     src: '../../app/images/build-tacoma-home/sr-5.png',
            //     title: 'Pic 5'
            // },
            //  {
            //     src: '../../app/images/build-tacoma-home/sr-6-interior1.png',
            //     title: 'Pic 6'
            // }, {
            //     src: '../../app/images/build-tacoma-home/sr-7-interior2.png',
            //     title: 'Pic 7'
            // }, {
            //     src: '../../app/images/build-tacoma-home/sr-8-interior3.png',
            //     title: 'Pic 8'
            // }];
        }

    };

})