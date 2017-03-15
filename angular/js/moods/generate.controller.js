"use strict";

(function(){
  angular
    .module( "moods" )
    .controller( "MoodsGenerateController", [
      MoodsGenerateControllerFunction
    ]);

  function MoodsGenerateControllerFunction(){

    this.hello = function () {
      console.log('hey there you made it here')
    }
  }
}());
