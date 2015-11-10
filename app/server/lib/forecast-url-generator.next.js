"use strict";

Meteor.forecastApiUrlGenerator = (function() {

	let checkApiParameter = function(key, name) {
		if (!key) {
			throw ("Trying to generate a url without the param " + name);
		}

		return true;
	}

	let generate = function(baseUrl, {lat: lat, lng: lng, key: key, timePiece: tp = 3}) {
		checkApiParameter(lat, 'lat');
		checkApiParameter(lng, 'lng');
		checkApiParameter(key, 'key');

		check(baseUrl, String);
		let url = `${baseUrl}?q=${lat},${lng}&tp=${tp}&format=json&key=${key}`;

		return url;
	}

	return Object.freeze({ generate });
})();