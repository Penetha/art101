// index.js - Lab 14: Debugging Tools and Strategies. This simple JavaScript/jQuery script will print the output results on a button click.
// Author: Penetha Jayakumar, Sandy St
// Date: 06Dec2024

// click listener for button
$("#submit").click(function() {
  // Append a new div to our output div for each click
  $("#output").append('<div class="text"><h2>The console with error:</h2></br><img id="error" src="img/error.png"></div>');
  $("#output").append('<div class="text"><h2>After resolving the CORS error by using AllOrigins proxy server in script:</h2></br><img id="resolved" src="img/resolved.jpg"></br><img id="js" src="img/js.png"></div>');
});