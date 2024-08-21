// main.js
document.addEventListener('DOMContentLoaded', () => {

    // Initialize animations
    blink(eyes);

    document.addEventListener('click', (event) => {
        if (isDizzy) {
            event.stopPropagation();
            event.preventDefault();
            eyes.forEach(eye => {
                eye.style.display = 'none'; // Ensure the eyes remain hidden during dizzy state
            });
        }
    });


    // Event listeners for interactions
    character.addEventListener('click', () => {
        triggerWavingAnimation();
        // scrollToTop();
    });

    // // Event listeners for menu buttons hover
    // menuButtons.profile.addEventListener('mouseenter', () => moveCharacterToButton(menuButtons.profile));
    // menuButtons.skills.addEventListener('mouseenter', () => moveCharacterToButton(menuButtons.skills));
    // menuButtons.projects.addEventListener('mouseenter', () => moveCharacterToButton(menuButtons.projects));
    // menuButtons.contact.addEventListener('mouseenter', () => moveCharacterToButton(menuButtons.contact));

    

    // // Adding event listeners to each button
    // menuButtons.profile.addEventListener('click', () => scrollToSection(sectionsIDs.profileSection));
    // menuButtons.skills.addEventListener('click', () => scrollToSection(sectionsIDs.skillsSection));
    // menuButtons.projects.addEventListener('click', () => scrollToSection(sectionsIDs.projectsSection));
    // menuButtons.contact.addEventListener('click', () => scrollToSection(sectionsIDs.contactSection));

    


    // document.addEventListener('scroll', () => {
 
    //     const scrollY = window.scrollY;
        
    
    //     // Adjust the speed factor to control the movement speed of the background
    //     const speedFactor = 0.5;
    //     const rotationAngle = scrollY * speedFactor;
    //     // Calculate the new background position
    //     const backgroundPositionX = -scrollY * speedFactor;
    
    //     // Update the background position
    //     chainContainer.style.backgroundPositionX = `${backgroundPositionX}px`;
    //     gears.forEach(div => {
    //         div.style.transform = `rotate(${rotationAngle}deg)`;
    //     });
        
    // });
    // Other main logic, event listeners, and initialization
});


document.addEventListener('DOMContentLoaded', () => {
    if (isLandscape()) {
        preloadSomeResources().then(() => {
            setTimeout(() => {
                document.getElementById('intro-screen').classList.add('fade-out');
                setTimeout(() => {
                    document.getElementById('intro-screen').style.display = 'none';
                    document.getElementById('main-menu').style.display = 'flex';
                }, 3000);
            }, 3000);
        });
    } else {
        document.getElementById('main-menu').style.display = 'flex';
    }
});

document.getElementById('enter-button').addEventListener('click', () => {
    document.documentElement.requestFullscreen().then(() => {
        document.getElementById('main-menu').style.display = 'none';
        document.getElementById('loading-screen').style.display = 'flex';
        preloadRemainingResources().then(() => {
            setTimeout(() => {
                document.getElementById('loading-screen').classList.add('fade-out');
                setTimeout(() => {
                    document.getElementById('loading-screen').style.display = 'none';
                    document.getElementById('first-scene').style.display = 'flex';
                }, 3000);
            }, 1000);
        });
    });
});

function isLandscape() {
    return window.innerWidth > window.innerHeight;
}

function preloadSomeResources() {
    const resources = [
        'Images/profilelaboratory.png',
        'Images/title.png'
 
        // Add paths to initial resources here
    ];

    const promises = resources.map(resource => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = resource;
            img.onload = () => resolve(resource);
            img.onerror = () => reject(resource);
        });
    });

    return Promise.all(promises);
}

function preloadRemainingResources() {
    const resources = [
        'Images/Bar.png',
        'Images/bookshelf.png',
        'Images/chimni.png',
        'Images/door.png',
        'Images/elevator.png',
        'Images/elevatorleftdoor.png',
        'Images/elevatorrighdoor.png',
        'Images/koalo.png',
        'Images/koalo2.png',
        'Images/koalo2bodynohead.png',
        'Images/Koalo2Ears.png',
        'Images/koalo2head.png',
        'Images/koalo2HeadDizzy.png',
        'Images/koalo2HeadHappy.png',
        'Images/koalo2leftarm.png',
        'Images/koalowavingbody.png',
        'Images/leftshelftrophies.png',
        'Images/photo.png',
        'Images/plant.png',
        'Images/profilelaboratory.png',
        'Images/puzzlebox.png',
        'Images/puzzleboxfull.png',
        'Images/rightshelftrophies.png',
        'Images/sofa.png',
        'Images/switch.png',
        'Images/window2.png',
        'Images/woodenhousebackground.png'
        // Add paths to other resources here
    ];

    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    let loadedResources = 0;

    const promises = resources.map(resource => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = resource;
            img.onload = () => {
                loadedResources++;
                const progress = Math.floor((loadedResources / resources.length) * 100);
                progressBar.style.width = progress + '%';
                progressText.textContent = progress + '%';
                resolve(resource);
            };
            img.onerror = () => {
                loadedResources++;
                const progress = Math.floor((loadedResources / resources.length) * 100);
                progressBar.style.width = progress + '%';
                progressText.textContent = progress + '%';
                reject(resource);
            };
        });
    });

    return Promise.all(promises);
}