var method = sourceMap.get('method'); 
//logger.info("Test method: "+method);/

var contextPath = sourceMap.get('contextPath');
//logger.info("Test contextPath: "+contextPath);/

var uri = sourceMap.get('uri'); 
//logger.info("Test uri: "+uri);/

var destinationID; 

switch(String(contextPath)) { 
	case '/auth/tokenForApiKey': destinationID = 1; 
	break; 
	case '/api/services/service': destinationID = 2;
	break;
	case '/api/locations/location': destinationID = 2;
	break;
	default: destinationID = 3;   
} 
//logger.info("Test destinationID: "+destinationID);/
destinationSet.removeAllExcept(destinationID);