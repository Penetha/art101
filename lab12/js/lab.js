// index.js - Lab 10: Conditionals. This simple JavaScript/jQuery script gets name string as input and outputs the results by performing a certain function.
// Author: Penetha Jayakumar, Sandy St
// Date: 14Nov2024

// Sorts the characters of a string in alphabetical order.
function sortHatString(inputString) {
  // We have to convert our string to an array and back again to sort it
  var nameLen = inputString.length ;
  mod = nameLen % 4;
  if (mod==0) {
    return ["./img/g.jpeg", "./img/gryffin.gif", mod];
  }
  else if (mod==1) {
    return ["./img/r.jpeg", "./img/raven.gif", mod];
  }
  else if (mod==2) {
    return ["./img/s.jpeg", "./img/sly.gif", mod];
  }
  else if (mod==3) {
    return ["./img/h.jpeg", "./img/huff.gif", mod];
  }
}

// click listener for button
$("#submit").click(function() {
  var userName = $("#name").val(); // Get the user's input
  var houseSorted = sortHatString(userName); // Sort it
  var image = houseSorted[0];
  var gif = houseSorted[1];
  var mod = houseSorted[2];
  // Append a new div to our output div for each click
  $("#output").append('<div class="text"><p>' + "You are sorted into the house:" + mod + '</p></div>');
  $("#visual").append('<img src="' + image + '">');
  $("#visual").append('<img src="' + gif + '">');
});