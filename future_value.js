var $ = function (id) {
    return document.getElementById(id);
}

var calculate_click = function () {
    var investment = parseFloat( $("investment").value );
    var annualRate = parseFloat( $("rate").value );
    var years = parseInt( $("years").value );

	$("futureValue").value = "";
	
	if (isNaN(investment) || investment <= 0) {
		alert("Investment must be a valid number\nand greater than zero.");
	} else if(isNaN(annualRate) || annualRate <= 0 || annualRate >= 21) {
		alert("Annual rate must be a valid number\n greater than zero and less than or equal to 20.");
	} else if(isNaN(years) || years <= 0 || years >= 51) {
		alert("Years must be a valid number\n greater than zero and less than or equal to 50.");
	} else {
		var monthlyRate = annualRate / 100;
		var futureValue = investment;
			
		for ( i = 1; i <= years; i++ ) {
			futureValue =  futureValue * 
				//sub. monthlyRate for years
				(1 + annualRate);
		}
		//disable annual interest rate after loop
		document.getElementById("rate").disable;
		$("futureValue").value = futureValue.toFixed(2);
				
	} 
}

 var clear_click = function (id) { 
	document.getElementById(id).value = "";
}

/*var result_1a = Math.random();
var random_number = function ( min, max, digits) {
	digits = isNaN(digits) ? 0 : parseInt(digits);
	
	if (digits == 0) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	} else {
		var rand = Math.random() * (max - min) + min;
		return parseFloat(rand.toFixed(digits) );
	}
}
var dice = random_number(1,6);
var parcentage = random_number(0, 100, 1);
var interest_rate = random_number(0.05, 0.10, 3); */


window.onload = function () {
    $("calculate").onclick = calculate_click;
    $("investment").focus();
	$("clear").onclick = clear_click;
}
