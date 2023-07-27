// Declaration - PARAMS

channelMap.put('IMPORT_DATA', $('CSV_FIELD_01'));	
channelMap.put('DQ_URL', $('CSV_FIELD_02'));
channelMap.put('DQ_API', $('CSV_FIELD_03'));

//if($('IMPORT_DATA')== 'MEDICATION_IMPORT' || $('IMPORT_DATA') == 'EQUIPMENT_IMPORT'  ) 
//channelMap.put('JWT_TOKEN_PREM', 'DQ.jwtPerms='+$('CSV_FIELD_03')+';DQ.jwtToken='+$('CSV_FIELD_04'));
	


// Declaration - END POINTS
channelMap.put('AUTHURL_API', channelMap.get('DQ_URL')+'/auth/tokenForApiKey');
channelMap.put('USER_IMPORT_URL_API', channelMap.get('DQ_URL')+'/api/users/batch?tenant=1');
channelMap.put('CONTACT_IMPORT_URL_API', channelMap.get('DQ_URL')+'/api/contacts/contact'); //'?tenant=1'

channelMap.put('GET_SERVICE_URL_API', channelMap.get('DQ_URL')+'/api/services/service');
channelMap.put('GET_LOCATION_URL_API', channelMap.get('DQ_URL')+'/api/locations/location');

channelMap.put('MEDICATION_IMPORT_URL_API', channelMap.get('DQ_URL')+'/medications/api/medication');
channelMap.put('EQUIPMENT_IMPORT_URL_API', channelMap.get('DQ_URL')+'/medications/api/equipment');