const trackingArea = document.getElementById('tracking-area');
const trackingFixedArea = document.getElementById('fixed-container');
const menuCont = document.getElementById('menu-btn-container');
const head = document.getElementById('head');
const ears = document.getElementById('ears');
const characterBody = document.getElementById('characterbody');
const eyes = document.querySelectorAll('.eye');
const puzzlebox = document.querySelector('.puzzlebox');
const leftshelf = document.getElementById('bookshelfone');
const rightshelf = document.getElementById('bookshelftwo');
const elevatordoor = document.querySelector('.door-container');
const leftdoor = document.getElementById('leftdoor');
const rightdoor = document.getElementById('rightdoor');
const body = document.body;



let isDragging = false;
let startX;
let initialRotation = 0;
let isDizzy = false;
let dizzyTimeout;
let previousPositions = [];
const maxPositions = 50; // Maximum positions to track
let fullCircles = 0; // Count of full circles
const requiredCircles = 5; // Number of circles required to make character dizzy

// Event listeners for scrolling to sections


const warning = document.querySelector('.landscape-warning');

function adjustHeight() {
    if (window.innerHeight < window.innerWidth && window.innerWidth <= 768) {
        trackingFixedArea.classList.add('landscape-height');
    } else {
        trackingFixedArea.classList.remove('landscape-height');
    }
}

// const introScreen = document.getElementById('intro-screen');
// function checkOrientation() {
//     if (window.innerHeight > window.innerWidth && window.innerWidth <= 768) {
//         warning.style.display = 'flex';
//         introScreen.style.display = 'none';
//     } else {
//         warning.style.display = 'none';
//         introScreen.style.display = 'flex';
//         // fullscreenButton.style.display = 'flex';
//         // goFullscreen();
//     }
// }

document.addEventListener('DOMContentLoaded', function() {
    // Load the click sound effect
    const clickSfx = new Audio('./SFX/click-sound.mp3'); // replace with the correct path to your click SFX file
    
    // Load the background music
    const bgMusic = new Audio('./SFX/StockTune-Dreaming Seoul Autumn Memories_1726033245.mp3'); // replace with the correct path to your background music file
    bgMusic.loop = true; // Enable looping for the background music
    bgMusic.volume = 0.5; // Set volume (optional)

    // Function to start background music and handle clicks
    const startAudio = () => {
        bgMusic.play(); // Start background music
        bgMusic.volume = 0.2;
        document.addEventListener('click', function() {
            // Play the click sound effect on every click
            clickSfx.currentTime = 0; // Rewind to the start for consecutive clicks
            clickSfx.play();
        });

        // Remove the first click listener after it fires once
        document.removeEventListener('click', startAudio);
    };

    // Start the audio on the first click (or any interaction)
    document.addEventListener('click', startAudio);
});






// Song by <a href="https://stocktune.com/free-music/dreaming-seoul-autumn-memories-160762-104708">StockTune</a>