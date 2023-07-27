var expires = new Date();
expires = (expires.getTime()/1000)+3540; // 59 min = 3540 sec

globalChannelMap.put('jwtExpires',expires);
globalChannelMap.put('jwtCookie','DQ.jwtPerms='+msg['permissions']+';DQ.jwtToken='+msg['token']+'');

logger.info("This is the JWT Token which: "+$('jwtToken'));
logger.info("The JWT Token expires at: "+$('jwtExpires'));