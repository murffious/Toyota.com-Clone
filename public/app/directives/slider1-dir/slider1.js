angular.module('toyota').directive("slider1", function () {

return {

    templateUrl: "./app/directives/slider1-dir/slider1.html",
    link: function (scope, element, attribute) {
        $('.single-item').slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  centerMode: true,
  singleItem: true,
  accessibility: true,
  arrows: true
  
});
    }

}




})