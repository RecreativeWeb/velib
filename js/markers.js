//var markers = [];

//fonction de callback de l'appel ajax
function afficher(reponse) {

    console.log(JSON.parse(reponse));

    //on récupère dans une variable l'objet JSON que l'on parse (compile) en un objet javascript
    var objectTable= JSON.parse(reponse);
    //on récupère dans une variable les enregistrements de notre objet stations
    var stations= objectTable.records;

    //console.log(stations);

    //on boucle sur notre tableau d'objet stations 
    for(var i=0; i<stations.length;i++){

        //console.log(stations[i].fields.name);


        // icon personnalisé pour nos marqueurs
        var icon= {
            // Adresse de l'icône personnalisée
            url: 'images/iconVelo.png',
            // Taille de l'icône personnalisée
            size: new google.maps.Size(35, 35),
            // Origine de l'image, souvent (0, 0)
            origin: new google.maps.Point(0,0),
            // L'ancre de l'image. Correspond au point de l'image que l'on raccroche à la carte. Par exemple, si votre îcone est un drapeau, cela correspond à son mâts
            anchor: new google.maps.Point(0, 0)
        };

        //on créé un marqueur pour chaque station parcourue selon les coordonnées géographiques
        var marker = new google.maps.Marker({
            position: {lat: stations[i].fields.position[0] , lng: stations[i].fields.position[1]},
            map:map,
            title: stations[i].fields.name,
            icon:icon

            //markers.push(marker);

        });

        marker.setMap(map);

        //
       (function(i) {

            //on ecoute l'evenement click sur les marqueurs
            marker.addListener('click', function() {

                //console.log(stations[i].fields.name);

                //on rempli le paragraphe dédié au nom de la station
                document.getElementById("station").innerHTML=stations[i].fields.name;
                //on rempli le paragraphe dédié à l'adresse de la station
                document.getElementById("adresse").innerHTML=stations[i].fields.address;
                //on rempli le paragraphe dédié au nombre de place libre pour garer
                document.getElementById("places").innerHTML=stations[i].fields.available_bike_stands;
                //on rempli le paragraphe dédié au nombre de vélos disponibles
                document.getElementById("velos").innerHTML=stations[i].fields.available_bikes;

                //creation du bouton de reservation si des vélos sont disponibles
                //creation d'une condition, si velo->reservation, si pas de velo->pas de reservation possible
                if(stations[i].fields.available_bikes>0){

                    var reservation=document.createElement("a");
                    var reservationNom=document.createTextNode("Réservation");

                    reservation.classList.add("boutonResa");
                    reservation.setAttribute("onclick","javascript:openCanvas()");

                    document.getElementById("bouton").appendChild(reservation);
                    reservation.appendChild(reservationNom);
                }
                else{
                    document.getElementById("bouton").innerHTML="Pas de vélos disponibles, vueillez selectionner une autre borne";
                }

            });

        })(i); 
    }
}

/*

//déclaration d'une fonction pour supprimer les marqueurs de la carte
//function supprMarqueurs() { 
   // setMapOnAll(null);
//}


//on ecoute l'evenement drag sur la carte pour supprimer des marqueurs et en faire apparaitre d'autres
/*map.addListener(map,"dragstart",function(){
    supprMarqueurs();
});

//on ecoute l'evenement drag sur la carte pour supprimer des marqueurs et en faire apparaitre d'autres
map.addListener(map,"dragend",function(){
    afficher();
});
*/