angular.module('toyota').controller('build-tacoma', function($scope){
    $scope.broken = 'working'

$scope.slideIndex = 1;
$scope.showSlides($scope.slideIndex);

$scope. plusSlides = (n) => {
  showSlides(slideIndex += n);
}

 $scope.currentSlide = (n) => {
  showSlides(slideIndex = n);
}

$scope.showSlides = (n) => {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
// var slideIndex = 0;
// showSlides();


// function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none"; 
//     }
//     slideIndex++;
//     if (slideIndex> slides.length) {slideIndex = 1} 
//     slides[slideIndex-1].style.display = "block"; 
//     setTimeout(showSlides, 2000); // Change image every 2 seconds
// }
});