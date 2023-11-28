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

isLeapYear(2000, 2020);
