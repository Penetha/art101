// index.js - Lab 11: JavaScript Events and Forms. This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.
// Author: Penetha Jayakumar, Sandy St
// Date: 11Nov2024

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
  // We have to convert our string to an array and back again to sort it
  return inputString.split('').sort().join('');
}

// click listener for button
$("#submit").click(function() {
  var userName = $("#user-name").val(); // Get the user's input
  var userNameSorted = sortString(userName); // Sort it

  // Append a new div to our output div for each click
  $("#output").append('<div class="text"><p>' + userNameSorted + '</p></div>');
});