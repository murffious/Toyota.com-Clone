angular.module('toyota').service('buildTacomaSvc', function($http){

const devUrl = 'http://localhost:3000'

// build tacoma 
this.tacomagrades = () => {
    return $http.get(devUrl + '/tacomagrades')

} 
this.trdcabsbeds = () => {
    return $http.get(devUrl + '/tacomacabsbeds')

} 
this.trdconfiguration = () => {
    return $http.get(devUrl + '/tacomaconfiguration')

} 
this.trdcolors = () => {
    return $http.get(devUrl + '/trdcolors')

} 
this.trdpackages = () => {
    return $http.get(devUrl + '/tacomapackages')

} 

this.TRDaccessories = () => {
    return $http.get(devUrl + '/TRDaccessories')

} 



// cart or summary
// this.addToSummary = function(product) {
//     console.log(`Adding ${product} to cart`)
//     return $http.post('/summary', product)
//   }

//   this.getSummary = function() {
//     return $http.get('/summary')
//   }



})