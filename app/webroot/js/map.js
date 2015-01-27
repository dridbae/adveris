function initialize_map() {
	var mapOptions = {
		center: {
			lat: 48.8566140,
			lng: 2.3522219
		},
		zoom: 5
	};
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	var myLatlngTours = new google.maps.LatLng(47.3941440, 0.6848400);
	var markerTours = new google.maps.Marker({
		position: myLatlngTours,
		map: map,
		title: "Centre d'affaire de Tours"
	});
	var myWindowOptionsTours = {
		content: '<h6>Centre d\'affaire de Tours</h6>' + '<p><a href="#">Envoyer un email de renseignement</a></p>'
	};
	var myInfoWindowTours = new google.maps.InfoWindow(myWindowOptionsTours);
	google.maps.event.addListener(markerTours, 'click', function() {
		myInfoWindowTours.open(map, markerTours);
	});
		$( ".Tours" ).bind( "click", function() {
map.setCenter(markerTours.getPosition());
map.setZoom(8);
});
	
	
		var myLatlngNantes = new google.maps.LatLng(47.2183710	, -1.5536210);
	var markerNantes = new google.maps.Marker({
		position: myLatlngNantes,
		map: map,
		title: "Centre d'affaire de Nantes"
	});
	var myWindowOptionsNantes = {
		content: '<h6>Centre d\'affaire de Nantes</h6>' + '<p><a href="#">Envoyer un email de renseignement</a></p>'
	};
	var myInfoWindowNantes = new google.maps.InfoWindow(myWindowOptionsNantes);
	google.maps.event.addListener(markerNantes, 'click', function() {
		myInfoWindowNantes.open(map, markerNantes);
	});
	
		$( ".Nantes" ).bind( "click", function() {
map.setCenter(markerNantes.getPosition());
map.setZoom(8);
});
			var myLatlngMans = new google.maps.LatLng(48.0061100	, 0.1995560);
	var markerMans = new google.maps.Marker({
		position: myLatlngMans,
		map: map,
		title: "Centre d'affaire de Mans"
	});
	var myWindowOptionsMans = {
		content: '<h6>Centre d\'affaire de Mans</h6>' + '<p><a href="#">Envoyer un email de renseignement</a></p>'
	};
	var myInfoWindowMans = new google.maps.InfoWindow(myWindowOptionsMans);
	google.maps.event.addListener(markerMans, 'click', function() {
		myInfoWindowMans.open(map, markerMans);
	});
				$( ".Mans" ).bind( "click", function() {
map.setCenter(markerMans.getPosition());
map.setZoom(8);
});
				var myLatlngQuimper = new google.maps.LatLng(47.9975420	, -4.0978990);
	var markerQuimper = new google.maps.Marker({
		position: myLatlngQuimper,
		map: map,
		title: "Centre d'affaire de Quimper"
	});
	var myWindowOptionsQuimper = {
		content: '<h6>Centre d\'affaire de Quimper</h6>' + '<p><a href="#">Envoyer un email de renseignement</a></p>'
	};
	var myInfoWindowQuimper = new google.maps.InfoWindow(myWindowOptionsQuimper);
	google.maps.event.addListener(markerQuimper, 'click', function() {
		myInfoWindowQuimper.open(map, markerQuimper);
	});
		$( ".Quimper" ).bind( "click", function() {
map.setCenter(markerQuimper.getPosition());
map.setZoom(8);
});
					var myLatlngCaen = new google.maps.LatLng(49.1828630, -0.3706790);
	var markerCaen = new google.maps.Marker({
		position: myLatlngCaen,
		map: map,
		title: "Centre d'affaire de Caen"
	});
	var myWindowOptionsCaen = {
		content: '<h6>Centre d\'affaire de Caen</h6>' + '<p><a href="#">Envoyer un email de renseignement</a></p>'
	};
	var myInfoWindowCaen = new google.maps.InfoWindow(myWindowOptionsCaen);
	google.maps.event.addListener(markerCaen, 'click', function() {
		myInfoWindowCaen.open(map, markerCaen);
	});
		$( ".Caen" ).bind( "click", function() {
map.setCenter(markerCaen.getPosition());
map.setZoom(8);
});
						var myLatlngRouen = new google.maps.LatLng(49.4432320, 1.0999710);
	var markerRouen = new google.maps.Marker({
		position: myLatlngRouen,
		map: map,
		title: "Centre d'affaire de Rouen"
	});
	var myWindowOptionsRouen = {
		content: '<h6>Centre d\'affaire de Rouen</h6>' + '<p><a href="#">Envoyer un email de renseignement</a></p>'
	};
	var myInfoWindowRouen = new google.maps.InfoWindow(myWindowOptionsRouen);
	google.maps.event.addListener(markerRouen, 'click', function() {
		myInfoWindowRouen.open(map, markerRouen);
	});
		$( ".Rouen" ).bind( "click", function() {
map.setCenter(markerRouen.getPosition());
map.setZoom(8);
});
							var myLatlngReims = new google.maps.LatLng(49.2583290, 4.0316960);
	var markerReims = new google.maps.Marker({
		position: myLatlngReims,
		map: map,
		title: "Centre d'affaire de Reims"
	});
	var myWindowOptionsReims = {
		content: '<h6>Centre d\'affaire de Reims</h6>' + '<p><a href="#">Envoyer un email de renseignement</a></p>'
	};
	var myInfoWindowReims = new google.maps.InfoWindow(myWindowOptionsReims);
	google.maps.event.addListener(markerReims, 'click', function() {
		myInfoWindowReims.open(map, markerReims);
	});
		$( ".Reims" ).bind( "click", function() {
map.setCenter(markerReims.getPosition());
map.setZoom(8);
});
								var myLatlngNancy = new google.maps.LatLng(48.6920540, 6.1844170);
	var markerNancy = new google.maps.Marker({
		position: myLatlngNancy,
		map: map,
		title: "Centre d'affaire de Nancy"
	});
	var myWindowOptionsNancy = {
		content: '<h6>Centre d\'affaire de Nancy</h6>' + '<p><a href="#">Envoyer un email de renseignement</a></p>'
	};
	var myInfoWindowNancy = new google.maps.InfoWindow(myWindowOptionsNancy);
	google.maps.event.addListener(markerNancy, 'click', function() {
		myInfoWindowNancy.open(map, markerNancy);
	});
	$( ".Nancy" ).bind( "click", function() {
map.setCenter(markerNancy.getPosition());
map.setZoom(8);
});
var myLatlngMulhouse = new google.maps.LatLng(47.7508390, 7.3358880);
	var markerMulhouse = new google.maps.Marker({
		position: myLatlngMulhouse,
		map: map,
		title: "Centre d'affaire de Mulhouse"
	});
	var myWindowOptionsMulhouse = {
		content: '<h6>Centre d\'affaire de Mulhouse</h6>' + '<p><a href="#">Envoyer un email de renseignement</a></p>'
	};
	var myInfoWindowMulhouse = new google.maps.InfoWindow(myWindowOptionsMulhouse);
	google.maps.event.addListener(markerMulhouse, 'click', function() {
		myInfoWindowMulhouse.open(map, markerMulhouse);
	});
	$( ".Mulhouse" ).bind( "click", function() {
map.setCenter(markerMulhouse.getPosition());
map.setZoom(8);
});


var myLatlngBesancon = new google.maps.LatLng(47.2378290, 6.0240539);
	var markerBesancon = new google.maps.Marker({
		position: myLatlngBesancon,
		map: map,
		title: "Centre d'affaire de Besancon"
	});
	var myWindowOptionsBesancon = {
		content: '<h6>Centre d\'affaire de Besancon</h6>' + '<p><a href="#">Envoyer un email de renseignement</a></p>'
	};
	var myInfoWindowBesancon = new google.maps.InfoWindow(myWindowOptionsBesancon);
	google.maps.event.addListener(markerBesancon, 'click', function() {
		myInfoWindowBesancon.open(map, markerBesancon);
	});
	$( ".Besancon" ).bind( "click", function() {
map.setCenter(markerBesancon.getPosition());
map.setZoom(8);
});


var myLatlngLyon = new google.maps.LatLng(45.7655399	, 4.8451004);
	var markerLyon = new google.maps.Marker({
		position: myLatlngLyon,
		map: map,
		title: "Centre d'affaire de Lyon"
	});
	var myWindowOptionsLyon = {
		content: '<h6>Centre d\'affaire de Lyon</h6>' + '<p><a href="#">Envoyer un email de renseignement</a></p>'
	};
	var myInfoWindowLyon = new google.maps.InfoWindow(myWindowOptionsLyon);
	google.maps.event.addListener(markerLyon, 'click', function() {
		myInfoWindowLyon.open(map, markerLyon);
	});
	$( ".Lyon" ).bind( "click", function() {
map.setCenter(markerLyon.getPosition());
map.setZoom(8);
});

var myLatlngValence = new google.maps.LatLng(44.9333930, 4.8923600);
	var markerValence = new google.maps.Marker({
		position: myLatlngValence,
		map: map,
		title: "Centre d'affaire de Valence"
	});
	var myWindowOptionsValence = {
		content: '<h6>Centre d\'affaire de Valence</h6>' + '<p><a href="#">Envoyer un email de renseignement</a></p>'
	};
	var myInfoWindowValence = new google.maps.InfoWindow(myWindowOptionsValence);
	google.maps.event.addListener(markerValence, 'click', function() {
		myInfoWindowValence.open(map, markerValence);
	});
	$( ".Valence" ).bind( "click", function() {
map.setCenter(markerValence.getPosition());
map.setZoom(8);
});

var myLatlngGrenoble = new google.maps.LatLng(45.1885290, 5.7245240);
	var markerGrenoble = new google.maps.Marker({
		position: myLatlngGrenoble,
		map: map,
		title: "Centre d'affaire de Grenoble"
	});
	var myWindowOptionsGrenoble = {
		content: '<h6>Centre d\'affaire de Grenoble</h6>' + '<p><a href="#">Envoyer un email de renseignement</a></p>'
	};
	var myInfoWindowGrenoble = new google.maps.InfoWindow(myWindowOptionsGrenoble);
	google.maps.event.addListener(markerGrenoble, 'click', function() {
		myInfoWindowGrenoble.open(map, markerGrenoble);
	});
	$( ".Grenoble" ).bind( "click", function() {
map.setCenter(markerGrenoble.getPosition());
map.setZoom(8);
});

var myLatlngToulouse = new google.maps.LatLng(43.6046520, 1.4442090
);
	var markerToulouse = new google.maps.Marker({
		position: myLatlngToulouse,
		map: map,
		title: "Centre d'affaire de Toulouse"
	});
	var myWindowOptionsToulouse = {
		content: '<h6>Centre d\'affaire de Toulouse</h6>' + '<p><a href="#">Envoyer un email de renseignement</a></p>'
	};
	var myInfoWindowToulouse = new google.maps.InfoWindow(myWindowOptionsToulouse);
	google.maps.event.addListener(markerToulouse, 'click', function() {
		myInfoWindowToulouse.open(map, markerToulouse);
	});
	$( ".Toulouse" ).bind( "click", function() {
map.setCenter(markerToulouse.getPosition());
map.setZoom(8);
});

var myLatlngMontpellier = new google.maps.LatLng(43.6107690	, 3.8767160
);
	var markerMontpellier = new google.maps.Marker({
		position: myLatlngMontpellier,
		map: map,
		title: "Centre d'affaire de Montpellier"
	});
	var myWindowOptionsMontpellier = {
		content: '<h6>Centre d\'affaire de Montpellier</h6>' + '<p><a href="#">Envoyer un email de renseignement</a></p>'
	};
	var myInfoWindowMontpellier = new google.maps.InfoWindow(myWindowOptionsMontpellier);
	google.maps.event.addListener(markerMontpellier, 'click', function() {
		myInfoWindowMontpellier.open(map, markerMontpellier);
	});
	$( ".Montpellier" ).bind( "click", function() {
map.setCenter(markerMontpellier.getPosition());
map.setZoom(8);
});

var myLatlngAvignon = new google.maps.LatLng(43.9493170, 4.8055280
);
	var markerAvignon = new google.maps.Marker({
		position: myLatlngAvignon,
		map: map,
		title: "Centre d'affaire de Avignon"
	});
	var myWindowOptionsAvignon = {
		content: '<h6>Centre d\'affaire de Avignon</h6>' + '<p><a href="#">Envoyer un email de renseignement</a></p>'
	};
	var myInfoWindowAvignon = new google.maps.InfoWindow(myWindowOptionsAvignon);
	google.maps.event.addListener(markerAvignon, 'click', function() {
		myInfoWindowAvignon.open(map, markerAvignon);
	});
	$( ".Avignon" ).bind( "click", function() {
map.setCenter(markerAvignon.getPosition());
map.setZoom(8);
});

var myLatlngMarseille = new google.maps.LatLng(43.2964820, 5.3697800
);
	var markerMarseille = new google.maps.Marker({
		position: myLatlngMarseille,
		map: map,
		title: "Centre d'affaire de Marseille"
	});
	var myWindowOptionsMarseille = {
		content: '<h6>Centre d\'affaire de Marseille</h6>' + '<p><a href="#">Envoyer un email de renseignement</a></p>'
	};
	var myInfoWindowMarseille = new google.maps.InfoWindow(myWindowOptionsMarseille);
	google.maps.event.addListener(markerMarseille, 'click', function() {
		myInfoWindowMarseille.open(map, markerMarseille);
	});
	$( ".Marseille" ).bind( "click", function() {
map.setCenter(markerMarseille.getPosition());
map.setZoom(8);
});

var myLatlngAubagne = new google.maps.LatLng(43.2926781, 5.5676425
);
	var markerAubagne = new google.maps.Marker({
		position: myLatlngAubagne,
		map: map,
		title: "Centre d'affaire de Aubagne"
	});
	var myWindowOptionsAubagne = {
		content: '<h6>Centre d\'affaire de Aubagne</h6>' + '<p><a href="#">Envoyer un email de renseignement</a></p>'
	};
	var myInfoWindowAubagne = new google.maps.InfoWindow(myWindowOptionsAubagne);
	google.maps.event.addListener(markerAubagne, 'click', function() {
		myInfoWindowAubagne.open(map, markerAubagne);
	});
	$( ".Aubagne" ).bind( "click", function() {
map.setCenter(markerAubagne.getPosition());
map.setZoom(8);
});

var myLatlngNimes = new google.maps.LatLng(43.8366990, 4.3600540
);
	var markerNimes = new google.maps.Marker({
		position: myLatlngNimes,
		map: map,
		title: "Centre d'affaire de Nimes"
	});
	var myWindowOptionsNimes = {
		content: '<h6>Centre d\'affaire de Nimes</h6>' + '<p><a href="#">Envoyer un email de renseignement</a></p>'
	};
	var myInfoWindowNimes = new google.maps.InfoWindow(myWindowOptionsNimes);
	google.maps.event.addListener(markerNimes, 'click', function() {
		myInfoWindowNimes.open(map, markerNimes);
	});
	$( ".Nimes" ).bind( "click", function() {
map.setCenter(markerNimes.getPosition());
map.setZoom(8);
});


var myLatlngManosque = new google.maps.LatLng(43.8357440, 5.7909160
);
	var markerManosque = new google.maps.Marker({
		position: myLatlngManosque,
		map: map,
		title: "Centre d'affaire de Manosque"
	});
	var myWindowOptionsManosque = {
		content: '<h6>Centre d\'affaire de Manosque</h6>' + '<p><a href="#">Envoyer un email de renseignement</a></p>'
	};
	var myInfoWindowManosque = new google.maps.InfoWindow(myWindowOptionsManosque);
	google.maps.event.addListener(markerManosque, 'click', function() {
		myInfoWindowManosque.open(map, markerManosque);
	});
	$( ".Manosque" ).bind( "click", function() {
map.setCenter(markerManosque.getPosition());
map.setZoom(8);
});

var myLatlngOrange = new google.maps.LatLng(44.1380989, 4.8075110
);
	var markerOrange = new google.maps.Marker({
		position: myLatlngOrange,
		map: map,
		title: "Centre d'affaire de Orange"
	});
	var myWindowOptionsOrange = {
		content: '<h6>Centre d\'affaire de Orange</h6>' + '<p><a href="#">Envoyer un email de renseignement</a></p>'
	};
	var myInfoWindowOrange = new google.maps.InfoWindow(myWindowOptionsOrange);
	google.maps.event.addListener(markerOrange, 'click', function() {
		myInfoWindowOrange.open(map, markerOrange);
	});
	$( ".Orange" ).bind( "click", function() {
map.setCenter(markerOrange.getPosition());
map.setZoom(8);
});


var myLatlngAixenprovence = new google.maps.LatLng(43.5297420, 5.4474270
);
	var markerAixenprovence = new google.maps.Marker({
		position: myLatlngAixenprovence,
		map: map,
		title: "Centre d'affaire de Aixenprovence"
	});
	var myWindowOptionsAixenprovence = {
		content: '<h6>Centre d\'affaire de Aixenprovence</h6>' + '<p><a href="#">Envoyer un email de renseignement</a></p>'
	};
	var myInfoWindowAixenprovence = new google.maps.InfoWindow(myWindowOptionsAixenprovence);
	google.maps.event.addListener(markerAixenprovence, 'click', function() {
		myInfoWindowAixenprovence.open(map, markerAixenprovence);
	});
	$( ".Aixenprovence" ).bind( "click", function() {
map.setCenter(markerAixenprovence.getPosition());
map.setZoom(8);
});


var myLatlngCreteil = new google.maps.LatLng(48.7903670, 2.4555720
);
	var markerCreteil = new google.maps.Marker({
		position: myLatlngCreteil,
		map: map,
		title: "Centre d'affaire de Creteil"
	});
	var myWindowOptionsCreteil = {
		content: '<h6>Centre d\'affaire de Creteil</h6>' + '<p><a href="#">Envoyer un email de renseignement</a></p>'
	};
	var myInfoWindowCreteil = new google.maps.InfoWindow(myWindowOptionsCreteil);
	google.maps.event.addListener(markerCreteil, 'click', function() {
		myInfoWindowCreteil.open(map, markerCreteil);
	});
	$( ".Creteil" ).bind( "click", function() {
map.setCenter(markerCreteil.getPosition());
map.setZoom(8);
});


var myLatlngRungis = new google.maps.LatLng(48.7470400, 2.3515000
);
	var markerRungis = new google.maps.Marker({
		position: myLatlngRungis,
		map: map,
		title: "Centre d'affaire de Rungis"
	});
	var myWindowOptionsRungis = {
		content: '<h6>Centre d\'affaire de Rungis</h6>' + '<p><a href="#">Envoyer un email de renseignement</a></p>'
	};
	var myInfoWindowRungis = new google.maps.InfoWindow(myWindowOptionsRungis);
	google.maps.event.addListener(markerRungis, 'click', function() {
		myInfoWindowRungis.open(map, markerRungis);
	});
	$( ".Rungis" ).bind( "click", function() {
map.setCenter(markerRungis.getPosition());
map.setZoom(8);
});

var myLatlngStmaur = new google.maps.LatLng(48.8028874, 2.4813091
);
	var markerStmaur = new google.maps.Marker({
		position: myLatlngStmaur,
		map: map,
		title: "Centre d'affaire de Stmaur"
	});
	var myWindowOptionsStmaur = {
		content: '<h6>Centre d\'affaire de Stmaur</h6>' + '<p><a href="#">Envoyer un email de renseignement</a></p>'
	};
	var myInfoWindowStmaur = new google.maps.InfoWindow(myWindowOptionsStmaur);
	google.maps.event.addListener(markerStmaur, 'click', function() {
		myInfoWindowStmaur.open(map, markerStmaur);
	});
	$( ".Stmaur" ).bind( "click", function() {
map.setCenter(markerStmaur.getPosition());
map.setZoom(8);
});


var myLatlngMarne = new google.maps.LatLng(48.8592760, 2.5985050
);
	var markerMarne = new google.maps.Marker({
		position: myLatlngMarne,
		map: map,
		title: "Centre d'affaire de Marne"
	});
	var myWindowOptionsMarne = {
		content: '<h6>Centre d\'affaire de Marne</h6>' + '<p><a href="#">Envoyer un email de renseignement</a></p>'
	};
	var myInfoWindowMarne = new google.maps.InfoWindow(myWindowOptionsMarne);
	google.maps.event.addListener(markerMarne, 'click', function() {
		myInfoWindowMarne.open(map, markerMarne);
	});
	$( ".Marne" ).bind( "click", function() {

map.setCenter(markerMarne.getPosition());
map.setZoom(8);
});

var myLatlngAsnieres = new google.maps.LatLng(48.9141550, 2.2853690
);
	var markerAsnieres = new google.maps.Marker({
		position: myLatlngAsnieres,
		map: map,
		title: "Centre d'affaire de Asnieres"
	});
	var myWindowOptionsAsnieres = {
		content: '<h6>Centre d\'affaire de Asnieres</h6>' + '<p><a href="#">Envoyer un email de renseignement</a></p>'
	};
	var myInfoWindowAsnieres = new google.maps.InfoWindow(myWindowOptionsAsnieres);
	google.maps.event.addListener(markerAsnieres, 'click', function() {
		myInfoWindowAsnieres.open(map, markerAsnieres);
	});
	$( ".Asnieres" ).bind( "click", function() {

map.setCenter(markerAsnieres.getPosition());
map.setZoom(8);
});

var myLatlngParis4 = new google.maps.LatLng(48.8534275, 2.3582788
);
	var markerParis4 = new google.maps.Marker({
		position: myLatlngParis4,
		map: map,
		title: "Centre d'affaire de Paris4"
	});
	var myWindowOptionsParis4 = {
		content: '<h6>Centre d\'affaire de Paris4</h6>' + '<p><a href="#">Envoyer un email de renseignement</a></p>'
	};
	var myInfoWindowParis4 = new google.maps.InfoWindow(myWindowOptionsParis4);
	google.maps.event.addListener(markerParis4, 'click', function() {
		myInfoWindowParis4.open(map, markerParis4);
	});
	$( ".Paris4" ).bind( "click", function() {

map.setCenter(markerParis4.getPosition());
map.setZoom(8);
});

var myLatlngParis17 = new google.maps.LatLng(48.8534275, 2.3582788
);
	var markerParis17 = new google.maps.Marker({
		position: myLatlngParis17,
		map: map,
		title: "Centre d'affaire de Paris17"
	});
	var myWindowOptionsParis17 = {
		content: '<h6>Centre d\'affaire de Paris17</h6>' + '<p><a href="#">Envoyer un email de renseignement</a></p>'
	};
	var myInfoWindowParis17 = new google.maps.InfoWindow(myWindowOptionsParis17);
	google.maps.event.addListener(markerParis17, 'click', function() {
		myInfoWindowParis17.open(map, markerParis17);
	});
	$( ".Paris17" ).bind( "click", function() {

map.setCenter(markerParis17.getPosition());
map.setZoom(8);
});

var myLatlngPtamousson = new google.maps.LatLng(48.9032900, 6.0548680
);
	var markerPtamousson = new google.maps.Marker({
		position: myLatlngPtamousson,
		map: map,
		title: "Centre d'affaire de Ptamousson"
	});
	var myWindowOptionsPtamousson = {
		content: '<h6>Centre d\'affaire de Ptamousson</h6>' + '<p><a href="#">Envoyer un email de renseignement</a></p>'
	};
	var myInfoWindowPtamousson = new google.maps.InfoWindow(myWindowOptionsPtamousson);
	google.maps.event.addListener(markerPtamousson, 'click', function() {
		myInfoWindowPtamousson.open(map, markerPtamousson);
	});
	$( ".Ptamousson" ).bind( "click", function() {

map.setCenter(markerPtamousson.getPosition());
map.setZoom(8);
});

	$( ".Paris" ).bind( "click", function() {
map.setCenter(markerParis17.getPosition());
map.setZoom(9);
});
}