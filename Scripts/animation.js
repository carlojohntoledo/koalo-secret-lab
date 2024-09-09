// animations.js
function blink(eyes) {
    eyes.forEach(eye => {
        const eyelid = eye.querySelector('.eyelid');
        eyelid.style.transform = 'scaleY(1)';
        setTimeout(() => {
            eyelid.style.transform = 'scaleY(0)';
        }, 200); // Duration of the blink animation
    });
    setTimeout(() => blink(eyes), getRandomInt(100, 5000)); // Random interval between blinks
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function triggerDizzyMotion() {
    if (!body.classList.contains('night') && !isDizzy) {
        isDizzy = true;
        head.classList.add('dizzy');
        ears.classList.add('dizzy');
        eyes.forEach(eye => {
            eye.style.display = 'none'; // Hide the eyes during dizzy state
        });
        dizzyTimeout = setTimeout(() => {
            head.classList.remove('dizzy');
            ears.classList.remove('dizzy');
            eyes.forEach(eye => {
                eye.style.display = 'flex'; // Show the eyes after dizzy state
            });
            isDizzy = false;
        }, 5000); // Duration of the dizzy animation
    }
}

// Handle mouse click to prevent changing the eye display state during dizzy
document.addEventListener('click', (event) => {
    if (isDizzy) {
        event.stopPropagation();
        event.preventDefault();
    }
});



// Trigger waving animation on character click
// Implement waving animation logic
var toppest = false;
function triggerWavingAnimation() {
    if (!body.classList.contains('night')) {
        const checkScrollPosition = setInterval(() => {
        
            if (window.scrollY === 0) {
                clearInterval(checkScrollPosition);
                toppest = true;
                if (toppest) {
                    character.classList.add('waving');
                    clearTimeout(dizzyTimeout); // Stop dizzy animation if active
                    head.classList.remove('dizzy'); // Ensure the dizzy class is removed
                    character.style.transition = 'transform 0.3s ease'; // Ensure the transition is applied
                }
                console.log("top = " + toppest);
                trackingArea.removeEventListener('mousemove', handleMouseMove); // Enable mouse tracking
                trackingArea.removeEventListener('mouseenter', handleMouseEnter);
                trackingArea.removeEventListener('mouseleave', handleMouseLeave);
            }
        
        }, 200);
        
        setTimeout(() => {
            character.classList.remove('waving');
            trackingArea.addEventListener('mousemove', handleMouseMove); // Enable mouse tracking
            trackingArea.addEventListener('mouseenter', handleMouseEnter);
            trackingArea.addEventListener('mouseleave', handleMouseLeave);
        }, 5000); // Duration of the waving animation
    }

    if (body.classList.contains('dizzy')) {
        clearTimeout(dizzyTimeout); // Stop dizzy animation if active
        head.classList.remove('dizzy'); // Ensure the dizzy class is removed
        character.classList.add('waving');
        setTimeout(() => {
            character.classList.remove('waving');
        }, 5000); // Duration of the waving animation
    }
}

function triggerSleepAnimation() {

    const headElement = document.getElementById('sleepyhead');
    const floatZsElement = document.getElementById('floatingZs')
    headElement.style.backgroundImage = 'url("Images/koaloDizzyState.png")';
    floatZsElement.style.backgroundImage = "none"
    floatZsElement.style.animation = "none";
    headElement.style.animation = "none";

    character.style.transition = 'transform 0.3s ease';
    character.style.transform = `translate(0px, 100px)`; // Reset character position
    character.classList.remove('waving');

    // Reset character head image
    headElement.style.animation = "sleeping 2s infinite";
    headElement.style.backgroundImage = '';
    floatZsElement.style.backgroundImage = '';
    floatZsElement.style.animation = "floatZs 2s infinite ease-in-out";

    // Reset background image
    body.style.backgroundImage = '';
}

elevatordoor.addEventListener('click', openElevator);


function openElevator() {
    leftdoor.style.transform = "translateX(-100%)";
    rightdoor.style.transform = "translateX(200%)";
// Add an event listener to detect when the transition ends
leftdoor.addEventListener('transitionend', navigateToNextPage);
}

const pageContent = document.getElementById('page-content')

function navigateToNextPage(event) {
    if (event.propertyName === 'transform') {
        pageContent.innerHTML = ''; // Clear the content

        pageContent.innerHTML = `
            <div class="elevator-container">
                <div class="insideElevator"></div>
                <div class="lcdscanner" id="lcdscanner">
                    <div class="scanline"></div>
                </div>
                <div class="lcd">
                    <div class="lcdlabel" id="lcdlabel1"><p>PLEASE SELECT YOUR DESTINATION</p></div>
                    <div class="floor" id="profile"><p>PROFILE</p></div>
                    <div class="floor" id="skills"><p>SKILLS</p></div>
                    <div class="floor" id="projects"><p>PROJECTS</p></div>
                    <div class="floor" id="certificate"><p>CERTIFICATES</p></div>
                    <div class="lcdlabel" id="lcdlabel2"><p>Koalo's Secret Lab</p></div>
                </div>
                <div class="leftdoor" id="insideElevator-leftdoor"></div>
                <div class="rightdoor" id="insideElevator-rightdoor"></div>

                
            </div>`;

        // Remove existing script if it exists
        const existingScript = document.getElementById('insideElevator-script');
        if (existingScript) {
            existingScript.remove();
        }

        

        // Create and append the new script
        const script = document.createElement('script');
        script.src = 'Scripts/insideElevator.js';
        script.id = 'insideElevator-script';
        document.body.appendChild(script);
        
        script.onload = () => {
            const fullscreenButton = document.getElementById('fullscreenButton');
            if (fullscreenButton) {
                fullscreenButton.addEventListener('click', handleButtonClick);
            }
        };
    }
}
