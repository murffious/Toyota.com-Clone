angular.module('toyota').service('accessories_dirSvc', function($http){

const devUrl = 'http://localhost:3000'

this.TRDaccessories = () => {
    return $http.get(devUrl + '/TRDaccessories')

} 



})