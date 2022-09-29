document.addEventListener("DOMContentLoaded", event => {
    timeLoop();
});

function timeLoop() {
    displayTime(new Date(Date.now()));
    setTimeout(timeLoop, 100);
}

function displayTime(date) {
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let timeSpan = document.getElementById("time-display");
    timeSpan.textContent = `${pad(hour)}:${pad(min)}:${pad(sec)}`;

    function pad(number) {
        return number.toString().padStart(2, "0");
    }
}