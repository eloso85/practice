/* 1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38 */

const time = new Date();
const date = new Date();

function whatTimeIsIt(event) {
    const btn = document.querySelector(".js_get_time_button")
    const text = document.querySelector(".js_the_time_is");

    text.innerHTML = time.toLocaleTimeString("en-US");
    btn.className = "refresh btn btn-dark";
    btn.textContent = "Refresh";
    btn.setAttribute('onclick','refreshTime()')
}

function refreshTime(){
    const refreshBtn = document.querySelector(".refresh");
    const text = document.querySelector(".js_the_time_is");
    text.innerHTML = time.toLocaleTimeString("en-US");
    
}
/* 1. END */


/* ----- 3. Write a JavaScript program to get the current date.  Go to the editor
Expected Output :mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy ----- */

function displayDate(){
    const text = document.querySelector(".js_display_date");
    text.innerHTML = date.toLocaleString().slice(0,9)
}
/* 3. END */

function triangleArea(event){
    
    const s1 = document.querySelector('.side_one').value;
    const s2 = document.querySelector('.side_two').value;
    const s3 = document.querySelector('.side_three').value;
    const p = (parseInt(s1) + parseInt(s2) + parseInt(s3)) / 2;
    const answer = Math.sqrt(p * (p - s1) * (p - s2) * (p - s3));

    // const triangleAreaAnswer = document.querySelector(".js_triangle_answer")

    // triangleAreaAnswer.innerHTML = answer

    console.log(answer);
    event.preventDefault();
}