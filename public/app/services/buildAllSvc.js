angular.module('toyota').service('buildAllSvc', function($http){

const devUrl = 'http://localhost:3000'
const hostedUrl = 'https://git.heroku.com/paulmurff.git'

this.getCarsAndVans1 = () => {
    return $http.get('/carsandvans')
} 
this.gettrucks1 = () => {
    return $http.get('/trucks')
} 
this.gethybrids1 = () => {
    return $http.get('/hybrids')
} 
this.getcrossovers1 = () => {
    return $http.get('/crossovers')
} 



})