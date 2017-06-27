angular.module('toyota').service('buildAllSvc', function($http){

const devUrl = 'http://localhost:3000'

this.getCarsAndVans1 = () => {
    return $http.get(devUrl + '/carsandvans')
} 
this.gettrucks1 = () => {
    return $http.get(devUrl + '/trucks')
} 
this.gethybrids1 = () => {
    return $http.get(devUrl + '/hybrids')
} 
this.getcrossovers1 = () => {
    return $http.get(devUrl + '/crossovers')
} 



})