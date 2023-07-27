/**
  Find identifier from the  list of  phone numbers and return the value based  on  Equipment Type

	@param {String} equipmentType 	- 	PID.13.3 Telecommunication Equipment Type
	@param {String} loggingPrefix 	- 	String to put at from o logging for  clarity
	@return {String} identified value from PID-13
	
*/

function getPhoneDetailByEquipmentType(equipmentTypeToFind,loggingPrefix) {

const EQUIPMENT_TYPE_PHONE = 'CP PH';
const EQUIPMENT_TYPE_EMAIL = 'INTERNET';

//logger.debug(loggingPrefix + 'Received equipmentTypeToFind:[' + equipmentTypeToFind + ']'  );
//logger.info(loggingPrefix + 'PID-13:[' + msg['PID']['PID.3'].toString() + ']');

var returnPhone = '';
	for each (pid13 in msg['PID']['PID.13']) {
		var equipmentType = pid13['PID.13.3'].toString().toUpperCase() + '';
//		logger.info(loggingPrefix + 'Got Eqpt Type:[' + equipmentType + ']' );
		if (equipmentType.toUpperCase() == equipmentTypeToFind.toUpperCase()) { 
			//logger.debug(loggingPrefix + 'Matched Eqpt Type.');
			if (EQUIPMENT_TYPE_PHONE.indexOf(equipmentType.toUpperCase()) > -1 ){
				//returning phone number  for these types
				logger.info(loggingPrefix + 'Got Phone Type.');
				returnPhone = pid13['PID.13.6'].toString()+' '+pid13['PID.13.7'].toString()+'';
			}else if(equipmentType.toUpperCase() == EQUIPMENT_TYPE_EMAIL) {
				//returning email address for this type type
				logger.info(loggingPrefix + 'Got email  Type.');
				returnPhone = pid13['PID.13.4'].toString()+'';
			}
		break;
		}
	}
//logger.debug(loggingPrefix + 'Returning:[' + returnPhone + ']'  );

return returnPhone;
}