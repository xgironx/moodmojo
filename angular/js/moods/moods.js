"use strict";

(function(){
  angular
  .module("moods", [
    "ngResource"
  ])
  .config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://embed.spotify.com/?uri=**',
  ])
  })
}());
