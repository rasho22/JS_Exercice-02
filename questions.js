/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
//1
function tailleString(toto){
	var result = (toto).length;
	return result;
};

//2:
function remplaceCar(change, avant, apre){
	var result = change.replace(avant, apre);
	return result;
};

//3
function concatString(textun , textdeux){
var result= (textun + textdeux);
return result;
};

//4 on peux utiliser la fonction :substring

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
	return (typeof chaines === 'string');

	};


function AfficherExtensionString (extension){
	 return extension.substr(extension.lastIndexOf(".") + 1);
	
}
AfficherExtensionString('images/photo01.jpg');



function NombreEspaceString (n_espace){

	var result= n_espace.split(' ').length - 1;
	return result;
}

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
};

 function InverseString (inverse){
 	var result= inverse.split("").reverse().join("");
 	return result; 
 };

function minusculeString (minuscule){
	var result=minuscule.toLowerCase();
	return result;

};

function countDistinctCar (compter){
	var result = compter.split("").filter(function(compter, i, x){
	return x.indexOf(compter)===i}).length;
	return result;
};



function sufaceCercle (suface){
	var result=Math.round(Math.PI *suface * suface);
	return result;
};

function hypothenuse (a, b){
	var result=Math.hypot(a,b);
	return result;
}; 

function calculIMC (c, d){
	var result=Math.round((c/(d*d))*100)/100;
	return result;
}