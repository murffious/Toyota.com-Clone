angular.module('toyota').service('buildAllSvc', function($http){

const devUrl = 'http://localhost:3000'

this.getCarsAndVans1 = () => {
    return $http.get(devUrl + '/carsandvans')

} 



})