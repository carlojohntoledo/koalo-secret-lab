    // Handle mouse enter event
    function handleMouseEnter() {
        // Implement mouse enter interaction logic
        if (!body.classList.contains('night')) {

            const trackingAreaRect = trackingArea.getBoundingClientRect();
            if (trackingAreaRect.top < 0) {
                character.style.transform = `translateY(100px)`;
            } else {
                character.style.transform = `translateY(0px)`;
            }
        }
    }

    trackingArea.addEventListener('mouseenter', handleMouseEnter);