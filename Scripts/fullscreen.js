const fullscreenButton = document.getElementById('fullscreenButton');

function goFullscreen() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { // Firefox
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
        document.documentElement.msRequestFullscreen();
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
    }
}

function handleButtonClick() {
    if (!document.fullscreenElement && // Standard method
        !document.mozFullScreenElement && // Firefox
        !document.webkitFullscreenElement && // Chrome, Safari and Opera
        !document.msFullscreenElement) { // IE/Edge
        goFullscreen();
        fullscreenButton.innerHTML = `<div class="sign"></div>
        <div class="text">Exit Fullscreen</div>`;
    } else {
        exitFullscreen();
        fullscreenButton.innerHTML = `<div class="sign"></div>
        <div class="text">Enter Fullscreen</div>`;
    }
}

// Initialize the button text based on current fullscreen state
function updateFullscreenButton() {
    if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
        fullscreenButton.innerHTML = `<div class="sign"></div>
        <div class="text">Exit Fullscreen</div>`;
    } else {
        fullscreenButton.innerHTML = `<div class="sign"></div>
        <div class="text">Enter Fullscreen</div>`;
    }
}

fullscreenButton.addEventListener('click', handleButtonClick);

// Update button text on page load
updateFullscreenButton();

// Listen for fullscreen change events to update button text
document.addEventListener('fullscreenchange', updateFullscreenButton);
document.addEventListener('webkitfullscreenchange', updateFullscreenButton);
document.addEventListener('mozfullscreenchange', updateFullscreenButton);
document.addEventListener('MSFullscreenChange', updateFullscreenButton);

window.addEventListener('resize', () => {
    adjustHeight();
    checkOrientation();
});

window.addEventListener('orientationchange', () => {
    adjustHeight();
    checkOrientation();
});

// Initial check
adjustHeight();
// checkOrientation();