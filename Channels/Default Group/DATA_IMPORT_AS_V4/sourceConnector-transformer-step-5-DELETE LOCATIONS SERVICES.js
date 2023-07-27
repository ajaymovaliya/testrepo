if (channelMap.get('IMPORT_DATA') == 'LOCATIONS_DELETE' || channelMap.get('IMPORT_DATA') == 'SERVICES_DELETE'){

	if (channelMap.get('IMPORT_DATA') == 'SERVICES_DELETE')  channelMap.put('DELETE_LOCATION_SERVICE_API',  $('GET_SERVICE_URL_API'));	
	if (channelMap.get('IMPORT_DATA') == 'LOCATIONS_DELETE') channelMap.put('DELETE_LOCATION_SERVICE_API',  $('GET_LOCATION_URL_API'));	

	var SERVICES_LOCATION_ID = validateRawData($('CSV_FIELD_04'),'ID');	channelMap.put('SERVICES_LOCATION_ID',  SERVICES_LOCATION_ID);	
	var SERVICES_LOCATION_STATUS  = validateRawData($('CSV_FIELD_06'),'ID');

	var OUTPUT_FILE_CONTENTS =	'"'+ msg['row'][0]['column1'] +'",'+ 
							 '"'+ msg['row'][0]['column2'] +'",'+ 
							 '"'+ msg['row'][0]['column3'] +'",'+ 
							 '"'+ msg['row'][0]['column4'] +'",'+ 
							 '"'+ msg['row'][0]['column5'] +'",'+ 
							 '"'+ msg['row'][0]['column6'] +'"';

	channelMap.put('JSON_PAYLOAD', '{"status": '+SERVICES_LOCATION_STATUS+'}');
	channelMap.put('OUTPUT_FILE_CONTENTS', OUTPUT_FILE_CONTENTS);

	
}