var assert 		   = require('assert')
	,util 		   = require('util')
	,total         = 0
	,good		   = 0
	,total		   = 0
    ,bissexto      = 1600
    ,not_bissexto  = 1999
    ,fizzbuzz 	   = require('../../lib/anobissexto-module.js');
    
try {
    var actual      = fizzbuzz.isAnoBissexto( bissexto );
    var expected    = true;
    var message     =  bissexto+" is Ano Bissexto";

    console.log("assert if "+bissexto+" is Ano Bissexto");
	assert.ok(fizzbuzz.isAnoBissexto( bissexto ), bissexto+" is Ano Bissexto");
    passed();
} catch (err){ 
    writeException(err); 
}

try {
    var actual      = fizzbuzz.isAnoBissexto( not_bissexto );
    var expected    = false;
    var message     =  not_bissexto+" is NOT Ano Bissexto";

    console.log("assert if "+not_bissexto+" is NOT Ano Bissexto");
    assert.equal(actual, expected, message);
    passed();
} catch (err){ 
    writeException(err); 
}
 


console.log("%d of %d tests passed", good, total);
 
//We need to catch the exception
function writeException(err) {
    console.log("Test failed!");
    util.inspect(err);
    if(err["name"] === "AssertionError") {
        console.log("Message: " + (err["message"] || "None"));
        console.log("Expected: " + err["expected"]);
        console.log("Actual: " + err["actual"]);
        console.log("Operation: " + err["operator"]);
    }
    console.log("");
    total = total + 1;
}
 
function passed() {
    good = good + 1;
    total = total + 1;
    console.log("Test passed!\n");
}