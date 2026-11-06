
/**
 * Generates a random integer between 1 and 100 (inclusive).
 * @returns {number} A random number from 1 to 100.
 */
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// Store the secret target number
let randomNumber = generateRandomNumber();

// --- DOM Element Grabbing ---
// Find our HTML form and input using their IDs
const guessingForm = document.getElementById('guessing-form');
const userGuessInput = document.getElementById('user-guess');

/**
 * Handles the form submission event.
 * Prevents the page from refreshing, retrieves the user's guess,
 * and checks it against the secret number.
 */
guessingForm.addEventListener('submit', function(event) {

    // 1. Prevent the default browser form submission
    event.preventDefault();

    // 2. Grab the input value and convert it to a number
    let userGuess = Number(userGuessInput.value);

    // 3. Check that the guess is between 1 and 100
    if (userGuess < 1 || userGuess > 100) {
        alert("Please enter a number between 1 and 100.");
        return;
    }

    // 4. Compare the guess to the secret number
    if (userGuess === randomNumber) {
        alert("You win! The correct number was " + randomNumber + "!");

        // Generate a new number for the next game
        randomNumber = generateRandomNumber();

    } else if (userGuess > randomNumber) {
        alert("You guessed too high!");

    } else {
        alert("You guessed too low!");
    }

    // 5. Clear the input box for the next guess
    userGuessInput.value = '';
});
