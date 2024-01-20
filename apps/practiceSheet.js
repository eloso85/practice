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

//15. Write a JavaScript program to get the difference between a given number and 13, if the total of number is broader than 13 return double the absolute difference. 

function isGreater(num) {
    let a = num - 13

    if (a > 13) {
        return a * 2
    } else {
        return a
    }
}

console.log(isGreater(27));

//16. Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum. 

function sumOfTwo(num1, num2) {
    let sum = num1 + num2

    if (num1 == num2) {
        return sum * 3
    } else {
        return sum
    }
}

console.log(sumOfTwo(5, 5));

//Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19
function differenceOrTriple(number) {
    const difference = Math.abs(number - 19);

    if (number > 19) {
        return 3 * difference;
    } else {
        return difference;
    }
}

// Test the function
console.log(differenceOrTriple(15)); // Output: 4
console.log(differenceOrTriple(22)); // Output: 9

//Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.  
function isFiftyOrSumFifty(a, b) {
    return a === 50 || b === 50 || (a + b) === 50;
}

// Test the function
console.log(isFiftyOrSumFifty(25, 25)); // Output: true
console.log(isFiftyOrSumFifty(50, 10)); // Output: true
console.log(isFiftyOrSumFifty(20, 20)); // Output: false

//19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400
function integerBetween(n) {
    if (Math.abs(100 - n) <= 20 || (Math.abs(400 - n) <= 20)) {
        return console.log(`${n} is ${integerBetween ? 'within' : 'not within'} 20 of either 100 or 400.`);
    }
}

integerBetween(80)

//20. Write a JavaScript program to check two given integers whether one is positive and another one is negative.

function checkOnePositiveOneNegative(n1, n2) {
    return (Math.sign(n1) !== Math.sign(n2) && n1 !== 0 && n2 !== 0)
        ? `Number ${n1} is ${n1 > 0 ? 'positive' : 'negative'} and number ${n2} is ${n2 > 0 ? 'positive' : 'negative'}`
        : "Both numbers are either positive or negative";
}

console.log(checkOnePositiveOneNegative(-3, 5)); // Number -3 is negative and number 5 is positive

//21. Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.

function createString(string) {
    let addString = 'py'
    let newString = addString.concat(string)

    return string.startsWith('21: py') ? `Your string starts with py ${string}` : ` 21: Your string did not start with py so we added it the new string is ${newString}`

}

console.log(createString('python'));

//22. Write a JavaScript program to remove a character at the specified position in a given string and return the modified string. 

function chop(p1, p2) {
    let string = 'This is a long letter'
    let chopString = string.slice(p1, p2)

    console.log(chopString);
}

chop(1, 4);


//23. Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1. 

function stringManu(str) {
    // Check if the string length is less than or equal to 1
    if (str.length <= 1) {
        console.log('The string is too short to swap characters.');
        return str; // Return the original string as it is
    }

    // Extract the first and last characters
    let firstChar = str[0];
    let lastChar = str[str.length - 1];

    // Reconstruct the string with swapped characters
    let swappedString = lastChar + str.substring(1, str.length - 1) + firstChar;

    // Logging for demonstration
    console.log(`Original string: ${str}`);
    console.log(`Swapped string: ${swappedString}`);

    // Return the new string
    return swappedString;
}

stringManu('alejandro');

//25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7. 

function isMultipleOfThreeOrSeven(num) {

    if (num < 0) {
        console.log('This is not a positive numbe');
        return false
    }

    if (num % 7 == 0 || num % 3 == 0) {
        console.log('true');
        return true

    } else {
        console.log('false');
        return false
    }

}

isMultipleOfThreeOrSeven(-2)

