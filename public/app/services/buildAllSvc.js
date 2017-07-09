angular.module('toyota').service('buildAllSvc', function($http){

const devUrl = 'http://localhost:3000'
const hostedUrl = 'https://git.heroku.com/paulmurff.git'

this.getCarsAndVans1 = () => {
    return $http.get(hostedUrll + '/carsandvans')
} 
this.gettrucks1 = () => {
    return $http.get(hostedUrl + '/trucks')
} 
this.gethybrids1 = () => {
    return $http.get(hostedUrl + '/hybrids')
} 
this.getcrossovers1 = () => {
    return $http.get(hostedUrl + '/crossovers')
} 



})