document.addEventListener("DOMContentLoaded", event => {
    periodList = interpretTimeTable(TIMETABLE);
    timeLoop();
});

let periodList;

function timeLoop() {
    const currentPeriod = findCurrentPeriod(periodList);
    
    let time = undefined;
    if (currentPeriod) {
        time = timeUntilPeriodEnd(currentPeriod);
    }
    displayTime(time);
    
    setTimeout(timeLoop, 100);
}

function displayTime(date) {
    let timeSpan = document.getElementById("time-display");

    if (!date) {
        timeSpan.textContent = "--:--";
        return;
    }

    let hour = pad(date.getUTCHours());
    let min = pad(date.getUTCMinutes());
    let sec = pad(date.getUTCSeconds());

    timeSpan.textContent = (hour === "00" ? `${min}:${sec}` : `${hour}:${min}:${sec}`)

    function pad(number) {
        return number.toString().padStart(2, "0");
    }
}