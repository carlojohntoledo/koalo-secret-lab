(funtion() {
    function scrollH(e){
        e.preventDefault();
        e = window.event || e;
        let delta = Math.max(-1, Math.min(1, (e. wheelDelta || -e.detail)));
        document.querySelector('.trackingArea').scrollLeft -= (delta * 40);
    }

    if(trackingArea.addEventListener) {
        trackingArea.addEventListener('mousewheel', scrollH, false);
        trackingArea.addEventListener('DOMMouseScroll', scrollH, false)
    }
})