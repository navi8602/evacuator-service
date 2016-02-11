angular
    .module('Evacuator')
    .config(config);

function config($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('start', {
            url: '/start',
            templateUrl: 'client/templates/start.html'
        })
        .state('signin', {
            url: '/signin',
            templateUrl: 'client/templates/signin.html'
        })
        .state('signup', {
            url: '/signup',
            templateUrl: 'client/templates/signup.html'
        })
        .state('map01', {
            url: '/map01',
            templateUrl: 'client/templates/map01.html'
        })
        .state('map02', {
            url: '/map02',
            templateUrl: 'client/templates/map02.html'
        })
        .state('map03', {
            url: '/map03',
            templateUrl: 'client/templates/map03.html'
        })
        .state('profile', {
            url: '/profile',
            templateUrl: 'client/templates/profile.html'
        })
    $urlRouterProvider.otherwise('start');
}