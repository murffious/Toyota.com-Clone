angular.module('toyota').controller('build-tacoma', function($scope){
    $scope.broken = 'working'

   $scope.myInterval = 5000;
  var slides = $scope.slides = ["https://www.toyota.com/config/pub/3d/toyota/1005243/1000867/Exterior/1/864_477_PNG/af00b31-ed3b036-d5b169f-88ac67c-e7e9359-fe3c93a-4048061-cb4bfdb-75ff6b4-1cce8f3-0e3ddd3-0e44209-c9df76a-096cb71-30f9e80-54f8546-c13d5e1-90455cf-265e76d-ec56c89.png", "https://www.toyota.com/config/pub/3d/toyota/1005243/1000867/Exterior/2/864_477_PNG/ff8551f-ba459c1-3e65d71-954aca8-9c7d687-1d1b70b-e39f3ed-0f5b482-aa06481-7f50678-120b780-98e5b37-0db9f89-5c6bef0-98c10f3-6fb64ca-b21c68f-264e4f4-b5fcbaf-4146097-7394438.png"];
  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: 'http://lorempixel.com/400/200/people' + newWidth + '/300',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }
});