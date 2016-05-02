var googleMap = new google.maps.Map( $('#google-map')[0] );

googleMap.setCenter( { lat: 25.032969, lng: 121.565418 } );
googleMap.setZoom( 7 );

//Taiwan Marker
var marker = new google.maps.Marker ( {
  position: { lat: 25.032969, lng: 121.565418 }
});

marker.setMap( googleMap );

//Taiwan Button Click
$( "#taipeiTaiwan").click(function() {
  googleMap.setCenter( { lat: 25.032969, lng: 121.565418 } );
  googleMap.setZoom( 7 );
  $( "#place-description" ).text("");
  $( "#place-description" ).text("We go to Taiwan every few years to visit my extended family.");
});

//Iceland Marker
var marker = new google.maps.Marker ( {
  position: { lat: 64.12652059999999, lng: -21.817439299999933 }
});

marker.setMap( googleMap );

//Iceland Button Click
$( "#iceland").click(function() {
  googleMap.setCenter( { lat: 64.12652059999999, lng: -21.817439299999933 } );
  googleMap.setZoom( 7 );
  $( "#place-description" ).text("");
  $( "#place-description" ).text("Went to Iceland in 2012 for my company's NSM.");
});

//Japan Marker
var marker = new google.maps.Marker ( {
  position: { lat: 35.689488, lng: 139.691706 }
});

marker.setMap( googleMap );

//Japan Button Click
$( "#tokyoJapan").click(function() {
  googleMap.setCenter( { lat: 35.689488, lng: 139.691706 } );
  googleMap.setZoom( 7 );
  $( "#place-description" ).text("");
  $( "#place-description" ).text("In 2013, we did a quick vacation in Tokyo after my husband's work trip.");
});

//France Marker
var marker = new google.maps.Marker ( {
  position: { lat: 48.856614, lng: 2.352222 }
});

marker.setMap( googleMap );

//France Button Click
$( "#parisFrance").click(function() {
  googleMap.setCenter( { lat: 48.856614, lng: 2.352222 } );
  googleMap.setZoom( 7 );
  $( "#place-description" ).text("");
  $( "#place-description" ).text("In 2014, we did a nice tour around France starting in Paris.");
});

