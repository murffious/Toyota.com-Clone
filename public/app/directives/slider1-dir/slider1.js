angular.module('toyota').directive("slider1", function () {

return {

    templateUrl: "./app/directives/slider1-dir/slider1.html",
    link: function (scope, element, attribute) {
        $('.variable-width').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true
});
    }

}




})