// This script executes once after a message has been processed
// Responses returned from here will be stored as "Postprocessor" in the response map
var destinations = sourceMap.get('destinationSet');
var metadataIds = destinations.toArray();

if (metadataIds.length == 0) {
	return ResponseFactory.getErrorResponse('invalid request');
}

var smsg = message.getConnectorMessages().get(0);
if (smsg.getStatus() == 'ERROR') {
	return smsg;
}

var metadataID = metadataIds[0];
var cmsg = message.getConnectorMessages().get(metadataID);

if (cmsg.getStatus() == 'ERROR') {
	return JSON.stringify('{"message": "Internal Server error"}');
}

return cmsg.getResponseData();