const pageContent = document.getElementById('page-content');


function navigateToNextPage(event) {
    console.log('Transition event detected:', event.propertyName); // Debugging line

    if (event.propertyName === 'transform') {
        console.log('Clearing and replacing content...'); // Debugging line
        pageContent.innerHTML = ''; // Clear the content

        pageContent.innerHTML = `
        <div class="elevator-container">
            <div class="insideElevator"></div>
            <div class="lcdscanner">
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

            <button class="fullscreen-button" id="fullscreenButton">
                <div class="sign"></div>
                <div class="text">Enter Fullscreen</div>
            </button>
        </div>
            `;
            
    }
}

