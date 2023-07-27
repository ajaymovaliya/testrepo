//------------------
function AUTH_TOKEN ()
{																									
	var debug = false; 
	if(debug) logger.info(' AUTH_TOKEN 03: '+ $('AUTHURL_API'));
	try{
	     var url = new java.net.URL($('AUTHURL_API'));														
	     if(debug) logger.info(' AUTH_TOKEN 08: '+ url);
	
	    // Open connection to url
	    var conn = url.openConnection();
		conn.setRequestMethod('POST');
		conn.setRequestProperty('Cache-Control', 'no-cache');
		conn.setRequestProperty('Content-Type', 'application/json');
	    conn.setDoOutput(true);
	    // Send request
	    var outStream = conn.getOutputStream();
	    var outWriter = new java.io.OutputStreamWriter(outStream);
	    outWriter.write('{ "apiKey": "'+$('DQ_API')+'" }');
	    outWriter.close();
	
	    //Capture Response
	    var respCode = conn.getResponseCode();
	    var inputStream = conn.getInputStream();
	    var streamReader = new java.io.InputStreamReader(inputStream);
	    var respStream = new java.io.BufferedReader(streamReader);												
	    if(debug) logger.info(' AUTH_TOKEN 23: '+ respStream);
	    var buffer = '';
	    var line = null;
	    while ((line = respStream.readLine()) != null) {
	        buffer = buffer + line;
	    }
	    respStream.close();

		var responseObject = JSON.parse(buffer.toString());													
		if(debug) logger.info('TOKEN: '+responseObject['token']);
		return responseObject['token'];
	}catch(e){
		return ('false');
	}
}

function IsServiceOrLocationValid(TYPE_ServiceOrLocation,ID_ServiceOrLocation)
{																									
	var debug = false;
	var ID_ =  validateRawData(ID_ServiceOrLocation,'ID');														
	if(debug) logger.info('ID: '+ ID_ServiceOrLocation);
	if (ID_ < 1) return false;//null;
	
	var AUTH = AUTH_TOKEN ();																			
	if(debug) logger.info('AUTH: '+ AUTH);
	if (AUTH == 'false')return false;
	try{
		var url = new java.net.URL((TYPE_ServiceOrLocation == 'service')?channelMap.get('GET_SERVICE_URL_API'):channelMap.get('GET_LOCATION_URL_API')+'/' + ID_);
		var conn = url.openConnection();
		conn.setRequestMethod('GET');
		conn.setRequestProperty('Authorization', 'Bearer ' +  AUTH );//$('jwtToken')
		conn.setRequestProperty('Cache-Control', 'no-cache');
		conn.setRequestProperty('Content-Type', 'application/json');
						
		var inputStream = conn.getInputStream();
		var streamReader = new java.io.InputStreamReader(inputStream);
		var respStream = new java.io.BufferedReader(streamReader);
		
		var buffer = new java.lang.StringBuffer();
		var line = null;
		while ((line = respStream.readLine()) != null) {
		  buffer.append(line + '\n');
		}
		respStream.close();
		
		var responseObject = JSON.parse(buffer.toString()); 													
		if(debug) logger.info(responseObject['status']);
		//return responseObject;
		var IsFound = (responseObject['status'] !== '500');
		var LogUpdate = '';
		if (IsFound){
				LogUpdate = '';
			}else{
				LogUpdate = '';
		}
		return (IsFound);
	}catch(e){																						
		if(debug) logger.info('failed');
				LogUpdate = '';
		return (false); 		
	}
}

