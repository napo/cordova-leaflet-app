'use strict';

angular.module('LeafletIonic', ['ionic', 'config', 'ngCordova',
  'LeafletIonic.directives',
  'LeafletIonic.controllers',
  'LeafletIonic.services'])

.run(['$ionicPlatform', function(ionicPlatform) {

  ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

  });

}])

.config(['$stateProvider', '$urlRouterProvider', function(stateProvider, urlRouterProvider) {
  stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.map', {
      url: "/map",
      views: {
        'menuContent' :{
          templateUrl: "templates/map.html"
        }
      }
    });

  // If none of the above states are matched, use this as the fallback
  urlRouterProvider.otherwise('/app/map');

}]);

// Define application namespace
var LeafletIonic = {};
