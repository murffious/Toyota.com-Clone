angular.module('toyota').service('buildTacomaSvc', function($http){

const devUrl = 'http://localhost:3000'

this.TRDaccessories = () => {
    return $http.get(devUrl + '/TRDaccessories')

} 
this.addToSummary = function(product) {
    console.log(`Adding ${product.name} to cart`)
    return $http.post('/api/cart', product)
  }

  this.getCart = function() {
    return $http.get('/api/cart')
  }



})