//$('HttpResponseRecordStatus') : 1 - unapproved, 2 - approved or 3 - rejected

//$('HttpResponseRecordStatus') : 1 - unapproved, 2 - approved or 3 - rejected



var RESPONSE_MAP = {}

if ($('IMPORT_DATA') == 'OfW_SYNC_USER_IMPORT') RESPONSE_MAP = responseMap.get("IMPORT_UPDATE_USERS");
//if ($('IMPORT_DATA') == 'STAFF_IMPORT') RESPONSE_MAP = responseMap.get("IMPORT_UPDATE_STAFF");
if ($('IMPORT_DATA') == 'STAFF_IMPORT' || $('IMPORT_DATA') == 'CONTACT_IMPORT_EXTENDED') RESPONSE_MAP = responseMap.get("IMPORT_UPDATE_STAFF");
if ($('IMPORT_DATA')== 'MEDICATION_IMPORT' || $('IMPORT_DATA')== 'EQUIPMENT_IMPORT' ) RESPONSE_MAP = responseMap.get("IMPORT_MED_EQP");
if ($('IMPORT_DATA')== 'MEDICATION_UPDATE' || $('IMPORT_DATA')== 'EQUIPMENT_UPDATE' ) RESPONSE_MAP = responseMap.get("UPDATE_MED_EQP");
if ($('IMPORT_DATA') == 'LOCATIONS_DELETE' || $('IMPORT_DATA') == 'SERVICES_DELETE') RESPONSE_MAP = responseMap.get("DELETE_SERVICES_LOCATIONS");
if ($('IMPORT_DATA') == 'LOCATIONS_STATUS_UPDATE' || $('IMPORT_DATA') == 'SERVICES_STATUS_UPDATE') RESPONSE_MAP = responseMap.get("UPDATE_STATUS_SERVICES_LOCATIONS");
if ($('IMPORT_DATA') == 'LOCATIONS_TAG_UPDATE' || $('IMPORT_DATA') == 'SERVICES_TAG_UPDATE') RESPONSE_MAP = responseMap.get("UPDATE_TAG_SERVICES_LOCATIONS");
if ($('IMPORT_DATA') == 'LOCATIONS_ADD' || $('IMPORT_DATA') == 'SERVICES_ADD') RESPONSE_MAP = responseMap.get("ADD_SERVICES_LOCATIONS LEVEL 01");

//var resMessage = RESPONSE_MAP.getStatus().toString();  channelMap.put('resMessage',resMessage);
var resMessage = (RESPONSE_MAP != null)?RESPONSE_MAP.getStatus().toString():'ERROR';  channelMap.put('resMessage',resMessage);

var fileOutput = '';

if (resMessage == "ERROR")
{
	fileOutput =  	 $('RESPONSE_DQ_ID') +','+ $('OUTPUT_FILE_CONTENTS')+'\r\n';
}

				 
channelMap.put('fileOutput',fileOutput);