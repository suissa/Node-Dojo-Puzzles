/*
Um determinado ano é bissexto se:
O ano for divisível por 4, mas não divisível por 100, exceto se ele for também divisível por 400.
*/

exports.AnoBissexto = (function () {  

	var AnoBissexto = Object.create( null );

	//creating prototype
	Object.defineProperties(AnoBissexto, {
		"isAnoBissexto": {
			value: false,
			writable: true
		}
	});

	//creating implementation
	AnoBissexto.isAnoBissexto = function(n){
		return !(n % 4) && !( (n % 100) > 0 );

    return AnoBissexto;
} ());

