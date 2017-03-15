// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
// https://api.spotify.com/v1/search?q=middle&type=track&artist=DJ%20Snake

$(document).ready(() => {

  $(".get").on("click", () => {
    console.log(" GET Worked");

    let artist = $(".artist").val();
    let track = $(".track").val();

    let url =  "https://api.spotify.com/v1/search?q="+track+"&type=track&artist="+artist+"&limit=3";


    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: url
    }).done((response) => {
      console.log(response);


        // for(let i =0; i < 3; i++){
        //   // console.log("UI " + artist);
        //   // console.log(response.tracks.items[i].artists[0].name);
        //   if(artist === response.tracks.items[i].artists[0].name){ console.log("FOUND");}
        //   // console.log(response.tracks.items[i].artists);
        // }

        // response.tracks.items.forEach(function(){
        //   if(artist === response.tracks.items.artists.name)
        //   { console.log("FOUND");}
        // });


      //need to validate if no response? fail.
      console.log(response.tracks.items[0].uri);
      // console.log(response.tracks.items[0].name);

      $("#here").append(response);
    }).fail((response)=> {
      console.log("ajax get failed");
    });

  }); //end of get


});//end document ready
