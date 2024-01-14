/*  Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38 */


(function currentDate() {
    let date = new Date();
    let currentDate = date.getDay();
    let currentTime = date.toLocaleTimeString().split(/[: ]/);
    let dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    console.log(`1: - Today is: ${dayArray[currentDate]} and the time is ${currentTime[0]} ${currentTime[3]} : ${currentTime[1]} : ${currentTime[2]}`);


}());

/* Write a JavaScript program to print the current window contents. */

function windowPrint() {
    window.print;
}

/* 3. Write a JavaScript program to get the current date.  
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy */

(function displayDay() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;

    console.log(`3: ${month}/${day}/${year}`);

}());

/* Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  */

function triangleArea(a, b, c) {
    let a1 = a
    let a2 = b
    let a3 = c

    let s = (a1 + a2 + a3) / 2
    let area = Math.sqrt(s * ((s - a1) * (s - a2) * (s - a3)))

    console.log(`4: ${area}`);
}

triangleArea(5, 6, 7);


/* 5. Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.  */

function wordSpin() {
    let word = 'w3resource';
    let result = word.split('');

    setInterval(function () {
        result = result[result.length - 1] + result.slice(0, result.length - 1).join('');
        result = result.split(''); // Split the string back into an array for the next iteration
        console.log(result.join('')); // Join the array to a string for displaying
    }, 100);
}
// wordSpin();

/* 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. */

function isLeapYear(start, end) {
    let years = [];

    for (let year = start; year <= end; year++) {
        // Check if the year is a leap year
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            years.push({ year: year, isLeapYear: true });
        } else {
            years.push({ year: year, isLeapYear: false });
        }
    }

    // Log the result for each year
    years.forEach(yearInfo => {
        if (yearInfo.isLeapYear) {
            console.log(`${yearInfo.year} is a leap year`);
        } else {
            console.log(`${yearInfo.year} is not a leap year`);
        }
    });
}

// isLeapYear(2000, 2020);

// 7. Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.  

function isASunday() {

    for (let year = 2014; year <= 2050; year++) {
        const d = new Date(year, 0, 1);

        if (d.getDate() === 0) {
            console.log(`1st January is being a Sunday   + ${year}`);

        }
    }


}

isASunday()

//8. Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched". 


function guessNumber(user) {
    randomInt = Math.floor(Math.random() * 11)
    randomInt == user ? console.log("You have guessed right") : console.log("You have guessed wrong");
}

guessNumber(5)

//9. Write a JavaScript program to calculate the days left before Christmas. 
function daysTillChristmas() {
    let today = new Date()
    let year = today.getFullYear()
    let cmas = new Date(year, 11, 25)

    if (today.getMonth() === 11 && today.getDate() > 25) {
        cmas.setFullYear(year + 1)
    }
    const diff = cmas - today;
    return Math.ceil(diff / (1000 * 60 * 60 * 24))

}

console.log(daysTillChristmas());

// 10. Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).  
function calculate(a, b) {
    return b == 0
        ? { error: "Division by zero is not allowed" }
        : { multiplication: a * b, division: a / b };
}
let result = calculate(5, 5)
console.log(result);

// 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C

function convertTemp(c, f) {
    let cToFahr = c * 9 / 5 + 32
    let fToCel = (f - 32) * 5 / 9

    console.log(cToFahr, fToCel);
}

convertTemp(60, 45)

// Write a JavaScript program to get the website URL (loading page).  

function getCurrentPageUrl() {
    return window.location.href;
}
// console.log("Current page URL is: " + getCurrentPageUrl());

//13. Write a JavaScript exercise to create a variable using a user-defined name. 

function createUserCreatedVariable() {
    let var_name = 'alex';
    let n = 10

    this[var_name] = n

    console.log(this[var_name]);
}
createUserCreatedVariable()

//14. Write a JavaScript exercise to get the filename extension. 

function getFileExtension(filename) {
    let index = filename.lastIndexOf('.')

    if (index > 0) {
        return filename.substring(index + 1);
    } else {
        return null
    }
}

console.log(getFileExtension("document.docx")); // Output: docx
console.log(getFileExtension("image.jpeg"));    // Output: jpeg
console.log(getFileExtension("archive.tar.gz"));// Output: gz
console.log(getFileExtension("no_extension"));  // Output: null