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
    const floors = document.querySelectorAll('.floor');
    let selectedFloor = null; // Variable to track the selected floor
    let doorsOpen = false;
    let transitionInProgress = false;

    if (!leftInsideDoor || !rightInsideDoor || !scanner || !scanline) {
        console.error('One or more elements are missing.');
        return;
    }

    scanner.addEventListener('click', startScan);

    // Add click event listeners to floors to select them
    floors.forEach(floor => {
        floor.addEventListener('click', () => {
            selectedFloor = floor;
            floors.forEach(f => f.classList.remove('active')); // Remove active class from other floors
            floor.classList.add('active'); // Add active class to the selected floor
        });
    });

    function startScan() {
        console.log("startScan function called");
        if (transitionInProgress || !selectedFloor) return; // Check if a floor is selected

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

    function closeElevatorInside() {
        transitionInProgress = true;
        leftInsideDoor.style.transform = "translateX(-100%)";
        rightInsideDoor.style.transform = "translateX(120%)";
        leftInsideDoor.style.transition = "transform 0.8s linear";
        rightInsideDoor.style.transition = "transform 1.5s linear";
    }

    function openElevatorInside() {
        transitionInProgress = true;
        leftInsideDoor.style.transform = "translateX(0%)";
        rightInsideDoor.style.transform = "translateX(23%)";
        leftInsideDoor.style.transition = "transform 0.7s linear 0.8s";
        rightInsideDoor.style.transition = "transform 1.5s linear";
    }

    function onTransitionEnd(event) {
        if (event.propertyName === 'transform') {
            transitionInProgress = false;
            if (selectedFloor) {
                // Determine the URL based on the selected floor
                let targetPage;
                switch (selectedFloor.id) {
                    case 'profile':
                        targetPage = 'profileLaboratory.html';
                        break;
                    case 'skills':
                        targetPage = '#';
                        break;
                    case 'projects':
                        targetPage = '#';
                        break;
                    case 'certificate':
                        targetPage = '#';
                        break;
                    default:
                        targetPage = '#'; // Default fallback page
                }
                window.location.href = targetPage;
            }
        }
    }

    leftInsideDoor.addEventListener('transitionend', onTransitionEnd);
    rightInsideDoor.addEventListener('transitionend', onTransitionEnd);
}

initializeElevator();
