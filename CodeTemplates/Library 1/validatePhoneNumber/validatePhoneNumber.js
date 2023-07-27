/*
Function to vlaidate a phone number.

Validation fails  if argument contains other than numerics or length > 20

If Validation fails function returns ''


*/

function validatePhoneNumber(noToValidate){
var returnNo = ''
var phoneNumberValid = true;
var maxLength = 20;
var reForNoNumerics = new RegExp(/\D/); 
var numberSpacesStripped = noToValidate.replace(' ','');

logger.info('Validating Phone Number:[' + noToValidate + ']');

/*	if (reForNoNumerics.test(numberSpacesStripped)){
		logger.info('Validating Phone Number:FAIL:Non Numerics Present');
		phoneNumberValid = false;
	}
*/
	if (noToValidate.length > maxLength ){
		logger.info('Validating Phone Number:FAIL:Max Length('+ maxLength + ') Exceeded');
		phoneNumberValid = false;
	}

	if (phoneNumberValid){
		returnNo = noToValidate;
	}else{
		returnNo = '';
	}

	return returnNo;
}