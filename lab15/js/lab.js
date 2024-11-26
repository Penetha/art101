// index.js - Lab 15: AJAX. This simple JavaScript/jQuery script dynamically fetches Pokémon data based on user input.
// Author: Penetha Jayakumar, Sandy St
// Date: 25Nov2024

// Event listener for activate button click
$("#activate").click(function () {
    // Get the Pokémon ID from the input field
    const pokemonID = $("#pokemon").val(); // Retrieves the value entered by the user

    // Validate input to ensure it is a number between 1 and 1025 and not empty
    if (!pokemonID || isNaN(pokemonID)) {
        console.error("Please enter a valid Pokémon ID.");
        $("#output").text("Invalid input! Please enter a numeric Pokémon ID.");
        return;
    }
    if (pokemonID <1 || pokemonID >1025) {
        console.error("Please enter a valid Pokémon ID between 1 and 1025.");
        $("#output").text("Please enter a number between 1 and 1025 for pokemon ID.");
        return;
    }

    // Construct the API URL dynamically
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonID}`;

    // AJAX call to fetch Pokémon data
    $.ajax({
        url: apiUrl, // Use the dynamically constructed URL
        type: "GET", // HTTP method
        dataType: "JSON", // Expected response format
        success: function (data) {
            console.log("Success!!", data); // Log response for debugging
            
            // Clear previous output
            $("#output").empty();
            
            // Append Pokémon name and image to the output div
            $("#output").append("<p>Pokémon Name: <span id='text'>" + data.name + "</span></p>");
            $("#output").append("<img id='pokemonimage' src='" + data.sprites.front_default + "' alt='" + data.name + " sprite'>");
        },
        error: function (xhr, textStatus, errorThrown) {
            console.error("Error:", textStatus, errorThrown); // Log error details
            $("#output").text("Failed to fetch Pokémon data. Please try again.");
        }
    });
});

// Show the dialog and overlay
$('#openDialog').click(function() {
    $('#overlay, #dialogBox').fadeIn();
});

// Hide the dialog and overlay
$('#closeDialog, #overlay').click(function() {
    $('#overlay, #dialogBox').fadeOut();
});

