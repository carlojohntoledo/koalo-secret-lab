
const pageContent = document.getElementById('page-content')

function enterElevator(event) {
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
            initializeElevator();
            if (fullscreenButton) {
                fullscreenButton.addEventListener('click', handleButtonClick);
            }
        };
    }
}
