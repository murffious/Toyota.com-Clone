angular.module("toyota").directive("slider2", function ($timeout) {

    return {
        templateUrl: "./app/directives/slider2/slider2.html",
        restrict: 'AE',
        replace: true,
        scope: {
            images: '='
        },
        link: function (scope, elem, attrs) {
            scope.currentIndex = 0; // Initially the index is at the first image

            scope.next = function () {
                scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
            };

            scope.prev = function () {
                scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;
            };
            scope.$watch('currentIndex', function () {
                scope.images.forEach(function (image) {
                    image.visible = false; // make every image invisible
                });

                scope.images[scope.currentIndex].visible = true; // make the current image visible
            });
        },
        controller: ($scope) => {
            $scope.images = [{
                src: 'https://www.toyota.com/config/pub/3d/toyota/1005243/1000867/Exterior/2/864_477_PNG/6d7ec0f-a4b295c-3e65d71-954aca8-cf26585-9c7d687-1d1b70b-8ed3f45-0f5b482-9994ad4-f9a364d-120b780-63a9ed3-c28d12f-92dcb1a-411afc3-24a0427-851d9eb-6bb6674-1b2a09a-6fa347b-2be27f1-560eb63.png',
                title: 'Pic 1'
            }, {
                src: 'https://www.toyota.com/config/pub/3d/toyota/1005243/1000867/Exterior/1/864_477_PNG/af00b31-ed3b036-d5b169f-88ac67c-e7e9359-fe3c93a-4048061-cb4bfdb-75ff6b4-1cce8f3-0e3ddd3-0e44209-c9df76a-096cb71-30f9e80-54f8546-c13d5e1-90455cf-265e76d-ec56c89.png',
                title: 'Pic 2'
            }, {
                src: 'https://www.toyota.com/config/pub/3d/toyota/1005243/1000867/Exterior/3/864_477_PNG/64428b8-9814f37-a8ba048-caab854-55f23c1-157140e-6e1fafd-f5b6ae0-847257e-6ecc6e6-a24a649-95c8a1d-688e5f2-72301c6-4816ec9-ba70585.png',
                title: 'Pic 3'
            }, {
                src: 'https://www.toyota.com/config/pub/3d/toyota/1005243/1000867/Exterior/2/864_477_PNG/6d7ec0f-a4b295c-3e65d71-954aca8-cf26585-9c7d687-1d1b70b-8ed3f45-0f5b482-9994ad4-f9a364d-120b780-63a9ed3-c28d12f-92dcb1a-411afc3-24a0427-851d9eb-6bb6674-1b2a09a-6fa347b-2be27f1-560eb63.png',
                title: 'Pic 4'
            }, {
                src: 'https://www.toyota.com/config/pub/3d/toyota/1005243/1000867/Exterior/3/864_477_PNG/64428b8-9814f37-a8ba048-caab854-55f23c1-157140e-6e1fafd-f5b6ae0-847257e-6ecc6e6-a24a649-95c8a1d-688e5f2-72301c6-4816ec9-ba70585.png',
                title: 'Pic 5'

            }];
        }

    };

})