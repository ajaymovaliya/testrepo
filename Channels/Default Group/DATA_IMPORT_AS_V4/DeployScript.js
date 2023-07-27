// This script executes once when the channel is deployed
// You only have access to the globalMap and globalChannelMap here to persist data

	var SourceDirectory = "C:\\DATA_IMPORT";


	globalChannelMap.put('jwtExpires',0);
	globalChannelMap.put('SourceDirectory',SourceDirectory);	
	globalChannelMap.put('OutputDirectorySuccess',OutputDirectorySuccess);	
	globalChannelMap.put('OutputDirectoryError',OutputDirectoryError);	
	globalChannelMap.put('LogDirectory',LogDirectory);	
	globalChannelMap.put('jwtToken',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbWluIjp0cnVlLCJ1c2WQiOjEsImF1dGhlbnRpY2F0ZWRVcIjp0cnVlLCJ1c2VySWQiOjEsImF1dGhlLCJ1c2VySWQiOjEsImF1dGhlbnRpY2F0ZWRVcIjp0cnVlLCJ1c2VySW0dGVzdCIsImp0aSI6IjZlODA3OTg1LTYwNTAtNDdiMC1hODA0LWM0NDdmNTBmNWEyZCJ9.o6rDYFvcTXBgNwkcNNA3BdrXG5wrHqafXFzZjiLSZ0Y");

	globalChannelMap.put('jwtCookie','');
return;