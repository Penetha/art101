// index.js - Lab 10: Conditionals. This simple JavaScript/jQuery script gets name string as input and outputs the results by performing a certain function.
// Author: Penetha Jayakumar, Sandy St
// Date: 14Nov2024

// Sorts the characters of a string in alphabetical order.
function sortHatString(inputString) {
  // We have to convert our string to an array and back again to sort it
  var nameLen = inputString.length ;
  mod = nameLen % 4;
  if (nameLen==0){
    return ['','','','background-image',"url(./img/voldemort.gif)", "I am the only one who must not be named!!!!"];
  }
  else if (mod==0) {
    return ["./img/dumb.gif", "./img/g.jpeg", "./img/gryffin.gif", "background", "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(203,15,42,1) 50%, rgba(241,172,41,1) 100%)", "You are sorted into the house of"];
  }
  else if (mod==1) {
    return ["./img/dumb.gif", "./img/r.jpeg", "./img/raven.gif", "background", "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(162,171,178,1) 50%, rgba(11,90,137,1) 100%)", "You are sorted into the house of"];
  }
  else if (mod==2) {
    return ["./img/dumb.gif", "./img/s.jpeg", "./img/sly.gif", "background", "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(191,195,198,1) 50%, rgba(14,91,81,1) 100%)", "You are sorted into the house of"];
  }
  else if (mod==3) {
    return ["./img/dumb.gif", "./img/h.jpeg", "./img/huff.gif", "background", "linear-gradient(90deg, hsla(0, 0%, 0%, 1) 0%, hsla(264, 3%, 32%, 1) 30%, hsla(0, 0%, 95%, 1) 60%, hsla(42, 84%, 52%, 1) 100%, hsla(258, 40%, 68%, 1) 100%)", "You are sorted into the house of"];
  }
}

const audioElement = document.getElementById("bgAudio");
const bgmusic = document.getElementById("bgm");

// Function to toggle play/pause
bgmusic.addEventListener("click", function() {
    if (audioElement.paused) {
        audioElement.play();
        bgmusic.textContent = "Pause Music";
    } else {
        audioElement.pause();
        bgmusic.textContent = "Play Music";
    }
});

// click listener for button
$("#submit").click(function() {
  var userName = $("#name").val(); // Get the user's input
  var houseSorted = sortHatString(userName); // Sort it
  var prof = houseSorted[0]
  var image = houseSorted[1];
  var gif = houseSorted[2];
  var prop = houseSorted[3];
  var bg = houseSorted[4];
  var newText = houseSorted[5];
  // const audioElement = document.getElementById("bgAudio");
  $("#visual").empty();
  $("#output").empty();
  // Append a new div to our output div for each click
  $("#output").append('<div class="text"><p>' + "Hey "+ userName + "! "+ newText + '</p></div>');
  $("#visual").append('<img id = dumble src= "' + prof + '">');
  $("#visual").append('<img id = photo src="' + image + '">');
  $("#visual").append('<img id = graphic src="' + gif + '">');
  $("#input-output").css(prop, bg)
});

$("#playAudio").click(function() {
  document.getElementById("bgAudio").play();
});
