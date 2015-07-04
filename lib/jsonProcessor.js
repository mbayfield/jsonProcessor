'use strict';

/**
 * processes mi9 json payload
 *
 * @param {input} json input data
 * @returns {response} mi9 structured response 
 */
 
var jsonProcessor = function (input) {
	
	// setup respnse array
	var response = [];

	// loop through the payload
	for (var i = 0; i < input.payload.length; i++) {
		
		// get an item in the payload - make it easier to work with
		var item = input.payload[i];
		
		// check the required params
		if (item.drm && item.episodeCount > 0 ) {
			
			// pusj into the response array matching data
			response.push({
				"image": item.image.showImage,
				"slug": item.slug,
				"title": item.title
			});
		}
	}
	
	// return the response
	return { "response": response };
};

module.exports = exports =  jsonProcessor;