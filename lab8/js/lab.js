// index.js - Lab 8: Anon Functions and Callbacks
// Author: Penetha Jayakumar, Sandy St
// Date: 28Oct2024

//Functiom to double any given number
function double(x){
    var doubled = x*2;
    return doubled;
}

//To test function double
console.log(double(77))
console.log(double(15))

//Declaring an array of numbers
list = [11, 22, 33, 44, 40, 10, 50, 500, 64, 78, 36];
console.log(list)

//Declaring a variable to store the results of the double function performed using map on the list
var results = list.map(double);
console.log("Double operation results ", results);

//Adding a new operation to find square root using map method on the list
var new_results = list.map(function(x){
    var sqrt = (x**0.5).toFixed(2);
    return sqrt;
})
console.log("Square root operation results = ", new_results);

// declaring a variable to store all results that should be displayed as output in webpage
var mapResults = ["Double operation results: ","<br>","<br>", results,"<br>","<br>","<br>", "Square operation results: ","<br>","<br>", new_results];
console.log(mapResults);

//To display all results as output in webpage.
// Use jQuery to select the element by its ID and set the HTML content
$("#output").html(mapResults);
