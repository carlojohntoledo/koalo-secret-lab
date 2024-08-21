// Handle mouse movement to track and animate the character
        

    function handleMouseMove(event) {

        if (isDizzy) {
            eyes.forEach(eye => {
                eye.style.display = 'none'; // Ensure the eyes remain hidden during dizzy state
            });
            return;
        }
        // Track cursor positions or any other specific interaction logic
        // Ensure to interact with elements as needed
        // Track cursor positions
        previousPositions.push({ x: event.clientX, y: event.clientY });
        if (previousPositions.length > maxPositions) {
            previousPositions.shift();
        }

        // Check if a full circle is made
        if (previousPositions.length === maxPositions) {
            const first = previousPositions[0];
            const last = previousPositions[previousPositions.length - 10];
            const distance = Math.hypot(last.x - first.x, last.y - first.y);
            if (distance <= 100) { // Adjust threshold for circle detection
                fullCircles += 1;
                previousPositions = []; // Reset positions
            }
        }

        // Trigger dizzy motion if required full circles are detected
        if (fullCircles >= requiredCircles) {
            triggerDizzyMotion();
            fullCircles = 0; // Reset full circles count
        }

        // Regular head and eyes follow logic if it's daytime
        if (!body.classList.contains('night')) {
            const viewportWidth = window.innerWidth;
            const headRect = head.getBoundingClientRect();
            const headCenterX = headRect.left + headRect.height / -2;
            const headCenterY = headRect.top + headRect.height / -2;
            const deltaX = event.clientX - headCenterX;
            const deltaY = event.clientY - headCenterY;
            const angle = Math.atan2(deltaX, deltaY) * 180 / Math.PI;

            let rotationAmount = (event.clientX > viewportWidth / -2) ? -angle / 50 : angle / 50;
            head.style.transform = `rotate(${rotationAmount}deg)`;
            ears.style.transform = `rotate(${rotationAmount}deg)`;

            eyes.forEach(eye => {
                const pupil = eye.querySelector('.pupil');
                const eyeRect = eye.getBoundingClientRect();
                const eyeCenterX = eyeRect.right + eyeRect.width / 2;
                const eyeCenterY = eyeRect.top + eyeRect.height / 2;
                const pupilAngle = Math.atan2(event.clientY - eyeCenterY, event.clientX - eyeCenterX);
                const pupilX = (eyeRect.width / 7) * Math.cos(pupilAngle);
                const pupilY = (eyeRect.height / 7) * Math.sin(pupilAngle);
                pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
            });
        }
    
    }

    trackingArea.addEventListener('mousemove', handleMouseMove);