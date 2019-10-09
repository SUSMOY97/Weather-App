const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));





app.get("/", function(req, res) {



    var options = {
        url: "https://api.openweathermap.org/data/2.5/weather?q=Kolkata,IN&appid=226239a3548adedcc55190d66f6d70cb",
        method: "GET",

    };

    request(options, function(error, reponse, body) {
        var data = JSON.parse(body);
        var city = data.name;
        var temp = data.main.temp;
        var currentDate = data.sys.sunset;

        res.write("<p>The City is: " + city + "</p>");
        res.write("<h1>The temperature is:" + temp + "</h1>");
        res.write("<h2>The current time is:" + currentDate + "</h2>");
        res.send();


    });

});

app.listen(3000, function(req, res) {
    console.log("Server is running on Port 3000....");
});