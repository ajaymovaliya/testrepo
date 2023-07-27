//if ($('IMPORT_DATA')== 'MEDICATION_IMPORT' || $('IMPORT_DATA')== 'EQUIPMENT_IMPORT' ) return false;

var currentTm = ((new Date()).getTime())/1000;

if(globalChannelMap.get('jwtExpires') < 1 || currentTm > globalChannelMap.get('jwtExpires'))  {
	logger.info(channelName + ": Renewing Auth Token...");
	return true;
}
else {
	//logger.info(channelName + ": Current Auth Token is still valid.");
	return false;
}