//channelMap.put('IS_SERVICE_VALID_AUTH_TOKEN',AUTH_TOKEN ());
//channelMap.put('IS_SERVICE_VALID',(IsServiceOrLocationValid('service',595)));
//--------------------------------
function validateRawData (obj,type)
{	
	var debug = false;
	if(debug) logger.info((obj)?obj.toString().trim():'empty object');
	if(type=='TEXT') return (obj)?obj.toString().trim():null;
	if(type=='ID'){
			var ID = null;
			if (obj && !isNaN(obj)) {
				ID = new java.lang.Integer(obj.toString().trim()*1);
				ID = (ID > 0 )?ID:null;
			}
			return ID;
	}
	if(type=='ID0'){
			var ID = null;
			if (obj && !isNaN(obj)) {
				ID = new java.lang.Integer(obj.toString().trim()*1);
				ID = (ID >= 0 )?ID:null;
			}
			return ID;
	}
	if(type=='DATE') { //  YYYY-MM-DD
		//logger.info(obj.toString().trim()); channelMap.put("01",obj.toString().trim());
		if (obj !== null){
				var PROVIDED_DATE = obj.toString().trim();
				var Y = PROVIDED_DATE.substr(0,4);//(6,4);
				var M = PROVIDED_DATE.substr(5,2);//(3,2);
				var D = PROVIDED_DATE.substr(8,2);//(0,2);
				//logger.info(obj.toString().trim()+', D:'+D+', M:'+M+', Y:'+Y); //channelMap.put("02",obj.toString().trim()+', D:'+D+', M:'+M+', Y:'+Y);
				if(D > 0 && D < 32 && M > 0 && M < 13 && Y >= 1900) return Y+'-'+M+'-'+D;
		}
		return null;
	}
	if(type=='MULTIPLE_ID'){
		if (obj !== null){
				var MULTIPLE_ID = obj.toString().trim().split(";"); if(debug) logger.info('MULTIPLE_ID: '+MULTIPLE_ID);
				return (MULTIPLE_ID.length > 0)?MULTIPLE_ID:null; logger.info('MULTIPLE_ID_LENGTH: '+MULTIPLE_ID.length);
		}
		return null;		
	}
}
/*
function validateRawData (obj,type)
{
																									var debug = false;
	if(type=='TEXT') return (obj)?obj.toString().trim():null;
	if(type=='ID') return (obj && !isNaN(obj))?new java.lang.Integer(obj.toString().trim()*1):null;
	if(type=='DATE') { //  dd/mm/yyyy -> YYYY-MM-DD
		//logger.info(obj.toString().trim());
		if (obj !== null){
				var PROVIDED_DATE = obj.toString().trim();
				var Y = PROVIDED_DATE.substr(6,4);
				var M = PROVIDED_DATE.substr(3,2);
				var D = PROVIDED_DATE.substr(0,2);
				//logger.info(obj.toString().trim()+', D:'+D+', M:'+M+', Y:'+Y);
				if(D > 0 && D < 32 && M > 0 && M < 13 && Y > 1900) return Y+'-'+M+'-'+D;
		}
		return null;
	}
	if(type=='MULTIPLE_ID'){
		if (obj !== null){
				var MULTIPLE_ID = obj.toString().trim().split(",");  											if(debug) logger.info('validateRawData - MULTIPLE_ID:'+MULTIPLE_ID +' - count: '+MULTIPLE_ID.length);
				return (MULTIPLE_ID.length > 0)?MULTIPLE_ID:null;
		}
		return null;		
	}
}
*/

function createMultiples (INPUT_ARRAY, INPUT_VARIABLE)
{ 																									
	var debug = true;
	$c('OUTPUT_ARRAY',[]);
 	if (INPUT_ARRAY== null) return null;																	
 	if(debug) logger.info('createMultiples 154: LENGTH:'+INPUT_ARRAY.length); //if(debug) 
	for (var i=0; i< INPUT_ARRAY.length; i++){
		var CURRENT_VALUE =  INPUT_ARRAY[i];																
		if(debug) logger.info('createMultiples 107: '+ CURRENT_VALUE +" TYPE: "+INPUT_VARIABLE); //if(debug) 
		var ID_ =  CURRENT_VALUE; //validateRawData(CURRENT_VALUE,'ID');														if(debug) {logger.info('createMultiples 108: '+ ID_); logger.info('createMultiples 108_2: '+ INPUT_ARRAY[i]);}
		if (ID_ > 0)
		{
			var tempT = {}
			tempT.id = CURRENT_VALUE;																	
			if(debug) logger.info('createMultiples 111: '+CURRENT_VALUE);
	
			if (INPUT_VARIABLE =='L' || INPUT_VARIABLE =='S')
			{
				var tempTL_S = {}
				if(INPUT_VARIABLE =='L')
				{
					//tempTL_S.location = INPUT_ARRAY[i];
					if (IsServiceOrLocationValid('location',CURRENT_VALUE)){ 									
						if(debug) logger.info('createMultiples-Loc-valid 119: '+CURRENT_VALUE);
							tempTL_S.location = CURRENT_VALUE;  $c('OUTPUT_ARRAY').push(tempTL_S);
						} else {
							channelMap.put('ERROR_LOCATIONS', channelMap.get('ERROR_LOCATIONS')+CURRENT_VALUE+",");	
							if(debug) logger.info('createMultiples-Loc-Invalid 122: '+channelMap.get('ERROR_LOCATIONS'));
						}
				}else{ 
					//tempTL_S.service = INPUT_ARRAY[i];
					if (IsServiceOrLocationValid('service',CURRENT_VALUE)){ 
						tempTL_S.service = CURRENT_VALUE; $c('OUTPUT_ARRAY').push(tempTL_S);						
						if(debug) logger.info('createMultiples-Ser-valid 127: '+CURRENT_VALUE);
						} else {
							channelMap.put('ERROR_SERVICES', channelMap.get('ERROR_SERVICES')+ CURRENT_VALUE+",");	
							if(debug) logger.info('createMultiples-Ser-Invalid 129: '+channelMap.get('ERROR_SERVICES'));
						}
				}
				
			}else{
				$c('OUTPUT_ARRAY').push(tempT);	
			}
		}else{ 
			//return null;
		}
	}
	return $c('OUTPUT_ARRAY');
}
//------------------



     function prepare_csv_field (InputString)
     {
     	return ((InputString.indexOf("'") > -1 )?'"'+ InputString +'"':InputString)
     }






//channelMap.put('JSON_PAYLOAD', $('OUTPUT_PAYLOAD'));