// index.js - Lab 16: JSON and APIs. This simple JavaScript/jQuery script dynamically fetches XKCD comic data based on user input.
// Author: Penetha Jayakumar, Sandy St
// Date: 2Dec2024

$(document).ready(function () {
    // Handle 'specific' button click
    $('#specific').click(function () {
      // Enable the comic ID input and fetch button
      $('#comicID').prop('disabled', false);
      $('#fetch').prop('disabled', false);
  
      // Disable the 'random' button
      $('#random').prop('disabled', true);
  
      // Clear the output section
      clearOutput();
    });
  
    // Handle 'random' button click
    $('#random').click(function () {
      // Disable the comic ID input and fetch button
      $('#comicID').prop('disabled', true);
      $('#fetch').prop('disabled', true);
  
      // Disable the 'specific' button
      $('#specific').prop('disabled', true);
  
      // Clear the output section
      clearOutput();
  
      // Fetch a random XKCD comic
      fetchRandomComic();
    });
  
    // Handle 'fetch' button click for specific comic
    $('#fetch').click(function () {
      const comicID = $('#comicID').val();
      if (comicID) {
        // Clear the output section
        clearOutput();
  
        // Fetch the specific comic
        fetchSpecificComic(comicID);
      } else {
        alert('Please enter a valid comic ID.');
      }
    });
  
    // Reload button functionality
    $(document).on('click', '#reload', function () {
      location.reload(); // Reload the page to reset everything
    });
  
    /*Function to fetch a specific XKCD comic by its ID.*/
    function fetchSpecificComic(comicID) {
      $.ajax({
        url: `https://xkcd.com/${comicID}/info.0.json`,
        method: 'GET',
        dataType: 'JSON',
        success: function (comicObj) {
        //   displayComic(data);
            console.log("Success!!", comicObj); // Log response for debugging
           // Update the section title dynamically using the comic title
            $('section > h1').text(comicObj.title);
        
            // Display the comic in the output section
            $('#output').html(`
                <h3>${comicObj.title}</h3>
                <img src="${comicObj.img}" alt="${comicObj.alt}" title="${comicObj.alt}">
                <p>${comicObj.alt}</p>
                <button id="reload">Reload Page</button>
            `);
        },
        error: function (textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown); // Log error details
            $('#output').html(`<p>Error fetching the comic. Please check the comic ID.</p>
            <button id="reload">Reload Page</button>`);
        },
      });
    }
  
    /* Function to fetch a random XKCD comic.*/
    function fetchRandomComic() {
      const maxComics = 3019; // Adjust this number to the latest XKCD comic count
      const randomID = Math.floor(Math.random() * maxComics) + 1;
      fetchSpecificComic(randomID);
    }
  
    /*Function to display a comic in the output section.*/
    function displayComic(comicObj) {
      // Update the section title dynamically using the comic title
      $('section > h1').text(comicObj.title);
  
      // Display the comic in the output section
      $('#output').html(`
        <h3>${comicObj.title}</h3>
        <img src="${comicObj.img}" alt="${comicObj.alt}" title="${comicObj.alt}">
        <p>${comicObj.alt}</p>
        <button id="reload">Reload Page</button>
      `);
    }
  
    /*Function to clear the output section.*/
    function clearOutput() {
      $('#output').empty(); // Clear the HTML content inside the output div
    }
  });
  
  
$("#dialogBox").hide();

// Show the dialog and overlay
$('#openDialog').click(function() {
    $('#overlay, #dialogBox').show();
});

// Hide the dialog and overlay
$('#closeDialog, #overlay').click(function() {
    $('#overlay, #dialogBox').hide();
});

