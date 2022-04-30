//New year declaration
const newYears = "1 Jan 2023";

// Declarations 
const daysE1 = document.getElementById("days");
const hoursE1 = document.getElementById("hours");
const minutesE1 = document.getElementById("minutes");
const secondsE1 = document.getElementById("seconds");

// countDown Function
function countdown(){
    const newYearDate = new Date(newYears);
    const currentDate = new Date();

    // Get Time Line
    let totalSeconds = (newYearDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    console.log(days);

    // Changing Countdown Texts
    daysE1.innerHTML = days;
    hoursE1.innerHTML = hours;
    minutesE1.innerHTML = minutes;
    secondsE1.innerHTML = seconds;
}

// Formatting Time Function
function formatTime(time){
    return time < 10 ? `0${time}` : time;
}
// Initial Call 
setInterval(countdown,1000);