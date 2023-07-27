/**
	Return the  valied identified in the PID 3  from the namespace ID

	@param {String} namespaceID 	- 	PID.3-4.1 Assigning Authority namespace ID
	@param {String} loggingPrefix - 	String to put at from o logging for  clarity
	@return {String} identified value from PID-3.1 
	
*/

function getPID3IdentifierByNamespaceID(namespaceID,loggingPrefix) {

/*
  Find identifier from the patient Identifier list and  map it to return 
*/
	logger.info(loggingPrefix + 'Received NamespaceID:[' + namespaceID + ']'  );
	//logger.info(loggingPrefix + 'PID-3:[' + msg['PID']['PID.3'].toString() + ']');

var identifiedPID3 = '';
	for each (pid3 in msg['PID']['PID.3']) {
	//	logger.info(loggingPrefix + "Got PID3 ID:[" + pid3['PID.3.1'].toString() + ",Namespace:[" + pid3['PID.3.4'].toString() +"]");
		var pidNamespaceID = pid3['PID.3.4'].toString() + '';
		
		if (pidNamespaceID == namespaceID) { 
			identifiedPID3 = pid3['PID.3.1'].toString();
	//		logger.info("Got Value for:[" + namespaceID + "],[" + identifiedPID3 + "]");
		}
	}

return identifiedPID3;

}