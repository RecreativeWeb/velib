    
// L UTILISATEUR A DIT OUI POUR LA GEOCALISATION
// on crée une fonction qui crée notre carte avec geocalisation	 

var latitude;
var longitude;

var map;

function avecGeocalisation(position) {

	// Instanciation, on crée une variable conteneur des coordonnées géographiques
 	var point = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

 	// on crée des variables globales qui récuperent les coordonnées pour les placer dans la requete api vers open data pour delimiter la recherche
	latitude = position.coords.latitude;
    longitude = position.coords.longitude;

 	// on centre notre carte sur la géocalisation de l'utilisateur
 	myOptions = {
	  	zoom: 12,
	  	center: point,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		MapOptions: {
			zoomControl: true,
			mapTypeControl: false,
			scaleControl: false,
			streetViewControl: false,
			rotateControl: false
  		}
 	},
 
 	// Envoi de la carte dans la div
 	mapDiv = document.getElementById("map");
 	map = new google.maps.Map(mapDiv, myOptions);

 	//on appelle notre fonction de requete vers l'API Open Data et on récupère les données
	ajaxGet(adresseApi, afficher);
 
 
 	// icon pour positionner l'utilisiteur sur la carte
 	var iconPosition= {
            // Adresse de l'icône personnalisée
            url: 'images/vous.png',
            // Taille de l'icône personnalisée
            size: new google.maps.Size(35, 35),
            // Origine de l'image, souvent (0, 0)
            origin: new google.maps.Point(0,0),
            // L'ancre de l'image. Correspond au point de l'image que l'on raccroche à la carte. Par exemple, si votre îcone est un drapeau, cela correspond à son mâts
            anchor: new google.maps.Point(0, 0)
    };

 	//creation d'un marqueur position de geocalisation
	marker = new google.maps.Marker({
  		position: point,
  		map: map,
  		icon:iconPosition
	});
}


// L UTILISATEUR A DIT NON POUR LA GEOCALISATION
	// l'utilisateur ne valide pas la géocalisation, on le dirige directement sur la zone de location centrée sur Paris	

function sansGeocalisation(){
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12,
		center: {lat: 48.856614, lng: 2.34},
		mapTypeId: google.maps.MapTypeId.ROADMAP,
	  	MapOptions: {
			zoomControl: true,
			mapTypeControl: false,
			scaleControl: false,
			streetViewControl: false,
			rotateControl: false
	  	}
	});

	//on appelle notre fonction de requete vers l'API Open Data et on récupère les données
	ajaxGet(adresseApi, afficher);
}


/*

var maCarte = {
	positionCentre,
	centrage: function (position){
		map.setCenter(new google.maps.LatLng( position.coords.latitude, position.coords.longitude ) );

	}
};

var carteObjet=Object.create(maCarte);

*/





