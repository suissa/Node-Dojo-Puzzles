module.exports = {
	isAnoBissexto: function(n){
		return !(n % 4) && !( (n % 100) > 0 );
	}
}