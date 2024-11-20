/*MAPS*/
let pos;
let map;
let infowindow;

function initMap() {
	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(
			function(geolocation) {
				pos = {
					lat: geolocation.coords.latitude,
					lng: geolocation.coords.longitude
				};
				createMap();
			}
		);
	}
}

function createMap(){
	let mapDiv = document.getElementById('map');
	let mapYou = document.getElementById('you');
	let type = mapDiv.getAttribute('data-type');
	let center = new google.maps.LatLng(pos['lat'], pos['lng'])

	map = new google.maps.Map(
		mapDiv,
		{
			center: pos,
			zoom: 17
		}
	);

	you = new google.maps.Marker(
		{
			position: center,
			icon: 
				{
					url: "static/img/icons/you.svg",
					scaledSize: new google.maps.Size(40, 55),
					origin: new google.maps.Point(0, 0),
					anchor: new google.maps.Point(20, 60),
				},
			height: 50,
			map: map
		}

	);

	you.addListener(
		"click",
		function(){
			infowindow.open(
				{
					anchor: you,
					shouldFocus: false,
					content: "YOU",
				}
			);
    		infowindow.setContent('YOU');
		}
	);

	infowindow = new google.maps.InfoWindow(
		{
			map: map
		}
	);

	let searchParams = {
		location: pos,
		radius: 1000,
		type: type
	};
	let search = new google.maps.places.PlacesService(map);
	search.nearbySearch(searchParams, createMarkers);
}

function createMarkers(results, status) {
	if (status == google.maps.places.PlacesServiceStatus.OK) {
		for (var i = 0; i < results.length; i++) {
			createMarker(results[i]);
		}
	}
}

function createMarker(place) {
	if (!place.geometry || !place.geometry.location) return;

	const marker = new google.maps.Marker({
		map: map,
		position: place.geometry.location
	});

	marker.addListener(
		"click",
		function(){
			infowindow.open(
				{
					anchor: marker,
					shouldFocus: false
				}
			);
    		infowindow.setContent(place.name);
		}
	);
}