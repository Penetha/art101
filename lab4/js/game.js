// Helper function to generate a random word of specified length
function generateRandomWord(length) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let word = '';
    for (let i = 0; i < length; i++) {
      word += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    return word;
  }
  
  // Function to calculate cows and bulls
  function calculateCowsAndBulls(secretWord, guessWord) {
    let bulls = 0, cows = 0;
    let remainingSecret = '', remainingGuess = '';
    
    // First, calculate bulls
    for (let i = 0; i < secretWord.length; i++) {
      if (secretWord[i] === guessWord[i]) {
        bulls++;
      } else {
        remainingSecret += secretWord[i];
        remainingGuess += guessWord[i];
      }
    }
    
    // Then, calculate cows
    for (let char of remainingGuess) {
      if (remainingSecret.includes(char)) {
        cows++;
        remainingSecret = remainingSecret.replace(char, ''); // Remove matched letter
      }
    }
    
    return { cows, bulls };
  }
  
  // Main game function
  function cowsAndBullsGame() {
    const numLetters = parseInt(prompt("Enter the number of letters (between 3 and 8): "));
    const numAttempts = parseInt(prompt("Enter the number of attempts allowed (between 8 and 25): "));
    const numPlayers = parseInt(prompt("Enter the number of players involved (1 or more): "));
    
    let secretWord;
    
    // If single player, the computer generates a word
    if (numPlayers === 1) {
      secretWord = generateRandomWord(numLetters);
    } else {
      // Multiplayer: Ask a player to input the secret word
      const selectingPlayer = prompt(`Player ${Math.floor(Math.random() * numPlayers) + 1}, please enter a word of length ${numLetters}: `);
      do {
        secretWord = prompt(`Enter a word of ${numLetters} letters: `).toLowerCase();
      } while (secretWord.length !== numLetters || !/^[a-z]+$/.test(secretWord)); // Validate word length and ensure it's alphabetical
    }
    
    console.log("The game begins!");
  
    let attempts = 0;
    let guessedCorrectly = false;
    
    // Recursive function for player guess input
    function handleGuess() {
      if (attempts < numAttempts && !guessedCorrectly) {
        const guess = prompt(`Attempt ${attempts + 1}/${numAttempts}: Enter your guess (length ${numLetters}): `).toLowerCase();
        
        if (guess.length !== numLetters || !/^[a-z]+$/.test(guess)) {
          console.log("Invalid guess. Please enter a word with the correct length and only letters.");
          handleGuess(); // Retry without advancing attempts
          return;
        }
        
        attempts++;
        
        const { cows, bulls } = calculateCowsAndBulls(secretWord, guess);
        console.log(`${cows} Cows, ${bulls} Bulls`);
  
        // Display cows and bulls for 30 seconds before proceeding
        setTimeout(() => {
          if (bulls === numLetters) {
            guessedCorrectly = true;
            console.log(`Congratulations! You've guessed the word in ${attempts} attempts!`);
            nextStep();
          } else {
            handleGuess(); // Prompt the player again after 30 seconds
          }
        }, 30000); // Wait 30 seconds before moving to the next attempt
      } else if (!guessedCorrectly) {
        console.log(`You've run out of attempts! The word was: ${secretWord}`);
        nextStep();
      }
    }
  
    // Function to prompt for next steps after the game ends
    function nextStep() {
      const nextAction = prompt("Do you want to start a new game, choose a new word, or exit? (Enter 'new game', 'new word', or 'exit')").toLowerCase();
  
      if (nextAction === 'new game') {
        cowsAndBullsGame();
      } else if (nextAction === 'new word') {
        cowsAndBullsGame(); // Reset, but without the initial prompts
      } else {
        console.log("Thanks for playing! Exiting game...");
      }
    }
  
    // Start the guessing process
    handleGuess();
  }
  
  // Start the game
  cowsAndBullsGame();
  