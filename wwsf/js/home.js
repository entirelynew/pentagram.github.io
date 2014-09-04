
var map;
var brooklyn = new google.maps.LatLng(16.467694, -42.932149);



var MY_MAPTYPE_ID = 'custom_style';




function initialize() {

  var featureOpts = [
    {
      stylers: [
        { hue: '#fff' },
        { visibility: 'on' },
        { gamma: 0.57 },
        { weight: 0.4 },
        { saturation: -100 }
      ]
    },
    {
      elementType: 'labels',
      stylers: [
        { visibility: 'on' }
      ]
    }
  ];

  var mapOptions = {
    zoom: 3,
    center: brooklyn,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var styledMapOptions = {
    name: 'Custom Style'
  };

  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);


var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

  //event markers go here


var latlng_one = new google.maps.LatLng(39.984577, -83.018692);

var marker = new google.maps.Marker({
    position: latlng_one,
    map: map,
    title:"Hello World!"
});










  var maxZoom = 5; 
  var minZoom = 1; 
          google.maps.event.addListener(map, 'zoom_changed', function(){ 
             if(map.getZoom() < maxZoom){ 
                          map.setZoom(maxZoom); 
                  }else if(map.getZoom() > minZoom){ 
                          map.setZoom(minZoom); 
                  } 
          }); 





}

google.maps.event.addDomListener(window, 'load', initialize);
  

//JQeury


    $(function () {

        var height = $('.square').width; 

        $(".square").css("height", height);
    });

