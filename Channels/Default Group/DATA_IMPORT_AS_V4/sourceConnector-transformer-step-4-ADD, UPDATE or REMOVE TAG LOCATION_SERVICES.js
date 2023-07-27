if (channelMap.get('IMPORT_DATA') == 'LOCATIONS_TAG_UPDATE' || channelMap.get('IMPORT_DATA') == 'SERVICES_TAG_UPDATE'){

	channelMap.put('TAG_UPDATE_LOCATIONS_SERVICES_API',  $('GET_LOCATION_URL_API'));	

	if (channelMap.get('IMPORT_DATA') == 'SERVICES_TAG_UPDATE')  channelMap.put('TAG_UPDATE_LOCATIONS_SERVICES_API',  $('GET_SERVICE_URL_API'));	
	if (channelMap.get('IMPORT_DATA') == 'LOCATIONS_TAG_UPDATE') channelMap.put('TAG_UPDATE_LOCATIONS_SERVICES_API',  $('GET_LOCATION_URL_API'));	

	var SERVICES_LOCATION_ID = validateRawData($('CSV_FIELD_04'),'ID');	channelMap.put('SERVICES_LOCATION_ID',  SERVICES_LOCATION_ID);	
	var TAG_ID = validateRawData($('CSV_FIELD_06'),'ID');
	var SERVICES_LOCATION_TAG  = (TAG_ID>0)?TAG_ID:'[]';

	var OUTPUT_FILE_CONTENTS =	'"'+ msg['row'][0]['column1'] +'",'+ 
							 '"'+ msg['row'][0]['column2'] +'",'+ 
							 '"'+ msg['row'][0]['column3'] +'",'+ 
							 '"'+ msg['row'][0]['column4'] +'",'+ 
							 '"'+ msg['row'][0]['column5'] +'",'+ 
							 '"'+ msg['row'][0]['column6'] +'"';

	channelMap.put('JSON_PAYLOAD', '{"tags": '+SERVICES_LOCATION_TAG+'}');
	channelMap.put('OUTPUT_FILE_CONTENTS', OUTPUT_FILE_CONTENTS);

	
}