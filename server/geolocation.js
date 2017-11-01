const axios = require('axios');
const app = require('./app.js');

app.get('/api', function(request, response) {
    var baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
    var url = 'https://api.darksky.net/forecast/261683ae5f9ea2a08ef993451973a3b2/';
    var address = 'London';

    axios.get(baseUrl + address).then((result)=> {
        return {
            lat: result.data.results[0].geometry.location.lat,
            lng: result.data.results[0].geometry.location.lng
        }
    }).then((location)=> {
        axios.get(url + location.lat + ',' + location.lng + '?units=si').then((result)=> {
            response.json(result.data);
        }).catch((err)=> {
            console.log(err);
        });
    }).catch(function (error) {
        console.log(error);
    });
});

module.exports = app;
