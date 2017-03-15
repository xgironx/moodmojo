"use strict";

(function(){
  angular
  .module("mood_player", [
    "ui.router",
    "moods",
    "nav"
  ])
  .config([
    "$urlRouterProvider",
    ReRouterFunction
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])

  function ReRouterFunction($urlRouterProvider) {
    $urlRouterProvider
    .when("", "/moods/welcome")
  }

  function RouterFunction($stateProvider) {
    $stateProvider
    .state("MoodsWelcome", {
      url: "/moods/welcome",
      templateUrl: "js/moods/welcome.html",
      controller: "MoodsWelcomeController",
      controllerAs: "MoodsWelcomeVM"
    })
    .state("MoodsIndex", {
      url: "/moods/index",
      templateUrl: "js/moods/index.html",
      controller: "MoodsIndexController",
      controllerAs: "MoodsIndexVM"
    })
    .state("MoodsNew", {
      url: "/moods/:id/new",
      templateUrl: "js/moods/new.html",
      controller: "MoodsNewController",
      controllerAs: "MoodsNewVM"
    })
    .state("MoodsGenerate", {
      url: "/moods/generate",
      templateUrl: "js/moods/generate.html",
      controller: "MoodsGenerateController",
      controllerAs: "MoodsGenerateVM"
    })
    .state("MoodsShow", {
      url: "/moods/:id/show",
      templateUrl: "js/moods/show.html",
      controller: "MoodsShowController",
      controllerAs: "MoodsShowVM"
    })

  }
}());
