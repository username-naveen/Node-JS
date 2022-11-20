const request = require('request') 

// const utils = {};

/**
 * @function geocoding this takes place names and return coordinates 
 * @param {string} place pass a place name as a parameter
 * @param {} callback pass a callback function
 */

const geocoding = (place, callback) => {
    let url = "http://api.positionstack.com/v1/forward?access_key=9b301abd4c1d9521bad31a986e467380&query=" + place;

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback("Unable to connect to internet", error);
        } else if (body.data.length === 0) {
            callback("Unable to find the location. Try with some other places.")
        } else {
            callback(undefined, {
                latitude: body.data[0].latitude,
                longitude: body.data[0].longitude,
                location: body.data[0].label
            })
        }
    })
};

module.exports = geocoding;

/**
 * @example for calling the function geocoding
 */
// geocoding("Paris", (error, data) => {
//     console.log('Error:', error);
//     console.log('Data:', data)
// });