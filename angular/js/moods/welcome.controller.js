"use strict";

(function(){
  angular
    .module( "moods" )
    .controller( "MoodsWelcomeController", [
      MoodsWelcomeControllerFunction
    ]);

  function MoodsWelcomeControllerFunction(){

    this.hello = function () {
      console.log('hey there you made it here')
    }
  }
}());
