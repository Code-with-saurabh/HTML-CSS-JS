// Selecting DOM elements
let start = document.querySelector(".set");
let stop = document.querySelector(".paush"); // Changed from ".paush" to ".pause"
let reset = document.querySelector(".reset");
let data = document.querySelector("#data");

let timerInterval; // Variable to hold interval ID
let milliseconds = 0; // Initial milliseconds
let seconds = 0; // Initial seconds
let minutes = 0; // Initial minutes

// Function to update the timer display
function updateTimer() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    // Format the time as mm:ss:ms
    let timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
    data.innerHTML = timeString;
}

// Function to start the timer
function startTimer() {
    timerInterval = setInterval(updateTimer, 10); // Update timer every 10 milliseconds (for milliseconds accuracy)
}

// Function to stop the timer
function stopTimer() {
    clearInterval(timerInterval); // Stop the interval
}

// Function to reset the timer
function resetTimer() {
    clearInterval(timerInterval); // Stop the interval if running
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    data.innerHTML = "00:00:00"; // Reset the display to initial value
}

// Event listeners
start.addEventListener("click", () => {
    startTimer();
});

stop.addEventListener("click", () => {
    stopTimer();
});

reset.addEventListener("click", () => {
    resetTimer();
});
