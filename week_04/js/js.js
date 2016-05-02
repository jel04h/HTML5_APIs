
var mymap = L.map('mapid').setView([47.615349, -122.355782], 16);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'jel04h.00of66ge',
    accessToken: 'pk.eyJ1IjoiamVsMDRoIiwiYSI6ImNpbm81bzA4eTB6bnR1Nmx5bTN2dGo3bnYifQ.U75dx1c3wFw1f1ztyqGUWg'
}).addTo(mymap);

var marker = L.marker( [ 47.615349, -122.355782 ] );
marker.bindPopup( 'Elliott Bay Trail' );
marker.addTo( mymap );

$( "#elliottBay").click(function() {
  //alert( "you clicked!" );
  mymap.panTo(new L.LatLng(47.615349, -122.355782), 16);
});

var marker = L.marker( [ 48.079537, -123.101844 ] );
marker.bindPopup( 'Sequim, WA' );
marker.addTo( mymap );

$( "#sequimWa").click(function() {
  //alert( "you clicked!" );
  mymap.panTo(new L.LatLng(48.079537, -123.1018442), 16);
});

var marker = L.marker( [ 48.551367, -123.078106 ] );
marker.bindPopup( 'San Juan Island, WA' );
marker.addTo( mymap );

$( "#sanJuan").click(function() {
  //alert( "you clicked!" );
  mymap.panTo(new L.LatLng(48.551367, -123.078106), 16);
});

var marker = L.marker( [ 46.879966, -121.726909 ] );
marker.bindPopup( 'Mt Rainier, WA' );
marker.addTo( mymap );

$( "#mtRainier").click(function() {
  //alert( "you clicked!" );
  mymap.panTo(new L.LatLng(46.879966, -121.726909), 16);
});

var marker = L.marker( [ 47.596233, -120.661476 ] );
marker.bindPopup( 'Leavenworth, WA' );
marker.addTo( mymap );

$( "#leavenWorth").click(function() {
  //alert( "you clicked!" );
  mymap.panTo(new L.LatLng(47.596233, -120.661476), 16);
});

var marker = L.marker( [ 25.032969, 121.565418 ] );
marker.bindPopup( 'Taipei, Taiwan' );
marker.addTo( mymap );

$( "#taipeiTaiwan").click(function() {
  //alert( "you clicked!" );
  mymap.panTo(new L.LatLng(25.032969, 121.565418), 16);
});

var marker = L.marker( [ 64.12652059999999, -21.817439299999933 ] );
marker.bindPopup( 'Reykjavik, Iceland' );
marker.addTo( mymap );

$( "#iceland").click(function() {
  //alert( "you clicked!" );
  mymap.panTo(new L.LatLng(64.12652059999999, -21.817439299999933), 16);
});

var marker = L.marker( [ 35.689488, 139.691706 ] );
marker.bindPopup( 'Toyko, Japan' );
marker.addTo( mymap );

$( "#tokyoJapan").click(function() {
  //alert( "you clicked!" );
  mymap.panTo(new L.LatLng(35.689488, 139.691706), 16);
});

var marker = L.marker( [ 48.856614, 2.352222 ] );
marker.bindPopup( 'Paris, France' );
marker.addTo( mymap );

$( "#parisFrance").click(function() {
  //alert( "you clicked!" );
  mymap.panTo(new L.LatLng(48.856614, 2.352222), 16);
});



var inputLat = parseInt( $("#inputLatitude").val );
var inputLong = parseInt( $("#inputLongitude").val );



$( "#goToLocation" ).click(function() {
  mymap.panTo(new L.LatLng(inputLat, inputLong), 16);
  
  console.log(inputLat);
  console.log(inputLong);
  console.log($("#inputLatitude").text)
  
})


