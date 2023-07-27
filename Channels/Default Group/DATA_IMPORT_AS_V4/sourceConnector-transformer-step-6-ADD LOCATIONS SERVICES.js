if (channelMap.get('IMPORT_DATA') == 'LOCATIONS_ADD'){
	channelMap.put('ADD_LOC_SER_API', $('GET_LOCATION_URL_API'));
}
if (channelMap.get('IMPORT_DATA') == 'SERVICES_ADD'){

	channelMap.put('ADD_LOC_SER_API', $('GET_SERVICE_URL_API'));	
}

	var REQUEST_DATA = {};
	    REQUEST_DATA.status = 0;
	    REQUEST_DATA.parent = 1;
	    REQUEST_DATA.tags = [];
	var FIRST_TRANSLATION = {};
	    FIRST_TRANSLATION.language = 1;
	    FIRST_TRANSLATION.value = "";
	var TRANSLATION = {};
	    TRANSLATION["1"]=FIRST_TRANSLATION;
	var TITLE  = {};
	    TITLE.translations  = TRANSLATION;
	    REQUEST_DATA.title = TITLE;
	    
	var MAX_LENGTH = 10, LOC_SER_ARRAY = [], x=0;

	var DEFAULT_PARENT_NODE = 1;
	var PROVIDED_PARENT_NODE = validateRawData($('CSV_FIELD_04'),'ID');

	channelMap.put('LOC_SER_PARENT_NODE_BEFORE_CONV_01',$('CSV_FIELD_04'));
	channelMap.put('LOC_SER_PARENT_NODE_BEFORE_CONV_02',PROVIDED_PARENT_NODE);
	
	var LOC_SER_PARENT_NODE = (PROVIDED_PARENT_NODE >0)?PROVIDED_PARENT_NODE:DEFAULT_PARENT_NODE;
	
	channelMap.put('LOC_SER_PARENT_NODE',LOC_SER_PARENT_NODE);

	for (i = 1; i <= MAX_LENGTH; i++) {

			//channelMap.put('LOC_SER_ARRAY['+i+']',null);
			//channelMap.put('LOC_SER_OBJ['+i+']',null);
			 x = i+4;
			 var tempC = null
			 var tempA = validateRawData($('CSV_FIELD_'+((x<10)?'0'+x:x)),'TEXT'); 
			if(tempA!==''){
			 var tempC =  REQUEST_DATA;
			 tempC.title.translations["1"].value = tempA;
			 
				//----------------------------------------------------------------------------------------------------
				if(LOC_SER_PARENT_NODE == globalMap.get('PREVIOUS_L0_ID'))
				{
					//----------
					var internal_A = (i==1)?(tempA == globalMap.get('PREVIOUS_L'+i+'_TEXT')):(internal_A && tempA == globalMap.get('PREVIOUS_L'+i+'_TEXT'));
					
					if(internal_A){
						globalChannelMap.put('RESPONSE_DQ_L'+i+'_ID',globalMap.get('PREVIOUS_L'+i+'_ID'));
						globalChannelMap.put('internal_A_'+i,internal_A);
					}else{
						channelMap.put('LOC_SER_'+i,JSON.stringify(tempC));
					}
					//---------
					
				}else{				
					channelMap.put('LOC_SER_'+i,JSON.stringify(tempC));					
				}
				//----------------------------------------------------------------------------------------------------
			 //channelMap.put('LOC_SER_'+i,JSON.stringify(tempC));			 
			}

			/*
			{
			    "title": {
			        "translations": {
			            "1": {
			                "language": 1,
			                "value": "TEST_20_MAR_2023"
			            }
			        }
			    },
			    "status": 0,
			    "tags": [
			        0
			    ],
			    "parent": "1"
			}
			*/


			   


	


	}