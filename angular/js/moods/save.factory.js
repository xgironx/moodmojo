"use strict";

(function(){
  angular
    .module( "moods" )
    .factory( "saveFactory", [
      "$resource",
      FactoryFunction
    ])

  function FactoryFunction($resource){
    return $resource("http://localhost:3000/moods/save_mood.json")
  }
}());
