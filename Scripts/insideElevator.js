document.addEventListener('DOMContentLoaded', () => {
    initializeElevator();
});

console.log("Script loaded");

function initializeElevator() {

    console.log('initializeElevator is running');
    const leftInsideDoor = document.getElementById('insideElevator-leftdoor');
    const rightInsideDoor = document.getElementById('insideElevator-rightdoor');
    const scanner = document.getElementById('lcdscanner');
    const scanline = document.querySelector('.scanline');

    if (!leftInsideDoor || !rightInsideDoor || !scanner || !scanline) {
        console.error('One or more elements are missing.');
        return;
    }

    let doorsOpen = false;
    let transitionInProgress = false;

    scanner.addEventListener('click', startScan);

    function startScan() {
        console.log("startScan function called");
        if (transitionInProgress) return;

        transitionInProgress = true;
        scanner.classList.add('active');

        scanline.addEventListener('transitionend', function() {
            toggleElevatorDoors();
            scanner.classList.remove('active');
        }, { once: true });
    }

    function toggleElevatorDoors() {
        if (doorsOpen) {
            closeElevatorInside();
        } else {
            openElevatorInside();
        }
        doorsOpen = !doorsOpen;
    }

    function openElevatorInside() {
        transitionInProgress = true;
        leftInsideDoor.style.transform = "translateX(-100%)";
        rightInsideDoor.style.transform = "translateX(120%)";
        leftInsideDoor.style.transition = "transform 0.7s linear";
        rightInsideDoor.style.transition = "transform 1.5s linear";
    }

    function closeElevatorInside() {
        transitionInProgress = true;
        leftInsideDoor.style.transform = "translateX(0%)";
        rightInsideDoor.style.transform = "translateX(23%)";
        leftInsideDoor.style.transition = "transform 0.8s linear 0.7s";
        rightInsideDoor.style.transition = "transform 1.5s linear";
    }

    function onTransitionEnd(event) {
        if (event.propertyName === 'transform') {
            transitionInProgress = false;
            window.location.href = 'profileLaboratory.html';
        }
    }

    leftInsideDoor.addEventListener('transitionend', onTransitionEnd);
    rightInsideDoor.addEventListener('transitionend', onTransitionEnd);
}

initializeElevator();