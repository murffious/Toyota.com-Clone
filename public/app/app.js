angular.module('toyota', ['ui.router']) 
.config(function ($stateProvider, $urlRouterProvider){
$urlRouterProvider.when('', '/')

$stateProvider
.state('home', {
    url: '/',
    templateUrl: "./app/views/home.html" 
})
.state('build-all', {
    url: '/build-all',
    templateUrl: './app/views/build-all.html'
})
.state('build-tacoma', {
    url: '/build-tacoma',
    templateUrl: './app/views/build-tacoma.html',
    controller: 'build-tacoma'
})
})