// document.addEventListener('DOMContentLoaded', () => {
//     initializeElevator();
// });

console.log("Script loaded");

function initializeElevator() {
    console.log('initializeElevator is running');
    const leftInsideDoor = document.getElementById('insideElevator-leftdoor');
    const rightInsideDoor = document.getElementById('insideElevator-rightdoor');
    const scanner = document.getElementById('lcdscanner');
    const scanline = document.querySelector('.scanline');
    const floors = document.querySelectorAll('.floor');
    const elevatorContainer = document.querySelector('.elevator-container');
    let selectedFloor = null; // Variable to track the selected floor
    let doorsOpen = true;
    let transitionInProgress = false;
    let shakeInProgress = false; // Flag to track the shaking state

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
        if (transitionInProgress || !selectedFloor)
        {
            var errorsfx = new Audio('./SFX/incorrect-buzzer-sound-147336.mp3')
            errorsfx.play()
            errorsfx.playbackRate = 1.5;

            scanner.classList.add("error");
            setTimeout(() => {
                scanner.classList.remove("error");
            }, 2000);
            
            console.log("No destination selected!")
            return;
        }

        var scansfx = new Audio('./SFX/high-tech-spectral-creature-194036.mp3');
        scansfx.play();

        transitionInProgress = true;
        scanner.classList.add('active');
        console.clear();
        console.log(selectedFloor.id + " is selected.")
        scanline.addEventListener('transitionend', function() {
            toggleElevatorDoors();

            
        

            scanner.classList.remove('active');
        }, { once: true });
    }

    function toggleElevatorDoors() {
        if (!doorsOpen) {
            openElevatorInside();
            console.log("the door is open: " + doorsOpen);
            
        } else {
            closeElevatorInside();
            console.log("the door is open: " + doorsOpen);
        }
        doorsOpen = !doorsOpen;
    }

    function openElevatorInside() {
        transitionInProgress = true;
        console.log("The elevator is opening");
        leftInsideDoor.style.transform = "translateX(-100%)";
        rightInsideDoor.style.transform = "translateX(120%)";
        leftInsideDoor.style.transition = "transform 0.8s linear";
        rightInsideDoor.style.transition = "transform 1.5s linear";

        var elevatordoorsfx = new Audio('./SFX/20131106_elevator-door-closing_zoomh6xy-87444.mp3');
        elevatordoorsfx.play()
        elevatordoorsfx.playbackRate = 2;
        elevatordoorsfx.volume = 0.5;
        
    }

    function closeElevatorInside() {
        transitionInProgress = true;
        console.log("The elevator is closing");
        leftInsideDoor.style.transform = "translateX(0%)";
        rightInsideDoor.style.transform = "translateX(23%)";
        leftInsideDoor.style.transition = "transform 0.7s linear 0.8s";
        rightInsideDoor.style.transition = "transform 1.5s linear";

        var elevatordoorsfx = new Audio('./SFX/20131106_elevator-door-closing_zoomh6xy-87444.mp3');
        elevatordoorsfx.play()
        elevatordoorsfx.playbackRate = 2;
        elevatordoorsfx.volume = 0.5;
    }

    function onTransitionEnd(event) {
        if (event.propertyName === 'transform') {
            if (!doorsOpen) {

                var elevatorliftsfx = new Audio('./SFX/elevator-sound-99315.mp3');
                elevatorliftsfx.play();
                elevatorliftsfx.volume = 0.2;

                // When doors are closing
                if (!shakeInProgress) {
                    shakeInProgress = true; // Indicate shaking is in progress
                    startElevatorShake(); // Trigger the first shake

                    setTimeout(() => {
                        startElevatorShake(); // Trigger the second shake after 2 seconds
                        
                        setTimeout(() => {
                            openElevatorInside();
                            doorsOpen = true;
                            console.log("the door is open: " + doorsOpen); // Automatically open the doors after the second shake
                            transitionInProgress = false;
                            shakeInProgress = false;
                        }, 500); // Short delay after the second shake before opening doors

                        

                    }, 5000); // Wait 5 seconds before the second shake
                    console.log("the door is open: " + doorsOpen);
                }
                
            }

            if (selectedFloor) {
                let targetPage;
                switch (selectedFloor.id) {
                    case 'profile':
                        targetPage = '#';
                        elevatorContainer.style.backgroundImage = `url('./Images/profilelaboratory.png')`;
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
                        targetPage = '#'; 
                }
                
                window.location.href = targetPage;
            }
        }
    }

    leftInsideDoor.addEventListener('transitionend', onTransitionEnd);
    rightInsideDoor.addEventListener('transitionend', onTransitionEnd);
}

function startElevatorShake() {
    const elevatorContainer = document.querySelector('.elevator-container');
    if (elevatorContainer) {
        elevatorContainer.classList.add('shake');

        // Remove the shake class after the animation completes
        setTimeout(() => {
            elevatorContainer.classList.remove('shake');
        }, 500); // Match the duration with the CSS animation duration
    }
}
