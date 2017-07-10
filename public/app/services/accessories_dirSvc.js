angular.module('toyota').service('accessories_dirSvc', function($http){

const devUrl = 'http://localhost:3000'
const hostedUrl = 'https://git.heroku.com/paulmurff.git'

this.TRDaccessories = () => {
    return $http.get('/TRDaccessories')

} 



})