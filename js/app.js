//http://api.jquery.com/jquery.getjson/

(function() {
  var flickerURL = "https://api.flickr.com/services/feeds/photos_public.gne?ids=121060987%40N03&tags=Turkey&format=json&jsoncallback=?";
  $.getJSON(flickerURL)
    .done(function( data ) {
      $.each( data.items, function( i, item ) {
        $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
        if ( i === 11 ) {
          return false;
        }
      });
    });
})();


