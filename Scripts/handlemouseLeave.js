// Handle mouse leave event

    function handleMouseLeave() {
        // Implement mouse leave interaction logic
        if (!body.classList.contains('night')) {

            const trackingAreaRect = trackingFixedArea.getBoundingClientRect();
            head.style.transform = `rotate(0deg)`;
            eyes.forEach(eye => {
                const leftPupil = document.getElementById('left-eye-pupil');
                const rightPupil = document.getElementById('right-eye-pupil');
                leftPupil.style.transform = `translate(3px, 2px)`;
                rightPupil.style.transform = `translate(-3px, 2px)`;
            });

            if (trackingAreaRect.top >= 0) {
                character.style.transform = `translateY(0px)`;
            } else {
                character.style.transform = `translateY(130px)`;
            }
        }
        else
        {
            character.style.transform = `translateY(100px)`;
        }
    }

    trackingArea.addEventListener('mouseleave', handleMouseLeave);