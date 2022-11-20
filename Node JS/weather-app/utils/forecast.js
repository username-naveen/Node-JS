const request = require('request');

// const utils = {};

/**
 * @function forecast this take coordinates as Input and returns Places' names
 * @param {number} latitude pass latitude, longitude as string params
 * @param {number} longitude 
 */

const forecast = (latitude, longitude, callback) => {
        let url = "http://api.weatherstack.com/current?access_key=ddb4ce1641bf452b662a33bdc41da795&query=" + latitude+ ',' + longitude;

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback("Unable to connect to internet", undefined);
        } else if (body.error) {
            callback("Unable to find the place. Try with some other coordinates.", undefined)
        } else {
            callback(undefined, {
                temperatureValue: body.current.temperature,
                weatherDescription: body.current.weather_descriptions[0],
                feelsLike: body.current.feelslike
            })
        }
    })
};

module.exports = forecast;

/**
 * @example for calling the function geocoding
 */
// forecast("11.3410,77.7172", (error, data) => {
//     console.log('Error:', error);
//     console.log('Data:', data)
// });