const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

const askQuestion = () => {
    readline.question('Guess the number between 1 and 10: ', (input) => {
        const guess = parseInt(input, 10);
        attempts++;

        if (guess === randomNumber) {
            console.log(`Congratulations! You guessed the number in ${attempts} attempts.`);
            readline.close();
        } else if (guess < randomNumber && !isNaN(guess)) {
            console.log("Incorrect. The number is higher. Try again.");
            askQuestion();
        } else if (guess > randomNumber && !isNaN(guess)) {
            console.log("Incorrect. The number is lower. Try again.");
            askQuestion();
        } else {
            console.log("That's not a number. Please enter a number between 1 and 10.");
            askQuestion();
        }
    });
};

askQuestion();
