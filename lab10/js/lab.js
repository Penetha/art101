// index.js - Lab 10: JavaScript for the Web. This simple JavaScript/jQuery script appends new elements to an output div
// Author: Penetha Jayakumar, Sandy St
// Date: 11Nov2024

function displayRandomMoral() {
  // Array of morals from Aathichudi, each representing a single moral lesson by Avvaiyar.
  // Defined within the function so it's only available to this function.
  const morals = [
      "அறம் செய விரும்பு",    // "Desire to do good deeds"
      "ஆறுவது சினம்",        // "Calm down anger"
      "இயல்வது கரவேல்",      // "Give what you can"
      "ஈவது விலக்கேல்",       // "Do not prevent charity"
      "உடையது விளம்பேல்",     // "Do not boast about possessions"
      "ஊக்கமது கைவிடேல்",     // "Do not lose enthusiasm"
      "எண் எழுத்து இகழேல்",   // "Do not disdain literacy and numbers"
      "ஏற்பது இகழ்ச்சி",       // "Receiving is disgraceful"
      "ஐயம் இட்டு உண்",       // "Give the doubtful and eat"
      "ஒப்புர வொழுகு",        // "Be agreeable and adaptable"
      "ஓதுவது ஒழியேல்",       // "Never stop learning"
      "ஔவியம் பேசேல்",        // "Do not speak harshly"
      "அச்சமில் வொழி",        // "Live without fear"
      "கண்ட கொடி விடேல்",      // "Do not abandon those who seek refuge"
      "செய்வன திருந்தச் செய்", // "Do what you do well"
      "சீர்மை தழியேல்",       // "Do not lose dignity"
      "சூது விலக்கேல்",       // "Avoid gambling"
      "தூக்கமது கைவிடேல்",    // "Do not abandon punctuality"
      "தெய்வத்தைக் காப்பு",     // "Protect divine values"
      "தேர்ந்த நெறி திரு",    // "Follow the righteous path"
      "நன்றி மறவேல்",         // "Do not forget gratitude"
      "நல்குதல் பயிலேல்",     // "Practice giving"
      "பணிய வேண்டும்",        // "Be obedient"
      "பயன் இன்றி இரேல்",     // "Do not remain without purpose"
      "மிகுதி குறைந்த திரு",   // "Live with moderation"
      "வகுதல் சிதையேல்",      // "Do not sow discord"
      "வாய்மை மறமேல்"        // "Do not abandon truthfulness"
  ];

  // Generate a random index number between 0 and the length of the morals array (27 morals).
  // Math.random() generates a decimal between 0 and 1, so we multiply by the array length and round down.
  const randomIndex = Math.floor(Math.random() * morals.length);

  // Select a moral from the array using the random index
  const randomMoral = morals[randomIndex];

  // Display the randomly selected moral in the HTML element with the ID "moral"
  // document.getElementById("moral").innerText = randomMoral;
  return randomMoral;
}

// click listener for button
$("#make-convo").click(function(){
    // get new fake dialogue
  const newText = displayRandomMoral();
  // append a new div to our output div
  $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});