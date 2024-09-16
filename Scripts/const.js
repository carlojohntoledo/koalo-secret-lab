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

const pageContent = document.getElementById('page-content')
const character = document.getElementById('character');

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
