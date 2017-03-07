
// déclaration de la fonction callback de l'appel vers l'api google map pour afficher la carte
function initMap(){ 
    // On vérifie si le navigateur supporte la géolocalisation
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(avecGeocalisation, sansGeocalisation,{enableHighAccuracy:true}); 
    }
    else {
        alert("Votre navigateur ne prend pas en compte la géolocalisation HTML5");
    }
}




