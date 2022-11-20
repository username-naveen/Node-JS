const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode')
const chalk = require('chalk')

const place = process.argv[2];

if (!place) {
    console.log(chalk.bgWhiteBright("Why don't you try by giving a place name..."));
} else {
    geocode(place, (error, {latitude, longitude, location}) => {
        if (error) {
            return console.log(error);
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error);
            }
            console.log(location);
            console.log(forecastData);
        })
    })
}