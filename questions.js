/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */

/**
 * Exercices sur les nombres et les caluls mathématiques
 */

function tailleString(toto){
	var result = (toto).length;
	return result;
};

function remplaceCar(change, avant, apre){
	var result = change.replace(avant, apre);
	return result;
};

function concatString(textun , textdeux){
var result= (textun + textdeux);
return result;
};

function afficherCar(cinq, n){
 var select = cinq.charAt(n-1);
 return select;
};

function afficherNCar (neufpremiers, n){
var result= neufpremiers.slice(0,n);
return result;
};

function majusculeString(maj){
var result= maj.toUpperCase();
return result;
};

function SupprEspaceString(suprimer){
var result= suprimer.trim();
return result;
};
function IsString(chaines){
	if (typeof chaines === 'string'){
		return true;
	} 
	else {
		return false;
	}
};

function AfficherExtensionString (extension){
	 return extension.substr(extension.lastIndexOf(".") + 1);
	
}
AfficherExtensionString('images/photo01.jpg');


function NombreEspaceString (n_espace){

	var result= n_espace.split(' ').length - 1;
	return result;
}

//bonus:


function calculPuissance (x, y){
	var result=Math.pow (x, y);
	return result;
};

function valeurAbsolue (z){
	var result= Math.abs(z);
	return result;
};

function valeurAbsolueArray (tab){
	return result= tab.map(valeurAbsolue);
}