angular.module('toyota', ['ui.router']) 
.config(function ($stateProvider, $urlRouterProvider){
$urlRouterProvider.when('', '/')

$stateProvider
// .state('home', {
//     url: '/',
//     templateUrl: "/home.html" 
// })
.state('build-all', {
    url: '/build-all',
    templateUrl: './views/build-all.html'
})
})