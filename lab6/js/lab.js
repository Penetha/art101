// index.js - Lab 6: Arrays and Objects
// Author: Penetha Jayakumar
// Date: 24Oct2024

// Creating array for my means of transports.
var myTransport = ['Campus Loops', 'Metro bus', 'Bcycle', 'Cab'];

//Creating object for my vehicle details.
var myMainRide = {
    make : "Honda",
    model : "Dio 110",
    color : "Axis Mat Grey metallic",
    year : 2017,
    /*function to calculate age of the vehicle*/
    age : function(){return 2024 - this.year; 
    } 
}

//To output means of transport and my vehicle details in the website results.
document.writeln("Getting around: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");

