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

//26. Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more. 

function threeString(str) {
    if (str.length <= 3) {
        console.log("string must be larget then 3 characters");
        return false
    }

    let firstThree = str.slice(0, 3)
    let lastThree = str.slice(str.length - 3)

    let newString = lastThree + str.substring(3, str.length - 3) + firstThree
    console.log(`Original string: ${str}`);
    console.log(`Swapped string: ${newString}`);

    return newString
}

threeString('LIFEHACKS')

//27. Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.  

function hasJava(str) {
    let string = str.toLowerCase().startsWith('java')

    if (string) {
        console.log(`${str} does start java`);
    } else {
        console.log(`${str} does not start java`);
    }

    console.log(string);
}

hasJava('javascript')

//28. Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.  

function checkInt(num1, num2) {
    // Check if either num1 or num2 is within the range 50 to 99
    if ((num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99)) {
        return true;
    } else {
        return false;
    }
}

console.log(checkInt(2, 2)); // Should return false
console.log(checkInt(55, 10)); // Should return true
console.log(checkInt(100, 60));

/*30. Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. 
If "Script" appears in the string, return the string without "Script" otherwise return the original one.  */

function checkString(str) {
    let userString = str.toLowerCase().lastIndexOf("script");

    if (userString == 4) {
        return console.log(`${str} has ${str.slice(4, str.length)} in the 5th postion`);
    } else {
        console.log(`${str} does not`);
    }

}

checkString("javaSCRIPT")

//31. Write a JavaScript program to find the largest of three given integers.  

function largestInt(num1, num2, num3) {
    let intArray = [];
    intArray.push(num1, num2, num3)

    console.log(Math.max(...intArray))
}

largestInt(24, 6, -99)


//32. Write a JavaScript program to find the closest value to 100 from two numerical values.  

function closeToHundred(num1, num2) {
    let diff1 = Math.abs(100 - num1);
    let diff2 = Math.abs(100 - num2);

    if (diff1 < diff2) {
        console.log(`${num1} is closer to 100`);
        return num1;
    } else if (diff2 < diff1) {
        console.log(`${num2} is closer to 100`);
        return num2;
    } else {
        console.log('Both numbers are equally close to 100');
        return 'Both numbers are equally close to 100';
    }
}

closeToHundred(25, 35);

//33. Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive. 

function checkRange(num1, num2) {
    let inRange = function (num, start, end) {
        return num >= start && num <= end;
    }

    if ((inRange(num1, 40, 60) && inRange(num2, 40, 60)) ||
        (inRange(num1, 70, 100) && inRange(num2, 70, 100))) {
        console.log('true');
    } else {
        console.log('false');
    }
}

checkRange(41, 59)

//34. Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive. 
function largestInt(num1, num2) {
    let largest = Math.max(num1, num2)
    let inRange = function (num, start, end) {
        return num >= start && num <= end;

    }
    if (inRange(num1, 40, 60) && inRange(num2, 40, 60)) {
        console.log(`${largest} is between 40 - 60 `);
    } else {
        console.log("Neither number is between 40 - 60 ");
    }

}

largestInt(40, 60)

//35. Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string. 
function isBetween(char, string) {
    let check = string.substring(1, 4)
    console.log(check);
}

isBetween("a", "javascript")


//36. Write a JavaScript program that checks whether the last digit of three positive integers is the same.

function checkLastDigit(a, b, c) {

    if (a > 0 && b > 0 && c > 0) {
        return console.log('all ints are postive');
    } else {
        return console.log('their is a negative int');
    }


}

checkLastDigit(1, 2, 3)

//37. Modify String Based on Length (First 3 Lowercase/Uppercase)

function firstThree(string) {
    if (string.length > 3) {
        let newString = string.slice(0, 3).toLowerCase() + string.slice(3);
        console.log(newString);

    } else {
        console.log("Nothing here ");

    }
}
firstThree("PYT")

//38. Evaluate Grades Based on Total Marks and Final Exam

function gradeChecker(arry, isExam) {
    let averageGrade = arry.reduce((sum, num) => sum + num, 0) / arry.length;
    if (averageGrade >= 89 && isExam) {
        console.log(`Your average grade is ${averageGrade} and this includes your main exam`);

    } else {
        console.log("false");

    }
    // console.log(averageGrade);



}

gradeChecker([80, 95, 99, 99], true)

//39.Sum Two Integers and Return Based on Range

function sumOfRange(int1, int2) {
    let sumTotal = int1 + int2;

    if (sumTotal >= 50 && sumTotal <= 80) {
        console.log('65');

    } else {
        console.log('80');

    }

}
sumOfRange(5, 20)

/**
 * 40. Check if Integer is 8 or Difference/Sum Equals 8
 * @param {number} int1 - The first int
 * @param {number} int2 - The Second int
 * @returns {boolean} - Returns true if any of the conditions are met
 */

const isIntEight = (int1, int2) => {
    const isEitherEight = int1 === 8 || int2 === 8;
    const isSumEight = int1 + int2 === 8;
    const isDiffEight = Math.abs(int1 - int2) === 8;

    return isEitherEight || isSumEight || isDiffEight

};

console.log(isIntEight(5, 3));

