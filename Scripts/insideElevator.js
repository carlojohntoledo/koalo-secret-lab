const leftInsideDoor = document.getElementById('leftdoor');
const rightInsideDoor = document.getElementById('rightdoor');
const elevatorInsideDoor = document.querySelector('.elevatordoor');

// Variable to keep track of door state
let doorsOpen = false;

// Variable to check if a transition is in progress
let transitionInProgress = false;

// Add event listener to elevator door to handle click
elevatorInsideDoor.addEventListener('click', toggleElevatorDoors);

// Add event listeners to doors for transition end events
leftInsideDoor.addEventListener('transitionend', onTransitionEnd);
rightInsideDoor.addEventListener('transitionend', onTransitionEnd);

function toggleElevatorDoors() {
    if (transitionInProgress) return; // Ignore clicks if transition is in progress

    if (doorsOpen) {
        closeElevatorInside();
    } else {
        openElevatorInside();
    }
    doorsOpen = !doorsOpen; // Toggle the state
}

function openElevatorInside() {
    console.log('Door opening');
    transitionInProgress = true; // Set transition flag to true
    leftInsideDoor.style.transform = "translateX(-100%)";
    leftInsideDoor.style.transitionDelay = "0s";
    rightInsideDoor.style.transform = "translateX(120%)";

    // Ensure both doors are animated
    leftInsideDoor.style.transition = "transform 0.7s linear";
    rightInsideDoor.style.transition = "transform 1.5s linear";
}

function closeElevatorInside() {
    console.log('Door closing');
    transitionInProgress = true; // Set transition flag to true
    leftInsideDoor.style.transform = "translateX(0%)";
    leftInsideDoor.style.transitionDelay = "0.5s";
    rightInsideDoor.style.transform = "translateX(23%)";

    // Ensure both doors are animated
    leftInsideDoor.style.transition = "transform 0.8s linear 0.7s";
    rightInsideDoor.style.transition = "transform 1.5s linear";
}

function onTransitionEnd(event) {
    // Ensure this only runs for the transitions we care about
    if (event.propertyName === 'transform') {
        // Check if both doors have completed their transitions
        if (Array.from(leftInsideDoor.style.transition.split(' ')).includes('transform') && 
            Array.from(rightInsideDoor.style.transition.split(' ')).includes('transform')) {
            transitionInProgress = false; // Reset transition flag
        }
    }
}
