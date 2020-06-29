$(document).ready( function (){
  // ESERCIZIO
  // Attraverso una chiamata ajax all’Api di boolean avremo a
  // disposizione una decina di dischi musicali.
  // Servendoci di handlebars stampiamo tutto a schermo.
  // In questo momento non è importante la parte grafica.



  //chiamo l'api di boolean che contiene le info cd
  $.ajax (

    {
      url: "https://flynn.boolean.careers/exercises/api/array/music",
      method: "GET",
      success: function(data) {

        // album = album singolo

        var album = data.response;

        // invoca la funzione
        stampoAlbum(album);

      } ,

      // se il caricamento dovesse fallire..
      error: function() {

        alert(" Si è verificato un errore");

      }


    }

  );


  // creo una select con diversi generi musicali. In base al genere scelto
  // mostro gli album corrispondenti

  // $("select").change(function(){
  //
  //
  //   // leggo il valore selezionato dall'utente
  //
  //   var genere = $(this).val();
  //
  //   if( genere === "All") {
  //
  //     $(".album").show();
  //
  //   } else {
  //
  //     $(".album").hide();
  //
  //  $(".album."+ genere).show();
  //
  //   }
  //   console.log(genere)
  //   console.log()
  //
  //
  // });




  // -- - -- - -- - - -- -- FUNZIONI


  //  stampo gli album con handlebars

  // creo una funzionr per scrivere i cd all'interno del container

  function stampoAlbum(arrayAlbum) {

    //prendo il template da compilare
    var source = $("#album-template").html();
    var template = Handlebars.compile(source);

    for ( var i = 0; i < arrayAlbum.length; i++ ) {

      var albumSingolo = arrayAlbum[i];

      var html = template(albumSingolo);
      console.log(albumSingolo);

      $(".album-container").append(html);

      // compitlo il template per ogni ALBUM

    }


  }



});
