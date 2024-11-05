// index.js - Lab 9: Libraries & jQuery. This simple JavaScript/jQuery script uses buttons to modify some elements on the page
// Author: Penetha Jayakumar, Sandy St
// Date: 4Nov2024

// Function to add special section:
function special(x) {
    return $(x).toggleClass("special");
  }
  
//function to add button and handle click activation  
function addButton(x){
    let button = $("<button class='button-click'>Make Special</button>");
    // Function to handle add special on click
    button.click(function() {
        special(x);
    });

    //Function to handle button effects on click
    button.click(function(){
        $(this).toggleClass("centered");
    });
    
    //   Append the newly created button 
    return $(x).append(button);
  }

//Array containing list of different div IDs where the buttons should be added
divList = ["#challenge", "#problems", "#output"];
//Mapping the array to addButton function
divList.map(addButton);
