// 

function dateAndTime() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satuday']
    const now = new Date();

    const day = days[now.getDay()];
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const period = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12 // the hour 0 should be '12

    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    process.stdout.write(`\rToday is : ${day}. Current time is : ${hours} ${period} : ${formattedMinutes} : ${formattedSeconds}`);





}
//setInterval(dateAndTime, 1000)
// 
