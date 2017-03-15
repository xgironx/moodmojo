"use strict";

(function(){
  angular
    .module( "moods" )
    .controller( "MoodsShowController", [
      "$stateParams",
      "moodsFactory",
      "songsFactory",
      MoodsShowControllerFunction
    ]);

  function MoodsShowControllerFunction($stateParams, moodsFactory, songsFactory){
    this.moods = moodsFactory.query()
    this.id = $stateParams.id

    let songs = songsFactory
    this.songs = songs.query({id: this.id})

    console.log(this.songs)
    this.getiframe = function (id) {
       return 'https://embed.spotify.com/?uri=' + id

    }



  }
}());
