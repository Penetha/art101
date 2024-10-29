// index.js - Lab 7: Functions
// Author: Penetha Jayakumar
// Date: 28Oct2024

//Declare variable to get input name
var userName = window.prompt("Hello! Tell me your name, so I can fix it.");
console.log("userName = ", userName);

// Function to return the reverse of the name entered as input
function userNameSort(userName) {
    //To split the input string letters and store as an array
    var lettersArray = userName.split('');
    console.log("lettersArray = ", lettersArray);
    //To sort the letters in the array
    var lettersSorted = lettersArray.sort();
    console.log("lettersSorted = ",lettersSorted)
    //To join the letters in the array to return sorted name
    var nameSorted = lettersSorted.join('');
    console.log("nameSorted = ", nameSorted)
    return nameSorted;
}


//To get input in webpage.
input = document.writeln("What is your Name?","<br>","<br>", userName, "<br>","<br>", "Your name has been fixed successfully and displayed below","<br>","</br>", userNameSort(userName),"<br>")


