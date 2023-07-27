logger.info("---Now in the response transformer---");
var messageResponseDate = connectorMessage.getResponseDate();


//logger.info("messageResponseDate:"+messageResponseDate);

//logger.info("messageResponseDate:"+messageResponseDate.getTime());
//logger.info("---Now completed the response transformer---");

channelMap.put("messageResponseDateTime",messageResponseDate.getTime());