/**
 * 41 Return 30, 40, or 20 Based on Same Numbers
 * @param {number} num1 - this is the first number
 * @param {number} num2 - this is the first number
 * @param {number} num3 - this is the first number
 * @returns {number} - it returns 30. If two numbers are the same, it returns 40. Otherwise, it returns 20
 */

const checkThree = (num1, num2, num3) => {
    const allSame = num1 === num2 && num2 === num3;
    const onlyTwo = num1 === num2 || num2 === num3 || num3 === num1;

    return allSame ? 30 : onlyTwo ? 40 : 20;
}

console.log(checkThree(5, 5, 5))


/**
 * 
 * @param {number} num1 - this is the first number 
 * @param {number} num2 - this is the second number
 * @param {number} num3 - this is the third number
 * @returns {bolean} - the final reault will return "strict mode " or "Soft Mode"
 */

const strictOrSoft = (num1, num2, num3) => {
    const isStrict = num1 < num2 && num2 < num3;
    const isSoft = (num1 <= num2 || num2 <= num3);

    return isStrict ? "Stirct Mode" : isSoft ? "Soft Mode" : "Undefined";
}

console.log(strictOrSoft(10, 15, 31))
console.log(strictOrSoft(24, 22, 31))
console.log(strictOrSoft(50, 21, 15))

/**
 * 43 Check the Rightmost Digits of the Three Numbers
 * This function checks whether the rightmost digits of three given numbers are the same.
 * If all rightmost digits match, it returns "They Match". Otherwise, it returns "They do not match".
 *
 * @param {number} n1 - The first number to check
 * @param {number} n2 - The second number to check
 * @param {number} n3 - The third number to check
 * @returns {string} - "They Match" if all rightmost digits are the same, otherwise "They do not match"
 */

const rightMost = (n1, n2, n3) => {
    const numbers = [n1, n2, n3]
    const rightMostDigit = numbers[0] % 10;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 10 !== rightMostDigit) {
            return "They do not match"
        }
    }

    return "They Match"
}

console.log(rightMost(22, 32, 42))

/**
 * 44. This JavaScript program evaluates three given integers to determine if one number is greater 
 * than or equal to 20 and less than the other two.
 * 
 * @param {number} n1 - First number
 * @param {number} n2 - Second number
 * @param {number} n3 - Third number
 * @returns {boolean} - True if one number meets the conditions, otherwise false
 */
const evaluateNumbers = (a, b, c) =>
    (a >= 20 && a < b && a < c) ||
    (b >= 20 && b < a && b < c) ||
    (c >= 20 && c < a && c < b);

// Example usage
console.log(evaluateNumbers(25, 30, 22)); // true
console.log(evaluateNumbers(21, 19, 50)); // false
console.log(evaluateNumbers(20, 25, 10)); // true




/**
 * Check if Integer is 15, or Sum/Difference is 15d
 * @param {number} num1 - first number to evaluatee
 * @param {number} num2 - second number to evaluate
 * 
 * @returns {bolean} - true if any of the requirments are met
 */

const isfifteen = (num1, num2) => {

    if (num1 === 15 || num2 === 15 || num1 + num2 || Math.abs(num1 - num2 === 15)) {
        return true
    }
}

console.log(isfifteen(15, 20))

/**
 * 47Check if only one integar is multiple of 7 or 11
 */

const sevenOrEleven = (int1) => {

    return int1 % 7 === 0 || int1 % 11 === 0;

}

console.log(sevenOrEleven(2));

/**
 * Reverse a given String
 * 
 */

const stringReverse = (str) => {
    const stringArray = str.split("").reverse().join("")
    return stringArray
}

console.log(stringReverse('welcome'))



/**
 * 48 character plus 1
 */

const characterPlusOne = (str) => {
    const charCodes = []
    for (let i = 0; i < str.length; i++) {
        charCodes.push(str.charCodeAt(i) + 1);
    }
    return charCodes.map(code => String.fromCharCode(code)).join("")


}

console.log(characterPlusOne("python"));

/**
 * 49 Capaitalize First Letter of Each Word in String
 * 
 */

const capFirstLetterOfWord = (str) => {
    let stringArray = str.split(" ")
    for (let i = 0; i < stringArray.length; i++) {
        //Capitalize the first letter and concatenate with the rest of the word
        stringArray[i] = stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1);
    }
    return stringArray.join(" ")
}
console.log(capFirstLetterOfWord("the quick brown fox"))

/**
 * Transform a number to Hours and Minutes
 */

const numToHoursAndMintues = (num) => {
    let time = Math.floor(num / 60) + ":" + num % 60

    return time
}

console.log(numToHoursAndMintues(1441))

/**
 * Sort Letters Alphabetically in String
 * 
 */

const sortAlpha = (str) => {
    let stringArray = str.split("").sort().join("")

    return stringArray
}

console.log(sortAlpha("Python"))

/**
 * Check 'a' and 'b' Seperated by Exactly 3 places 
 */

const byThree = (string) => {
    index1 = string.indexOf("a");
    index2 = string.indexOf("b");

    if (index1 === -1 || index2 === -1) {
        return false
    }

    return Math.abs(index2 - index1) === 4;
}

console.log(byThree("chainsbreak"));
console.log(byThree("pane borrowed"));
console.log(byThree("abcheck"))

