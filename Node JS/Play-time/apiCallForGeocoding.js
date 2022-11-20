const request = require('request')
const fs = require('fs')

/**
 * @description Calling the weatherstack api with request method and extracting the required data from the response
 */

// url = 'http://api.weatherstack.com/current?access_key=ddb4ce1641bf452b662a33bdc41da795&query=11.3410,77.7172'

// request({url: url, json: true}, (error, response) => {
//     // const data = JSON.parse(response.body) //just to extract the body of the response
//     // const data = JSON.parse(response.body.current) //to extract the current details of the body
//     console.log('The temperature is ' + response.body.current.temperature + 'degrees. The chances are ' + response.body.current.weather_descriptions)

//     // const weatherData = JSON.stringify(response.body)
//     // fs.writeFileSync('weatherData.json', weatherData)
// })

/**
 *  @description Calling a forward geocoding api (the api that gives coordinates of places) and passing that to the weatherstack api for the weather data
 */

// location_name = "Erode, Tamilnadu, India"
// location_api_url = "http://api.positionstack.com/v1/forward?access_key=9b301abd4c1d9521bad31a986e467380&query="

// location_url = location_api_url + location_name

// request({url: location_url, json: true}, (error, response) => {
//     if(!error){
//         if(!response.body.error){
//             const location = [response.body.data[0].latitude, response.body.data[0].longitude]
//         console.log(location)
//         }
//         else{
//             console.log("URL is broken")
//         }   
//     }
//     else{
//         console.log("Seems there is a connection issue. Ensure you're connected to a stable network and try again.")
//     }
// })


/**
 * @function this geocoding is for extracting latitude and longitude of the given place from the positionstack api call
 * @returns latitude, longitude anf location
 */
// const geocoding = (place = 'Tamil Nadu, India', callback) => {
//     let url = "http://api.positionstack.com/v1/forward?access_key=9b301abd4c1d9521bad31a986e467380&query=" + place;

//     request({url: url, json: true}, (error, response) => {
//         if (error) {
//             callback("Unable to connect to internet", error);
//         } else if (response.body.data.length === 0) {
//             callback("Unable to find the location. Try with some other places.")
//         } else {
//             callback(undefined, {
//                 latitude: response.body.data[0].latitude,
//                 longitude: response.body.data[0].longitude,
//                 location: response.body.data[0].label
//             })
//         }
//     })
// };

// geocoding("Paris", (error, data) => {
//     console.log('Error:', error);
//     console.log('Data:', data)
// });