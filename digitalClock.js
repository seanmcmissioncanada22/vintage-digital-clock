// const clock = document.querySelector('.clock span');

// function getClock() {
//     const date = new Date();

//     const hours = date.getHours().toString().padStart(2, '0');
//     const minutes = date.getMinutes().toString().padStart(2, '0');
//     const seconds = date.getSeconds().toString().padStart(2, '0');

//     clock.textContent = `${hours}:${minutes}:${seconds}`
// }

// setInterval(getClock, 1000);

// getClock();

const clockSpan = document.querySelector('.clock span');

// Function to update the clock
function updateClock() {
    // Get the current date and time
    const now = new Date();

    // Get the hours, minutes, and seconds
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // Update the text content of the span
    clockSpan.textContent = `${hours}:${minutes}`;

    document.documentElement.style.setProperty('--seconds', `"${seconds}"`);
}

// Update the clock every second
setInterval(updateClock, 1000);  

// Call the function once at the start to initialize the clock
updateClock();