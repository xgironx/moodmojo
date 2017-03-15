"use strict";

(function(){
  angular
    .module( "moods" )
    .controller( "MoodsIndexController", [
      "moodsFactory",
      "songsFactory",
      MoodsIndexControllerFunction
    ]);

  function MoodsIndexControllerFunction(moodsFactory, songsFactory){
    this.moods = moodsFactory.query()
    let x = this.moods
    console.log(x.songs)

  }
}());
